---
title: Novel AI的本地搭建
date: 2022-10-12
cover: https://s2.loli.net/2022/10/24/Ou2pyzxa7dcHPDb.jpg
tags:
 - AI
categories:
 - 其他
---

# Novel AI的本地搭建

这边介绍的是AUTOMATIC1111大佬制作的[webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)

本教程只介绍在windows上安装的流程

1.安装[python 3.10.6](https://www.python.org/downloads/windows/)，安装时勾选"Add Python to PATH"

2.安装 [git](https://git-scm.com/download/win)

3.安装[CUDA](https://developer.nvidia.com/cuda-downloads)

4.下载webui客户端，可以选择直接`git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git`，或者是下载[压缩包](https://github.com/AUTOMATIC1111/stable-diffusion-webui/archive/refs/heads/master.zip)（可能需要梯子）

5.然后我们需要下载黑客泄露出来的Novel AI模型`magnet:?xt=urn:btih:5bde442da86265b670a3e5ea3163afad2c6f8ecc&dn`

6.在`stable-diffusion-webui\models`目录下新建`hypernetworks`文件夹，将第四步下载的文件中`modules`文件夹下的所有 .pt 文件拷贝到该文件夹下

7.将第四步下载的文件中的`animevae.pt`文件拷贝到`stable-diffusion-webui\models\Stable-diffusion`将其重命名为`model.vae.pt`

8.第四步下载的文件中，所有的 .ckpt 文件都是模型文件，可以根据需求自行更改，这边推荐使用 *adimefull-final-pruned*  或者 *animefull-latest* ，将文件夹下的`model.ckpt`文件和`config.yaml`都拷贝到`stable-diffusion-webui\models\Stable-diffusion`即可

9.双击`webui-user.bat`启动，开始安装依赖文件（可能需要梯子），下载过程没有进度条，请耐心等待

10.在浏览器输入http://127.0.0.1:7860/访问 webui

::: tip
当然现在网上有了很多大佬制作的一键包，要是图方便大可下载现成的
:::

