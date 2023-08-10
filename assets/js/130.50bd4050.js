(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{561:function(t,n,s){"use strict";s.r(n);var r=s(20),a=Object(r.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"简介"}},[t._v("简介")]),t._v(" "),n("p",[t._v("JDK1.5之前synchronized是一个重量级锁，相对于j.u.c.Lock，它会显得那么笨重，以至于我们认为它不是那么的高效而慢慢摒弃它。\n不过，随着Javs SE 1.6对synchronized进行的各种优化后，synchronized并不会显得那么重了。下面来一起探索synchronized的基本使用、实现机制、Java是如何对它进行了优化、锁优化机制、锁的存储结构等升级过程。")]),t._v(" "),n("h2",{attrs:{id:"用法"}},[t._v("用法")]),t._v(" "),n("ul",[n("li",[t._v("当synchronized作用在实例方法时，监视器锁（monitor）便是对象实例（this）；")]),t._v(" "),n("li",[t._v("当synchronized作用在静态方法时，监视器锁（monitor）便是对象的Class实例，因为Class数据存在于永久代，因此静态方法锁相当于该类的一个全局锁；")]),t._v(" "),n("li",[t._v("当synchronized作用在某一个对象实例时，监视器锁（monitor）便是括号括起来的对象实例；")])]),t._v(" "),n("p",[t._v("注意，synchronized 内置锁 是一种 对象锁（锁的是对象而非引用变量），作用粒度是对象 ，可以用来实现对 临界资源的同步互斥访问 ，是 可重入 的。其可重入最大的作用是避免死锁，如：")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("子类同步方法调用了父类同步方法，如没有可重入的特性，则会发生死锁；")])]),t._v(" "),n("h2",{attrs:{id:"同步原理"}},[t._v("同步原理")]),t._v(" "),n("p",[t._v("数据同步需要依赖锁，那锁的同步又依赖谁？synchronized给出的答案是在软件层面依赖JVM，而j.u.c.Lock给出的答案是在硬件层面依赖特殊的CPU指令。")]),t._v(" "),n("p",[t._v("当一个线程访问同步代码块时，首先是需要得到锁才能执行同步代码，当退出或者抛出异常时必须要释放锁，那么它是如何来实现这个机制的呢？我们先看一段简单的代码：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paddx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SynchronizedDemo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Method 1 start"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("查看反编译后结果：\n"),n("img",{attrs:{src:"/img/interviewtopic/sync1.png",alt:"syng.png"}}),t._v("\n1.monitorenter：每个对象都是一个监视器锁（monitor）。当monitor被占用时就会处于锁定状态，线程执行monitorenter指令时尝试获取monitor的所有权，过程如下：")]),t._v(" "),n("blockquote",[n("p",[t._v("1.如果monitor的进入数为0，则该线程进入monitor，然后将进入数设置为1，该线程即为monitor的所有者；"),n("br"),t._v("\n2.如果线程已经占有该monitor，只是重新进入，则进入monitor的进入数加1；"),n("br"),t._v("\n3.如果其他线程已经占用了monitor，则该线程进入阻塞状态，直到monitor的进入数为0，再重新尝试获取monitor的所有权；")])]),t._v(" "),n("p",[t._v("monitorexit：执行monitorexit的线程必须是objectref所对应的monitor的所有者。指令执行时，monitor的进入数减1，如果减1后进入数为0，那线程退出monitor，不再是这个monitor的所有者。其他被这个monitor阻塞的线程可以尝试去获取这个 monitor 的所有权。")]),t._v(" "),n("blockquote",[n("p",[t._v("monitorexit指令出现了两次，第1次为同步正常退出释放锁；第2次为发生异步退出释放锁；")])]),t._v(" "),n("p",[t._v("通过上面两段描述，我们应该能很清楚的看出Synchronized的实现原理，Synchronized的语义底层是通过一个monitor的对象来完成，其实wait/notify等方法也依赖于monitor对象，这就是为什么只有在同步的块或者方法中才能调用wait/notify等方法，否则会抛出java.lang.IllegalMonitorStateException的异常的原因。")]),t._v(" "),n("p",[t._v("再来看一下同步方法：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paddx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concurrent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SynchronizedMethod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[n("strong",[t._v("查看反编译后结果：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/interviewtopic/sync2.png",alt:"syng.png"}})]),t._v(" "),n("p",[t._v("从编译的结果来看，方法的同步并没有通过指令 monitorenter 和 monitorexit 来完成（理论上其实也可以通过这两条指令来实现），不过相对于普通方法，其常量池中多了 ACC_SYNCHRONIZED 标示符。JVM就是根据该标示符来实现方法的同步的：")]),t._v(" "),n("blockquote",[n("p",[t._v("当方法调用时，调用指令将会检查方法的 ACC_SYNCHRONIZED 访问标志是否被设置，如果设置了，执行线程将先获取monitor，获取成功之后才能执行方法体，方法执行完后再释放monitor。在方法执行期间，其他任何线程都无法再获得同一个monitor对象。")])]),t._v(" "),n("p",[t._v("两种同步方式本质上没有区别，只是方法的同步是一种隐式的方式来实现，无需通过字节码来完成。两个指令的执行是JVM通过调用操作系统的互斥原语mutex来实现，被阻塞的线程会被挂起、等待重新调度，会导致“用户态和内核态”两个态之间来回切换，对性能有较大影响。")]),t._v(" "),n("h2",{attrs:{id:"同步概念"}},[t._v("同步概念")]),t._v(" "),n("h3",{attrs:{id:"java对象头"}},[t._v("Java对象头")]),t._v(" "),n("p",[t._v("在JVM中，对象在内存中的布局分为三块区域：对象头、实例数据和对齐填充。如下图所示：\n"),n("img",{attrs:{src:"/img/interviewtopic/sync3.png",alt:"syng.png"}})]),t._v(" "),n("blockquote",[n("p",[t._v("1.实例数据：存放类的属性数据信息，包括父类的属性信息；"),n("br"),t._v("\n2.对齐填充：由于虚拟机要求 对象起始地址必须是8字节的整数倍。填充数据不是必须存在的，仅仅是为了字节对齐；"),n("br"),t._v("\n3.对象头：Java对象头一般占有2个机器码（在32位虚拟机中，1个机器码等于4字节，也就是32bit，在64位虚拟机中，1个机器码是8个字节，也就是64bit），但是 如果对象是数组类型，则需要3个机器码，因为JVM虚拟机可以通过Java对象的元数据信息确定Java对象的大小，但是无法从数组的元数据来确认数组的大小，所以用一块来记录数组长度。")])]),t._v(" "),n("p",[n("strong",[t._v("Synchronized用的锁就是存在Java对象头里的")]),t._v("，那么什么是Java对象头呢？Hotspot虚拟机的对象头主要包括两部分数据："),n("strong",[t._v("Mark Word（标记字段）")]),t._v("、"),n("strong",[t._v("Class Pointer（类型指针）")]),t._v("。其中"),n("strong",[t._v("Class Pointer是对象指向它的类元数据的指针")]),t._v("，虚拟机通过这个指针来确定这个对象是哪个类的实例，"),n("strong",[t._v("Mark Word用于存储对象自身的运行时数据，它是实现轻量级锁和偏向锁的关键")]),t._v("。 Java对象头具体结构描述如下：\n"),n("img",{attrs:{src:"/img/interviewtopic/sync4.png",alt:"syng.png"}}),t._v(" "),n("strong",[t._v("Mark Word用于存储对象自身的运行时数据，如：哈希码（HashCode）、GC分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳等。下图是Java对象头 无锁状态下Mark Word部分的存储结构（32位虚拟机）：")]),t._v(" "),n("img",{attrs:{src:"/img/interviewtopic/sync5.png",alt:"syng.png"}})]),t._v(" "),n("p",[t._v("对象头信息是与对象自身定义的数据无关的额外存储成本，但是考虑到虚拟机的空间效率，"),n("strong",[t._v("Mark Word被设计成一个非固定的数据结构以便在极小的空间内存存储尽量多的数据，它会根据对象的状态复用自己的存储空间")]),t._v("，也就是说，Mark Word会随着程序的运行发生变化，可能变化为存储以下4种数据：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/interviewtopic/sync6.png",alt:"syng.png"}})]),t._v(" "),n("p",[t._v("在64位虚拟机下，"),n("strong",[t._v("Mark Word是64bit大小的")]),t._v("，其存储结构如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/interviewtopic/sync7.png",alt:"syng.png"}})]),t._v(" "),n("p",[t._v("对象头的最后两位存储了锁的标志位，01是初始状态，未加锁，其对象头里存储的是对象本身的哈希码，随着锁级别的不同，对象头里会存储不同的内容。偏向锁存储的是当前占用此对象的线程ID；而轻量级则存储指向线程栈中锁记录的指针。从这里我们可以看到，“锁”这个东西，可能是个锁记录+对象头里的引用指针（判断线程是否拥有锁时将线程的锁记录地址和对象头里的指针地址比较)，也可能是对象头里的线程ID（判断线程是否拥有锁时将线程的ID和对象头里存储的线程ID比较）。")]),t._v(" "),n("h3",{attrs:{id:"对象头中mark-word与线程中lock-record"}},[t._v("对象头中Mark Word与线程中Lock Record")]),t._v(" "),n("p",[t._v("在线程进入同步代码块的时候，如果此同步对象没有被锁定，即它的锁标志位是01，则虚拟机首先在当前线程的栈中创建我们称之为“锁记录（Lock Record）”的空间，用于存储锁对象的Mark Word的拷贝，官方把这个拷贝称为Displaced Mark Word。整个Mark Word及其拷贝至关重要。")]),t._v(" "),n("p",[t._v("Lock Record是线程私有的数据结构，每一个线程都有一个可用Lock Record列表，同时还有一个全局的可用列表。每一个被锁住的对象Mark Word都会和一个Lock Record关联（对象头的MarkWord中的Lock Word指向Lock Record的起始地址），同时Lock Record中有一个Owner字段存放拥有该锁的线程的唯一标识（或者object mark word），表示该锁被这个线程占用。如下图所示为Lock Record的内部结构：")]),t._v(" "),n("p",[t._v("Lock Record\t描述")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Owner")]),t._v(" "),n("th",[t._v("初始时为NULL表示当前没有任何线程拥有该monitor record，当线程成功拥有该锁后保存线程唯一标识，当锁被释放时又设置为NULL；")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("EntryQ")]),t._v(" "),n("td",[t._v("关联一个系统互斥锁（semaphore），阻塞所有试图锁住monitor record失败的线程；")])]),t._v(" "),n("tr",[n("td",[t._v("RcThis")]),t._v(" "),n("td",[t._v("表示blocked或waiting在该monitor record上的所有线程的个数；")])]),t._v(" "),n("tr",[n("td",[t._v("Nest")]),t._v(" "),n("td",[t._v("用来实现 重入锁的计数；")])]),t._v(" "),n("tr",[n("td",[t._v("HashCode")]),t._v(" "),n("td",[t._v("保存从对象头拷贝过来的HashCode值（可能还包含GC age）。")])]),t._v(" "),n("tr",[n("td",[t._v("Candidate")]),t._v(" "),n("td",[t._v("用来避免不必要的阻塞或等待线程唤醒，因为每一次只有一个线程能够成功拥有锁，如果每次前一个释放锁的线程唤醒所有正在阻塞或等待的线程，会引起不必要的上下文切换（从阻塞到就绪然后因为竞争锁失败又被阻塞）从而导致性能严重下降。Candidate只有两种可能的值0表示没有需要唤醒的线程1表示要唤醒一个继任线程来竞争锁。")])])])]),t._v(" "),n("h3",{attrs:{id:"监视器-monitor"}},[t._v("监视器（Monitor）")]),t._v(" "),n("p",[t._v("任何一个对象都有一个Monitor与之关联，当且一个Monitor被持有后，它将处于锁定状态。Synchronized在JVM里的实现都是 基于进入和退出Monitor对象来实现方法同步和代码块同步，虽然具体实现细节不一样，但是都可以通过成对的MonitorEnter和MonitorExit指令来实现。")]),t._v(" "),n("p",[t._v("MonitorEnter指令：插入在同步代码块的开始位置，当代码执行到该指令时，将会尝试获取该对象Monitor的所有权，即尝试获得该对象的锁；\nMonitorExit指令：插入在方法结束处和异常处，JVM保证每个MonitorEnter必须有对应的MonitorExit；\n那什么是Monitor？可以把它理解为 一个同步工具，也可以描述为 一种同步机制，它通常被 描述为一个对象。")]),t._v(" "),n("p",[t._v("与一切皆对象一样，所有的Java对象是天生的Monitor，每一个Java对象都有成为Monitor的潜质，因为在Java的设计中 ，每一个Java对象自打娘胎里出来就带了一把看不见的锁，它叫做内部锁或者Monitor锁。")]),t._v(" "),n("p",[t._v("也就是通常说Synchronized的对象锁，MarkWord锁标识位为10，其中指针指向的是Monitor对象的起始地址。在Java虚拟机（HotSpot）中，Monitor是由ObjectMonitor实现的，其主要数据结构如下（位于HotSpot虚拟机源码ObjectMonitor.hpp文件，C++实现的）：")]),t._v(" "),n("div",{staticClass:"language-c++ line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ObjectMonitor() {\n    _header       = NULL;\n    _count        = 0; // 记录个数\n    _waiters      = 0,\n    _recursions   = 0;\n    _object       = NULL;\n    _owner        = NULL;\n    _WaitSet      = NULL; // 处于wait状态的线程，会被加入到_WaitSet\n    _WaitSetLock  = 0 ;\n    _Responsible  = NULL ;\n    _succ         = NULL ;\n    _cxq          = NULL ;\n    FreeNext      = NULL ;\n    _EntryList    = NULL ; // 处于等待锁block状态的线程，会被加入到该列表\n    _SpinFreq     = 0 ;\n    _SpinClock    = 0 ;\n    OwnerIsThread = 0 ;\n  }\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("p",[n("code",[t._v("ObjectMonitor")]),t._v("中有两个队列，_WaitSet 和 _EntryList，用来保存ObjectWaiter对象列表（ 每个等待锁的线程都会被封装成ObjectWaiter对象 ），_owner指向持有ObjectMonitor对象的线程，当多个线程同时访问一段同步代码时：")]),t._v(" "),n("p",[t._v("首先会进入 _EntryList 集合，当线程获取到对象的monitor后，进入 _Owner区域并把monitor中的owner变量设置为当前线程，同时monitor中的计数器count加1；\n若线程调用 wait() 方法，将释放当前持有的monitor，owner变量恢复为null，count自减1，同时该线程进入 WaitSet集合中等待被唤醒；\n若当前线程执行完毕，也将释放monitor（锁）并复位count的值，以便其他线程进入获取monitor(锁)；\n同时，Monitor对象存在于每个Java对象的对象头Mark Word中（存储的指针的指向），Synchronized锁便是通过这种方式获取锁的，也是为什么Java中任意对象可以作为锁的原因，同时notify/notifyAll/wait等方法会使用到Monitor锁对象，所以必须在同步代码块中使用。")]),t._v(" "),n("p",[t._v("监视器Monitor有两种同步方式：互斥与协作。多线程环境下线程之间如果需要共享数据，需要解决互斥访问数据的问题，监视器可以确保监视器上的数据在同一时刻只会有一个线程在访问。")]),t._v(" "),n("h2",{attrs:{id:"偏向锁"}},[t._v("偏向锁")]),t._v(" "),n("p",[t._v("偏向锁是JDK6中的重要引进，因为HotSpot作者经过研究实践发现，在大多数情况下，锁不仅不存在多线程竞争，而且总是由同一线程多次获得，为了让线程获得锁的代价更低，引进了偏向锁。")]),t._v(" "),n("p",[n("strong",[t._v("偏向锁是在单线程执行代码块时使用的机制")]),t._v("，如果在多线程并发的环境下（即线程A尚未执行完同步代码块，线程B发起了申请锁的申请），则一定会转化为轻量级锁或者重量级锁。")]),t._v(" "),n("p",[n("strong",[t._v("在JDK5中偏向锁默认是关闭的，而到了JDK6中偏向锁已经默认开启")]),t._v("。如果并发数较大同时同步代码块执行时间较长，则被多个线程同时访问的概率就很大，就可以使用参数-XX:-UseBiasedLocking来禁止偏向锁(但这是个JVM参数，不能针对某个对象锁来单独设置)。")]),t._v(" "),n("p",[t._v("引入偏向锁主要目的是："),n("strong",[t._v("为了在没有多线程竞争的情况下尽量减少不必要的轻量级锁执行路径")]),t._v("。因为轻量级锁的加锁解锁操作是需要依赖多次CAS原子指令的，"),n("strong",[t._v("而偏向锁只需要在置换ThreadID的时候依赖一次CAS原子指令")]),t._v("（由于一旦出现多线程竞争的情况就必须撤销偏向锁，所以偏向锁的撤销操作的性能损耗也必须小于节省下来的CAS原子指令的性能消耗）。")]),t._v(" "),n("blockquote",[n("p",[t._v("轻量级锁是为了在线程交替执行同步块时提高性能，而偏向锁则是在只有一个线程执行同步块时进一步提高性能。")])]),t._v(" "),n("h4",{attrs:{id:"偏向锁原理"}},[t._v("偏向锁原理")]),t._v(" "),n("p",[t._v("在 对象内存头部保存 线程id（获得锁的线程，如果没有则为null）， 线程每次竞争都会判断是否存在线程id，并且是否为自己的id（竞争线程自己的id）")]),t._v(" "),n("h4",{attrs:{id:"偏向所执行过程"}},[t._v("偏向所执行过程")]),t._v(" "),n("p",[n("strong",[t._v("1.")]),t._v(" 检测Mark Word是否为可偏向状态，即是否为偏向锁1，锁标识位为01"),n("br"),t._v(" "),n("strong",[t._v("2.")]),t._v(" 若为可偏向状态，则测试线程ID是否为当前线程ID，如果是，则执行步骤（5），否则执行步骤（3）"),n("br"),t._v(" "),n("strong",[t._v("3.")]),t._v(" 如果测试线程ID不为当前线程ID，则通过CAS操作竞争锁，竞争成功，则将Mark Word的线程ID替换为当前线程ID，否则执行线程（4）"),n("br"),t._v(" "),n("strong",[t._v("4.")]),t._v(" 通过CAS竞争锁失败，证明当前存在多线程竞争情况，当到达全局安全点，获得偏向锁的线程被挂起，偏向锁升级为轻量级锁**，然后被阻塞在安全点的线程继续往下执行同步代码块"),n("br"),t._v(" "),n("strong",[t._v("5.")]),t._v(" 执行同步代码块")]),t._v(" "),n("p",[n("strong",[t._v("偏向锁的释放采用了 一种只有竞争才会释放锁的机制，线程是不会主动去释放偏向锁，需要等待其他线程来竞争。偏向锁的撤销需要 等待全局安全点（这个时间点是上没有正在执行的代码）。其步骤如下：")])]),t._v(" "),n("p",[n("strong",[t._v("1.")]),t._v(" 暂停拥有偏向锁的线程；"),n("br"),t._v(" "),n("strong",[t._v("2.")]),t._v(" 判断锁对象是否还处于被锁定状态，否，则恢复到无锁状态（01），以允许其余线程竞争。是，则挂起持有锁的当前线程，并将指向当前线程的锁记录地址的指针放入对象头Mark Word，升级为轻量级锁状态（00），然后恢复持有锁的当前线程，进入轻量级锁的竞争模式；**\n注意：此处将 当前线程挂起再恢复的过程中并没有发生锁的转移，仍然在当前线程手中，只是穿插了个 “将对象头中的线程ID变更为指向锁记录地址的指针” 这么个事。")]),t._v(" "),n("h2",{attrs:{id:"轻量级锁"}},[t._v("轻量级锁")]),t._v(" "),n("p",[n("strong",[t._v("1.")]),t._v(" 在线程进入同步块时，"),n("strong",[t._v("如果同步对象锁状态为无锁状态（锁标志位为“01”状态，是否为偏向锁为“0”），虚拟机首先将在当前线程的栈帧中建立一个名为锁记录（Lock Record）的空间，用于存储锁对象目前的Mark Word的拷贝")]),t._v("，官方称之为 Displaced Mark Word。此时线程堆栈与对象头的状态如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/interviewtopic/sync9.png",alt:"syng.png"}})]),t._v(" "),n("p",[t._v("轻量级锁CAS操作之前线程堆栈与对象的状态")]),t._v(" "),n("p",[n("strong",[t._v("2.")]),t._v(" 拷贝对象头中的Mark Word复制到锁记录（Lock Record）中；")]),t._v(" "),n("p",[n("strong",[t._v("3.")]),t._v(" 拷贝成功后，"),n("strong",[t._v("虚拟机将使用CAS操作尝试将对象Mark Word中的Lock Word更新为指向当前线程Lock Record的指针，并将Lock record里的owner指针指向object mark word")]),t._v("。如果更新成功，则执行步骤（4），否则执行步骤（5）；")]),t._v(" "),n("p",[n("strong",[t._v("4.")]),t._v(" "),n("strong",[t._v("如果这个更新动作成功了，那么当前线程就拥有了该对象的锁，并且对象Mark Word的锁标志位设置为“00”，即表示此对象处于轻量级锁定状态")]),t._v("，此时线程堆栈与对象头的状态如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/interviewtopic/sync10.png",alt:"syng.png"}})]),t._v(" "),n("p",[t._v("轻量级锁CAS操作之后线程堆栈与对象的状态")]),t._v(" "),n("p",[n("strong",[t._v("5.")]),t._v(" 如果这个更新操作失败了，虚拟机首先会检查对象Mark Word中的Lock Word是否指向当前线程的栈帧，如果是，就说明当前线程已经拥有了这个对象的锁，那就可以直接进入同步块继续执行。否则说明多个线程竞争锁，进入自旋执行（3），若自旋结束时仍未获得锁，轻量级锁就要膨胀为重量级锁，锁标志的状态值变为“10”，Mark Word中存储的就是指向重量级锁（互斥量）的指针，当前线程以及后面等待锁的线程也要进入阻塞状态。")]),t._v(" "),n("p",[t._v("轻量级锁的释放也是通过CAS操作来进行的，主要步骤如下：")]),t._v(" "),n("p",[n("strong",[t._v("1.")]),t._v(" "),n("strong",[t._v("通过CAS操作尝试把线程中复制的Displaced Mark Word对象替换当前的Mark Word")])]),t._v(" "),n("p",[n("strong",[t._v("3.")]),t._v(" 如果替换失败，"),n("strong",[t._v("说明有其他线程尝试过获取该锁（此时锁已膨胀），那就要在释放锁的同时，唤醒被挂起的线程;对于轻量级锁，其性能提升的依据是 “对于绝大部分的锁，在整个生命周期内都是不会存在竞争的”，如果打破这个依据则除了互斥的开销外，还有额外的CAS操作，因此在有多线程竞争的情况下，轻量级锁比重量级锁更慢。")])]),t._v(" "),n("p",[t._v("对于轻量级锁，其性能提升的依据是 “对于绝大部分的锁，在整个生命周期内都是不会存在竞争的”，如果打破这个依据则除了互斥的开销外，还有额外的CAS操作，因此在有多线程竞争的情况下，轻量级锁比重量级锁更慢。")]),t._v(" "),n("h2",{attrs:{id:"重量级锁"}},[t._v("重量级锁")]),t._v(" "),n("p",[n("strong",[t._v("Synchronized")]),t._v("是通过对象内部的一个叫做 "),n("strong",[t._v("监视器锁（Monitor）来实现的")]),t._v("。"),n("strong",[t._v("但是监视器锁本质又是依赖于底层的操作系统的Mutex Lock来实现的。而操作系统实现线程之间的切换这就需要从用户态转换到核心态，这个成本非常高，状态之间的转换需要相对比较长的时间")]),t._v("，这就是为什么Synchronized效率低的原因。因此，这种依赖于操作系统Mutex Lock所实现的锁我们称之为 “重量级锁”。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[t._v("总结")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("偏向锁")]),t._v(" 是在 对象头中报错 当前持有锁对象的线程id（"),n("strong",[t._v("第一次也需要cas设置线程id，每次线程获取锁时，都要判断当前线程id是否是自己的线程id\n如果不是，则说明不是单一线程，此时会升级成轻量级锁")]),t._v("）。")])]),t._v(" "),n("li",[n("p",[t._v("而 "),n("strong",[t._v("轻量级锁")]),t._v(" 是保存 线程中lock record 引用，并且每次线程抢夺都要 cas 修改，修改成功则抢锁成功，如果修改不成功则自旋，如果长时间自旋，则会将锁升级成重量级锁。")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("重量级锁使用操作系统的 Mutex Lock 互斥锁实现")]),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("轻量级锁 使用自旋方式，相对于重量级锁来说，减少了线程之间的切换， 避免了从用户态到内核态。")])])]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("疑问")]),t._v(" "),n("p",[n("strong",[t._v("那么线程之间的切换为什么会耗费资源呢?")])]),t._v(" "),n("p",[t._v("因为线程切换的时候，CPU需要将此线程的所有执行状态保存起来，如线程编号，执行到的位置等，然后再去执行其它线程。")])])])}),[],!1,null,null,null);n.default=a.exports}}]);