"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[410],{7047:function(n,e,t){t.d(e,{Z:function(){return f}});var r,a,c=t(6871),u=t(168),o=t(6031),s=t(501),i=o.ZP.h1(r||(r=(0,u.Z)(["\n    margin-bottom:30px;\n"]))),p=(0,o.ZP)(s.rU)(a||(a=(0,u.Z)(["\ndisplay: block;\nmargin-bottom: 10px;\ncolor: darkblue;\nfont-size: 18px;\n"]))),l=t(184),f=function(n){var e=n.films,t=n.from,r=(0,c.TH)();return"home"===t?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{children:"Trending Films"}),(0,l.jsx)("ul",{children:e.map((function(n){return(0,l.jsx)("li",{children:(0,l.jsxs)(p,{to:"movies/".concat(n.id),children:[n.original_title," "]})},n.id)}))})]}):"movies"===t?(0,l.jsx)("ul",{children:e.map((function(n){return(0,l.jsx)("li",{children:(0,l.jsx)(p,{to:n.id.toString(),state:{from:r},children:n.original_title})},n.id)}))}):void 0}},2391:function(n,e,t){t.d(e,{BG:function(){return h},Pv:function(){return l},sR:function(){return d},sv:function(){return x},wr:function(){return i}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),o=t.n(u),s="e17c0253c8740e62872e4c433f2396d4";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/trending/movie/day?api_key=".concat(s));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/search/movie?api_key=".concat(s,"&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o().get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3"},5929:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,c,u=t(5861),o=t(885),s=t(7757),i=t.n(s),p=t(2791),l=t(501),f=t(2391),h=t(168),v=t(6031),d=v.ZP.form(r||(r=(0,h.Z)(["\nmargin: 20px 20px;\n"]))),m=(v.ZP.input(a||(a=(0,h.Z)(["\n  height: 24px;\n \n  font-size: 20px;\n  &:hover {\n    color: skyblue\n  }\n"]))),v.ZP.button(c||(c=(0,h.Z)(["\n  font-size: 20px;\n  margin-left: 10px;\n\n  cursor: pointer;\n  &:hover {\n    color: skyblue\n  }\n"])))),x=t(184),g=function(n){var e=n.onSubmit,t=(0,p.useState)(""),r=(0,o.Z)(t,2),a=r[0],c=r[1];return(0,x.jsxs)(d,{onSubmit:function(n){n.preventDefault(),""!==a.trim()&&(e(a),c(""))},children:[(0,x.jsx)("input",{onChange:function(n){c(n.target.value.toLowerCase())},value:a,type:"text",autoComplete:"off",autoFocus:!0}),(0,x.jsx)(m,{type:"submit",children:"Search"})]})},y=t(7047),b=t(7378),Z=function(){var n=(0,p.useState)(null),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)("idle"),c=(0,o.Z)(a,2),s=c[0],h=c[1],v=(0,p.useState)([]),d=(0,o.Z)(v,2),m=d[0],Z=d[1],j=(0,p.useState)(null),k=(0,o.Z)(j,2),w=k[0],S=k[1],_=(0,l.lr)(),P=(0,o.Z)(_,2),F=P[0],C=P[1],U=F.get("query"),q=function(n){r(n)};return(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h("pending"),n.next=4,(0,f.Pv)(U);case 4:if(0!==(e=n.sent).length){n.next=11;break}return n.next=8,Promise.reject(new Error("Try another name"));case 8:return n.abrupt("return",n.sent);case 11:Z(e);case 12:h("resolved"),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(0),h("rejected"),S(n.t0.message);case 19:case"end":return n.stop()}}),n,null,[[0,15]])})))).apply(this,arguments)}t&&C({query:t}),U&&function(){n.apply(this,arguments)}()}),[t,C,U]),"idle"===s?(0,x.jsx)(g,{onSubmit:q}):"pending"===s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{onSubmit:q}),(0,x.jsx)(b.Z,{})]}):"resolved"===s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{onSubmit:q}),(0,x.jsx)(y.Z,{films:m,from:"movies"})]}):"rejected"===s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{onSubmit:q}),(0,x.jsx)("h2",{children:w})]}):void 0}}}]);
//# sourceMappingURL=MoviesPage.0b59d1fa.chunk.js.map