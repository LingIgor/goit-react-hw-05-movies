"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[408],{600:function(n,e,t){t.d(e,{aV:function(){return f},au:function(){return l},q5:function(){return d},z1:function(){return p},z5:function(){return s}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="https://api.themoviedb.org/3",o="3f267efdd2dfa6b504977d892a47bb84",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/all/week?api_key=").concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},408:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a=t(861),c=t(439),u=t(757),i=t.n(u),o=t(791),s=t(600),p=t(689),f=t(168),l=t(444).ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 15px;\n  flex-wrap: wrap;\n"]))),d=t(790),v=t(184),h=function(){var n=(0,o.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],u=(0,o.useState)(null),f=(0,c.Z)(u,2),h=f[0],x=f[1],g=(0,o.useState)(null),m=(0,c.Z)(g,2),w=m[0],Z=m[1],k=(0,p.UO)().movieId;(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.au)(k);case 3:e=n.sent,r(e),Z("resolved"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),x(n.t0),Z("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[k]);var y=t.cast;return(0,v.jsxs)(v.Fragment,{children:["pending"===w&&"Loading...","rejected"===w&&(0,v.jsx)("h3",{children:h.message}),"resolved"===w&&(0,v.jsxs)(l,{children:[0===y.length&&(0,v.jsx)("h1",{children:"We don't have any information about the cast yet."}),y&&y.map((function(n){return(0,v.jsxs)("li",{children:[(0,v.jsx)(d.xv,{children:n.name}),(0,v.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(n.profile_path),alt:n.name,width:"170px"})]},n.id)}))]})]})}},790:function(n,e,t){t.d(e,{Eq:function(){return l},eJ:function(){return p},im:function(){return d},xv:function(){return f}});var r,a,c,u,i=t(168),o=t(87),s=t(444),p=(0,s.ZP)(o.rU)(r||(r=(0,i.Z)(["\n  font-size: 25px;\n  font-weight: 600;\n  text-decoration: none;\n  color: green;\n"]))),f=s.ZP.p(a||(a=(0,i.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n"]))),l=s.ZP.div(c||(c=(0,i.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),d=s.ZP.div(u||(u=(0,i.Z)(["\ndisplay: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n"])))}}]);
//# sourceMappingURL=408.3bb96d01.chunk.js.map