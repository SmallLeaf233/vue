---
title: 常用工具的使用
date: 2023-04-12
cover: https://s2.loli.net/2023/04/18/jJRpw3NnmIFPSq7.png
tags:
 - ffmpeg
 - git
 - vim
categories:
 - 学习
---

*为了方便自己日后的查询使用，我在这里介绍一些工具的常用使用命令，以及一些问题的解决方法——不定期更新*

# **目录**

\- [ffmpeg——音视频处理工具](#ffmpeg)<br>
\- [Git——版本控制工具](#Git)<br>
\- [Vim——文本编辑器的最基础操作](#Vim)

#  <a name="ffmpeg"></a> **ffmpeg**

*FFmpeg是一款强大的跨平台音视频处理工具，可以处理各种格式的音视频文件，提供了很多实用的功能。*

## 1. 转换文件格式
<br>

```
ffmpeg -i input.mp4 -c copy output.avi
```

这个命令将MP4格式的视频转换成AVI格式的视频。`-i` 选项指定输入文件，后面的参数是输出文件的文件名和格式。<br>
`-c copy` 表示使用“复制”编解码器来复制输入文件的流数据到输出文件中。因为复制编解码器不对流进行编码或解码，所以它可以快速地将输入流复制到输出流中，而且不会改变流的编码格式或质量。

## 2. 提取音频
<br>

首先查看音轨

```
ffmpeg -i input.mp4
```

在输出的最底下可以看到

```
Stream #0:1[0x2](und): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 159 kb/s (default)
```

其中的`0:1`就是音轨，`aac`就是音频格式

```
ffmpeg -i input.mp4 -map 0:1 -c copy output.aac 
```

`-map`选泽音轨

如果没有多音轨提取的需求，可以使用


```
ffmpeg -i input.mp4 -vn output.mp3
```

这个命令从视频中提取音频，并将结果保存为MP3格式。`-vn` 选项指定不包括视频流。

## 3. 裁剪视频
<br>

```
ffmpeg -i input.mp4 -ss 00:01:00 -t 00:00:30 output.mp4
```

这个命令从视频的第1分钟开始裁剪30秒钟，并将结果保存为MP4格式。`-ss` 选项指定开始时间，`-t` 选项指定持续时间。

如果想进行毫秒级的剪辑，则需要将时间的格式改成`00:00:00.00`

## 4. 调整视频大小
<br>

```
ffmpeg -i input.mp4 -vf scale=320:240 output.mp4
```

这个命令将视频的大小调整为320x240像素，并将结果保存为MP4格式。`-vf` 选项指定视频过滤器，`scale` 是调整视频大小的过滤器名称。

## 5. 合并视频
<br>

```
ffmpeg -i concat:"input1.mp4|input2.mp4|input3.mp4" -c copy output.mp4
```

这个命令将两个视频文件合并成一个视频文件，并将结果保存为MP4格式。`-i` 选项指定输入文件，`-filter_complex` 选项指定过滤器复杂性。

## 6. 提取视频帧
<br>

```
ffmpeg -i input.mp4 output_%03d.png
```

这个命令将从视频中提取所有帧，并将它们保存为PNG格式。输出文件名中的 `%03d` 表示用3个数字表示帧序号。

**如果想要每秒提取一次：**

```
ffmpeg -i input.mp4 -vf fps=1 output_%03d.png
```

这个命令将从视频中提取每一秒的帧，并将它们保存为PNG格式。`-vf` 选项指定视频过滤器，`fps` 是设置帧率的过滤器名称，`1` 表示每秒提取一帧，`%03d` 是指定输出文件名的格式，其中 `%03d` 表示用3个数字表示帧序号。

**提取某一秒的画面：**

```
ffmpeg -i input.mp4 -ss 00:12:34 -frames:v 1 output.jpg
```

`-ss 00:12:34` 表示从视频的12分23秒处开始截取。

`-frames:v 1` 指定只输出一帧画面。

## 7. 去除音频静音

<br>

```
ffmpeg -i input.aac -af silenceremove=stop_periods=-1:stop_duration=1:stop_threshold=-50dB output.aac
```

`stop_duration=1`是静音片段的长度，`stop_threshold=-50dB`是静音片段的阈值，似乎越高越不灵敏



### 8.调整音频音量

<br>

```
ffmpeg -i input.mp4 -af "volume=0.5" output.mp4
```

`-af "volume=0.5"` 将音频音量降低到原音量的一半（0.5）。



# <a name="Git"></a>Git

*Git是一款非常强大的版本控制工具，用于管理和追踪代码的变化。*



## 1. 初始化Git仓库
<br>

```
git init
```

在当前目录下创建一个新的Git仓库。一般情况下，您只需要在项目的根目录执行一次此命令。

然后修改名称，将本地默认分支名修改为 `main`。

```
git branch -M main
```

## 2. 克隆Git仓库
<br>

```
git clone https://github.com/example/repository.git
```

这个命令会将远程仓库 `https://github.com/example/repository.git` 中的代码克隆到当前目录下的 `repository` 子目录中。

## 3.提交
### 将修改提交到到暂存区
<br>

```
git add -A
```

将所有修改过的文件和所有新文件添加到Git暂存区，包括修改的文件、删除的文件和新增的文件，但不包括未被修改的文件。

### 提交变化到Git仓库
<br>

```
git commit -m "提交信息"
```

将所做的变化提交到Git仓库中，并记录一个提交信息。提交信息应该简明扼要地描述所做的变化。
### 将最新提交推送到远程仓库
<br>

```
git push
```

之前的 `git commit` 只是提交到本地git仓库，而这条命令则是提交到关联到远程仓库。

## 4. Git仓库管理

### 查看Git仓库的提交历史
<br>

```
git log --stat 
```

显示Git仓库的提交历史，包括每次提交的作者、提交时间、提交信息等。`--stat` 可以显示每次提交的文件修改情况，帮助开发者更直观地了解每次提交所做的修改，并快速追溯代码历史。

### 工作区回滚
<br>

```
git checkout filename
```
将指定文件 `filename` 恢复到最近一次提交时的状态，也就是将工作区的修改撤销。这个命令会丢弃工作区对该文件的修改，但不会影响该文件在仓库中的历史记录和其他分支中的状态。

### 撤销最近一次提交
<br>

```
git reset HEAD^1
```
撤销最近一次提交，将代码回滚到上一次提交的状态，同时将本次提交从Git仓库中删除，`HEAD^1` 表示回滚到上一次提交的状态。


### 重置为指定版本
<br>

```
git reset –-soft <目标版本的SHA-1值>
```

重置至指定版本的提交，达到撤销提交的目的，SHA-1值可以使用 `git log` 查看，该值位于 `commit` 后面<br>
然后使用

```
git reset --soft
```

强制推送修改后的提交到远程仓库。

### 远程仓库管理
<br>

```
git remote add origin git@github.com:your/repo.git
```
这个命令将本地仓库关联到远程仓库。`git@github.com:your/repo.git` 是你远程仓库的地址

## 5.分支管理
### 查看分支
<br>

```
git branch
```
显示Git仓库中所有分支的列表。您可以使用 `-a` 选项查看所有分支，或使用 `-r` 选项查看远程分支。
### 切换分支
<br>

```
git checkout new_branch_name
```
切换分支。你可以将 `new_branch_name` 替换为你希望切换的分支名称。在 `checkout` 后面加上 `-b` 可以新建分支。
###  删除分支
<br>

```
git branch -d new_branch_name
```
删除名为 `new_branch_name` 的分支。
### 合并分支
<br>

```
git merge new_branch_name
```
将名为 `new_branch_name` 的分支合并到当前分支中。
### 放弃合并分支
<br>

```
git merge --abort
```
放弃合并操作，将代码恢复到合并前的状态。



# <a name="Vim"></a>Vim

*Vim是linux下常用的文本编辑器，最基本的操作，比如插入、保存、退出就不介绍了，只讲我没记住的*

## 显示行号

在**普通模式**下输入 `:set nu` 临时显示行号，退出后下次进入需重新输入。

## 移动命令

**h, j, k, l:** 左、下、上、右移动光标。

**gg:** 移动到文件的第一行。

**G:** 移动到文件的最后一行。

## 复制和粘贴

在**普通模式**下按 `yy` 复制当前行<br>
按 `p` 将复制的内容粘贴到光标下方

## 撤销和重做

在**普通模式**下按 `u` 命令撤销上一次操作<br>
按`Ctrl + r` 命令重做上一次被撤销的操作

## 搜索和替换

在**普通模式**下按 `/` 命令进入搜索模式，输入要搜索的字符串，按 `Enter` 键搜索<br>
输入 `:%s/old/new/g` 命令将文件中所有的 old 替换为 new



# 额外内容

*电脑常见故障*

## 白屏

电脑卡死了一片白怎么办？不要慌

Ctrl + Alt + Dlelete 选择最底下的任务管理器，

在任务管理器中选择 **运行新任务**

输入`explorer.exe`，然后以系统管理权限创建此任务，点击确定，桌面就被重启了。
