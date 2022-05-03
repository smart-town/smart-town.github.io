# PowerShell 小技巧收集

版本：`PowerShell 7`

## 关于快速切换目录

意外发现，`cd -` 和 `cd +`这对有用的命令。**减号让你一直可以回到以前的目录**，**而加号可以让你回到以前后再回到你现在的目录**，可以多次使用。

举例：
```shell
cd C:/Users
cd D:/code
cd D:/code/LabOfST

cd -
pwd #D:/code
cd -
pwd #D:/Users
cd +
pwd #D:/code
cd +
pwd #D:/code/LabOfST
```

## 关于默认配置文件

[官网](https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.2)

快速设置个人自定义命令、函数

1. 对于所有用户所有平台：notepad $PROFILE.AllUsersAllHosts
2. 对于当前用户当前主机：notepad $PROFILE

## 设置软连接

针对个人配置文件，可以方便地更改一处，到处生效，免得复制。clone 代码后，直接原地更改即可。
New-Item -Path C:\LinkDir -ItemType SymbolicLink -Value F:\RealDir
