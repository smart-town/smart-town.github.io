# 查找文件

经常面对的一个重复任务就是查找文件或目录，所有的类 Unix 系统都有一个名为`find`的工具，其是 shell 上用于查找文件的绝佳工具，`find`会递归地搜索符合条件的文件。

除了能够列出所寻找的文件之外，`find`还能对查找的文件执行操作，这能极大简化一些单调的任务。

尽管`find`用途广泛，但是语法较难记忆，你可以设置`alias`别名来简化操作。

此外还有替代品`fd`命令，它是一个更简单、快速、友好的`find`替代品。有很多不错的默认设置如输出着色，默认支持正则匹配等

此外，还有一个更高效的方法，不会每次都搜索文件而是通过编译索引或建立数据库的方式来实现更快搜索的`locate`命令

## 常用示例

```shell
# 查找所有名称为 src 的文件夹
find . -name src -type d
# 查找所有文件夹路径包含 test 的 python 文件
find . path '*/test/*.py' -type f
# 查找前一天修改的文件
find . -mtime 1
# 查找大小在 500k 到 1M 的 tar.gz 文件
find . -size +500k -size -1M -name '*.tar.gz'

# 删除扩展名为 .tmp 的文件
find . -name '*.tmp' -exec rm {} \;
# 查找全部 png 文件并将其转换为 jpg
find . -name '*.png' -exec convert {} {}.jpg \;
```