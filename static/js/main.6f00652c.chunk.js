(this.webpackJsonpboredapi=this.webpackJsonpboredapi||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(13),o=a(17),r=a(16),i=a(0),l=a.n(i),s=a(14),u=a.n(s),m=(a(23),a(2)),d=a(15),b=a.n(d);var v=function(){var e=Object(i.useState)(!0),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)([]),o=Object(m.a)(c,2),r=o[0],s=o[1],u=Object(i.useState)(0),d=Object(m.a)(u,2),v=d[0],h=d[1];return Object(i.useEffect)((function(){b.a.get("https://www.boredapi.com/api/activity/").then((function(e){n(!1),s(e.data)})).catch((function(e){console.log(e)}))}),[v]),l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{className:"bouncing-loader"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"category"},r.type),l.a.createElement("div",{className:"boredactivity"},"-  ",r.activity),l.a.createElement("button",{className:"btn",onClick:function(){return h(v+1)}}," Another ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"title"},"What should I do?"),l.a.createElement(v,null))}}]),a}(i.Component);u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.6f00652c.chunk.js.map