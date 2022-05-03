# 系统服务

`systemctl` 命令是`systemd`工具，负责控制`systemd`系统和服务管理器。而`systemd`系统是一个系统管理守护进程、工具和库的集合，取代`systemV`初始进程。

`systemd`的功能是用于集中管理和配置 UNIX 系统。在 Linux 生态中，Systemd 被部署在了大多数的标准 Linux 发行版中，其通常是所有其他守护进程的父进程，但是并非总是如此。

## 基本检查

`systemctl --version` 看看系统中有无`systemd`

## 自定义 service 文件

### 关于`Type`的定义。

- 默认`simple`
- `forking`
