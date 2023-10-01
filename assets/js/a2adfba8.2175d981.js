"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(a),d=l,u=k["".concat(s,".").concat(d)]||k[d]||m[d]||o;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const o={title:"\u7248\u672c\u5316\u4ea4\u6613 (Versioned Transactions)",sidebar_position:14,tags:["solana-cook-book","transaction"]},r="\u7248\u672c\u5316\u4ea4\u6613 (Versioned Transactions)",i={unversionedId:"guides/versioned-transactions",id:"guides/versioned-transactions",title:"\u7248\u672c\u5316\u4ea4\u6613 (Versioned Transactions)",description:"Solana\u6700\u8fd1\u53d1\u5e03\u4e86\u7248\u672c\u5316\u4ea4\u6613\u3002\u63d0\u8bae\u7684\u66f4\u6539\u5982\u4e0b\uff1a",source:"@site/docs/cookbook-zh/guides/versioned-transactions.md",sourceDirName:"guides",slug:"/guides/versioned-transactions",permalink:"/cookbook-zh/guides/versioned-transactions",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/guides/versioned-transactions.md",tags:[{label:"solana-cook-book",permalink:"/cookbook-zh/tags/solana-cook-book"},{label:"transaction",permalink:"/cookbook-zh/tags/transaction"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1696133130,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:14,frontMatter:{title:"\u7248\u672c\u5316\u4ea4\u6613 (Versioned Transactions)",sidebar_position:14,tags:["solana-cook-book","transaction"]},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u76f8\u7b49\u6d4b\u8bd5",permalink:"/cookbook-zh/guides/feature-parity-testing"},next:{title:"\u53c2\u8003",permalink:"/cookbook-zh/references/"}},s={},p=[{value:"\u4f20\u7edf\u4ea4\u6613\uff08Legacy Transactions\uff09",id:"\u4f20\u7edf\u4ea4\u6613legacy-transactions",level:2},{value:"\u4f20\u7edf\u6d88\u606f",id:"\u4f20\u7edf\u6d88\u606f",level:2},{value:"\u5934\u90e8",id:"\u5934\u90e8",level:3},{value:"\u7d27\u51d1\u8d26\u6237\u5730\u5740\u6570\u7ec4",id:"\u7d27\u51d1\u8d26\u6237\u5730\u5740\u6570\u7ec4",level:3},{value:"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4",id:"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4",level:3},{value:"\u4f20\u7edf\u4ea4\u6613\u7684\u95ee\u9898",id:"\u4f20\u7edf\u4ea4\u6613\u7684\u95ee\u9898",level:2},{value:"\u5730\u5740\u67e5\u627e\u8868(Address Lookeup Tables)",id:"\u5730\u5740\u67e5\u627e\u8868address-lookeup-tables",level:2},{value:"\u7248\u672c\u5316\u4ea4\u6613\uff1a TransactionV0",id:"\u7248\u672c\u5316\u4ea4\u6613-transactionv0",level:2},{value:"MessageV0",id:"messagev0",level:2},{value:"\u5730\u5740\u8868\u67e5\u627e\u7684\u7d27\u51d1\u6570\u7ec4",id:"\u5730\u5740\u8868\u67e5\u627e\u7684\u7d27\u51d1\u6570\u7ec4",level:3},{value:"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4",id:"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4-1",level:3},{value:"RPC\u53d8\u66f4",id:"rpc\u53d8\u66f4",level:2},{value:"\u5176\u4ed6\u8d44\u6599",id:"\u5176\u4ed6\u8d44\u6599",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:p},k="wrapper";function m(e){let{components:t,...o}=e;return(0,l.kt)(k,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7248\u672c\u5316\u4ea4\u6613-versioned-transactions"},"\u7248\u672c\u5316\u4ea4\u6613 (Versioned Transactions)"),(0,l.kt)("p",null,"Solana\u6700\u8fd1\u53d1\u5e03\u4e86\u7248\u672c\u5316\u4ea4\u6613\u3002\u63d0\u8bae\u7684\u66f4\u6539\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f15\u5165\u4e00\u4e2a\u65b0\u7684\u7a0b\u5e8f\uff0c\u7528\u4e8e\u7ba1\u7406\u94fe\u4e0a\u5730\u5740\u67e5\u627e\u8868\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u4e00\u79cd\u65b0\u7684\u4ea4\u6613\u683c\u5f0f\uff0c\u53ef\u4ee5\u5229\u7528\u94fe\u4e0a\u5730\u5740\u67e5\u627e\u8868\u3002"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"tip \u4e8b\u5b9e\u8868"),"\n-\u4f20\u7edf\u4ea4\u6613\u5b58\u5728\u4e00\u4e2a\u4e3b\u8981\u95ee\u9898\uff1a\u6700\u5927\u5141\u8bb8\u7684\u5927\u5c0f\u4e3a1232\u5b57\u8282\uff0c\u56e0\u6b64\u539f\u5b50\u4ea4\u6613\u4e2d\u53ef\u4ee5\u5bb9\u7eb3\u7684\u8d26\u6237\u6570\u91cf\u4e3a35\u4e2a\u5730\u5740\u3002"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u5730\u5740\u67e5\u627e\u8868\uff08LUTs\uff09\uff1a\u4e00\u65e6\u8d26\u6237\u5b58\u50a8\u5728\u8be5\u8868\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u75281\u5b57\u8282\u7684u8\u7d22\u5f15\uff0c\u5728\u4ea4\u6613\u6d88\u606f\u4e2d\u5f15\u7528\u8be5\u8868\u7684\u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"solana/web3.js"),"\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"createLookupTable()"),"\u6784\u5efa\u4e00\u4e2a\u65b0\u7684\u67e5\u627e\u8868\uff0c\u5e76\u786e\u5b9a\u5176\u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u65e6\u521b\u5efa\u4e86LUT\uff0c\u53ef\u4ee5\u8fdb\u884c\u6269\u5c55\uff0c\u5373\u53ef\u4ee5\u5c06\u8d26\u6237\u8ffd\u52a0\u5230\u8868\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u5316\u4ea4\u6613\uff1a\u9700\u8981\u4fee\u6539\u4f20\u7edf\u4ea4\u6613\u7684\u7ed3\u6784\u4ee5\u6574\u5408LUTs\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5f15\u5165\u7248\u672c\u5316\u4e4b\u524d\uff0c\u4ea4\u6613\u5728\u5176\u5934\u90e8\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\u4e2d\u4fdd\u7559\u4e86\u4e00\u4e2a\u672a\u4f7f\u7528\u7684\u6700\u9ad8\u4f4d\uff0c\u53ef\u4ee5\u7528\u6765\u663e\u5f0f\u58f0\u660e\u4ea4\u6613\u7684\u7248\u672c\u3002"))),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u66f4\u8be6\u7ec6\u5730\u8ba8\u8bba\u4e0a\u8ff0\u5f15\u5165\u7684\u66f4\u6539\u4ee5\u53ca\u5b83\u4eec\u5bf9\u5f00\u53d1\u4eba\u5458\u7684\u610f\u4e49\u3002\u7136\u800c\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u7406\u89e3\u8fd9\u4e9b\u66f4\u6539\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u4e86\u89e3\u5e38\u89c4\uff08\u6216\u4f20\u7edf\uff09\u4ea4\u6613\u7684\u7ed3\u6784\u3002"),(0,l.kt)("h2",{id:"\u4f20\u7edf\u4ea4\u6613legacy-transactions"},"\u4f20\u7edf\u4ea4\u6613\uff08Legacy Transactions\uff09"),(0,l.kt)("p",null,"Solana\u7f51\u7edc\u4f7f\u7528\u6700\u5927\u4e8b\u52a1\u5355\u5143\uff08MTU\uff09\u5927\u5c0f\u4e3a1280\u5b57\u8282\uff0c\u9075\u5faa",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IPv6_packet"},"IPv6 MTU")," \u7684\u5927\u5c0f\u7ea6\u675f\uff0c\u4ee5\u786e\u4fdd\u901f\u5ea6\u548c\u53ef\u9760\u6027\u3002\u8fd9\u6837\u7559\u4e0b\u4e861232\u5b57\u8282\u7684\u6570\u636e\u7a7a\u95f4\uff0c\u7528\u4e8e\u5b58\u50a8\u5e8f\u5217\u5316\u7684\u4ea4\u6613\u7b49\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u4ea4\u6613\u7531\u4ee5\u4e0b\u7ec4\u6210\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u7d27\u51d1\u6570\u7ec4\u7684\u7b7e\u540d\uff0c\u5176\u4e2d\u6bcf\u4e2a\u7b7e\u540d\u662f\u4e00\u4e2a64\u5b57\u8282\u7684",(0,l.kt)("a",{parentName:"li",href:"https://ed25519.cr.yp.to/"},"ed25519"),"\u7b7e\u540d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\uff08\u4f20\u7edf\u7684\uff09\u6d88\u606f\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Transaction Format",src:a(59899).Z,width:"2090",height:"260"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"tip Compact-Array format")),(0,l.kt)("p",{parentName:"admonition"},"A compact array is an array serialised to have the following components:"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"An array length in a multi-byte encoding called ",(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/developing/programming-model/transactions#compact-u16-format"},"Compact-u16")),(0,l.kt)("li",{parentName:"ol"},"Followed by each array item")),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{alt:"Compact array format",src:a(26626).Z,width:"2098",height:"340"}))),(0,l.kt)("h2",{id:"\u4f20\u7edf\u6d88\u606f"},"\u4f20\u7edf\u6d88\u606f"),(0,l.kt)("p",null,"\u4f20\u7edf\u6d88\u606f\u5305\u542b\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u5934\u90e8\uff08header\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u7d27\u51d1\u6570\u7ec4\u7684\u8d26\u6237\u5730\u5740\uff0c\u6bcf\u4e2a\u8d26\u6237\u5730\u5740\u5360\u752832\u5b57\u8282\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u6700\u8fd1\u7684\u533a\u5757\u54c8\u5e0c\uff08recent blockhash\uff09\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a32\u5b57\u8282\u7684SHA-256\u54c8\u5e0c\uff0c\u7528\u4e8e\u6307\u793a\u4e0a\u6b21\u89c2\u5bdf\u5230\u7684\u8d26\u672c\u72b6\u6001\u3002\u5982\u679c\u4e00\u4e2a\u533a\u5757\u54c8\u5e0c\u592a\u65e7\uff0c\u9a8c\u8bc1\u8282\u70b9\u5c06\u62d2\u7edd\u5b83\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u7d27\u51d1\u6570\u7ec4\u7684\u6307\u4ee4")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Legacy Message",src:a(73142).Z,width:"2246",height:"756"})),(0,l.kt)("h3",{id:"\u5934\u90e8"},"\u5934\u90e8"),(0,l.kt)("p",null,"\u6d88\u606f\u5934\u90e8\u662f3\u5b57\u8282\u957f\uff0c\u5305\u542b3\u4e2au8\u6574\u6570\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6240\u9700\u7b7e\u540d\u6570\u91cf\uff1aSolana\u8fd0\u884c\u65f6\u4f1a\u5c06\u6b64\u6570\u5b57\u4e0e\u4ea4\u6613\u4e2d\u7d27\u51d1\u6570\u7ec4\u7b7e\u540d\u7684\u957f\u5ea6\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9700\u8981\u7b7e\u540d\u7684\u53ea\u8bfb\u8d26\u6237\u5730\u5740\u6570\u91cf\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u7b7e\u540d\u7684\u53ea\u8bfb\u8d26\u6237\u5730\u5740\u6570\u91cf\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Message Header",src:a(77143).Z,width:"1858",height:"1016"})),(0,l.kt)("h3",{id:"\u7d27\u51d1\u8d26\u6237\u5730\u5740\u6570\u7ec4"},"\u7d27\u51d1\u8d26\u6237\u5730\u5740\u6570\u7ec4"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7d27\u51d1\u6570\u7ec4\u4ee5\u7d27\u51d1\u7684u16\u7f16\u7801\u7684\u8d26\u6237\u5730\u5740\u6570\u91cf\u5f00\u59cb\uff0c\u7136\u540e\u662f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u9700\u8981\u7b7e\u540d\u7684\u8d26\u6237\u5730\u5740"),"\uff1a\u9996\u5148\u5217\u51fa\u8bf7\u6c42\u8bfb\u53d6\u548c\u5199\u5165\u8bbf\u95ee\u6743\u9650\u7684\u5730\u5740\uff0c\u7136\u540e\u662f\u8bf7\u6c42\u53ea\u8bfb\u8bbf\u95ee\u6743\u9650\u7684\u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u9700\u8981\u7b7e\u540d\u7684\u8d26\u6237\u5730\u5740"),"\uff1a\u4e0e\u4e0a\u8ff0\u76f8\u540c\uff0c\u9996\u5148\u5217\u51fa\u8bf7\u6c42\u8bfb\u53d6\u548c\u5199\u5165\u8bbf\u95ee\u6743\u9650\u7684\u5730\u5740\uff0c\u7136\u540e\u662f\u8bf7\u6c42\u53ea\u8bfb\u8bbf\u95ee\u6743\u9650\u7684\u5730\u5740\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Compact array of account addresses",src:a(7394).Z,width:"2040",height:"816"})),(0,l.kt)("h3",{id:"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4"},"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4"),(0,l.kt)("p",null,"\u5c31\u50cf\u8d26\u6237\u5730\u5740\u6570\u7ec4\u4e00\u6837\uff0c\u8fd9\u4e2a\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4\u4ee5\u7d27\u51d1\u7684u16\u7f16\u7801\u7684\u6307\u4ee4\u6570\u91cf\u5f00\u59cb\uff0c\u7136\u540e\u662f\u4e00\u4e2a\u6307\u4ee4\u6570\u7ec4\u3002\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u6307\u4ee4\u5177\u6709\u4ee5\u4e0b\u7ec4\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u7a0b\u5e8fID"),"\uff1a\u7528\u4e8e\u6807\u8bc6\u5c06\u5904\u7406\u8be5\u6307\u4ee4\u7684\u94fe\u4e0a\u7a0b\u5e8f\u3002\u5b83\u8868\u793a\u4e3a\u6d88\u606f\u4e2d\u8d26\u6237\u5730\u5740\u7d27\u51d1\u6570\u7ec4\u7684\u5730\u5740\u7684u8\u7d22\u5f15\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u8d26\u6237\u5730\u5740\u7d22\u5f15\u7684\u7d27\u51d1\u6570\u7ec4"),"\uff1a\u6307\u5411\u7d27\u51d1\u8d26\u6237\u5730\u5740\u6570\u7ec4\u4e2d\u9700\u8981\u7b7e\u540d\u7684\u4e00\u90e8\u5206\u8d26\u6237\u5730\u5740\u7684u8\u7d22\u5f15\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u4e0d\u900f\u660e\u7684u8\u6570\u636e\u7684\u7d27\u51d1\u6570\u7ec4"),"\uff1a\u4e00\u4e2a\u901a\u7528\u7684\u5b57\u8282\u6570\u7ec4\uff0c\u4e0e\u524d\u9762\u63d0\u5230\u7684\u7a0b\u5e8fID\u76f8\u5173\u3002\u8be5\u6570\u636e\u6570\u7ec4\u6307\u5b9a\u4e86\u7a0b\u5e8f\u5e94\u6267\u884c\u7684\u4efb\u4f55\u64cd\u4f5c\u4ee5\u53ca\u8d26\u6237\u53ef\u80fd\u4e0d\u5305\u542b\u7684\u4efb\u4f55\u9644\u52a0\u4fe1\u606f\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Compact array of Instructions",src:a(63088).Z,width:"1876",height:"1258"})),(0,l.kt)("h2",{id:"\u4f20\u7edf\u4ea4\u6613\u7684\u95ee\u9898"},"\u4f20\u7edf\u4ea4\u6613\u7684\u95ee\u9898"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4ea4\u6613\u6a21\u578b\u5b58\u5728\u7684\u95ee\u9898\u662f\u4ec0\u4e48?"),(0,l.kt)("p",null,"\u4ea4\u6613\u7684\u6700\u5927\u5927\u5c0f\u4ee5\u53ca\u56e0\u6b64\u80fd\u591f\u5728\u5355\u4e2a\u539f\u5b50\u4ea4\u6613\u4e2d\u5bb9\u7eb3\u7684\u8d26\u6237\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u4ea4\u6613\u7684\u6700\u5927\u5141\u8bb8\u5927\u5c0f\u4e3a1232\u5b57\u8282\u3002\u4e00\u4e2a\u8d26\u6237\u5730\u5740\u7684\u5927\u5c0f\u4e3a32\u5b57\u8282\u3002\u56e0\u6b64\uff0c\u8003\u8651\u5230\u4e00\u4e9b\u7528\u4e8e\u5934\u90e8\u3001\u7b7e\u540d\u548c\u5176\u4ed6\u5143\u6570\u636e\u7684\u7a7a\u95f4\uff0c\u4e00\u4e2a\u4ea4\u6613\u6700\u591a\u53ea\u80fd\u5b58\u50a835\u4e2a\u8d26\u6237\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Issue with legacy transactions",src:a(31063).Z,width:"2536",height:"468"})),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u6709\u51e0\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u5728\u5355\u4e2a\u4ea4\u6613\u4e2d\u5305\u542b\u6570\u767e\u4e2a\u65e0\u9700\u7b7e\u540d\u7684\u8d26\u6237\u3002\u4f46\u662f\uff0c\u4f20\u7edf\u4ea4\u6613\u6a21\u578b\u76ee\u524d\u65e0\u6cd5\u5b9e\u73b0\u8fd9\u4e00\u70b9\u3002\u76ee\u524d\u4f7f\u7528\u7684\u89e3\u51b3\u65b9\u6848\u662f\u5728\u94fe\u4e0a\u4e34\u65f6\u5b58\u50a8\u72b6\u6001\uff0c\u5e76\u5728\u7a0d\u540e\u7684\u4ea4\u6613\u4e2d\u4f7f\u7528\u3002\u4f46\u662f\uff0c\u5f53\u591a\u4e2a\u7a0b\u5e8f\u9700\u8981\u7ec4\u5408\u5728\u5355\u4e2a\u4ea4\u6613\u4e2d\u65f6\uff0c\u8fd9\u79cd\u89e3\u51b3\u65b9\u6cd5\u5c31\u4e0d\u9002\u7528\u4e86\u3002\u6bcf\u4e2a\u7a0b\u5e8f\u90fd\u9700\u8981\u591a\u4e2a\u8d26\u6237\u4f5c\u4e3a\u8f93\u5165\uff0c\u56e0\u6b64\u6211\u4eec\u9677\u5165\u4e86\u4e0e\u4e4b\u524d\u76f8\u540c\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u8fd9\u5c31\u662f\u5f15\u5165 ",(0,l.kt)("strong",{parentName:"p"},"\u5730\u5740\u67e5\u627e\u8868\uff08Address Lookup Tables\uff0cLUT\uff09"),"\u7684\u539f\u56e0\u3002"),(0,l.kt)("h2",{id:"\u5730\u5740\u67e5\u627e\u8868address-lookeup-tables"},"\u5730\u5740\u67e5\u627e\u8868(Address Lookeup Tables)"),(0,l.kt)("p",null,"\u5730\u5740\u67e5\u627e\u8868\u7684\u7406\u5ff5\u662f\u5728\u94fe\u4e0a\u4f7f\u7528\u8868\u683c\uff08\u6570\u7ec4\uff09\u7684\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u8d26\u6237\u5730\u5740\u3002\u4e00\u65e6\u8d26\u6237\u5b58\u50a8\u5728\u8be5\u8868\u4e2d\uff0c\u53ef\u4ee5\u5728\u4ea4\u6613\u6d88\u606f\u4e2d\u5f15\u7528\u8be5\u8868\u7684\u5730\u5740\u3002\u4e3a\u4e86\u6307\u5411\u8868\u4e2d\u7684\u5355\u4e2a\u8d26\u6237\uff0c\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u5b57\u8282\u7684u8\u7d22\u5f15\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LUTs",src:a(28902).Z,width:"2934",height:"2142"})),(0,l.kt)("p",null,"\u8fd9\u6837\u505a\u53ef\u4ee5\u8282\u7701\u7a7a\u95f4\uff0c\u56e0\u4e3a\u5730\u5740\u4e0d\u518d\u9700\u8981\u5b58\u50a8\u5728\u4ea4\u6613\u6d88\u606f\u4e2d\u3002\u5b83\u4eec\u53ea\u9700\u8981\u4ee5\u6570\u7ec4\u5f62\u5f0f\u7684\u8868\u683c\u4e2d\u7684\u7d22\u5f15\u8fdb\u884c\u5f15\u7528\u3002\u8fd9\u4f7f\u5f97\u6709\u53ef\u80fd\u5f15\u7528256\u4e2a\u8d26\u6237\uff0c\u56e0\u4e3a\u8d26\u6237\u4f7f\u7528u8\u7d22\u5f15\u8fdb\u884c\u5f15\u7528\u3002"),(0,l.kt)("p",null,"\u5f53\u521d\u59cb\u5316\u5730\u5740\u67e5\u627e\u8868\u6216\u5411\u8868\u4e2d\u6dfb\u52a0\u65b0\u5730\u5740\u65f6\uff0c\u9700\u8981\u4f7f\u5730\u5740\u67e5\u627e\u8868\u514d\u9664\u79df\u91d1\u3002\u5730\u5740\u53ef\u4ee5\u901a\u8fc7\u94fe\u4e0a\u7f13\u51b2\u533a\u6216\u76f4\u63a5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Extension"),"\u6307\u4ee4\u5c06\u5176\u8ffd\u52a0\u5230\u8868\u683c\u4e2d\u3002\u6b64\u5916\uff0c\u5730\u5740\u67e5\u627e\u8868\u8fd8\u53ef\u4ee5\u5b58\u50a8\u76f8\u5173\u7684\u5143\u6570\u636e\uff0c\u540e\u9762\u662f\u4e00\u4e2a\u7d27\u51d1\u6570\u7ec4\u7684\u8d26\u6237\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5178\u578b\u5730\u5740\u67e5\u627e\u8868\u7684\u7ed3\u6784\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"LUT Format",src:a(68041).Z,width:"1674",height:"1812"})),(0,l.kt)("p",null,"\u5730\u5740\u67e5\u627e\u8868\u7684\u4e00\u4e2a\u91cd\u8981\u7f3a\u70b9\u662f\uff0c\u5728\u4ea4\u6613\u5904\u7406\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e\u5730\u5740\u67e5\u627e\u9700\u8981\u989d\u5916\u7684\u5f00\u9500\uff0c\u901a\u5e38\u4f1a\u5bfc\u81f4\u4ea4\u6613\u7684\u6210\u672c\u8f83\u9ad8\u3002"),(0,l.kt)("h2",{id:"\u7248\u672c\u5316\u4ea4\u6613-transactionv0"},"\u7248\u672c\u5316\u4ea4\u6613\uff1a TransactionV0"),(0,l.kt)("p",null,"\u4f20\u7edf\u4ea4\u6613\u7684\u7ed3\u6784\u9700\u8981\u4fee\u6539\u4ee5\u5305\u542b\u5730\u5740\u8868\u67e5\u627e\u3002\u8fd9\u4e9b\u66f4\u6539\u4e0d\u5e94\u7834\u574fSolana\u4e0a\u7684\u4ea4\u6613\u5904\u7406\uff0c\u4e5f\u4e0d\u5e94\u5bf9\u88ab\u8c03\u7528\u7684\u7a0b\u5e8f\u7684\u683c\u5f0f\u4ea7\u751f\u4efb\u4f55\u66f4\u6539\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u4e0a\u8ff0\u60c5\u51b5\uff0c\u91cd\u8981\u7684\u662f\u660e\u786e\u6307\u51fa\u4ea4\u6613\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"legacy"),"\uff08\u4f20\u7edf\uff09\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"versioned"),"\uff08\u7248\u672c\u5316\uff09\u3002\u6211\u4eec\u5982\u4f55\u5728\u4ea4\u6613\u4e2d\u5305\u542b\u8fd9\u4e9b\u4fe1\u606f\u5462\uff1f"),(0,l.kt)("p",null,"\u5728\u5f15\u5165\u7248\u672c\u5316\u4e4b\u524d\uff0c\u4ea4\u6613\u5728\u5176\u6d88\u606f\u5934\u90e8\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"num_required_signatures"),"\u5b57\u6bb5\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\u4e2d\u7559\u4e0b\u4e86\u4e00\u4e2a\u672a\u4f7f\u7528\u7684\u4e0a\u4f4d\u6bd4\u7279\u3002\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u6bd4\u7279\u4f4d\u6765\u660e\u786e\u58f0\u660e\u6211\u4eec\u7684\u4ea4\u6613\u7248\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum VersionedMessage {\n    Legacy(Message),\n    V0(v0::Message),\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86\u7b2c\u4e00\u4e2a\u6bd4\u7279\u4f4d\uff0c\u90a3\u4e48\u7b2c\u4e00\u4e2a\u5b57\u8282\u4e2d\u7684\u5269\u4f59\u6bd4\u7279\u5c06\u7528\u4e8e\u7f16\u7801\u7248\u672c\u53f7\u3002Solana\u4ece\u201c\u7248\u672c0\u201d\u5f00\u59cb\uff0c\u8fd9\u662f\u5f00\u59cb\u4f7f\u7528\u5730\u5740\u67e5\u627e\u8868\u7684\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u672a\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u6bd4\u7279\u4f4d\uff0c\u90a3\u4e48\u8be5\u4ea4\u6613\u5c06\u88ab\u89c6\u4e3a\u201c\u4f20\u7edf\u4ea4\u6613\u201d\uff0c\u5e76\u4e14\u7b2c\u4e00\u4e2a\u5b57\u8282\u7684\u5269\u4f59\u90e8\u5206\u5c06\u88ab\u89c6\u4e3a\u7f16\u7801\u4f20\u7edf\u6d88\u606f\u7684\u7b2c\u4e00\u4e2a\u5b57\u8282\u3002"),(0,l.kt)("h2",{id:"messagev0"},"MessageV0"),(0,l.kt)("p",null,"\u65b0\u7684MessageV0\u7684\u7ed3\u6784\u57fa\u672c\u4e0a\u662f\u76f8\u540c\u7684\uff0c\u53ea\u662f\u6709\u4e24\u4e2a\u5c0f\u4f46\u91cd\u8981\u7684\u53d8\u5316\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u6d88\u606f\u5934\u90e8"),"\uff1a\u4e0e\u4f20\u7edf\u7248\u672c\u76f8\u540c\uff0c\u6ca1\u6709\u53d8\u5316\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u7d27\u51d1\u8d26\u6237\u5bc6\u94a5\u6570\u7ec4"),"\uff1a\u4e0e\u4f20\u7edf\u7248\u672c\u76f8\u540c\uff0c\u6ca1\u6709\u53d8\u5316\u3002\u6211\u4eec\u5c06\u6307\u5411\u8be5\u6570\u7ec4\u5143\u7d20\u7684\u7d22\u5f15\u6570\u7ec4\u8868\u793a\u4e3a",(0,l.kt)("em",{parentName:"li"},"\u7d22\u5f15\u6570\u7ec4A"),"\uff08\u60a8\u5f88\u5feb\u5c06\u770b\u5230\u4e3a\u4ec0\u4e48\u6211\u4eec\u8fd9\u6837\u8868\u793a\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u6700\u8fd1\u7684\u533a\u5757\u54c8\u5e0c"),"\uff1a\u4e0e\u4f20\u7edf\u7248\u672c\u76f8\u540c\uff0c\u6ca1\u6709\u53d8\u5316\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4"),"\uff1a\u4e0e\u4f20\u7edf\u7248\u672c\u4e0d\u540c\uff0c\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u5730\u5740\u8868\u67e5\u627e\u7684\u7d27\u51d1\u6570\u7ec4"),"\uff1a\u5728\u7248\u672c0\u4e2d\u5f15\u5165\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Message v0",src:a(31111).Z,width:"2310",height:"1424"})),(0,l.kt)("p",null,"\u5728\u67e5\u770b\u6307\u4ee4\u6570\u7ec4\u4e2d\u7684\u53d8\u5316\u4e4b\u524d\uff0c\u6211\u4eec\u9996\u5148\u8ba8\u8bba\u5730\u5740\u8868\u67e5\u627e\u7684\u7d27\u51d1\u6570\u7ec4\u7684\u7ed3\u6784\u3002"),(0,l.kt)("h3",{id:"\u5730\u5740\u8868\u67e5\u627e\u7684\u7d27\u51d1\u6570\u7ec4"},"\u5730\u5740\u8868\u67e5\u627e\u7684\u7d27\u51d1\u6570\u7ec4"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7ed3\u6784\u5c06\u5730\u5740\u67e5\u627e\u8868\uff08LUT\uff09\u5f15\u5165\u5230\u7248\u672c\u5316\u4ea4\u6613\u4e2d\uff0c\u4ece\u800c\u4f7f\u5f97\u5728\u5355\u4e2a\u4ea4\u6613\u4e2d\u52a0\u8f7d\u66f4\u591a\u7684\u53ea\u8bfb\u548c\u53ef\u5199\u8d26\u6237\u6210\u4e3a\u53ef\u80fd\u3002"),(0,l.kt)("p",null,"\u7d27\u51d1\u6570\u7ec4\u4ee5\u7d27\u51d1\u7684u16\u7f16\u7801\u8868\u793a\u5730\u5740\u8868\u67e5\u627e\u7684\u6570\u91cf\uff0c\u540e\u8ddf\u4e00\u4e2a\u5730\u5740\u8868\u67e5\u627e\u7684\u6570\u7ec4\u3002\u6bcf\u4e2a\u67e5\u627e\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u8d26\u6237\u5bc6\u94a5"),"\uff1a\u5730\u5740\u67e5\u627e\u8868\u7684\u8d26\u6237\u5bc6\u94a5\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u5199\u7d22\u5f15"),"\uff1a\u7528\u4e8e\u52a0\u8f7d\u53ef\u5199\u8d26\u6237\u5730\u5740\u7684\u7d27\u51d1\u7d22\u5f15\u6570\u7ec4\u3002\u6211\u4eec\u5c06\u6b64\u6570\u7ec4\u8868\u793a\u4e3a",(0,l.kt)("em",{parentName:"li"},"\u7d22\u5f15\u6570\u7ec4B"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u53ea\u8bfb\u7d22\u5f15"),"\uff1a\u7528\u4e8e\u52a0\u8f7d\u53ea\u8bfb\u8d26\u6237\u5730\u5740\u7684\u7d27\u51d1\u7d22\u5f15\u6570\u7ec4\u3002\u6211\u4eec\u5c06\u6b64\u6570\u7ec4\u8868\u793a\u4e3a",(0,l.kt)("em",{parentName:"li"},"\u7d22\u5f15\u6570\u7ec4C"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Compact array of LUTs",src:a(48105).Z,width:"2436",height:"1940"})),(0,l.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b\u6307\u4ee4\u7d27\u51d1\u6570\u7ec4\u4e2d\u505a\u4e86\u54ea\u4e9b\u6539\u53d8\u3002"),(0,l.kt)("h3",{id:"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4-1"},"\u7d27\u51d1\u6307\u4ee4\u6570\u7ec4"),(0,l.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0c\u4f20\u7edf\u6307\u4ee4\u7684\u7d27\u51d1\u6570\u7ec4\u5b58\u50a8\u4e86\u5404\u4e2a\u4f20\u7edf\u6307\u4ee4\uff0c\u800c\u8fd9\u4e9b\u6307\u4ee4\u53c8\u5206\u522b\u5b58\u50a8\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7a0b\u5e8fID\u7d22\u5f15"),(0,l.kt)("li",{parentName:"ol"},"\u8d26\u6237\u5730\u5740\u7d22\u5f15\u7684\u7d27\u51d1\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u900f\u660e\u76848\u4f4d\u6570\u636e\u7684\u7d27\u51d1\u6570\u7ec4")),(0,l.kt)("p",null,"\u65b0\u6307\u4ee4\u4e2d\u7684\u53d8\u5316\u4e0d\u5728\u4e8e\u6307\u4ee4\u672c\u8eab\u7684\u7ed3\u6784\uff0c\u800c\u662f\u5728\u4e8e\u7528\u4e8e\u83b7\u53d6\u7b2c1\u548c\u7b2c2\u9879\u7d22\u5f15\u7684\u6570\u7ec4\u3002\u5728\u4f20\u7edf\u4ea4\u6613\u4e2d\uff0c\u4f7f\u7528\u4e86\u7d22\u5f15\u6570\u7ec4A\u7684\u5b50\u96c6\uff0c\u800c\u5728\u7248\u672c\u5316\u4ea4\u6613\u4e2d\uff0c\u5219\u4f7f\u7528\u4e86\u4ee5\u4e0b\u7ec4\u5408\u6570\u7ec4\u7684\u5b50\u96c6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u7d22\u5f15\u6570\u7ec4A"),"\uff1a\u5b58\u50a8\u5728\u6d88\u606f\u4e2d\u7684\u7d27\u51d1\u8d26\u6237\u6570\u7ec4\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u7d22\u5f15\u6570\u7ec4B"),"\uff1a\u5730\u5740\u8868\u67e5\u627e\u4e2d\u7684\u53ef\u5199\u7d22\u5f15\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"\u7d22\u5f15\u6570\u7ec4C"),"\uff1a\u5730\u5740\u8868\u67e5\u627e\u4e2d\u7684\u53ea\u8bfb\u7d22\u5f15\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"New Compact array of Instructions",src:a(6137).Z,width:"1872",height:"1932"})),(0,l.kt)("h2",{id:"rpc\u53d8\u66f4"},"RPC\u53d8\u66f4"),(0,l.kt)("p",null,"\u4e8b\u52a1\u54cd\u5e94\u5c06\u9700\u8981\u4e00\u4e2a\u65b0\u7684\u7248\u672c\u5b57\u6bb5\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"maxSupportedTransactionVersion"),"\uff0c\u4ee5\u5411\u5ba2\u6237\u7aef\u6307\u793a\u9700\u8981\u9075\u5faa\u7684\u4e8b\u52a1\u7ed3\u6784\u4ee5\u8fdb\u884c\u53cd\u5e8f\u5217\u5316\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u9700\u8981\u8fdb\u884c\u66f4\u65b0\u4ee5\u907f\u514d\u9519\u8bef\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getTransaction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getBlock"))),(0,l.kt)("p",null,"\u8bf7\u6c42\u4e2d\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"maxSupportedTransactionVersion: 0")),(0,l.kt)("p",null,"\u5982\u679c\u8bf7\u6c42\u4e2d\u6ca1\u6709\u663e\u5f0f\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"maxSupportedTransactionVersion"),"\uff0c\u4e8b\u52a1\u7248\u672c\u5c06\u56de\u9000\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"legacy"),"\u3002\u4efb\u4f55\u5305\u542b\u7248\u672c\u5316\u4e8b\u52a1\u7684\u533a\u5757\uff0c\u5728\u5b58\u5728\u4f20\u7edf\u4e8b\u52a1\u7684\u60c5\u51b5\u4e0b\u5c06\u8fd4\u56de\u5ba2\u6237\u7aef\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5411RPC\u7aef\u70b9\u53d1\u9001JSON\u683c\u5f0f\u7684\u8bf7\u6c42\u6765\u8bbe\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},'curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d \\\n\'{"jsonrpc": "2.0", "id":1, "method": "getBlock", "params": [430, {\n  "encoding":"json",\n  "maxSupportedTransactionVersion":0,\n  "transactionDetails":"full",\n  "rewards":false\n}]}\'\n')),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://solana-labs.github.io/solana-web3.js/"},(0,l.kt)("inlineCode",{parentName:"a"},"@solana/web3.js"))," \u5e93\u6267\u884c\u76f8\u540c\u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// connect to the `devnet` cluster and get the current `slot`\nconst connection = new web3.Connection(web3.clusterApiUrl("devnet"));\nconst slot = await connection.getSlot();\n\n// get the latest block (allowing for v0 transactions)\nconst block = await connection.getBlock(slot, {\n  maxSupportedTransactionVersion: 0,\n});\n\n// get a specific transaction (allowing for v0 transactions)\nconst getTx = await connection.getTransaction(\n  "3jpoANiFeVGisWRY5UP648xRXs3iQasCHABPWRWnoEjeA93nc79WrnGgpgazjq4K9m8g2NJoyKoWBV1Kx5VmtwHQ",\n  {\n    maxSupportedTransactionVersion: 0,\n  },\n);\n')),(0,l.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6599"},"\u5176\u4ed6\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/developing/versioned-transactions#how-create-a-versioned-transaction"},"\u5982\u4f55\u6784\u5efa\u4e00\u4e2a\u7248\u672c\u5316\u4e8b\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/developing/lookup-tables#how-to-create-an-address-lookup-table"},"\u5982\u4f55\u4f7f\u7528\u5730\u5740\u67e5\u627e\u8868\uff08LUTs\uff09\u6784\u5efa\u7248\u672c\u5316\u4e8b\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/proposals/transactions-v2#limitations"},"\u7248\u672c\u5316\u4ea4\u6613\u7684\u9650\u5236")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/proposals/transactions-v2#security-concerns"},"\u7248\u672c\u5316\u4ea4\u6613\u7684\u5b89\u5168\u6027\u95ee\u9898")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/proposals/transactions-v2#other-proposals"},"\u7248\u672c\u5316\u4ea4\u6613\u7684\u66ff\u4ee3\u6027\u89e3\u51b3\u65b9\u6848"))),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/proposals/transactions-v2"},"Transactions-V2 Proposal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://beta.docs.solana.com/developing/versioned-transactions"},"\u4f7f\u7528\u7248\u672c\u5316\u4ea4\u6613\u6765\u5f00\u53d1"))))}m.isMDXComponent=!0},26626:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/compact_array_format-41bcbdf960e17fed2b98f3c5832a699f.png"},63088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/compact_array_of_ixs-201628a7aee723375d064a2b2d745385.png"},48105:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/compact_array_of_luts-cb66f2b0c2650e412fd77350df1de71f.png"},7394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/compat_array_of_account_addresses-b8b5d163901ec827fb1fc906fef776f8.png"},31063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/issues_with_legacy_txs-f28750b1e34559b00b1dc16d609691f2.png"},73142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/legacy_message-aed7c404cdd19910e4ae61954759f768.png"},68041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lut_format-3da85f3d23e557ec5a26f6f49bd1a31c.png"},28902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/luts-62c0582d8889088c62f431e0592e0573.png"},77143:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/message_header-15b1fe85c80dbc8b638f5bef511d3f6e.png"},31111:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/messagev0-a9b3ca23f15cd11b81f953cf5e1e246a.png"},6137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new_compact_array_of_ixs-1489b0bfec17627d1eea0707f402cfeb.png"},59899:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx_format-70183895b5601d28d6bd2f93f60ce2f6.png"}}]);