(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{342:function(s,e,n){"use strict";n.r(e);var t=n(10),r=Object(t.a)({},function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"概述"}},[s._v("概述")]),s._v(" "),n("p",[s._v("官方的 Docker Hub 是一个用于管理公共镜像的地方，我们可以在上面找到我们想要的镜像，也可以把我们自己的镜像推送上去。但是，有时候我们的服务器无法访问互联网，或者你不希望将自己的镜像放到公网当中，那么你就需要 Docker Registry，它可以用来存储和管理自己的镜像。")]),s._v(" "),n("h2",{attrs:{id:"安装docker私服"}},[s._v("安装Docker私服")]),s._v(" "),n("p",[s._v("在之前的 Docker 私有仓库 章节中已经提到过如何配置和使用容器运行私有仓库，这里我们使用 docker-compose 来安装，配置如下：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  registry:\n    image: registry\n    restart: always\n    container_name: registry\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000\n    volumes:\n      - /usr/local/docker/registry/data:/var/lib/registry\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"测试"}},[s._v("测试")]),s._v(" "),n("p",[s._v("启动成功后需要测试服务端是否能够正常提供服务，有两种方式：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("浏览器端访问\nhttp://ip:5000/v2/\n"),n("img",{attrs:{src:"/img/pwc/registry.png",alt:"registry"}})])]),s._v(" "),n("li",[n("p",[s._v("终端访问")])])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://ip:5000/v2/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"/img/pwc/registry1.png",alt:"registry"}})]),s._v(" "),n("h2",{attrs:{id:"注意事项"}},[s._v("注意事项")]),s._v(" "),n("p",[s._v("如果你不想使用 "),n("code",[s._v("127.0.0.1:5000")]),s._v(" 作为仓库地址，比如想让本网段的其他主机也能把镜像推送到私有仓库。你就得把例如 "),n("code",[s._v("192.168.199.100:5000 ")]),s._v("这样的内网地址作为私有仓库地址，这时你会发现无法成功推送镜像。")]),s._v(" "),n("p",[s._v("这是因为 Docker 默认不允许非 "),n("code",[s._v("HTTPS")]),s._v(" 方式推送镜像。我们可以通过 Docker 的配置选项来取消这个限制，或者查看下一节配置能够通过 "),n("code",[s._v("HTTPS")]),s._v(" 访问的私有仓库。")]),s._v(" "),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("小提示（解决方法）")]),s._v(" "),n("p",[s._v("对于Ubuntu 14.04, Debian 7 Wheezy 版本的（upstart）系统\n，编辑 /etc/default/docker 文件，在其中的 DOCKER_OPTS 中增加如下内容：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOCKER_OPTS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--registry-mirror=https://registry.docker-cn.com --insecure-registries=192.168.199.100:5000"')]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("重新启动服务。")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("对于Ubuntu 16.04+, Debian 8+, centos 7 （systemd）系统，请直接使用下面配置 Docker Registry客户端的方法解决")])]),s._v(" "),n("h2",{attrs:{id:"配置docker-registry客户端"}},[s._v("配置Docker Registry客户端")]),s._v(" "),n("p",[s._v("我们这里使用的是 Ubuntu Server 16.04 LTS 版本，属于 systemd 系统，需要在 /etc/docker/daemon.json 中增加如下内容（如果文件不存在请新建该文件）")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n     "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip:5000"')]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("注意：该文件必须符合 json 规范，否则 Docker 将不能启动。\n之后重新启动服务。")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"检查客户端配置是否生效"}},[s._v("检查客户端配置是否生效")]),s._v(" "),n("p",[s._v("使用 docker info 命令手动检查，如果从配置中看到如下内容，说明配置成功（106.13.126.235 为当前案例 IP）")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("Insecure Registries:\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.13")]),s._v(".126.235:5000\n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.0/8\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"测试镜像上传"}},[s._v("测试镜像上传")]),s._v(" "),n("p",[s._v("我们以 Nginx 为例测试镜像上传功能")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 拉取一个镜像")]),s._v("\ndocker pull nginx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看全部镜像")]),s._v("\ndocker images\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 标记本地镜像并指向目标仓库（ip:port/image_name:tag，该格式为标记版本号）")]),s._v("\ndocker tag nginx "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.13")]),s._v(".126.235:5000/nginx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 提交镜像到仓库")]),s._v("\ndocker push "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.13")]),s._v(".126.235:5000/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"查看全部镜像"}},[s._v("查看全部镜像")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XGET http://106.13.126.235:5000/v2/_catalog\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"查看指定镜像"}},[s._v("查看指定镜像")]),s._v(" "),n("p",[s._v("以 Nginx 为例，查看已提交的列表(命令方式查看)")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -XGET http://106.13.126.235:5000/v2/nginx/tags/list\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("浏览器方式查看")]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/pwc/registry2.png",alt:"resgistry2"}})]),s._v(" "),n("h2",{attrs:{id:"测试拉取镜像"}},[s._v("测试拉取镜像")]),s._v(" "),n("ul",[n("li",[s._v("先删除镜像本地镜像（尝试从镜像私服拉去镜像）\ndocker rmi nginx\ndocker rmi 106.13.126.235:5000/nginx")]),s._v(" "),n("li",[s._v("再拉取镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("docker pull "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.13")]),s._v(".126.235:5000/nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("拉取镜像成功")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/pwc/registry3.png",alt:"registry3"}})]),s._v(" "),n("h2",{attrs:{id:"部署-docker-registry-webui"}},[s._v("部署 Docker Registry WebUI")]),s._v(" "),n("p",[s._v("私服安装成功后就可以使用 docker 命令行工具对 registry 做各种操作了。然而不太方便的地方是不能直观的查看 registry 中的资源情况。如果可以使用 UI 工具管理镜像就更好了。这里介绍两个 Docker Registry WebUI 工具")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/kwk/docker-registry-frontend",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-registry-frontend"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://hub.docker.com/r/hyper/docker-registry-web/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker-registry-web"),n("OutboundLink")],1)])]),s._v(" "),n("p",[s._v("两个工具的功能和界面都差不多，我们以 docker-registry-fontend 为例讲解")]),s._v(" "),n("h2",{attrs:{id:"docker-registry-frontend"}},[s._v("docker-registry-frontend")]),s._v(" "),n("p",[s._v("我们使用 docker-compose 来安装和运行，docker-compose.yml 配置如下：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("version: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  frontend:\n    image: konradkleine/docker-registry-frontend:v2\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80\n    volumes:\n      - ./certs/frontend.crt:/etc/apache2/server.crt:ro\n      - ./certs/frontend.key:/etc/apache2/server.key:ro\n    environment:\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ENV_DOCKER_REGISTRY_HOST")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("106.13")]),s._v(".126.235\n      - "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ENV_DOCKER_REGISTRY_PORT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("运行docker-compose up -d (守护进程方式运行: 即后台运行)")]),s._v(" "),n("blockquote",[n("p",[s._v("注意：请将配置文件中的主机和端口换成自己仓库的地址\n运行成功后在浏览器访问：http://106.13.126.235:8080\n"),n("img",{attrs:{src:"/img/pwc/webui.png",alt:"webui"}})])])])},[],!1,null,null,null);e.default=r.exports}}]);