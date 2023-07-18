"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[9021],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,u=m["".concat(d,".").concat(k)]||m[k]||s[k]||o;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:1},i="BeginBlocker and EndBlocker",l={unversionedId:"building-modules/beginblock-endblock",id:"version-v0.50/building-modules/beginblock-endblock",title:"BeginBlocker and EndBlocker",description:"BeginBlocker and EndBlocker are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the BeginBlock and EndBlock ABCI messages are received from the underlying consensus engine.",source:"@site/versioned_docs/version-v0.50/building-modules/05-beginblock-endblock.md",sourceDirName:"building-modules",slug:"/building-modules/beginblock-endblock",permalink:"/v0.50/building-modules/beginblock-endblock",draft:!1,tags:[],version:"v0.50",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Query Services",permalink:"/v0.50/building-modules/query-services"},next:{title:"Keepers",permalink:"/v0.50/building-modules/keeper"}},d={},p=[{value:"BeginBlocker and EndBlocker",id:"beginblocker-and-endblocker-1",level:2}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"beginblocker-and-endblocker"},"BeginBlocker and EndBlocker"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the ",(0,a.kt)("a",{parentName:"p",href:"/v0.50/core/baseapp#beginblock"},(0,a.kt)("inlineCode",{parentName:"a"},"BeginBlock"))," and ",(0,a.kt)("a",{parentName:"p",href:"/v0.50/core/baseapp#endblock"},(0,a.kt)("inlineCode",{parentName:"a"},"EndBlock"))," ABCI messages are received from the underlying consensus engine.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h3",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v0.50/building-modules/module-manager"},"Module Manager")))),(0,a.kt)("h2",{id:"beginblocker-and-endblocker-1"},"BeginBlocker and EndBlocker"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," are a way for module developers to add automatic execution of logic to their module. This is a powerful tool that should be used carefully, as complex automatic functions can slow down or even halt the chain. "),(0,a.kt)("p",null,"In 0.47.0, Prepare and Process Proposal were added that allow app developers to do arbitrary work at those phases, but they do not influence the work that will be done in BeginBlock. If an application required ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlock")," to execute prior to any sort of work is done then this is not possible today (0.50.0). "),(0,a.kt)("p",null,"When needed, ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," are implemented as part of the ",(0,a.kt)("a",{parentName:"p",href:"/v0.50/building-modules/module-manager#appmodule"},(0,a.kt)("inlineCode",{parentName:"a"},"HasBeginBlocker"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"HasABCIEndblocker")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"EndBlocker")," interfaces"),". This means either can be left-out if not required. The ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlock")," methods of the interface implemented in ",(0,a.kt)("inlineCode",{parentName:"p"},"module.go")," generally defer to ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," methods respectively, which are usually implemented in ",(0,a.kt)("inlineCode",{parentName:"p"},"abci.go"),"."),(0,a.kt)("p",null,"The actual implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"abci.go")," are very similar to that of a ",(0,a.kt)("a",{parentName:"p",href:"/v0.50/building-modules/msg-services"},(0,a.kt)("inlineCode",{parentName:"a"},"Msg")," service"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They generally use the ",(0,a.kt)("a",{parentName:"li",href:"/v0.50/building-modules/keeper"},(0,a.kt)("inlineCode",{parentName:"a"},"keeper"))," and ",(0,a.kt)("a",{parentName:"li",href:"/v0.50/core/context"},(0,a.kt)("inlineCode",{parentName:"a"},"ctx"))," to retrieve information about the latest state."),(0,a.kt)("li",{parentName:"ul"},"If needed, they use the ",(0,a.kt)("inlineCode",{parentName:"li"},"keeper")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ctx")," to trigger state-transitions."),(0,a.kt)("li",{parentName:"ul"},"If needed, they can emit ",(0,a.kt)("a",{parentName:"li",href:"/v0.50/core/events"},(0,a.kt)("inlineCode",{parentName:"a"},"events"))," via the ",(0,a.kt)("inlineCode",{parentName:"li"},"ctx"),"'s ",(0,a.kt)("inlineCode",{parentName:"li"},"EventManager"),".")),(0,a.kt)("p",null,"A specific type of ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," is available to return validator updates to the underlying consensus engine in the form of an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cometbft.com/v0.37/spec/abci/abci++_methods#endblock"},(0,a.kt)("inlineCode",{parentName:"a"},"[]abci.ValidatorUpdates")),". This is the preferred way to implement custom validator changes."),(0,a.kt)("p",null,"It is possible for developers to define the order of execution between the ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlocker"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," functions of each of their application's modules via the module's manager ",(0,a.kt)("inlineCode",{parentName:"p"},"SetOrderBeginBlocker"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"SetOrderEndBlocker")," methods. For more on the module manager, click ",(0,a.kt)("a",{parentName:"p",href:"/v0.50/building-modules/module-manager#manager"},"here"),"."),(0,a.kt)("p",null,"See an example implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"BeginBlocker")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"distribution")," module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/distribution/abci.go#L14-L38\n")),(0,a.kt)("p",null,"and an example implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlocker")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"staking")," module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.50.0-alpha.0/x/staking/keeper/abci.go#L22-L27\n")))}s.isMDXComponent=!0}}]);