# GitHubAction概述

- [官方链接之快速入门](https://docs.github.com/cn/actions/quickstart)
- [workflow语法文档](https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions)

## 是什么

github 自带的 CI/CD 工具，对应的 gitlab 中也有`gitlab-ci`。通过其你可以对仓库进行自动化、自定义的构建、测试、部署等操作。也就意味着，当你推送一次代码之后，github 就可以替你完成构建、测试、部署等操作。

## 基本构成

 当你的仓库发生某个**事件**时，你可以设置一个**工作流**来响应它（或者说被某个事件触发）。如一个推送请求或者一个`issue`被创建。工作流中可以包含一个或多个**作业**，这些作业可以按照顺序执行，也可以并行执行。每个作业都运行在它自己的虚拟机中，每个**作业**会包含一个或多个**步骤**，你可以在步骤中运行一个脚本，也可以定义或运行另一个可以重复使用的，且可以简化你的工作流程的`action`

## 基本示例
```yml
# .github/workflows/demo.yml
# 定义工作流名称，其会出现在 Github 仓库的标签页中
name: demo-for-github-actions
# 指定这个工作流的触发条件，这里使用了`push`事件，因此每当有人推送更改到仓库时工作流就会被触发。这里每一个分支发生改变时都会触发，也可以指定分支
on: [push]
# 将所有运行在该工作流中的**作业**组合在一起
jobs:
# 定义一个名称为 demo-jobs 的作业，它的子键值定义其属性
    demo-jobs:
        # 设置该作业运行在最新版的 ubuntu runner 上
        runs-on: ubuntu-latest
        # 将所有运行在 demo-for-github-actions 作业中的步骤组合在一起
        steps:
            # `uses`指定该步骤使用`actions/checkout` action。该 action 将会检出你的仓库到 runner 中，允许你执行脚本
            - uses: actions/checkout@v2
            # 使用`actions/setup-node` action 来安装指定版本的 Node.js 环境
            - uses: actions/steup-node@v2
              with:
                node-version: '14'
            # run 关键字告诉作业在 runner 上执行命令
            - run: node -v
```

## 关于 step 的一些用法

### 设置 outputs

> 语法：`::set-output name={name}::{value}`

如， 设置某一 step 输出为 git 最新提交内容：

```yml
- id: set_out1_step
  run: echo "::set-output name=commit::git log -1 --pretty='%s'"
```

注意，以上的设置`outputs`方式其实是**工作流命令**(Workflow commands)

### 使用 if

在 step 中使用 if 来判断条件是否满足，以此决定是否执行当前步骤。

如使用`step.if`判断该上述输出有无需要的内容，比如是否包含关键字`:rocket:`

```yml
- name: test if
  if: contains(steps.set_out1_step.outputs.commit == ':rocket:')
```