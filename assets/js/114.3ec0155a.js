(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{387:function(n,t,s){"use strict";s.r(t);var e=s(10),a=Object(e.a)({},function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("#原理")]),n._v(" "),s("h2",{attrs:{id:"server端tcp连接为例，这里我们使用reactor模型-："}},[n._v("Server端TCP连接为例，这里我们使用Reactor模型)：")]),n._v(" "),s("p",[n._v("+监听端口，建立Socket连接\n+建立线程，处理内容\n+读取Socket内容，并对协议进行解析\n+进行逻辑处理\n+回写响应内容\n+如果是多次交互的应用(SMTP、FTP)，则需要保持连接多进行几次交互\n+关闭连接")]),n._v(" "),s("h1",{attrs:{id:"代码"}},[n._v("代码")]),n._v(" "),s("h2",{attrs:{id:"netty客户端"}},[n._v("netty客户端")]),n._v(" "),s("p",[n._v("SendClinet.java")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('package bigdata.nionetty.sendstring;\n \nimport io.netty.bootstrap.Bootstrap;\nimport io.netty.channel.Channel;\nimport io.netty.channel.ChannelFuture;\nimport io.netty.channel.ChannelHandler;\nimport io.netty.channel.ChannelInitializer;\nimport io.netty.channel.EventLoopGroup;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport io.netty.channel.socket.nio.NioSocketChannel;\n \nimport java.net.InetSocketAddress;\nimport java.nio.channels.SocketChannel;\n \nimport bigdata.studynio.NioClientWork;\n \npublic class SendClinet {\n\t\n\t\n\tprivate final String host;\n\tprivate final int port;\n\t\n\t//构造客户端方法\n\tpublic SendClinet(String host,int port){\n\t\tthis.host=host;\n\t\tthis.port=port;\t\t\n\t}\n\t//客户端启动\n\tpublic void start() throws InterruptedException {\n\t\t//创建生命周期组，EventLoopGroup包含一个或多个EventLoop，而EventLoop在一个生命周期内只能绑定一个Thread\n\t\t//每一个EventLoop的I/O事件都是由这个Thread处理，一个channel在生命周期内只能对应一个EventLoop，\n\t\t//但一个EventLoop可以被分给一个或多个channel，因此channel和thread是对应的\n\t\tEventLoopGroup group = null;\n\t\ttry {\n\t\t\tBootstrap bootstrap = new Bootstrap();//创建一个引导启动类\n\t\t\tgroup = new NioEventLoopGroup();\n\t\t\tbootstrap.group(group)//把事件生命周期组EventLoopGroup注册引导启动类中去启动\n\t\t\t\t.channel(NioSocketChannel.class)//注册channel类型为NioSocketChannel，这个类型还有NioSctpChannel，NioDatagramChannel，LocalServerChannel，EmbeddedChannel\n\t\t\t\t.remoteAddress(new InetSocketAddress(host, port))//注册连接的服务器地址端口\n\t\t\t\t//注册事件操作句柄，使用childHandler时候不可以，所以只能用handler代替了\n\t\t\t\t.handler(new ChannelInitializer<io.netty.channel.socket.SocketChannel>() {\n\t\t\t\t\t@Override\n\t\t\t\t\tprotected void initChannel(//初始化通道\n\t\t\t\t\t\t\tio.netty.channel.socket.SocketChannel ch)\n\t\t\t\t\t\t\tthrows Exception {\n\t\t\t\t\t\t//一个SocketChannel可以添加多个ChannelHandler，可以多加addLast，\n\t\t\t\t\t\t//这个ChannelHandler，有两种In和Out即ChannelInboundHandler，ChannelOutboundHandler\n\t\t\t\t\t\t//pipeline 在处理In和Out顺序是，in是从头部开始，out是尾部开始，例如 in1，out1,out2,in2,运行结果是in1->in2,out2->out1\n                                                //ChannelInboundHandler之间的传递，通过调用 ctx.fireChannelRead(msg) 实现；调用ctx.write(msg) 将传递到ChannelOutboundHandler，\n                                                //ctx.write()方法执行后，需要调用flush()方法才能令它立即执行，\n                                                //pipeline中outhandler不能放在最后，否则不生效\n\t\t\t\t\t\tch.pipeline().addLast((ChannelHandler) new SendClientForWork());\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t});\n// 最后绑定服务器等待直到绑定完成，调用sync()方法会阻塞直到服务器完成绑定,然后服务器等待通道关闭，因为使用sync()，所以关闭操作也会被阻塞。\n\t\t\t\tChannelFuture sync=bootstrap.connect().sync();//引导启动连接，ChannelFuture为将要执行操作的占位符\n\t\t\t\t//sync.channel().close().sync();\n\t\t\t\tsync.channel().closeFuture().sync();//关闭占位符，而不关闭整个通道，close是关闭整个客户端\n\t\t\t}finally {\n\t\t\tgroup.shutdownGracefully().sync();//关闭整个线程组\n\t\t}\t\t\t\t \n\t}\t\n\tpublic static void main(String[] args) throws Exception {\n\t\tSystem.out.println("client start....");\n\t\tnew SendClinet("localhost",20000).start();//指定连接服务器的地址和端口\n\t\t\n\t}\n \n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br")])]),s("h2",{attrs:{id:"netty服务器端"}},[n._v("netty服务器端")]),n._v(" "),s("p",[n._v("SendServer.java")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('package bigdata.nionetty.sendstring;\n \nimport java.nio.channels.SocketChannel;\n \nimport io.netty.bootstrap.ServerBootstrap;\nimport io.netty.channel.Channel;\nimport io.netty.channel.ChannelFuture;\nimport io.netty.channel.ChannelHandler;\nimport io.netty.channel.ChannelInitializer;\nimport io.netty.channel.EventLoopGroup;\nimport io.netty.channel.nio.NioEventLoopGroup;\nimport io.netty.channel.socket.nio.NioServerSocketChannel;\n \n//构造服务端方法\npublic class SendServer {\n\tprivate final int port;\n    public SendServer(int port) {\n\t\tthis.port=port;\n\t}\n    //服务器短启动\n    private void start() throws Exception {\n    \t\n\t\tEventLoopGroup group = null;\n\t\ttry{\n\t\tServerBootstrap serverBootstrap = new ServerBootstrap();//创建server引导\n\t\tgroup = new NioEventLoopGroup();\n\t\tserverBootstrap.group(group)\n\t\t\t.channel(NioServerSocketChannel.class)\n\t\t\t.localAddress("localhost",port)\n\t\t\t.childHandler(new ChannelInitializer<io.netty.channel.socket.SocketChannel>() {\n \n\t\t\t\t@Override\n\t\t\t\tprotected void initChannel(\n\t\t\t\t\t\tio.netty.channel.socket.SocketChannel ch)\n\t\t\t\t\t\tthrows Exception {\n\t\t\t\t\tch.pipeline().addFirst((ChannelHandler) new SendServerForWork());\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t});\n\t\tChannelFuture sync = serverBootstrap.bind().sync();\n\t\tSystem.out.println("开始监听，地址端口为：" + sync.channel());\n\t\tsync.channel().closeFuture().sync();\n\t\t}finally{\n\t\tgroup.shutdownGracefully().sync();\n\t\t}\n\t}\n    \n    public static void main(String[] args) throws Exception {\n    \tSystem.out.println("server start.......");\n\t\tnew SendServer(20000).start();\n\t}\n \n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br")])]),s("p",[n._v("SendServerForWork.java")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('package bigdata.nionetty.sendstring;\n \nimport java.util.Date;\n \nimport io.netty.buffer.ByteBuf;\nimport io.netty.buffer.Unpooled;\nimport io.netty.channel.ChannelHandlerContext;\nimport io.netty.channel.ChannelInboundHandlerAdapter;\n \npublic class SendServerForWork extends ChannelInboundHandlerAdapter{\n\t\n\t@Override\n\tpublic void channelRead(ChannelHandlerContext ctx, Object msg)\n\t\t\tthrows Exception {\n\t\t//读取数据\n\t\tSystem.out.println("服务器读取数据。。");\n\t\tByteBuf buf = (ByteBuf)msg;\n\t\tbyte[] bytes = new byte[buf.readableBytes()];\n\t\tbuf.readBytes(bytes);\n\t\tString string = new String(bytes, "UTF-8");\n\t\tSystem.out.println("读取客户端的数据为："+ string);\n\t\t//向客户端发送数据\n\t\tSystem.out.println("服务器向客户端发送数据...");\n\t\tString currenttime = new Date(System.currentTimeMillis()).toString();\n\t\tByteBuf copiedBuffer = Unpooled.copiedBuffer(currenttime.getBytes());\n\t\tctx.write(copiedBuffer);\n\t\t\n\t}\n\t@Override\n\tpublic void channelReadComplete(ChannelHandlerContext ctx) throws Exception {\n\t\tSystem.out.println("服务器读写数据完毕。。。");\n\t\tctx.flush();\n\t}\n\t@Override\n\tpublic void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)\n\t\t\tthrows Exception {\n\t\tSystem.out.println("服务器异常处理。。。");\n\t\tctx.close();\n\t}\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br")])])])},[],!1,null,null,null);t.default=a.exports}}]);