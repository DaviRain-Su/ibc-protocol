"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[229],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:84,sidebar_label:"\u4f7f\u7528Anchor PDA\u6784\u5efa",sidebar_class_name:"green"},o="\u4f7f\u7528Anchor PDA\u8fdb\u884c\u6784\u5efa",l={unversionedId:"Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/README",id:"Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/README",title:"\u4f7f\u7528Anchor PDA\u8fdb\u884c\u6784\u5efa",description:"\u5728\u6df1\u5165\u8ba8\u8bbaCPI\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u5c55\u793a\u4e00\u4e0b\u8fd9\u4e9bPDA\u7684\u9b45\u529b\u5427\uff01\ud83c\udfb8",source:"@site/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/README.md",sourceDirName:"Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas",slug:"/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/edit/main/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/README.md",tags:[],version:"current",sidebarPosition:84,frontMatter:{sidebar_position:84,sidebar_label:"\u4f7f\u7528Anchor PDA\u6784\u5efa",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee3 Anchor\u4e2d\u7684PDA",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/pdas-in-anchor/"},next:{title:"\ud83d\udd00 Anchor\u7684CPIs",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/"}},p={},u=[{value:"\u8bbe\u7f6e\u6d41\u7a0b",id:"\u8bbe\u7f6e\u6d41\u7a0b",level:2},{value:"\ud83c\udfa5 \u7535\u5f71\u8d26\u6237\u72b6\u6001\uff08MovieAccountState\uff09",id:"-\u7535\u5f71\u8d26\u6237\u72b6\u6001movieaccountstate",level:2},{value:"\ud83c\udfac \u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba",id:"-\u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba",level:2},{value:"\ud83c\udf9e \u66f4\u65b0\u7535\u5f71\u8bc4\u8bba",id:"-\u66f4\u65b0\u7535\u5f71\u8bc4\u8bba",level:2},{value:"\u274c \u5173\u95ed\u7535\u5f71\u8bc4\u8bba",id:"-\u5173\u95ed\u7535\u5f71\u8bc4\u8bba",level:2},{value:"\ud83d\udea2 \u6311\u6218\uff08\u8fd9\u90e8\u5206\u5185\u5bb9\u548cbuild with solana Framework\u7684\u5185\u5bb9\u91cd\u590d\u4e86\uff09",id:"-\u6311\u6218\u8fd9\u90e8\u5206\u5185\u5bb9\u548cbuild-with-solana-framework\u7684\u5185\u5bb9\u91cd\u590d\u4e86",level:2}],c={toc:u},m="wrapper";function s(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4f7f\u7528anchor-pda\u8fdb\u884c\u6784\u5efa"},"\u4f7f\u7528Anchor PDA\u8fdb\u884c\u6784\u5efa"),(0,i.kt)("p",null,"\u5728\u6df1\u5165\u8ba8\u8bba",(0,i.kt)("inlineCode",{parentName:"p"},"CPI"),"\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u5c55\u793a\u4e00\u4e0b\u8fd9\u4e9b",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\u7684\u9b45\u529b\u5427\uff01\ud83c\udfb8"),(0,i.kt)("p",null,"\u6211\u4eec\u5c06\u5229\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u6846\u67b6\u521b\u5efa\u4e00\u4e2a\u7535\u5f71\u8bc4\u8bba\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null,"\u8be5\u7a0b\u5e8f\u5c06\u8ba9\u7528\u6237\u80fd\u591f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"PDA"),"\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684\u7535\u5f71\u8bc4\u8bba\u8d26\u6237\uff0c\u7528\u4e8e\u5b58\u653e\u8bc4\u8bba"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u73b0\u6709\u7535\u5f71\u8bc4\u8bba\u8d26\u6237\u4e2d\u7684\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u5173\u95ed\u73b0\u6709\u7684\u7535\u5f71\u8bc4\u8bba\u8d26\u6237")),(0,i.kt)("h2",{id:"\u8bbe\u7f6e\u6d41\u7a0b"},"\u8bbe\u7f6e\u6d41\u7a0b"),(0,i.kt)("p",null,"\u8bf7\u8bbf\u95ee",(0,i.kt)("a",{parentName:"p",href:"https://beta.solpg.io/?utm_source=buildspace.so&utm_medium=buildspace_project"},"https://beta.solpg.io/"),"\uff0c\u5982\u679c\u4f60\u8fd8\u6ca1\u6709SolPG\u94b1\u5305\uff0c\u8bf7\u6309\u7167\u63d0\u793a\u521b\u5efa\u4e00\u4e2a\u3002\u7136\u540e\uff0c\u5c06",(0,i.kt)("a",{parentName:"p",href:"https://lib.rs/?utm_source=buildspace.so&utm_medium=buildspace_project"},"lib.rs"),"\u4e2d\u7684\u9ed8\u8ba4\u4ee3\u7801\u66ff\u6362\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\n\ndeclare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");\n\n#[program]\npub mod movie_review {\n    use super::*;\n\n}\n')),(0,i.kt)("h2",{id:"-\u7535\u5f71\u8d26\u6237\u72b6\u6001movieaccountstate"},"\ud83c\udfa5 \u7535\u5f71\u8d26\u6237\u72b6\u6001\uff08MovieAccountState\uff09"),(0,i.kt)("p",null,"\u6211\u4eec\u9996\u5148\u8981\u505a\u7684\u662f\u5b9a\u4e49",(0,i.kt)("inlineCode",{parentName:"p"},"State"),"\u8d26\u6237\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use anchor_lang::prelude::*;\n\ndeclare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");\n\n#[program]\npub mod movie_review {\n    use super::*;\n\n}\n\n#[account]\npub struct MovieAccountState {\n    pub reviewer: Pubkey,    // \u8bc4\u8bba\u8005\n    pub rating: u8,          // \u8bc4\u5206\n    pub title: String,       // \u6807\u9898\n    pub description: String, // \u63cf\u8ff0\n}\n')),(0,i.kt)("p",null,"\u6bcf\u4e2a\u7535\u5f71\u8bc4\u8bba\u8d26\u6237\u5c06\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reviewer")," - \u8fdb\u884c\u8bc4\u8bba\u7684\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rating")," - \u5bf9\u7535\u5f71\u7684\u8bc4\u5206"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," - \u7535\u5f71\u7684\u6807\u9898"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," - \u8bc4\u8bba\u7684\u5177\u4f53\u5185\u5bb9")),(0,i.kt)("p",null,"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u4e00\u5207\u90fd\u76f8\u5f53\u7b80\u6d01\u660e\u4e86\uff01"),(0,i.kt)("h2",{id:"-\u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba"},"\ud83c\udfac \u6dfb\u52a0\u7535\u5f71\u8bc4\u8bba"),(0,i.kt)("p",null,"\u611f\u8c22 ",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor")," \u7684\u4fbf\u5229\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u8df3\u8fc7\u6240\u6709\u7684\u9a8c\u8bc1\u548c\u5b89\u5168\u68c0\u67e5\uff0c\u76f4\u63a5\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"add_movie_review"),"\u529f\u80fd\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\npub mod movie_review{\n    use super::*;\n\n    pub fn add_movie_review(\n        ctx: Context<AddMovieReview>,\n        title: String,\n        description: String,\n        rating: u8,\n    ) -> Result<()> {\n        msg!("\u521b\u5efa\u4e86\u7535\u5f71\u8bc4\u8bba\u8d26\u6237");\n        msg!("\u6807\u9898\uff1a{}", title);\n        msg!("\u63cf\u8ff0\uff1a{}", description);\n        msg!("\u8bc4\u5206\uff1a{}", rating);\n\n        let movie_review = &mut ctx.accounts.movie_review;\n        movie_review.reviewer = ctx.accounts.initializer.key();\n        movie_review.title = title;\n        movie_review.rating = rating;\n        movie_review.description = description;\n        Ok(())\n    }\n}\n\n...\n')),(0,i.kt)("p",null,"\u8fd9\u4e9b\u64cd\u4f5c\u5bf9\u4f60\u5e94\u8be5\u4e0d\u964c\u751f\u2014\u2014\u8fd9\u53ea\u662f\u6211\u4eec\u6784\u5efa\u7684\u672c\u5730\u7535\u5f71\u8bc4\u8bba\u7a0b\u5e8f\u7684\u7cbe\u7b80\u7248\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u4e3a\u6b64\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\npub mod movie_review {\n    use super::*;\n\n        ...\n}\n\n#[derive(Accounts)]\n#[instruction(title: String, description: String)]\npub struct AddMovieReview<'info> {\n    #[account(\n        init,\n        seeds = [title.as_bytes(), initializer.key().as_ref()],\n        bump,\n        payer = initializer,\n        space = 8 + 32 + 1 + 4 + title.len() + 4 + description.len()\n    )]\n    pub movie_review: Account<'info, MovieAccountState>,\n    #[account(mut)]\n    pub initializer: Signer<'info>,\n    pub system_program: Program<'info, System>,\n}\n\n...\n")),(0,i.kt)("p",null,"\u518d\u6b21\u5f3a\u8c03\uff0c\u6211\u4eec\u6b63\u4ee5\u4e0e\u672c\u5730\u64cd\u4f5c\u5b8c\u5168\u76f8\u540c\u7684\u65b9\u5f0f\u8fdb\u884c\u64cd\u4f5c\uff0c\u4f46\u8fd9\u6b21\u6211\u4eec\u53ef\u4ee5\u501f\u52a9",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u7684\u529b\u91cf\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u6b63\u5728\u4f7f\u7528\u4e24\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"seeds"),"\u6765\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"movie_review"),"\u8d26\u6237\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title")," - \u6307\u4ee4\u6570\u636e\u4e2d\u7684\u7535\u5f71\u6807\u9898"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initializer.key()")," - \u521b\u5efa\u7535\u5f71\u8bc4\u8bba\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"initializer"),"\u7684\u516c\u94a5")),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u6839\u636e",(0,i.kt)("inlineCode",{parentName:"p"},"space"),"\u8d26\u6237\u7c7b\u578b\u7684\u7ed3\u6784\u5c06\u8d44\u91d1\u5206\u914d\u5230\u65b0\u8d26\u6237\u4e2d\u3002"),(0,i.kt)("h2",{id:"-\u66f4\u65b0\u7535\u5f71\u8bc4\u8bba"},"\ud83c\udf9e \u66f4\u65b0\u7535\u5f71\u8bc4\u8bba"),(0,i.kt)("p",null,"\u6ca1\u6709\u5fc5\u8981\u5bf9\u8fd9\u4e2a\u5c0f\u7a0b\u5e8f\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5b8c\u6210\u5b83\uff01\u4e0b\u9762\u662f\u66f4\u65b0\u51fd\u6570\u7684\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\npub mod movie_review {\n    use super::*;\n\n        ...\n\n    pub fn update_movie_review(\n        ctx: Context<UpdateMovieReview>,\n        title: String,\n        description: String,\n        rating: u8,\n    ) -> Result<()> {\n        msg!("\u6b63\u5728\u66f4\u65b0\u7535\u5f71\u8bc4\u8bba\u8d26\u6237");\n        msg!("\u6807\u9898\uff1a{}", title);\n        msg!("\u63cf\u8ff0\uff1a{}", description);\n        msg!("\u8bc4\u5206\uff1a{}", rating);\n\n        let movie_review = &mut ctx.accounts.movie_review;\n        movie_review.rating = rating;\n        movie_review.description = description;\n\n        return Ok(());\n    }\n\n}\n\n...\n')),(0,i.kt)("p",null,"\u6570\u636e\u53c2\u6570\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"add_movie_review"),"\u76f8\u540c\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u6211\u4eec\u4f20\u5165\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),"\u3002\u73b0\u5728\u6211\u4eec\u6765\u5b9a\u4e49\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\npub mod movie_review {\n    use super::*;\n\n        ...\n}\n\n#[derive(Accounts)]\n#[instruction(title: String, description: String)]\npub struct UpdateMovieReview<'info> {\n    #[account(\n        mut,\n        seeds = [title.as_bytes(), initializer.key().as_ref()],\n        bump,\n        realloc = 8 + 32 + 1 + 4 + title.len() + 4 + description.len(),\n        realloc::payer = initializer,\n        realloc::zero = true,\n    )]\n    pub movie_review: Account<'info, MovieAccountState>,\n    #[account(mut)]\n    pub initializer: Signer<'info>,\n    pub system_program: Program<'info, System>,\n}\n\n...\n")),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"seeds"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\u7ea6\u675f\u6765\u9a8c\u8bc1",(0,i.kt)("inlineCode",{parentName:"p"},"movie_review"),"\u8d26\u6237\u3002\u7531\u4e8e\u53ef\u80fd\u4f1a\u6709\u7a7a\u95f4\u7684\u53d8\u5316\uff0c\u6240\u4ee5\u6211\u4eec\u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"realloc"),"\u7ea6\u675f\uff0c\u8ba9",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u6839\u636e\u66f4\u65b0\u540e\u7684\u63cf\u8ff0\u957f\u5ea6\u6765\u81ea\u52a8\u5904\u7406\u8d26\u6237\u7a7a\u95f4\u548c\u79df\u91d1\u7684\u91cd\u65b0\u5206\u914d\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"realloc::payer"),"\u7ea6\u675f\u89c4\u5b9a\u4e86\u6240\u9700\u7684\u989d\u5916",(0,i.kt)("inlineCode",{parentName:"p"},"lamports"),"\u5c06\u6765\u81ea\u6216\u53d1\u9001\u5230\u521d\u59cb\u5316\u8d26\u6237\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"realloc::zero"),"\u7ea6\u675f\u88ab\u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"movie_review"),"\u8d26\u6237\u53ef\u80fd\u4f1a\u591a\u6b21\u66f4\u65b0\uff0c\u65e0\u8bba\u662f\u7f29\u5c0f\u8fd8\u662f\u6269\u5927\u5206\u914d\u7ed9\u8be5\u8d26\u6237\u7684\u7a7a\u95f4\u90fd\u53ef\u4ee5\u7075\u6d3b\u5e94\u5bf9\u3002"),(0,i.kt)("h2",{id:"-\u5173\u95ed\u7535\u5f71\u8bc4\u8bba"},"\u274c \u5173\u95ed\u7535\u5f71\u8bc4\u8bba"),(0,i.kt)("p",null,"\u6700\u540e\u4e00\u90e8\u5206\u662f\u5b9e\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"close"),"\u6307\u4ee4\uff0c\u7528\u4ee5\u5173\u95ed\u5df2\u5b58\u5728\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"movie_review"),"\u8d26\u6237\u3002\u6211\u4eec\u53ea\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),"\u7c7b\u578b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Close"),"\uff0c\u4e0d\u9700\u8981\u5176\u4ed6\u4efb\u4f55\u6570\u636e\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\npub mod movie_review {\n    use super::*;\n\n        ...\n\n    pub fn close(_ctx: Context<Close>) -> Result<()> {\n        Ok(())\n    }\n\n}\n\n...\n")),(0,i.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e2a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Context"),"\u5b9a\u4e49\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\npub mod movie_review {\n    use super::*;\n\n        ...\n}\n\n#[derive(Accounts)]\npub struct Close<'info> {\n    #[account(mut, close = reviewer, has_one = reviewer)]\n    movie_review: Account<'info, MovieAccountState>,\n    #[account(mut)]\n    reviewer: Signer<'info>,\n}\n\n...\n")),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"close"),"\u7ea6\u675f\u6765\u6307\u660e\u6211\u4eec\u8981\u5173\u95ed\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"movie_review"),"\u8d26\u6237\uff0c\u5e76\u4e14\u79df\u91d1\u5e94\u9000\u8fd8\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"reviewer"),"\u8d26\u6237\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"has_one"),"\u7ea6\u675f\u7528\u4e8e\u9650\u5236\u5173\u95ed\u8d26\u6237\u64cd\u4f5c - ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewer"),"\u8d26\u6237\u5fc5\u987b\u4e0e\u7535\u5f71\u8bc4\u8bba\u8d26\u6237\u4e0a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"reviewer"),"\u76f8\u5339\u914d\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5b8c\u6210\u4e86\uff01\u8bd5\u4e00\u4e0b\uff0c\u5b83\u5e94\u8be5\u4f1a\u50cf\u4e4b\u524d\u7684\u672c\u5730\u7535\u5f71\u8bc4\u8bba\u7a0b\u5e8f\u4e00\u6837\u8fd0\u884c\u3002\u5982\u679c\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u4e0e",(0,i.kt)("a",{parentName:"p",href:"https://beta.solpg.io/631b39c677ea7f12846aee8c?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u6b64\u5904"),"\u7684\u89e3\u51b3\u65b9\u6848\u4ee3\u7801\u8fdb\u884c\u5bf9\u6bd4 :)"),(0,i.kt)("h2",{id:"-\u6311\u6218\u8fd9\u90e8\u5206\u5185\u5bb9\u548cbuild-with-solana-framework\u7684\u5185\u5bb9\u91cd\u590d\u4e86"},"\ud83d\udea2 \u6311\u6218\uff08\u8fd9\u90e8\u5206\u5185\u5bb9\u548cbuild with solana Framework\u7684\u5185\u5bb9\u91cd\u590d\u4e86\uff09"),(0,i.kt)("p",null,"\u73b0\u5728\u8f6e\u5230\u4f60\u4eb2\u81ea\u6784\u5efa\u4e00\u4e9b\u5185\u5bb9\u4e86\u3002\u7531\u4e8e\u6211\u4eec\u4ece\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u7a0b\u5e8f\u5f00\u59cb\uff0c\u4f60\u6240\u521b\u5efa\u7684\u7a0b\u5e8f\u5c06\u4e0e\u6211\u4eec\u521a\u521a\u521b\u5efa\u7684\u7a0b\u5e8f\u51e0\u4e4e\u5b8c\u5168\u76f8\u540c\u3002\u8bf7\u5c3d\u91cf\u4e0d\u8981\u5728\u8fd9\u91cc\u590d\u5236\u7c98\u8d34\uff0c\u52aa\u529b\u8fbe\u5230\u80fd\u591f\u72ec\u7acb\u7f16\u5199\u4ee3\u7801\u7684\u7a0b\u5ea6\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7f16\u5199\u4e00\u4e2a\u65b0\u7a0b\u5e8f\uff0c\u521d\u59cb\u5316\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"counter"),"\u8d26\u6237\uff0c\u5e76\u4f7f\u7528\u4f20\u5165\u6307\u4ee4\u6570\u636e\u53c2\u6570\u6765\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"count"),"\u5b57\u6bb5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"initialize"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"increment"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"decrement"),"\u6307\u4ee4\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6309\u7167\u6211\u4eec\u5728\u6f14\u793a\u4e2d\u7684\u505a\u6cd5\uff0c\u4e3a\u6bcf\u4e2a\u6307\u4ee4\u7f16\u5199\u6d4b\u8bd5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"anchor deploy"),"\u6765\u90e8\u7f72\u4f60\u7684\u7a0b\u5e8f\u3002\u5982\u679c\u4f60\u613f\u610f\uff0c\u4f60\u53ef\u4ee5\u50cf\u4e4b\u524d\u90a3\u6837\u7f16\u5199\u4e00\u4e2a\u811a\u672c\u6765\u53d1\u9001\u4ea4\u6613\u5230\u4f60\u65b0\u90e8\u7f72\u7684\u7a0b\u5e8f\uff0c\u7136\u540e\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"Solana Explorer"),"\u6765\u67e5\u770b\u7a0b\u5e8f\u65e5\u5fd7\u3002")),(0,i.kt)("p",null,"\u50cf\u5f80\u5e38\u4e00\u6837\uff0c\u5bf9\u8fd9\u4e9b\u6311\u6218\u5145\u6ee1\u521b\u610f\uff0c\u8d85\u8d8a\u57fa\u672c\u6307\u793a\uff0c\u5982\u679c\u4f60\u613f\u610f\uff0c\u53ef\u4ee5\u53d1\u6325\u4f60\u7684\u60f3\u8c61\u529b\uff01"),(0,i.kt)("p",null,"\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff0c\u8bf7\u5c3d\u91cf\u72ec\u7acb\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\uff01\u4f46\u5982\u679c\u9047\u5230\u56f0\u96be\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/anchor-counter-program/tree/solution-decrement?utm_source=buildspace.so&utm_medium=buildspace_project"},"\u8fd9\u4e2a\u5b58\u50a8\u5e93"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"solution-decrement"),"\u5206\u652f\u3002"))}s.isMDXComponent=!0}}]);