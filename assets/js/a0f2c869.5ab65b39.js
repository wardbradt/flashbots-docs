"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[4813],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"install"},p=void 0,s={unversionedId:"flashbots-data/mev-inspect-py/install",id:"flashbots-data/mev-inspect-py/install",isDocsHomePage:!1,title:"install",description:"mev-inspect-py is built to run on kubernetes locally and in production",source:"@site/docs/flashbots-data/mev-inspect-py/install.md",sourceDirName:"flashbots-data/mev-inspect-py",slug:"/flashbots-data/mev-inspect-py/install",permalink:"/flashbots-data/mev-inspect-py/install",tags:[],version:"current",frontMatter:{title:"install"},sidebar:"docs",previous:{title:"overview",permalink:"/flashbots-data/mev-inspect-py/overview"},next:{title:"quick start",permalink:"/flashbots-data/mev-inspect-py/quick-start"}},c=[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Start up",id:"start-up",children:[]},{value:"Tear down",id:"tear-down",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"mev-inspect-py is built to run on kubernetes locally and in production"),(0,l.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,l.kt)("p",null,"First, setup a local kubernetes deployment - we use ",(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker")," and ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start"},"kind")),(0,l.kt)("p",null,"If using kind, create a new cluster with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kind create cluster\n")),(0,l.kt)("p",null,"Next, install the kubernetes CLI ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl"))),(0,l.kt)("p",null,"Then, install ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"helm")," - helm is a package manager for kubernetes"),(0,l.kt)("p",null,"Lastly, setup ",(0,l.kt)("a",{parentName:"p",href:"https://docs.tilt.dev/install.html"},"Tilt")," which manages running and updating kubernetes resources locally"),(0,l.kt)("h3",{id:"start-up"},"Start up"),(0,l.kt)("p",null,"Set an environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"RPC_URL")," to an RPC for fetching blocks\nExample:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'export RPC_URL="http://111.111.111.111:8546"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: mev-inspect-py currently requires and RPC with support for OpenEthereum / Erigon traces (not geth \ud83d\ude14)")),(0,l.kt)("p",null,"Next, start all servcies with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tilt up\n")),(0,l.kt)("p",null,'Press "space" to see a browser of the services starting up'),(0,l.kt)("p",null,"On first startup, you'll need to apply database migrations. Apply with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./mev exec alembic upgrade head\n")),(0,l.kt)("h3",{id:"tear-down"},"Tear down"),(0,l.kt)("p",null,"First stop the running tilt window with ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl+C")),(0,l.kt)("p",null,"Then run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tilt down\n")))}d.isMDXComponent=!0}}]);