---
title: frp GUI客户端
date: 2022-07-30
cover: https://s2.loli.net/2022/07/31/noxuIh6YAjSry9q.png
tags:
 - frp
 - python
 - tkinter
categories:
 - 学习
---

# frp GUI客户端

之前的frp客户端还是命令行的形式，朋友问我能不能做GUI<br>
我打算试试，就花了几天学了下 tkinter，试着做了一个：

```python
import os
from tkinter import *
from tkinter import messagebox


class Application(Frame):

    def __init__(self, master=None):
        super().__init__(master)
        self.master = master
        self.pack()
        self.createWidget()

    def createWidget(self):
        # 输入ip
        self.labelIp = Label(self, text="本地IP")
        self.labelIp.grid(row=0, column=0, sticky=SW)
        self.ip = StringVar()
        self.entryIp = Entry(self, textvariable=self.ip)
        self.entryIp.grid(row=1, column=0)
        self.ip.set("127.0.0.1")

        # 输入端口
        self.labelPort = Label(self, text="端口")
        self.labelPort.grid(row=0, column=1, sticky=SW)
        self.port = StringVar()
        self.entryPort = Entry(self, textvariable=self.port)
        self.entryPort.grid(row=1, column=1)

        # 隧道名称
        self.labelName = Label(self, text="隧道名称")
        self.labelName.grid(row=2, column=0, sticky=SW)
        self.name = StringVar()
        self.entryName = Entry(self, textvariable=self.name)
        self.entryName.grid(row=3, column=0)

        # 隧道类型
        self.labeltyp = Label(self, text="隧道类型")
        self.labeltyp.grid(row=2, column=1, sticky=SW)
        self.typ = StringVar(self)
        self.typ.set("TCP")
        self.om01 = OptionMenu(self, self.typ, "TCP", "UDP")
        self.om01.grid(row=3, column=1)

        self.btn01 = Button(self, text="创建", command=self.establish)
        self.btn01.grid(row=4, column=0, sticky=EW)
        self.btn02 = Button(self, text="启动", command=self.run)
        self.btn02.grid(row=4, column=1, sticky=W)
        self.btn03 = Button(self, text="停止", command=self.end)
        self.btn03.grid(row=4, column=1, sticky=E)

    def establish(self):
        if self.typ.get() == "TCP":
            typ = "tcp"
        if self.typ.get() == "UDP":
            typ = "udp"
        with open("frpc.ini", "w") as f:
            list = ['[common]\n',
                    'server_addr = 这里是服务器地址\n',
                    'server_port = 7000\n',
                    'token = 这里是密钥\n'
                    '\n',
                    '[' + self.name.get() + ']\n',
                    'type = ' + typ + '\n',
                    'local_ip = ' + self.ip.get() + '\n',
                    'local_port = ' + self.port.get() + '\n',
                    'remote_port = 6001']
            f.writelines(list)

    def run(self):
        os.popen('frpc.exe')
        messagebox.showinfo("启动成功", "您的本地地址：" + self.ip.get() + ":" + self.port.get() + "已映射到服务器地址：[这里是服务器地址]:6001")

    def end(self):
        os.system('chcp 65001')
        os.system('taskkill /F /IM frpc.exe')


if __name__ == '__main__':
    root = Tk()
    root.geometry("300x150+600+250")
    root.title("FRPGUI")
    app = Application(master=root)
    def end():
        os.system('taskkill /F /IM frpc.exe')
        root.destroy()
    root.protocol('WM_DELETE_WINDOW', end)
    root.mainloop()
```

效果：

![](https://s2.loli.net/2022/07/31/niYjMDRZvL3kSta.png)

目前还不太美观

## 遇到的问题

*当然在写代码的时候也遇到了很多问题*

### **启动**

一开始的启动方法，我用的是：

```python
def run(self):
    os.system('frpc.exe')
```

但是点击启动后窗口直接卡住未响应了

![](https://s2.loli.net/2022/07/31/BPTEXJmnkMF9IVW.png)

猜测是因为`os.system` 会将运行结果输出在命令行导致GUI程序无法正确运行<br>
又或者是因为GUI程序需要等`os.system`运行结束才能继续运行，而frpc.exe是持续运行的<br>
于是我选择将代码改成：

```python
def run(self):
    os.system('start cmd /K frpc.exe')
```

打开一个新的cmd窗口来运行frpc.exe<br>
程序果然能正常运行了，但是一个突然出现一个CMD的大黑框真的很丑诶。如果还是会出现CMD窗口，我这GUI界面不是白做了？<br>
尝试用代码将CMD窗口隐藏，但是还是会有一瞬间出现CMD窗口<br>
查阅了os模块的资料后我发现，只要用`os.popen`来运行frpc.exe就不会卡住<br>

```python
def run(self):
    os.popen('frpc.exe')
```

猜测是因为`os.popen`不会将运行结果打印出来，等于是直接在后台运行

### **停止**

虽然加了停止按钮，但是也不能排除不小心把窗口直接关掉的情况<br>
这时frpc.exe仍然在运行，只能在任务管理器里关闭或者是手动kill进程<br>
于是我加了一段代码：

```python
def end():
    os.system('taskkill /F /IM frpc.exe')
    root.destroy()
root.protocol('WM_DELETE_WINDOW', end)
```

监听窗口关闭事件，在窗口关闭前先运行`taskkill /F /IM frpc.exe`来杀死frpc.exe进程

### **检测是否成功启动**

目前我还没有做到，不管是否成功启动，只要按下按钮都会提示启动成功

![](https://s2.loli.net/2022/07/31/A5IrMakJ3HdVxbD.png)

原因是当我试图打印出`os.popen`的值时：

```python
def run(self):
    cmd = os.popen('frpc.exe')
    print(cmd.read())
```

窗口又无响应了<br>
甚至我只是给一个函数赋值为`cmd.read()`都不行

```python
def run(self):
    cmd = os.popen('frpc.exe')
    test = cmd.read()
```

这……
