(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{384:function(e,n,t){"use strict";t.r(n);var s=t(10),r=Object(s.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"注册中心功能"}},[e._v("注册中心功能")]),e._v(" "),t("ul",[t("li",[e._v("够实现服务治理")]),e._v(" "),t("li",[e._v("服务动态扩容")]),e._v(" "),t("li",[e._v("以及服务调用的负载均衡")])]),e._v(" "),t("h1",{attrs:{id:"eureka"}},[e._v("eureka")]),e._v(" "),t("h2",{attrs:{id:"eureka-client-启动"}},[e._v("eureka client 启动")]),e._v(" "),t("h3",{attrs:{id:"_1-读取与eurekaserver交互的配置信息封装成eurekaclientconfig"}},[e._v("1.读取与EurekaServer交互的配置信息封装成EurekaClientConfig")]),e._v(" "),t("h3",{attrs:{id:"_2-读取自身配置封装成eurekainstanceconfig"}},[e._v("2.读取自身配置封装成EurekaInstanceConfig")]),e._v(" "),t("h3",{attrs:{id:"_3-从eureka服务端拉去注册信息缓存到本地"}},[e._v("3.从eureka服务端拉去注册信息缓存到本地")]),e._v(" "),t("h3",{attrs:{id:"_4-服务注册"}},[e._v("4.服务注册")]),e._v(" "),t("h3",{attrs:{id:"_5-初始化三个定时器：1-发送心跳-2-刷新缓存-3-按需注册"}},[e._v("5.初始化三个定时器：1.发送心跳 2.刷新缓存 3.按需注册")]),e._v(" "),t("h2",{attrs:{id:"执行"}},[e._v("执行")]),e._v(" "),t("h2",{attrs:{id:"销毁"}},[e._v("销毁")]),e._v(" "),t("h2",{attrs:{id:"eureka-clent-源码-com-netflix-discovery-discoveryclient"}},[e._v("eureka clent 源码  com.netflix.discovery.DiscoveryClient")]),e._v(" "),t("p",[e._v("spring.factories文件是帮助spring-boot项目包以外的bean\n（即在pom文件中添加依赖中的bean）注册到spring-boot项目的spring容器的")]),e._v(" "),t("p",[e._v("spring.factory里面记录类名 类上注解 @EnableAutoConfiguration")]),e._v(" "),t("h2",{attrs:{id:"eureka-server-源码"}},[e._v("eureka server 源码")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("接受服务注册")])]),e._v(" "),t("li",[t("p",[e._v("接受服务心跳")])]),e._v(" "),t("li",[t("p",[e._v("服务剔除")])]),e._v(" "),t("li",[t("p",[e._v("服务下线")])]),e._v(" "),t("li",[t("p",[e._v("集群同步（1.启动时从peer拉取信息，2.将注册到自己的服务同步到peer）")]),e._v(" "),t("p",[e._v('在com.netflix.eureka.resources包下的ApplicationResource资源中，查看每个服务的操作。比如服务注册public Response addInstance(，此方法中有\nregistry.register(info, "true".equals(isReplication))')]),e._v(" "),t("p",[e._v("Eureka Server中获取注册表的服务实例信息主要通过两个方法实现")]),e._v(" "),t("p",[e._v("AbstractInstanceRegistry#getApplicationsFromMultipleRegions从多地区获取全量注册表数据")]),e._v(" "),t("p",[e._v("AbstractInstanceRegistry#getApplicationDeltasFromMultipleRegions从多地区获取增量式注册表数据。")])])]),e._v(" "),t("h2",{attrs:{id:"eureka监听事件"}},[e._v("Eureka监听事件")]),e._v(" "),t("p",[e._v("Eureka Server中获取注册表的服务实例信息主要通过两个方法实现")]),e._v(" "),t("p",[e._v("AbstractInstanceRegistry#getApplicationsFromMultipleRegions从多地区获取全量注册表数据")]),e._v(" "),t("p",[e._v("AbstractInstanceRegistry#getApplicationDeltasFromMultipleRegions从多地区获取增量式注册表数据。")]),e._v(" "),t("p",[e._v("EurekaInstanceCanceledEvent 服务下线事件")]),e._v(" "),t("p",[e._v("EurekaInstanceRegisteredEvent 服务注册事件")]),e._v(" "),t("p",[e._v("EurekaInstanceRenewedEvent 服务续约事件")]),e._v(" "),t("p",[e._v("EurekaRegistryAvailableEvent 注册中心可用事件")]),e._v(" "),t("p",[e._v("EurekaServerStartedEvent  注册中心启动")]),e._v(" "),t("h2",{attrs:{id:"eureka-配置"}},[e._v("eureka 配置")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server:\neureka:\n  server: \n  \t#关闭自我保护\n    enable-self-preservation: false\n    #清理服务间隔时间，毫秒 默认6000ms\n    eviction-interval-timer-in-ms: 5000\n    \nclient：\neureka: \n  client:\n    healthcheck:\n      #开启健康检查，需要引入actuator\n      enabled: true\n  instance:  \n    #发送心跳给server的频率，每隔这个时间会主动心跳一次  默认30\n    lease-renewal-interval-in-seconds: 30    \n    #Server从收到client后，下一次收到心跳的间隔时间。超过这个时间没有接收到心跳EurekaServer就会将这个实例剔除 默认90\n    lease-expiration-duration-in-seconds: 90   \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br")])]),t("p",[e._v("EurekaServerStartedEvent  注册中心启动")])])},[],!1,null,null,null);n.default=r.exports}}]);