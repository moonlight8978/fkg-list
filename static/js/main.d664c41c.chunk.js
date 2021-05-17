(this["webpackJsonpfkg-list-webapp"]=this["webpackJsonpfkg-list-webapp"]||[]).push([[0],{118:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),i=n(97),s=n.n(i),o=n(30),l=n(109),b=n(110),u=(n(117),n(118),n(26)),j=n(6),d=n(44),h=n(61),O=n.n(h),v=n(45),p="/",x="/about",f=n(1),m=v.a.div(r||(r=Object(d.a)(["\n  min-height: 100vh;\n"])));function y(e){var t=e.children,n=Object(j.g)().pathname;return Object(f.jsxs)(m,{children:[Object(f.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sticky-top",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(u.b,{to:p,className:"navbar-brand",children:"FKG LIST"}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(f.jsxs)("ul",{className:"navbar-nav",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(u.b,{to:p,className:O()("nav-link",{active:n===p}),children:"Home"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(u.b,{to:x,className:O()("nav-link",{active:n===x}),children:"About"})})]})})]})}),Object(f.jsx)("div",{className:"container",children:t})]})}function w(){return Object(f.jsx)(y,{children:Object(f.jsx)("div",{children:"About"})})}var g,k,U=n(9),N=n.n(U),A=n(21),F=n(18),S=n(16),K=n(14),q=n(4),D=n(5);!function(e){e.ascending="asc",e.descending="desc"}(g||(g={})),k||(k={});var C,E=n(103),T=n.n(E),H=new(function(){function e(t){Object(q.a)(this,e),this.client=void 0,this.client=t}return Object(D.a)(e,[{key:"request",value:function(){var e=Object(A.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.request(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(T.a.create({baseURL:"/fkg-list",timeout:15e3,headers:{Accept:"application/json","Content-Type":"application/json"}})),L=new(function(){function e(){Object(q.a)(this,e),this.cache=null}return Object(D.a)(e,[{key:"fetchAll",value:function(){var e=Object(A.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUnits();case 2:return n=e.sent,t.star.length>0&&(n=n.filter((function(e){return t.star.includes(e.star)}))),t.attribute.length>0&&(n=n.filter((function(e){return t.attribute.includes(e.attribute)}))),t.favorite.length>0&&(n=n.filter((function(e){return t.favorite.includes(e.favorite)}))),t.keyword&&(n=n.filter((function(e){return e.name.includes(t.keyword)||e.code.includes(t.keyword)}))),n.sort((function(e,n){return t.sortDirection===g.ascending?e[t.sortKey]-n[t.sortKey]:n[t.sortKey]-e[t.sortKey]})),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchUnits",value:function(){var e=Object(A.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.cache){e.next=5;break}return e.next=3,H.request({method:"get",url:"/units-simple.json"});case 3:t=e.sent,this.cache=t.map((function(e){return Object(K.a)(Object(K.a)({},e),{},{id:"".concat(e.code,"-").concat(e.star),totalStats:e.hp+e.attack+e.defense})}));case 5:return e.abrupt("return",this.cache.slice());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),R=n(17),V=n(65),I=n.n(V),J=n(3),M=Object(R.c)({keyword:Object(R.d)().required(),star:Object(R.a)().of(Object(R.b)().oneOf([2,3,4,5,6])).required(),sortKey:Object(R.d)().required().oneOf(["totalStats","code"]),sortDirection:Object(R.d)().oneOf([g.ascending,g.descending]).required(),attribute:Object(R.a)().of(Object(R.b)().oneOf([J.Unit.Attribute.blue,J.Unit.Attribute.red,J.Unit.Attribute.violet,J.Unit.Attribute.yellow])).required(),favorite:Object(R.a)().of(Object(R.b)().oneOf([J.Unit.Favorite.book,J.Unit.Favorite.cake,J.Unit.Favorite.doll,J.Unit.Favorite.jewel])).required()}),P={keyword:"",attribute:[],favorite:[],sortDirection:g.ascending,sortKey:"totalStats",star:[]},W=function(){var e=Object(A.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=I.a.parse(t),r={keyword:n.q,star:n.rarity&&[n.rarity].flat(),sortKey:n.sort,sortDirection:n.order,favorite:n.favorite&&[n.favorite].flat(),attribute:n.attribute&&[n.attribute].flat()},e.abrupt("return",Object(S.e)(r,M).then((function(){return M.cast(r)})).catch((function(e){var t=Object(S.f)(e);return Object.fromEntries(Object.entries(P).map((function(e){var n=Object(F.a)(e,2),c=n[0],a=n[1];return t[c]?[c,a]:[c,M.pick([c]).cast(r)[c]]})))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t={q:e.keyword,rarity:e.star,sort:e.sortKey,order:e.sortDirection,favorite:e.favorite,attribute:e.attribute};return I.a.stringify(t)},z=n(107),B=function(e){switch(e){case J.Unit.Attribute.blue:return"\u6253";case J.Unit.Attribute.red:return"\u65ac";case J.Unit.Attribute.yellow:return"\u7a81";default:return"\u9b54"}},G=function(e){switch(e){case J.Unit.Favorite.cake:return"\u30b1\u30fc\u30ad";case J.Unit.Favorite.book:return"\u672c";case J.Unit.Favorite.doll:return"\u306c\u3044\u3050\u308b\u307f";default:return"\u5b9d\u77f3"}},Q=function(e){return e.hp+e.attack+e.defense},X=v.a.select(C||(C=Object(d.a)(["\n  min-width: 200px;\n"]))),Y=function(e){return e.length>0?{value:e.map(z.toString)}:{defaultValue:[""]}};function Z(){var e=Object(S.d)(),t=e.handleChange,n=e.values;return Object(f.jsxs)(S.b,{className:"mt-4",children:[Object(f.jsxs)("div",{className:"mb-3 row",children:[Object(f.jsx)("label",{htmlFor:"keyword",className:"col col-form-label flex-grow-0",children:"Keyword"}),Object(f.jsx)("div",{className:"col",children:Object(f.jsx)(S.a,{type:"text",className:"form-control",name:"keyword",placeholder:"Unit ID or Name"})})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-4 text-center",children:[Object(f.jsx)("label",{className:"mx-auto",children:"\u30ec\u30a2\u30ea\u30c6\u30a3\u30fc"}),Object(f.jsxs)(X,Object(K.a)(Object(K.a)({className:"form-select w-auto mx-auto",multiple:!0,"aria-label":"multiple select example",onChange:t("star")},Y(n.star)),{},{children:[Object(f.jsx)("option",{value:"",children:"\u3059\u3079\u3066"}),Object(f.jsx)("option",{value:"2",children:"\u26052"}),Object(f.jsx)("option",{value:"3",children:"\u26053"}),Object(f.jsx)("option",{value:"4",children:"\u26054"}),Object(f.jsx)("option",{value:"5",children:"\u26055"}),Object(f.jsx)("option",{value:"6",children:"\u26056"})]}))]}),Object(f.jsxs)("div",{className:"col-4 text-center",children:[Object(f.jsx)("label",{className:"mx-auto",children:"\u5c5e\u6027"}),Object(f.jsxs)(X,Object(K.a)(Object(K.a)({className:"form-select w-auto mx-auto",multiple:!0,"aria-label":"multiple select example",onChange:t("attribute")},Y(n.attribute)),{},{children:[Object(f.jsx)("option",{value:"",children:"\u3059\u3079\u3066"}),Object(f.jsx)("option",{value:J.Unit.Attribute.blue,children:B(J.Unit.Attribute.blue)}),Object(f.jsx)("option",{value:J.Unit.Attribute.red,children:B(J.Unit.Attribute.red)}),Object(f.jsx)("option",{value:J.Unit.Attribute.yellow,children:B(J.Unit.Attribute.yellow)}),Object(f.jsx)("option",{value:J.Unit.Attribute.violet,children:B(J.Unit.Attribute.violet)})]}))]}),Object(f.jsxs)("div",{className:"col-4 text-center",children:[Object(f.jsx)("label",{className:"mx-auto",children:"\u597d\u304d\u306a\u7269"}),Object(f.jsxs)(X,Object(K.a)(Object(K.a)({className:"form-select w-auto mx-auto",multiple:!0,"aria-label":"multiple select example",onChange:t("favorite")},Y(n.favorite)),{},{children:[Object(f.jsx)("option",{value:"",children:"\u3059\u3079\u3066"}),Object(f.jsx)("option",{value:J.Unit.Favorite.book,children:G(J.Unit.Favorite.book)}),Object(f.jsx)("option",{value:J.Unit.Favorite.cake,children:G(J.Unit.Favorite.cake)}),Object(f.jsx)("option",{value:J.Unit.Favorite.doll,children:G(J.Unit.Favorite.doll)}),Object(f.jsx)("option",{value:J.Unit.Favorite.jewel,children:G(J.Unit.Favorite.jewel)})]}))]})]}),Object(f.jsx)("div",{className:"text-center my-4",children:Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Filter"})})]})}var $=Object(c.memo)((function(e){var t=e.unit;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t.code}),Object(f.jsx)("td",{children:t.name}),Object(f.jsx)("td",{children:B(t.attribute)}),Object(f.jsxs)("td",{children:["\u2605",t.star]}),Object(f.jsx)("td",{children:Q(t)}),Object(f.jsx)("td",{children:t.hp}),Object(f.jsx)("td",{children:t.attack}),Object(f.jsx)("td",{children:t.defense}),Object(f.jsx)("td",{children:G(t.favorite)})]},t.id)})),ee=Object(c.memo)((function(e){var t=e.units;return Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)($,{unit:e},e.id)}))})})),te=n(108);function ne(e){var t=e.sortKey,n=Object(S.d)().values;return Object(f.jsx)(u.b,{to:{pathname:p,search:_(Object(K.a)(Object(K.a)({},n),{},{sortDirection:n.sortDirection===g.ascending?g.descending:g.ascending,sortKey:t}))},children:Object(f.jsx)(te.a,{icon:"sort",className:"ms-2"})})}function re(){var e=Object(j.g)().search,t=Object(j.f)(),n=Object(c.useState)([]),r=Object(F.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(P),o=Object(F.a)(s,2),l=o[0],b=o[1];return Object(c.useEffect)((function(){function t(){return(t=Object(A.a)(N.a.mark((function t(){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:return n=t.sent,b(n),t.next=6,L.fetchAll(n);case 6:r=t.sent,i(r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,i]),Object(f.jsx)(y,{children:Object(f.jsx)(S.c,{initialValues:l,onSubmit:function(e){t.push({pathname:p,search:_(e)})},enableReinitialize:!0,children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Z,{}),Object(f.jsxs)("table",{className:"table table-striped",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{scope:"col",children:["#",Object(f.jsx)(ne,{sortKey:"code"})]}),Object(f.jsx)("th",{scope:"col",children:"\u540d\u524d"}),Object(f.jsx)("th",{scope:"col",children:"\u5c5e\u6027"}),Object(f.jsx)("th",{scope:"col",children:"\u30ec\u30a2\u5ea6"}),Object(f.jsxs)("th",{scope:"col",children:["\u7dcf\u5408\u529b",Object(f.jsx)(ne,{sortKey:"totalStats"})]}),Object(f.jsx)("th",{scope:"col",children:"HP"}),Object(f.jsx)("th",{scope:"col",children:"\u653b\u6483\u529b"}),Object(f.jsx)("th",{scope:"col",children:"\u9632\u5fa1\u529b"}),Object(f.jsx)("th",{scope:"col",children:"\u597d\u304d\u306a\u7269"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsx)(ee,{units:a})})]})]})})})}function ce(){return Object(f.jsx)(u.a,{children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/about",children:Object(f.jsx)(w,{})}),Object(f.jsx)(j.a,{path:"/",children:Object(f.jsx)(re,{})})]})})}o.b.add(l.a,b.a),s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(ce,{})}),document.getElementById("root"))},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Unit=void 0,function(e){!function(e){e[e.twoSteps=0]="twoSteps",e[e.threeSteps=1]="threeSteps",e[e.threeStepsWithArt=2]="threeStepsWithArt"}(e.Enhancement||(e.Enhancement={})),function(e){e[e.blue=1]="blue",e[e.red=2]="red",e[e.yellow=3]="yellow",e[e.violet=4]="violet"}(e.Attribute||(e.Attribute={})),function(e){e[e.cake=1]="cake",e[e.book=2]="book",e[e.doll=3]="doll",e[e.jewel=4]="jewel"}(e.Favorite||(e.Favorite={})),function(e){e[e.winterRose=1]="winterRose",e[e.bananaOcean=2]="bananaOcean",e[e.blossomHill=3]="blossomHill",e[e.bergamotValley=4]="bergamotValley",e[e.lilywood=5]="lilywood",e[e.lotusLake=6]="lotusLake"}(e.Family||(e.Family={})),function(e){e[e.none=0]="none",e[e.promoteToSixStars=1]="promoteToSixStars"}(e.Upgradability||(e.Upgradability={}))}(t.Unit||(t.Unit={}))}},[[253,1,2]]]);
//# sourceMappingURL=main.d664c41c.chunk.js.map