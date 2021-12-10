# GithubActions1

- [官方链接之快速入门](https://docs.github.com/cn/actions/quickstart)
- [workflow语法文档](https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions)

## 是什么

github 自带的 CI/CD 工具，对应的 gitlab 中也有`gitlab-ci`。通过其你可以对仓库进行自动化、自定义的构建、测试、部署等操作。也就意味着，当你推送一次代码之后，github 就可以替你完成构建、测试、部署等操作。

## 基本构成

 当你的仓库发生某个**事件**时，你可以设置一个**工作流**来响应它（或者说被某个事件触发）。如一个推送请求或者一个`issue`被创建。工作流中可以包含一个或多个**作业**，这些作业可以按照顺序执行，也可以并行执行。每个作业都运行在它自己的虚拟机中，每个**作业**会包含一个或多个**步骤**，你可以在步骤中运行一个脚本，也可以定义或运行另一个可以重复使用的，且可以简化你的工作流程的`action`

## 关于`outputs`

