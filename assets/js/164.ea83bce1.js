(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{437:function(t,e,n){"use strict";n.r(e);var a=n(10),i=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"对接测试"}},[t._v("对接测试")]),t._v(" "),n("h4",{attrs:{id:"全互接口文档-https-qhrtcb-yuque-com-docs-share-0797b1e6-48f6-45a4-bab0-50a7dc991a50-jlw00"}},[t._v("全互接口文档 https://qhrtcb.yuque.com/docs/share/0797b1e6-48f6-45a4-bab0-50a7dc991a50#jLw00")]),t._v(" "),n("h4",{attrs:{id:"流程"}},[t._v("流程")]),t._v(" "),n("h5",{attrs:{id:"_1-全互调用我们-capital-capitalapi-qhrt-debttransfernotify-接口进行债转"}},[t._v("1.全互调用我们 /capital/capitalapi/qhrt/debtTransferNotify 接口进行债转")]),t._v(" "),n("h5",{attrs:{id:"_2-签约中台签约"}},[t._v("2.签约中台签约")]),t._v(" "),n("p",[t._v('日志:\nlogger.info("请求签约中台 url={} headers={} req={}", url, JSON.toJSONString(headers), JSON.toJSONString(params));\nlogger.info("请求签约中台 result={}", result);\n签约回调日志:\nlogger.info("保存债转协议: {}, loanId: {}, userId: {}, contCode: {}", JsonUtil.toJson(agreementResultDTOList), loanId, userId, contCode);\nlogger.info("保存小贷协议记录 xdUserSign:{}", JSONObject.toJSONString(xdUserSign));')]),t._v(" "),n("h5",{attrs:{id:"_3-短信中台短信"}},[t._v("3.短信中台短信")]),t._v(" "),n("p",[t._v('logger.info("中鸿小贷债转短信通知入参 mobile:{},contCode:{},makeLoanTime:{},transferTime:{},transferTime2:{}",\nmobile, contCode, makeLoanTime, transferTime, transferTime2);'),n("br"),t._v('\nlogger.info("发送短信请求 url={}， req={}", url, JSON.toJSONString(req));\nlogger.info("发送短信响应 res={}", post);')]),t._v(" "),n("h5",{attrs:{id:"_4-资产中台债转"}},[t._v("4.资产中台债转")]),t._v(" "),n("p",[t._v('logger.info("------------调用资产中台:{}接口,请求地址url={},请求参数={}-----------------", httpEnum.getDesc(), httpEnum.getFullUrl(), jsonParam);\nlogger.info("------------调用资产中台:{}接口,请求地址url={},返回结果={}-----------------", httpEnum.getDesc(), httpEnum.getFullUrl(), res);')]),t._v(" "),n("h5",{attrs:{id:"_5-更新表"}},[t._v("5.更新表")]),t._v(" "),n("p",[t._v("债转表 jsd_xd_debt_transfer\nstatus 债转状态\ntransfer_principle 债转本金\ntransfer_remain_interest 债转剩余利息")]),t._v(" "),n("p",[t._v("小贷用户签约信息表 jsd_xd_user_sign")]),t._v(" "),n("p",[t._v("ChannelPushRepayTypeEnum")]),t._v(" "),n("p",[t._v("test_jsd_account jsd_xd_repayment_continual")]),t._v(" "),n("p",[t._v("http://hcgit.hengchang6.com/channel/channel-system.git")]),t._v(" "),n("h5",{attrs:{id:"deploy-版本号"}},[t._v("deploy 版本号")]),t._v(" "),n("h2",{attrs:{id:"资产中台"}},[t._v("资产中台")]),t._v(" "),n("p",[t._v("http://10.150.26.74:3000/  assets@credithc.com assets")]),t._v(" "),n("p",[t._v("http://10.150.26.74:3000/project/145/interface/api/cat_1860  山东信托债转接口")]),t._v(" "),n("p",[t._v("ContCodeRuleEnum 判断是易启分期")]),t._v(" "),n("p",[t._v("queryContractInfo\nprivate BigDecimal convertAmount(BigDecimal amount) {\nif (null == amount) {\nreturn null;\n}\namount = amount.multiply(new BigDecimal(100)).setScale(0, BigDecimal.ROUND_HALF_UP);\nreturn amount;\n}")]),t._v(" "),n("p",[t._v('/* String sign = String.valueOf(stringObjectSortedMap.get("sign"));\nstringObjectSortedMap.remove("sign");\nString jsonParam1 = RSAUtil.getSortParams(stringObjectSortedMap);\nboolean booleanRes = RSAUtil.verify(jsonParam1.getBytes(), FlowPlatformConstant.PLAT_FORM_REQUEST_PUBLIC_KEY, sign);*/')]),t._v(" "),n("pre",[n("code",[t._v('\t\t\t/** test start **/\n        //String sign = String.valueOf(stringObjectSortedMap.get("sign"));\n        //stringObjectSortedMap.remove("sign");\n\n        // 排序并拼接成字符串\n        //String paramsStr2 = RSAUtil.getSortParams(stringObjectSortedMap);\n        // 验签\n        //boolean status = RSAUtil.verify(paramsStr2.getBytes(), FlowPlatformConstant.PLAT_FORM_REQUEST_PUBLIC_KEY, sign);\n        // 验签\n        // System.err.println("验证结果-------------" + status);\n        /** test  end  **/\n')])]),t._v(" "),n("p",[t._v('/**\n* 推送还款结果\n*\n* @param channelMqLateVo\n*/\nprivate void pushRepayResult(ChannelMqLateVo channelMqLateVo) {\nString repayResultRes = baiRongLateService.pushRepayResult(channelMqLateVo);\nResponseResult repayResult = JsonUtil.toObject(repayResultRes, ResponseResult.class);\nif (Objects.isNull(repayResult) || ResCodeEnum.SUCCESS_CODE.getCode() != repayResult.getCode()) {\nString failMessage = "pushRepayResultFailed:" + repayResultRes;\nlateCommonService.insertChannelMqPushContinual(channelMqLateVo, failMessage);\nlogger.info("【LateChannelMqProcessor.pushLoan】----error---【百融】还款结果推送失败----入参:{}，出参:{}", JsonUtil.toJson(channelMqLateVo), repayResultRes);\n}\n}')]),t._v(" "),n("pre",[n("code",[t._v('/**\n * 推送还款计划\n *\n * @param channelMqLateVo\n */\nprivate void pushRepayPlan(ChannelMqLateVo channelMqLateVo) {\n    String repayPlanRes = baiRongLateService.pushRepayPlan(channelMqLateVo);\n    ResponseResult repayPlan = JsonUtil.toObject(repayPlanRes, ResponseResult.class);\n    if (Objects.isNull(repayPlan) || ResCodeEnum.SUCCESS_CODE.getCode() != repayPlan.getCode()) {\n        String failMessage = "pushRepayPlanFailed:" + repayPlan;\n        lateCommonService.insertChannelMqPushContinual(channelMqLateVo, failMessage);\n        logger.info("【LateChannelMqProcessor.pushLoan】----error---【百融】还款计划推送失败----入参:{}，出参:{}", JsonUtil.toJson(channelMqLateVo), repayPlanRes);\n    }\n}\n\n\n全互 签约债转时间传全互时间\n签约\n\n\n2021-11-24 18:00:22.891|INFO|main||7bfee81416cc4038996调用流量平台:还款结果回调接口接口,请求地址\nurl=http://127.0.0.1:9100/flowapi/institution/YQFQ/repayInfoForCallBack,请求参数={"data":{"periodNum":1,"orderNo":"222","actualRepayTime":"2021-11-24 18:00:02","actualTotalRepayAmount":1016674,"repayType":1,"status":902},"hyaline":"","sign":"cl/YYDiNMCMJ+UFP4wqDbDiDm856gXybJAKSXloMTNoI7qJ8YEbhw9tJJyEst8nSmH7JqsU1Sp//\\r\\nBwqeXyNn6jVkzfRCsNQ4FgqTLzprHs+oSLgL4hBopANNKRdLDTCmP7RU7BDcWmhb8T5p9zbBmmm3\\r\\njUAcUEHImacerfsqVo8=","productNo":"HYD","timestamp":"1637748022724"}-----------------\n\n调用流量平台:还款计划回调接口接口,请求地址url=http://127.0.0.1:9100/flowapi/institution/YQFQ/repayPlanForCallBack,\n请求参数={"data":[{"periodNum":1,"repayCollectionAmount":0,"orderNo":"222","repayTime":"2021-12-08 00:00:00","totalPeriodNum":"1","repayFinancingConsultingAmount":0,"totalRepayAmount":218508,"repayType":1,"repayPenaltyAmount":77758,"repayPeriodServiceAmount":128250,"repayPrincipalAmount":77758,"repayInterestAmount":12500,"repayOtherAmount":0,"status":902}],"hyaline":"","sign":"DNjEMs1z7SIWmy3VvG+ha37tLV1JoqGDOn6dPcPdGBc2DHGUYHkLd56AV/4c538XqYf9mg9FwELY\\r\\nf9rcOVlebdp25lu/ADOOYN/2w2RfqTe7FPkvXdq7eRKwA3TsbTNXmLlEnXuBAL7tEL/6qV8kTaJI\\r\\nJZJJNkz3cM/R8boXWHM=","productNo":"yqfq","timestamp":"1637748045991"}-----------------\n')])]),t._v(" "),n("h3",{attrs:{id:"恒易卡管理后台"}},[t._v("恒易卡管理后台")]),t._v(" "),n("ul",[n("li",[t._v("恒易卡对公还款")])]),t._v(" "),n("ul",[n("li",[t._v("结清的费用是多少  有正的 负的 0 settleamount BlfqZcttjqRepaymentHandler\n有没有退费 actualRepayAmount detial表还款类型")]),t._v(" "),n("li",[t._v("发版")]),t._v(" "),n("li",[t._v("需要新增一个back_config sql")])]),t._v(" "),n("h3",{attrs:{id:"联合贷管理后台"}},[t._v("联合贷管理后台")]),t._v(" "),n("ul",[n("li",[t._v("发版")])]),t._v(" "),n("h3",{attrs:{id:"渤海债转"}},[t._v("渤海债转")]),t._v(" "),n("ul",[n("li",[t._v("定时器")]),t._v(" "),n("li",[t._v("确认假期接口")])]),t._v(" "),n("h3",{attrs:{id:"生产问题-20220215"}},[t._v("生产问题 20220215")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("FBSDXT211Yg0170050  这个没有成功债转 看看问题")]),t._v(" "),n("ul",[n("li",[t._v("置逾期")])])]),t._v(" "),n("li",[n("p",[t._v("FBBHXT22P2H0312830 债转表没数据  放款回调失败")])])]),t._v(" "),n("h3",{attrs:{id:"多资金方"}},[t._v("多资金方")]),t._v(" "),n("ul",[n("li",[t._v("加资金方 字典")])]),t._v(" "),n("h3",{attrs:{id:"商城提前结清-20220222"}},[t._v("商城提前结清 20220222")]),t._v(" "),n("ul",[n("li",[t._v("列表 按照合同号单查的时候 走个策略类")]),t._v(" "),n("li",[t._v("加 capital_source 资金来源字典枚举")]),t._v(" "),n("li",[t._v("加 loan_hyk_status 商城合同状态字典枚举")]),t._v(" "),n("li",[t._v("加 loan_status 商城订单状态字典枚举")])]),t._v(" "),n("p",[t._v("冻结在途  然后sonar,平台")]),t._v(" "),n("h3",{attrs:{id:"风豹对公"}},[t._v("风豹对公")]),t._v(" "),n("ul",[n("li",[t._v("加字典trail_type")]),t._v(" "),n("li",[t._v("增加菜单减免")]),t._v(" "),n("li",[t._v("银行账户配置")]),t._v(" "),n("li",[t._v("恒易卡也上线")])]),t._v(" "),n("h3",{attrs:{id:"唯品消金"}},[t._v("唯品消金")]),t._v(" "),n("ul",[n("li",[t._v("资金中台 贷中 sftp redis 对应白名单  定时任务  sql")])]),t._v(" "),n("h3",{attrs:{id:"资产中台代偿和债转同步"}},[t._v("资产中台代偿和债转同步")]),t._v(" "),n("ul",[n("li",[t._v("中原的还有其他的 罚息和利息拆开")]),t._v(" "),n("li",[t._v("历史数据 sql 确定利息和罚息同时update")])]),t._v(" "),n("h2",{attrs:{id:"元丰和通融小贷"}},[t._v("元丰和通融小贷")]),t._v(" "),n("p",[t._v("增加对公sql")]),t._v(" "),n("h2",{attrs:{id:"元丰资金中台"}},[t._v("元丰资金中台")]),t._v(" "),n("h3",{attrs:{id:"恒昌资产合作方"}},[t._v("恒昌资产合作方")]),t._v(" "),n("h4",{attrs:{id:"测试环境相关信息"}},[t._v("测试环境相关信息")]),t._v(" "),n("p",[t._v("域名：http://capital-channel-external-api-test.yuanfengxiaodai.com\n合作方ID coopId=16\n租户ID tenantId=16\n产品ID\nproductId=16 - A\nproductId=17 - B\nproductId=18 - C\nproductId=19 - D")]),t._v(" "),n("p",[t._v("appId(client_id)=BAEdkIHAB8gRr4RYA5\nappSecret(client_secret)=728e93b7bdde4ce282da9fc2eeb0b9bb\nsecretKey(aesKey)=RhfNxHn4Xv561sZn")]),t._v(" "),n("p",[t._v("元丰测试环境出口IP：106.75.110.197\n元丰生产环境出口IP：117.50.93.113")]),t._v(" "),n("h3",{attrs:{id:"需要恒昌提供的信息？"}},[t._v("需要恒昌提供的信息？")]),t._v(" "),n("ul",[n("li",[t._v("测试和生产环境出口IP")])]),t._v(" "),n("ul",[n("li",[t._v("测试 出口ip：202.85.209.162、219.142.131.162")]),t._v(" "),n("li",[t._v("生产 出口ip：115.182.239.130、106.38.64.174")])]),t._v(" "),n("ul",[n("li",[t._v("审批结果通知地址")])]),t._v(" "),n("ul",[n("li",[t._v("测试 ：http://zhudaitest.junhangweijing.com/capital-inner/yfxd/productType/auditNotify")]),t._v(" "),n("li",[t._v("生产 ：https://zhudai.junhangweijing.com/capital-inner/yfxd/productType/auditNotify")])]),t._v(" "),n("ul",[n("li",[t._v("放款结果通知地址")])]),t._v(" "),n("ul",[n("li",[t._v("测试 ：http://zhudaitest.junhangweijing.com/capital-inner/yfxd/productType/makeLoanNotify")]),t._v(" "),n("li",[t._v("生产 ：https://zhudai.junhangweijing.com/capital-inner/yfxd/productType/makeLoanNotify")])]),t._v(" "),n("ul",[n("li",[t._v("审批和放款结果通知接口签名token")])]),t._v(" "),n("ul",[n("li",[t._v("测试 : 837b73992124e09f9691443c5a82d75e")]),t._v(" "),n("li",[t._v("生产 :fe9666a80a28bbd92eee442033775f0d")])]),t._v(" "),n("h3",{attrs:{id:"对内区分capitalcode-和loantype-pigxdconstant-getpigconstant"}},[t._v("对内区分capitalcode 和loanType  PigxdConstant.getPigConstant")]),t._v(" "),n("p",[t._v("这个会不会影响其他的")]),t._v(" "),n("h3",{attrs:{id:"对外也是-但是资金方给传的里面有区分-loantype-吗"}},[t._v("对外也是 但是资金方给传的里面有区分 loanType 吗?")]),t._v(" "),n("p",[t._v("➢精通java、熟练掌握并发编程、jvm、熟悉常见垃圾回收算法、垃圾回收器\n➢熟练java并发包的知识、熟悉网络编程Socket,BIO,NIO,AIO\n➢具备架构设计、流程设计的能力，在团队中负责架构设计与开发工作。\n➢精通mysql的存储引擎，索引，以及事务的隔离级别，以及mysql实现可重复读的MVCC机制\n➢熟练springCloud netflix、springCloud alibaba，具有微服务落地项目实践经验\n➢熟练常见设计模式、设计原则等，有良好的编码规范\n➢精通nosql数据库redis、掌握数据持久化、主从复制、分布式锁等原理\n➢了解netty的多路复用机制，以及责任链模式和ByteBuffer的零拷贝机制相关内容；\n➢熟练linux的基本命令、熟练docker、k8s等项目管理及构建工具，\n➢熟练rabbitmq、zookeeper、elastic-job、splunk等中间件运用\n➢精通avascript、html5、vue、angularJS、elementui、mui等前台技术栈")]),t._v(" "),n("p",[t._v("资金中台系统\n系统负责人\n主要处理内部系统与外部资金方交互,暴露接口,路由配置、方法封装、参数拼装、统一加解密以及验签等,避免重复建设,达到提高工作效率目的简化流程")]),t._v(" "),n("p",[t._v("工作内容：\n1、需求评审以及分配\n2、框架适配和改造\n3、带领团队线上bug排查，业务代码审查及修复\n4、业务代码编写：各个资金方对接,版本迭代升级\n5、分析单库压力对业务表分库分表")])])},[],!1,null,null,null);e.default=i.exports}}]);