"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[97333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||v[d]||l;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u4e8b\u52a1\u5206\u7ec4\u4ecb\u7ecd",keywords:["Seata"],description:"Seata \u4e8b\u52a1\u5206\u7ec4\u3002"},o="\u4e8b\u52a1\u5206\u7ec4\u4e13\u9898",s={unversionedId:"user/txgroup/transaction-group",id:"version-v1.8/user/txgroup/transaction-group",title:"\u4e8b\u52a1\u5206\u7ec4\u4ecb\u7ecd",description:"Seata \u4e8b\u52a1\u5206\u7ec4\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/user/txgroup/transaction-group.md",sourceDirName:"user/txgroup",slug:"/user/txgroup/transaction-group",permalink:"/zh-cn/docs/v1.8/user/txgroup/transaction-group",draft:!1,tags:[],version:"v1.8",frontMatter:{title:"\u4e8b\u52a1\u5206\u7ec4\u4ecb\u7ecd",keywords:["Seata"],description:"Seata \u4e8b\u52a1\u5206\u7ec4\u3002"},sidebar:"docs",previous:{title:"\u53c2\u6570\u914d\u7f6e",permalink:"/zh-cn/docs/v1.8/user/configurations"},next:{title:"\u4e8b\u52a1\u5206\u7ec4\u4e0e\u9ad8\u53ef\u7528",permalink:"/zh-cn/docs/v1.8/user/txgroup/transaction-group-and-ha"}},i={},p=[{value:"\u4e8b\u52a1\u5206\u7ec4\u662f\u4ec0\u4e48\uff1f",id:"\u4e8b\u52a1\u5206\u7ec4\u662f\u4ec0\u4e48",level:3},{value:"\u4e8b\u52a1\u5206\u7ec4\u5982\u4f55\u627e\u5230\u540e\u7aefSeata\u96c6\u7fa4\uff1f",id:"\u4e8b\u52a1\u5206\u7ec4\u5982\u4f55\u627e\u5230\u540e\u7aefseata\u96c6\u7fa4",level:3},{value:"\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1\uff0c\u4e0d\u76f4\u63a5\u53d6\u670d\u52a1\u540d\uff1f",id:"\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1\u4e0d\u76f4\u63a5\u53d6\u670d\u52a1\u540d",level:3},{value:"\u4e8b\u52a1\u5206\u7ec4\u4f7f\u7528\u6848\u4f8b",id:"\u4e8b\u52a1\u5206\u7ec4\u4f7f\u7528\u6848\u4f8b",level:2},{value:"\u7b2c\u4e00\u7c7b\uff1a\u5185\u7f6eFile",id:"\u7b2c\u4e00\u7c7b\u5185\u7f6efile",level:3},{value:"Seata Server\u7aef",id:"seata-server\u7aef",level:4},{value:"Client\u7aef",id:"client\u7aef",level:4},{value:"\u7b2c\u4e8c\u7c7b\uff1a\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3(\u4ee5nacos\u4e3a\u4f8b)",id:"\u7b2c\u4e8c\u7c7b\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u4ee5nacos\u4e3a\u4f8b",level:3},{value:"Seata Server\u7aef",id:"seata-server\u7aef-1",level:4},{value:"Client\u7aef",id:"client\u7aef-1",level:4},{value:"Client\u7aef(SpringBoot)",id:"client\u7aefspringboot",level:4}],c={toc:p},u="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e8b\u52a1\u5206\u7ec4\u4e13\u9898"},"\u4e8b\u52a1\u5206\u7ec4\u4e13\u9898"),(0,a.kt)("h3",{id:"\u4e8b\u52a1\u5206\u7ec4\u662f\u4ec0\u4e48"},"\u4e8b\u52a1\u5206\u7ec4\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\u5206\u7ec4\uff1aseata\u7684\u8d44\u6e90\u903b\u8f91\uff0c\u53ef\u4ee5\u6309\u5fae\u670d\u52a1\u7684\u9700\u8981\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u5bf9\u81ea\u884c\u5b9a\u4e49\u4e8b\u52a1\u5206\u7ec4\uff0c\u6bcf\u7ec4\u53d6\u4e00\u4e2a\u540d\u5b57\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\uff1aseata-server\u670d\u52a1\u7aef\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u7ec4\u6210\u7684\u96c6\u7fa4cluster\u3002 \u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u4f7f\u7528\u65f6\u9700\u8981\u6307\u5b9a\u4e8b\u52a1\u903b\u8f91\u5206\u7ec4\u4e0eSeata\u670d\u52a1\u7aef\u96c6\u7fa4\u7684\u6620\u5c04\u5173\u7cfb\u3002")),(0,a.kt)("h3",{id:"\u4e8b\u52a1\u5206\u7ec4\u5982\u4f55\u627e\u5230\u540e\u7aefseata\u96c6\u7fa4"},"\u4e8b\u52a1\u5206\u7ec4\u5982\u4f55\u627e\u5230\u540e\u7aefSeata\u96c6\u7fa4\uff1f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u4e2d\u914d\u7f6e\u4e86\u4e8b\u52a1\u5206\u7ec4\uff08GlobalTransactionScanner \u6784\u9020\u65b9\u6cd5\u7684txServiceGroup\u53c2\u6570\uff09\u3002\u82e5\u5e94\u7528\u7a0b\u5e8f\u662fSpringBoot\u5219\u901a\u8fc7seata.tx-service-group \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u4f1a\u901a\u8fc7\u7528\u6237\u914d\u7f6e\u7684\u914d\u7f6e\u4e2d\u5fc3\u53bb\u5bfb\u627eservice.vgroupMapping\n.","[",(0,a.kt)("em",{parentName:"li"},"\u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\u9879"),"]","\uff0c\u53d6\u5f97\u914d\u7f6e\u9879\u7684\u503c\u5c31\u662fTC\u96c6\u7fa4\u7684\u540d\u79f0\u3002\u82e5\u5e94\u7528\u7a0b\u5e8f\u662fSpringBoot\u5219\u901a\u8fc7seata.service.vgroup-mapping.\u4e8b\u52a1\u5206\u7ec4\u540d=\u96c6\u7fa4\u540d\u79f0 \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u62ff\u5230\u96c6\u7fa4\u540d\u79f0\u7a0b\u5e8f\u901a\u8fc7\u4e00\u5b9a\u7684\u524d\u540e\u7f00+\u96c6\u7fa4\u540d\u79f0\u53bb\u6784\u9020\u670d\u52a1\u540d\uff0c\u5404\u914d\u7f6e\u4e2d\u5fc3\u7684\u670d\u52a1\u540d\u5b9e\u73b0\u4e0d\u540c\uff08\u524d\u63d0\u662fSeata-Server\u5df2\u7ecf\u5b8c\u6210\u670d\u52a1\u6ce8\u518c\uff0c\u4e14Seata-Server\u5411\u6ce8\u518c\u4e2d\u5fc3\u62a5\u544acluster\u540d\u4e0e\u5e94\u7528\u7a0b\u5e8f\uff08\u5ba2\u6237\u7aef\uff09\u914d\u7f6e\u7684\u96c6\u7fa4\u540d\u79f0\u4e00\u81f4\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u62ff\u5230\u670d\u52a1\u540d\u53bb\u76f8\u5e94\u7684\u6ce8\u518c\u4e2d\u5fc3\u53bb\u62c9\u53d6\u76f8\u5e94\u670d\u52a1\u540d\u7684\u670d\u52a1\u5217\u8868\uff0c\u83b7\u5f97\u540e\u7aef\u771f\u5b9e\u7684TC\u670d\u52a1\u5217\u8868\uff08\u5373Seata-Server\u96c6\u7fa4\u8282\u70b9\u5217\u8868\uff09")),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1\u4e0d\u76f4\u63a5\u53d6\u670d\u52a1\u540d"},"\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u8bbe\u8ba1\uff0c\u4e0d\u76f4\u63a5\u53d6\u670d\u52a1\u540d\uff1f"),(0,a.kt)("p",null,"\u8fd9\u91cc\u591a\u4e86\u4e00\u5c42\u83b7\u53d6\u4e8b\u52a1\u5206\u7ec4\u5230\u6620\u5c04\u96c6\u7fa4\u7684\u914d\u7f6e\u3002\u8fd9\u6837\u8bbe\u8ba1\u540e\uff0c\u4e8b\u52a1\u5206\u7ec4\u53ef\u4ee5\u4f5c\u4e3a\u8d44\u6e90\u7684\u903b\u8f91\u9694\u79bb\u5355\u4f4d\uff0c\u51fa\u73b0\u67d0\u96c6\u7fa4\u6545\u969c\u65f6\u53ef\u4ee5\u5feb\u901ffailover\uff0c\u53ea\u5207\u6362\u5bf9\u5e94\u5206\u7ec4\uff0c\u53ef\u4ee5\u628a\u6545\u969c\u7f29\u51cf\u5230\u670d\u52a1\u7ea7\u522b\uff0c\u4f46\u524d\u63d0\u4e5f\u662f\u4f60\u6709\u8db3\u591fserver\u96c6\u7fa4\u3002"),(0,a.kt)("h2",{id:"\u4e8b\u52a1\u5206\u7ec4\u4f7f\u7528\u6848\u4f8b"},"\u4e8b\u52a1\u5206\u7ec4\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"seata\u6ce8\u518c\u3001\u914d\u7f6e\u4e2d\u5fc3\u7c7b\u578b\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6eFile"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u6ce8\u518c\uff08\u914d\u7f6e\uff09\u4e2d\u5fc3\u3002\u5982nacos\u7b49\u7b49\uff0c\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u4e4b\u95f4\u6ca1\u6709\u7ea6\u675f\uff0c\u53ef\u5404\u81ea\u4f7f\u7528\u4e0d\u540c\u5177\u4f53\u9009\u578b\u3002")),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u7c7b\u5185\u7f6efile"},"\u7b2c\u4e00\u7c7b\uff1a\u5185\u7f6eFile"),(0,a.kt)("h4",{id:"seata-server\u7aef"},"Seata Server\u7aef"),(0,a.kt)("p",null,"registry.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa\n  type = "file"                ---------------\x3e \u4f7f\u7528file\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\n}\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3\n  type = "file"                ---------------\x3e \u4f7f\u7528file\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\n  file {\n    name = "file.conf"\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file\u3001db\u6a21\u5f0f\u542f\u52a8Seata Server\uff0c\u89c1\u6587\u7ae0\u4e0a\u65b9\u8282\u70b9\uff1a\u542f\u52a8Seata Server")),(0,a.kt)("h4",{id:"client\u7aef"},"Client\u7aef"),(0,a.kt)("p",null,"registry.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa\n  type = "file"                ---------------\x3e \u4f7f\u7528file\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\n}\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3\n  type = "file"                ---------------\x3e \u4f7f\u7528file\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\n  file {\n    name = "file.conf"         ---------------\x3e \u914d\u7f6e\u53c2\u6570\u5b58\u50a8\u6587\u4ef6\n  }\n}\n')),(0,a.kt)("p",null,"file.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    service {\n      vgroupMapping.my_test_tx_group = "default"\n      default.grouplist = "127.0.0.1:8091"\n    }\n')),(0,a.kt)("p",null,"application.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seata.tx-service-group=my_test_tx_group ---------------\x3e \u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\uff08\u5728v1.5\u4e4b\u540e\u9ed8\u8ba4\u503c\u4e3adefault_tx_group\uff09\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u914d\u7f6e\n\u901a\u8fc7FileConfiguration\u672c\u5730\u52a0\u8f7dfile.conf\u7684\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},'\u83b7\u53d6\u4e8b\u52a1\u5206\u7ec4(\u670d\u52a1\u542f\u52a8\u65f6\u52a0\u8f7d\u914d\u7f6e)\nspring/springboot\u53ef\u914d\u7f6e\u5728yml\u3001properties\u4e2d\uff0c\u5bf9\u5e94\u503c"my_test_tx_group"\u5373\u4e3a\u4e8b\u52a1\u5206\u7ec4\u540d\uff0c\u82e5\u4e0d\u914d\u7f6e\u5219\u9ed8\u8ba4\u4ee5\uff1aspring.application.name\u503c+"-seata-service-group"\u62fc\u63a5\u540e\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5206\u7ec4\u540d'),(0,a.kt)("li",{parentName:"ul"},'\u67e5\u627eTC\u96c6\u7fa4\u540d\n\u62ff\u5230\u4e8b\u52a1\u5206\u7ec4\u540d"my_test_tx_group"\u62fc\u63a5\u6210"service.vgroupMapping.my_test_tx_group"\u67e5\u627eTC\u96c6\u7fa4\u540dclusterName\u4e3a"default"'),(0,a.kt)("li",{parentName:"ul"},'\u67e5\u8be2TC\u670d\u52a1\n\u62fc\u63a5"service."+clusterName+".grouplist"\u627e\u5230\u771f\u5b9eTC\u670d\u52a1\u5730\u5740127.0.0.1:8091')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u7c7b\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3\u4ee5nacos\u4e3a\u4f8b"},"\u7b2c\u4e8c\u7c7b\uff1a\u6ce8\u518c\u4e2d\u5fc3\u548c\u914d\u7f6e\u4e2d\u5fc3(\u4ee5nacos\u4e3a\u4f8b)"),(0,a.kt)("h4",{id:"seata-server\u7aef-1"},"Seata Server\u7aef"),(0,a.kt)("p",null,"registry.conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'registry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa\n  type = "nacos"                  ---------------\x3e \u4f7f\u7528nacos\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\n  nacos {\n    application = "seata-server"  ---------------\x3e \u6307\u5b9a\u6ce8\u518c\u81f3nacos\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u540d\n    group = "SEATA_GROUP"         ---------------\x3e \u6307\u5b9a\u6ce8\u518c\u81f3nacos\u6ce8\u518c\u4e2d\u5fc3\u7684\u5206\u7ec4\u540d\n    serverAddr = "localhost"      ---------------\x3e nacos\u6ce8\u518c\u4e2d\u5fc3IP:\u7aef\u53e3\n    namespace = ""                ---------------\x3e nacos\u547d\u540d\u7a7a\u95f4id\uff0c""\u4e3anacos\u4fdd\u7559public\u7a7a\u95f4\u63a7\u4ef6\uff0c\u7528\u6237\u52ff\u914d\u7f6enamespace = "public"\n    cluster = "default"           ---------------\x3e \u6307\u5b9a\u6ce8\u518c\u81f3nacos\u6ce8\u518c\u4e2d\u5fc3\u7684\u96c6\u7fa4\u540d\n  }\n}\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3\n  type = "nacos"                  ------------\x3e \u4f7f\u7528nacos\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\n  nacos {\n    serverAddr = "localhost"      ---------------\x3e nacos\u6ce8\u518c\u4e2d\u5fc3IP:\u7aef\u53e3\n    namespace = ""\n    group = "SEATA_GROUP"         ---------------\x3e nacos\u914d\u7f6e\u4e2d\u5fc3\u7684\u5206\u7ec4\u540d\n    dataId = "seataServer.properties"  ---------------\x3e nacos\u914d\u7f6e\u4e2d\u5fc3\u7684\u914d\u7f6eID\n  }\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e\u9879")),(0,a.kt)("p",null,"  \u5728Seata Server\u7684\u5b89\u88c5\u76ee\u5f55conf\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"README-zh.md"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),"\u6587\u4ef6\u4e2d\u4ecb\u7ecd\u4e86Seata\u9700\u8981\u7684\u5e38\u89c1\u811a\u672cURL\u94fe\u63a5\uff0c\u5305\u62ec\u4e09\u7c7b\uff1a\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u548cSQL\u3001SeataServer\u7aef\u90e8\u7f72\u6240\u9700SQL\u548c\u811a\u672c\u3001\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e\u9879\u6a21\u677f\u548c\u811a\u672c\u3002\n\u5176\u4e2d\u5728script/config-center\u4e0b\u6709\u6587\u4ef6\u548c\u76ee\u5f55\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - README.md     \u4f7f\u7528\u5e2e\u52a9\n - config.txt    \u914d\u7f6e\u9879\u6a21\u677f\uff08\u5305\u542bServer\u548cClient\uff09\n - nacos/        \u63a8\u81f3nacos\u7684python\u548cshell\u811a\u672c \n - apollo/       \u63a8\u81f3apollo\u7684shell\u811a\u672c\n - consul/       \u63a8\u81f3consul\u7684shell\u811a\u672c\n - etcd3/        \u63a8\u81f3etcd3\u7684shell\u811a\u672c\n - zk/           \u63a8\u81f3zookeeper\u7684shell\u811a\u672c\n")),(0,a.kt)("p",null,"  config.txt\u6a21\u677f\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u7b5b\u9009\u548c\u4fee\u6539\u3002\n\u7136\u540e\u914d\u7f6e\u5230\u914d\u7f6e\u4e2d\u5fc3\uff1a\u5373\u53ef\u53c2\u7167README.md\u4f7f\u7528\u5e2e\u52a9\u901a\u8fc7\u811a\u672c\u63a8\u9001\u81f3\u914d\u7f6e\u4e2d\u5fc3\u3002\u4e5f\u5c06config.txt\u4e2d\u7684\u5185\u5bb9\u4eba\u5de5\u62f7\u8d1d\u81f3\u914d\u7f6e\u4e2d\u5fc3\uff08\u4f8b\u5982\u901a\u8fc7nacos\u914d\u7f6e\u4e2d\u5fc3\u7684Web\u9875\u9762\uff09\u3002  \u914d\u7f6e\u5b8c\u6bd5\u540e\u9700\u8981\u68c0\u67e5\u7ed3\u679c\u662f\u5426\u6b63\u786e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u81f3\u6ce8\u518c\u4e2d\u5fc3\n\u542f\u52a8seata-server\u6ce8\u518c\u81f3nacos\u6ce8\u518c\u4e2d\u5fc3\uff0c\u67e5\u770bnacos\u63a7\u5236\u53f0\u670d\u52a1\u5217\u8868\u786e\u8ba4\u662f\u5426\u6210\u529f  ")),(0,a.kt)("h4",{id:"client\u7aef-1"},"Client\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'seata.tx-service-group=my_test_tx_group ---------------\x3e \u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\uff08\u5728v1.5\u4e4b\u540e\u9ed8\u8ba4\u503c\u4e3adefault_tx_group\uff09\nregistry {\n  # file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa\n  type = "nacos"                ---------------\x3e \u4ecenacos\u83b7\u53d6TC\u670d\u52a1\n  nacos {\n    serverAddr = "localhost"\n    namespace = ""\n  }\n}\nconfig {\n  # file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3\n  type = "nacos"                ---------------\x3e \u4f7f\u7528nacos\u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\n  nacos {\n    serverAddr = "localhost"\n    namespace = ""\n  }\n}\n')),(0,a.kt)("h4",{id:"client\u7aefspringboot"},"Client\u7aef(SpringBoot)"),(0,a.kt)("p",null,"application.properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"seata.tx-service-group=my_test_tx_group ---------------\x3e \u4e8b\u52a1\u5206\u7ec4\u914d\u7f6e\uff08\u5728v1.5\u4e4b\u540e\u9ed8\u8ba4\u503c\u4e3adefault_tx_group\uff09\nseata.service.vgroup-mapping.my_test_tx_group=default  ---------------\x3e \u6307\u5b9a\u4e8b\u52a1\u5206\u7ec4\u81f3\u96c6\u7fa4\u6620\u5c04\u5173\u7cfb\uff08\u7b49\u53f7\u53f3\u4fa7\u7684\u96c6\u7fa4\u540d\u9700\u8981\u4e0eSeata-server\u6ce8\u518c\u5230Nacos\u7684cluster\u4fdd\u6301\u4e00\u81f4\uff09\nseata.registry.type=nacos      ---------------\x3e \u4f7f\u7528nacos\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\nseata.registry.nacos.server-addr=nacos\u6ce8\u518c\u4e2d\u5fc3IP:\u7aef\u53e3\nseata.registry.nacos.application=seata-server     ---------------\x3e Seata\u670d\u52a1\u540d\uff08\u5e94\u4e0eseata-server\u5b9e\u9645\u6ce8\u518c\u7684\u670d\u52a1\u540d\u4e00\u81f4\uff09\nseata.registry.nacos.group=SEATA_GROUP            ---------------\x3e Seata\u5206\u7ec4\u540d\uff08\u5e94\u4e0eseata-server\u5b9e\u9645\u6ce8\u518c\u7684\u5206\u7ec4\u540d\u4e00\u81f4\uff09\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\uff1a\u82e5Client\u4e0d\u901a\u8fc7Nacos\u83b7\u53d6seata-server\u670d\u52a1\u4fe1\u606f\uff0c\u800c\u662f\u76f4\u63a5\u6307\u5b9aseata-server\u670d\u52a1\u7aef\u8282\u70b9\u7684IP\u548c\u7aef\u53e3\u4fe1\u606f\uff0c\u5219\u53ef\u5c06\u4ee5\u4e0aapplication.properties\u4e2d\u6d89\u53canacos\u51e0\u4e2a\u914d\u7f6e\u6539\u4e3a\u5982\u4e24\u4e2a\u914d\u7f6e\uff1a"),(0,a.kt)("p",{parentName:"blockquote"},"seata.registry.type=file       ----\x3e \u4e0d\u63a8\u8350\u5728\u6b63\u5f0f\u73af\u5883\u4f7f\u7528"),(0,a.kt)("p",{parentName:"blockquote"},"seata.service.grouplist.cluster_beijing=127.0.0.1:8091    ----\x3e vgroup-mapping\uff08\u670d\u52a1\u7aefcluster\uff09\u5404\u4e2aseata-server\u8282\u70b9\u4fe1\u606f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u914d\u7f6e\n\u901a\u8fc7NacosConfiguration\u8fdc\u7a0b\u8bfb\u53d6seata\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},'\u83b7\u53d6\u4e8b\u52a1\u5206\u7ec4(\u670d\u52a1\u542f\u52a8\u65f6\u52a0\u8f7d\u914d\u7f6e)\nspring/springboot\u53ef\u914d\u7f6e\u5728yml\u3001properties\u4e2d\uff0c\u5bf9\u5e94\u503c"my_test_tx_group"\u5373\u4e3a\u4e8b\u52a1\u5206\u7ec4\u540d\uff0c\u82e5\u4e0d\u914d\u7f6e\u5219\u9ed8\u8ba4\u4ee5\uff1aspring.application.name\u503c+"-seata-service-group"\u62fc\u63a5\u540e\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5206\u7ec4\u540d'),(0,a.kt)("li",{parentName:"ul"},'\u67e5\u627eTC\u96c6\u7fa4\u540d\n\u62ff\u5230\u4e8b\u52a1\u5206\u7ec4\u540d"my_test_tx_group"\u62fc\u63a5\u6210"service.vgroupMapping.my_test_tx_group"\u4ece\u914d\u7f6e\u4e2d\u5fc3\u67e5\u627e\u5230TC\u96c6\u7fa4\u540dclusterName\u4e3a"default"'),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u627eTC\u670d\u52a1\n\u6839\u636eserverAddr\u548cnamespace\u4ee5\u53caclusterName\u5728\u6ce8\u518c\u4e2d\u5fc3\u627e\u5230\u771f\u5b9eTC\u670d\u52a1\u5217\u8868")),(0,a.kt)("p",null,"\u6ce8\uff1aserverAddr\u548cnamespace\u4e0eServer\u7aef\u4e00\u81f4\uff0cclusterName\u4e0eServer\u7aefcluster\u4e00\u81f4"))}v.isMDXComponent=!0}}]);