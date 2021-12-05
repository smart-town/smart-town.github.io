# packge.json 中的一些字段记录

## `files`字段

`{Array | String}`，默认值为`*`

> 当别人安装你的包时，所需要安装的文件

遵循规则：
1. 命名规则和`.gitignore`一样，可以是文件，也可以是文件夹，且支持`glob`规则：`*`,`**/*`等
2. 可以在根目录添加`.npmignore`来排除一些文件和文件夹
3. 如果`.npmignore`缺省，则使用`.gitignore`代替
4. 不通过`.npmignore`或`.gitignore`排除`files`属性中的文件

不管如何配置，以下文件**始终**包含在包中：

- `package.json`
- `README`
- `CHANGES / CHANGELOG / HISTORY`
- `LICENSE / LICENCE`
- `NOTICE`
- The file in the `main` field.

另外，`.git`,`package-lock.json`等文件始终不会包含在包中。

## `main`

`{String}`，默认值为`./index.js`。

> 其他项目引用该项目时的入口文件

如：你的项目名为`foo`， package.json 中的`main: "lib/index.js"`，当其他项目引用你的项目：`require("foo")`，实际上引用的就是`lib/index.js`文件