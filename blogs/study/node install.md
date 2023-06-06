---
title: nodejs下载疑难杂症
date: 2022-08-27
cover: https://s2.loli.net/2022/09/17/4ChKApzOZ3u98my.png
tags:
 - nodejs
 - linux
categories:
 - 学习
---

# nodejs下载疑难杂症

*今天给旧电脑上下载nodejs，可折磨死我了，各种报错*

一开始是使用包管理器apt下载，然后发现版本太老了<br>
那我就在官网上下载二进制文件自己安装<br>
安装过程似乎很顺利，但在安装yarn时失败了，一直提示npm错误啥的<br>
那我干脆删了重新下，换一种方式<br>

这时我想起来我服务器上是用nvm来下载nodejs的<br>
那我就去下个nvm吧<br>
安装命令是：

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

好嘛，执行完一点反应也没有，没有报错我还以为成功了<br>
输入`nvm`一试，没成功<br>
试试另一条命令

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

报错，提示连接失败

那再试试别的下载方法<br>
我选择手动安装，把仓库克隆过来手动配置环境变量<br>
一切似乎很顺利<br>
就在我以为下载成功的时候<br>
输入下载命令：

```
nvm install v16.17.0
```

下载nodejs还是失败，提示未找到命令nvm需要curl或wget才能继续<br>
？？？<br>
之后我又七搞八搞，换镜像源啊，重新下wget啊都试过<br>
最后又把nvm删了<br>
我翻出了最开始nvm的安装命令<br>
这条命令的意思是下载脚本文件并执行<br>
可能之前是旧电脑的网络不行？<br>
那我直接复制文件内容再粘贴到旧电脑试试？<br>
然后我再执行，下载成功，非常顺利，一切正常！<br>
芜湖终于成功了