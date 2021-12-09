# GithubActions和vuepress

本站点使用`Vuepress`，我希望使用每次推送时自动构建目录并进行部署。

## 期望的效果

本地完成文档并提交，推送后 github 自动触发构建及部署

可以根据提交信息中是否包含指定的命令，如`:rocket:`来确定是否需要继续执行构建及部署

## 实现步骤

构建思路：获取代码、设置 node 环境、安装依赖、执行构建`npm run build`、推送`dist`到`gh-page`分支。

### 构建部署

1. 新建工作流 workflow，即在仓库下建立一个 git actions 文件：`.github/workflows/demo.yml`
2. 指定工作流名称、分支等，这里使用 master 分支，意味着所有的新推送都会调用起 actions，可以根据需要设置不同分支
    ```yml
    name: VuePress
    on:
        push:
            branches:
                - master
    ```
3. 使用官方`action`检出代码
    ```yml
    - name: Checkout
      uses: actions/checkout@v2.4.0
    ```
4. 使用官方`action`配置 node 环境
    ```yml
    - name: Setup Node.js env
      uses: actions/setup-node@v2
      with:
        node-version: '14'
        cache: 'npm' # use cache.
    ```
5. 安装依赖以及执行构建
    ```yml
    - name: install dep and build
      run: |
        npm install
        npm run build
    ```
6. 使用三方`action`执行发布操作（默认会发布到当前仓库的对应分支），如果需要发布到其他仓库等，需要配置`access_token`
    ```yml
    - uses: JamesIves/github-pages-deploy-action@4.1.7
      with:
        branch: gh-pages
        folder: dist # 默认的构建后输出目录
    ```

## 根据提交内容决定是否构建

判断流程：抓取代码->取出最近一次提交->判断是否有需要构建的标志。

假设约定当提交信息以`:rocket:`开头时，执行构建。主要需要解决两个问题：    

1. 获取最新提交的首个单词
2. 判断所获取单词是否为`:rocket:`

### 获取最新提交的首个单词

在步骤中执行：`git log -1 --pretty='%s' | cut -f1 -d ' '`可以获取提交的首个单词

但是如何在其他步骤中获取提交的首个单词来判断是否符合要求呢？

这里使用`steps.ouputs`来达到该目的：在步骤(`step_judge`)中获取最近提交的首个单词，并作为该步骤的输出，之后的步骤可以通过引用该步骤`step_judge`的输出变量来判断是否符合要求。

step 具体配置：

```yml
- name: judge_buildornot
  id: judge_buildornot
  run: echo "::set-output name=needbuild::$(git log -1 --pretty='%s' | cut -f1 -d ' ')"
```

### 判断所获取单词

使用 Github Actions 中 `step.if` 来判断是否符合要求，以及决定是否执行对应的步骤，具体配置如下：

```yml
- name: build
  if: steps.judge_buildornot.outputs.needbuild == ':rocket:'
  run: |
    npm install
    npm run build
```