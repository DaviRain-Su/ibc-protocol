"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[4931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(t),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(b,l(l({ref:n},u),{},{components:t})):a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),o=t(74866),l=t(85162);const c={title:"\u8d26\u6237",sidebar_position:18,tags:["solana-cook-book","transactions"]},s="\u8d26\u6237",i={unversionedId:"references/accounts",id:"references/accounts",title:"\u8d26\u6237",description:"\u5982\u4f55\u521b\u5efa\u7cfb\u7edf\u8d26\u6237",source:"@site/docs/cookbook-zh/references/accounts.mdx",sourceDirName:"references",slug:"/references/accounts",permalink:"/cookbook-zh/references/accounts",draft:!1,editUrl:"https://github.com/CreatorsDAO/all-in-one-solana/tree/main/docs/cookbook-zh/references/accounts.mdx",tags:[{label:"solana-cook-book",permalink:"/cookbook-zh/tags/solana-cook-book"},{label:"transactions",permalink:"/cookbook-zh/tags/transactions"}],version:"current",lastUpdatedBy:"Davirain",lastUpdatedAt:1696133130,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:18,frontMatter:{title:"\u8d26\u6237",sidebar_position:18,tags:["solana-cook-book","transactions"]},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u4ea4\u6613",permalink:"/cookbook-zh/references/basic-transactions"},next:{title:"\u7f16\u5199\u7a0b\u5e8f",permalink:"/cookbook-zh/references/programs"}},u={},p=[{value:"\u5982\u4f55\u521b\u5efa\u7cfb\u7edf\u8d26\u6237",id:"\u5982\u4f55\u521b\u5efa\u7cfb\u7edf\u8d26\u6237",level:2},{value:"\u5982\u4f55\u8ba1\u7b97\u8d26\u6237\u8d39\u7528",id:"\u5982\u4f55\u8ba1\u7b97\u8d26\u6237\u8d39\u7528",level:2},{value:"\u5982\u4f55\u4f7f\u7528\u79cd\u5b50\u521b\u5efa\u8d26\u6237",id:"\u5982\u4f55\u4f7f\u7528\u79cd\u5b50\u521b\u5efa\u8d26\u6237",level:2},{value:"\u751f\u6210",id:"\u751f\u6210",level:3},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:3},{value:"\u8f6c\u8d26",id:"\u8f6c\u8d26",level:3},{value:"\u5982\u4f55\u521b\u5efaPDA",id:"\u5982\u4f55\u521b\u5efapda",level:2},{value:"\u751f\u6210\u4e00\u4e2aPDA",id:"\u751f\u6210\u4e00\u4e2apda",level:3},{value:"\u521b\u5efa\u4e00\u4e2aPDA",id:"\u521b\u5efa\u4e00\u4e2apda",level:3},{value:"\u5982\u4f55\u4f7f\u7528PDA\u7b7e\u540d",id:"\u5982\u4f55\u4f7f\u7528pda\u7b7e\u540d",level:2},{value:"\u5982\u4f55\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237",id:"\u5982\u4f55\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237",level:2},{value:"\u5982\u4f55\u5173\u95ed\u8d26\u6237",id:"\u5982\u4f55\u5173\u95ed\u8d26\u6237",level:2},{value:"\u5982\u4f55\u83b7\u53d6\u8d26\u6237\u4f59\u989d",id:"\u5982\u4f55\u83b7\u53d6\u8d26\u6237\u4f59\u989d",level:2}],m={toc:p},d="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8d26\u6237"},"\u8d26\u6237"),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u7cfb\u7edf\u8d26\u6237"},"\u5982\u4f55\u521b\u5efa\u7cfb\u7edf\u8d26\u6237"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u7531",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/javascript-reference#systemprogram"},"\u7cfb\u7edf\u7a0b\u5e8f")," \u62e5\u6709\u7684\u8d26\u6237\u3002Solana\u8fd0\u884c\u65f6\u5c06\u6388\u4e88\u8d26\u6237\u7684\u6240\u6709\u8005\u5bf9\u5176\u6570\u636e\u7684\u5199\u5165\u6743\u9650\u6216\u8f6c\u79fbLamports\u7684\u8bbf\u95ee\u6743\u9650\u3002\u5728\u521b\u5efa\u8d26\u6237\u65f6\uff0c\u6211\u4eec\u9700\u8981\u9884\u5148\u5206\u914d\u4e00\u5b9a\u5927\u5c0f\u7684\u5b58\u50a8\u7a7a\u95f4\uff08space\uff09\u548c\u8db3\u591f\u7684Lamports\u6765\u652f\u4ed8\u79df\u91d1\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/accounts#rent"},"\u79df\u91d1\uff08Rent\uff09")," \u662f\u5728Solana\u4e0a\u4fdd\u6301\u8d26\u6237\u6d3b\u8dc3\u6240\u9700\u652f\u4ed8\u7684\u8d39\u7528\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const createAccountParams = {\n  fromPubkey: fromPubkey.publicKey,\n  newAccountPubkey: newAccountPubkey.publicKey,\n  lamports: rentExemptionAmount,\n  space,\n  programId: SystemProgram.programId,\n};\n\nconst createAccountTransaction = new Transaction().add(\n  SystemProgram.createAccount(createAccountParams)\n);\n\nawait sendAndConfirmTransaction(connection, createAccountTransaction, [\n  fromPubkey,\n  newAccountPubkey,\n]);\n"))),(0,r.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let create_account_ix = system_instruction::create_account(\n    &from_pubkey,\n    &new_account_pubkey,\n    rent_exemption_amount,\n    space as u64,\n    &from_pubkey,\n);\n\nlet (recent_blockhash, _) = connection.get_recent_blockhash().unwrap();\n\nlet create_account_tx = solana_sdk::transaction::Transaction::new_signed_with_payer(\n    &[create_account_ix],\n    Some(&from_pubkey),\n    &[&from_keypair, &new_account_keypair],\n    recent_blockhash,\n);\n\nmatch connection.send_and_confirm_transaction(&create_account_tx) {\n    Ok(sig) => loop {\n        if let Ok(confirmed) = connection.confirm_transaction(&sig) {\n            if confirmed {\n                println!("Transaction: {} Status: {}", sig, confirmed);\n                break;\n            }\n        }\n    },\n    Err(_) => println!("Error creating system account"),\n};\n')))),(0,r.kt)("h2",{id:"\u5982\u4f55\u8ba1\u7b97\u8d26\u6237\u8d39\u7528"},"\u5982\u4f55\u8ba1\u7b97\u8d26\u6237\u8d39\u7528"),(0,r.kt)("p",null,"\u5728Solana\u4e0a\u4fdd\u6301\u8d26\u6237\u6d3b\u8dc3\u4f1a\u4ea7\u751f\u4e00\u9879\u5b58\u50a8\u8d39\u7528\uff0c\u79f0\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/accounts#rent"},"\u79df\u91d1/rent"),"\u3002\u901a\u8fc7\u5b58\u5165\u81f3\u5c11\u4e24\u5e74\u79df\u91d1\u7684\u91d1\u989d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u8d26\u6237\u5b8c\u5168\u514d\u9664\u79df\u91d1\u6536\u53d6\u3002\u5bf9\u4e8e\u8d39\u7528\u7684\u8ba1\u7b97\uff0c\u4f60\u9700\u8981\u8003\u8651\u4f60\u6253\u7b97\u5728\u8d26\u6237\u4e2d\u5b58\u50a8\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Connection, clusterApiUrl } from "@solana/web3.js";\n\n(async () => {\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n\n  // length of data in the account to calculate rent for\n  const dataLength = 1500;\n  const rentExemptionAmount =\n    await connection.getMinimumBalanceForRentExemption(dataLength);\n  console.log({\n    rentExemptionAmount,\n  });\n})();\n'))),(0,r.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_client::rpc_client::RpcClient;\nuse solana_sdk::commitment_config::CommitmentConfig;\n\nfn main() {\n    let rpc_url = String::from("https://api.devnet.solana.com");\n    let connection = RpcClient::new_with_commitment(rpc_url, CommitmentConfig::confirmed());\n    let data_length = 1500;\n\n    let rent_exemption_amount = connection\n        .get_minimum_balance_for_rent_exemption(data_length)\n        .unwrap();\n\n    println!("rent exemption amount: {}", rent_exemption_amount);\n}\n')))),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528\u79cd\u5b50\u521b\u5efa\u8d26\u6237"},"\u5982\u4f55\u4f7f\u7528\u79cd\u5b50\u521b\u5efa\u8d26\u6237"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"createAccountWithSeed")," \u65b9\u6cd5\u6765\u7ba1\u7406\u60a8\u7684\u8d26\u6237\uff0c\u800c\u65e0\u9700\u521b\u5efa\u5927\u91cf\u4e0d\u540c\u7684\u5bc6\u94a5\u5bf9\u3002"),(0,r.kt)("h3",{id:"\u751f\u6210"},"\u751f\u6210"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"PublicKey.createWithSeed(basePubkey, seed, programId);\n"))),(0,r.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_program::pubkey::Pubkey;\nuse solana_sdk::signature::{Keypair, Signer};\n\nfn main() {\n    let base_pubkey = Keypair::new().pubkey();\n    let seed = "robot001";\n    let program_id = solana_program::system_program::id();\n\n    let derived_pubkey = Pubkey::create_with_seed(&base_pubkey, seed, &program_id).unwrap();\n\n    println!("account pubkey: {:?}", derived_pubkey);\n}\n')))),(0,r.kt)("h3",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx = new Transaction().add(\n  SystemProgram.createAccountWithSeed({\n    fromPubkey: feePayer.publicKey, // funder\n    newAccountPubkey: derived,\n    basePubkey: basePubkey,\n    seed: seed,\n    lamports: 1e8, // 0.1 SOL\n    space: 0,\n    programId: owner,\n  })\n);\n\nconsole.log(\n  `txhash: ${await sendAndConfirmTransaction(connection, tx, [feePayer, base])}`\n);\n"))),(0,r.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let derived_pubkey = Pubkey::create_with_seed(&base_pubkey, seed, &program_id).unwrap();\n\nlet ix = system_instruction::create_account_with_seed(\n  &fee_payer_pubkey,\n  &derived_pubkey,\n  &base_pubkey,\n  seed,\n  LAMPORTS_PER_SOL / 10,\n  0,\n  &program_id,\n);\n\nlet tx = solana_sdk::transaction::Transaction::new_signed_with_payer(\n  &[ix],\n  Some(&fee_payer_pubkey),\n  &[&fee_payer_keypair, &base_keypair],\n  recent_blockhash,\n);\n")))),(0,r.kt)("h3",{id:"\u8f6c\u8d26"},"\u8f6c\u8d26"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const tx = new Transaction().add(\n  SystemProgram.transfer({\n    fromPubkey: derived,\n    basePubkey: basePubkey,\n    toPubkey: Keypair.generate().publicKey, // create a random receiver\n    lamports: 0.01 * LAMPORTS_PER_SOL,\n    seed: seed,\n    programId: programId,\n  })\n);\nconsole.log(\n  `txhash: ${await sendAndConfirmTransaction(connection, tx, [feePayer, base])}`\n);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only an account owned by system program can transfer via system program."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u8d34\u58eb"),"\n\u53ea\u6709\u7531\u7cfb\u7edf\u7a0b\u5e8f\u62e5\u6709\u7684\u8d26\u6237\u624d\u80fd\u901a\u8fc7\u7cfb\u7edf\u7a0b\u5e8f\u8fdb\u884c\u8f6c\u8d26\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efapda"},"\u5982\u4f55\u521b\u5efaPDA"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses"},"\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740/Program derived address(PDA)")," \u4e0e\u666e\u901a\u5730\u5740\u76f8\u6bd4\u5177\u6709\u4ee5\u4e0b\u533a\u522b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u5728ed25519\u66f2\u7ebf\u4e0a"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7a0b\u5e8f\u8fdb\u884c\u7b7e\u540d\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u79c1\u94a5")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": PDA\u8d26\u6237\u53ea\u80fd\u5728\u7a0b\u5e8f\u4e0a\u521b\u5efa\uff0c\u5730\u5740\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u521b\u5efa\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u8d34\u58eb"),"\n\u5c3d\u7ba1PDA\u662f\u7531\u7a0b\u5e8fID\u6d3e\u751f\u7684\uff0c\u4f46\u8fd9\u5e76\u4e0d\u610f\u5473\u7740PDA\u5f52\u5c5e\u4e8e\u76f8\u540c\u7684\u7a0b\u5e8f\u3002\uff08\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u5c06PDA\u521d\u59cb\u5316\u4e3a\u4ee3\u5e01\u8d26\u6237\uff0c\u8fd9\u662f\u4e00\u4e2a\u7531\u4ee3\u5e01\u7a0b\u5e8f\u62e5\u6709\u7684\u8d26\u6237\uff09")),(0,r.kt)("h3",{id:"\u751f\u6210\u4e00\u4e2apda"},"\u751f\u6210\u4e00\u4e2aPDA"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"findProgramAddress"),"\u4f1a\u5728\u4f60\u7684\u79cd\u5b50\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u989d\u5916\u7684\u5b57\u8282\u3002\u5b83\u4ece255\u9012\u51cf\u52300\uff0c\u5e76\u8fd4\u56de\u7b2c\u4e00\u4e2a\u4e0d\u5728ed25519\u66f2\u7ebf\u4e0a\u7684\u516c\u94a5\u3002\u5982\u679c\u60a8\u4f20\u5165\u76f8\u540c\u7684\u7a0b\u5e8fID\u548c\u79cd\u5b50\uff0c\u60a8\u5c06\u59cb\u7ec8\u83b7\u5f97\u76f8\u540c\u7684\u7ed3\u679c\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { PublicKey } from "@solana/web3.js";\n\n(async () => {\n  const programId = new PublicKey(\n    "G1DCNUQTSGHehwdLCAmRyAG8hf51eCHrLNUqkgGKYASj"\n  );\n\n  let [pda, bump] = await PublicKey.findProgramAddress(\n    [Buffer.from("test")],\n    programId\n  );\n  console.log(`bump: ${bump}, pubkey: ${pda.toBase58()}`);\n  // you will find the result is different from `createProgramAddress`.\n  // It is expected because the real seed we used to calculate is ["test" + bump]\n})();\n'))),(0,r.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_program::pubkey::Pubkey;\nuse std::str::FromStr;\n\nfn main() {\n    let program_id = Pubkey::from_str("G1DCNUQTSGHehwdLCAmRyAG8hf51eCHrLNUqkgGKYASj").unwrap();\n\n    let (pda, bump_seed) = Pubkey::find_program_address(&[b"test"], &program_id);\n    println!("pda: {}, bump: {}", pda, bump_seed);\n}\n')))),(0,r.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2apda"},"\u521b\u5efa\u4e00\u4e2aPDA"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u521b\u5efa\u7531\u7a0b\u5e8f\u62e5\u6709\u7684PDA\u8d26\u6237\u7684\u793a\u4f8b\u7a0b\u5e8f\uff0c\u4ee5\u53ca\u4e00\u4e2a\u4f7f\u7528\u5ba2\u6237\u7aef\u8c03\u7528\u8be5\u7a0b\u5e8f\u7684\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"system_instruction::create_account"),"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u9884\u5206\u914d\u6570\u636e\u5927\u5c0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"space"),"\u3001\u9884\u652f\u4ed8",(0,r.kt)("inlineCode",{parentName:"p"},"rent_lamports"),"\u6570\u91cf\u7684lamports\u7684PDA\u8d26\u6237\u7684\u5355\u6761\u6307\u4ee4\u3002\u8be5\u6307\u4ee4\u4f7f\u7528PDA\u8fdb\u884c\u7b7e\u540d\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"invoke_signed"),"\u8fdb\u884c\u8c03\u7528\uff0c\u4e0e\u524d\u9762\u8ba8\u8bba\u7684\u7c7b\u4f3c\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Program",label:"Program",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"invoke_signed(\n    &system_instruction::create_account(\n        &payer_account_info.key,\n        &pda_account_info.key,\n        rent_lamports,\n        space.into(),\n        program_id\n    ),\n    &[\n        payer_account_info.clone(),\n        pda_account_info.clone()\n    ],\n    &[&[&payer_account_info.key.as_ref(), &[bump]]]\n)?;\n"))),(0,r.kt)(l.Z,{value:"\u5ba2\u6237\u7aef",label:"\u5ba2\u6237\u7aef",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let tx = new Transaction().add(\n  new TransactionInstruction({\n    keys: [\n      {\n        pubkey: feePayer.publicKey,\n        isSigner: true,\n        isWritable: true,\n      },\n      {\n        pubkey: pda,\n        isSigner: false,\n        isWritable: true,\n      },\n      {\n        pubkey: SYSVAR_RENT_PUBKEY,\n        isSigner: false,\n        isWritable: false,\n      },\n      {\n        pubkey: SystemProgram.programId,\n        isSigner: false,\n        isWritable: false,\n      },\n    ],\n    data: Buffer.from(new Uint8Array([data_size, bump])),\n    programId: programId,\n  })\n);\n\nconsole.log(`txhash: ${await connection.sendTransaction(tx, [feePayer])}`);\n")))),(0,r.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528pda\u7b7e\u540d"},"\u5982\u4f55\u4f7f\u7528PDA\u7b7e\u540d"),(0,r.kt)("p",null,"PDAs\u53ea\u80fd\u5728\u7a0b\u5e8f\u5185\u90e8\u8fdb\u884c\u7b7e\u540d\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528PDA\u8fdb\u884c\u7b7e\u540d\u7684\u7a0b\u5e8f\u793a\u4f8b\uff0c\u5e76\u4f7f\u7528\u5ba2\u6237\u7aef\u8c03\u7528\u8be5\u7a0b\u5e8f\u7684\u793a\u4f8b\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u4e00\u4e2a\u5355\u4e2a\u6307\u4ee4\uff0c\u7528\u4e8e\u4ece\u7531\u79cd\u5b50",(0,r.kt)("inlineCode",{parentName:"p"},"escrow"),"\u6d3e\u751f\u7684 PDA \u8f6c\u8d26 SOL \u5230\u6307\u5b9a\u7684\u8d26\u6237\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"invoke_signed")," \u51fd\u6570\u6765\u4f7f\u7528 PDA \u7b7e\u540d\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Program",label:"Program",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'invoke_signed(\n    &system_instruction::transfer(\n        &pda_account_info.key,\n        &to_account_info.key,\n        100_000_000, // 0.1 SOL\n    ),\n    &[\n        pda_account_info.clone(),\n        to_account_info.clone(),\n        system_program_account_info.clone(),\n    ],\n    &[&[b"escrow", &[bump_seed]]],\n)?;\n'))),(0,r.kt)(l.Z,{value:"\u5ba2\u6237\u7aef",label:"\u5ba2\u6237\u7aef",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"let tx = new Transaction().add(\n  new TransactionInstruction({\n    keys: [\n      {\n        pubkey: pda,\n        // Leave `false` here although we need a pda as a signer.\n        // It will be escalated on program if we use invoke_signed.\n        isSigner: false,\n        isWritable: true,\n      },\n      {\n        pubkey: to.publicKey,\n        isSigner: false,\n        isWritable: true,\n      },\n      {\n        pubkey: SystemProgram.programId,\n        isSigner: false,\n        isWritable: false,\n      },\n    ],\n    data: Buffer.from(new Uint8Array([bump])),\n    programId: programId,\n  })\n);\n\nconsole.log(`txhash: ${await connection.sendTransaction(tx, [feePayer])}`);\n")))),(0,r.kt)("h2",{id:"\u5982\u4f55\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237"},"\u5982\u4f55\u83b7\u53d6\u7a0b\u5e8f\u8d26\u6237"),(0,r.kt)("p",null,"\u8fd4\u56de\u6240\u6709\u7531\u7a0b\u5e8f\u62e5\u6709\u7684\u8d26\u6237\u3002\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/cookbook-zh/guides/get-program-accounts"},"\u6307\u5357\u90e8\u5206")," \uff0c\u83b7\u53d6\u6709\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u53ca\u5176\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";\n\n(async () => {\n  const MY_PROGRAM_ID = new PublicKey(\n    "6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U"\n  );\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n\n  const accounts = await connection.getProgramAccounts(MY_PROGRAM_ID);\n\n  console.log(`Accounts for program ${MY_PROGRAM_ID}: `);\n  console.log(accounts);\n\n  /*\n  // Output\n\n  Accounts for program 6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U:\n  [\n    {\n      account: {\n        data: <Buffer 60 06 66 ca 2c 1d c7 85 04 00 00 00 00 00 00 00 05 00 00 00 00 00 00 00 fc>,\n        executable: false,\n        lamports: 1064880,\n        owner: [PublicKey],\n        rentEpoch: 228\n      },\n      pubkey: PublicKey {\n        _bn: <BN: 82fc5b91154dc5c840cb464ba6a89212d0fd789367c0a1488fb1941d78f9727a>\n      }\n    },\n    {\n      account: {\n        data: <Buffer 60 06 66 ca 2c 1d c7 85 03 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00 fd>,\n        executable: false,\n        lamports: 1064880,\n        owner: [PublicKey],\n        rentEpoch: 229\n      },\n      pubkey: PublicKey {\n        _bn: <BN: 404dc1fe368cf194f20cf3c681a071c61893ced98f65cda12ba5a147e984e669>\n      }\n    }\n  ]\n  */\n})();\n'))),(0,r.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_client::rpc_client::RpcClient;\nuse solana_program::pubkey::Pubkey;\nuse solana_sdk::commitment_config::CommitmentConfig;\nuse std::str::FromStr;\n\nfn main() {\n    let rpc_url = String::from("https://api.devnet.solana.com");\n    let connection = RpcClient::new_with_commitment(rpc_url, CommitmentConfig::confirmed());\n\n    let program_id = Pubkey::from_str("6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U").unwrap();\n    let accounts = connection.get_program_accounts(&program_id).unwrap();\n\n    println!("accounts for {}, {:?}", program_id, accounts);\n}\n'))),(0,r.kt)(l.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://api.devnet.solana.com -X POST -H "Content-Type: application/json" -d \'\n {"jsonrpc":"2.0", "id":1, "method":"getProgramAccounts", "params":["6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U"]}\n\'\n\n# Output\n# {"jsonrpc":"2.0","result":[{"account":{"data":"fe2kiXpgfrjWQjCPX3n5MB339Ayqav75ej","executable":false,"lamports":1064880,"owner":"6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U","rentEpoch":228},"pubkey":"9pKBrUtJU9GNmct6T2BQtiKqvubtjS9D2if2bm1P8TQd"},{"account":{"data":"fe2kiXpgfrjVs7hiZJNVFsbJUuhXhFx3pQ","executable":false,"lamports":1064880,"owner":"6a2GdmttJdanBkoHt7f4Kon4hfadx4UTUgJeRkCaiL3U","rentEpoch":229},"pubkey":"5L1rztbopmgGMWPKb2efoGyhGnrBJm6K53Hf9S4nxdHr"}],"id":1}\n')))),(0,r.kt)("h2",{id:"\u5982\u4f55\u5173\u95ed\u8d26\u6237"},"\u5982\u4f55\u5173\u95ed\u8d26\u6237"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u79fb\u9664\u8d26\u6237\u4e2d\u7684\u6240\u6709 SOL\uff08\u4ee5\u64e6\u9664\u6240\u6709\u5b58\u50a8\u6570\u636e\u7684\u65b9\u5f0f\uff09\u6765\u5173\u95ed\u4e00\u4e2a\u8d26\u6237\u3002\uff08\u4f60\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/accounts#rent"},"rent"),"\u6765\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\uff09"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Program",label:"Program",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let dest_starting_lamports = dest_account_info.lamports();\n**dest_account_info.lamports.borrow_mut() = dest_starting_lamports\n    .checked_add(source_account_info.lamports())\n    .unwrap();\n**source_account_info.lamports.borrow_mut() = 0;\n\nlet mut source_data = source_account_info.data.borrow_mut();\nsource_data.fill(0);\n\n"))),(0,r.kt)(l.Z,{value:"\u5ba2\u6237\u7aef",label:"\u5ba2\u6237\u7aef",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 1. create an account to your program\nlet createNewAccountTx = new Transaction().add(\n  SystemProgram.createAccount({\n    fromPubkey: feePayer.publicKey,\n    newAccountPubkey: newAccount.publicKey,\n    lamports: 1e8, // 0.1 SOL\n    space: 10, // a random value\n    programId: programId,\n  })\n);\n\n// 2. close your account\nlet closeAccountTx = new Transaction().add(\n  new TransactionInstruction({\n    keys: [\n      {\n        pubkey: newAccount.publicKey,\n        isSigner: false,\n        isWritable: true,\n      },\n      {\n        pubkey: feePayer.publicKey,\n        isSigner: false,\n        isWritable: true,\n      },\n    ],\n    programId: programId,\n  })\n);\n")))),(0,r.kt)("h2",{id:"\u5982\u4f55\u83b7\u53d6\u8d26\u6237\u4f59\u989d"},"\u5982\u4f55\u83b7\u53d6\u8d26\u6237\u4f59\u989d"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(`${(await connection.getBalance(wallet)) / LAMPORTS_PER_SOL} SOL`);\n"))),(0,r.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"connection.get_balance(&wallet).unwrap();\n"))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'client = Client("https://api.devnet.solana.com")\n\nkey_pair = Keypair()\npublic_key = key_pair.pubkey()\n\nclient.get_balance(public_key)\n'))),(0,r.kt)(l.Z,{value:"cpp",label:"Cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'Connection connection("https://api.devnet.solana.com");\n\nauto key_pair = Keypair::generate();\nauto public_key = key_pair.public_key;\n\nuint64_t balance = connection.get_balance(public_key).unwrap();\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u83b7\u53d6\u4ee3\u5e01\u4f59\u989d\uff0c\u4f60\u9700\u8981\u77e5\u9053\u4ee3\u5e01\u8d26\u6237\u7684\u5730\u5740\u3002\u5982\u679c\u50cf\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003Token References\u3002")))}b.isMDXComponent=!0},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(87462),r=t(67294),o=t(86010),l=t(12466),c=t(16550),s=t(91980),i=t(67392),u=t(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,i]=b({queryString:t,groupId:a}),[p,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),y=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&c(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),k(e)}),[i,k,o]),tabValues:o}}var y=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:t,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),a=i[t].value;a!==c&&(p(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,key:n,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":c===n})}),t??n)})))}function _(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function h(e){const n=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,n)),r.createElement(_,(0,a.Z)({},e,n)))}function v(e){const n=(0,y.Z)();return r.createElement(h,(0,a.Z)({key:String(n)},e))}}}]);