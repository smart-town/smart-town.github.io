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