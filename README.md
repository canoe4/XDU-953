## 本站说明

本站并不能作为纸质试卷的替代，本人在10月底也有买淘宝研梦的资料，不太建议购买私人资料

在确认报名之前，可以通过这份电子资料了解 953 的难度以及风格，PDF 在 Release 中可下载，包含 17 到 23 年的所有初试真题及答案，清单如下

- 17~21 951 数据结构真题及答案
- 17~21 952 计算机网络真题及答案
- 22~23 953 网安基础综合真题及答案

在 17-21 年间，网信院的初试为选考 951 (数据结构) 和 952 (计网)，953 从 22 年开始到 24 年共考了三年，其中 953 的 ds 和 cn 部分延续了 951 和 952 的风格，故 17-21 的真题仍具有一定参考价值

| 数据结构 | 计网  | 密码学 |
| -------- | ----- | ------ |
| 55 分    | 55 分 | 40 分  |

## 备考经验

> 仅供参考

数学

- 不管是看网课还是啃书，一定要趁早找到适合自己的学习方式，我的教训是，光啃书不看课，到最后知识框架不足以应付偏难的题目，如果你对自己的智力水平不是特别特别自信，建议还是在上半年认认真真看一门网课，学习老师成熟的解题思路、框架，别等到下半年发现解不了难题想看课又没有时间

英语

- 东秦金卓老师，身边没见过低于 70 的英一
- 25 考研 QQ 群，外校 50r/年，非常良心了（429418727）

<img src="https://github.com/canoe4/XDU-953/blob/main/docs/notice/assets/qq.jpg">

专业课

| 日期     | 资料                                              |
| -------- | ------------------------------------------------- |
| 5-7 月   | 王道                                              |
| 8 月     | 951、952 真题，《现代密码学》课后题               |
| 9 月     | 王道，《现代密码学》，953 真题                    |
| 10-11 月 | 研梦资料，951、952 真题和 953 真题，DS、CN 期末题 |
| 12 月    | 错题                                              |

政治

- 微信公众号研木易木子，会有肖四大题精缩，到最后背不完可以看看这个

另外，24 的 953 考的很难，相较于去年和前年，主要变难在数据结构和密码学部分，不知道是否是一种趋势。如果按照 22 和 23 的难度来看，啃王道和现代密码学三本书是完全够的，但如果保持 24 的难度，要考高分（≥120）或许需要从其他方面入手

## 关于复试

笔试，难度不大，手上有两套纸质真题，之后有时间整理成 PDF 上传

| 操作系统 | 离散数学 | C程序设计 |
| -------- | -------- | --------- |
| 35分     | 35分     | 30分      |

## 快速搭建

[VuePress 官方指南](https://vuepress.vuejs.org/zh/guide/)

```sh
mkdir XDU-Docs && cd XDU-Docs
npm init -y
npm install vuepress -D

# 安装 latex 公式和 vue 支持
npm install katex markdown-it-texmath vue-template-compiler --save

# 拷入 docs 文件夹到当前目录
```

添加脚本至 package.json

```json
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress build docs"
},
```

部署与构建

```sh
npm run docs:dev
npm run docs:build
```
