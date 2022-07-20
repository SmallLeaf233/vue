---
title: 用python在文件中指定位置插入内容
date: 2022-07-20
cover: https://s2.loli.net/2022/07/21/Grv2sBTWtNzdlCa.jpg
tags:
 - python
categories:
 - 学习
---

# 用python在文件中指定位置插入内容

我想要写一个python程序，能实现在文件中的指定位置插入内容，比如说插入到 url: 的后面。<br>
然后我想偷懒嘛，看看有没有大佬写好的我直接拿过来用。<br>
我就上csdn搜，还真有，一万六阅读的文章，应该很强，这是他的源码：

```python
with open("d:/bbb/test.txt","rt") as f:
    content=str(f.readlines())
    tab=re.search('\"',content)
    pos=tab.start()
    print(pos)

    insert=input("输入要插入的内容：")
    with open("d:/bbb/test.txt","wt") as f:
        content=content[:pos+1]+insert+content[pos+1:]
        f.writelines(content)
with open("d:/bbb/test.txt","rt") as f:
    print(f.read())
```

作用是指定把输入的内容插入到文件中的双引号位置后。<br>
我稍微改了一下，变成这样：

```python
import re
with open("test.txt","r") as f:
    content = str(f.readlines())
    tab = re.search("url:",content)
    pos = tab.start()
    print(pos)

    insert = input("输入要插入的内容：")
    with open("test.txt","w") as f:
        content = content[:pos + 4] + insert + content[pos + 4:]
        f.writelines(content)
with open("test.txt","r") as f:
    print(f.read())
```

输出结果：

```
35
输入要插入的内容：1234
['abcdeefghijklmnopqrstuvwxyz\n', 'url:1234 \n', 'abcdeefghijklmnopqrstuvwxyz']
```

???<br>
结果为什么是列表的形式？<br>
于是我又仔细看了一下代码，把注释加上，发现问题很大：

```python
import re
with open("test.txt","r") as f:
    content = str(f.readlines())    # 读取"test.txt"的所有行，输出列表，将content设置为字符串
    tab = re.search("url:",content)
    pos = tab.start()               # 找到"url:"位于第几个字符串
    print(pos)

    insert = input("输入要插入的内容：")
    with open("test.txt","w") as f:
        content = content[:pos + 4] + insert + content[pos + 4:]    # 将内容插入到content中
        print(type(content))    # 打印后发现此时content是字符串
        print(content,"\n")
        list1 = list(content)   # 试图将其设置为列表
        print(type(list1))
        print(list1,"\n")       # 然后打印出来这么个b玩意
        f.writelines(list1)     # 提取列表项写入"test.txt"
with open("test.txt","r") as f:
    print(f.read())             # 读取"test.txt"
```

输出结果：

```
35
输入要插入的内容：1234
<class 'str'>
['abcdeefghijklmnopqrstuvwxyz\n', 'url:1234\n', 'abcdeefghijklmnopqrstuvwxyz']

<class 'list'>
['[', "'", 'a', 'b', 'c', 'd', 'e', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '\\', 'n', "'", ',', ' ', "'", 'u', 'r', 'l', ':', '1', '2', '3', '4', '\\', 'n', "'", ',', ' ', "'", 'a', 'b', 'c', 'd', 'e', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "'", ']']  

['abcdeefghijklmnopqrstuvwxyz\n', 'url:1234\n', 'abcdeefghijklmnopqrstuvwxyz']
```

这……<br>
所以我这是把字符串拆开来又了组回去，兜兜转转又回到的原点。<br>
难道就没有什么办法能把content从字符串变回列表吗？<br>
这时我一拍脑袋，我为什么要把content设置为字符串呢，直接让它一开始就是列表不就好了？

```python
import re
with open("test.txt","r") as f:
    content = f.read()
    tab = re.search("url:",content)
    pos = tab.start()
    insert = input("输入要插入的内容：")
    with open("test.txt","w") as f:
        content = content[:pos + 4] + insert + content[pos + 4:]
        f.writelines(content)
with open("test.txt","r") as f:
    print(f.read())
```

输出结果：

```
输入要插入的内容：1234
abcdeefghijklmnopqrstuvwxyz
url:1234
abcdeefghijklmnopqrstuvwxyz
```

终于搞定了！<br>
写代码真的不能太死脑经，要多灵活变通。<br>
要有自己的想法，别人的不一定好。<br>
还有，

<img src="https://s2.loli.net/2022/07/21/EBFOyvNQwDkMXmY.png" alt=" " style="zoom:50%;" />
