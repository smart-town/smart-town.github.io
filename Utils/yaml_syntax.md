# yaml

YAML 语法比较简洁直观，特点是**使用空格表达层次结构**。多用于**配置文件**，一般以`.yml`为后缀。

> [知乎原文](https://zhuanlan.zhihu.com/p/145173920)，此处只摘抄部分

## 基本语法

- 大小写敏感
- 用缩进表示层级关系
    - 缩进**只能用空格**
    - 空格**数量不重要**，但是同一层级元素必须对齐
- 用`#`表示注释
- 一个文件可以包含多个文件内容
    - 用`---`三个破折号表示一份内容开始
    - 用`...`三个小数点表示内容结束（**非必须**）

```yml
---
one: 1
# 其他内容...
...

---
two: 2
```

## 数据结构类型

### 对象
- 以键值对形式出现的数据，
    ```yml
    key: value
    # {"key": "value"}
    ```
- 支持多层嵌套（缩进表示层级）：
    ```yml
    key:
        child1: v1
        child2: v2
    # {key: {child1: v1, child2: v2}}
    ```
- 支持**流式风格**，用花括号包裹，逗号加空格分隔，类似 JSON
    ```yml
    key: {child1: v1, child2: v2}
    # JSON: {"key": {"child1": "v1", "child2": "v2"}}
    ```

### 数组

- 一组以**区块格式**开头的数据组成一个数组（即**破折号**加**空格**）
    ```yml
    values: 
        - value1
        - value2
    # "values": ["value1", "value2"]
    ```
- 也支持**内联格式**，方括号包裹，逗号加空格分隔，类似 JSON
    ```yml
    values: [v1, v2]
    # "values": ["v1", "v2"]
    ```
- 多维数组
    ```yml
    values:
        -
            - v1
            - v2
        - 
            - v3
            - v4
    # "values": [["v1", "v2"], ["v3", "v4"]]
    ```

### 基本数据类型

#### 字符串

字符串一般不需要**引号**包裹，但是如果其中使用了`\`开头的转义字符就要使用引号包裹

使用**竖线**`|`表示**保留换行**，每行的缩进和行尾空白符会被去掉，但是额外的缩进被保留
```yml
lines: |
    line1
    line2
        line3
            line4
    line5
# "lines": "line1\nline2\n    line3\n        line4\nline5"
```

#### 布尔值

`true, True, TRUE`都为真，对应的`false, False, FALSE`都为假。

#### 整数

支持二进制表示。
```yml
int:
  - 666
  - 0001_0000 # 二进制
```

#### 空值

`null, Null, ~`都是空，不指定值默认也是空。

```yml
nulls:
    - null
    - NULL
    - ~
    -
# nulls: [null, null, null, null]
```