"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[6355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u65b0\u8d21\u732e\u8005\u5411\u5bfc",keywords:["Seata"],description:"\u8fd9\u7bc7\u5411\u5bfc\u65e8\u5728\u7ed9\u6b63\u5728\u51c6\u5907\u5411Seata\u63d0\u4ea4\u8d21\u732e\u7684\u65b0\u624b\u63d0\u4f9b\u6307\u5bfc\u3002"},i="\u65b0\u8d21\u732e\u8005\u5411\u5bfc",u={unversionedId:"developers/contributor-guide/new-contributor-guide_dev",id:"version-v1.3/developers/contributor-guide/new-contributor-guide_dev",title:"\u65b0\u8d21\u732e\u8005\u5411\u5bfc",description:"\u8fd9\u7bc7\u5411\u5bfc\u65e8\u5728\u7ed9\u6b63\u5728\u51c6\u5907\u5411Seata\u63d0\u4ea4\u8d21\u732e\u7684\u65b0\u624b\u63d0\u4f9b\u6307\u5bfc\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/developers/contributor-guide/new-contributor-guide_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/new-contributor-guide_dev",permalink:"/zh-cn/docs/v1.3/developers/contributor-guide/new-contributor-guide_dev",draft:!1,tags:[],version:"v1.3",frontMatter:{title:"\u65b0\u8d21\u732e\u8005\u5411\u5bfc",keywords:["Seata"],description:"\u8fd9\u7bc7\u5411\u5bfc\u65e8\u5728\u7ed9\u6b63\u5728\u51c6\u5907\u5411Seata\u63d0\u4ea4\u8d21\u732e\u7684\u65b0\u624b\u63d0\u4f9b\u6307\u5bfc\u3002"},sidebar:"developers",next:{title:"\u6d4b\u8bd5\u8986\u76d6\u7387\u5411\u5bfc",permalink:"/zh-cn/docs/v1.3/developers/contributor-guide/test-coverage-guide_dev"}},l={},s=[{value:"\u90ae\u4ef6\u5217\u8868\u63cf\u8ff0",id:"\u90ae\u4ef6\u5217\u8868\u63cf\u8ff0",level:3},{value:"\u62a5\u544a\u95ee\u9898",id:"\u62a5\u544a\u95ee\u9898",level:3},{value:"\u53d1\u9001 pull request",id:"\u53d1\u9001-pull-request",level:3},{value:"\u7f16\u7801\u89c4\u8303",id:"\u7f16\u7801\u89c4\u8303",level:3}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u65b0\u8d21\u732e\u8005\u5411\u5bfc"},"\u65b0\u8d21\u732e\u8005\u5411\u5bfc"),(0,a.kt)("p",null,"\u8fd9\u7bc7\u5411\u5bfc\u65e8\u5728\u7ed9\u6b63\u5728\u51c6\u5907\u5411Seata\u63d0\u4ea4\u8d21\u732e\u7684\u65b0\u624b\u63d0\u4f9b\u6307\u5bfc\u3002"),(0,a.kt)("h3",{id:"\u90ae\u4ef6\u5217\u8868\u63cf\u8ff0"},"\u90ae\u4ef6\u5217\u8868\u63cf\u8ff0"),(0,a.kt)("p",null,"TBD"),(0,a.kt)("h3",{id:"\u62a5\u544a\u95ee\u9898"},"\u62a5\u544a\u95ee\u9898"),(0,a.kt)("p",null,"\u60a8\u59cb\u7ec8\u53ef\u4ee5\u901a\u8fc7Github ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/issues"},"Issues")," \u5411Seata\u62a5\u544a\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u62a5\u544abug\uff0c\u8bf7\u53c2\u9605\u95ee\u9898\u62a5\u544a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/issues/new?template=BUG_REPORT.md"},"\u6a21\u7248"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u62a5\u544a\u529f\u80fd\u8981\u6c42\uff0c\u8bf7\u53c2\u9605\u95ee\u9898\u62a5\u544a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/issues/new?template=FEATURE_REQUEST.md"},"\u6a21\u7248"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u62a5\u544a\u5e38\u89c4\u95ee\u9898\uff0c\u6bd4\u5982\u63d0\u51fa\u4e00\u4e2a\u95ee\u9898\uff0c\u5219\u53ef\u4ee5\u6253\u5f00",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/issues/new"},"\u5e38\u89c4\u95ee\u9898")),(0,a.kt)("h3",{id:"\u53d1\u9001-pull-request"},"\u53d1\u9001 pull request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("a",{parentName:"li",href:"https://github.com/seata/seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md"},"pull request template")),(0,a.kt)("li",{parentName:"ul"},"\u5728\u60a8\u53d1\u9001pull request\u4e4b\u524d\uff0c\u8bf7\u540c\u6b65\u60a8\u7684github\u4ed3\u5e93\u548c\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u8fd9\u4f1a\u4f7f\u60a8\u7684pull request\u7b80\u5355\u660e\u4e86\uff0c\u5177\u4f53\u64cd\u4f5c\u8bf7\u770b\u5982\u4e0b\u6240\u793a\u6b65\u9aa4\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream git@github.com:seata/seata.git\ngit fetch upstream\ngit rebase upstream/master\ngit checkout -b your_awesome_patch\n... add some work\ngit push origin your_awesome_patch\n")),(0,a.kt)("h3",{id:"\u7f16\u7801\u89c4\u8303"},"\u7f16\u7801\u89c4\u8303"),(0,a.kt)("p",null,"\u8bf7\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seata/seata/blob/develop/CONTRIBUTING.md"},"CONTRIBUTING.md"),"\u4e2d\u7684\u7f16\u7801\u89c4\u8303\u5bf9\u81ea\u5df1\u7684\u4ee3\u7801\u8fdb\u884c\u68c0\u67e5\u3002"))}d.isMDXComponent=!0}}]);