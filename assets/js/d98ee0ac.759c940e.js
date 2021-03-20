(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(96)),a=n(98),s={title:"IKEA E1812 Shortcut button",description:"Controller automation for executing any kind of action triggered by an IKEA E1812 remote controller. Allows to optionally loop an action on a button long press. Supports Zigbee2MQTT, deCONZ, ZHA."},l={unversionedId:"blueprints/controllers/ikea_e1812",id:"blueprints/controllers/ikea_e1812",isDocsHomePage:!1,title:"IKEA E1812 Shortcut button",description:"Controller automation for executing any kind of action triggered by an IKEA E1812 remote controller. Allows to optionally loop an action on a button long press. Supports Zigbee2MQTT, deCONZ, ZHA.",source:"@site/docs/blueprints/controllers/ikea_e1812.mdx",slug:"/blueprints/controllers/ikea_e1812",permalink:"/awesome-ha-blueprints/docs/blueprints/controllers/ikea_e1812",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/controllers/ikea_e1812.mdx",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Available Hooks",id:"available-hooks",children:[{value:"Light",id:"light",children:[]},{value:"Media Player",id:"media-player",children:[]}]},{value:"Additional Notes",id:"additional-notes",children:[]}],c={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This blueprint provides universal support for running any custom action when the button is pressed on the provided IKEA E1812 remote controller. Supports remotes integrated with either Zigbee2MQTT, deCONZ or ZHA. Just specify the integration used to connect the remote to Home Assistant when setting up the automation, and the blueprint will take care of all the rest."),Object(i.b)("p",null,"In addition of being able to provide custom actions for every kind of button press supported by the remote, the blueprint allows to loop the long press action while the button is being held. Once released, the loop stops. This is useful when holding down the button should result in a continuous action (such as lowering the volume of a media player, or controlling a light brightness).\nThe blueprint also adds support for virtual double button press events, which are not exposed by the controller itself."),Object(i.b)("p",null,"Moreover, automations created with this blueprint can be connected with one or more ",Object(i.b)("a",{parentName:"p",href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks"},"Hooks")," supported by this controller.\nHooks allow to easily create controller-based automations for interacting with media players, lights, covers and more. See the list of ",Object(i.b)("a",{parentName:"p",href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers/ikea_e1812#available-hooks"},"Hooks available for this controller")," for additional details."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)(a.b,{id:"zigbee2mqtt",mdxType:"Requirement"}),Object(i.b)(a.b,{id:"zha",mdxType:"Requirement"}),Object(i.b)(a.b,{id:"deconz",mdxType:"Requirement"}),Object(i.b)(a.b,{name:"Input Text Integration",required:"Double press action",mdxType:"Requirement"},"This integration provides the entity to store the last button event, which is needed when using virtual double press events. This should be activated by default so unless you tweaked the default configuration you're good to go.",Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/input_text/"},"Input Text Integration Docs"))),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)(a.a,{name:"Integration",description:'Integration used for connecting the remote with Home Assistant. Select "Zigbee2MQTT", "deCONZ" or "ZHA".',selector:"select",required:!0,mdxType:"Input"}),Object(i.b)(a.a,{name:"Remote",description:"The IKEA remote to use for the automation. Choose a value only if the remote is integrated with deCONZ or ZHA.",selector:"device",required:"ZHA, deCONZ",mdxType:"Input"}),Object(i.b)(a.a,{name:"Remote Action Sensor",description:"The action sensor of the IKEA remote to use for the automation. Choose a value only if the remote is integrated with Zigbee2MQTT.",selector:"entity",required:"Zigbee2MQTT",mdxType:"Input"}),Object(i.b)(a.a,{name:"Button short press",description:"Action to run on short button press.",selector:"action",mdxType:"Input"}),Object(i.b)(a.a,{name:"Button double press",description:"Action to run on double button press.",selector:"action",mdxType:"Input"}),Object(i.b)(a.a,{name:"Button long press",description:"Action to run on long button press.",selector:"action",mdxType:"Input"}),Object(i.b)(a.a,{name:"Button release after long press",description:"Action to run on button release after a long press.",selector:"action",mdxType:"Input"}),Object(i.b)(a.a,{name:"Long button press - loop until release",description:"Loop the action until the button is released.",selector:"boolean",mdxType:"Input"}),Object(i.b)(a.a,{name:"Expose button double press event",description:"Choose whether or not to expose the virtual double press event. Turn this on if you are providing an action for the button double press event.",selector:"boolean",mdxType:"Input"}),Object(i.b)(a.a,{name:"Helper - Last Press Event",description:"Input Text used to store the last press event. Provide an entity only if you are using a double press action.",required:"Double press action",selector:"entity",mdxType:"Input"}),Object(i.b)(a.a,{name:"Helper - Double Press delay",description:"Max delay between the first and the second button press for the double press event. Provide a value only if you are using a double press action. Increase this value if you notice that the double press action is not triggered properly.",selector:"number",mdxType:"Input"}),Object(i.b)("h2",{id:"available-hooks"},"Available Hooks"),Object(i.b)("h3",{id:"light"},"Light"),Object(i.b)("p",null,"Please enable double button press events to use all the available actions."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Button short press -> Toggle"),Object(i.b)("li",{parentName:"ul"},"Button double press -> Color up")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks/light"},"Light Hook docs")),Object(i.b)("h3",{id:"media-player"},"Media Player"),Object(i.b)("p",null,"Please enable double button press events to use all the available actions."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Button short press -> Play/Pause"),Object(i.b)("li",{parentName:"ul"},"Button long press -> Stop"),Object(i.b)("li",{parentName:"ul"},"Button double press -> Next track")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/hooks/media_player"},"Media Player Hook docs")),Object(i.b)("h2",{id:"additional-notes"},"Additional Notes"),Object(i.b)("p",null,"It's also important to notice that the controller doesn't natively support double press events. This blueprint provides virtual double press events by relying on the provided text input, used to store the last short press event, and a delay, which represents the maximum time gap between the first and second short press required to trigger the virtual double press. Make sure the input text is not altered by any other agents, since this could break the automation."),Object(i.b)("p",null,"When double press events are enabled, clicking the button results in the automation first waiting for the second button press, then, if none is received within the provided delay, executing the short press action."),Object(i.b)("p",null,"If double press events are disabled, the corresponding single press action will be executed immediately when the button is pressed."))}p.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);var i=function(e){return r.a.createElement("span",{className:"badge badge--"+e.variant},e.children)},a={action:{type:"Action"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},s={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};var l=function(e){var t=e.selector?a[e.selector]:a.none;return r.a.createElement("div",null,r.a.createElement("span",{style:s.inputName},e.name," ",r.a.createElement(i,{variant:"primary"},t.type)," ",e.required?r.a.createElement(i,{variant:"warning"},e.required," Required"):r.a.createElement(i,{variant:"info"},"Optional")),r.a.createElement("br",null),r.a.createElement("p",{style:s.inputDescription,className:"margin-top--sm"},e.description),r.a.createElement("hr",null))},u={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};var c=function(e){return r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("div",{style:u.requirementNameContainer},r.a.createElement("h3",{style:u.requirementName},e.name," "),e.required?r.a.createElement(i,{variant:"warning"},e.required," Required"):r.a.createElement(i,{variant:"info"},"Optional")),e.children)};var p={zigbee2mqtt:function(e){return r.a.createElement(c,{name:"Zigbee2MQTT Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){return r.a.createElement(c,{name:"ZHA Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){return r.a.createElement(c,{name:"deCONZ Integration",required:e.required},r.a.createElement("p",null,"If you plan to integrate the ",e.refers," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){return r.a.createElement(c,{name:"Controller Automation",required:e.required},r.a.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",r.a.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),r.a.createElement("p",null,e.children),r.a.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",r.a.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};var d=function(e){var t=e.id?p[e.id]:c;return r.a.createElement(t,{name:e.name,required:e.required,refers:e.refers},e.children)};n(102),n(103),n(111)}}]);