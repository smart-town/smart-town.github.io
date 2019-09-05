# 远程分支

## 认识

## 关于 push

## 跟踪分支

从一个远程跟踪分支检出一个本地分支会自动创建一个叫做“跟踪分支”（也叫上游分支）。跟踪分支是与远程分支有直接关系的本地分支。如果在一个跟踪分支上输入`git pull`，Git 能够自动识别出去哪一个服务器上抓取、合并到哪一个分支。

当克隆一个仓库时，通常会自动创建一个跟踪`origin/master`的`master`分支。然而，如果愿意的话可以设置其他的跟踪分支：`git checkout -b [branch] [remote]/[branch]`。跟踪其他的远程分支。这十分常用所以提供了快捷方式`--track`：`git checkout --track origin/serverfix`。

修改。。。