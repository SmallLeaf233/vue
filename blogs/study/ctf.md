---
title: 商贸杯CTF部分解题思路
date: 2023-04-22
cover: https://s2.loli.net/2023/04/23/uZ8YeVNP1yROHfI.jpg
tags:
 - ctf
categories:
 - 学习
---

# 商贸杯CTF部分解题思路

*社团举办的一场ctf的小比赛*

## misc

### 二维码

扫描二维码即可获取flag



### base

base64解码即可获取flag



### 信息搜集

1.首先进行百度识图，获取完整图片，获取到被截掉的关键词”成都最认真做面的店主“

2.百度搜索”最认真做面的店主“，可能是由于我们贡献的点击量，这条搜索结果位于第一位

3.视频的00:03出现了店名：”左撇子私房面“，00:13出现了图片中的告示

4.百度地图搜索“左撇子私房面”，即可找到店家的手机号码

![信息搜集](https://s2.loli.net/2023/04/20/KERaGeUQh9xbsL2.png)

### 流量分析

1.在Wireshark软件中打开 `misc1.pcapng`

2.点击查找，选择 `分组字节流` 和 `字符串` ，然后搜索“flag”，把下面往上拖就能看到了

![流量分析](https://s2.loli.net/2023/04/20/N4QgLnAo6l37aXM.png)

### 还是二维码

直接扫描出来的是错误flag

需要在网站[图片隐写加密/解密](https://c.p2hp.com/yinxietu/)中解密出flag



### 签到

csdn搜索商贸misc获取本题flag

## web

### web1

通过御剑后台扫描工具扫描出http://222.187.239.39:55580/robots.txt，flag位于页面最底下

### web2

在页面http://222.187.239.39:55580/robots.txt有一条数据是 `Disallow: /e/flag1.txt`

在地址栏输入http://222.187.239.39:55580/e/flag1.txt获取到第二个flag

### 简单的web

按F12查看网页源代码可以看到被注释的flag

### 简单的web1

在Edge浏览器下按F12查看网页源代码，点击加号选择 `网络`

刷新网页，然后右键1.php，选择 `编辑并重新发送`

在 `key` 和 `Value` 下分别输入value,点击发送获取flag

![简单的web1](https://s2.loli.net/2023/04/20/sLfw9K2pCPXVZWv.png)

### 简单的web2

在Edge浏览器下按F12查看网页源代码，点击加号选择 `网络`

刷新网页，然后右键2.php，选择 `编辑并重新发送`

将地址左边的 `GRT` 替换为 `POST` ，点击 `Body` ，点击 `x-www-form-urlencoded` 

在 `key` 和 `Value` 下分别输入value,点击发送获取flag

![简单的web2](https://s2.loli.net/2023/04/20/JgwbRUtjLc8IOSn.png)

## 网络配置&VB

这两个应该不用写思路吧



## recover

### 坚持100秒

使用 Android逆向助手.exe 中的 `jd打开jar` 方式打开 `坚持100秒.jar` ，查看源代码

Ctrl + F 搜索flag，获取flag，但是输入flag提示不对

注意到flag的结尾有个“=”，推测是base64加密，最终解密获取到正确flag



### 逆向2

一开始我把apk文件解压，然后使用Android逆向助手.exe反编译 `classes.dex` 文件，然后……然后就不会了，毕竟没学过java

在网络上搜索“黑客精神”，找到原题和解题方法，直接把答案抄上去了（搜索能力也是实力的一部分，大概？）。



### 逆向

我并没有用逆向的方法

将 `1.exe`重命名为`1.txt`，查找”flag“获取

