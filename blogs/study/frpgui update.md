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

## 2020年10月10日

程序发给朋友测试的时候出了一点问题，似乎是程序卡住无法判断是否启动成功。怀疑是由于设备性能差异，frpc.log 文件还没生成就开始检测了。

摆在我面前的有两个解决方案，一个是继续延长sleep时间，或是换一种能更快获取日志输出的方法，也就是优化。

我选择了后者

之前使用`.read()`获取输出时会导致阻塞，因为它是读取全部输出，而程序并未运行完毕。

我需要一种获取实时输出的方式，于是我选择了`subprocess`模块，subprocess模块可以理解为os模块的升级版，可以实现os模块不能实现的功能，使用stdout.readline()就可以获得第一行的输出，那么执行三次就能获得三行的输出，fepc.exe的日志通常是三行的。我也有试图研究过能不能获取实时输出的方法，但最后还是有些问题。

最后的代码是把

```python
def run(self):
    os.popen('frpc.exe')
    if os.path.exists("frpc.log"):
        time.sleep(1)  # 睡眠0.5秒
        with open("frpc.log", "r") as f:
            self.log = str(f.readlines()[-3:])
```

改成了

```python
	self.text = ScrolledText(padding=10, height=6, autohide=True)
    self.text.pack()

...

def run(self):
    cmd = subprocess.Popen(["frpc.exe"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(0.1)  # 睡眠0.1秒,预防卡顿造成的意外
    self.log = cmd.stdout.readline().decode() + cmd.stdout.readline().decode() + cmd.stdout.readline().decode()  # stdout.readline()读取一行  .decode()解码
    self.text.insert(1.0, self.log)
```

增加了显示日志的功能
