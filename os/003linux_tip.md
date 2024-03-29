# Linux使用小记

## 开机自启动
我的服务器笔记本电池坏掉了,一旦要挪个地方或者停个电,就会关机,之后再次开机时对于一些非服务型的软件总是要重新打开,比如: frp, geth, clash

小记一下设置开机启动的几个方法,以备下次忘了.

> [原文](https://www.cnblogs.com/Areas/p/13439000.html)

- 启动脚本放在`/etc/profile.d`下,系统启动后会自动执行该目录下的所有脚本
- 原文其他几个未实际用过,暂时不予记录

## shell脚本特殊变量

变量 | 说明
------ | -------
`$!` | 上一个后台运行进程的进程号（我感觉可以直接用来生成.pid文件方便快速删除）
`$$` | 当前 shell 的进程号
`$?` | 上一个指令的返回值
`$_` | 上一个指令或脚本的**最后一个参数**
## 端口检测

### nc

测试其他机器端口状况，或传个文件也行。

语法：`nc [options] hostname port[s] [ports] ...`

- 端口扫描：`nc -zvn ip 21-25` 运行在 TCP 或 UDP 模式，默认 TCP，使用`-u`调整为 UDP。
    - `z` 参数使用 0 IO，连接成功后立即关闭，不进行数据交换
    - `v` 参数：详细输出
    - `n` 参数：不使用 DNS 反向查询 IP 域名
- Server: 服务端：`nc -l port`; 客户端：`nc ip port`
- 文件传输：服务端：`nc -l port < test.txt`; 客户端：`nc -n ip port > test.txt`
