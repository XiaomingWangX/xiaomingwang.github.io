(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{339:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"下载gitlab-中文版docker镜像"}},[s._v("下载gitlab 中文版docker镜像")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker pull twang2218/gitlab-ce-zh:11.1.4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看镜像是否下载安装成功")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker images \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果显示以下内容，安装镜像成功")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("xiaoming@xiaoming:/usr/local/docker/gitlab$ docker images\nREPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\ntwang2218/gitlab-ce-zh   latest              18da462b5ff5        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" months ago       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".61GB\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"使用compose-安装部署"}},[s._v("使用compose 安装部署")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("使用docker-compose安装应用组件的时候，最好在/usr/local/  目录下新建docker文件夹，然后每次装一种\n应用，就在该docker目录下新建一个应用的文件夹，然后通过数据卷的方式，指向相应应用的文件夹，将这个规则编写到\ndocker-compose.yml 的volumes 中")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("volumes:\n        - /usr/local/docker/gitlab/config:/etc/gitlab\n        - /usr/local/docker/gitlab/data:/var/opt/gitlab\n        - /usr/local/docker/gitlab/logs:/var/log/gitlab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("h3",{attrs:{id:"配置docker-compose-yml"}},[s._v("配置docker-compose.yml")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",[s._v("我在安装的时候，version为3时候，安装失败，一直没有反应")]),s._v(" "),t("p",[s._v("external_url 和nginx对应端口一定要 一致")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("version: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),s._v("\nservices:\n    gitlab:\n      image: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'twang2218/gitlab-ce-zh:11.1.4'")]),s._v("\n      restart: always\n      hostname: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.254.132'")]),s._v("\n      environment:\n        TZ: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Asia/Shanghai'")]),s._v("\n        GITLAB_OMNIBUS_CONFIG: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n          external_url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.254.132:8082'")]),s._v("\n          unicorn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'port'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v("\n          gitlab_rails"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gitlab_shell_ssh_port'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("\n          nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'listen_port'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n      ports:\n        - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8082:8082'")]),s._v("\n        - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8443:443'")]),s._v("\n        - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2222:22'")]),s._v("\n      volumes:\n        - /usr/local/docker/gitlab/config:/etc/gitlab\n        - /usr/local/docker/gitlab/data:/var/opt/gitlab\n        - /usr/local/docker/gitlab/logs:/var/log/gitlab\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h3",{attrs:{id:"开启docker-compose"}},[s._v("开启docker-compose")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker-compose up -d  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"等待gitlab安装"}},[s._v("等待gitlab安装")]),s._v(" "),t("h3",{attrs:{id:"需要等待一段时间"}},[s._v("需要等待一段时间")]),s._v(" "),t("p",[s._v("安装成功之后 ，要先设置初始密码，然后登录（默认用户root）")]),s._v(" "),t("blockquote",[t("p",[s._v("安装成功页面\n"),t("img",{attrs:{src:"/img/pwc/gitlablogin.png",alt:"gitlab"}})])])])},[],!1,null,null,null);a.default=e.exports}}]);