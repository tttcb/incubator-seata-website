/*! For license information please see 1df93b7f.f032a1d2.js.LICENSE.txt */
(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[53237,30799,53591,51519,45292,15707],{7255:(t,e,a)=>{"use strict";a.d(e,{$Q:()=>l,zx:()=>m,$_:()=>u,JO:()=>g,iR:()=>X});var i=a(67294),s=a(94184),n=a.n(s);const c={type:"primary",link:"",target:"_self"},m=function(t){return void 0===t&&(t=c),i.createElement("a",{className:n()({button:!0,[`button-${t.type}`]:!0}),target:t.target||"_self",href:t.link},t.children||null)},g=t=>{const{type:e}=t;return i.createElement("i",{className:n()({"docsite-icon":!0,[`docsite-icon-${e}`]:!0})})},l=t=>{const{text:e,img:a}=t,s=n()({bar:!0});return i.createElement("div",{className:s},i.createElement("div",{className:"bar-body"},i.createElement("img",{src:a,className:"front-img"}),i.createElement("span",null,e),i.createElement("img",{src:a,className:"back-img"})))};var r=a(73935);const o=(t,e)=>{let a=null;return function(){for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];const c=this;clearTimeout(a),a=setTimeout((()=>{t.apply(c,s)}),e)}};class p extends i.Component{constructor(t){super(t),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=o((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let t=1;const e=this.container?.getBoundingClientRect().width,a=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:r.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return e&&a&&(t=Math.floor(e/a)),t||1};getListWidth=()=>{let t=0;const{children:e}=this.props,{visibleNum:a}=this.state,s=i.Children.count(e),n=Math.ceil(s/a);if(this.container){const e=this.container?.getBoundingClientRect().width;t=e*n}return t};changeScreen=t=>{const{screenIndex:e}=this.state;t!==e&&this.setState({screenIndex:t})};renderSliderList=()=>{const{children:t}=this.props,{screenIndex:e,visibleNum:a}=this.state,s=[],n=i.Children.count(t),c=Math.ceil(n/a);for(let i=0;i<c;i++)s.push(Array.from(t).slice(i*a,(i+1)*a));return i.createElement("div",{className:"slider-list",style:{transform:`translateX(-${e*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},s.map(((t,e)=>i.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:e,ref:t=>{this[`sliderScreen${e}`]=t}},t.map(((t,s)=>i.createElement("div",{className:"slider-item",key:s},i.cloneElement(t,{ref:t=>{this[`sliderItemChild${e*a+s}`]=t}}))))))))};renderControl=()=>{const{children:t}=this.props,{screenIndex:e,visibleNum:a}=this.state,s=i.Children.count(t),c=Math.ceil(s/a),m=[];for(let g=0;g<c;g++)m.push(i.createElement("span",{key:g,className:n()({"slider-control-item":!0,"slider-control-item-active":g===e}),onClick:this.changeScreen.bind(this,g)}));return i.createElement("div",{className:"slider-control"},m)};render(){return i.createElement("div",{className:"slider",ref:t=>{this.container=t}},this.renderSliderList(),this.renderControl())}}const X=p;i.Component;var d=a(95999);const h={vision:{title:(0,d.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,d.I)({id:"homepage.footerVersionContent",message:"Apache Seata (incubating) \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"})},documentation:{title:(0,d.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,d.I)({id:"homepage.footerDocListText1",message:"Seata \u662f\u4ec0\u4e48\uff1f"}),link:"docs/overview/what-is-seata",target:""},{text:(0,d.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"docs/user/quickstart",target:""},{text:(0,d.I)({id:"homepage.footerDocListText3",message:"\u62a5\u544a\u6587\u6863\u95ee\u9898"}),link:"https://github.com/seata/seata.github.io/issues/new",target:"_blank"},{text:(0,d.I)({id:"homepage.footerDocListText4",message:"\u5728Github\u4e0a\u7f16\u8f91\u6b64\u6587\u6863"}),link:"https://github.com/seata/seata.github.io",target:"_blank"}]},resources:{title:(0,d.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,d.I)({id:"homepage.footerResourcesListText1",message:"\u535a\u5ba2"}),link:"blog",target:""},{text:(0,d.I)({id:"homepage.footerResourcesListText2",message:"\u793e\u533a"}),link:"community",target:""}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Seata`},u=t=>{const{logo:e}=t;return i.createElement("footer",{className:"footer-container"},i.createElement("div",{className:"footer-body"},i.createElement("img",{style:{marginTop:"4px",maxWidth:"120px",height:"auto"},src:e}),i.createElement("br",null),i.createElement("br",null),i.createElement("div",{className:"cols-container"},i.createElement("div",{className:"col col-12"},i.createElement("h3",null,h.vision.title),i.createElement("p",null,h.vision.content)),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,h.documentation.title),h.documentation.list.map(((t,e)=>i.createElement("dd",{key:e},"http"===t.link?.substr(0,4)&&i.createElement("a",{href:t.link,target:t.target||"_self"},t.text),"http"!==t.link?.substr(0,4)&&i.createElement("a",{href:t.link,target:t.target||"_self"},t.text)))))),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,h.resources.title),h.resources.list.map(((t,e)=>i.createElement("dd",{key:e},i.createElement("a",{href:t.link,target:t.target||"_self"},t.text))))))),i.createElement("div",{className:"copyright"},i.createElement("span",null,h.copyright))))}},97685:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>g});var i=a(67294),s=a(95999),n=a(7255);const c={list:[{icon:"feature-1",title:(0,s.I)({id:"homepage.featureListTitle1",message:"\u5fae\u670d\u52a1\u6846\u67b6\u652f\u6301"}),content:[(0,s.I)({id:"homepage.featureListContent1",message:"\u76ee\u524d\u5df2\u652f\u6301Dubbo\u3001Spring Cloud\u3001Sofa-RPC\u3001Motan \u548c gRPC \u7b49RPC\u6846\u67b6\uff0c\u5176\u4ed6\u6846\u67b6\u6301\u7eed\u96c6\u6210\u4e2d"})]},{icon:"feature-2",title:(0,s.I)({id:"homepage.featureListTitle2",message:"AT \u6a21\u5f0f"}),content:[(0,s.I)({id:"homepage.featureListContent2",message:"\u63d0\u4f9b\u65e0\u4fb5\u5165\u81ea\u52a8\u8865\u507f\u7684\u4e8b\u52a1\u6a21\u5f0f\uff0c\u76ee\u524d\u5df2\u652f\u6301MySQL\u3001Oracle\u3001PostgreSQL\u3001TiDB\u3001MariaDB\u3001DaMeng\u3001PolarDB-X 2.0\u3001SQLServer\u3002DB2\u5f00\u53d1\u4e2d"})]},{icon:"feature-3",title:(0,s.I)({id:"homepage.featureListTitle3",message:"TCC \u6a21\u5f0f"}),content:(0,s.I)({id:"homepage.featureListContent3",message:"\u652f\u6301 TCC \u6a21\u5f0f\u5e76\u53ef\u4e0e AT \u6df7\u7528\uff0c\u7075\u6d3b\u5ea6\u66f4\u9ad8"})},{icon:"feature-4",title:(0,s.I)({id:"homepage.featureListTitle4",message:"SAGA \u6a21\u5f0f"}),content:(0,s.I)({id:"homepage.featureListContent4",message:"\u4e3a\u957f\u4e8b\u52a1\u63d0\u4f9b\u6709\u6548\u7684\u89e3\u51b3\u65b9\u6848,\u63d0\u4f9b\u7f16\u6392\u5f0f\u548c\u6ce8\u89e3\u5f0f(\u5f00\u53d1\u4e2d)"})},{icon:"feature-5",title:(0,s.I)({id:"homepage.featureListTitle5",message:"XA \u6a21\u5f0f"}),content:(0,s.I)({id:"homepage.featureListContent5",message:"\u652f\u6301\u5df2\u5b9e\u73b0 XA \u63a5\u53e3\u7684\u6570\u636e\u5e93\u7684 XA \u6a21\u5f0f\uff0c\u76ee\u524d\u5df2\u652f\u6301MySQL\u3001Oracle\u548cMariaDB"})},{icon:"feature-6",title:(0,s.I)({id:"homepage.featureListTitle6",message:"\u9ad8\u53ef\u7528"}),content:(0,s.I)({id:"homepage.featureListContent6",message:"\u652f\u6301\u5b58\u7b97\u5206\u79bb\u7684\u96c6\u7fa4\u6a21\u5f0f\uff0c\u8ba1\u7b97\u8282\u70b9\u53ef\u6c34\u5e73\u6269\u5c55\uff0c\u5b58\u50a8\u652f\u6301\u6570\u636e\u5e93\u548c Redis\u3002Raft\u96c6\u7fa4\u6a21\u5f0f\u8fdb\u5165beta\u9a8c\u8bc1\u9636\u6bb5"})}],title:(0,s.I)({id:"homepage.featureTitle",message:"\u7279\u8272\u529f\u80fd"})},m=t=>{const{feature:e}=t;return i.createElement("li",null,i.createElement(n.JO,{type:e.icon}),i.createElement("div",null,i.createElement("h4",null,e.title),i.createElement("p",null,e.content)))},g=()=>i.createElement("section",{className:"feature-section"},i.createElement("div",{className:"feature-container"},i.createElement("h3",null,c.title),i.createElement("ul",null,c.list.map(((t,e)=>i.createElement(m,{feature:t,key:e}))))))},78413:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var i=a(67294),s=a(95999);const n={title:(0,s.I)({id:"homepage.introTitle",message:"Seata \u662f\u4ec0\u4e48\uff1f"}),desc:(0,s.I)({id:"homepage.introDesc",message:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002\u5728 Seata \u5f00\u6e90\u4e4b\u524d\uff0c\u5176\u5185\u90e8\u7248\u672c\u5728\u963f\u91cc\u7cfb\u5185\u90e8\u4e00\u76f4\u626e\u6f14\u7740\u5e94\u7528\u67b6\u6784\u5c42\u6570\u636e\u4e00\u81f4\u6027\u7684\u4e2d\u95f4\u4ef6\u89d2\u8272\uff0c\u5e2e\u52a9\u7ecf\u6d4e\u4f53\u5e73\u7a33\u7684\u5ea6\u8fc7\u5386\u5e74\u7684\u53cc11\uff0c\u5bf9\u4e0a\u5c42\u4e1a\u52a1\u8fdb\u884c\u4e86\u6709\u529b\u7684\u6280\u672f\u652f\u6491\u3002\u7ecf\u8fc7\u591a\u5e74\u6c89\u6dc0\u4e0e\u79ef\u7d2f\uff0c\u5176\u5546\u4e1a\u5316\u4ea7\u54c1\u5148\u540e\u5728\u963f\u91cc\u4e91\u3001\u91d1\u878d\u4e91\u4e0a\u552e\u5356\u30022019.1 \u4e3a\u4e86\u6253\u9020\u66f4\u52a0\u5b8c\u5584\u7684\u6280\u672f\u751f\u6001\u548c\u666e\u60e0\u6280\u672f\u6210\u679c\uff0cSeata \u6b63\u5f0f\u5ba3\u5e03\u5bf9\u5916\u5f00\u6e90\uff0c\u672a\u6765 Seata \u5c06\u4ee5\u793e\u533a\u5171\u5efa\u7684\u5f62\u5f0f\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u843d\u5730\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\u3002"}),img:(0,s.I)({id:"homepage.introImg"})},c=()=>i.createElement("section",{className:"introduction-section"},i.createElement("div",{className:"introduction-body"},i.createElement("div",{className:"introduction"},i.createElement("h3",null,n.title),i.createElement("p",null,n.desc)),i.createElement("img",{src:n.img})))},37954:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var i=a(67294);const s={title:(0,a(95999).I)({id:"homepage.msemapTitle",message:"\u5fae\u670d\u52a1\u5168\u666f\u56fe"})},n=()=>i.createElement("section",{className:"msemap-section"},i.createElement("div",{className:"msemap-container"},i.createElement("h3",null,s.title),i.createElement("div",{id:"mse-arc-container"})))},68726:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>m});var i=a(67294),s=a(95999),n=a(7255);const c={brandName:"Seata",briefIntroduction:(0,s.I)({id:"homepage.briefIntroduction",message:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"}),buttons:[{text:(0,s.I)({id:"homepage.quickstartButton",message:"\u5feb\u901f\u5165\u95e8"}),link:"docs/user/quickstart",type:"normal"},{text:(0,s.I)({id:"homepage.userregistrationButton",message:"\u7528\u6237\u767b\u8bb0"}),link:"https://github.com/seata/seata/issues/1246",type:"normal",target:"_blank"},{text:"GitHub-Java",link:"https://github.com/seata/seata",type:"normal",target:"_blank"},{text:"GitHub-Golang",link:"https://github.com/seata/seata-go",type:"normal",target:"_blank"},{text:"Docker Image",link:"https://hub.docker.com/repository/docker/seataio/seata-server/tags?page=1&ordering=last_updated",type:"normal",target:"_blank"}]},m=()=>{const[t,e]=i.useState({starCount:"",forkCount:""}),[a,s]=i.useState({version:"v1.7.1",url:"https://github.com/seata/seata/releases/tag/v1.7.1",date:"2023/9/5"});return i.useEffect((()=>{fetch("//api.github.com/repos/seata/seata").then((t=>t.json())).then((t=>{e({starCount:`${t.stargazers_count}`,forkCount:`${t.forks_count}`})})),fetch("https://api.github.com/repos/seata/seata/releases/latest").then((t=>t.json())).then((t=>{s({version:t.name,url:t.html_url,date:new Date(t.published_at).toLocaleDateString()})}))}),[]),i.createElement("section",{className:"top-section"},i.createElement("div",{className:"top-body"},i.createElement("div",{className:"vertical-middle"},i.createElement("div",{className:"product-name"},i.createElement("h2",null,c.brandName)),i.createElement("p",{className:"product-desc"},c.briefIntroduction),i.createElement("div",{className:"button-area"},c.buttons.map((t=>i.createElement(n.zx,{type:t.type,key:t.text,link:t.link,target:t.target},t.text)))),i.createElement("div",{className:"github-buttons"},i.createElement("a",{href:"https://github.com/seata/seata",target:"_blank",rel:"noopener noreferrer"},i.createElement("div",{className:"star"},i.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"}),i.createElement("span",{className:"type"},"Star"),i.createElement("span",{className:"line"}),i.createElement("span",{className:"count"},t.starCount))),i.createElement("a",{href:"https://github.com/seata/seata/fork",target:"_blank",rel:"noopener noreferrer"},i.createElement("div",{className:"fork"},i.createElement("img",{src:"https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"}),i.createElement("span",{className:"type"},"Fork"),i.createElement("span",{className:"line"}),i.createElement("span",{className:"count"},t.forkCount)))),i.createElement("div",{className:"version-note"},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.url},"Release Note of ",a.version)),i.createElement("div",{className:"release-date"},"Released on ",a.date)),i.createElement("div",{className:"animation"},i.createElement("img",{className:"img1",src:"//img.alicdn.com/tfs/TB1evnpJhnaK1RjSZFBXXcW7VXa-702-312.png"}),i.createElement("img",{className:"img2",src:"//img.alicdn.com/tfs/TB1iau9JcbpK1RjSZFyXXX_qFXa-914-1156.png"}),i.createElement("div",{className:"outer-circle"}),i.createElement("div",{className:"rotate-circle"},i.createElement("svg",{viewBox:"0 0 404 404",xmlns:"http://www.w3.org/2000/svg"},i.createElement("defs",null,i.createElement("linearGradient",{id:"linear",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},i.createElement("stop",{offset:"0%",stopColor:"rgba(17, 186, 250, 1)"}),i.createElement("stop",{offset:"50%",stopColor:"rgba(17, 186, 250, 0.1)"}),i.createElement("stop",{offset:"50%",stopColor:"rgba(17, 186, 250, 1)"}),i.createElement("stop",{offset:"100%",stopColor:"rgba(17, 186, 250, 0.1)"}))),i.createElement("circle",{cx:"202",cy:"202",r:"200",fill:"rgba(0, 0, 0, 0)",stroke:"url(#linear)",strokeWidth:"4"}))),i.createElement("img",{className:"img3",src:"//img.alicdn.com/tfs/TB1EBu.JgHqK1RjSZJnXXbNLpXa-914-1156.png"}),i.createElement("img",{className:"img4",src:"//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png"}),i.createElement("img",{className:"img5",src:"//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png"}))))}},67065:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var i=a(67294),s=a(95999);const n={desc:i.createElement("span",null,i.createElement(s.Z,{id:"homepage.userDesc1"},"\u8bf7\u5728")," ",i.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/seata/seata/issues/1246",style:{color:"#0054d1"}},"Wanted: who's using Seata")," ",i.createElement(s.Z,{id:"homepage.userDesc2"},"\u4e0a\u63d0\u4f9b\u4fe1\u606f\u6765\u5e2e\u52a9 Seata \u505a\u7684\u66f4\u597d\u3002")),list:["https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png","https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png","https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png","https://img.alicdn.com/imgextra/i3/O1CN01Hohqhm1JvGPE4cSD4_!!6000000001090-1-tps-436-84.gif","https://img.alicdn.com/tfs/TB1hvabw9f2gK0jSZFPXXXsopXa-174-100.png","https://img.alicdn.com/imgextra/i3/O1CN01qkkEMZ1Jr8qDmXdAa_!!6000000001081-2-tps-220-67.png","https://img.alicdn.com/imgextra/i3/O1CN01RXbaWn1SDbBfpCs1B_!!6000000002213-0-tps-640-458.jpg","https://img.alicdn.com/imgextra/i1/O1CN01Rkw4z01OPGomOisU1_!!6000000001697-2-tps-220-64.png","https://img.alicdn.com/imgextra/i3/O1CN01y0Wwc51wxnbw9FDJi_!!6000000006375-2-tps-252-84.png","https://img.alicdn.com/tfs/TB1GMQpZHY1gK0jSZTEXXXDQVXa-203-63.png","https://img.alicdn.com/tfs/TB1oHThw.Y1gK0jSZFCXXcwqXXa-214-200.png","https://img.alicdn.com/imgextra/i3/O1CN01McNkv624Z5AKVHR0h_!!6000000007404-2-tps-140-54.png","https://img.alicdn.com/tfs/TB1x0p5jxvbeK8jSZPfXXariXXa-272-83.png","https://img.alicdn.com/imgextra/i2/O1CN01M9aSuY1nQWGxoVQu9_!!6000000005084-2-tps-239-78.png","https://img.alicdn.com/imgextra/i1/O1CN01PmTFnO1gZ2K7GUpgh_!!6000000004155-2-tps-2406-747.png","https://img.alicdn.com/tfs/TB1.zqEoAL0gK0jSZFAXXcA9pXa-245-38.png","https://img.alicdn.com/tfs/TB1cgvjwYj1gK0jSZFOXXc7GpXa-1040-282.png","https://img.alicdn.com/imgextra/i3/O1CN01OioqXX1dfxSxg6DYn_!!6000000003764-2-tps-574-122.png","https://img.alicdn.com/tfs/TB1DDiCorY1gK0jSZTEXXXDQVXa-440-114.jpg","https://img.alicdn.com/tfs/TB1SXGzoxn1gK0jSZKPXXXvUXXa-426-180.jpg","https://img.alicdn.com/imgextra/i1/O1CN01qo6gfd1l7AK1LIF8t_!!6000000004771-2-tps-132-40.png","https://img.alicdn.com/tfs/TB1rCNSFxn1gK0jSZKPXXXvUXXa-172-31.png","https://img.alicdn.com/tfs/TB1Xa3bZQL0gK0jSZFtXXXQCXXa-936-93.png","https://img.alicdn.com/tfs/TB1e7Wiovb2gK0jSZK9XXaEgFXa-1028-160.jpg","https://img.alicdn.com/tfs/TB12cmCouL2gK0jSZFmXXc7iXXa-310-110.jpg","https://img.alicdn.com/tfs/TB1j0dEop67gK0jSZPfXXahhFXa-400-208.jpg","https://img.alicdn.com/imgextra/i1/O1CN01edO0ox1Nu7syhwbAy_!!6000000001629-2-tps-300-112.png","https://img.alicdn.com/imgextra/i3/O1CN01hygG6821bQLGWN8tm_!!6000000007003-2-tps-98-52.png","https://img.alicdn.com/tfs/TB1tuSyouT2gK0jSZFvXXXnFXXa-304-94.jpg","https://img.alicdn.com/imgextra/i4/O1CN01BWFT271rXAVLUYWWG_!!6000000005640-2-tps-185-40.png","https://img.alicdn.com/tfs/TB1c8iCouL2gK0jSZFmXXc7iXXa-428-102.jpg","https://img.alicdn.com/imgextra/i4/O1CN01njYJ2J1ytnNhCFWcI_!!6000000006637-2-tps-340-104.png","https://img.alicdn.com/tfs/TB1OCGioCf2gK0jSZFPXXXsopXa-500-179.jpg","https://img.alicdn.com/tfs/TB1Atu9ovzO3e4jSZFxXXaP_FXa-310-60.png","https://img.alicdn.com/tfs/TB1pfYTpRBh1e4jSZFhXXcC9VXa-151-72.png","https://img.alicdn.com/imgextra/i1/O1CN01F5wna31NJwavQ0r4w_!!6000000001550-2-tps-171-48.png","https://img.alicdn.com/tfs/TB1UTwmZFT7gK0jSZFpXXaTkpXa-201-85.png","https://img.alicdn.com/tfs/TB143R4op67gK0jSZPfXXahhFXa-148-42.png","https://img.alicdn.com/tfs/TB1iMSAopP7gK0jSZFjXXc5aXXa-398-182.jpg","https://img.alicdn.com/imgextra/i1/O1CN01b1huj51aYDwz4RqSQ_!!6000000003341-2-tps-350-51.png","https://img.alicdn.com/imgextra/i1/O1CN01SekTsn25izLZW7IKo_!!6000000007561-2-tps-270-124.png","https://img.alicdn.com/imgextra/i2/O1CN01cyUkSO20BUISGUjyw_!!6000000006811-2-tps-149-114.png","https://img.alicdn.com/tfs/TB1JvOjouT2gK0jSZFvXXXnFXXa-386-146.jpg","https://img.alicdn.com/tfs/TB1ChKFoBr0gK0jSZFnXXbRRXXa-402-166.jpg","https://img.alicdn.com/tfs/TB1bNWFoBr0gK0jSZFnXXbRRXXa-398-336.jpg","https://img.alicdn.com/tfs/TB1_D9Boxn1gK0jSZKPXXXvUXXa-580-218.jpg","https://img.alicdn.com/imgextra/i2/O1CN01u3zEdz1Puhc2jO2kT_!!6000000001901-2-tps-114-43.png","https://img.alicdn.com/tfs/TB1_miroq61gK0jSZFlXXXDKFXa-283-70.png","https://img.alicdn.com/tfs/TB1HD.oZUY1gK0jSZFMXXaWcVXa-300-300.png","https://img.alicdn.com/tfs/TB1CaSroAT2gK0jSZPcXXcKkpXa-492-176.jpg","https://img.alicdn.com/imgextra/i3/O1CN01lp3KWN1uGd2y6CEAx_!!6000000006010-2-tps-1383-1023.png","https://img.alicdn.com/tfs/TB1JNSqouH2gK0jSZFEXXcqMpXa-450-182.jpg","https://img.alicdn.com/imgextra/i1/O1CN01MMilH71k2IUuZsp45_!!6000000004625-2-tps-128-80.png","https://img.alicdn.com/tfs/TB1NV1uouH2gK0jSZJnXXaT1FXa-462-172.jpg","https://img.alicdn.com/imgextra/i2/O1CN01ZTwkxR1VubDVHuxii_!!6000000002713-2-tps-72-50.png","https://img.alicdn.com/tfs/TB1CCavoBr0gK0jSZFnXXbRRXXa-240-100.png","https://img.alicdn.com/tfs/TB1IIivoxD1gK0jSZFyXXciOVXa-200-130.png","https://img.alicdn.com/tfs/TB1kQThrFY7gK0jSZKzXXaikpXa-220-110.jpg","https://img.alicdn.com/tfs/TB15r7dZHY1gK0jSZTEXXXDQVXa-234-233.png","https://img.alicdn.com/tfs/TB1LK6jrUT1gK0jSZFrXXcNCXXa-180-54.png","https://img.alicdn.com/tfs/TB1SEzM0eL2gK0jSZFmXXc7iXXa-154-45.png","https://img.alicdn.com/imgextra/i3/O1CN01g9LjBW1YCa03USGaO_!!6000000003023-2-tps-158-29.png","https://img.alicdn.com/tfs/TB1VGpTFET1gK0jSZFrXXcNCXXa-193-55.png","https://img.alicdn.com/tfs/TB19Y8XFEY1gK0jSZFMXXaWcVXa-160-60.png","https://img.alicdn.com/tfs/TB1V1YlrRv0gK0jSZKbXXbK2FXa-514-160.png","https://img.alicdn.com/tfs/TB1oC2prND1gK0jSZFyXXciOVXa-246-124.jpg","https://img.alicdn.com/tfs/TB1defkrLb2gK0jSZK9XXaEgFXa-434-146.jpg","https://img.alicdn.com/tfs/TB1uIHmrHr1gK0jSZR0XXbP8XXa-1024-568.png","https://img.alicdn.com/tfs/TB1ERHlrUY1gK0jSZFMXXaWcVXa-120-60.png","https://img.alicdn.com/tfs/TB1LT2lrNn1gK0jSZKPXXXvUXXa-300-300.jpg","https://img.alicdn.com/tfs/TB1s2LprUY1gK0jSZFCXXcwqXXa-618-148.jpg","https://img.alicdn.com/tfs/TB1qtGew7T2gK0jSZPcXXcKkpXa-294-104.png","https://img.alicdn.com/imgextra/i1/O1CN0191WwyY1d8WZaQZcjA_!!6000000003691-2-tps-200-200.png","https://img.alicdn.com/tfs/TB1KVJ9wWL7gK0jSZFBXXXZZpXa-145-59.png","https://img.alicdn.com/tfs/TB1vWafw7T2gK0jSZFkXXcIQFXa-301-100.png","https://img.alicdn.com/imgextra/i2/O1CN01Nop2ji1glrR8j0u21_!!6000000004183-2-tps-120-50.png","https://img.alicdn.com/tfs/TB1hC5cwVY7gK0jSZKzXXaikpXa-318-134.png","https://img.alicdn.com/tfs/TB1VuPhw4D1gK0jSZFyXXciOVXa-294-124.png","https://img.alicdn.com/tfs/TB1FFX6FqL7gK0jSZFBXXXZZpXa-288-101.png","https://img.alicdn.com/tfs/TB1gkXaFrr1gK0jSZR0XXbP8XXa-187-57.png","https://img.alicdn.com/imgextra/i3/O1CN01svojxj1LuvK3hgQ5Y_!!6000000001360-2-tps-133-48.png","https://img.alicdn.com/tfs/TB1oJKiw4D1gK0jSZFyXXciOVXa-2053-377.png","https://img.alicdn.com/tfs/TB1eKFXFEz1gK0jSZLeXXb9kVXa-163-54.png","https://img.alicdn.com/tfs/TB1Qcd0p79l0K4jSZFKXXXFjpXa-372-125.png","https://img.alicdn.com/tfs/TB1UKocmPMZ7e4jSZFOXXX7epXa-234-82.png","https://img.alicdn.com/tfs/TB1eswAZFP7gK0jSZFjXXc5aXXa-800-800.png","https://img.alicdn.com/tfs/TB1IXqgwYj1gK0jSZFuXXcrHpXa-197-58.png","https://img.alicdn.com/tfs/TB1KmosZNv1gK0jSZFFXXb0sXXa-247-61.png","https://img.alicdn.com/imgextra/i3/O1CN018aBoRi1ZOm8uiOJwA_!!6000000003185-0-tps-1659-569.jpg","https://img.alicdn.com/tfs/TB1bH5fw7L0gK0jSZFAXXcA9pXa-442-39.png","https://img.alicdn.com/tfs/TB1xAJUFy_1gK0jSZFqXXcpaXXa-320-80.jpg","https://img.alicdn.com/imgextra/i1/O1CN01bQlU6F1r8R7GYzQxf_!!6000000005586-2-tps-318-60.png","https://img.alicdn.com/tfs/TB1ICJfFuH2gK0jSZJnXXaT1FXa-654-232.png","https://img.alicdn.com/tfs/TB1rxndw4n1gK0jSZKPXXXvUXXa-150-68.png","https://img.alicdn.com/imgextra/i4/O1CN01jEUKEJ1WS28EnlGRb_!!6000000002786-2-tps-240-60.png","https://img.alicdn.com/tfs/TB1m0FcFuH2gK0jSZFEXXcqMpXa-139-48.png","https://img.alicdn.com/imgextra/i1/O1CN01XJFoMP1qIDxrcCFC8_!!6000000005472-2-tps-120-46.png","https://img.alicdn.com/tfs/TB14LhHmMgP7K4jSZFqXXamhVXa-300-135.png","https://img.alicdn.com/tfs/TB1uUtaFuT2gK0jSZFvXXXnFXXa-370-45.jpg","https://img.alicdn.com/imgextra/i3/O1CN018AiGbE1PZdN8Vu4Fd_!!6000000001855-2-tps-630-220.png","https://img.alicdn.com/tfs/TB1iqo_FaL7gK0jSZFBXXXZZpXa-361-54.jpg","https://img.alicdn.com/imgextra/i1/O1CN01fkwike1yZdx8ZBeP6_!!6000000006593-2-tps-460-136.png","https://img.alicdn.com/imgextra/i4/O1CN01onGhwm1j2vQTRjmx8_!!6000000004491-2-tps-100-48.png","https://img.alicdn.com/imgextra/i3/O1CN014QzjZ31l7AK1LINSu_!!6000000004771-2-tps-1073-175.png","https://img.alicdn.com/imgextra/i3/O1CN01TKiMMC1VQpSIe3n7i_!!6000000002648-2-tps-931-865.png","https://img.alicdn.com/tfs/TB1SxJWFEY1gK0jSZFCXXcwqXXa-185-65.png","https://img.alicdn.com/imgextra/i1/O1CN01tiLZ0d1dvWx2Dwl4N_!!6000000003798-2-tps-189-45.png","https://img.alicdn.com/imgextra/i3/O1CN012jqfoI22wmQR2jiiY_!!6000000007185-0-tps-200-93.jpg","https://img.alicdn.com/tfs/TB1rhNRFAL0gK0jSZFtXXXQCXXa-321-96.png","https://img.alicdn.com/imgextra/i4/O1CN012swbCB1HU7hgxsF8r_!!6000000000760-0-tps-121-121.jpg","https://img.alicdn.com/tfs/TB1zuAzZKL2gK0jSZFmXXc7iXXa-691-263.png","https://img.alicdn.com/tfs/TB18TNRFEz1gK0jSZLeXXb9kVXa-244-60.jpg","https://img.alicdn.com/tfs/TB1i1JTFCf2gK0jSZFPXXXsopXa-151-60.png","https://img.alicdn.com/tfs/TB1ztXXFpY7gK0jSZKzXXaikpXa-179-60.png","https://img.alicdn.com/tfs/TB1SkJ9FuT2gK0jSZFvXXXnFXXa-266-56.png","https://img.alicdn.com/tfs/TB1AzbWgZKfxu4jSZPfXXb3dXXa-1117-382.png","https://img.alicdn.com/tfs/TB1HtFZFq61gK0jSZFlXXXDKFXa-1375-214.png","https://img.alicdn.com/tfs/TB1nax.FuH2gK0jSZFEXXcqMpXa-336-154.png","https://img.alicdn.com/tfs/TB1nS7IZNv1gK0jSZFFXXb0sXXa-716-193.png","https://img.alicdn.com/tfs/TB13aaKpA9l0K4jSZFKXXXFjpXa-300-300.png","https://img.alicdn.com/tfs/TB1To3amPMZ7e4jSZFOXXX7epXa-1228-500.png","https://img.alicdn.com/tfs/TB1CZuKpA9l0K4jSZFKXXXFjpXa-283-92.png","https://img.alicdn.com/tfs/TB1E4slZFT7gK0jSZFpXXaTkpXa-268-268.png","https://img.alicdn.com/tfs/TB1.sIyZKL2gK0jSZFmXXc7iXXa-121-121.png","https://img.alicdn.com/tfs/TB1aUUcZHY1gK0jSZTEXXXDQVXa-246-72.png","https://img.alicdn.com/tfs/TB1v3.gZLb2gK0jSZK9XXaEgFXa-240-240.png","https://img.alicdn.com/tfs/TB1VHkrZHr1gK0jSZFDXXb9yVXa-248-80.png","https://img.alicdn.com/tfs/TB1kGElZUH1gK0jSZSyXXXtlpXa-126-48.png","https://img.alicdn.com/tfs/TB1kIIqZUY1gK0jSZFMXXaWcVXa-90-80.png","https://img.alicdn.com/tfs/TB1CawkZND1gK0jSZFsXXbldVXa-112-112.png","https://img.alicdn.com/tfs/TB1fxZqZQL0gK0jSZFAXXcA9pXa-300-300.png","https://img.alicdn.com/tfs/TB1q3UiZKL2gK0jSZPhXXahvXXa-802-271.png","https://img.alicdn.com/tfs/TB1uf7bZQL0gK0jSZFtXXXQCXXa-303-65.png","https://img.alicdn.com/tfs/TB1WMgmZUY1gK0jSZFCXXcwqXXa-189-57.png","https://img.alicdn.com/tfs/TB1gnllpnM11u4jSZPxXXahcXXa-150-60.png","https://img.alicdn.com/tfs/TB1NJmLpA9l0K4jSZFKXXXFjpXa-195-60.png","https://img.alicdn.com/tfs/TB1jfCLpA9l0K4jSZFKXXXFjpXa-514-220.png","https://img.alicdn.com/tfs/TB1vxJ.ZVT7gK0jSZFpXXaTkpXa-309-51.png","https://img.alicdn.com/tfs/TB1v5eiZ.T1gK0jSZFrXXcNCXXa-500-41.png","https://img.alicdn.com/imgextra/i2/O1CN01QPEPnx1zaOC9n4QXE_!!6000000006730-0-tps-781-100.jpg","https://img.alicdn.com/imgextra/i3/O1CN018XKqWK1VPSHxBxLHR_!!6000000002645-2-tps-295-79.png","https://img.alicdn.com/imgextra/i1/O1CN01UkbkeF1PCjajbslRf_!!6000000001805-0-tps-200-200.jpg","https://img.alicdn.com/imgextra/i2/O1CN01TuPFhT288krOXRXQC_!!6000000007888-0-tps-200-200.jpg","https://img.alicdn.com/imgextra/i2/O1CN01tUg4Nw1mULzRSQr4B_!!6000000004957-2-tps-447-346.png","https://img.alicdn.com/imgextra/i2/O1CN01sWwoq21VPSHmzCqh7_!!6000000002645-2-tps-200-100.png","https://img.alicdn.com/imgextra/i1/O1CN01obgBun1PjFiKUoWGr_!!6000000001876-2-tps-192-192.png","https://img.alicdn.com/imgextra/i2/O1CN01i8iiCk29QuAitxiJq_!!6000000008063-0-tps-378-123.jpg","https://img.alicdn.com/imgextra/i2/O1CN01LBYXi6288krJ6Axq8_!!6000000007888-2-tps-1206-158.png","https://img.alicdn.com/imgextra/i2/O1CN01FN4K3I1Sq4SQVsDxo_!!6000000002297-2-tps-414-95.png","https://img.alicdn.com/imgextra/i2/O1CN0130Bp8H1STd65Fnxn0_!!6000000002248-2-tps-677-172.png","https://img.alicdn.com/imgextra/i1/O1CN0186ESVW1hhZO7Otx4X_!!6000000004309-2-tps-376-108.png","https://img.alicdn.com/imgextra/i2/O1CN011hLbRH1fTiAi6Lq5Z_!!6000000004008-0-tps-283-283.jpg","https://img.alicdn.com/imgextra/i3/O1CN01cJQsV91Fz9LeJEaL1_!!6000000000557-0-tps-339-189.jpg","https://img.alicdn.com/imgextra/i4/O1CN01KvsEOP21a3CUzDllu_!!6000000007000-2-tps-1920-750.png","https://img.alicdn.com/imgextra/i1/O1CN01Erdiwd1RrcDt2bqKl_!!6000000002165-0-tps-1080-1080.jpg","https://img.alicdn.com/imgextra/i4/O1CN01Rc0vU61sSQ3jvR0rw_!!6000000005765-2-tps-1076-228.png"],titleBefore:(0,s.I)({id:"homepage.userTitleBefore",message:"\u8c01\u5728\u4f7f\u7528"}),titleAfter:(0,s.I)({id:"homepage.userTitleAfter",message:" Seata"})},c=()=>i.createElement("section",{className:"users-section"},i.createElement("h3",null,n.titleBefore,i.createElement("span",null,n.titleAfter)),i.createElement("p",null,n.desc),i.createElement("div",{className:"users"},n.list.map(((t,e)=>i.createElement("div",{className:"user-item",key:e},i.createElement("img",{src:t}))))))},69754:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>p});var i=a(67294),s=a(87340),n=a(68726),c=a(78413),m=a(37954),g=a(97685),l=a(67065),r=a(7255),o=a(95999);function p(){const t=i.useRef(null);return i.createElement(s.Z,{title:"Seata",description:(0,o.I)({id:"homepage.briefIntroduction",message:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"})},i.createElement("div",{ref:t,className:"home-page"},i.createElement(n.default,null),i.createElement(c.default,null),i.createElement(m.default,null),i.createElement(g.default,null),i.createElement(l.default,null),i.createElement(r.$_,{logo:"//img.alicdn.com/tfs/TB1dGrSwVT7gK0jSZFpXXaTkpXa-4802-1285.png"})))}},94184:(t,e)=>{var a;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var n=typeof a;if("string"===n||"number"===n)t.push(a);else if(Array.isArray(a)){if(a.length){var c=s.apply(null,a);c&&t.push(c)}}else if("object"===n){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){t.push(a.toString());continue}for(var m in a)i.call(a,m)&&a[m]&&t.push(m)}}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):void 0===(a=function(){return s}.apply(e,[]))||(t.exports=a)}()}}]);