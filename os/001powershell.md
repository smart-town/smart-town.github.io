# PowerShell 小结

本文主要是[PowerShell101](https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/00-introduction)的简单笔记

是什么呢？以下摘自[官网](https://docs.microsoft.com/zh-cn/powershell/scripting/overview)
> PowerShell 是一种跨平台的任务自动化解决方案，由命令行、脚本语言和配置管理框架组成。其可以在 Windows、Linux、macOS 上运行

其与常见的 Shell 很明显的一个不同在于，大多数其他 shell 仅接受并返回**文本**，但是 PowerShell 接受并返回`.Net`对象

此外，PowerShell 命令称为`cmdlet`，即`command-let`。即 PowerShell 的内置命令。

## 帮助系统

常见的几个用来让你查找、使用命令的**帮助命令**：`Get-Help`、`Get-Command`

### Get-Help

可以**帮助你找到命令**，也可以**帮助你了解命令的使用方式**。如果只找到一个结果，则会显示帮助主题本身，而不显示命令列表。

有一个可以辅助函数`Help`，其会将`Get-Help`结果进行分页查看。

有用的参数:

- `-Parameter`: 如`help Get-Help -Parameter Name`，仅仅返回`Name`参数在帮助中的信息
- `-ShowWindow`: 在单独的窗口中查看命令信息。此外也可以使用`Out-GridView`命令单独在窗口中查看信息。如`help Get-Command -Full | Out-GridView`

### Get-Command

帮助**查找命令**，不带任何参数则返回所有命令列表。

常用的几个参数：
- `-Name`: 可以使用通配符，如`Get-Command -Name *service*`
- `-CommandType`: 命令类型，如`Get-Command -CommandType Function,Alias`
- `-Noun`: 名词部分匹配，可以使用通配符。

## 对象、属性和方法

### Get-Member

用于获取命令结果对象的属性、方法。

如： `Get-Service -Name w32time | Get-Member`    
获取命令结果后，会有命令结果的**对象类型**信息，可以使用`Get-Command -ParameterType TypeName`来查找能够处理该结果的其他命令。

此外，显示出来的命令结果信息总是要比实际内容要少，要看到所有的或者选择自己需要的部分，可以使用：`Select-Object`命令。如：`Get-Service -name w32time | select-object -Property *`。

