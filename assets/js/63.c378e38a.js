(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{520:function(s,n,t){"use strict";t.r(n);var a=t(20),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"nginx-虚拟主机"}},[s._v("Nginx 虚拟主机")]),s._v(" "),n("h2",{attrs:{id:"概述"}},[s._v("概述")]),s._v(" "),n("p",[s._v("我们使用 Docker 来安装和运行 Nginx，docker-compose.yml 配置如下：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  nginx:\n    restart: always\n    image: nginx\n    container_name: nginx\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("81")]),s._v(":80\n    volumes:\n      - ./conf/nginx.conf:/etc/nginx/nginx.conf\n      - ./wwwroot:/usr/share/nginx/wwwroot\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"什么是虚拟主机"}},[s._v("什么是虚拟主机？")]),s._v(" "),n("p",[s._v("虚拟主机是一种特殊的软硬件技术，它可以将网络上的每一台计算机分成多个虚拟主机，每个虚拟主机可以独立对外提供 www 服务，这样就可以实现一台主机对外提供多个 web 服务，每个虚拟主机之间是独立的，互不影响的。")]),s._v(" "),n("p",[s._v("通过 Nginx 可以实现虚拟主机的配置，Nginx 支持三种类型的虚拟主机配置")]),s._v(" "),n("ul",[n("li",[s._v("基于 IP 的虚拟主机")]),s._v(" "),n("li",[s._v("基于域名的虚拟主机")]),s._v(" "),n("li",[s._v("基于端口的虚拟主机")])]),s._v(" "),n("h1",{attrs:{id:"nginx-配置文件的结构"}},[s._v("Nginx 配置文件的结构")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\tserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\tserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("strong",[s._v("注： 每个 server 就是一个虚拟主机")])]),s._v(" "),n("h2",{attrs:{id:"基于端口的虚拟主机配置"}},[s._v("基于端口的虚拟主机配置")]),s._v(" "),n("h3",{attrs:{id:"需求"}},[s._v("需求")]),s._v(" "),n("p",[s._v("Nginx 对外提供 80 和 8080 两个端口监听服务\n请求 80 端口则请求 html80 目录下的 html\n请求 8080 端口则请求 html8080 目录下的 html")]),s._v(" "),n("h3",{attrs:{id:"创建目录及文件"}},[s._v("创建目录及文件")]),s._v(" "),n("p",[s._v("在 /usr/local/docker/nginx/wwwroot 目录下创建 html80 和 html8080 两个目录，并分辨创建两个 index.html 文件")]),s._v(" "),n("h3",{attrs:{id:"配置虚拟主机"}},[s._v("配置虚拟主机")]),s._v(" "),n("p",[s._v("修改 /usr/local/docker/nginx/conf 目录下的 nginx.conf 配置文件：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("worker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置虚拟主机 192.168.75.145")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听的ip和端口，配置 192.168.75.145:80")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 虚拟主机名称这里配置ip地址")]),s._v("\n        server_name  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".75.145"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有的请求都以 / 开始，所有的请求都可以匹配此 location")]),s._v("\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 root 指令指定虚拟主机目录即网页存放目录")]),s._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如访问 http://ip/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/index.html")]),s._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如访问 http://ip/item/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/item/index.html")]),s._v("\n\n            root   /usr/share/nginx/wwwroot/html80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定欢迎页面，按从左到右顺序查找")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置虚拟主机 192.168.75.245")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".75.145"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   /usr/share/nginx/wwwroot/html8080"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("h2",{attrs:{id:"基于域名的虚拟主机配置"}},[s._v("基于域名的虚拟主机配置")]),s._v(" "),n("h4",{attrs:{id:"需求-2"}},[s._v("需求")]),s._v(" "),n("ul",[n("li",[s._v("两个域名指向同一台 Nginx 服务器，用户访问不同的域名显示不同的网页内容")]),s._v(" "),n("li",[s._v("两个域名是 admin.service.itoken.funtl.com 和 admin.web.itoken.funtl.com")]),s._v(" "),n("li",[s._v("Nginx 服务器使用虚拟机 192.168.75.145")])]),s._v(" "),n("h1",{attrs:{id:"配置-windows-hosts-文件"}},[s._v("配置 Windows Hosts 文件")]),s._v(" "),n("ul",[n("li",[s._v("通过 host 文件指定 admin.service.itoken.funtl.com 和 admin.web.itoken.funtl.com 对应 192.168.75.145 虚拟机：")]),s._v(" "),n("li",[s._v("修改 window 的 hosts 文件：（C:\\Windows\\System32\\drivers\\etc）")])]),s._v(" "),n("h4",{attrs:{id:"创建目录及文件-2"}},[s._v("创建目录及文件")]),s._v(" "),n("p",[s._v("在 /usr/local/docker/nginx/wwwroot 目录下创建 htmlservice 和 htmlweb 两个目录，并分辨创建两个 index.html 文件")]),s._v(" "),n("h4",{attrs:{id:"配置虚拟主机-2"}},[s._v("配置虚拟主机")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("user  nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    include       mime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    default_type  application/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  admin.service.itoken.funtl.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   /usr/share/nginx/wwwroot/htmlservice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  admin.web.itoken.funtl.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   /usr/share/nginx/wwwroot/htmlweb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index  index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h2",{attrs:{id:"location路径问题"}},[s._v("Location路径问题")]),s._v(" "),n("p",[s._v("如果你想匹配不同的 Location路径，那么你只能通过协调 root中 文件路径的嵌套文件名，双方协调达到你想要的结果\nlocation在虚拟主机中最好 只设置 "),n("code",[s._v("/")])]),s._v(" "),n("h2",{attrs:{id:"nginx-启动"}},[s._v("Nginx 启动")])])}),[],!1,null,null,null);n.default=e.exports}}]);