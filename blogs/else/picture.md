---
title: 图床
date: 2022-04-02
cover: https://s2.loli.net/2022/06/05/sILpj2oDmSTeYbt.png
tags:
 - 图床
categories:
 - 其他
---

# 图床

在写博客的时候，有两种方式在文章中插入图片。一种是把图片和博客放在一个文件夹中，用本地路径的方式来定位图片；而第二种方法是引用网络图片链接的方式插入图片，将图片上传至图床，就能生成对应的网络链接。前者会占用更多的储存空间，拖慢博客的显示速度，且不便于文件的备份和移动，而使用图床后这些问题都能迎刃而解。

那么首先的问题就是图床的选择。

## 免费图床

在百度上搜索<u>图床</u>，就能出来很多免费的公共图床。但是免费图床的缺点也很明显：不稳定。你的图片在别人那里，别人把你图片删了啊，或者是网站跑路了之类的，图片就没法正常显示了。

就像一开始我使用的[路过图床](https://imgtu.com/)，还没过几天，就有几张图片没了。

![路过图床](https://s2.loli.net/2022/06/05/jdQGZcsXf4KyoH3.png)

## 自建图床

### 兰空图床

免费图床不稳定，那我就想着，自己搭个图床吧！

我选择使用的图床程序是免费开源的[兰空图床](https://www.lsky.pro/)

先是在服务器上安装了宝塔面板，然后按照文档要求配置运行环境并安装。因为我没有域名（域名备案要等到18岁，这18岁等得我好苦啊！），使用直接用IP当的域名。用IP当域名不安全，而且没法使用SSL证书，但是能用。于是我将图片上传上去，在博客中改了链接，然后兴致冲冲的打开博客一看：

![图炸了](https://s2.loli.net/2022/06/05/PkxFpC9haUOKuTb.png)

？？？？？？

在手机上试试？

<img src="https://s2.loli.net/2022/06/05/kRoyG1QESWBwMCn.png" width = "208" height = "448">

欸，能显示，换个手机看看，欸，也能显示。

怪了，不过既然在电脑上不能正常显示，那就看看还有没有别的方案吧。

### GitHub图床

在之前搜索图床搭建的时候，看到过用GitHub来搭图床。但当时我满脑子想着在自己服务器上搭，没太在意，现在去看看。

[【简书】如何利用 Github 搭建自己的免费图床？](https://www.jianshu.com/p/69c122f16467)

靠！这不比用服务器搭简单！还不要钱！虽然显示速度比较慢，但用了JSD加速后还可以接受。我现在就是用的GitHub图床，图片虽然不能立马显示出来，但只需等待几秒便可。

### SM.MS图床

由于后来实在无法忍受GitHub图床的加载速度，我改用了[SM.MS图床](https://sm.ms/)

国内直连、5GB免费空间、超快的加载速度，我还有什么理由拒绝呢