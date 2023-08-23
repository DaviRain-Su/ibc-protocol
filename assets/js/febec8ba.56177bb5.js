"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[882],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,c=u["".concat(p,".").concat(d)]||u[d]||k[d]||i;return a?t.createElement(c,r(r({ref:n},m),{},{components:a})):t.createElement(c,r({ref:n},m))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4476:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=a(7462),l=(a(7294),a(3905));const i={sidebar_position:130,sidebar_label:"\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b",sidebar_class_name:"green"},r="\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b",o={unversionedId:"Solana-Bootcamp-zh/week4/cargo",id:"Solana-Bootcamp-zh/week4/cargo",title:"\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b",description:"cargo\u4f5c\u4e3arust\u7684\u5de5\u7a0b\u7ba1\u7406\u5de5\u5177\u3002\u7c7b\u4f3cgo\u8bed\u8a00\u7684gomod\u3002\u5176\u4e3b\u8981\u901a\u8fc7 Cargo.toml\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c \u914d\u5408cargo \u4e8c\u8fdb\u5236\u5de5\u5177\u6765\u7ba1\u7406\u4f9d\u8d56\u3002",source:"@site/docs/Solana-Bootcamp-zh/week4/cargo.md",sourceDirName:"Solana-Bootcamp-zh/week4",slug:"/Solana-Bootcamp-zh/week4/cargo",permalink:"/all-in-one-solana/docs/Solana-Bootcamp-zh/week4/cargo",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Bootcamp-zh/week4/cargo.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{sidebar_position:130,sidebar_label:"\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Rust\u57fa\u672c\u8bed\u6cd5",permalink:"/all-in-one-solana/docs/Solana-Bootcamp-zh/week4/rust-basic"},next:{title:"Rustaceans\u7684\u7406\u89e3",permalink:"/all-in-one-solana/docs/Solana-Bootcamp-zh/week4/rustaceans-understand"}},p={},s=[{value:"cargo\u547d\u4ee4",id:"cargo\u547d\u4ee4",level:2},{value:"\u521b\u5efa\u5de5\u7a0b",id:"\u521b\u5efa\u5de5\u7a0b",level:3},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u6784\u5efa &amp; \u6267\u884c",id:"\u6784\u5efa--\u6267\u884c",level:3},{value:"Cargo.toml\u7ed3\u6784",id:"cargotoml\u7ed3\u6784",level:2},{value:"\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784",id:"\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u53ef\u6267\u884c\u7a0b\u5e8f",id:"\u53ef\u6267\u884c\u7a0b\u5e8f",level:2},{value:"\u4f8b\u5b50\u7a0b\u5e8f",id:"\u4f8b\u5b50\u7a0b\u5e8f",level:2},{value:"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f",id:"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:s},u="wrapper";function k(e){let{components:n,...a}=e;return(0,l.kt)(u,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u901a\u8fc7cargo\u7ba1\u7406\u5de5\u7a0b"},"\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b"),(0,l.kt)("p",null,"cargo\u4f5c\u4e3arust\u7684\u5de5\u7a0b\u7ba1\u7406\u5de5\u5177\u3002\u7c7b\u4f3cgo\u8bed\u8a00\u7684gomod\u3002\u5176\u4e3b\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c \u914d\u5408cargo \u4e8c\u8fdb\u5236\u5de5\u5177\u6765\u7ba1\u7406\u4f9d\u8d56\u3002"),(0,l.kt)("p",null,"cargo\u5728\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"rustup"),"\u5b89\u88c5rust\u7684\u8fc7\u7a0b\u4e2d\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u5728\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"cargo new")," \u521b\u5efa\u5de5\u7a0b\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u751f\u6210\u3002"),(0,l.kt)("p",null,"\u5728\u6784\u5efa\u7684\u65f6\u5019\uff0ccargo \u4f1a\u6839\u636e",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u4e2d\u7684\u4f9d\u8d56\uff0c\u81ea\u52a8\u62c9\u53d6\u4f9d\u8d56\u7684\u4ee3\u7801\uff0c\u5e76\u5c06\u76f8\u5e94\u7684\u7248\u672c\u4fe1\u606f\uff0c\u8d44\u6e90\u7b7e\u540d\uff0c\u8bb0\u5f55\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.lock"),"\u6587\u4ef6\u4e2d\uff0c\u8be5\u6587\u4ef6\u7c7b\u4f3c",(0,l.kt)("inlineCode",{parentName:"p"},"go.sum"),"\u6587\u4ef6\uff0c\u8bb0\u5f55\u4e86\u5404\u4e2a\u4f9d\u8d56\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"meta"),"\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"cargo\u547d\u4ee4"},"cargo\u547d\u4ee4"),(0,l.kt)("h3",{id:"\u521b\u5efa\u5de5\u7a0b"},"\u521b\u5efa\u5de5\u7a0b"),(0,l.kt)("p",null,"\u9996\u5148\u901a\u8fc7cargo\u547d\u4ee4\uff0c\u53ef\u4ee5\u521b\u5efa\u5de5\u7a0b\u3002\u521b\u5efa\u7684\u5de5\u7a0b\u5206\u6210\u4e24\u7c7b\uff0c\u4e00\u7c7b\u662f\u5e93\uff0c\u4e00\u7c7b\u662f\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"cargo new project_name")," \u547d\u4ee4\u53ef\u4ee5\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"project_name"),"\u7684\u5de5\u7a0b\u3002\u9ed8\u8ba4\u5de5\u7a0b\u662f\u4e00\u4e2a\u53ef\u6267\u884c\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"--lib"),"\u53ef\u4ee5\u6307\u5b9a\u5176\u4e3a\u5e93\u9879\u76ee\u3002\u4e00\u4e2a\u5de5\u7a0b\uff0c\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u5e93\u76ee\u6807\uff0c\u4f46\u662f\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u3002"),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5f53\u9700\u8981\u4f9d\u8d56\u5916\u90e8\u5e93\u7684\u65f6\u5019\uff0c\u9996\u5148\u8981\u5c06\u5176\u52a0\u5165\u5230\u5de5\u7a0b\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo add [options] crate\u2026\n$ cargo add [options] --path path\n$ cargo add [options] --git url [crate\u2026]\n")),(0,l.kt)("p",null,"\u4e09\u79cd\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u9488\u5bf9\u4e09\u79cd\u60c5\u51b5\u7684\u4f9d\u8d56\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u8ddf\u5e93\u540d\uff0c\u4f1a\u53bb",(0,l.kt)("inlineCode",{parentName:"li"},"cargo.io"),"\u4e0a\u7d22\u5f15\uff0c\u627e\u5230\u6700\u65b0\u7684\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--path"),"\u6307\u5b9a\u5e93\u5728\u672c\u5730\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u5bf9\u672c\u5730\u76ee\u5f55\u8fdb\u884c\u4f9d\u8d56"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--git")," \u5219\u6307\u5b9a\u7684git\u4ed3\u5e93\u7684\u8def\u5f84\uff0c\u6bd4\u5982\u662f\u79c1\u6709\u7684git\u4ed3\u5e93")),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo remove")," \u53ef\u4ee5\u79fb\u9664\u76f8\u5173\u7684\u4f9d\u8d56\u3002"),(0,l.kt)("h3",{id:"\u6784\u5efa--\u6267\u884c"},"\u6784\u5efa & \u6267\u884c"),(0,l.kt)("p",null,"\u524d\u9762\u5df2\u7ecf\u63a5\u89e6\u4e86\u6784\u5efa\u3002\u76f4\u63a5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u5c31\u53ef\u4ee5\u4e86:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo build [options]\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u51e0\u4e2a\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--workspace"),"\uff1a \u6784\u5efa\u6574\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"workspace"),"\u91cc\u9762\u7684\u76ee\u6807"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--lib"),"\uff1a \u6784\u5efa\u5e93\u76ee\u6807"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--bin name\u2026"),"\uff1a \u53ea\u6784\u5efa\u6307\u5b9a\u7684\u53ef\u6267\u884c\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--example name\u2026"),"\uff1a \u53ea\u6784\u5efa\u6307\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"example")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--test name\u2026"),"\uff1a \u6784\u5efa\u6307\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--release"),": \u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"relase"),"\u6784\u5efa")),(0,l.kt)("p",null,"\u800c\u901a\u8fc7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo clean [options]\n")),(0,l.kt)("p",null,"\u5219\u53ef\u4ee5\u6e05\u9664\u6784\u5efa\u7ed3\u679c"),(0,l.kt)("p",null,"\u6267\u884c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"run"),"\u547d\u4ee4\u6765\u53d1\u8d77\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo run [options] [-- args]\n")),(0,l.kt)("p",null,"\u5176\u4e2d\u5982\u679c\u662f\u4f20\u9012\u7ed9cargo\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"flag"),'\u76f4\u63a5\u4f20\u5165\u3002\u5982\u679c\u8981\u4f20\u9012\u7ed9\u88ab\u6267\u884c\u7684\u7a0b\u5e8f\u3002\u5219\u9700\u8981\u4f7f\u7528 "',(0,l.kt)("inlineCode",{parentName:"p"},"--"),'" \u505a\u5206\u5272\u3002\u5176\u540e\u7684 ',(0,l.kt)("inlineCode",{parentName:"p"},"flag"),"\u624d\u662f\u4f20\u9012\u7ed9\u8981\u8fd0\u884c\u7684\u7a0b\u5e8f\u7684\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--bin name\u2026"),"\uff1a \u53ea\u6267\u884c\u6307\u5b9a\u7684\u53ef\u6267\u884c\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--example name\u2026"),"\uff1a \u53ea\u6267\u884c\u6307\u5b9a\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo run --bin helloworld\nFinished dev [unoptimized + debuginfo] target(s) in 0.04s\nRunning `target/debug/helloworld`\nPlease use ./hellowolrd name.\n")),(0,l.kt)("p",null,"\u6ca1\u6709\u643a\u5e26\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo run --bin helloworld -l\nerror: unexpected argument '-l' found\n\ntip: to pass '-l' as a value, use '-- -l'\n\nUsage: cargo run [OPTIONS] [args]...\n\nFor more information, try '--help'.\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u5b9e\u9645\u4e0a\u662f\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"-l"),"\u4f20\u9012\u7ed9\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"cargo run")," \uff0c\u4f46\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"cargo run"),'\u672c\u8eab\u662f\u4e0d\u63a5\u53d7"',(0,l.kt)("inlineCode",{parentName:"p"},"-l"),'"\u7684',(0,l.kt)("inlineCode",{parentName:"p"},"flag"),"\u7684\u3002\u6240\u4ee5\u8fd9\u91cc\u62a5\u9519\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --bin helloworld -- -l\n    Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n    Running `target/debug/helloworld -l`\nHello -l\n")),(0,l.kt)("p",null,'\u901a\u8fc7"',(0,l.kt)("inlineCode",{parentName:"p"},"--"),'"\u7684\u5206\u5272\uff0c\u6211\u4eec\u5c06',(0,l.kt)("inlineCode",{parentName:"p"},"flag"),"\u53c2\u6570\u8df3\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"cargo run"),"\u4f20\u9012\u7ed9\u53ef\u6267\u884c\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u5176\u4ed6\u53c2\u6570\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/"},"The Cargo Book")),(0,l.kt)("h2",{id:"cargotoml\u7ed3\u6784"},"Cargo.toml\u7ed3\u6784"),(0,l.kt)("p",null,"\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u5305\u542b\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[cargo-features]")," --- Unstable, nightly-only features."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[package]]")," --- Defines a package.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[name]")," --- The name of the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[version]")," --- The version of the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[authors]")," --- The authors of the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[edition]")," --- The Rust edition."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[rust-version]")," --- The minimal supported Rust version."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[description]")," --- A description of the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[documentation]")," --- URL of the package documentation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[readme]")," --- Path to the package's README file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[homepage]")," --- URL of the package homepage."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[repository]")," --- URL of the package source repository."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[license]")," --- The package license."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[license-file]")," --- Path to the text of the license."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[keywords]")," --- Keywords for the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[categories]")," --- Categories of the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[workspace]")," --- Path to the workspace for the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[build]")," --- Path to the package build script."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[links]")," --- Name of the native library the package links with."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[exclude]")," --- Files to exclude when publishing."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[include]")," --- Files to include when publishing."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[publish]")," --- Can be used to prevent publishing the package."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[metadata]")," --- Extra settings for external tools."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[default-run]")," --- The default binary to run by ","[cargo run]","."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[autobins]")," --- Disables binary auto discovery."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[autoexamples]")," --- Disables example auto discovery."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[autotests]")," --- Disables test auto discovery."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[autobenches]")," --- Disables bench auto discovery."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[resolver]")," --- Sets the dependency resolver to use."))),(0,l.kt)("li",{parentName:"ul"},"Target tables:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[lib]]")," --- Library target settings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[[bin]]]")," --- Binary target settings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[[example]]]")," --- Example target settings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[[test]]]")," --- Test target settings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[[bench]]]")," --- Benchmark target settings."))),(0,l.kt)("li",{parentName:"ul"},"Dependency tables:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[dependencies]]")," --- Package library dependencies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[dev-dependencies]]")," --- Dependencies for examples, tests, and benchmarks."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[build-dependencies]]")," --- Dependencies for build scripts."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[target]]")," --- Platform-specific dependencies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[badges]]")," --- Badges to display on a registry."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[features]]")," --- Conditional compilation features."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[patch]]")," --- Override dependencies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[replace]]")," --- Override dependencies ."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[profile]]")," --- Compiler settings and optimizations."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[[workspace]]")," --- The workspace definition.")),(0,l.kt)("p",null,"\u6574\u4e2a\u7684\u5b8c\u6574\u7684\u5185\u5bb9\u4f1a\u6bd4\u8f83\u591a\uff0c\u666e\u901a\u60c5\u51b5\u4e0b\u53ea\u9700\u8981\u4f7f\u7528\u9ed8\u8ba4\u751f\u6210\u7684\u6587\u4ef6\uff0c\u7136\u540e\u5728\u91cc\u9762\u586b\u5145dependence\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u5b9e\u8df5\uff0c\u4e00\u822c\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u5206\u6210\u4e24\u7c7b\u3002\u5bf9\u4e8e\u4e00\u4e2a\u5927repo\uff0c\u4f1a\u5c06\u6240\u6709\u7684\u4ee3\u7801\u653e\u5728\u4e00\u4e2a\u76ee\u5f55\u4e0b\u9762\uff0c\u901a\u8fc7\u4e00\u4e2a\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"p"},"workspace")," \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u6765\u7ba1\u7406\u5176\u4ed6\u81ea",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u3002\u7c7b\u4f3cMakefile\u7684\u5d4c\u5957\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982solana\u5de5\u7a0b\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[workspace]\n    members = [\n        "account-decoder",\n        "accounts-bench",\n        ...\n    ]\n\n\n    exclude = [\n        "programs/sbf",\n    ]\n\n    # This prevents a Travis CI error when building for Windows.\n    resolver = "2"\n\n    [workspace.package]\n    version = "1.17.0"\n    authors = ["Solana Labs Maintainers <maintainers@solanalabs.com>"]\n    repository = "https://github.com/solana-labs/solana"\n    homepage = "https://solanalabs.com/"\n    license = "Apache-2.0"\n    edition = "2021"\n\n    [workspace.dependencies]\n    aes-gcm-siv = "0.10.3"\n    ahash = "0.8.3"\n\n    ...\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u80fd\u770b\u5230\uff0c\u4e3b\u8981\u7ed3\u6784\u5c31\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"workspace.members"),"\u6765\u6307\u5b9a\u4e86\u5b50\u76ee\u5f55\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude"),"\u6307\u5b9a\u4e0d\u8981\u7684\u76ee\u5f55\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"workspace.dependencies"),"\u6307\u5b9a\u4e86\u6574\u4e2a\u5de5\u4f5c \u533a\u8981\u4f9d\u8d56\u7684\u5e93\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u5c31\u662f\u5177\u4f53\u7684\u6267\u884c\u7a0b\u5e8f\u6216\u8005\u5e93\u7684\u76ee\u5f55\uff0c\u4e5f\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"workspace"),"\u7ba1\u7406\u7684\u5177\u4f53\u5b50\u76ee\u5f55\uff0c\u8fd9\u91cc\u6bd4\u5982solana cli\u7684\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\n    name = "solana-cli"\n    description = "Blockchain, Rebuilt for Scale"\n    documentation = "https://docs.rs/solana-cli"\n    version = { workspace = true }\n    authors = { workspace = true }\n    repository = { workspace = true }\n    homepage = { workspace = true }\n    license = { workspace = true }\n    edition = { workspace = true }\n\n    [dependencies]\n    bincode = { workspace = true }\n    bs58 = { workspace = true }\n    ...\n\n    [dev-dependencies]\n    solana-streamer = { workspace = true }\n    solana-test-validator = { workspace = true }\n    tempfile = { workspace = true }\n\n    [[bin]]\n    name = "solana"\n    path = "src/main.rs"\n\n    [package.metadata.docs.rs]\n    targets = ["x86_64-unknown-linux-gnu"]\n')),(0,l.kt)("p",null,"\u8fd9\u91cc",(0,l.kt)("inlineCode",{parentName:"p"},"package"),"\u4e0b\u9762\u7684\u952e\u6307\u5b9a\u4e86\u5e93\u7684\u5c5e\u6027\uff0c\u6bd4\u5982\u540d\u5b57\uff0c\u63cf\u8ff0\u3002\u800c",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"\u6307\u5b9a\u4e86\u4f9d\u8d56\uff0c \u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"{ workspace = true } "),"\u8868\u793a\u5176\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"p"},"workspace"),"\u7236\u76ee\u5f55\u4e2d\u7684 \u76f8\u5173\u4f4d\u7f6e\u7248\u672c\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u6700\u540e\u8fd9\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"[[bin]]"),'\u5b9a\u4e49\u4e86\u8fd9\u91cc\u6709\u4e2a\u53ef\u6267\u884c\u7a0b\u5e8f\u53eb: "solana"'),(0,l.kt)("h2",{id:"\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784"},"\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("p",null,"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u76f8\u5bf9\u590d\u6742\u7684cargo\u5de5\u7a0b\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 examples\n\u2502   \u251c\u2500\u2500 example01.rs\n\u2502   \u2514\u2500\u2500 example_files\n\u2502       \u251c\u2500\u2500 func.rs\n\u2502       \u2514\u2500\u2500 main.rs\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 bin\n\u2502   \u2502   \u251c\u2500\u2500 bin1.rs\n\u2502   \u2502   \u2514\u2500\u2500 bin2.rs\n\u2502   \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 test01.rs\n    \u2514\u2500\u2500 test_files\n        \u251c\u2500\u2500 func.rs\n        \u2514\u2500\u2500 main.rs\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"demo"),"\u91cc\u9762\uff0c\u6211\u4eec\u4e3b\u8981\u5305\u542b\u4e86 \u4e09\u4e2a\u76ee\u5f55\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"src"),": \u5e93\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"example"),": \u4f8b\u5b50"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tests"),": \u96c6\u6210\u6d4b\u8bd5")),(0,l.kt)("h2",{id:"\u53ef\u6267\u884c\u7a0b\u5e8f"},"\u53ef\u6267\u884c\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u53ef\u6267\u884c\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u5c06\u5176\u653e\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"src/bin"),"\u76ee\u5f55\u4e0b\u3002\u6bcf\u4e2a\u6587\u4ef6\u53ef\u4ee5\u6709\u81ea\u5df1\u5355\u72ec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\u3002\u6bd4\u5982\u8fd9\u91cc\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'// bin1.rs:\nuse cargodir::lib_func;\n\n\nfn main() {\n    lib_func();\n    println!("it is bin1");\n}\n')),(0,l.kt)("p",null,"\u4f7f\u7528\u5230\u7684\u5e93\u51fd\u6570\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"lib.rs"),"\u4e2d\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn lib_func() {\n    println!("lib_func");\n}\n')),(0,l.kt)("p",null,"\u4f46\u662f\u5728\u53ef\u6267\u884c\u7a0b\u5e8f\u6587\u4ef6\u4e2d\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"use"),"\u6765\u5305\u542b\uff0c\u7136\u540e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\u4e2d\u8c03\u7528\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u662f\u6309\u7167",(0,l.kt)("inlineCode",{parentName:"p"},"src/bin"),"\u76ee\u5f55\u6765\u7ec4\u7ec7\u4ee3\u7801\u7684\uff0c\u9700\u8981\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"\u4e2d\u8fdb\u884c\u6307\u5b9a\uff0c\u6bd4\u5982\u7528cli\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[[bin]]\n    name = "bin1"\n    path = "src/cli/bin1.rs"\n\n    [[bin]]\n    name = "bin2"\n    path = "src/cli/bin2.rs"\n')),(0,l.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7--bin\u6765\u6307\u5b9a\u8981\u6267\u884c\u54ea\u4e2aname\u7684\u53ef\u6267\u884c\u7a0b\u5e8f\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --bin bin1\n    Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n    Running `target/debug/bin1`\nlib_func\nit is bin1\n")),(0,l.kt)("h2",{id:"\u4f8b\u5b50\u7a0b\u5e8f"},"\u4f8b\u5b50\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u793a\u4f8b\u7a0b\u5e8f\u53ef\u4ee5\u901a",(0,l.kt)("inlineCode",{parentName:"p"},"examples"),"\u76ee\u5f55\u6765\u7ba1\u7406\u3002\u5176\u4e2d\u53ef\u4ee5\u662f\u5355\u4e2a\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e00\u4e2a\u76ee\u5f55\u6765\u7ec4\u7ec7\u591a\u4e2a\u6587\u4ef6\u3002\u5355\u4e2a\u6587\u4ef6\u548c\u76ee\u5f55\u4e2d\u90fd\u53ef\u4ee5\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\u4f5c\u4e3a\u793a\u4f8b\u7a0b\u5e8f\u7684\u5165\u53e3\uff1a"),(0,l.kt)("p",null,"\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"example01.rs"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    println!("it is example 01 ");\n}\n')),(0,l.kt)("p",null,"\u8fd9\u6837\u53ea\u8981\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example example01\nCompiling cargodir v0.1.0 (Solana-Asia-Summer-2023/s101/Solana-Rust/demo/cargodir)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.20s\n    Running `target/debug/examples/example01`\nit is example 01\n")),(0,l.kt)("h2",{id:"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f"},"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u5355\u5143\u6d4b\u8bd5\u662f\u653e\u5728\u5b9e\u73b0\u6587\u4ef6\u4e2d\u7684\uff0c\u5982\u679c\u6709\u96c6\u6210\u6d4b\u8bd5\uff0c\u5219\u53ef\u4ee5\u7c7b\u4f3c\u4f8b\u5b50\u4e00\u6837\uff0c\u7ec4\u7ec7\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"tests"),"\u76ee\u5f55\u4e2d\u3002\u4e00\u6837\u53ef\u4ee5\u5355\u4e2a\u6587\u4ef6\u6216\u8005\u591a\u4e2a\u6587\u4ef6\u653e\u5728\u4e00\u4e2a\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"test01.rs"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'#[test]\n    fn test_main() {\n        println!("it is test 01");\n    }\n')),(0,l.kt)("p",null,"\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test --test test01\n    Compiling cargodir v0.1.0 (Solana-Asia-Summer-2023/s101/Solana-Rust/demo/cargodir)\n        Finished test [unoptimized + debuginfo] target(s) in 0.22s\n        Running tests/test01.rs (target/debug/deps/test01-de791c18df3f4346)\n\n    running 1 test\n    test test_main ... ok\n\n    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n")),(0,l.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/"},"The Cargo Book")))}k.isMDXComponent=!0}}]);