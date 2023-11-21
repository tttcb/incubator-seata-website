"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(r),g=i,f=l["".concat(c,".").concat(g)]||l[g]||u[g]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},75338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const a={title:"Etcd3 Registry Center",keywords:["Seata","Etcd3","Registry Center"],description:"Etcd3 Registry Center."},o="Etcd3 Registry Center",s={unversionedId:"user/registry/etcd3",id:"version-v2.0/user/registry/etcd3",title:"Etcd3 Registry Center",description:"Etcd3 Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/user/registry/etcd3.md",sourceDirName:"user/registry",slug:"/user/registry/etcd3",permalink:"/en/docs/user/registry/etcd3",draft:!1,tags:[],version:"v2.0",frontMatter:{title:"Etcd3 Registry Center",keywords:["Seata","Etcd3","Registry Center"],description:"Etcd3 Registry Center."},sidebar:"docs",previous:{title:"Eureka Registry Center",permalink:"/en/docs/user/registry/eureka"},next:{title:"Consul Registry Center",permalink:"/en/docs/user/registry/consul"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Configuring the Registry Center on the Client Side",id:"configuring-the-registry-center-on-the-client-side",level:3},{value:"Configuring the Registry Center on the Server Side",id:"configuring-the-registry-center-on-the-server-side",level:3}],p={toc:d},l="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"etcd3-registry-center"},"Etcd3 Registry Center"),(0,i.kt)("p",null,"Etcd3 is an important implementation of the registry center in the Seata component."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before integrating ",(0,i.kt)("inlineCode",{parentName:"p"},"Etcd3")," into your Seata project, make sure that the Etcd3 Server service has been started in the background. If you are not familiar with the basic usage of Etcd3, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/quickstart"},"Etcd3 Quickstart")," for a preliminary understanding. It is recommended to use Etcd3 version ",(0,i.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,'The steps to integrate Etcd3 registry center into Seata are very simple, and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Registry Center".'),(0,i.kt)("h3",{id:"adding-maven-dependencies"},"Adding Maven Dependencies"),(0,i.kt)("p",null,"First, you need to add the Maven dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"jetcd-core")," to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file. It is recommended to use jetcd-core version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3.0+"),". The version relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-alibaba-seata")," and the corresponding microservice version can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"Version Description"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n        \x3c!-- Etcd3 Client Dependency --\x3e\n<dependency>\n    <groupId>io.etcd</groupId>\n    <artifactId>jetcd-core</artifactId>\n    <version>0.3.0 or above</version>\n</dependency>\n\n")),(0,i.kt)("h3",{id:"configuring-the-registry-center-on-the-client-side"},"Configuring the Registry Center on the Client Side"),(0,i.kt)("p",null,"Add the corresponding configuration to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/spring/application.yml"},(0,i.kt)("strong",{parentName:"a"},"application.yml")),", and refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/client"},"Configuration Reference")," for other configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      my_test_tx_group: seata-server # Configure the value corresponding to registry.eureka.application in the server-side configuration here\n  registry:\n    type: etcd3\n    etcd3:\n      server-addr: http://localhost:2379\n")),(0,i.kt)("h3",{id:"configuring-the-registry-center-on-the-server-side"},"Configuring the Registry Center on the Server Side"),(0,i.kt)("p",null,"Add the corresponding configuration to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/server/config/registry.conf"},"registry.conf"),", and refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/server"},"Configuration Reference")," for other configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'registry {\n  type = "etcd3"\n \n  etcd3 {\n    serverAddr = "http://localhost:2379"\n  }\n}\n')),(0,i.kt)("p",null,"After the configuration is completed, start the application to experience the Seata service."))}u.isMDXComponent=!0}}]);