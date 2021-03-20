(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(96)),o=n(98),s={title:"On-Off schedule with state persistence",description:"A simple on-off schedule, with the addition of state persistence across disruptive events, making sure the target device is always in the expected state."},u={unversionedId:"blueprints/automation/on_off_schedule_state_persistence",id:"blueprints/automation/on_off_schedule_state_persistence",isDocsHomePage:!1,title:"On-Off schedule with state persistence",description:"A simple on-off schedule, with the addition of state persistence across disruptive events, making sure the target device is always in the expected state.",source:"@site/docs/blueprints/automation/on_off_schedule_state_persistence.mdx",slug:"/blueprints/automation/on_off_schedule_state_persistence",permalink:"/awesome-ha-blueprints/docs/blueprints/automation/on_off_schedule_state_persistence",editUrl:"https://github.com/EPMatt/awesome-ha-blueprints/edit/main/docs/blueprints/automation/on_off_schedule_state_persistence.mdx",version:"current"},l=[{value:"Description",id:"description",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Additional Notes",id:"additional-notes",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"This blueprint provides a simple on-off schedule, with the addition of state persistence across server reboots, powercuts, or other disruptive events which could potentially alter the expected state of the targeted entities. The automation makes sure the target is always in the expected state, even in these situations, but always leaving the freedom to manually toggle the target state as desired. It can be used on critical targets which require a simple on-off schedule during every single day."),Object(r.b)("p",null,"One common scenario where this could be useful is in the case of a server reboot or shutdown. For example, let's assume you've an automation ",Object(r.b)("em",{parentName:"p"},"A")," set to turn on light ",Object(r.b)("em",{parentName:"p"},"L")," at 12:00. If for whatever reason Home Assistant goes offline at 11:59 and turns back on at 12:01, automation ",Object(r.b)("em",{parentName:"p"},"A")," scheduled for 12:00 is not executed, with the result of ",Object(r.b)("em",{parentName:"p"},"L")," not being in the state you'd expect to be, after 12:00."),Object(r.b)("p",null,"Using this blueprint in the above example would have guaranteed the expected behaviour, with the automation ",Object(r.b)("em",{parentName:"p"},"A")," being run at Home Assistant startup, and setting the ",Object(r.b)("em",{parentName:"p"},"L")," state as described by the schedule."),Object(r.b)("p",null,"Examples of disruptive scenarios could include server reboots, network outages or powercuts. Since every installation could be influenced by many different events and check for them in many different ways, the blueprints includes the flexibility to optionally supply a custom event type which the automation will listen to. When such event is fired, the automation is run."),Object(r.b)("p",null,"The blueprint already implements the support for listening to Home Assistant startup events, but this functionality can be disabled as desired by the user."),Object(r.b)("p",null,"Internally, the blueprint calculates time ranges based on the provided On-Off times, bound to the target expected state. Whenever one of the specified times is reached or a disruptive event occurs, the automation retrieves the expected state from the calculated ranges, and enforces it on the target."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"No additional integrations or addons are required for this blueprint, since it's only based on the ",Object(r.b)("a",{parentName:"p",href:"https://www.home-assistant.io/integrations/homeassistant"},"Home Assistant Core Integration"),"."),Object(r.b)("p",null,"If you optionally want to supply a custom event type to the blueprint, you should setup a mechanism to fire the event in any situation a state check should be performed. This could be an integration firing an event, or another automation, so any additional required setup is out of scope of this documentation."),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)(o.a,{name:"Automation Target",description:"The target which the automation will turn on and off based on the provided schedule. This include whatever can be specified as a target.",selector:"target",required:!0,mdxType:"Input"}),Object(r.b)(o.a,{name:"On Time",description:"Time when the target should be placed in the on state.",selector:"time",required:!0,mdxType:"Input"}),Object(r.b)(o.a,{name:"Off Time",description:"Time when the target should be placed in the off state.",selector:"time",required:!0,mdxType:"Input"}),Object(r.b)(o.a,{name:"Custom Trigger Event",description:"A custom event which can trigger the state check (eg. a powercut event reported by external integrations). If you do not want to provide a custom event, simply leave this input blank.",mdxType:"Input"}),Object(r.b)(o.a,{name:"Trigger at Home Assistant startup",description:"Trigger the target state check and enforcement at Home Assistant startup. Disabled by default.",selector:"boolean",mdxType:"Input"}),Object(r.b)("h2",{id:"additional-notes"},"Additional Notes"),Object(r.b)("p",null,"This automation only provides a simple On-Off schedule. More complex situations could require a different approach to the problem. Also, be aware that running multiple automations generated with this blueprint against the same target could result in unexpected behaviour."))}d.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);var r=function(e){return i.a.createElement("span",{className:"badge badge--"+e.variant},e.children)},o={action:{type:"Action"},area:{type:"Area"},boolean:{type:"Boolean"},device:{type:"Device"},entity:{type:"Entity"},number:{type:"Number"},object:{type:"Object"},select:{type:"Select"},target:{type:"Target"},text:{type:"Text"},time:{type:"Time"},none:{type:"Text"}},s={inputName:{fontWeight:600},inputDescription:{fontSize:"0.9rem"}};var u=function(e){var t=e.selector?o[e.selector]:o.none;return i.a.createElement("div",null,i.a.createElement("span",{style:s.inputName},e.name," ",i.a.createElement(r,{variant:"primary"},t.type)," ",e.required?i.a.createElement(r,{variant:"warning"},e.required," Required"):i.a.createElement(r,{variant:"info"},"Optional")),i.a.createElement("br",null),i.a.createElement("p",{style:s.inputDescription,className:"margin-top--sm"},e.description),i.a.createElement("hr",null))},l={requirementNameContainer:{paddingBottom:"0.8rem"},requirementName:{display:"inline"}};var c=function(e){return i.a.createElement("div",{className:"margin-bottom--lg"},i.a.createElement("div",{style:l.requirementNameContainer},i.a.createElement("h3",{style:l.requirementName},e.name," "),e.required?i.a.createElement(r,{variant:"warning"},e.required," Required"):i.a.createElement(r,{variant:"info"},"Optional")),e.children)};var d={zigbee2mqtt:function(e){return i.a.createElement(c,{name:"Zigbee2MQTT Integration",required:e.required},i.a.createElement("p",null,"If you plan to integrate the ",e.refers," with Zigbee2MQTT, you must have this integration set up. Installation methods differ between different installation types. Check out the documentation for full details on the required hardware and how to set up Zigbee2MQTT on your system."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"https://www.zigbee2mqtt.io/"},"Zigbee2MQTT Docs"))},zha:function(e){return i.a.createElement(c,{name:"ZHA Integration",required:e.required},i.a.createElement("p",null,"If you plan to integrate the ",e.refers," with ZHA, you must have this integration set up. The ZHA integration can be configured from the Home Assistant UI. Check the documentation for full details on the required hardware and how to set up ZHA on your system."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"https://www.home-assistant.io/integrations/zha/"},"ZHA Integration Docs"))},deconz:function(e){return i.a.createElement(c,{name:"deCONZ Integration",required:e.required},i.a.createElement("p",null,"If you plan to integrate the ",e.refers," with deCONZ, you must have this integration set up. The deCONZ integration can be configured from the Home Assistant UI and requires an additional container to run deCONZ on. Head over to the documentation for full details on the required hardware and how to set up deCONZ on your system."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"https://www.home-assistant.io/integrations/deconz/"},"deCONZ Integration Docs"))},controller:function(e){return i.a.createElement(c,{name:"Controller Automation",required:e.required},i.a.createElement("p",null,"To use this blueprint you need to first create an automation with a Controller blueprint. You can then create an automation with this Hook,"," ",i.a.createElement("b",null,"making sure that you provide the same controller device or entity used in the corresponding Controller blueprint"),". This key step will link the two automations and ensure the Hook will respond to events fired by the Controller."),i.a.createElement("p",null,e.children),i.a.createElement("a",{href:"#supported-controllers"},"List of Supported Controllers")," -"," ",i.a.createElement("a",{href:"https://epmatt.github.io/awesome-ha-blueprints/blueprints/controllers"},"Controllers Docs"))}};var p=function(e){var t=e.id?d[e.id]:c;return i.a.createElement(t,{name:e.name,required:e.required,refers:e.refers},e.children)};n(102),n(103),n(111)}}]);