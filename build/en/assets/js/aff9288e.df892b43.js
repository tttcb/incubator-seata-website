"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[32443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),f=i,g=l["".concat(s,".").concat(f)]||l[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const o={title:"Etcd3 Configuration Center",keywords:["Seata","Etcd3"],description:"Etcd3 Configuration Center."},a="Etcd3 Configuration Center",c={unversionedId:"user/configuration/etcd3",id:"version-v1.7/user/configuration/etcd3",title:"Etcd3 Configuration Center",description:"Etcd3 Configuration Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/user/configuration/etcd3.md",sourceDirName:"user/configuration",slug:"/user/configuration/etcd3",permalink:"/en/docs/v1.7/user/configuration/etcd3",draft:!1,tags:[],version:"v1.7",frontMatter:{title:"Etcd3 Configuration Center",keywords:["Seata","Etcd3"],description:"Etcd3 Configuration Center."},sidebar:"docs",previous:{title:"Apollo Configuration Center",permalink:"/en/docs/v1.7/user/configuration/apollo"},next:{title:"Consul Configuration Center",permalink:"/en/docs/v1.7/user/configuration/consul"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Client-side Configuration Center",id:"client-side-configuration-center",level:3},{value:"Server-side Configuration Center",id:"server-side-configuration-center",level:3},{value:"Upload Configuration to Etcd3 Configuration Center",id:"upload-configuration-to-etcd3-configuration-center",level:3},{value:"Upload Configuration to Etcd3 via Script",id:"upload-configuration-to-etcd3-via-script",level:4}],p={toc:d},l="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"etcd3-configuration-center"},"Etcd3 Configuration Center"),(0,i.kt)("p",null,"Etcd3 is an important configuration center implementation in the Seata component."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before integrating ",(0,i.kt)("inlineCode",{parentName:"p"},"Etcd3")," into your Seata project, make sure that the Etcd3 Server service has been started in the background. If you are not familiar with the basic usage of Etcd3, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/quickstart"},"Etcd3 Quickstart")," for preliminary understanding. It is recommended to use Etcd3 version ",(0,i.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,'The steps to integrate Etcd3 registry center into Seata are very simple, and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Registry Center".'),(0,i.kt)("h3",{id:"adding-maven-dependencies"},"Adding Maven Dependencies"),(0,i.kt)("p",null,"First, you need to add the Maven dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"jetcd-core")," to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file. It is recommended to use jetcd-core version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3.0+"),". The version relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-alibaba-seata")," and the corresponding microservice version can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"Version Description"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n        \x3c!-- Etcd3 Client Dependency --\x3e\n<dependency>\n    <groupId>io.etcd</groupId>\n    <artifactId>jetcd-core</artifactId>\n    <version>0.3.0 or above</version>\n</dependency>\n")),(0,i.kt)("h3",{id:"client-side-configuration-center"},"Client-side Configuration Center"),(0,i.kt)("p",null,"Add the corresponding configuration center to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/spring/application.yml"},(0,i.kt)("strong",{parentName:"a"},"application.yml"))," file. For other configurations, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/client"},"Configuration Reference"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  config:\n    type: etcd3\n    etcd3:\n      server-addr: http://localhost:2379\n")),(0,i.kt)("h3",{id:"server-side-configuration-center"},"Server-side Configuration Center"),(0,i.kt)("p",null,"Add the corresponding configuration center to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/server/config/registry.conf"},"registry.conf")," file. For other configurations, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/server"},"Configuration Reference"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'config {\n  type = "etcd3"\n\n  etcd3 {\n    serverAddr = "http://localhost:2379"\n  }\n}\n\n')),(0,i.kt)("h3",{id:"upload-configuration-to-etcd3-configuration-center"},"Upload Configuration to Etcd3 Configuration Center"),(0,i.kt)("h4",{id:"upload-configuration-to-etcd3-via-script"},"Upload Configuration to Etcd3 via Script"),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/config-center"},"config.txt")," in the repository and make modifications. Then run the provided etcd3 script in the repository to submit the information to the Etcd3 server. If necessary, you can directly modify it through the console."),(0,i.kt)("p",null,"eg: sh ${SEATAPATH}/script/config-center/etcd3/etcd3-config.sh -h localhost -p 2379"),(0,i.kt)("p",null,"For detailed analysis, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/config-center/README.md"},"Readme document")),(0,i.kt)("p",null,"After that, start the Seata-Server and Client (business side) applications. If the Seata-Server and Client (business side) applications have already been started before importing the configuration to Etcd3, they need to be restarted."))}u.isMDXComponent=!0}}]);