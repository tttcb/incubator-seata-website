"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[5969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),g=i,f=l["".concat(c,".").concat(g)]||l[g]||d[g]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},33132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"Eureka Registry Center",keywords:["Seata","Eureka","Registry Center"],description:"Eureka Registry Center."},o="Eureka Registry",s={unversionedId:"user/registry/eureka",id:"version-v1.7/user/registry/eureka",title:"Eureka Registry Center",description:"Eureka Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/user/registry/eureka.md",sourceDirName:"user/registry",slug:"/user/registry/eureka",permalink:"/en/docs/v1.7/user/registry/eureka",draft:!1,tags:[],version:"v1.7",frontMatter:{title:"Eureka Registry Center",keywords:["Seata","Eureka","Registry Center"],description:"Eureka Registry Center."},sidebar:"docs",previous:{title:"Nacos Registry Center",permalink:"/en/docs/v1.7/user/registry/nacos"},next:{title:"Etcd3 Registry Center",permalink:"/en/docs/v1.7/user/registry/etcd3"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Configuring the Registry on the Client Side",id:"configuring-the-registry-on-the-client-side",level:3},{value:"Server-side configuration of the registry center",id:"server-side-configuration-of-the-registry-center",level:3}],u={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"eureka-registry"},"Eureka Registry"),(0,i.kt)("p",null,"Eureka is an important registry implementation in the Seata component."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before integrating ",(0,i.kt)("inlineCode",{parentName:"p"},"Eureka")," into your Seata project, make sure that the Eureka Server service is already running in the background. If you are not familiar with the basic usage of Eureka, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://projects.spring.io/spring-cloud/spring-cloud.html#_service_discovery_eureka_clients"},"Eureka Quick Start")," for reference. It is recommended to use Eureka version ",(0,i.kt)("inlineCode",{parentName:"p"},"2.X")," or above."),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,'The steps to integrate Eureka registry into Seata are very simple, and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Registry".'),(0,i.kt)("h3",{id:"adding-maven-dependencies"},"Adding Maven Dependencies"),(0,i.kt)("p",null,"First, you need to add the Maven dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-netflix-eureka-client")," to your project's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file. It is recommended to use Seata ",(0,i.kt)("inlineCode",{parentName:"p"},"1.4.0+"),". For the version relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"spring-cloud-starter-alibaba-seata")," and the corresponding microservice version, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"},"Version Description"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- seata dependency --\x3e\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n    <version>2.1.2.RELEASE and above</version>\n    <exclusions>\n        <exclusion>\n            <groupId>io.seata</groupId>\n            <artifactId>seata-spring-boot-starter</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n\x3c!-- eureka client dependency --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>2.0.0.RELEASE and above</version>\n</dependency>\n")),(0,i.kt)("h3",{id:"configuring-the-registry-on-the-client-side"},"Configuring the Registry on the Client Side"),(0,i.kt)("p",null,"Add the corresponding configuration to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/client/spring/application.yml"},(0,i.kt)("strong",{parentName:"a"},"application.yml")),", and refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/client"},"Configuration Reference")," for other configurations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seata:\n  tx-service-group: my_test_tx_group\n  service:\n    vgroup-mapping:\n      my_test_tx_group: seata-server # Configure the corresponding value of registry.eureka.application on the Server side here\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n      weight: 1\n")),(0,i.kt)("h3",{id:"server-side-configuration-of-the-registry-center"},"Server-side configuration of the registry center"),(0,i.kt)("p",null,"Add the corresponding configuration center in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/script/server/config/registry.conf"},"registry.conf"),", and refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/tree/develop/script/server"},"configuration")," for the rest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'registry {\n  type = "eureka"\n \n  eureka {\n    serviceUrl = "http://localhost:8761/eureka"\n    application = "seata-server"\n    weight = "1"\n  }\n}\n')),(0,i.kt)("p",null,"After that, when Seata-Server is started, the Server-side service will appear in the registry center list in the Eureka console. After configuring the Client, you can start the application to experience the Seata service."))}d.isMDXComponent=!0}}]);