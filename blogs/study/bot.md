---
title: 关于QQ机器人
date: 2022-03-27
cover: http://124.222.167.20/i/2022/03/29/6242d5bd041cc.jpeg
tags:
 - 学习
categories:
 - 学习
---

# 关于QQ机器人

***今天看到群里有问我QQ机器人是怎么做的，于是我打算就此写一篇博客***

## 先简单介绍一下

QQ机器人是使用

[go-cqhttp](https://github.com/Mrs4s/go-cqhttp)（负责收发信息）<br>
[nonebot2](https://github.com/nonebot/nonebot2)（负责处理信息）

这两个框架开发

## 开始

对于QQ机器人的学习是从去年开始的，学会用Github也是也是在那段时候。一开始是跟着[这个视频](https://www.bilibili.com/video/BV1Z64y197Ps?share_source=copy_web)做的，认识了 *go-cqhttp* 和 *nonebot*，学会了最基本的配环境，使用pip安装依赖之类的。也跟着视频实现了简单的回复和发送图片的功能。不过就跟博客搭建一样，视频只教了一些最基础的内容，要想实现更复杂的内容就要靠自己了。

于是我开始试着自己读 *go-cqhttp* 和 *nonebot* 的官方文档，文档写得很详细，功能也多到我眼花缭乱。但由于我个人技术能力有限，并不知道具体该如何使用。不过文档中有[商店](https://v2.nonebot.dev/store)，先去下一个别人的机器人先用起来吧，有大佬写好的能直接用为什么要自己写呢（老懒狗了）

## 部署

在商店看了一圈，最后我打算使用[绪山真寻bot](https://hibikier.github.io/zhenxun_bot/)

~~至于原因？当然是因为xp了兄弟，白发傲娇可爱美少女谁不爱？~~

这个机器人就厉害了，不仅用到了 *go-cqhttp* 和 *nonebot2*，还需要 *Postgresql 数据库*。具体的部署过程[官方文档](https://hibikier.github.io/zhenxun_bot/docs/installation_doc/)中很详细，这里就不过多赘述，主要讲讲我在部署和使用过程中遇到的问题。

### 本地部署

刚开始我是部署在自己的小破笔记本上，文档中说是<u>建议使用linux系统，但Windows也不是不行</u>。

结果我第一步`pip3 install -r requirements.txt`安装依赖时就出现了报错。

当时我想着少几个依赖应该也能跑起来，那试试呗。一运行，满屏报错(｡•́︿•̀｡)

问了群里的大佬，说是因为这个依赖不支持Windows，或许更新的版本会支持。

我就用`pip list`列出已经安装的包，然后一个个`pip install`去下那些没安好的依赖。

到最后还有几个依赖没装上，但是`python bot.py`能跑起来了（能跑吗，能跑就没问题）。

虽然后来发现有很多功能用不了，但是问题不大。

### 云端部署

但是机器人一直跑在笔记本上也不是个办法，得把它部署到别的地方去。

于是我决定去买一个云服务器。

腾讯云免费试用一个月，好，就他了。

使用[Xshell](https://www.xshell.com/zh/xshell/)远程连接，[WinSCP](https://winscp.net/eng/index.php)传输文件，部署过程一切顺利，依赖能一次安完并成功跑起来的感觉是真的爽。

功能一切正常，果然在linux系统上跑才是最佳选择吗。

### 更新

然后没高兴几天呢，*nonebot2* 更新了，*zhenxunbot* 也更新了。

当时我以为就是寻常的更新，发送了更新指令。可是更新完成后并没有成功重启，我望着满屏的报错不知所措。

去看了一下文档，发现是这次 *nonebot2* 更新后，原来的 *NoneBot CQHTTP* 适配器没了，变成了 *NoneBot OneBot* 适配器。

需要在 *gocqhttp* 配置文件中将地址更改为 `ws://127.0.0.1:8080/onebot/v11/ws/`。程序的代码也要重新改过，以适配最新版本。我可不会改，不过 *zhenxunbot* 的作者已经适配好了，只需要去Github下载最新版本即可。

下载完最新版本后，运行`pip3 install -r requirements.txt`安装依赖，提示没有这个文件。

再看真寻bot文档，发现安装依赖的命令换成了

```
 pip3 install poetry
 poetry install
```

百度了一下[poetry](https://www.oschina.net/p/poetry)，这是一个<u>Python 依赖管理和打包工具</u>，就相当于是创建一个虚拟环境，依赖只安装在这个虚拟环境中。不用担心和其他地方的依赖起冲突，起到一个隔离的作用。

这是个好东西啊，而且使用 `poetry install` 安装依赖的速度也更快。

安装完后不要忘了 `poetry shell` 进入虚拟环境，否则会提示没有安装依赖。

### 迁移数据

服务器试用一个月很快就到期了，但是在原来的服务器上续费并不划算。

我又重新买了一个2核2G的服务器，新人首年40。

那么问题又来了，原来数据库中的数据怎么迁移到新的服务器中呢？

答案是下载一个[Navicat](https://www.navicat.com.cn/)，在之前的网站开发课上用过几次。图形化界面，只需要鼠标点点点就能轻松实现数据库的备份与还原。

## 自定义

虽然我目前的技术力并做不出像真寻bot这样的机器人，但是依葫芦画瓢自己加个插件应该是不难的。在[真寻Bot插件基本标准](https://hibikier.github.io/zhenxun_bot/docs/development_doc/plugins.html)中有详细的介绍（作者考虑的实在太周到了）。

于是我尝试着自己加了一个这样的插件

|   指令    |     说明     |
| :-------: | :----------: |
| 涩涩/色色 | 发送随机涩图 |
|   壁纸    | 发送随机壁纸 |

非常简陋，我是菜狗


---

## 感谢

***在我学习QQ机器人的过程中起到帮助的所有网站***

### 文档

[go-cqhttp](https://docs.go-cqhttp.org/)：基于 Mirai 以及 MiraiGo 的 OneBot Golang 原生实现<br>
[nonebot2](https://v2.nonebot.dev/)：跨平台 PYTHON 异步机器人框架<br>
[绪山真寻Bot](https://hibikier.github.io/zhenxun_bot/)：基于 Nonebot2 和 go-cqhttp 开发，以 postgresql 作为数据库，非常可爱的绪山真寻bot<br>

### CSDN
[QQ机器人制作教程，超详细](https://blog.csdn.net/qq_44809707/article/details/119959864)<br>
[qq机器人小白教程系列](https://blog.csdn.net/weixin_46211269/category_10912318.html)<br>
[Navicat连接postgresql](https://blog.csdn.net/qq_40323256/article/details/105350463)<br>

### 视频
[【bilibili】python机器人完整制作过程](https://www.bilibili.com/video/BV1Z64y197Ps?share_source=copy_web)<br>
[【bilibili】go-cqhttp QQ 机器人简单实战](https://www.bilibili.com/video/BV1xU4y1j7Z8?share_source=copy_web)<br>



::: warning 注意
后来因为 *nonebot2* 版本更新变化较大，目前已经更新到了 *2.0.0-beta.2* 版本,这些教程可能已经过时
:::