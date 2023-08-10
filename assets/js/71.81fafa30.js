(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{344:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"gitlab-runner-简介"}},[s._v("GitLab Runner 简介")]),s._v(" "),a("p",[s._v("理解了上面的基本概念之后，有没有觉得少了些什么东西 —— 由谁来执行这些构建任务呢？")]),s._v(" "),a("p",[s._v("答案就是 GitLab Runner 了！")]),s._v(" "),a("p",[s._v("想问为什么不是 GitLab CI 来运行那些构建任务？")]),s._v(" "),a("p",[s._v("一般来说，构建任务都会占用很多的系统资源 (譬如编译代码)，而 GitLab CI 又是 GitLab 的一部分，如果由 GitLab CI 来运行构建任务的话，在执行构建任务的时候，GitLab 的性能会大幅下降。")]),s._v(" "),a("p",[s._v("GitLab CI 最大的作用是管理各个项目的构建状态，因此，运行构建任务这种浪费资源的事情就交给 GitLab Runner 来做拉！")]),s._v(" "),a("p",[s._v("因为 GitLab Runner 可以安装到不同的机器上，所以在构建任务运行期间并不会影响到 GitLab 的性能")]),s._v(" "),a("h2",{attrs:{id:"基于-docker-安装-gitlab-runner"}},[s._v("基于 Docker 安装 GitLab Runner")]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[s._v("环境准备")]),s._v(" "),a("ul",[a("li",[s._v("创建工作目录 /usr/local/docker/runner")]),s._v(" "),a("li",[s._v("创建构建目录 /usr/local/docker/runner/environment")]),s._v(" "),a("li",[s._v("下载 jdk-8u152-linux-x64.tar.gz 并复制到 /usr/local/docker/runner/environment")]),s._v(" "),a("li",[s._v("下载 apache-maven-3.5.3-bin.tar.gz 并复制到 /usr/local/docker/runner/environment")])]),s._v(" "),a("h2",{attrs:{id:"daemon-json"}},[s._v("daemon.json")]),s._v(" "),a("p",[s._v("在 /usr/local/docker/runner/environment 目录下创建 daemon.json，用于配置加速器和仓库地址")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.10.133:5000"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"dockerfile"}},[s._v("Dockerfile")]),s._v(" "),a("p",[s._v("在 /usr/local/docker/runner/environment 目录下创建 Dockerfile")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("FROM gitlab/gitlab-runner\nMAINTAINER Lusifer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("topsale@vip.qq.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改软件源")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" clean\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Docker")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" software-properties-common "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update -y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y docker-ce\nCOPY daemon.json /etc/docker/daemon.json\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Docker Compose")]),s._v("\nWORKDIR /usr/local/bin\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/topsale/resources/master/docker/docker-compose\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x docker-compose\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Java")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/java\nWORKDIR /usr/local/java\nCOPY jdk-8u152-linux-x64.tar.gz /usr/local/java\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf jdk-8u152-linux-x64.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -fr jdk-8u152-linux-x64.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Maven")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/maven\nWORKDIR /usr/local/maven\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RUN wget https://raw.githubusercontent.com/topsale/resources/master/maven/apache-maven-3.5.3-bin.tar.gz")]),s._v("\nCOPY apache-maven-3.5.3-bin.tar.gz /usr/local/maven\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf apache-maven-3.5.3-bin.tar.gz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -fr apache-maven-3.5.3-bin.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# COPY settings.xml /usr/local/maven/apache-maven-3.5.3/conf/settings.xml")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置环境变量")]),s._v("\nENV JAVA_HOME /usr/local/java/jdk1.8.0_152\nENV MAVEN_HOME /usr/local/maven/apache-maven-3.5.3\nENV "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEN_HOME")]),s._v("/bin\n\nWORKDIR /\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h2",{attrs:{id:"docker-compose-yml"}},[s._v("docker-compose.yml")]),s._v(" "),a("p",[s._v("在 /usr/local/docker/runner 目录下创建 docker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("version: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\nservices:\n  gitlab-runner:\n    build: environment\n    restart: always\n    container_name: gitlab-runner\n    privileged: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    volumes:\n      - ./config:/etc/gitlab-runner\n      - /var/run/docker.sock:/var/run/docker.sock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"注册-runner"}},[s._v("注册 Runner")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it gitlab-runner gitlab-runner register\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 GitLab 地址")]),s._v("\nPlease enter the gitlab-ci coordinator URL "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g. https://gitlab.com/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nhttp://192.168.10.132/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 GitLab Token")]),s._v("\nPlease enter the gitlab-ci token "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner:\n1Lxq_f1NRfCfeNbE5WRh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入 Runner 的说明")]),s._v("\nPlease enter the gitlab-ci description "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner:\n可以为空\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置 Tag，可以用于指定在构建规定的 tag 时触发 ci")]),s._v("\nPlease enter the gitlab-ci tags "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this runner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("comma separated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\ndeploy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里选择 true ，可以用于代码上传后直接执行")]),s._v("\nWhether to run untagged builds "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("true/false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里选择 false，可以直接回车，默认为 false")]),s._v("\nWhether to lock Runner to current project "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("true/false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择 runner 执行器，这里我们选择的是 shell")]),s._v("\nPlease enter the executor: virtualbox, docker+machine, parallels, shell, ssh, docker-ssh+machine, kubernetes, docker, docker-ssh:\nshell\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"使用-runner"}},[s._v("使用 Runner")]),s._v(" "),a("h3",{attrs:{id:"gitlab-ci-地址与"}},[s._v("GitLab CI 地址与")]),s._v(" "),a("p",[s._v("项目 –> 设置 –> CI/CD –> Runner 设置\n"),a("a",{attrs:{href:"/img/pwc/gitlabrunner1.png"}},[s._v("gitlabrunner1")])]),s._v(" "),a("h2",{attrs:{id:"gitlab-ci-yml"}},[s._v(".gitlab-ci.yml")]),s._v(" "),a("p",[s._v("在项目工程下编写 .gitlab-ci.yml 配置文件：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("stages:\n  - install_deps\n  - "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n  - build\n  - deploy_test\n  - deploy_production\n\ncache:\n  key: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CI_BUILD_REF_NAME}")]),s._v("\n  paths:\n    - node_modules/\n    - dist/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\ninstall_deps:\n  stage: install_deps\n  only:\n    - develop\n    - master\n  script:\n    - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行测试用例")]),s._v("\ntest:\n  stage: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n  only:\n    - develop\n    - master\n  script:\n    - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\nbuild:\n  stage: build\n  only:\n    - develop\n    - master\n  script:\n    - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run clean\n    - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:client\n    - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署测试服务器")]),s._v("\ndeploy_test:\n  stage: deploy_test\n  only:\n    - develop\n  script:\n    - pm2 delete app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    - pm2 start app.js --name app\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署生产服务器")]),s._v("\ndeploy_production:\n  stage: deploy_production\n  only:\n    - master\n  script:\n    - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" scripts/deploy/deploy.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])]),a("p",[s._v("上面的配置把一次 Pipeline 分成五个阶段：")]),s._v(" "),a("ul",[a("li",[s._v("安装依赖(install_deps)")]),s._v(" "),a("li",[s._v("运行测试(test)")]),s._v(" "),a("li",[s._v("编译(build)")]),s._v(" "),a("li",[s._v("部署测试服务器(deploy_test)")]),s._v(" "),a("li",[s._v("部署生产服务器(deploy_production)\n"),a("strong",[s._v("注意：")]),s._v(" 设置 Job.only 后，只有当 develop 分支和 master 分支有提交的时候才会触发相关的 Jobs。")])]),s._v(" "),a("p",[s._v("节点说明：")]),s._v(" "),a("ul",[a("li",[s._v("stages：定义构建阶段，这里只有一个阶段 deploy")]),s._v(" "),a("li",[s._v("deploy：构建阶段 deploy 的详细配置也就是任务配置")]),s._v(" "),a("li",[s._v("script：需要执行的 shell 脚本")]),s._v(" "),a("li",[s._v("only：这里的 master 指在提交到 master 时执行")]),s._v(" "),a("li",[s._v("tags：与注册 runner 时的 tag 匹配")])]),s._v(" "),a("h1",{attrs:{id:"测试集成效果"}},[s._v("测试集成效果")]),s._v(" "),a("p",[s._v("所有操作完成后 push 代码到服务器，查看是否成功：\n"),a("a",{attrs:{href:"/img/pwc/gitlabrunner2.png"}},[s._v("gitlabrunner2")]),s._v("\npassed 表示执行成功")]),s._v(" "),a("h3",{attrs:{id:"其它命令"}},[s._v("其它命令")]),s._v(" "),a("ul",[a("li",[s._v("删除注册信息")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("gitlab-ci-multi-runner unregister --name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"名称"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看注册列表")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("gitlab-ci-multi-runner list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"附：项目配置-dockerfile-案例"}},[s._v("附：项目配置 Dockerfile 案例")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("FROM openjdk:8-jre\n\nMAINTAINER Lusifer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("topsale@vip.qq.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nENV APP_VERSION "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0-SNAPSHOT\nENV DOCKERIZE_VERSION v0.6.1\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/jwilder/dockerize/releases/download/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DOCKERIZE_VERSION")]),s._v("/dockerize-linux-amd64-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DOCKERIZE_VERSION")]),s._v(".tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -C /usr/local/bin -xzvf dockerize-linux-amd64-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DOCKERIZE_VERSION")]),s._v(".tar.gz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" dockerize-linux-amd64-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DOCKERIZE_VERSION")]),s._v(".tar.gz\n\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /app\n\nCOPY myshop-service-user-provider-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$APP_VERSION")]),s._v(".jar /app/app.jar\nENTRYPOINT "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dockerize"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-timeout"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5m"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-wait"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://192.168.10.131:3306"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Djava.security.egd=file:/dev/./urandom"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app/app.jar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nEXPOSE "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8501")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])},[],!1,null,null,null);n.default=e.exports}}]);