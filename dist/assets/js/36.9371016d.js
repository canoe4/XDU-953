(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{347:function(t,v,_){"use strict";_.r(v);var s=_(14),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"单选"}},[t._v("单选")]),t._v(" "),v("p",[t._v("1-5 BCDAC")]),t._v(" "),v("p",[t._v("6-10 DABDB")]),t._v(" "),v("p",[t._v("11-15 BACDB")]),t._v(" "),v("h2",{attrs:{id:"填空"}},[t._v("填空")]),t._v(" "),v("p",[t._v("1、(rear-front+M)%M")]),t._v(" "),v("p",[t._v("2、可行性")]),t._v(" "),v("p",[t._v("3、01122123412234")]),t._v(" "),v("p",[t._v("4、最优子结构性质和子问题重香性质")]),t._v(" "),v("p",[t._v("5、3")]),t._v(" "),v("p",[t._v("6、24000bit/s")]),t._v(" "),v("p",[t._v("7、单工、半双工、全双工")]),t._v(" "),v("p",[t._v("8、100s、5x10^3")]),t._v(" "),v("p",[t._v("9、信息帧、监督帧和无编号帧")]),t._v(" "),v("p",[t._v("10、11111001111101110111")]),t._v(" "),v("p",[t._v("11、维吉尼亚密码")]),t._v(" "),v("p",[t._v("12、8")]),t._v(" "),v("p",[t._v("13、23")]),t._v(" "),v("p",[t._v("14、有无密钥")]),t._v(" "),v("p",[t._v("15、(18,20)")]),t._v(" "),v("h2",{attrs:{id:"简答"}},[t._v("简答")]),t._v(" "),v("p",[t._v("1")]),t._v(" "),v("p",[t._v("朴素的模式匹配思想是：从目标 S 中的第一个字符开始和模式 T 中的第一个字符比较（用 i 和 j 分别指示 S 串和 T 串中正在比较的字符位置），若相等，则继续逐个比较后续字符，否则从目标 S 的第二个字符开始再重新与模式串的第一个字符比较，依次类推，直至模式 T 中的每个字符依次和目标S 中的一个连续字符序列相等为止，则匹配成功，返回模式 T 中第一个字\n符在目标 S 中的位置，否则匹配失败，返回 -1 值")]),t._v(" "),v("p",[t._v('KMP 的改进之处在于：每当一趟匹配过程中出现字符比较不相等时，不需回溯i值，而是利用已经得到的“部分匹配"的结果将模式向右“滑动”尽可能远的一段距离后，继续进行比较')]),t._v(" "),v("p",[t._v("表述清楚主串模式串之间的回溯，可以通过 next 数组消除回溯，设计 next 数组时可以通过最长前缀找到回溯位置等问题即给分")]),t._v(" "),v("p",[t._v("2")]),t._v(" "),v("p",[t._v("0-1 背包问题是指每一种物品都只有一件，可以选择放或者不放")]),t._v(" "),v("p",[t._v("背包问题(Knapsack problem)：是一种组合优化的 NP 完全问题。问题可以描述为：给定一组物品，每种物品都有自己的重量和价格，在限定的总重量内，我们如何选择，才能使得物品的总价格最高")]),t._v(" "),v("p",[t._v("背包问题可以用贪心算法求解，而 0-1 背包问题不能用贪心算法求解（用动态规划）")]),t._v(" "),v("p",[t._v("参照书本，表述清楚两个问题的概念，比较他们的不同点，如何解决这两个问题，即可给分（为什么 0-1 背包问题不可用贪心，这个最好提一下）")]),t._v(" "),v("p",[t._v("3")]),t._v(" "),v("p",[t._v("确认帧，超时重传，滑动窗口，答到三点内容并解释清楚即给分")]),t._v(" "),v("p",[t._v("4")]),t._v(" "),v("p",[t._v("相同点")]),t._v(" "),v("ul",[v("li",[t._v("都是动态路由协议")]),t._v(" "),v("li",[t._v("都是内部路由协议")]),t._v(" "),v("li",[t._v("如果 RIP 是版本 2（RIPv2）的话，那 OSPF 一样都支持变长子网掩码，支持 VLSM。")])]),t._v(" "),v("p",[t._v("不同点")]),t._v(" "),v("ul",[v("li",[t._v("RIP 是按跳数来算路由的，OSPF 是状态路由协议")]),t._v(" "),v("li",[t._v("RIP 的算法简单，但在路径较时收敛速度慢，广播路由信息时占用的带宽资源较多，它适用于网络拓扑结构相对简单且数据链路故障率极低的小型网络，在大中型企业网络中，一般不使用 RIP")]),t._v(" "),v("li",[t._v("OSPF 不会产生路由环路，不受路数限制，能够用于规模很大的网络，收敛速度快，支持大型异构网络的互联，并且不容易出现错误的路由信息，同时支持多重路径，支持路由验证提高了网络的安全性，支持负载均衡，支持 VLSM")])]),t._v(" "),v("p",[t._v("5")]),t._v(" "),v("p",[t._v("ELGamal 签名体制")]),t._v(" "),v("ul",[v("li",[t._v("体制参数\n"),v("ul",[v("li",[t._v("p：大素数")]),t._v(" "),v("li",[t._v("g：Zp 的一个生成元")]),t._v(" "),v("li",[t._v("x：用户私钥")]),t._v(" "),v("li",[t._v("y：用户公钥")])])]),t._v(" "),v("li",[t._v("签名产生过程\n"),v("ul",[v("li",[t._v("计算 m 的哈希值 H(m)")]),t._v(" "),v("li",[t._v("选择随机数 k，计算 r = g^k (mod p)")]),t._v(" "),v("li",[t._v("计算 s = (H(m)-xr)k^(-1) (mod p-1)")])])]),t._v(" "),v("li",[t._v("以 (r,s) 作为数字签名")]),t._v(" "),v("li",[t._v("验证过程")])]),t._v(" "),v("section",[v("eqn",[v("span",{staticClass:"katex-display"},[v("span",{staticClass:"katex"},[v("span",{staticClass:"katex-mathml"},[v("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[v("semantics",[v("mrow",[v("msup",[v("mi",[t._v("y")]),v("mi",[t._v("r")])],1),v("msup",[v("mi",[t._v("r")]),v("mi",[t._v("s")])],1),v("mo",[t._v("=")]),v("msup",[v("mi",[t._v("g")]),v("mrow",[v("mi",[t._v("r")]),v("mi",[t._v("x")])],1)],1),v("msup",[v("mi",[t._v("g")]),v("mrow",[v("mi",[t._v("k")]),v("mi",[t._v("s")])],1)],1),v("mo",[t._v("=")]),v("msup",[v("mi",[t._v("g")]),v("mrow",[v("mi",[t._v("H")]),v("mo",{attrs:{stretchy:"false"}},[t._v("(")]),v("mi",[t._v("m")]),v("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1),v("mtext"),v("mo",{attrs:{stretchy:"false"}},[t._v("(")]),v("mi",[t._v("m")]),v("mi",[t._v("o")]),v("mi",[t._v("d")]),v("mtext"),v("mi",[t._v("p")]),v("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),v("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\ny^rr^s=g^{rx}g^{ks}=g^{H(m)}\\,(mod\\,p)\n")])],1)],1)],1),v("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"0.9088em","vertical-align":"-0.1944em"}}),v("span",{staticClass:"mord"},[v("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),v("span",{staticClass:"msupsub"},[v("span",{staticClass:"vlist-t"},[v("span",{staticClass:"vlist-r"},[v("span",{staticClass:"vlist",staticStyle:{height:"0.7144em"}},[v("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[v("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),v("span",{staticClass:"sizing reset-size6 size3 mtight"},[v("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")])])])])])])])]),v("span",{staticClass:"mord"},[v("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),v("span",{staticClass:"msupsub"},[v("span",{staticClass:"vlist-t"},[v("span",{staticClass:"vlist-r"},[v("span",{staticClass:"vlist",staticStyle:{height:"0.7144em"}},[v("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[v("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),v("span",{staticClass:"sizing reset-size6 size3 mtight"},[v("span",{staticClass:"mord mathnormal mtight"},[t._v("s")])])])])])])])]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),v("span",{staticClass:"mrel"},[t._v("=")]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"1.0935em","vertical-align":"-0.1944em"}}),v("span",{staticClass:"mord"},[v("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),v("span",{staticClass:"msupsub"},[v("span",{staticClass:"vlist-t"},[v("span",{staticClass:"vlist-r"},[v("span",{staticClass:"vlist",staticStyle:{height:"0.7144em"}},[v("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[v("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),v("span",{staticClass:"sizing reset-size6 size3 mtight"},[v("span",{staticClass:"mord mtight"},[v("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.02778em"}},[t._v("r")]),v("span",{staticClass:"mord mathnormal mtight"},[t._v("x")])])])])])])])])]),v("span",{staticClass:"mord"},[v("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),v("span",{staticClass:"msupsub"},[v("span",{staticClass:"vlist-t"},[v("span",{staticClass:"vlist-r"},[v("span",{staticClass:"vlist",staticStyle:{height:"0.8991em"}},[v("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[v("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),v("span",{staticClass:"sizing reset-size6 size3 mtight"},[v("span",{staticClass:"mord mtight"},[v("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),v("span",{staticClass:"mord mathnormal mtight"},[t._v("s")])])])])])])])])]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),v("span",{staticClass:"mrel"},[t._v("=")]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),v("span",{staticClass:"base"},[v("span",{staticClass:"strut",staticStyle:{height:"1.188em","vertical-align":"-0.25em"}}),v("span",{staticClass:"mord"},[v("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),v("span",{staticClass:"msupsub"},[v("span",{staticClass:"vlist-t"},[v("span",{staticClass:"vlist-r"},[v("span",{staticClass:"vlist",staticStyle:{height:"0.938em"}},[v("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[v("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),v("span",{staticClass:"sizing reset-size6 size3 mtight"},[v("span",{staticClass:"mord mtight"},[v("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.08125em"}},[t._v("H")]),v("span",{staticClass:"mopen mtight"},[t._v("(")]),v("span",{staticClass:"mord mathnormal mtight"},[t._v("m")]),v("span",{staticClass:"mclose mtight"},[t._v(")")])])])])])])])])]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),v("span",{staticClass:"mopen"},[t._v("(")]),v("span",{staticClass:"mord mathnormal"},[t._v("m")]),v("span",{staticClass:"mord mathnormal"},[t._v("o")]),v("span",{staticClass:"mord mathnormal"},[t._v("d")]),v("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),v("span",{staticClass:"mord mathnormal"},[t._v("p")]),v("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1),v("h2",{attrs:{id:"应用"}},[t._v("应用")]),t._v(" "),v("p",[t._v("1")]),t._v(" "),v("p",[t._v("A：01011  B：0100  C：011")]),t._v(" "),v("p",[t._v("D：110  E：1110  F：00")]),t._v(" "),v("p",[t._v("G：10  H：01010  I：1111")]),t._v(" "),v("p",[t._v("2")]),t._v(" "),v("p",[t._v("线性探查法")]),t._v(" "),v("ul",[v("li",[t._v("查找成功：2.5")]),t._v(" "),v("li",[t._v("查找不成功：7")])]),t._v(" "),v("p",[t._v("拉链法")]),t._v(" "),v("ul",[v("li",[t._v("查找成功：1.67")]),t._v(" "),v("li",[t._v("查找不成功：0.923")])]),t._v(" "),v("p",[t._v("3")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("循环")]),t._v(" "),v("th",[t._v("U")]),t._v(" "),v("th",[t._v("K")]),t._v(" "),v("th",[t._v("D[0]......D[6]")]),t._v(" "),v("th",[t._v("P[0]......P[6]")]),t._v(" "),v("th",[t._v("S[0]......S[6]")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("初始化")]),t._v(" "),v("td",[t._v("V1")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("5 M 14 M M M")]),t._v(" "),v("td",[t._v("1 1 0 1 0 0 0")]),t._v(" "),v("td",[t._v("1 0 0 0 0 0 0")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("V1 V2")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("5 15 14 12 M M")]),t._v(" "),v("td",[t._v("1 1 2 1 2 0 5")]),t._v(" "),v("td",[t._v("1 1 0 0 0 0 0")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("V1 V2 V5")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("5 15 14 12 1 8 15")]),t._v(" "),v("td",[t._v("1 1 2 1 2 4 5")]),t._v(" "),v("td",[t._v("1 1 0 0 1 0 0")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("V1 V2 V5 V4")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("5 15 14 12 1 8 15")]),t._v(" "),v("td",[t._v("1 1 2 1 2 4 5")]),t._v(" "),v("td",[t._v("1 1 0 1 1 0 0")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("V1 V2 V5 V4 V3")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("5 15 14 12 1 8 15")]),t._v(" "),v("td",[t._v("1 1 2 1 2 4 5")]),t._v(" "),v("td",[t._v("1 1 1 1 1 0 0")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("V1 V2 V5 V4 V3 V6")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("5 15 14 12 1 8 15")]),t._v(" "),v("td",[t._v("1 1 2 1 2 4 5")]),t._v(" "),v("td",[t._v("1 1 1 1 1 1 0")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("V1 V2 V5 V4 V3 V6 V7")]),t._v(" "),v("td",[t._v("6")]),t._v(" "),v("td",[t._v("5 15 14 12 1 8 15")]),t._v(" "),v("td",[t._v("1 1 2 1 2 4 5")]),t._v(" "),v("td",[t._v("1 1 1 1 1 1 1")])])])]),t._v(" "),v("p",[t._v("4")]),t._v(" "),v("p",[t._v("活动和事件开始最早时间，最晚时间，要求全部写出")]),t._v(" "),v("p",[t._v("关键路径 <V1,V2>，<V2,V4>，<V2,V5>，<V4,V5>，<V5,V7>")]),t._v(" "),v("p",[t._v("5")]),t._v(" "),v("p",[t._v("不正确，正确的为 01100")]),t._v(" "),v("p",[t._v("6")]),t._v(" "),v("p",[t._v("(1)")]),t._v(" "),v("p",[t._v("分别写出组织机构 1，2，3，4 的 IP 地址")]),t._v(" "),v("ul",[v("li",[t._v("组织机构 140.24.7.0/26")]),t._v(" "),v("li",[t._v("组织机构 140.24.7.64/26")]),t._v(" "),v("li",[t._v("组织机构 140.24.7.128/26")]),t._v(" "),v("li",[t._v("组织机构 140.24.7.192/26")])]),t._v(" "),v("p",[t._v("(2)")]),t._v(" "),v("p",[t._v("R1 路由表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("子网掩码")]),t._v(" "),v("th",[t._v("网络地址")]),t._v(" "),v("th",[t._v("下一跳地址")]),t._v(" "),v("th",[t._v("接口")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("/26")]),t._v(" "),v("td",[t._v("140.24.7.0")]),t._v(" "),v("td",[t._v("Direct")]),t._v(" "),v("td",[t._v("140.24.7.1")])]),t._v(" "),v("tr",[v("td",[t._v("/26")]),t._v(" "),v("td",[t._v("140.24.7.64")]),t._v(" "),v("td",[t._v("Direct")]),t._v(" "),v("td",[t._v("140.24.7.65")])]),t._v(" "),v("tr",[v("td",[t._v("/26")]),t._v(" "),v("td",[t._v("140.24.7.128")]),t._v(" "),v("td",[t._v("Direct")]),t._v(" "),v("td",[t._v("140.24.7.129")])]),t._v(" "),v("tr",[v("td",[t._v("/0")]),t._v(" "),v("td",[t._v("0.0.0.0")]),t._v(" "),v("td",[t._v("默认")]),t._v(" "),v("td",[t._v("222.118.2.3")])])])]),t._v(" "),v("p",[t._v("R2 路由表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("子网掩码")]),t._v(" "),v("th",[t._v("网络地址")]),t._v(" "),v("th",[t._v("下一跳地址")]),t._v(" "),v("th",[t._v("接口")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("/26")]),t._v(" "),v("td",[t._v("140.24.7.192")]),t._v(" "),v("td",[t._v("222.118.3.3")]),t._v(" "),v("td",[t._v("222.118.2.1")])]),t._v(" "),v("tr",[v("td",[t._v("/24")]),t._v(" "),v("td",[t._v("140.24.7.0")]),t._v(" "),v("td",[t._v("222.118.2.3")]),t._v(" "),v("td",[t._v("222.118.2.2")])]),t._v(" "),v("tr",[v("td",[t._v("/32")]),t._v(" "),v("td",[t._v("222.118.3.2")]),t._v(" "),v("td",[t._v("222.118.3.3")]),t._v(" "),v("td",[t._v("222.118.2.1")])]),t._v(" "),v("tr",[v("td",[t._v("/0")]),t._v(" "),v("td",[t._v("0.0.0.0")]),t._v(" "),v("td",[t._v("默认")]),t._v(" "),v("td",[t._v("130.11.120.1")])])])]),t._v(" "),v("p",[t._v("R3 路由表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("子网掩码")]),t._v(" "),v("th",[t._v("网络地址")]),t._v(" "),v("th",[t._v("下一跳地址")]),t._v(" "),v("th",[t._v("接口")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("/26")]),t._v(" "),v("td",[t._v("140.24.7.192")]),t._v(" "),v("td",[t._v("Direct")]),t._v(" "),v("td",[t._v("222.118.7.193")])]),t._v(" "),v("tr",[v("td",[t._v("/32")]),t._v(" "),v("td",[t._v("222.118.3.2")]),t._v(" "),v("td",[t._v("Direct")]),t._v(" "),v("td",[t._v("222.118.3.1")])]),t._v(" "),v("tr",[v("td",[t._v("/0")]),t._v(" "),v("td",[t._v("0.0.0.0")]),t._v(" "),v("td",[t._v("默认")]),t._v(" "),v("td",[t._v("222.118.3.3")])])])]),t._v(" "),v("p",[t._v("7")]),t._v(" "),v("p",[t._v("(1)")]),t._v(" "),v("p",[t._v("求主机的源 MAC 地址和源 IP 地址")]),t._v(" "),v("ul",[v("li",[t._v("源 MAC 地址：00-15-C5-C1-5E-28")]),t._v(" "),v("li",[t._v("源 IP 地址：10.2.128.100")])]),t._v(" "),v("p",[t._v("(2)")]),t._v(" "),v("p",[t._v("求该报文段 IP 数据报总长度和位偏移量")]),t._v(" "),v("ul",[v("li",[t._v("总长度：01ef=495B")]),t._v(" "),v("li",[t._v("偏移量：64*8=512B")])]),t._v(" "),v("p",[t._v("(3)")]),t._v(" "),v("p",[t._v("结合该数据报文分析该主机请求通信中可能使用了哪些协议，并简述这些协议功能？")]),t._v(" "),v("p",[t._v("RIP，IP，TCP，HTTP，PPP 或 HDLC，ARP，NAT（注意该 IP 地址为私有地址，其它协议合理即可）")]),t._v(" "),v("p",[t._v("8")]),t._v(" "),v("p",[t._v("(1)")]),t._v(" "),v("p",[t._v("如用户 A 和用户 B 希望交换一个密钥，取素数 p 和整数 g，g 是 p 的一个原根，公开 g 和 p (2分)")]),t._v(" "),v("ul",[v("li",[t._v("A 选择随机数 X1 < p，并计算 Y1 = g^(X1) mod p")]),t._v(" "),v("li",[t._v("A 选择随机数 X2 < p，并计算 Y2 = g^(X2) mod p")]),t._v(" "),v("li",[t._v("A 计算密钥的方式是：K = Y2^(X1) (mod P)")]),t._v(" "),v("li",[t._v("B 计算密钥的方式是：K = Y1^(X2) (mod P)")])]),t._v(" "),v("p",[t._v("该方法存在中间人攻击(1分)")]),t._v(" "),v("p",[t._v("描述中间人攻击(2分)")]),t._v(" "),v("p",[t._v("(2)")]),t._v(" "),v("p",[t._v("选择 p 阶循环群 G、GT，选择 g∈G，e(g, g) ≠ lcr")]),t._v(" "),v("p",[t._v("第一轮")]),t._v(" "),v("ul",[v("li",[t._v("A 选择私钥 a∈G，并且计算 e(g^a, g) 发给 B")]),t._v(" "),v("li",[t._v("B 选择私钥 b∈G，并且计算 e(g^b, g) 发给 C")]),t._v(" "),v("li",[t._v("C 选择私钥 c∈G，并且计算 e(g^c, g) 发给 A")])]),t._v(" "),v("p",[t._v("第二轮")]),t._v(" "),v("ul",[v("li",[t._v("A 计算 [e(g^c, g)]^a 发给 B")]),t._v(" "),v("li",[t._v("B 计算 [e(g^a, g)]^b 发给 C")]),t._v(" "),v("li",[t._v("C 计算 [e(g^b, g]^c 发给 A")])]),t._v(" "),v("p",[t._v("第三轮")]),t._v(" "),v("ul",[v("li",[t._v("A 计算 e(g^b, g^c)^a = e(g, g)^(abc)")]),t._v(" "),v("li",[t._v("B 计算 e(g^a, g^c)^b = e(g, g)^(abc)")]),t._v(" "),v("li",[t._v("C 计算 e(g^a, g^b)^c = e(g, g)^(abc)")])])])}),[],!1,null,null,null);v.default=a.exports}}]);