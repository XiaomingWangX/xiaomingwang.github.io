(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{459:function(t,a,s){"use strict";s.r(a);var e=s(20),i=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"项目依赖结构"}},[t._v("项目依赖结构")]),t._v(" "),a("ul",[a("li",[t._v("atms-api ： 实体类，枚举，Dto")]),t._v(" "),a("li",[t._v("atms-common ： 公共配置，顶级接口，工具类。 依赖于： atms-api")]),t._v(" "),a("li",[t._v("atms-assemble： 项目启动模块，存放项目启动相关配置，包括 SpringSecurity 和SwaggerConfig； 依赖atms-web、atms-mq")]),t._v(" "),a("li",[t._v("atms-base-biz： ServiceImpl层服务; 依赖： amts-api、atms-dal")]),t._v(" "),a("li",[t._v("atms-dal ： Dao（Mapper）层服务，包括： Mapper、BeanExample")]),t._v(" "),a("li",[t._v("amts-mq： RabbitMq 服务")]),t._v(" "),a("li",[t._v("atms-web：控制层服务。包括Controller接口请求控制器、具体权限控制；依赖: 业务-biz")])]),t._v(" "),a("blockquote",[a("p",[t._v("atms-assembel -> atms-web -> 具体业务的biz (配合 atms-api 实体类层) -> atms-dal")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("小提示")]),t._v(" "),a("p",[t._v("带有biz后缀的模块，都是不同业务模块对应服务层（ServiceImpl层）\n项目去掉了service接口层，通过直接继承共用的BaseService来设计（BaseService在atms-common模块中）")])]),t._v(" "),a("h2",{attrs:{id:"附加"}},[t._v("附加")]),t._v(" "),a("p",[a("strong",[t._v("因为公司产品代码，具体代码未开放，对您造成的不便，请谅解")])])])}),[],!1,null,null,null);a.default=i.exports}}]);