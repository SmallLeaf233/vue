---
title: 关于博客的搭建
date: 2022-03-20
cover: http://124.222.167.20/i/2022/03/29/6242d61c4e707.jpg
tags:
 - 学习
categories:
 - 学习
sticky: 1
---
# 关于博客的搭建

博客搭建花了我一个周末，见识了数不清的报错，最后能成功感觉有很大的运气成分。

<img src="http://124.222.167.20/i/2022/03/29/6242d5bc04931.jpeg" width = "200" height = "200">

我一开始用的是主题的默认样式，虽然默认样式也很简洁美观，但是我想搞一些更个性化的东西。

官方文档中有定制样式的介绍，但是我的知识储备约等于零基础，越看越懵。而网上能找到的教学基本都只讲了最基础的搭建，对于更深入的内容并没有介绍。

于是我决定，去[优秀博客案例](https://vuepress-theme-reco.recoluan.com/views/other/theme-example.html)里偷一个吧！先用起来再说。~~你的代码很不错，下一秒，它就是我的啦ಠᴗಠ~~

一阵捣鼓后本地成功跑了起来。~~你在指望我教你？自己看教学去，超链接就在下面啊~~  接下来就是想办法让其他人也能访问我的博客。开始我是打算部署到我的云服务器上，但是听说网站备案很麻烦，还要花钱买域名，直接劝退。

那再看看别的方案吧，[部署到 GitHub Pages](https://v1.vuepress.vuejs.org/zh/guide/deploy.html#github-pages)好像不错，让我来逝世。试了半天发现好麻烦，一直没成功，摆烂了。

后来偶然看到一个视频，知道了[Vercel](https://vercel.com/)这个免费的静态托管网站。使用GitHub登录后，啪的一下就提交上去了，很快啊！就点了几下，直接就构建好了。简单到让我怀疑人生(#ﾟДﾟ)

---


## 感谢
***在我搭建博客的过程中起到帮助的所有网站***

### 文档

[VuePress](https://v1.vuepress.vuejs.org/zh/)：Vue 驱动的静态网站生成器<br>
[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)：一款简洁而优雅的 vuepress 博客 & 文档 主题<br>
[Vercel](https://vercel.com/)：免费的静态托管平台<br>
[zealsay](https://www.zealsay.com/)：大佬的个人博客，我抄的就是他的(｀・ω・´)

### 视频
[【bilibili】6分钟教你不用服务器搭建个人博客 | 小白可懂 | Vercel | VuePress](https://www.bilibili.com/video/BV17Q4y1Y7LF?share_source=copy_web)<br>
[【bilibili】1小时带你搭建vuepress高大上个人博客（极速上手版）](https://www.bilibili.com/video/BV17t41177cr?share_source=copy_web)