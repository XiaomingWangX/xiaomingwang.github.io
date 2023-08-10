(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{394:function(a,r,t){"use strict";t.r(r);var o=t(10),e=Object(o.a)({},function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-什么是kafka"}},[a._v("1 什么是kafka")]),a._v(" "),t("p",[a._v("Kafka是分布式发布-订阅消息系统，它最初是由LinkedIn公司开发的，之后成为Apache项目的一部分，Kafka是一个分布式，可划分的，冗余备份的持久性的日志服务，它主要用于处理流式数据。")]),a._v(" "),t("h1",{attrs:{id:"_2-为什么要使用-kafka，为什么要使用消息队列"}},[a._v("2 为什么要使用 kafka，为什么要使用消息队列")]),a._v(" "),t("p",[a._v("缓冲和削峰：上游数据时有突发流量，下游可能扛不住，或者下游没有足够多的机器来保证冗余，kafka在中间可以起到一个缓冲的作用，把消息暂存在kafka中，下游服务就可以按照自己的节奏进行慢慢处理。")]),a._v(" "),t("p",[a._v("解耦和扩展性：项目开始的时候，并不能确定具体需求。消息队列可以作为一个接口层，解耦重要的业务流程。只需要遵守约定，针对数据编程即可获取扩展能力。")]),a._v(" "),t("p",[a._v("冗余：可以采用一对多的方式，一个生产者发布消息，可以被多个订阅topic的服务消费到，供多个毫无关联的业务使用。")]),a._v(" "),t("p",[a._v("健壮性：消息队列可以堆积请求，所以消费端业务即使短时间死掉，也不会影响主要业务的正常进行。")]),a._v(" "),t("p",[a._v("异步通信：很多时候，用户不想也不需要立即处理消息。消息队列提供了异步处理机制，允许用户把一个消息放入队列，但并不立即处理它。想向队列中放入多少消息就放多少，然后在需要的时候再去处理它们。")]),a._v(" "),t("h1",{attrs:{id:"_3-kafka中的isr、ar又代表什么？isr的伸缩又指什么"}},[a._v("3 Kafka中的ISR、AR又代表什么？ISR的伸缩又指什么")]),a._v(" "),t("p",[a._v("ISR:In-Sync Replicas 副本同步队列\nAR:Assigned Replicas 所有副本\nISR是由leader维护，follower从leader同步数据有一些延迟（包括延迟时间replica.lag.time.max.ms和延迟条数replica.lag.max.messages两个维度,\n当前最新的版本0.10.x中只支持replica.lag.time.max.ms这个维度），\n任意一个超过阈值都会把follower剔除出ISR, 存入OSR（Outof-Sync Replicas）列表，新加入的follower也会先存放在OSR中。AR=ISR+OSR。\nFollower可以批量的从Leader复制数据，而且Leader充分利用磁盘顺序读以及send file(zero copy)机制，这样极大的提高复制性能，内部批量写磁盘，大幅减少了Follower与Leader的消息量差")]),a._v(" "),t("h1",{attrs:{id:"kafka-为什么那么快"}},[a._v("kafka 为什么那么快")]),a._v(" "),t("p",[a._v("Cache Filesystem Cache PageCache缓存")]),a._v(" "),t("p",[a._v("顺序写 由于现代的操作系统提供了预读和写技术，磁盘的顺序写大多数情况下比随机写内存还要快。")]),a._v(" "),t("p",[a._v("Zero-copy 零拷技术减少拷贝次数")]),a._v(" "),t("p",[a._v("Batching of Messages 批量量处理。合并小的请求，然后以流的方式进行交互，直顶网络上限。")]),a._v(" "),t("p",[a._v("Pull 拉模式 使用拉模式进行消息的获取消费，与消费端处理能力相符。")]),a._v(" "),t("h1",{attrs:{id:"kafka-producer如何优化打入速度"}},[a._v("kafka producer如何优化打入速度")]),a._v(" "),t("p",[a._v("增加线程")]),a._v(" "),t("p",[a._v("提高 batch.size")]),a._v(" "),t("p",[a._v("增加更多 producer 实例")]),a._v(" "),t("p",[a._v("增加 partition 数")]),a._v(" "),t("p",[a._v("设置 acks=-1 时，如果延迟增大：可以增大 num.replica.fetchers（follower 同步数据的线程数）来调解；")]),a._v(" "),t("p",[a._v("跨数据中心的传输：增加 socket 缓冲区设置以及 OS tcp 缓冲区设置")]),a._v(" "),t("h1",{attrs:{id:"kafka中是怎么体现消息顺序性的？"}},[a._v("Kafka中是怎么体现消息顺序性的？")]),a._v(" "),t("p",[a._v("topic 下有多个partition 数据分片")]),a._v(" "),t("p",[a._v("kafka每个partition中的消息在写入时都是有序的，消费时，每个partition只能被每一个group中的一个消费者消费，保证了消费时也是有序的。")]),a._v(" "),t("p",[a._v("整个topic不保证有序。如果为了保证topic整个有序，那么将partition调整为1.")]),a._v(" "),t("h1",{attrs:{id:"kafka-架构"}},[a._v("kafka 架构")]),a._v(" "),t("p",[a._v("一个kafka架构包括若干个Producer（服务器日志、业务数据、web前端产生的page view等），\n若干个Broker（kafka支持水平扩展，一般broker数量越多集群的吞吐量越大），若干个consumer group，\n一个Zookeeper集群（kafka通过Zookeeper管理集群配置、选举leader、consumer group发生变化时进行rebalance）")]),a._v(" "),t("h2",{attrs:{id:"名称解释"}},[a._v("名称解释")]),a._v(" "),t("h3",{attrs:{id:"broker"}},[a._v("Broker")]),a._v(" "),t("p",[a._v("消息中间件处理节点（服务器），一个节点就是一个broker，一个Kafka集群由一个或多个broker组成")]),a._v(" "),t("h3",{attrs:{id:"topic"}},[a._v("Topic")]),a._v(" "),t("p",[a._v("Kafka对消息进行归类，发送到集群的每一条消息都要指定一个topic")]),a._v(" "),t("h3",{attrs:{id:"partition"}},[a._v("Partition")]),a._v(" "),t("p",[a._v("物理上的概念，每个topic包含一个或多个partition，一个partition对应一个文件夹，这个文件夹下存储partition的数据和索引文件，每个partition内部是有序的")]),a._v(" "),t("h3",{attrs:{id:"producer"}},[a._v("Producer")]),a._v(" "),t("p",[a._v("生产者，负责发布消息到broker")]),a._v(" "),t("h3",{attrs:{id:"consumer"}},[a._v("Consumer")]),a._v(" "),t("p",[a._v("消费者，从broker读取消息")]),a._v(" "),t("h3",{attrs:{id:"consumergroup"}},[a._v("ConsumerGroup")]),a._v(" "),t("p",[a._v("每个consumer属于一个特定的consumer group，可为每个consumer指定group name，若不指定，则属于默认的group，一条消息可以发送到不同的consumer group，但一个consumer group中只能有一个consumer能消费这条消息")]),a._v(" "),t("h3",{attrs:{id:"topic-partition"}},[a._v("Topic & Partition")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("一个topic为一类消息，每条消息必须指定一个topic。物理上，一个topic分成一个或多个partition，每个partition有多个副本分布在不同的broker中。")])]),a._v(" "),t("li",[t("p",[a._v("每个partition在存储层面是一个append log文件，发布到此partition的消息会追加到log文件的尾部，为顺序写人磁盘（顺序写磁盘比随机写内存的效率还要高）。")])])]),a._v(" "),t("p",[a._v("每条消息在log文件中的位置成为offset（偏移量），offset为一个long型数字，唯一标记一条消息")]),a._v(" "),t("h2",{attrs:{id:"kafka-分区分配策略"}},[a._v("Kafka 分区分配策略")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("在 Kafka 中，同一个 Group 中的消费者对于一个 Topic 中的多个 partition 存在一定的分区分配策略。")])]),a._v(" "),t("li",[t("p",[a._v("在 Kafka 中，存在两种分区分配策略，一种是 Range（默认）、另一种是 RoundRobin（轮询）。通过partition.assignment.strategy 这个参数来设置。")])])])])},[],!1,null,null,null);r.default=e.exports}}]);