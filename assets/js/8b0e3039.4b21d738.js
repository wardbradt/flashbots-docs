"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[8422],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5117:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"bundle cache API"},s=void 0,c={unversionedId:"flashbots-protect/rpc/bundle-cache",id:"flashbots-protect/rpc/bundle-cache",isDocsHomePage:!1,title:"bundle cache API",description:"To create a bundle iteratively (e.g. by signing & sending transactions one at a time with Metamask), you can use the bundle cache API to cache signed transactions and retrieve them with a bundle ID.",source:"@site/docs/flashbots-protect/rpc/bundle-cache.md",sourceDirName:"flashbots-protect/rpc",slug:"/flashbots-protect/rpc/bundle-cache",permalink:"/flashbots-protect/rpc/bundle-cache",tags:[],version:"current",frontMatter:{title:"bundle cache API"},sidebar:"docs",previous:{title:"private transaction status API",permalink:"/flashbots-protect/rpc/status-api"},next:{title:"rate limiting",permalink:"/flashbots-protect/rpc/ratelimiting"}},u=[{value:"Create a Bundle ID",id:"create-a-bundle-id",children:[]},{value:"Connect to Flashbots Protect with Bundle ID",id:"connect-to-flashbots-protect-with-bundle-id",children:[]},{value:"Add Transaction to Bundle",id:"add-transaction-to-bundle",children:[]},{value:"Get Bundle Transactions",id:"get-bundle-transactions",children:[]},{value:"Send Bundle",id:"send-bundle",children:[]},{value:"Fake Funds",id:"fake-funds",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To create a bundle iteratively (e.g. by signing & sending transactions one at a time with Metamask), you can use the bundle cache API to cache signed transactions and retrieve them with a bundle ID."),(0,o.kt)("p",null,"This will be used for whitehat recoveries. By enabling users to sign transactions on their own machines and send them privately to Flashbots, we remove the need to ask for the compromised private key."),(0,o.kt)("h2",{id:"create-a-bundle-id"},"Create a Bundle ID"),(0,o.kt)("p",null,"To start addding transactions to a bundle, first create a bundle ID. We recommend using a UUID (v4). You can generate a UUID at ",(0,o.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/version4"},"uuidgenerator.net")," or with any uuid library."),(0,o.kt)("h2",{id:"connect-to-flashbots-protect-with-bundle-id"},"Connect to Flashbots Protect with Bundle ID"),(0,o.kt)("p",null,"Connecting to the Flashbots Protect RPC Endpoint with a bundle ID parameter will automatically add incoming transactions to a queue without sending them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"https://rpc.flashbots.net?bundle=<YOUR_BUNDLE_ID>\n")),(0,o.kt)("p",null,"Chain ID should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("h2",{id:"add-transaction-to-bundle"},"Add Transaction to Bundle"),(0,o.kt)("p",null,"To add a transaction to the bundle, sign and send the transaction as you normally would (e.g. via Metamask). The transaction will stay pending until it's mined (after you send the bundle)."),(0,o.kt)("h2",{id:"get-bundle-transactions"},"Get Bundle Transactions"),(0,o.kt)("p",null,"You can get the array of transactions included in your bundle using the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /bundle?id=<YOUR_BUNDLE_ID>")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://rpc.flashbots.net/bundle?id=<YOUR_BUNDLE_ID>\n")),(0,o.kt)("p",null,"This will return a JSON object with your signed transactions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "bundleId":"cbd900bf-44c5-4f6b-bf14-9b8d2ae27510",\n    "rawTxs": [\n        "0x02f879827a6901849502...",\n        "0x02f875827a6960849502..."\n    ]\n}\n')),(0,o.kt)("p",null,"Note: The transaction sent last is the first in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rawTxs")," array."),(0,o.kt)("h2",{id:"send-bundle"},"Send Bundle"),(0,o.kt)("p",null,"Once all the transactions you want to include in your bundle are added to the queue, send the signed transactions to the flashbots relay."),(0,o.kt)("p",null,"If you're being helped with a whitehat recovery, we will provide a web interface for you to do this."),(0,o.kt)("p",null,"If you want to send a bundle directly, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/quick-start#how-to-send-your-first-flashbots-bundle"},"Flashbots Auction Docs")," for instructions on how to do this."),(0,o.kt)("h2",{id:"fake-funds"},"Fake Funds"),(0,o.kt)("p",null,"Querying the balance of an address (using the ",(0,o.kt)("inlineCode",{parentName:"p"},"?bundle=")," argument) will return a fake balance of 100 ETH, to allow crafting transactions even without actual funds."))}p.isMDXComponent=!0}}]);