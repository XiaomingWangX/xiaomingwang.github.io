(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{379:function(s,t,a){"use strict";a.r(t);var e=a(10),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"分布式协调技术"}},[s._v("分布式协调技术")]),s._v(" "),a("h3",{attrs:{id:"概述"}},[s._v("概述")]),s._v(" "),a("p",[s._v('分布式协调技术主要用来解决分布式环境当中多个进程之间的同步控制，让他们有序的去访问某种临界资源，防止造成"脏数据"的后果。')]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk1.png",alt:"Samdoc"}})]),s._v(" "),a("p",[s._v("在这图中有三台机器，每台机器各跑一个应用程序。然后我们将这三台机器通过网络将其连接起来，构成一个系统来为用户提供服务，对用户来说这个系统的架构是透明的，他感觉不到我这个系统是一个什么样的架构。那么我们就可以把这种系统称作一个"),a("strong",[s._v("分布式系统")]),s._v("。")]),s._v(" "),a("p",[s._v("在这个分布式系统中如何对进程进行调度，我假设在第一台机器上挂载了一个资源，然后这三个物理分布的进程都要竞争这个资源，但我们又不希望他们同时进行访问，这时候我们就需要一个"),a("strong",[s._v("协调器")]),s._v("，来让他们有序的来访问这个资源。这个协调器就是我们经常提到的那个"),a("strong",[s._v("锁")]),s._v('，比如说"进程-1"在使用该资源的时候，会先去获得锁，"进程1"获得锁以后会对该资源保持'),a("strong",[s._v("独占")]),s._v('，这样其他进程就无法访问该资源，"进程1"用完该资源以后就将锁释放掉，让其他进程来获得锁，那么通过这个锁机制，我们就能保证了分布式系统中多个进程能够有序的访问该临界资源。那么我们把这个分布式环境下的这个锁叫作分布式锁。这个'),a("strong",[s._v("分布式锁")]),s._v("也就是我们"),a("strong",[s._v("分布式协调技术")]),s._v("实现的核心内容。")]),s._v(" "),a("h2",{attrs:{id:"什么分布式锁"}},[s._v("什么分布式锁")]),s._v(" "),a("p",[s._v("为了防止分布式系统中的多个进程之间相互干扰，我们需要一种分布式协调技术来对这些进程进行调度。而这个分布式协调技术的核心就是来实现这个"),a("strong",[s._v("分布式锁")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"为什么要使用分布式锁"}},[s._v("为什么要使用分布式锁")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk2.png",alt:"Samdoc"}})]),s._v(" "),a("ul",[a("li",[s._v("成员变量 A 存在 JVM1、JVM2、JVM3 三个 JVM 内存中")]),s._v(" "),a("li",[s._v("成员变量 A 同时都会在 JVM 分配一块内存，三个请求发过来同时对这个变量操作，显然结果是不对的")]),s._v(" "),a("li",[s._v("不是同时发过来，三个请求分别操作三个不同 JVM 内存区域的数据，变量 A 之间不存在共享，也不具有可见性，处理的结果也是不对的 注：该成员变量 A 是一个有状态的对象")])]),s._v(" "),a("p",[s._v("如果我们业务中确实存在这个场景的话，我们就需要一种方法解决这个问题，这就是分布式锁要解决的问题")]),s._v(" "),a("h3",{attrs:{id:"分布式锁应该具备哪些条件"}},[s._v("分布式锁应该具备哪些条件")]),s._v(" "),a("ul",[a("li",[s._v("在分布式系统环境下，一个方法在同一时间只能被一个机器的一个线程执行")]),s._v(" "),a("li",[s._v("高可用的获取锁与释放锁")]),s._v(" "),a("li",[s._v("高性能的获取锁与释放锁")]),s._v(" "),a("li",[s._v("具备可重入特性（可理解为重新进入，由多于一个任务并发使用，而不必担心数据错误）")]),s._v(" "),a("li",[s._v("具备锁失效机制，防止死锁")])]),s._v(" "),a("h3",{attrs:{id:"分布式锁的实现有哪些"}},[s._v("分布式锁的实现有哪些")]),s._v(" "),a("ul",[a("li",[s._v("Memcached：利用 Memcached 的"),a("code",[s._v("add")]),s._v("命令。此命令是原子性操作，只有在 "),a("code",[s._v("key")]),s._v(" 不存在的情况下，才能 "),a("code",[s._v("add")]),s._v(" 成功，也就意味着线程得到了锁。")]),s._v(" "),a("li",[s._v("Redis：和 Memcached 的方式类似，利用 Redis 的 "),a("code",[s._v("setnx")]),s._v(" 命令。此命令同样是原子性操作，只有在 "),a("code",[s._v("key")]),s._v(" 不存在的情况下，才能 "),a("code",[s._v("set")]),s._v(" 成功。")]),s._v(" "),a("li",[a("strong",[s._v("Zookeeper")]),s._v("：利用 Zookeeper 的顺序临时节点，来实现分布式锁和等待队列。Zookeeper 设计的初衷，就是为了实现分布式锁服务的。")]),s._v(" "),a("li",[s._v("Chubby：Google 公司实现的粗粒度分布式锁服务，底层利用了 Paxos 一致性算法。")])]),s._v(" "),a("h2",{attrs:{id:"通过-redis-分布式锁"}},[s._v("通过 Redis 分布式锁")]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[s._v("如果您还没有Redis相关知识，那么请先阅读 "),a("a",{attrs:{href:"./2_redis"}},[s._v("Redis")])])]),s._v(" "),a("h3",{attrs:{id:"通过-redis分布式锁的实现理解基本概念"}},[s._v("通过 Redis分布式锁的实现理解基本概念")]),s._v(" "),a("p",[a("strong",[s._v("分布式锁实现的三个核心要素：")])]),s._v(" "),a("h3",{attrs:{id:"加锁"}},[s._v("加锁")]),s._v(" "),a("p",[s._v("最简单的方法是使用 setnx 命令。key 是锁的唯一标识，按业务来决定命名。比如想要给一种商品的秒杀活动加锁，可以给 key 命名为 “lock_sale_商品ID” 。而 value 设置成什么呢？我们可以姑且设置成 1。加锁的伪代码如下：")]),s._v(" "),a("p",[s._v("setnx（lock_sale_商品ID，1）\n当一个线程执行 setnx 返回 1，说明 key 原本不存在，该线程成功得到了锁；当一个线程执行 setnx 返回 0，说明 key 已经存在，该线程抢锁失败。")]),s._v(" "),a("h3",{attrs:{id:"解锁"}},[s._v("解锁")]),s._v(" "),a("p",[s._v("有加锁就得有解锁。当得到锁的线程执行完任务，需要释放锁，以便其他线程可以进入。释放锁的最简单方式是执行 del 指令，伪代码如下：")]),s._v(" "),a("p",[s._v("del（lock_sale_商品ID）\n释放锁之后，其他线程就可以继续执行 setnx 命令来获得锁。")]),s._v(" "),a("h3",{attrs:{id:"锁超时"}},[s._v("锁超时")]),s._v(" "),a("p",[s._v("锁超时是什么意思呢？如果一个得到锁的线程在执行任务的过程中挂掉，来不及显式地释放锁，这块资源将会永远被锁住（死锁），别的线程再也别想进来。所以，setnx 的 key 必须设置一个超时时间，以保证即使没有被显式释放，这把锁也要在一定时间后自动释放。"),a("code",[s._v("setnx")]),s._v(" 不支持超时参数，所以需要额外的指令，伪代码如下：")]),s._v(" "),a("p",[a("code",[s._v("sh expire（lock_sale_商品ID， 30）")]),s._v("\n综合伪代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("（setnx（lock_sale_商品ID，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("） "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    expire（lock_sale_商品ID，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("）\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("finally")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        del（lock_sale_商品ID）\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"存在什么问题"}},[s._v("存在什么问题")]),s._v(" "),a("p",[s._v("以上伪代码中存在三个致命问题")]),s._v(" "),a("p",[a("strong",[s._v("setnx 和 expire 的非原子性")]),s._v("\n设想一个极端场景，当某线程执行 setnx，成功得到了锁：\n"),a("img",{attrs:{src:"/img/microservice/zk3.png",alt:"Samdoc"}})]),s._v(" "),a("p",[a("code",[s._v("setnx")]),s._v(" 刚执行成功，还未来得及执行 expire 指令，节点 1 挂掉了。\n"),a("img",{attrs:{src:"/img/microservice/zk4.png",alt:"Samdoc"}})]),s._v(" "),a("p",[s._v("这样一来，这把锁就没有设置过期时间，变成死锁，别的线程再也无法获得锁了。")]),s._v(" "),a("p",[s._v("怎么解决呢？"),a("code",[s._v("setnx")]),s._v(" 指令本身是不支持传入超时时间的，"),a("code",[s._v("set")]),s._v(" 指令增加了可选参数，伪代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("set（lock_sale_商品ID，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("，NX）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样就可以取代 "),a("code",[s._v("setnx")]),s._v(" 指令。")]),s._v(" "),a("h4",{attrs:{id:"del-导致误删"}},[a("code",[s._v("del")]),s._v(" 导致误删")]),s._v(" "),a("p",[s._v("又是一个极端场景，假如某线程成功得到了锁，并且设置的超时时间是 30 秒。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk5.png",alt:"Samdoc"}})]),s._v(" "),a("p",[s._v("如果某些原因导致线程 A 执行的很慢很慢，过了 30 秒都没执行完，这时候锁过期自动释放，线程 B 得到了锁。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk6.png",alt:"Samdoc"}}),s._v("\n随后，线程 A 执行完了任务，线程 A 接着执行 del 指令来释放锁。但这时候线程 B 还没执行完，线程A实际上 删除的是线程 B 加的锁。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk7.png",alt:"Samdoc"}})]),s._v(" "),a("p",[s._v("怎么避免这种情况呢？可以在 del 释放锁之前做一个判断，验证当前的锁是不是自己加的锁。至于具体的实现，可以在加锁的时候把当前的线程 ID 当做 "),a("code",[s._v("value")]),s._v("，并在删除之前验证 "),a("code",[s._v("key")]),s._v(" 对应的 "),a("code",[s._v("value")]),s._v(" 是不是自己线程的 ID。")]),s._v(" "),a("p",[a("strong",[s._v("加锁：")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" threadId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("currentThread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nset（key，threadId ，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("，NX）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("解锁：")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v("（threadId "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redisClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("del")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("但是，这样做又隐含了一个新的问题，判断和释放锁是两个独立操作，不是原子性。")]),s._v(" "),a("h4",{attrs:{id:"出现并发的可能性"}},[s._v("出现并发的可能性")]),s._v(" "),a("p",[s._v("还是刚才第二点所描述的场景，虽然我们避免了线程 A 误删掉 key 的情况，但是同一时间有 A，B 两个线程在访问代码块，仍然是不完美的。怎么办呢？我们可以让获得锁的线程开启一个守护线程，用来给快要过期的锁“续航”。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk8.png",alt:"Samdoc"}})]),s._v(" "),a("p",[s._v("当过去了 29 秒，线程 A 还没执行完，这时候守护线程会执行 expire 指令，为这把锁“续命”20 秒。守护线程从第 29 秒开始执行，每 20 秒执行一次。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk9.png",alt:"Samdoc"}})]),s._v(" "),a("p",[s._v("当线程 A 执行完任务，会显式关掉守护线程。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk10.png",alt:"Samdoc"}})]),s._v(" "),a("p",[s._v("另一种情况，如果节点 1 忽然断电，由于线程 A 和守护线程在同一个进程，守护线程也会停下。这把锁到了超时的时候，没人给它续命，也就自动释放了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/microservice/zk11.png",alt:"Samdoc"}})])])},[],!1,null,null,null);t.default=n.exports}}]);