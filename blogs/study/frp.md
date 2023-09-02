---
title: frp内网穿透
date: 2022-07-22
cover: https://s2.loli.net/2022/07/31/VaHXi13vecRmbWu.png
tags:
 - frp
 - python
 - pyinstaller
categories:
 - 学习
---

# frp内网穿透

一开始只是为了和朋友联机玩Minecraft，只是在github上把[frp](https://github.com/fatedier/frp)的压缩包下下来进行了最简单的配置

服务端配置：

```
[common]
bind_port = 7000
```

客户端配置：

```
[common]
server_addr = 这里是服务器地址
server_port = 7000

[MC]
type = tcp
local_ip = 127.0.0.1
local_port = 12345
remote_port = 6001
```

然后分别启动就能用了，就是这么简单<br>

::: warning 2023年6月20日添
我想打一顿当时写这个博客的自己<br>
为什么没有讲清楚到底应该怎么启动<br>
我找了半天是什么导致的token不匹配<br>
万万没想到是启动这一步出了问题

服务器端的frps启动时，命令应该是 ./frps -c ./frps.ini<br>
直接使用 ./frpc 启动的话使用的是默认配置

:::


但是我的世界的联机的端口号每次都会变，如果每次都要手动修改配置文件就显得很麻烦<br>
我把这样的客户端发给别人，别人不一定会用<br>
那么就用python写一个简单的程序来修改配置文件吧

```python
import re
with open("frpc.ini","r") as f:
    content = f.read()
    tab = re.search("local_port = ",content)
    pos = tab.start()
    insert = input("请输入需要映射的端口：")
    with open("frpc.ini","w") as f:
        content = content[:pos + 13] + insert + content[pos + 18:]
        f.writelines(content)
```

对，前面研究python在文件中指定位置插入内容就是为了在这修改配置文件<br>
但是很快啊，出现了bug<br>
端口号不一定是五位数，而且也不排除打错的可能性，配置文件的格式很容易被打乱<br>
于是我打算换一种方式，直接写入整个配置文件不就行了？反正字数不多<br>
并且在末尾使用`os.system`启动 frpc.exe

```python
import os
insert = input("请输入需要映射的端口：")
with open("frpc.ini","w") as f:
    list1 = ['[common]\n',
             'server_addr = 这里是服务器地址\n',
             'server_port = 7000\n',
             'token = 这里是密钥\n'
             '\n',
             '[MC]\n',
             'type = tcp\n',
             'local_ip = 127.0.0.1\n',
             'local_port = '+insert+'\n',
             'remote_port = 6001']
    f.writelines(list1)
os.system('frpc.exe')
```

但是朋友的电脑上没有python环境，为了他也能用，我打算把py文件打包成exe文件<br>
使用的是pyinstaller<br>
首先创建虚拟环境，然后在虚拟环境中

```
 pip install pyinstaller
```

把py文件放入文件夹，然后输入

```
pyinstaller -F -i icon.ico main.py
```

常用参数：<br>
-F 表示生成单个可执行文件<br>
-w 表示去掉控制台窗口，一般在打包GUI程序时使用，我这是命令行程序，故不使用<br>
-i 表示exe文件的图标<br>
打包完成后就能在其他电脑上使用了<br>
只需要双击main.exe后输入端口号就行<br>

