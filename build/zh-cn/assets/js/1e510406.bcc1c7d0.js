"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[72151],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=m(a),g=r,N=d["".concat(u,".").concat(g)]||d[g]||k[g]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},23113:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Seata \u7ef4\u62a4\u8005",keywords:["Seata","\u7ef4\u62a4\u8005"],description:"Seata \u7ef4\u62a4\u8005\u540d\u5355"},i=void 0,p={unversionedId:"developers/developers_dev",id:"version-v1.7/developers/developers_dev",title:"Seata \u7ef4\u62a4\u8005",description:"Seata \u7ef4\u62a4\u8005\u540d\u5355",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.7/developers/developers_dev.md",sourceDirName:"developers",slug:"/developers/developers_dev",permalink:"/zh-cn/docs/v1.7/developers/developers_dev",draft:!1,tags:[],version:"v1.7",frontMatter:{title:"Seata \u7ef4\u62a4\u8005",keywords:["Seata","\u7ef4\u62a4\u8005"],description:"Seata \u7ef4\u62a4\u8005\u540d\u5355"},sidebar:"developers",next:{title:"\u65b0\u8d21\u732e\u8005\u5411\u5bfc",permalink:"/zh-cn/docs/v1.7/developers/contributor-guide/new-contributor-guide_dev"}},u={},m=[{value:"\u5f00\u53d1\u4eba\u5458",id:"\u5f00\u53d1\u4eba\u5458",level:2},{value:"Seata Maintainer \u5217\u8868",id:"seata-maintainer-\u5217\u8868",level:3},{value:"Seata Committer \u5217\u8868",id:"seata-committer-\u5217\u8868",level:3},{value:"Seata\u5f00\u53d1\u8005\u89d2\u8272",id:"seata\u5f00\u53d1\u8005\u89d2\u8272",level:2},{value:"Maintainer",id:"maintainer",level:3},{value:"Committer",id:"committer",level:3},{value:"Contributor",id:"contributor",level:3},{value:"\u8d21\u732e\u6307\u5f15",id:"\u8d21\u732e\u6307\u5f15",level:2},{value:"\u8d21\u732e\u8005\u5411\u5bfc",id:"\u8d21\u732e\u8005\u5411\u5bfc",level:3},{value:"\u63d0\u4ea4\u8005\u5411\u5bfc",id:"\u63d0\u4ea4\u8005\u5411\u5bfc",level:3},{value:"\u8d21\u732e\u8005\u6d3b\u52a8",id:"\u8d21\u732e\u8005\u6d3b\u52a8",level:3}],o={toc:m},d="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5f00\u53d1\u4eba\u5458"},"\u5f00\u53d1\u4eba\u5458"),(0,r.kt)("p",null,"\u672c\u9875\u9762\u5c55\u793a\u4e86Seata\u7684\u5f00\u53d1\u56e2\u961f\u3002\u8bf7\u901a\u8fc7\u63d0\u4ea4PR\u7684\u65b9\u5f0f\u628a\u81ea\u5df1\u7684\u4fe1\u606f\u6dfb\u52a0\u5230\u5217\u8868\u4e0a\u3002\u6ce8\uff1a\u6392\u540d\u4e0d\u5206\u5148\u540e"),(0,r.kt)("h3",{id:"seata-maintainer-\u5217\u8868"},"Seata Maintainer \u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"github"),(0,r.kt)("th",{parentName:"tr",align:null},"\u516c\u53f8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5b63\u654f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/slievrly"},"slievrly")),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9648\u5065\u658c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/funky-eyes"},"funky-eyes")),(0,r.kt)("td",{parentName:"tr",align:null},"TongDun")))),(0,r.kt)("h3",{id:"seata-committer-\u5217\u8868"},"Seata Committer \u5217\u8868"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u59d3\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"github"),(0,r.kt)("th",{parentName:"tr",align:null},"\u516c\u53f8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7533\u6d77\u5f3a"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/sharajava"},"sharajava")),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5218\u620e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/robynron"},"robynron")),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9648\u8fde\u4e1c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/purple-force"},"purple-force")),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5f20\u68ee"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/zhangthen"},"zhangthen")),(0,r.kt)("td",{parentName:"tr",align:null},"Antfin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7ae0\u803f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ujjboy"},"ujjboy")),(0,r.kt)("td",{parentName:"tr",align:null},"Antfin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u96f7\u5fd7\u8fdc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/leizhiyuan"},"leizhiyuan")),(0,r.kt)("td",{parentName:"tr",align:null},"Tencent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u738b\u6e05"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/jovany-wang"},"jovany-wang")),(0,r.kt)("td",{parentName:"tr",align:null},"Baidu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5434\u6c5f\u5777"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xingfudeshi"},"xingfudeshi")),(0,r.kt)("td",{parentName:"tr",align:null},"Truthai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u674e\u948a"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/CoffeeLatte007"},"CoffeeLatte007")),(0,r.kt)("td",{parentName:"tr",align:null},"YuanFuDao")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u738b\u6b23"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lovepoem"},"lovepoem")),(0,r.kt)("td",{parentName:"tr",align:null},"JD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8881\u56fd\u5c27"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/github-ygy"},"github-ygy")),(0,r.kt)("td",{parentName:"tr",align:null},"NetEase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5f20\u65ed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/zhangxu19830126"},"zhangxu19830126")),(0,r.kt)("td",{parentName:"tr",align:null},"InfiniVision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u5e05\u9e4f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/niaoshuai"},"niaoshuai")),(0,r.kt)("td",{parentName:"tr",align:null},"HuanQiuYouLu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb8\u5fb7\u4f51"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/skyesx"},"skyesx")),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e84\u91d1\u96f7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/zjinlei"},"zjinlei")),(0,r.kt)("td",{parentName:"tr",align:null},"Helios")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5f20\u5609\u4f1f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/l81893521"},"l81893521")),(0,r.kt)("td",{parentName:"tr",align:null},"DaShenLin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u949f\u6b63\u6d9b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/jsbxyyx"},"jsbxyyx")),(0,r.kt)("td",{parentName:"tr",align:null},"Shenzhen arts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9648\u9f99"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/long187"},"long187")),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u90ed\u4e91\u5d69"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/ggndnn"},"ggndnn")),(0,r.kt)("td",{parentName:"tr",align:null},"FND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u738b\u826f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/wangliang181230"},"wangliang181230")),(0,r.kt)("td",{parentName:"tr",align:null},"HuiKang")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u66f9\u534e\u680b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/caohdgege"},"caohdgege")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6c6a\u5fe0\u7965"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lightClouds917"},"lightClouds917")),(0,r.kt)("td",{parentName:"tr",align:null},"TongDun")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5218\u6653\u654f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/dk-lockdown"},"dk-lockdown")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2d\u56fd\u7cfb\u7edf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5f20\u4e58\u8f89"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/objcoding"},"objcoding")),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Group")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u826f\u80b2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/objcoding"},"renliangyu857")),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u7f51\u94f6\u884c")))),(0,r.kt)("h2",{id:"seata\u5f00\u53d1\u8005\u89d2\u8272"},"Seata\u5f00\u53d1\u8005\u89d2\u8272"),(0,r.kt)("p",null,"Seata\u5f00\u53d1\u8005\u5305\u542bMaintainer\u3001Committer\u3001Contributor\u4e09\u79cd\u89d2\u8272\uff0c\u6bcf\u79cd\u89d2\u8272\u7684\u6807\u51c6\u5b9a\u4e49\u5982\u4e0b\u3002"),(0,r.kt)("h3",{id:"maintainer"},"Maintainer"),(0,r.kt)("p",null,"Maintainer\u662f\u5bf9Seata\u9879\u76ee\uff08\u5305\u62ecSeata\u4e0b\u7684\u9879\u76ee\uff09\u7684\u6f14\u8fdb\u548c\u53d1\u5c55\u505a\u51fa\u663e\u8457\u8d21\u732e\u7684\u4e2a\u4eba\u3002\u5177\u4f53\u5305\u542b\u4ee5\u4e0b\u7684\u6807\u51c6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u591a\u4e2a\u5173\u952e\u6a21\u5757\u6216\u8005\u5de5\u7a0b\u7684\u8bbe\u8ba1\u4e0e\u5f00\u53d1\uff0c\u662f\u9879\u76ee\u7684\u6838\u5fc3\u5f00\u53d1\u4eba\u5458\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u6301\u7eed\u7684\u6295\u5165\u548c\u6fc0\u60c5\uff0c\u80fd\u591f\u79ef\u6781\u53c2\u4e0e\u793e\u533a\u3001\u5b98\u7f51\u3001issue\u3001PR\u7b49\u9879\u76ee\u76f8\u5173\u4e8b\u9879\u7684\u7ef4\u62a4\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u793e\u533a\u4e2d\u5177\u6709\u6709\u76ee\u5171\u7779\u7684\u5f71\u54cd\u529b\uff0c\u80fd\u591f\u4ee3\u8868Seata\u53c2\u52a0\u91cd\u8981\u7684\u793e\u533a\u4f1a\u8bae\u548c\u6d3b\u52a8\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5177\u6709\u57f9\u517bCommitter\u548cContributor\u7684\u610f\u8bc6\u548c\u80fd\u529b\uff1b")),(0,r.kt)("h3",{id:"committer"},"Committer"),(0,r.kt)("p",null,"Committer\u662f\u5177\u6709Seata\u4ed3\u5e93\u5199\u6743\u9650\u7684\u4e2a\u4eba\uff0c\u5305\u542b\u4ee5\u4e0b\u7684\u6807\u51c6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u80fd\u591f\u5728\u957f\u65f6\u95f4\u5185\u505a\u6301\u7eed\u8d21\u732eissue\u3001PR\u7684\u4e2a\u4eba\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u4e0eissue\u5217\u8868\u7684\u7ef4\u62a4\u53ca\u91cd\u8981feature\u7684\u8ba8\u8bba\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u4e0ecode review\uff1b")),(0,r.kt)("h3",{id:"contributor"},"Contributor"),(0,r.kt)("p",null,"Contributor\u662f\u5bf9Seata\u9879\u76ee\u6709\u8d21\u732e\u7684\u4e2a\u4eba\uff0c\u6807\u51c6\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u8fc7PR\u5e76\u88ab\u5408\u5e76\uff1b")),(0,r.kt)("h2",{id:"\u8d21\u732e\u6307\u5f15"},"\u8d21\u732e\u6307\u5f15"),(0,r.kt)("h3",{id:"\u8d21\u732e\u8005\u5411\u5bfc"},"\u8d21\u732e\u8005\u5411\u5bfc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./contributor-guide/new-contributor-guide_dev"},"\u65b0\u8d21\u732e\u8005\u5411\u5bfc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./contributor-guide/test-coverage-guide_dev"},"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./contributor-guide/reporting-security-issues_dev"},"\u5982\u4f55\u6c47\u62a5\u5b89\u5168\u95ee\u9898")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./guide_dev"},"\u53c2\u4e0e\u8d21\u732e"))),(0,r.kt)("h3",{id:"\u63d0\u4ea4\u8005\u5411\u5bfc"},"\u63d0\u4ea4\u8005\u5411\u5bfc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./committer-guide/label-an-issue-guide_dev"},"\u7ed9\u95ee\u9898\u6253\u6807\u7b7e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./committer-guide/website-guide_dev"},"\u7f51\u7ad9\u5411\u5bfc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./committer-guide/release-guide_dev"},"\u7248\u672c\u53d1\u5e03\u5411\u5bfc"))),(0,r.kt)("h3",{id:"\u8d21\u732e\u8005\u6d3b\u52a8"},"\u8d21\u732e\u8005\u6d3b\u52a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./contributor-activity/top-contributer_dev"},"Top Contributor\u6d3b\u52a8"))))}k.isMDXComponent=!0}}]);