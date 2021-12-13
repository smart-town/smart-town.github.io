# 密码管理器 KeePass

> [原文博客](https://www.rmnof.com/article/keepass-password-manager/)

KeePass 是一个开源密码管理软件。同样的有 1Password 和 LastPassword 两个商业密码管理工具。

KeePass 可以让你完全掌握个人的密码数据库。

## 资源列表

- [github windows keypass](https://github.com/keepassx/keepassx) 原始 keepass 仓库（猜测），[快捷官方下载链接](https://keepass.info/download.html)
- [github keypassxc](https://github.com/keepassxreboot/keepassxc) 跨 Linux、Mac、Windows 平台的 keypass 客户端 [快捷官方下载链接](https://keepassxc.org/download/)
- [github android keypass](https://github.com/PhilippC/keepass2android) Android 端仓库，可以从 goole app store 下载
- iphone 似乎有 `keepass touch`

## 我的使用流程

### 我的环境

1. Windows
2. Android

### 基本使用

1. Windows 使用 keypassx
2. Android 使用 keypass2android
3. [创建坚果云账号](https://www.jianguoyun.com/)，并在 右上角 -> 账户信息 -> 安全选项 第三方应用管理中添加 用于 dav 链接的密码如 123
4. 可以在不安装坚果云客户端的前提下，直接在 windows 资源浏览器中添加**网络位置**，输入网址`https://dav.jianguoyun.com/dav/`，再输入你在上面建立的密码 123，即可查看你的坚果云内容，另外建议设置一个单独的根目录用来存储你的数据，如`appdata`
5. 打开 keypassx 并新建数据库，存储位置选择你的坚果云映射盘符中的`appdata`目录，输入密码信息等内容
6. 使用 keypass2android，打开数据库，选择 Http(WebDav)，输入你的`dav.jianguoyun.com/dav/`，坚果云用户名，你设置的密码 123，完成之后选择你保存的数据库文件即可。