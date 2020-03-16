(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{21:function(e,t,a){e.exports=a(51)},26:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),i=a.n(s),c=(a(26),a(1)),l=a(2),o=a(4),u=a(3),m=a(5),h={en:{address:"Address","address-help":"IP address of the interface",apply:"Apply","apply-desc":"Apply the current network configuration to the system. This may cause you to lose the connection to this configuration interface",copyright:"\xa9 2020 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.",dhcp:"DHCP",dns:"Name servers (DNS)","dns-help":"Comma-separated list of IP addresses",en:"English",ftp:"FTP",gateway:"Gateway","get-started":"Get Started",http:"HTTP",https:"HTTPS",interface:"Interface","interface-updated":"The interface was updated successfully",legal:"Legal information",login:"Login","login-description":"Login to configure the device.",logout:"Logout",macaddress:"MAC Address",manual:"Manual",mask:"Subnet mask",method:"Method",network:"Network","network-config":"Network Configuration",ntp:"Synchronize system clock ",privacy:"Privacy",proxy:"Proxy","proxy-config":"Proxy Configuration","proxy-help":"IP address and port","proxy-updated":"Submitted request to update proxy settings","report-a-bug":"Report a bug on this site",save:"Save","select-interface":"Select an interface","service-status":"Service Status",services:"Services","site-description1":"Configure the network interfaces","site-description2":"Configure the network proxy settings","site-description3":"Set the device time zone","site-description4":"Configure network time server",submit:"Submit",subtitle:"Configuration service for Ubuntu Core devices.",sv:"Swedish",time:"Time",timezone:"Time zone","time-config":"Time Configuration","time-updated":"Time configuration was updated successfully",title:"Ubuntu Core Configuration",use:"Use the interface"},sv:{address:"Adress",en:"Engelska","get-started":"Komma ig\xe5ng",sv:"Svenska",title:"Ubuntu Core Konfiguration"}},d=a(8),p=a.n(d);function f(e){var t=E();return h[t][e]||e}function g(){var e=p.a.get("username"),t=p.a.get("sessionID");return!(!e||!t)}function v(e){var t=f(e.code);return e.message&&(t+=": "+e.message),t}function E(){return sessionStorage.getItem("language")||"en"}var b={baseUrl:window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/v1/",LoadingImage:"/static/images/ajax-loader.gif",languages:["en","sv"]},y=["services","network","time"],k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLanguageChange=function(e){a.props.changeLanguage(e.target.value)},a.state={},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"link",value:function(e){return this.props.sectionId?"/"+this.props.section+"/"+this.props.sectionId+"/"+e:"/"+e}},{key:"renderLoginOut",value:function(){return g()?r.a.createElement("li",{key:"logout",className:"p-navigation__link",role:"menuitem"},r.a.createElement("a",{href:"/logout"},f("logout"))):r.a.createElement("li",{key:"login",className:"p-navigation__link",role:"menuitem"},r.a.createElement("a",{href:"/login"},f("login")))}},{key:"renderProxy",value:function(){if(this.props.config&&this.props.config.manageProxy){var e="proxy",t="";return this.props.section!==e&&this.props.subsection!==e||(t=" active"),r.a.createElement("li",{key:e,className:"p-navigation__link"+t,role:"menuitem"},r.a.createElement("a",{href:this.link(e)},f(e)))}}},{key:"renderLanguage",value:function(){var e=E(),t=b.languages;return r.a.createElement("li",{className:"p-navigation__link"},r.a.createElement("form",{id:"lang-form"},r.a.createElement("select",{onChange:this.handleLanguageChange},t.map((function(t){var a=t===e?"selected":"";return r.a.createElement("option",{key:t,value:t,selected:a},f(t))})))))}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{id:"navigation",class:"p-navigation header-slim"},r.a.createElement("div",{className:"p-navigation__banner row"},r.a.createElement("div",{className:"p-navigation__logo"},r.a.createElement("div",{className:"u-vertically-center"},r.a.createElement("a",{href:"/",className:"p-navigation__link"},r.a.createElement("img",{src:"/static/images/logo.png",alt:"ubuntu"})))),r.a.createElement("nav",{className:"p-navigation__nav"},r.a.createElement("span",{className:"u-off-screen"},r.a.createElement("a",{href:"#navigation"},"Jump to site")),r.a.createElement("ul",{className:"p-navigation__links",role:"menu"},y.map((function(t){var a="";return e.props.section!==t&&e.props.subsection!==t||(a=" active"),r.a.createElement("li",{key:t,className:"p-navigation__link"+a,role:"menuitem"},r.a.createElement("a",{href:e.link(t)},f(t)))})),this.renderProxy(),this.renderLoginOut(),this.renderLanguage()))))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{section:this.props.section,subsection:this.props.subsection,sectionId:this.props.sectionId,config:this.props.config,changeLanguage:this.props.changeLanguage}),r.a.createElement("section",{className:"p-strip--image is-dark header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 title"},r.a.createElement("h1",null,f("title")),r.a.createElement("p",null,f("subtitle"))))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={token:e.token||{}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderLogin",value:function(){if(!g())return r.a.createElement("a",{className:"p-button--brand",href:"/login",alt:""},f("login"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"first"},r.a.createElement("h2",null,f("get-started")),r.a.createElement("ul",{className:"p-list"},r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description1")),r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description2")),r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description3")),r.a.createElement("li",{className:"p-list__item is-ticked"},f("site-description4"))),this.renderLogin()))))}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"row footer"},r.a.createElement("p",null,f("copyright")),r.a.createElement("nav",{className:"p-footer__nav",role:"navigation"},r.a.createElement("ul",{className:"p-footer__links"},r.a.createElement("li",{className:"p-footer__item"},r.a.createElement("a",{className:"p-footer__link",href:"https://ubuntu.com/legal"},f("legal"))),r.a.createElement("li",{className:"p-footer__item"},r.a.createElement("a",{className:"p-footer__link",href:"https://ubuntu.com/legal/data-privacy"},f("privacy"))),r.a.createElement("li",{className:"p-footer__item"},r.a.createElement("a",{className:"p-footer__link",href:"https://github.com/CanonicalLtd/imagebuild/issues/new"},f("report-a-bug")))))))}}]),t}(n.Component),w=a(7),x=a.n(w),O={configGet:function(e,t){return x.a.get(b.baseUrl+"config")},loginRequest:function(e,t){return x.a.post(b.baseUrl+"login",e)},networkGet:function(){return x.a.get(b.baseUrl+"network")},networkUpdate:function(e){return x.a.post(b.baseUrl+"network",e)},networkApply:function(){return x.a.post(b.baseUrl+"network/apply")},proxyGet:function(){return x.a.get(b.baseUrl+"proxy")},proxyUpdate:function(e){return x.a.post(b.baseUrl+"proxy",e)},timeGet:function(){return x.a.get(b.baseUrl+"time")},timeUpdate:function(e){return x.a.post(b.baseUrl+"time",{ntp:e.ntp,time:e.time,timezone:e.timezone})},servicesGet:function(){return x.a.get(b.baseUrl+"services")}},j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){if(this.props.message){var e="p-notification--";return this.props.type?e+=this.props.type:e+="negative",r.a.createElement("div",{className:e},r.a.createElement("p",{className:"p-notification__response"},this.props.message))}return r.a.createElement("span",null)}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleMacAddressChange=function(e){e.preventDefault(),a.setState({macAddress:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.login()},a.state={macAddress:"",error:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"login",value:function(){var e=this;O.loginRequest({macAddress:this.state.macAddress}).then((function(t){if(!t.data.code)return a=t.data.username,n=t.data.sessionId,p.a.set("username",a),p.a.set("sessionID",n),void(window.location.href="/");var a,n;e.setState({error:f(t.data.code)+": "+t.data.message})})).catch((function(t){console.log(t.response),e.setState({error:f(t.response.data.code)+": "+t.response.data.message})}))}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,f("login")),r.a.createElement("p",null,f("login-description"))),this.renderError(),r.a.createElement("form",null,r.a.createElement("label",{for:"macaddress"},f("macaddress"),":"),r.a.createElement("input",{name:"macaddress",type:"text",value:this.state.macAddress,onChange:this.handleMacAddressChange}),r.a.createElement("button",{className:"p-button--positive",onClick:this.handleSubmit},f("submit"))))}}]),t}(n.Component),T=a(20),D=a.n(T),U=["dhcp","manual"],I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getNetworkConfig=function(){O.networkGet().then((function(e){a.setState({interfaces:e.data.interfaces,error:""}),!a.state.selected&&e.data.interfaces.length>0&&(a.getInterface(e.data.interfaces[0].interface),a.setState({selected:e.data.interfaces[0].interface}))})).catch((function(e){a.setState({error:v(e.response.data)})}))},a.handleSelectTab=function(e){e.preventDefault();var t=e.target.getAttribute("data-key");a.getInterface(t),a.setState({selected:t,error:"",message:""})},a.handleUseChange=function(e){e.preventDefault();var t=a.state.interface;t.use=!t.use,a.setState({interface:t})},a.handleMethodChange=function(e){e.preventDefault();var t=a.state.interface;t.method=e.target.value,a.setState({interface:t})},a.handleGatewayChange=function(e){e.preventDefault();var t=a.state.interface;t.gateway=e.target.value,a.setState({interface:t})},a.handleAddressChange=function(e){e.preventDefault();var t=a.state.interface;t.address=e.target.value,a.setState({interface:t})},a.handleMaskChange=function(e){e.preventDefault();var t=a.state.interface;t.mask=e.target.value,a.setState({interface:t})},a.handleDNSChange=function(e){e.preventDefault();var t=a.state.interface;t.nameServers=e.target.value.split(","),a.setState({interface:t})},a.handleSave=function(e){e.preventDefault(),O.networkUpdate(a.state.interface).then((function(e){a.getNetworkConfig(),a.setState({message:f("interface-updated"),error:""})})).catch((function(e){a.setState({error:v(e.response.data),message:""})}))},a.handleApply=function(e){e.preventDefault(),O.networkApply().then((function(e){a.getNetworkConfig(),a.setState({message:f("interface-updated"),error:""})})).catch((function(e){a.setState({error:v(e.response.data),message:""})}))},a.state={selected:null,interfaces:[],interface:{},error:"",message:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getNetworkConfig()}},{key:"getInterface",value:function(e){var t=this.state.interfaces.filter((function(t){return t.interface===e}));t.length>0&&this.setState({interface:t[0]})}},{key:"renderUse",value:function(){return this.state.interface.use?r.a.createElement("div",null,r.a.createElement("a",{href:"#use",className:"p-button--base has-icon",onClick:this.handleUseChange},r.a.createElement("img",{src:"/static/images/checkbox_checked_16.png",alt:"checked"})),r.a.createElement("span",null,f("use"))):r.a.createElement("div",null,r.a.createElement("a",{href:"#use",className:"p-button--base has-icon",onClick:this.handleUseChange},r.a.createElement("img",{src:"/static/images/checkbox_unchecked_16.png",alt:"unchecked"})),r.a.createElement("span",null,f("use")))}},{key:"renderMessage",value:function(){if(this.state.message)return r.a.createElement(j,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,f("network-config")),r.a.createElement("section",{className:"row"},r.a.createElement("div",null,r.a.createElement("nav",{className:"p-tabs"},r.a.createElement("ul",{className:"p-tabs__list",role:"tablist"},this.state.interfaces.map((function(t){var a="false";return e.state.selected===t.interface&&(a="true"),r.a.createElement("li",{className:"p-tabs__item",role:"presentation"},r.a.createElement("a",{href:"#"+t.interface,"data-key":t.interface,onClick:e.handleSelectTab,class:"p-tabs__link",tabindex:"0",role:"tab","aria-controls":"section1","aria-selected":a},t.interface))}))))),r.a.createElement("div",null,this.renderMessage(),this.renderError(),this.state.interface.interface?r.a.createElement("form",null,this.renderUse(),r.a.createElement("fieldset",{disabled:!this.state.interface.use},r.a.createElement("h3",null,f("interface")," ",this.state.interface.interface),r.a.createElement("label",{htmlFor:"method"},f("method"),":"),r.a.createElement("select",{value:this.state.interface.method,onChange:this.handleMethodChange},r.a.createElement("option",null),U.map((function(e){return r.a.createElement("option",{value:e},f(e))}))),r.a.createElement("label",{htmlFor:"nameServers"},f("dns"),":"),r.a.createElement("input",{name:"nameServers",type:"text",onChange:this.handleDNSChange,value:this.state.interface.nameServers?this.state.interface.nameServers.toString():"",placeholder:f("dns-help")}),r.a.createElement("label",{htmlFor:"address"},f("address"),":"),r.a.createElement("input",{name:"address",type:"text",value:this.state.interface.address,placeholder:f("address-help"),onChange:this.handleAddressChange}),r.a.createElement("label",{htmlFor:"mask"},f("mask"),":"),r.a.createElement("input",{name:"mask",type:"text",value:this.state.interface.mask,onChange:this.handleMaskChange}),r.a.createElement("label",{for:"gateway"},f("gateway"),":"),r.a.createElement("input",{name:"gateway",type:"text",value:this.state.interface.gateway,onChange:this.handleGatewayChange})),r.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},f("save"))):r.a.createElement("h4",null,f("select-interface"))),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col-10"},f("apply-desc")),r.a.createElement("button",{onClick:this.handleApply,className:"p-button--brand col-2"},f("apply")))))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getProxyConfig=function(){O.proxyGet().then((function(e){var t=e.data.proxy;t||(t={}),a.setState({proxy:t,message:""})})).catch((function(e){a.setState({message:v(e.response.data)})}))},a.handleHTTPChange=function(e){e.preventDefault();var t=a.state.proxy;t.http=e.target.value,a.setState({proxy:t})},a.handleHTTPSChange=function(e){e.preventDefault();var t=a.state.proxy;t.https=e.target.value,a.setState({proxy:t})},a.handleFTPChange=function(e){e.preventDefault();var t=a.state.proxy;t.ftp=e.target.value,a.setState({proxy:t})},a.handleSave=function(e){e.preventDefault(),O.proxyUpdate(a.state.proxy).then((function(e){a.setState({message:f("proxy-updated"),error:""})})).catch((function(e){a.setState({error:v(e.response.data),message:""})}))},a.state={proxy:{},error:"",message:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getProxyConfig()}},{key:"renderMessage",value:function(){if(this.state.message)return r.a.createElement(j,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,f("proxy-config")),r.a.createElement("section",{className:"row"},this.renderMessage(),this.renderError(),r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"http"},f("http"),":"),r.a.createElement("input",{name:"http",type:"text",value:this.state.proxy.http,onChange:this.handleHTTPChange,placeholder:f("proxy-help")}),r.a.createElement("label",{htmlFor:"https"},f("https"),":"),r.a.createElement("input",{name:"https",type:"text",value:this.state.proxy.https,onChange:this.handleHTTPSChange,placeholder:f("proxy-help")}),r.a.createElement("label",{htmlFor:"ftp"},f("ftp"),":"),r.a.createElement("input",{name:"ftp",type:"text",value:this.state.proxy.ftp,onChange:this.handleFTPChange,placeholder:f("proxy-help")}),r.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},f("save"))))))}}]),t}(n.Component),P=a(9),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleUnchecked=function(e){e.preventDefault(),a.props.onChange(!1)},a.handleChecked=function(e){e.preventDefault(),a.props.onChange(!0)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.checked?r.a.createElement("div",null,r.a.createElement("a",{href:"#select",className:"p-button--base has-icon",onClick:this.handleUnchecked},r.a.createElement("img",{src:"/static/images/checkbox_checked_16.png",alt:"checked"})),r.a.createElement("span",null,f(this.props.label))):r.a.createElement("div",null,r.a.createElement("a",{href:"#select",className:"p-button--base has-icon",onClick:this.handleChecked},r.a.createElement("img",{src:"/static/images/checkbox_unchecked_16.png",alt:"unchecked"})),r.a.createElement("span",null,f(this.props.label)))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getTimeConfig=function(){O.timeGet().then((function(e){a.setState({time:e.data.time,error:""})})).catch((function(e){a.setState({message:v(e.response.data)})}))},a.poll=function(){setTimeout(a.getTimeConfig.bind(Object(P.a)(a)),1e3)},a.handleTimezoneChange=function(e){e.preventDefault(),a.setField("timezone",e.target.value)},a.handleNTPChange=function(e){a.setField("ntp",e)},a.handleTimeChange=function(e){e.preventDefault(),a.setField("time",e.target.value)},a.handleSave=function(e){e.preventDefault(),O.timeUpdate(a.state.time).then((function(e){a.getTimeConfig(),a.setState({message:f("time-updated"),error:""})})).catch((function(e){a.setState({error:v(e.response.data),message:""})}))},a.state={time:{timezones:[]},error:"",message:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getTimeConfig()}},{key:"setField",value:function(e,t){var a=this.state.time;a[e]=t,this.setState({time:a})}},{key:"renderMessage",value:function(){if(this.state.message)return r.a.createElement(j,{type:"positive",message:this.state.message})}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,f("time-config")),r.a.createElement("section",{className:"row"},this.renderMessage(),this.renderError(),r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("label",{htmlFor:"timezone"},f("timezone"),":"),r.a.createElement("select",{value:this.state.time.timezone,onChange:this.handleTimezoneChange,placeholder:f("timezone-help")},r.a.createElement("option",null),this.state.time.timezones.map((function(e){return r.a.createElement("option",{value:e},f(e))}))),r.a.createElement(A,{label:f("ntp"),checked:this.state.time.ntp,onChange:this.handleNTPChange}),r.a.createElement("label",{htmlFor:"time"},f("time"),":"),r.a.createElement("input",{name:"time",type:"text",value:this.state.time.time,onChange:this.handleTimeChange,placeholder:f("time-help"),disabled:this.state.time.ntp}),r.a.createElement("button",{onClick:this.handleSave,className:"p-button--positive"},f("save"))))))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getServices=function(){O.servicesGet().then((function(e){console.log("---",e),a.setState({services:e.data.services,error:""})})).catch((function(e){console.log("---",e.response),a.setState({error:v(e.response.data)})}))},a.state={services:[],error:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getServices()}},{key:"renderError",value:function(){if(this.state.error)return r.a.createElement(j,{message:this.state.error})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,f("service-status")),r.a.createElement("section",{className:"row"},this.renderError(),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,f("name")),r.a.createElement("th",null,f("service")),r.a.createElement("th",{className:"xsmall u-align-text--center"},f("enabled")),r.a.createElement("th",{className:"xsmall u-align-text--center"},f("active")))),r.a.createElement("tbody",null,this.state.services.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.snap),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.enabled?r.a.createElement("div",{className:"led-green"}):r.a.createElement("div",{className:"led-yellow"})),r.a.createElement("td",null,e.active?r.a.createElement("div",{className:"led-green"}):r.a.createElement("div",{className:"led-red"})))}))))))}}]),t}(n.Component),z=D()(),G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getAppConfig=function(){O.configGet().then((function(e){a.setState({config:e.data.config,error:""})})).catch((function(e){a.setState({error:v(e.response.data)})}))},a.changeLanguage=function(e){console.log("---",e),function(e){sessionStorage.setItem("language",e)}(e),a.setState({language:e})},a.state={language:E(),location:z.location,token:e.token||{},proxy:{},config:{manageProxy:!1}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getAppConfig()}},{key:"handleNavigation",value:function(e){this.setState({location:e}),window.scrollTo(0,0)}},{key:"renderLogin",value:function(){return r.a.createElement(_,null)}},{key:"renderNetwork",value:function(e,t){if(!e)return r.a.createElement(I,null)}},{key:"renderProxy",value:function(e,t){if(!e)return r.a.createElement(L,null)}},{key:"renderTime",value:function(e,t){if(!e)return r.a.createElement(M,null)}},{key:"renderServices",value:function(e,t){if(!e)return r.a.createElement(F,null)}},{key:"render",value:function(){var e=function(){var e=window.location.pathname.split("/");switch(e.length){case 2:return{section:e[1]};case 3:return{section:e[1],sectionId:e[2]};case 4:return{section:e[1],sectionId:e[2],subsection:e[3]};default:return{}}}();return console.log(e),r.a.createElement("div",{className:"App"},""===e.section?r.a.createElement(C,{section:e.section,subsection:e.subsection,sectionId:e.sectionId,config:this.state.config,changeLanguage:this.changeLanguage}):"",""!==e.section?r.a.createElement(k,{section:e.section,subsection:e.subsection,sectionId:e.sectionId,config:this.state.config,changeLanguage:this.changeLanguage}):"",r.a.createElement("div",{className:"content row"},""===e.section?r.a.createElement(N,null):"","login"===e.section?this.renderLogin():"","network"===e.section?this.renderNetwork(e.sectionId,e.subsection):"","proxy"===e.section?this.renderProxy(e.sectionId,e.subsection):"","time"===e.section?this.renderTime(e.sectionId,e.subsection):"","services"===e.section?this.renderServices(e.sectionId,e.subsection):""),r.a.createElement(S,null))}}]),t}(n.Component);i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.89ae802e.chunk.js.map