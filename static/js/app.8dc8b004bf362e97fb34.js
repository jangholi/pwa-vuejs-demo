webpackJsonp([1],{18:function(e,n,t){"use strict";n.a={name:"app"}},19:function(e,n,t){"use strict";var s=t(43),a=t.n(s),o=t(71),c=t.n(o);n.a={name:"hello",data:function(){return{messages:[],status:"disconnected"}},created:function(){var e=this,n={appId:"bijivekon",apiKey:"76ddb7bf87215583ee30ba2232ccaa30abe7cdb6",username:"bosesacuw",password:"ifmalboti",devMode:!0},t={webpush:{enabled:!0},silent:!1},s=new c.a.Chabok(n,t);s.on("message",function(n){console.log(n),e.messages=[].concat(a()(e.messages),[n])}),s.on("registered",function(e){console.log("DeviceId ",e)}),s.on("disconnected",function(n){e.status="disconnected",console.log("offline")}),s.on("connected",function(n){e.status="Connected",console.log("Connected")}),s.register("09194491940")}}},32:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=t(16),a=t(35),o=t(39);s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},35:function(e,n,t){"use strict";function s(e){t(36)}var a=t(18),o=t(38),c=t(17),i=s,r=c(a.a,o.a,!1,i,null,null);n.a=r.exports},36:function(e,n){},38:function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),t("main",[t("router-view")],1)])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",[t("img",{staticClass:"logo",attrs:{src:"http://chabokpush.com/images/chabok-logo.svg",height:"30"}}),t("span",[e._v("PWA Demo")])])}],o={render:s,staticRenderFns:a};n.a=o},39:function(e,n,t){"use strict";var s=t(16),a=t(40),o=t(41);s.a.use(a.a),n.a=new a.a({routes:[{path:"/",name:"Hello",component:o.a}]})},41:function(e,n,t){"use strict";function s(e){t(42)}var a=t(19),o=t(72),c=t(17),i=s,r=c(a.a,o.a,!1,i,null,null);n.a=r.exports},42:function(e,n){},72:function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"hello"},[t("div",{attrs:{id:"app"}},[t("ul",[t("div",[e._v(e._s(e.status))]),e._v(" "),e._l(e.messages,function(n){return t("li",[t("p",[e._v(e._s(n.content))])])})],2)])])},a=[],o={render:s,staticRenderFns:a};n.a=o}},[32]);
//# sourceMappingURL=app.8dc8b004bf362e97fb34.js.map