(this["webpackJsonprobo-friend-practice"]=this["webpackJsonprobo-friend-practice"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(13),s=c.n(r),o=(c(19),c(4)),i=(c(20),c(0));var l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"ROBOFRIENDS"})})};c(22);var b=function(e){return Object(i.jsx)("div",{className:"searchBox",children:Object(i.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",onChange:e.searchChange,placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})})})};c(23);var j=function(e){return e.robotsF.map((function(e,t){return Object(i.jsx)("div",{className:"card cardRobot",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("img",{src:"https://robohash.org/".concat(e.id),alt:"robot"}),Object(i.jsx)("h5",{className:"card-title",children:e.name}),Object(i.jsx)("h6",{children:e.email})]})},t)}))},u=c(14),d=c.n(u);var h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),u=s[0],h=s[1];return Object(n.useEffect)((function(){d.a.get("http://jsonplaceholder.typicode.com/users").then((function(e){console.log("useEffect"),console.log(e.data),a(e.data)}))}),[]),Object(i.jsxs)("div",{className:"background",children:[Object(i.jsx)(l,{}),Object(i.jsx)(b,{searchChange:function(e){console.log(e.target.value),h(e.target.value)}}),Object(i.jsx)(j,{robotsF:function(e){return e.filter((function(e){return e.name.toLowerCase().indexOf(u.toLowerCase())>-1}))}(c)})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),f()}},[[42,1,2]]]);
//# sourceMappingURL=main.0357e29e.chunk.js.map