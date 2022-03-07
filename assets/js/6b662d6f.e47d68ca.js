"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[2676],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7724:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"v0.1 RPC"},d=void 0,p={unversionedId:"flashbots-auction/miners/mev-geth-spec/v01-rpc",id:"flashbots-auction/miners/mev-geth-spec/v01-rpc",isDocsHomePage:!1,title:"v0.1 RPC",description:"eth_sendBundle",source:"@site/docs/flashbots-auction/miners/mev-geth-spec/v01-rpc.mdx",sourceDirName:"flashbots-auction/miners/mev-geth-spec",slug:"/flashbots-auction/miners/mev-geth-spec/v01-rpc",permalink:"/flashbots-auction/miners/mev-geth-spec/v01-rpc",tags:[],version:"current",frontMatter:{title:"v0.1 RPC"},sidebar:"docs",previous:{title:"v0.1",permalink:"/flashbots-auction/miners/mev-geth-spec/v01"},next:{title:"alpha-v0.6 (current)",permalink:"/flashbots-auction/releases/alpha-v0.6"}},c=[{value:"eth_sendBundle",id:"eth_sendbundle",children:[{value:"Description",id:"description",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}]},{value:"eth_callBundle",id:"eth_callbundle",children:[{value:"Description",id:"description-1",children:[]},{value:"Returns",id:"returns-1",children:[]},{value:"Example",id:"example-1",children:[]},{value:"<code>Quantity</code>",id:"quantity",children:[]},{value:"<code>Data</code>",id:"data",children:[]},{value:"<code>Block Identifier</code>",id:"block-identifier",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"eth_sendbundle"},"eth_sendBundle"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Sends a bundle of transactions to the miner. The bundle has to be executed at the beginning of the block (before any other transactions), with bundle transactions executed exactly in the same order as provided in the bundle. During the Flashbots Alpha this is only called by the Flashbots relay."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transactions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<Data>")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of signed transactions (",(0,l.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)"),(0,l.kt)("td",{parentName:"tr",align:null},"a no-op in the light mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Exact block number at which the bundle can be included."),(0,l.kt)("td",{parentName:"tr",align:null},"bundle is evicted after the block")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minTimestamp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxTimestamp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum (inclusive) block timestamp at which the bundle can be included. If this value is 0 then any timestamp is acceptable."),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("p",null,"{",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"} - ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if bundle has been accepted by the node, otherwise ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_sendBundle",\n    "params": [\n        [\n            "f9014946843b9aca00830493e094a011e5f4ea471ee4341a135bb1a4af368155d7a280b8e40d5f2659000000000000000000000000fdd45a22dd1d606b3782f2119621e928e32743000000000000000000000000000000000000000000000000000000000077359400000000000000000000000000000000000000000000000",\n            "f86e8204d085012a05f200830c350094daf24c20717f428f00d8448d74d67a77f67ceb8287354a6ba7a18000802ea00e411bcb660dd8d47717df89078d2e8160c08e7f11cb7ad0ee935e7436eceb32a013ee00a21b7fa0a9f9c1224d11261648191875d4633aed6003543ea319f12b62"\n        ],\n        "0x12ab34",\n        "0x0",\n        "0x0"\n    ]\n}\' <url>\n\n# Response\n{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "result": true\n}\n')),(0,l.kt)("h2",{id:"eth_callbundle"},"eth_callBundle"),(0,l.kt)("h3",{id:"description-1"},"Description"),(0,l.kt)("p",null,"Simulate a bundle of transactions at the top of a block."),(0,l.kt)("p",null,"After retrieving the block specified in the ",(0,l.kt)("inlineCode",{parentName:"p"},"blockNrOrHash")," it takes the same ",(0,l.kt)("inlineCode",{parentName:"p"},"blockhash"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gasLimit"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"difficulty"),", same ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp")," unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"blockTimestamp")," property is specified, and increases the block number by ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"eth_callBundle")," will timeout after ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," seconds."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encodedTxs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array<Data>")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of signed transactions (",(0,l.kt)("inlineCode",{parentName:"td"},"eth_sendRawTransaction")," style, signed and RLP-encoded)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockNrOrHash"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Quantity\\|string\\|Block Identifier")),(0,l.kt)("td",{parentName:"tr",align:null},'Block number, or one of "latest", "earliest" or "pending", or a block identifier as described in {Block Identifier}')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockTimestamp"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,l.kt)("td",{parentName:"tr",align:null},"Block timestamp to be used in replacement of the timestamp taken from the parent block.")))),(0,l.kt)("h3",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"Map<",(0,l.kt)("inlineCode",{parentName:"p"},"Data"),', "error|value" : ',(0,l.kt)("inlineCode",{parentName:"p"},"Data"),"> - a mapping from transaction hashes to execution results with error or output (value) for each of the transactions"),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST -H \'Content-Type: application/json\' --data \'{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "method": "eth_callBundle",\n    "params": [\n        [\n            "f9014946843b9aca00830493e094a011e5f4ea471ee4341a135bb1a4af368155d7a280b8e40d5f2659000000000000000000000000fdd45a22dd1d606b3782f2119621e928e32743000000000000000000000000000000000000000000000000000000000077359400000000000000000000000000000000000000000000000",\n            "f86e8204d085012a05f200830c350094daf24c20717f428f00d8448d74d67a77f67ceb8287354a6ba7a18000802ea00e411bcb660dd8d47717df89078d2e8160c08e7f11cb7ad0ee935e7436eceb32a013ee00a21b7fa0a9f9c1224d11261648191875d4633aed6003543ea319f12b62"\n        ],\n        "0x12ab34"\n    ]\n}\' <url>\n\n# Response\n{\n    "id": 1337,\n    "jsonrpc": "2.0",\n    "result":\n        {\n            "0x22b3806fbef9532db4105475222983404783aacd4d865ea5dab76a84aa1a07eb" : {\n                "value" : "0x0012"\n            },\n            "0x489e3b5493af31d55059f8e296351b267720bc4ba7dc170871c1d789e5541027" : {\n                "value" : "0xabcd"\n            }\n        }\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Below type description can also be found in ",(0,l.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1474"},"EIP-1474")),(0,l.kt)("h3",{id:"quantity"},(0,l.kt)("inlineCode",{parentName:"h3"},"Quantity")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,l.kt)("strong",{parentName:"li"},"MUST")," be hex-encoded."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,l.kt)("strong",{parentName:"li"},"MUST"),' be "0x"-prefixed.'),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,l.kt)("strong",{parentName:"li"},"MUST")," be expressed using the fewest possible hex digits per byte."),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"Quantity")," value ",(0,l.kt)("strong",{parentName:"li"},"MUST"),' express zero as "0x0".')),(0,l.kt)("h3",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h3"},"Data")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"Data"),"\xa0value\xa0",(0,l.kt)("strong",{parentName:"li"},"MUST"),"\xa0be hex-encoded."),(0,l.kt)("li",{parentName:"ul"},"A\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"Data"),"\xa0value\xa0",(0,l.kt)("strong",{parentName:"li"},"MUST"),"\xa0be \u201c0x\u201d-prefixed."),(0,l.kt)("li",{parentName:"ul"},"A\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"Data"),"\xa0value\xa0",(0,l.kt)("strong",{parentName:"li"},"MUST"),"\xa0be expressed using two hex digits per byte.")),(0,l.kt)("h3",{id:"block-identifier"},(0,l.kt)("inlineCode",{parentName:"h3"},"Block Identifier")),(0,l.kt)("p",null,"Since there is no way to clearly distinguish between a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Data"),"\xa0parameter and a\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"Quantity"),"\xa0parameter,\xa0",(0,l.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1898"},"EIP-1898"),"\xa0provides a format to specify a block either using the block hash or block number. The block identifier is a JSON\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"object"),"\xa0with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Position"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0A"),(0,l.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Quantity")),(0,l.kt)("td",{parentName:"tr",align:null},"The block in the canonical chain with this number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0B"),(0,l.kt)("td",{parentName:"tr",align:null},"blockHash"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Data")),(0,l.kt)("td",{parentName:"tr",align:null},"The block uniquely identified by this hash. The\xa0blockNumber\xa0and\xa0blockHash\xa0properties are mutually exclusive; exactly one of them must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1B"),(0,l.kt)("td",{parentName:"tr",align:null},"requireCanonical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"(optional) Whether or not to throw an error if the block is not in the canonical chain as described below. Only allowed in conjunction with the\xa0blockHash\xa0tag. Defaults to\xa0false.")))),(0,l.kt)("p",null,"If the block is not found, the callee SHOULD raise a JSON-RPC error (the recommended error code is\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"-32001: Resource not found"),". If the tag is\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"blockHash"),"\xa0and\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"requireCanonical"),"\xa0is\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the callee SHOULD additionally raise a JSON-RPC error if the block is not in the canonical chain (the recommended error code is\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"-32000: Invalid input"),"\xa0and in any case should be different than the error code for the block not found case so that the caller can distinguish the cases). The block-not-found check SHOULD take precedence over the block-is-canonical check, so that if the block is not found the callee raises block-not-found rather than block-not-canonical."))}u.isMDXComponent=!0}}]);