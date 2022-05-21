---
title: 数学复习
date: 2022-05-15
cover: https://cdn.jsdelivr.net/gh/SmallLeaf233/blog-pic/img/maths.jpeg
tags:
 - 数学
categories:
 - 学习
---

# 第一册

## 集合

N = {0,1,2,3,……}&ensp;(自然数集)

$Z = \{0,\pm1,\pm2,\pm3\}$&ensp;(整数集)

Q = {整数与分数}&ensp;(有理数集)

R = {数轴上所有点对应的数}&ensp;(实数集)



属于：$\in$<br>不属于：$\notin$

子集：$\subseteq$<br>真子集：$\subsetneqq$

## 指数函数与对数函数

根式：$a^{-n}=\frac{1}{a^n}$

**分数指数幂：**<br>$a^{\frac{m}{n}}=\sqrt[n]{a^m}$&ensp;&ensp;$(a^{\frac{1}{n}}=\sqrt[n]a)$<br>$a^{-\frac{m}{n}}=\frac{1}{a^\frac{m}{n}}$

**有理数指数幂运算法则：**<br>$a^m\cdot a^n=a^{m+n}$<br>$(a^m)^n=a^{mn}$<br>$(ab)^n=a^n\cdot b^n$ 

**对数：**<br>$a^b=N\Leftrightarrow\log_aN=b$&ensp;（可以理解为b和N互换了位置）<br>$\log_{10}N=\lg N$<br>$log_e N=ln N$&ensp;（e=2.71828……）

# 第二册

## 第六章 三角函数

|              | $0^\circ$ |     $30^\circ$     |     $45^\circ$     |     $60^\circ$     | $90^\circ$ |    $120^\circ$     |
| :----------: | :-------: | :----------------: | :----------------: | :----------------: | :--------: | :----------------: |
| $\sin\alpha$ |     0     |   $\frac{1}{2}$    | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |     1      | $\frac{\sqrt3}{2}$ |
| $\cos\alpha$ |     1     | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ |   $\frac{1}{2}$    |     0      |   $-\frac{1}{2}$   |
| $\tan\alpha$ |     0     | $\frac{\sqrt3}{3}$ |         1          |      $\sqrt3$      |   不存在   |     $-\sqrt3$      |

![函数](https://cdn.jsdelivr.net/gh/SmallLeaf233/blog-pic/img/函数.JPG)

## 第七章 平面向量

**向量的加减：**<br>
加法：$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$<br>
减法：$\overrightarrow{OA}+\overrightarrow{OB}=\overrightarrow{BA}$
在坐标中：<br>
$a+b=(x_1+x_2,y_1+y_2)$<br>
$a-b=(x_1-x_2,y_1-y_2)$<br>
$\overrightarrow{AB}=(x_2-x_1,y_2-y_1)$

**判断向量是否平行：**<br>
$\overrightarrow{a}=\lambda\overrightarrow{b}$ <br>
$x_1y_2-x_2y_1=0$<br>
$\overrightarrow{a}\cdot\overrightarrow{b}=|\overrightarrow{a}|\cdot|\overrightarrow{b}|\cdot\cos\theta$

**内积坐标表示：**<br>$\overrightarrow{a}\cdot\overrightarrow{b}=x_1x_2+y_1y_2$

**两向量夹角的余弦值：**

$$\cos\theta=\frac{\overrightarrow{a}\cdot\overrightarrow{b}}{|\overrightarrow{a}|\cdot|\overrightarrow{b}|}=\frac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\sqrt{x_2^2+y_2^2}}$$

AB两点之间的距离



## 第八章 直线与园

一条与x轴相交的直线，逆时针方向与x轴形成的角，叫做直线的**倾斜角**

**直线的斜率：**<br>$k=\tan\alpha$<br>
在坐标中：<br>$k=\frac{y_2-y_1}{x_2-x_1}$

**直线方程：**<br>
点斜式：<br>
$\frac{y-y_1}{x-x_1}=k\Rightarrow y-y_1=k(x-x_1)$&ensp;（已知斜率和点）<br>
斜截式：<br>



::: details
一开始我只是想把数学笔记写到个人博客上<br>
但是使用 Markdown 拓展语法把数学公式公式写出来后，却发现并不能在网页上正常渲染<br>
试过很多办法，最后是找到了一个叫[vuepress-plugin-katex](https://github.com/maginapp/vuepress-plugin-katex)的插件，然后又想办法给他配置上<br>
总共花了我一个下午的时间<br>
……<br>
怎么感觉像是为了一碟醋包了盘饺子<br>
:::
