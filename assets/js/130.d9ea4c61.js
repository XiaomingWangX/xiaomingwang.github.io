(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{403:function(e,v,i){"use strict";i.r(v);var _=i(10),s=Object(_.a)({},function(){var e=this,v=e.$createElement,i=e._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h3",{attrs:{id:"redis-为什么快"}},[e._v("Redis 为什么快")]),e._v(" "),i("p",[e._v("1.NIO  epoll=> 1.create epoll fd\n2.NX 分布式锁,不存在就添加 XX是只能更新\n3. 大key hashmap\nstring sds  数值\nlist 头尾链表\nhash ziplist 或者 hashtable 判断key/value的长度是否超过规定的长度64个字节，由REDIS_HASH_MAX_ZIPLIST_VALUE定义。如果超过64个字节那么久需要将ziplist转成hashtab对象。\nset intset和hashtable\nzset 一个值 一个score 数据结构 skiplist  (跳表->有索引的链表)\n多个客户单不一定有顺序")]),e._v(" "),i("h3",{attrs:{id:"redis-慢的原因"}},[e._v("Redis 慢的原因")]),e._v(" "),i("ul",[i("li",[e._v("1.网络通信导致的延迟")]),e._v(" "),i("li",[e._v("2.慢指令导致的延迟")]),e._v(" "),i("li",[e._v("3.Fork 生成 RDB 导致的延迟")]),e._v(" "),i("li",[e._v("4.开启了内存大页（transparent huge pages）")]),e._v(" "),i("li",[e._v("5.swap：操作系统内存不够导致分页")]),e._v(" "),i("li",[e._v("6.AOF 和磁盘 I/O 导致的延迟")]),e._v(" "),i("li",[e._v("7.expires 淘汰过期数据(大量同时到期的 key 可能会导致性能波动)")]),e._v(" "),i("li",[e._v("8.bigkey")])]),e._v(" "),i("h4",{attrs:{id:"解决"}},[e._v("解决")]),e._v(" "),i("ul",[i("li",[e._v("1.获取当前 Redis 的基线性能；")]),e._v(" "),i("li",[e._v("2.开启慢指令监控，定位慢指令导致的问题；")]),e._v(" "),i("li",[e._v("3.找到慢指令，使用 scan 的方式；")]),e._v(" "),i("li",[e._v("4.将实例的数据大小控制在 2-4GB，避免主从复制加载过大 RDB 文件而阻塞；")]),e._v(" "),i("li",[e._v("5.禁用内存大页，采用了内存大页，生成 RDB 期间，即使客户端修改的数据只有 50B 的数据，Redis 需要复制 2MB 的大页。当写的指令比较多的时候就会导致大量的拷贝，导致性能变慢。")]),e._v(" "),i("li",[e._v("6.Redis 使用的内存是否过大导致 swap；")]),e._v(" "),i("li",[e._v("7.AOF 配置是否合理，可以将配置项 no-appendfsync-on-rewrite 设置为 yes，避免 AOF 重写和 fsync 竞争磁盘 IO 资源，导致 Redis 延迟增加。")]),e._v(" "),i("li",[e._v("8.bigkey 会带来一系列问题，我们需要进行拆分防止出现 bigkey，并通过 UNLINK 异步删除。")])]),e._v(" "),i("h3",{attrs:{id:"redis-进阶"}},[e._v("Redis 进阶")]),e._v(" "),i("h4",{attrs:{id:"发布订阅"}},[e._v("发布订阅")]),e._v(" "),i("p",[e._v("publish xxoo hello\n必须先监听xxoo  subscribe xxoo 之后有消息")]),e._v(" "),i("h4",{attrs:{id:"事务"}},[e._v("事务")]),e._v(" "),i("p",[e._v("multi 开启事务 exec 执行事务\nwatch key  然后开启事务  key在事务外被更改 会退回")]),e._v(" "),i("h4",{attrs:{id:"内存"}},[e._v("内存")]),e._v(" "),i("p",[e._v("maxmemory\nmaxmemory-policy noeviction\n回收策略 LFU碰了多少次 LRU 多久没碰他")]),e._v(" "),i("h3",{attrs:{id:"redis-的应用场景"}},[e._v("Redis 的应用场景")]),e._v(" "),i("p",[e._v("缓存（数据查询、短连接、新闻内容、商品内容等等）\n分布式集群架构中的 session 分离\n聊天室的在线好友列表\n任务队列（秒杀、抢购、12306 等等）\n应用排行榜\n网站访问统计\n数据过期处理（可以精确到毫秒）")]),e._v(" "),i("h3",{attrs:{id:"缓存怎么回收的"}},[e._v("缓存怎么回收的")]),e._v(" "),i("h3",{attrs:{id:"穿透-击穿-雪崩"}},[e._v("穿透 击穿 雪崩")]),e._v(" "),i("p",[e._v("穿透:查询不存在的数据\n击穿：key过期\n雪崩：大量key过期")]),e._v(" "),i("h3",{attrs:{id:"如何回收-删除过期key"}},[e._v("如何回收 删除过期key")]),e._v(" "),i("p",[e._v("1.自己设置的expire自己删除\n2.后台在轮询的时候,分批分段删除那些过期的key\n3.请求的时候判断已经过期了")]),e._v(" "),i("h3",{attrs:{id:"缓存是如何淘汰的"}},[e._v("缓存是如何淘汰的")]),e._v(" "),i("p",[e._v("内存不足的情况下:\nRedis 4.0前提供 6种数据淘汰策略：")]),e._v(" "),i("p",[e._v("volatile-lru：利用LRU算法移除设置过过期时间的key (LRU:最近使用 Least Recently Used )\nallkeys-lru：当内存不足以容纳新写入数据时，在键空间中，移除最近最少使用的key（这个是最常用的）\nvolatile-ttl：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰\nvolatile-random：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰\nallkeys-random：从数据集（server.db[i].dict）中任意选择数据淘汰\nno-eviction：禁止驱逐数据，也就是说当内存不足以容纳新写入数据时，新写入操作会报错。这个应该没人使用吧！\nRedis 4.0后增加以下两种：")]),e._v(" "),i("p",[e._v("volatile-lfu：从已设置过期时间的数据集(server.db[i].expires)中挑选最不经常使用的数据淘汰(LFU(Least Frequently Used)算法，也就是最频繁被访问的数据将来最有可能被访问到)\nallkeys-lfu：当内存不足以容纳新写入数据时，在键空间中，移除最不经常使用的key。")]),e._v(" "),i("h3",{attrs:{id:"如何进行缓存预热"}},[e._v("如何进行缓存预热")]),e._v(" "),i("p",[e._v("1.提前把数据塞进redis\n2.规避 穿透 击穿 雪崩")]),e._v(" "),i("h3",{attrs:{id:"数据库缓存不一致怎么解决"}},[e._v("数据库缓存不一致怎么解决")]),e._v(" "),i("p",[e._v("1.分布式事务 (问题很大)\n2.redis是缓存 允许稍微有时差\n3.减少db操作\n4.canal binlog\n5.mq执行")]),e._v(" "),i("h3",{attrs:{id:"主从不一致"}},[e._v("主从不一致")]),e._v(" "),i("p",[e._v("1.redis 确实是弱一致性的，异步的同步\n2.锁不能用主从（单实例/分片集群/redlock）=>redision\n3.在配置中提供了必须由多个client连接才能同步 可以配置同步因子 趋向于强一致性\n4.wait 2 0")]),e._v(" "),i("h3",{attrs:{id:"redis持久化原理"}},[e._v("redis持久化原理")]),e._v(" "),i("p",[e._v("1.RDB AOF: 主从同步也算持久化\n2.高版本：开启AOF AOF可以通过执行日志 获取全部内存数据\n1） 体积变大，重复无效执行  重写，后台用线程把内存的kv生成指令写个新的aof\n2） 4.x 新增更有性能的模式:把重写方式换成RDB放到aof头部，比2.1方法快,在追加日志")]),e._v(" "),i("h3",{attrs:{id:"redis-持久化原理"}},[e._v("redis 持久化原理")]),e._v(" "),i("p",[e._v("1.当前线程阻塞服务  立刻写 1秒写 内核写\n2.异步后台进程完成持久  fork +copy on right")])])},[],!1,null,null,null);v.default=s.exports}}]);