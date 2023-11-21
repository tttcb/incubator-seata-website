"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[31784],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99096:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},o="Version Upgrade Guide",s={unversionedId:"ops/upgrade",id:"version-v1.8/ops/upgrade",title:"Version Upgrade Guide",description:"Seata upgrade.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.8/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/en/docs/ops/upgrade",draft:!1,tags:[],version:"v1.8",frontMatter:{title:"Version Upgrade Guide",keywords:["Seata"],description:"Seata upgrade."},sidebar:"docs",previous:{title:"Metrics Design",permalink:"/en/docs/dev/seata-mertics"},next:{title:"Multi-configuration Isolation",permalink:"/en/docs/ops/multi-configuration-isolation"}},l={},d=[],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-upgrade-guide"},"Version Upgrade Guide"),(0,r.kt)("a",{href:"#7",target:"_self"},"7. What compatibility matters need to be paid attention to when upgrading to seata 1.6.x? "),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#6",target:"_self"},"6. What compatibility matters need to be paid attention to when upgrading to seata 1.5.0? "),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#5",target:"_self"},"5. What compatibility matters need to be paid attention to when upgrading to seata 1.4.0? "),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#4",target:"_self"},"4. What compatibility matters need to be paid attention to when upgrading to seata 1.3.0? "),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#3",target:"_self"},"3. What compatibility matters need to be paid attention to when upgrading to seata 1.2.0? "),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#2",target:"_self"},"2. What compatibility matters need to be paid attention to when upgrading to seata 1.1.0? "),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#1",target:"_self"},"1. How to upgrade versions 0.8 and 0.9 to version 1.0? "),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"7"},"7. What compatibility matters need to be paid attention to when upgrading to seata 1.6.x? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),"When upgrading from version 1.5.x to version 1.6.x, both client SDK and seata-server are completely smoothly compatible, and no other changes are required other than upgrading the version."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"6"},"6. What compatibility matters need to be paid attention to when upgrading to seata 1.5.0? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the storage mode of seata-server is db, you need to pay attention to the table structure changes. You need to change the table structure before upgrading to 1.5.0:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The table structure character set is uniformly adjusted from utf8 to utf8mb4."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"global_table")," adjustment index is adjusted from ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_gmt_modified_status")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_status_gmt_modified"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lock_table")," adds ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," field, and adds ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_status"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"idx_xid_and_branch_id")," index."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"distributed_lock")," table for seata-server asynchronous task scheduling.\nBefore upgrading to 1.5.0, please pay attention to the table structure changes. For details on the table structure, please ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/tree/1.5.0/script/server/db"},"click here"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"TCC transaction mode adds anti-hanging function in 1.5.0. If you need to enable anti-hanging by Seata framework, you need to add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.5.0/script/client/tcc/db"},"this table")," to the client business library in advance. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first-stage method of TCC mode has been optimized. It is no longer necessary to define ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContext")," as an interface parameter in the first stage. If ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContext")," needs to be used in the first stage, it can be obtained through ",(0,r.kt)("inlineCode",{parentName:"p"},"BusinessActionContextUtil.getContext()"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The internal structure of the redis registration center has been adjusted and is no longer backward compatible. If you use redis as the registration center of seata, please also upgrade both seata-all (seata-spring-boot-starter) and seata-server that the client depends on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The transaction group configuration supports default values. In order to avoid ambiguity and reduce learning costs, the default transaction group is changed from ",(0,r.kt)("inlineCode",{parentName:"p"},"my_test_tx_group")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"default_tx_group"),". It will be backward compatible in version 1.5.X.")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"5"},"5. What compatibility matters need to be paid attention to when upgrading to seata 1.4.0? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The Redis data of version 1.3 and 1.4 are incompatible. Since the Redis mode reconstructs the data storage structure into hash, users who upgrade from 1.3 to 1.4 need to wait for all transactions to run completely before iterating.\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"4"},"4. What compatibility matters need to be paid attention to when upgrading to seata 1.3.0? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The nacos registration center adds a new group attribute configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"seata.registry.nacos.group"),". If it is not configured, the default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"DEFAULT_GROUP"),". The server and client must be consistent."),(0,r.kt)("li",{parentName:"ol"},"The mysql ",(0,r.kt)("inlineCode",{parentName:"li"},"undolog")," table removes the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field and enhances the timestamp accuracy together with ",(0,r.kt)("inlineCode",{parentName:"li"},"branch_table")," to prevent dirty data from being rolled back due to sequence errors during undolog rollback. (Note: mysql version 5.6 or above is required)"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"3"},"3. What compatibility matters need to be paid attention to when upgrading to seata 1.2.0? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The nacos registration center adds a new service attribute configuration ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.nacos.application"),' = "seata-server". The original default name is serverAddr, and now the default is seata-server. The Server and Client must be consistent.\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"2"},"2. What compatibility matters need to be paid attention to when upgrading to seata 1.1.0? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pay attention to the compatibility of configuration items. Version 1.1.0 has unified the styles of configuration items.\nIf the program relies on seata-all, corresponding to the ",(0,r.kt)("em",{parentName:"p"},".conf file, the naming style of the configuration items in the conf file is unified with a dot + camel case combination, ",(0,r.kt)("a",{parentName:"em",href:"https://seata.io/zh-cn/docs/user/configurations.html"},"1.1.0 Configuration Item Description"),", ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/seata/seata/tree/1.1.0/script/client/conf"},"1.1.0 Configuration Reference"),";\nIf the program depends on seata-spring-boot-starter, corresponding to "),".properties or *.yml, the naming style of property and yml files is unified to the combination of dot + underscore.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.1.0/script/client/spring"},"1.1.0 Configuration Reference")," What needs special attention is the 1.0.0 version configuration item seata.service\n.vgroup-mapping=default 1.1.0 changed to: seata.service.vgroup-mapping\n.my_test_tx_group=default, where my_test_tx_group represents the transaction group used by the program; 1.0.0 version configuration item seata.service.grouplist=127.0.0.1:8091, 1.1.0\nChange to: seata.service.grouplist.default=127.0.0.1:8091 where default represents the seata registration service name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"seata-all does not enable automatic proxying of data sources by default. The original conf file configuration items in seata-all\nThe client.support.spring.datasource.autoproxy configuration item is invalid and is annotated by @EnableAutoDataSourceProxy\nInstead of annotation, the annotation parameter can choose to use jdk proxy or cglib proxy. When using HikariDataSource, it is recommended to use cglib proxy mode.\nseata-spring-boot-starter enables the data source proxy by default, and the corresponding data source automatic proxy configuration items remain unchanged from version 1.0.0.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When using the spring cloud framework, you need to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud Alibaba")," for seata\nTransmission of transaction context. So seata has integration dependencies with Spring Cloud Alibaba version, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"version notes"),"\nspring-cloud-alibaba-seata relied on seata-all before version 2.2.0.RELEASE. If you continue to use a lower version of spring-cloud-alibaba-seata, you can use a higher version of seata-all to replace the built-in seata-all version;\nSpring-cloud-alibaba-seata starts to rely on seata-spring-boot-starter internally starting from 2.2.0.RELEASE (inclusive). 2.2.0.RELEASE internally integrates seata-spring-boot-starter 1.0.0 and can be upgraded to seata-spring-boot-starter 1.1.0, seata-spring-boot-starter integrates seata-all, seata-spring-boot-starter wraps the autoconfig function for properties or yml configuration, in spring-cloud-alibaba-seata Before 2.2.0.RELEASE\nThe autoconfig function is supported by itself. Afterwards, the autoconfig about seata itself in spring-cloud-alibaba-seata is removed and is supported by seata-spring-boot-starter. Therefore, the lower version of spring-cloud-alibaba-seata can only be used with seata-all. Use, the higher version spring-cloud-alibaba-seata can only be used with seata-spring-boot-starter, with 2.2.0.RELEASE as the dividing point.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the TC side adopts db storage mode, the precision of gmt_create and gmt_modified fields is added to branch_table to accurately confirm the order of rollback.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/1.1.0/script/server/db"},"Reference for each database script"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"1"},"1. How to upgrade versions 0.8 and 0.9 to version 1.0? "),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("mark",null,"Notes")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"(Optional) 1.0 supports yml and properties, and seata-all needs to be replaced with seata-spring-boot-starter"),(0,r.kt)("li",{parentName:"ol"},"(Required) Add a common index to the branch_id field of the TC side table lock_table"),(0,r.kt)("li",{parentName:"ol"},"(Optional) Some parameter naming changes, ",(0,r.kt)("a",{href:"https://seata.io/zh-cn/docs/user/configurations100.html",target:"_blank"},"Click here to check the parameter configuration"),"."),(0,r.kt)("li",{parentName:"ol"},"client.report.success.enable can be set as false to improve performance."))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);