(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(6),l=n.n(j),d=n(8),p=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=AhyIWeFTZ3rUWrY431qA7P6XpDcFGN1i"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized.url,slug:t.slug}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.id,n=t.title,r=t.url;t.slug;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:r,alt:e}),Object(u.jsx)("p",{children:n})]})},f=function(t){var e=t.category,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1})}))}),[t]),c}(e),c=n.loading,a=n.data;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),c&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid animate__animated animate__zoomIn",children:a.map((function(t){var e=t.id,n=t.title,r=t.url,c=t.slug;return Object(u.jsx)(b,{id:e,title:n,url:r,slug:c},e)}))})]})};function g(){var t=Object(r.useState)(["Superman"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(f,{category:t},t)}))})]})}n(16);a.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.609e9567.chunk.js.map