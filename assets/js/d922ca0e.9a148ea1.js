"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[3849],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(g,o(o({ref:e},c),{},{components:a})):n.createElement(g,o({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[p]="string"==typeof t?t:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33034:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const s={title:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",sidebar_position:13,tags:["solana-cook-book","test"]},i="\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",u={unversionedId:"guides/feature-parity-testing",id:"guides/feature-parity-testing",title:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",description:"\u5f53\u6d4b\u8bd5\u7a0b\u5e8f\u65f6\uff0c\u786e\u4fdd\u5b83\u5728\u5404\u4e2a\u96c6\u7fa4\u4e2d\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u8fd0\u884c\u5bf9\u4e8e\u786e\u4fdd\u8d28\u91cf\u548c\u4ea7\u751f\u9884\u671f\u7ed3\u679c\u975e\u5e38\u91cd\u8981\u3002",source:"@site/docs/cookbook-zh/guides/feature-parity-testing.md",sourceDirName:"guides",slug:"/guides/feature-parity-testing",permalink:"/cookbook-zh/guides/feature-parity-testing",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/guides/feature-parity-testing.md",tags:[{label:"solana-cook-book",permalink:"/cookbook-zh/tags/solana-cook-book"},{label:"test",permalink:"/cookbook-zh/tags/test"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1696133130,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:13,frontMatter:{title:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",sidebar_position:13,tags:["solana-cook-book","test"]},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u8bd5 Solana \u7a0b\u5e8f",permalink:"/cookbook-zh/guides/debugging-solana-programs"},next:{title:"\u7248\u672c\u5316\u4ea4\u6613 (Versioned Transactions)",permalink:"/cookbook-zh/guides/versioned-transactions"}},c={},p=[{value:"\u7efc\u8ff0",id:"\u7efc\u8ff0",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u529f\u80fd\u72b6\u6001",id:"\u529f\u80fd\u72b6\u6001",level:2},{value:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",id:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5-1",level:2},{value:"\u7b80\u5355\u6f14\u793a",id:"\u7b80\u5355\u6f14\u793a",level:2},{value:"\u6240\u6709\u529f\u80fd\u5df2\u6fc0\u6d3b",id:"\u6240\u6709\u529f\u80fd\u5df2\u6fc0\u6d3b",level:3},{value:"\u9009\u62e9\u6027\u529f\u80fd\u5df2\u505c\u7528",id:"\u9009\u62e9\u6027\u529f\u80fd\u5df2\u505c\u7528",level:3},{value:"\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5",id:"\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5",level:2},{value:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u8fdb\u884c\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5",id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u8fdb\u884c\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5",level:2},{value:"\u8d44\u6599",id:"\u8d44\u6599",level:2}],d={toc:p},m="wrapper";function g(t){let{components:e,...s}=t;return(0,r.kt)(m,(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5"},"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5f53\u6d4b\u8bd5\u7a0b\u5e8f\u65f6\uff0c\u786e\u4fdd\u5b83\u5728\u5404\u4e2a\u96c6\u7fa4\u4e2d\u4ee5\u76f8\u540c\u7684\u65b9\u5f0f\u8fd0\u884c\u5bf9\u4e8e\u786e\u4fdd\u8d28\u91cf\u548c\u4ea7\u751f\u9884\u671f\u7ed3\u679c\u975e\u5e38\u91cd\u8981\u3002"),(0,r.kt)("h2",{id:"\u7efc\u8ff0"},"\u7efc\u8ff0"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"tip \u4e8b\u5b9e\u8868")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd\u662f\u4e3a Solana \u9a8c\u8bc1\u8282\u70b9\u5f15\u5165\u7684\u80fd\u529b\uff0c\u9700\u8981\u6fc0\u6d3b\u624d\u80fd\u4f7f\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u67d0\u4e2a\u96c6\u7fa4\uff08\u4f8b\u5982\u6d4b\u8bd5\u7f51\uff09\u4e2d\u53ef\u80fd\u6fc0\u6d3b\u4e86\u67d0\u4e9b\u7279\u6027\uff0c\u800c\u53e6\u4e00\u4e2a\u96c6\u7fa4\uff08\u4f8b\u5982\u4e3b\u7f51\u6d4b\u8bd5\u7f51\uff09\u5219\u672a\u6fc0\u6d3b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7136\u800c\uff0c\u5728\u672c\u5730\u8fd0\u884c\u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"solana-test-validator"),"\u65f6\uff0c\u4f60\u7684 Solana \u7248\u672c\u4e2d\u7684\u6240\u6709\u53ef\u7528\u529f\u80fd\u90fd\u4f1a\u81ea\u52a8\u6fc0\u6d3b\u3002\u7ed3\u679c\u662f\uff0c\u5728\u672c\u5730\u6d4b\u8bd5\u65f6\uff0c\u7279\u6027\u548c\u6d4b\u8bd5\u7ed3\u679c\u53ef\u80fd\u4e0e\u5728\u4e0d\u540c\u96c6\u7fa4\u4e2d\u90e8\u7f72\u548c\u8fd0\u884c\u65f6\u4e0d\u540c\uff01"))),(0,r.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u5305\u542b\u4e09\uff083\uff09\u6761\u6307\u4ee4\u7684\u4ea4\u6613\uff0c\u6bcf\u4e2a\u6307\u4ee4\u5927\u7ea6\u6d88\u8017 100,000 \u8ba1\u7b97\u5355\u5143\uff08Compute Units\uff0cCU\uff09\u3002\u5728\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"Solana 1.8.x")," \u7248\u672c\u65f6\uff0c\u4f60\u4f1a\u89c2\u5bdf\u5230\u6307\u4ee4\u7684\u8ba1\u7b97\u5355\u5143\u6d88\u8017\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:null},"Starting CU"),(0,r.kt)("th",{parentName:"tr",align:null},"Execution"),(0,r.kt)("th",{parentName:"tr",align:null},"Remaining CU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"200_000"),(0,r.kt)("td",{parentName:"tr",align:null},"-100_000"),(0,r.kt)("td",{parentName:"tr",align:null},"100_000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"200_000"),(0,r.kt)("td",{parentName:"tr",align:null},"-100_000"),(0,r.kt)("td",{parentName:"tr",align:null},"100_000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"200_000"),(0,r.kt)("td",{parentName:"tr",align:null},"-100_000"),(0,r.kt)("td",{parentName:"tr",align:null},"100_000")))),(0,r.kt)("p",null,"\u5728 Solana 1.9.2 \u4e2d\u5f15\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a\u201ctransaction wide compute cap\u201d\u7684\u529f\u80fd\uff0c\u5176\u4e2d\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u4ea4\u6613\u5177\u6709 200,000 \u8ba1\u7b97\u5355\u5143\uff08CU\uff09\u7684\u9884\u7b97\uff0c\u5c01\u88c5\u7684\u6307\u4ee4\u4ece\u8be5\u4ea4\u6613\u9884\u7b97\u4e2d\u6d88\u8017\u3002\u8fd0\u884c\u4e0a\u8ff0\u76f8\u540c\u7684\u4ea4\u6613\u5c06\u4f1a\u6709\u975e\u5e38\u4e0d\u540c\u7684\u884c\u4e3a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:null},"Starting CU"),(0,r.kt)("th",{parentName:"tr",align:null},"Execution"),(0,r.kt)("th",{parentName:"tr",align:null},"Remaining CU"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"200_000"),(0,r.kt)("td",{parentName:"tr",align:null},"-100_000"),(0,r.kt)("td",{parentName:"tr",align:null},"100_000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"100_000"),(0,r.kt)("td",{parentName:"tr",align:null},"-100_000"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"FAIL!!!"),(0,r.kt)("td",{parentName:"tr",align:null},"FAIL!!!")))),(0,r.kt)("p",null,"\u5929\u54ea\uff01\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u8fd9\u4e00\u70b9\uff0c\u4f60\u53ef\u80fd\u4f1a\u611f\u5230\u6cae\u4e27\uff0c\u56e0\u4e3a\u4f60\u7684\u6307\u4ee4\u884c\u4e3a\u6ca1\u6709\u4efb\u4f55\u53d8\u5316\u4f1a\u5bfc\u81f4\u8fd9\u79cd\u60c5\u51b5\u3002\u5728\u5f00\u53d1\u7f51\u7edc\u4e0a\u5b83\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f46\u5728\u672c\u5730\u5374\u5931\u8d25\u4e86\uff1f\uff01\uff1f"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u589e\u52a0\u6574\u4f53\u4ea4\u6613\u9884\u7b97\uff0c\u6bd4\u5982\u5c06\u5176\u589e\u52a0\u5230 300,000 \u8ba1\u7b97\u5355\u5143\uff08CU\uff09\uff0c\u6765\u4fdd\u6301\u4f60\u7684\u7406\u667a\uff0c\u4f46\u8fd9\u4e5f\u5c55\u793a\u4e86\u4e3a\u4ec0\u4e48\u4ee5\u529f\u80fd\u76f8\u7b49\u7684\u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u662f\u907f\u514d\u4efb\u4f55\u6df7\u6dc6\u7684\u79ef\u6781\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u529f\u80fd\u72b6\u6001"},"\u529f\u80fd\u72b6\u6001"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"solana feature status"),"\u547d\u4ee4\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u68c0\u67e5\u7279\u5b9a\u96c6\u7fa4\u542f\u7528\u4e86\u54ea\u4e9b\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana feature status -ud   // Displays by feature status for devnet\nsolana feature status -ut   // Displays for testnet\nsolana feature status -um   // Displays for mainnet-beta\nsolana feature status -ul   // Displays for local, requires running solana-test-validator\n")),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7c7b\u4f3c\u7684\u5de5\u5177\uff0c\u50cf ",(0,r.kt)("a",{parentName:"p",href:"#resources"},"scfsd"),"\uff0c\u89c2\u5bdf\u6240\u6709\u96c6\u7fa4\u4e0a\u7684\u529f\u80fd\u72b6\u6001\u3002\u8be5\u5de5\u5177\u4f1a\u663e\u793a\u5982\u4e0b\u7684\u90e8\u5206\u5c4f\u5e55\u5185\u5bb9\uff0c\u5e76\u4e14\u4e0d\u9700\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u8fd0\u884c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(87294).Z,width:"3098",height:"1506"})),(0,r.kt)("h2",{id:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5-1"},"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u6b63\u5982\u524d\u9762\u63d0\u5230\u7684\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"solana-test-validator")," \u4f1a\u81ea\u52a8\u6fc0\u6d3b\u6240\u6709\u529f\u80fd\u3002\u6240\u4ee5\u56de\u7b54\u95ee\u9898\u201c\u5982\u4f55\u5728\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u4e2d\u4e0e devnet\u3001testnet \u6216\u8005 mainnet-beta \u4fdd\u6301\u4e00\u81f4\uff1f\u201d\u7684\u89e3\u51b3\u65b9\u6848\u662f\uff1aSolana 1.9.6 \u6dfb\u52a0\u4e86 PR \u6765\u5141\u8bb8\u7981\u7528\u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator --deactivate-feature <FEATURE_PUBKEY> ...\n")),(0,r.kt)("h2",{id:"\u7b80\u5355\u6f14\u793a"},"\u7b80\u5355\u6f14\u793a"),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u7a0b\u5e8f\uff0c\u5728\u5176\u5165\u53e3\u70b9\u4e2d\u8bb0\u5f55\u63a5\u6536\u5230\u7684\u6570\u636e\u3002\u4f60\u6b63\u5728\u6d4b\u8bd5\u4e00\u4e2a\u5305\u542b\u4e24\uff082\uff09\u4e2a\u6307\u4ee4\u7684\u4e8b\u52a1\uff0c\u7528\u4e8e\u6267\u884c\u4f60\u7684\u7a0b\u5e8f\u3002"),(0,r.kt)("h3",{id:"\u6240\u6709\u529f\u80fd\u5df2\u6fc0\u6d3b"},"\u6240\u6709\u529f\u80fd\u5df2\u6fc0\u6d3b"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f60\u5728\u4e00\u4e2a\u7ec8\u7aef\u4e2d\u542f\u52a8\u6d4b\u8bd5\u9a8c\u8bc1\u8282\u70b9\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana config set -ul\nsolana-test-validator -l ./ledger --bpf-program ADDRESS target/deploy/PROGNAME.so --reset`\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728\u53e6\u4e00\u4e2a\u7ec8\u7aef\u4e2d\u542f\u52a8\u65e5\u5fd7\u6d41\u5904\u7406\u5668\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana logs\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u7136\u540e\u8fd0\u884c\u4f60\u7684\u4e8b\u52a1\u3002\u4f60\u4f1a\u5728\u65e5\u5fd7\u7ec8\u7aef\u4e2d\u770b\u5230\u7c7b\u4f3c\u7684\u8f93\u51fa\uff08\u4e3a\u4e86\u6e05\u6670\u8d77\u89c1\u8fdb\u884c\u4e86\u7f16\u8f91\uff09\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Program PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc invoke [1]\nProgram log: process_instruction: PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc: 0 accounts, data=[0]\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc consumed 12843 of 200000 compute units\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc success\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc invoke [1]\nProgram log: process_instruction: PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc: 0 accounts, data=[1]\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc consumed 12843 of 187157 compute units\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc success[\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u7684\u529f\u80fd\u201c\u4e8b\u52a1\u6574\u4f53\u8ba1\u7b97\u5bb9\u91cf\u201d\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u81ea\u52a8\u6fc0\u6d3b\u7684\uff0c\u6211\u4eec\u89c2\u5bdf\u5230\u6bcf\u4e2a\u6307\u4ee4\u4ece\u8d77\u59cb\u4e8b\u52a1\u9884\u7b97\u7684 200,000 CU \u4e2d\u6d88\u8017 CU\u3002"),(0,r.kt)("h3",{id:"\u9009\u62e9\u6027\u529f\u80fd\u5df2\u505c\u7528"},"\u9009\u62e9\u6027\u529f\u80fd\u5df2\u505c\u7528"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u8fd9\u6b21\u8fd0\u884c\u4e2d\uff0c\u6211\u4eec\u5e0c\u671b\u4f7f CU \u9884\u7b97\u7684\u884c\u4e3a\u4e0e devnet \u4e2d\u8fd0\u884c\u7684\u884c\u4e3a\u4fdd\u6301\u4e00\u81f4\u3002\u4f7f\u7528 Feature Status \u4e2d\u63cf\u8ff0\u7684\u5de5\u5177\uff0c\u6211\u4eec\u53ef\u4ee5\u627e\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"transaction wide compute cap"),"\u7684\u516c\u94a5\uff0c\u5e76\u5728\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u542f\u52a8\u65f6\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"--deactivate-feature")," \u53c2\u6570\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator -l ./ledger --deactivate-feature 5ekBxc8itEnPv4NzGJtr8BVVQLNMQuLMNQQj7pHoLNZ9 --bpf-program target/deploy/PROGNAME.so --reset`\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5728\u65e5\u5fd7\u4e2d\u770b\u5230\u6211\u4eec\u7684\u6307\u4ee4\u73b0\u5728\u62e5\u6709\u81ea\u5df1\u7684 200,000 CU \u9884\u7b97\uff08\u4e3a\u4e86\u6e05\u6670\u8d77\u89c1\u8fdb\u884c\u4e86\u7f16\u8f91\uff09\uff0c\u8fd9\u76ee\u524d\u662f\u6240\u6709\u4e0a\u6e38\u96c6\u7fa4\u7684\u72b6\u6001\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Program PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc invoke [1]\nProgram log: process_instruction: PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc: 0 accounts, data=[0]\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc consumed 12843 of 200000 compute units\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc success\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc invoke [1]\nProgram log: process_instruction: PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc: 0 accounts, data=[0]\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc consumed 12843 of 200000 compute units\nProgram PWDnx8LkjJUn9bAVzG6Fp6BuvB41x7DkBZdo9YLMGcc success\n")),(0,r.kt)("h2",{id:"\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5"},"\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bc6\u522b\u5c1a\u672a\u6fc0\u6d3b\u7684\u6bcf\u4e2a\u529f\u80fd\uff0c\u5e76\u5728\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u65f6\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"--deactivate-feature <FEATURE_PUBKEY>"),"\u6765\u4e0e\u7279\u5b9a\u96c6\u7fa4\u5b8c\u5168\u4fdd\u6301\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator --deactivate-feature PUBKEY_1 --deactivate-feature PUBKEY_2 ...\n")),(0,r.kt)("p",null,"\u6216\u8005\uff0c",(0,r.kt)("a",{parentName:"p",href:"#resources"},"scfsd")," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u547d\u4ee4\u5f00\u5173\uff0c\u7528\u4e8e\u8f93\u51fa\u96c6\u7fa4\u7684\u5b8c\u6574\u505c\u7528\u529f\u80fd\u96c6\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u7684\u542f\u52a8\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"solana-test-validator -l ./.ledger $(scfsd -c devnet -k -t)\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5728\u9a8c\u8bc1\u5668\u8fd0\u884c\u65f6\u6253\u5f00\u53e6\u4e00\u4e2a\u7ec8\u7aef\uff0c\u5e76\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"solana feature status"),"\u547d\u4ee4\uff0c\u4f60\u4f1a\u770b\u5230\u4e00\u4e9b\u5728 devnet \u4e2d\u505c\u7528\u7684\u529f\u80fd\u4e5f\u88ab\u505c\u7528\u4e86\u3002"),(0,r.kt)("h2",{id:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u8fdb\u884c\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5"},"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u8fdb\u884c\u5168\u9762\u76f8\u7b49\u6027\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u90a3\u4e9b\u5728\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u63a7\u5236\u8fd0\u884c\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u7684\u4eba\u6765\u8bf4\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"TestValidatorGenesis"),"\u6765\u4fee\u6539\u6d4b\u8bd5\u9a8c\u8bc1\u5668\u7684\u6fc0\u6d3b/\u505c\u7528\u529f\u80fd\u3002\u5728 Solana 1.9.6 \u4e2d\uff0c\u9a8c\u8bc1\u5668\u6784\u5efa\u5668\u6dfb\u52a0\u4e86\u4e00\u4e2a\u51fd\u6570\u6765\u652f\u6301\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5728\u60a8\u7684\u7a0b\u5e8f\u6587\u4ef6\u5939\u7684\u6839\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"tests"),"\u7684\u65b0\u6587\u4ef6\u5939\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"parity_test.rs"),"\u6587\u4ef6\u3002\u4ee5\u4e0b\u662f\u6bcf\u4e2a\u6d4b\u8bd5\u4f7f\u7528\u7684\u57fa\u672c\u51fd\u6570\uff08\u6a21\u677f\u51fd\u6570\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Setup the test validator passing features\n/// you want to deactivate before running transactions\npub fn setup_validator(\n    invalidate_features: Vec<Pubkey>,\n) -> Result<(TestValidator, Keypair), Box<dyn error::Error>> {\n    // Extend environment variable to include our program location\n    std::env::set_var("BPF_OUT_DIR", PROG_PATH);\n    // Instantiate the test validator\n    let mut test_validator = TestValidatorGenesis::default();\n    // Once instantiated, TestValidatorGenesis configuration functions follow\n    // a builder pattern enabling chaining of settings function calls\n    let (test_validator, kp) = test_validator\n        // Set the ledger path and name\n        // maps to `solana-test-validator --ledger <DIR>`\n        .ledger_path(LEDGER_PATH)\n        // Load our program. Ignored if reusing ledger\n        // maps to `solana-test-validator --bpf-program <ADDRESS_OR_PATH BPF_PROGRAM.SO>`\n        .add_program(PROG_NAME, PROG_KEY)\n        // Identify features to deactivate. Ignored if reusing ledger\n        // maps to `solana-test-validator --deactivate-feature <FEATURE_PUBKEY>`\n        .deactivate_features(&invalidate_features)\n        // Start the test validator\n        .start();\n    Ok((test_validator, kp))\n}\n\n/// Convenience function to remove existing ledger before TestValidatorGenesis setup\n/// maps to `solana-test-validator ... --reset`\npub fn clean_ledger_setup_validator(\n    invalidate_features: Vec<Pubkey>,\n) -> Result<(TestValidator, Keypair), Box<dyn error::Error>> {\n    if PathBuf::from_str(LEDGER_PATH).unwrap().exists() {\n        std::fs::remove_dir_all(LEDGER_PATH).unwrap();\n    }\n    setup_validator(invalidate_features)\n}\n\n/// Submits a transaction with programs instruction\n/// Boiler plate\nfn submit_transaction(\n    rpc_client: &RpcClient,\n    wallet_signer: &dyn Signer,\n    instructions: Vec<Instruction>,\n) -> Result<Signature, Box<dyn std::error::Error>> {\n    let mut transaction =\n        Transaction::new_unsigned(Message::new(&instructions, Some(&wallet_signer.pubkey())));\n    let recent_blockhash = rpc_client\n        .get_latest_blockhash()\n        .map_err(|err| format!("error: unable to get recent blockhash: {}", err))?;\n    transaction\n        .try_sign(&vec![wallet_signer], recent_blockhash)\n        .map_err(|err| format!("error: failed to sign transaction: {}", err))?;\n    let signature = rpc_client\n        .send_and_confirm_transaction(&transaction)\n        .map_err(|err| format!("error: send transaction: {}", err))?;\n    Ok(signature)\n}\n')),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"mod test {...}"),"\u7684\u4e3b\u4f53\u4e2d\u6dfb\u52a0\u6d4b\u8bd5\u51fd\u6570\uff0c\u6765\u5c55\u793a\u9ed8\u8ba4\u9a8c\u8bc1\u5668\u7684\u8bbe\u7f6e\uff08\u6240\u6709\u529f\u80fd\u90fd\u542f\u7528\uff09\uff0c\u7136\u540e\u7981\u7528\u4e8b\u52a1\u5e7f\u57df\u8ba1\u7b97\u9650\u5236\uff0c\u5c31\u50cf\u4e4b\u524d\u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"solana-test-validator"),"\u7684\u793a\u4f8b\u4e00\u6837\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"All feature test",label:"All feature test",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[test]\nfn test_base_pass() {\n    // Run with all features activated (default for TestValidatorGenesis)\n    let inv_feat = vec![];\n    // Start validator with clean (new) ledger\n    let (test_validator, main_payer) = clean_ledger_setup_validator(inv_feat).unwrap();\n    // Get the RpcClient\n    let connection = test_validator.get_rpc_client();\n    // Capture our programs log statements\n    solana_logger::setup_with_default("solana_runtime::message=debug");\n\n    // This example doesn\'t require sending any accounts to program\n    let accounts = &[];\n    // Build instruction array and submit transaction\n    let txn = submit_transaction(\n        &connection,\n        &main_payer,\n        // Add two (2) instructions to transaction to demonstrate\n        // that each instruction CU draws down from default Transaction CU (200_000)\n        // Replace with instructions that make sense for your program\n        [\n            Instruction::new_with_borsh(PROG_KEY, &0u8, accounts.to_vec()),\n            Instruction::new_with_borsh(PROG_KEY, &1u8, accounts.to_vec()),\n        ]\n        .to_vec(),\n    );\n    assert!(txn.is_ok());\n}\n'))),(0,r.kt)(o.Z,{value:"Disable tx CU test",label:"Disable tx CU test",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn test_deactivate_tx_cu_pass() {\n    // Run with all features activated except 'transaction wide compute cap'\n    let inv_feat = vec![TXWIDE_LIMITS];\n    // Start validator with clean (new) ledger\n    let (test_validator, main_payer) = clean_ledger_setup_validator(inv_feat).unwrap();\n    // Get the RpcClient\n    let connection = test_validator.get_rpc_client();\n    // Capture our programs log statements\n    solana_logger::setup_with_default(\"solana_runtime::message=debug\");\n\n    // This example doesn't require sending any accounts to program\n    let accounts = &[];\n    // Build instruction array and submit transaction\n    let txn = submit_transaction(\n        &connection,\n        &main_payer,\n        [\n            // This instruction adds CU to transaction budget (1.9.2) but does nothing\n            // when we deactivate the 'transaction wide compute cap' feature\n            ComputeBudgetInstruction::request_units(400_000u32),\n            // Add two (2) instructions to transaction\n            // Replace with instructions that make sense for your program\n            // You will see that each instruction has the 1.8.x 200_000 CU per budget\n            Instruction::new_with_borsh(PROG_KEY, &0u8, accounts.to_vec()),\n            Instruction::new_with_borsh(PROG_KEY, &1u8, accounts.to_vec()),\n        ]\n        .to_vec(),\n    );\n    assert!(txn.is_ok());\n}\n")))),(0,r.kt)("p",null,"\u53e6\u5916\uff0c",(0,r.kt)("a",{parentName:"p",href:"#resources"},"scfs engine gadget"),"\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u5305\u542b\u67d0\u4e2a\u96c6\u7fa4\u7684\u6240\u6709\u5df2\u505c\u7528\u529f\u80fd\u7684\u5b8c\u6574\u5411\u91cf\u3002\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u8be5 engine \u6765\u83b7\u53d6 devnet \u7684\u6240\u6709\u5df2\u505c\u7528\u529f\u80fd\u5217\u8868\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"devent parity")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[test]\nfn test_devnet_parity_pass() {\n    // Use gadget-scfs to get all deactivated features from devnet\n    // must have `gadgets-scfs = "0.2.0" in Cargo.toml to use\n    // Here we setup for a run that samples features only\n    // from devnet\n    let mut my_matrix = ScfsMatrix::new(Some(ScfsCriteria {\n        clusters: Some(vec![SCFS_DEVNET.to_string()]),\n        ..Default::default()\n    }))\n    .unwrap();\n    // Run the sampler matrix\n    assert!(my_matrix.run().is_ok());\n    // Get all deactivated features\n    let deactivated = my_matrix\n        .get_features(Some(&ScfsMatrix::any_inactive))\n        .unwrap();\n    // Confirm we have them\n    assert_ne!(deactivated.len(), 0);\n    // Setup test validator and logging while deactivating all\n    // features that are deactivated in devnet\n    let (test_validator, main_payer) = clean_ledger_setup_validator(deactivated).unwrap();\n    let connection = test_validator.get_rpc_client();\n    solana_logger::setup_with_default("solana_runtime::message=debug");\n\n    let accounts = &[];\n    let txn = submit_transaction(\n        &connection,\n        &main_payer,\n        [\n            // Add two (2) instructions to transaction\n            // Replace with instructions that make sense for your program\n            Instruction::new_with_borsh(PROG_KEY, &0u8, accounts.to_vec()),\n            Instruction::new_with_borsh(PROG_KEY, &1u8, accounts.to_vec()),\n        ]\n        .to_vec(),\n    );\n    assert!(txn.is_ok());\n}\n')),(0,r.kt)("p",null,"\u6109\u5feb\u7684\u6d4b\u8bd5\uff01"),(0,r.kt)("h2",{id:"\u8d44\u6599"},"\u8d44\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"scfsd: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FrankC01/solana-gadgets/tree/main/rust/scfsd"},"https://github.com/FrankC01/solana-gadgets/tree/main/rust/scfsd"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gadget-scfs : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FrankC01/solana-gadgets/tree/main/rust/gadgets-scfs"},"https://github.com/FrankC01/solana-gadgets/tree/main/rust/gadgets-scfs")))))}g.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},74866:(t,e,a)=>{a.d(e,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),u=a(67392),c=a(50012);function p(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function d(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function m(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const n=(0,s.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=d(t),[o,s]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[i,u]=g({queryString:a,groupId:n}),[p,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),f=(()=>{const t=i??p;return m({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);s(t),u(t),k(t)}),[u,k,l]),tabValues:l}}var f=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:a,selectedValue:s,selectValue:i,tabValues:u}=t;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=t=>{const e=t.currentTarget,a=c.indexOf(e),n=u[a].value;n!==s&&(p(e),i(n))},m=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=c.indexOf(t.currentTarget)+1;e=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(t.currentTarget)-1;e=c[a]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},u.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:t=>c.push(t),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===e})}),a??e)})))}function _(t){let{lazy:e,children:a,selectedValue:n}=t;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function h(t){const e=k(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(b,(0,n.Z)({},t,e)),r.createElement(_,(0,n.Z)({},t,e)))}function N(t){const e=(0,f.Z)();return r.createElement(h,(0,n.Z)({key:String(e)},t))}},87294:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/scfsd-a6063f540604860160f295cdac95e69e.png"}}]);