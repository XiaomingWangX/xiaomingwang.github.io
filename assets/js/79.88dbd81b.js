(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{505:function(s,a,n){"use strict";n.r(a);var e=n(20),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker-compose-yml"}},[s._v("docker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\nservices:\n     es-master:\n       image:  elasticsearch:6.4.3\n       container_name: es-master\n       restart: always\n       volumes:\n         - ./master/data:/usr/share/elasticsearch/data\n         - ./master/conf/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n         - ./master/plugins:/usr/share/elasticsearch/plugins\n         - ./master/logs:/user/share/elasticsearch/logs\n       environment:\n         - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n       ports:\n         - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9200:9200"')]),s._v("\n         - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9300:9300"')]),s._v("\n\n     es-node1:\n       image:  elasticsearch:6.4.3\n       container_name: es-node1\n       restart: always\n       volumes:\n         - ./node1/data:/usr/share/elasticsearch/data\n         - ./node1/conf/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n         - ./node1/plugins:/usr/share/elasticsearch/plugins\n         - ./node1/logs:/user/share/elasticsearch/logs\n       environment:\n         - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n     es-node2:\n       image:  elasticsearch:6.4.3\n       container_name: es-node2\n       restart: always\n       volumes:\n         - ./node2/data:/usr/share/elasticsearch/data\n         - ./node2/conf/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\n         - ./node2/plugins:/usr/share/elasticsearch/plugins\n         - ./node2/logs:/user/share/elasticsearch/logs\n       environment:\n         - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ES_JAVA_OPTS=-Xms512m -Xmx512m"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面是es-head 插件，可以不安装，可以直接在window down下来连接，相当于一个 mysql客户端，直接使用window的也行    ")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#es-head:")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#image: tobias74/elasticsearch-head:6")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#container_name: es-head")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#restart: always")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ports:")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#- "9100:9100"')]),s._v("\n\n     kibana:\n       image: kibana:6.4.3\n       container_name: kibana\n       environment:\n         - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ELASTICSEARCH_HOSTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://es-master:9200\n         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要将Kibana配置文件中的小写转换成大写，然后这个才能用于变量，才能被设置到")]),s._v("\n         - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("I18N_LOCALE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh-CN\n         - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("xpack.monitoring.ui.container.elasticsearch.enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false\n       ports:\n         - "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v(":5601\n       volumes:\n         - ./kibana/conf/kibana.yml:/usr/share/kibana/config/kibana.yml\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br")])]),a("h2",{attrs:{id:"master-节点的-配置文件-elasticsearch-yml"}},[s._v("master 节点的 配置文件 elasticsearch.yml")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("bootstrap.memory_lock: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\ncluster.name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es-cluster"')]),s._v("\nnode.name: es-master\nnode.master: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nnode.data: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nnetwork.host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nhttp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\ntransport.tcp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("\ndiscovery.zen.ping.unicast.hosts: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9300, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9301, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9302"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\ndiscovery.zen.minimum_master_nodes: 1\n\npath.logs: /usr/share/elasticsearch/logs\nhttp.cors.enabled: true\nhttp.cors.allow-origin: "')]),s._v('*"\nxpack.security.audit.enabled: '),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"node1-节点的-配置文件-elasticsearch-yml"}},[s._v("node1 节点的 配置文件 elasticsearch.yml")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("cluster.name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es-cluster"')]),s._v("\nnode.name: node1\nnode.master: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nnode.data: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nnetwork.host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nnetwork.publish_host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nnetwork.bind_host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nhttp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9201")]),s._v("\ntransport.tcp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9301")]),s._v("\ndiscovery.zen.ping.unicast.hosts: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9300, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9301, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9302\n\npath.logs: /usr/share/elasticsearch/logs\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"node2-节点的配置文件-elasticsearch-yml"}},[s._v("node2 节点的配置文件 elasticsearch.yml")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("cluster.name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es-cluster"')]),s._v("\nnode.name: node2\nnode.master: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nnode.data: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nnetwork.host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nhttp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9202")]),s._v("\ntransport.tcp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9302")]),s._v("\ndiscovery.zen.ping.unicast.hosts: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9300, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9301, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("182.92")]),s._v(".153.190:9302\n\npath.logs: /usr/share/elasticsearch/logs\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"kibana-yml"}},[s._v("kibana.yml")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("server.host: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),s._v("\nelasticsearch.url: http://182.92.153.190:9200\nxpack:\n  apm.ui.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  graph.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  ml.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  monitoring.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  reporting.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  security.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  grokdebugger.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  searchprofiler.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);