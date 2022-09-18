---
title: frp GUI更新改进
date: 2022-09-07
cover: https://s2.loli.net/2022/09/17/aU3jSfwPN7kQlop.png
tags:
 - frp
 - python
 - tkinter
categories:
 - 学习
---

# frp GUI更新改进

## 2022年9月7日

在之后我又对程序进行了一些小修小补<br>
我想着给 frpGUI 做一个缓存功能，可以读取上一次输入的内容<br>
这样就不用每次都从头输入那么麻烦<br>
实现起来应该不难，于是我加了这么一段代码

```python
if os.path.exists("frpc.ini"):  # 首先判断是否存在frpc.ini文件
    with open("frpc.ini", "r") as f:
        self.cache = (f.readlines())  # 以列表的形式获取每一行
        
    self.port.set(self.cache[9][13:])  # 去掉不需要的字符
    self.name.set(self.cache[6].strip('[]'))
    self.typ.set(self.cache[7][7:].swapcase())
    self.remote.set(self.cache[10][14:])
```

首次运行很成功<br>
但是，第二次运行时显示就乱了<br>
我一看配置文件，它的格式也乱了，多了许多空行<br>
经过一番排查我才发现，使用`readlines()`获取每一行时，会在结尾带一个`'\n'`<br>
那么只需要在结尾再加上一个`.strip()`就行

```python
self.port.set(self.cache[9][13:].strip())
self.name.set(self.cache[6].strip('[]\n'))
self.typ.set(self.cache[7][7:].swapcase().strip())
self.remote.set(self.cache[10][14:].strip())
```

还修改了之前代码里一个比较蠢的地方：

```python
def establish(self):
	if self.typ.get() == "TCP":
		typ = "tcp"
	if self.typ.get() == "UDP":
		typ = "udp"
```

大小写转换直接用`swapcase`函数就行
