(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{88:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(96)),i={title:"Hooks",description:"Provide common functionality to any of the supported controllers. Build controller-based automations for media players, lights and much more in just a few clicks."},l={unversionedId:"blueprints/hooks",id:"blueprints/hooks",isDocsHomePage:!1,title:"Hooks",description:"Provide common functionality to any of the supported controllers. Build controller-based automations for media players, lights and much more in just a few clicks.",source:"@site/docs/blueprints/hooks.mdx",slug:"/blueprints/hooks",permalink:"/awesome-ha-blueprints/docs/blueprints/hooks",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/hooks.mdx",version:"current",sidebar:"docs",previous:{title:"Controllers",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers"},next:{title:"Automations",permalink:"/awesome-ha-blueprints/docs/blueprints/automation"}},c=[],s={toc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Hooks")," are blueprints which seamlessly integrate with ",Object(a.b)("a",{parentName:"p",href:"controllers"},"Controllers")," to enable control of lights, media players and much more, without you ever writing a single line of code."),Object(a.b)("p",null,"While Controllers are responsible for integrating the hardware and exposing an abstract interface to the user, Hooks can, as the name suggests, link to this interface and listen for events fired by a controller. Hooks take care of providing the actual control functionality for common use cases."),Object(a.b)("p",null,"If you want to build a controller-based automation with Hooks, first create an automation with a ",Object(a.b)("a",{parentName:"p",href:"controllers"},"Controller blueprint"),". You can then create an automation with the desired Hook blueprint, ",Object(a.b)("strong",{parentName:"p"},"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),Object(a.b)("p",null,"For more flexibility, you can link multiple Hooks to the same Controller: just create a Controller automation, then build as many Hook automations as needed. Moreover, if you need to customize certain actions or extend a Hook functionality, you can provide custom actions to the Controller blueprint, which will be run when a certain event is raised."),Object(a.b)("p",null,"Please note that not all controllers might be used with each of the available Hooks. Check out the Hook documentation for the list of supported controllers for that specific Hook.",Object(a.b)("br",{parentName:"p"}),"\n","You can also check the mapping between controller buttons and actions for supported Hooks in the Controller docs."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/blueprints/hooks/light"},"Light")),Object(a.b)("td",{parentName:"tr",align:null},"Hook automation which allows to control a light. Supports brightness and color control both for white temperature and rgb lights.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"/docs/blueprints/hooks/media_player"},"Media Player")),Object(a.b)("td",{parentName:"tr",align:null},"Hook automation which allows to control a media player. Supports volume setting, play/pause and track selection.")))))}u.isMDXComponent=!0},96:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return o?r.a.createElement(d,l(l({ref:t},s),{},{components:o})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);