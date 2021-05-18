(this["webpackJsonpfkg-list-webapp"]=this["webpackJsonpfkg-list-webapp"]||[]).push([[0],{130:function(e,t,c){},269:function(e,t,c){"use strict";c.r(t);var n,r=c(0),a=c.n(r),i=c(106),s=c.n(i),l=c(36),o=c(120),u=c(121),b=(c(129),c(130),c(32)),j=c(9),d=c(38),h=c(46),O=c.n(h),p=c(39),f="/",x="/about",v=c(1),m=p.a.div(n||(n=Object(d.a)(["\n  min-height: 100vh;\n"])));function y(e){var t=e.children,c=Object(j.g)().pathname;return Object(v.jsxs)(m,{children:[Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light sticky-top",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(b.b,{to:f,className:"navbar-brand",children:"FKG LIST"}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(v.jsxs)("ul",{className:"navbar-nav",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(b.b,{to:f,className:O()("nav-link",{active:c===f}),children:"Home"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(b.b,{to:x,className:O()("nav-link",{active:c===x}),children:"About"})})]})})]})}),Object(v.jsx)("div",{className:"container",children:t})]})}function w(){return Object(v.jsx)(y,{children:Object(v.jsx)("div",{children:"About"})})}var g,k,N=c(16),U=c.n(N),A=c(27),F=c(13),S=c(23),K=c(56),q=c.n(K),D=c(15),E=c(2),C=c(3);!function(e){e.ascending="asc",e.descending="desc"}(g||(g={})),k||(k={});var R,T=c(112),H=c.n(T),L=new(function(){function e(t){Object(E.a)(this,e),this.client=void 0,this.client=t}return Object(C.a)(e,[{key:"request",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.request(t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())(H.a.create({baseURL:"/fkg-list",timeout:15e3,headers:{Accept:"application/json","Content-Type":"application/json"}})),V=new(function(){function e(){Object(E.a)(this,e),this.cache=null}return Object(C.a)(e,[{key:"fetchAll",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchUnits();case 2:return c=e.sent,t.star.length>0&&(c=c.filter((function(e){return t.star.includes(e.star)}))),t.attribute.length>0&&(c=c.filter((function(e){return t.attribute.includes(e.attribute)}))),t.favorite.length>0&&(c=c.filter((function(e){return t.favorite.includes(e.favorite)}))),t.keyword&&(c=c.filter((function(e){return e.name.includes(t.keyword)||e.code.includes(t.keyword)}))),c.sort((function(e,c){return t.sortDirection===g.ascending?e[t.sortKey]-c[t.sortKey]:c[t.sortKey]-e[t.sortKey]})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchUnits",value:function(){var e=Object(A.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.cache){e.next=5;break}return e.next=3,L.request({method:"get",url:"/units-simple.json"});case 3:t=e.sent,this.cache=t.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{id:"".concat(e.code,"-").concat(e.star),totalStats:e.hp+e.attack+e.defense})}));case 5:return e.abrupt("return",this.cache.slice());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),I=c(24),P=c(74),z=c.n(P),J=c(5),M=Object(I.c)({keyword:Object(I.d)().required(),star:Object(I.a)().of(Object(I.b)().oneOf([2,3,4,5,6])).required(),sortKey:Object(I.d)().required().oneOf(["totalStats","code"]),sortDirection:Object(I.d)().oneOf([g.ascending,g.descending]).required(),attribute:Object(I.a)().of(Object(I.b)().oneOf([J.Unit.Attribute.blue,J.Unit.Attribute.red,J.Unit.Attribute.violet,J.Unit.Attribute.yellow])).required(),favorite:Object(I.a)().of(Object(I.b)().oneOf([J.Unit.Favorite.book,J.Unit.Favorite.cake,J.Unit.Favorite.doll,J.Unit.Favorite.jewel])).required()}),W={keyword:"",attribute:[],favorite:[],sortDirection:g.ascending,sortKey:"totalStats",star:[]},_=function(){var e=Object(A.a)(U.a.mark((function e(t){var c,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=z.a.parse(t),n={keyword:c.q,star:c.rarity&&[c.rarity].flat(),sortKey:c.sort,sortDirection:c.order,favorite:c.favorite&&[c.favorite].flat(),attribute:c.attribute&&[c.attribute].flat()},e.abrupt("return",Object(S.e)(n,M).then((function(){return M.cast(n)})).catch((function(e){var t=Object(S.f)(e);return Object.fromEntries(Object.entries(W).map((function(e){var c=Object(F.a)(e,2),r=c[0],a=c[1];return t[r]?[r,a]:[r,M.pick([r]).cast(n)[r]]})))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t={q:e.keyword,rarity:e.star,sort:e.sortKey,order:e.sortDirection,favorite:e.favorite,attribute:e.attribute};return z.a.stringify(t)},G=c(116),Q=function(e){switch(e){case J.Unit.Attribute.blue:return"\u6253";case J.Unit.Attribute.red:return"\u65ac";case J.Unit.Attribute.yellow:return"\u7a81";default:return"\u9b54"}},X=function(e){switch(e){case J.Unit.Favorite.cake:return"\u30b1\u30fc\u30ad";case J.Unit.Favorite.book:return"\u672c";case J.Unit.Favorite.doll:return"\u306c\u3044\u3050\u308b\u307f";default:return"\u5b9d\u77f3"}},Y=function(e){return e.hp+e.attack+e.defense},Z=p.a.select(R||(R=Object(d.a)(["\n  min-width: 200px;\n"]))),$=function(e){return e.length>0?{value:e.map(G.toString)}:{defaultValue:[""]}};function ee(){var e=Object(S.d)(),t=e.handleChange,c=e.values;return Object(v.jsxs)(S.b,{className:"mt-4",children:[Object(v.jsxs)("div",{className:"mb-3 row",children:[Object(v.jsx)("label",{htmlFor:"keyword",className:"col col-form-label flex-grow-0",children:"Keyword"}),Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(S.a,{type:"text",className:"form-control",name:"keyword",placeholder:"Unit ID or Name"})})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-4 text-center",children:[Object(v.jsx)("label",{className:"mx-auto",children:"\u30ec\u30a2\u30ea\u30c6\u30a3\u30fc"}),Object(v.jsxs)(Z,Object(D.a)(Object(D.a)({className:"form-select w-auto mx-auto",multiple:!0,"aria-label":"multiple select example",onChange:t("star")},$(c.star)),{},{children:[Object(v.jsx)("option",{value:"",children:"\u3059\u3079\u3066"}),Object(v.jsx)("option",{value:"2",children:"\u26052"}),Object(v.jsx)("option",{value:"3",children:"\u26053"}),Object(v.jsx)("option",{value:"4",children:"\u26054"}),Object(v.jsx)("option",{value:"5",children:"\u26055"}),Object(v.jsx)("option",{value:"6",children:"\u26056"})]}))]}),Object(v.jsxs)("div",{className:"col-4 text-center",children:[Object(v.jsx)("label",{className:"mx-auto",children:"\u5c5e\u6027"}),Object(v.jsxs)(Z,Object(D.a)(Object(D.a)({className:"form-select w-auto mx-auto",multiple:!0,"aria-label":"multiple select example",onChange:t("attribute")},$(c.attribute)),{},{children:[Object(v.jsx)("option",{value:"",children:"\u3059\u3079\u3066"}),Object(v.jsx)("option",{value:J.Unit.Attribute.blue,children:Q(J.Unit.Attribute.blue)}),Object(v.jsx)("option",{value:J.Unit.Attribute.red,children:Q(J.Unit.Attribute.red)}),Object(v.jsx)("option",{value:J.Unit.Attribute.yellow,children:Q(J.Unit.Attribute.yellow)}),Object(v.jsx)("option",{value:J.Unit.Attribute.violet,children:Q(J.Unit.Attribute.violet)})]}))]}),Object(v.jsxs)("div",{className:"col-4 text-center",children:[Object(v.jsx)("label",{className:"mx-auto",children:"\u597d\u304d\u306a\u7269"}),Object(v.jsxs)(Z,Object(D.a)(Object(D.a)({className:"form-select w-auto mx-auto",multiple:!0,"aria-label":"multiple select example",onChange:t("favorite")},$(c.favorite)),{},{children:[Object(v.jsx)("option",{value:"",children:"\u3059\u3079\u3066"}),Object(v.jsx)("option",{value:J.Unit.Favorite.book,children:X(J.Unit.Favorite.book)}),Object(v.jsx)("option",{value:J.Unit.Favorite.cake,children:X(J.Unit.Favorite.cake)}),Object(v.jsx)("option",{value:J.Unit.Favorite.doll,children:X(J.Unit.Favorite.doll)}),Object(v.jsx)("option",{value:J.Unit.Favorite.jewel,children:X(J.Unit.Favorite.jewel)})]}))]})]}),Object(v.jsx)("div",{className:"text-center my-4",children:Object(v.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Filter"})})]})}var te=c(122),ce=c(117),ne=c.n(ce),re=c(118),ae=new ne.a,ie=new re.a;ie.debounce(100).subscribe((function(){console.log("loading images"),ae.update()}));var se={update:function(){ie.push("1")}};var le,oe=c(6),ue=c(7),be=function(e){Object(oe.a)(c,e);var t=Object(ue.a)(c);function c(){return Object(E.a)(this,c),t.apply(this,arguments)}return Object(C.a)(c,[{key:"render",value:function(){var e=this.props,t=e.height,c=e.children,n=e.placeholder,r=e.className,a=e.classNamePrefix,i=e.style;return Object(v.jsx)("tr",{className:"".concat(a,"-wrapper ").concat(r),ref:this.setRef,style:i,children:this.visible?c:n||Object(v.jsx)("td",{children:Object(v.jsx)("div",{style:{height:t},className:"".concat(a,"-placeholder")})})})}}]),c}(q.a),je=Object(p.a)((function(e){var t=e.src,c=e.placeholderSrc,n=e.className,a=Object(te.a)(e,["src","placeholderSrc","className"]);return Object(r.useEffect)((function(){se.update()}),[]),Object(v.jsx)("img",Object(D.a)(Object(D.a)({},a),{},{src:c,"data-src":t,className:O()("lazy",n)}))}))(le||(le=Object(d.a)(["\n  width: 50px;\n"]))),de=function(e){switch(e){case 0:return"\u9032\u5316\u524d";case 1:return"\u9032\u5316\u5f8c";default:return"\u958b\u82b1\u5f8c"}},he=Object(r.memo)((function(e){var t=e.unit;return Object(v.jsxs)(be,{children:[Object(v.jsx)("td",{children:t.code}),Object(v.jsx)("td",{children:t.images.map((function(e,t){return Object(v.jsx)(je,{src:e.url,placeholderSrc:"https://via.placeholder.com/50x50",alt:de(t)},e.url)}))}),Object(v.jsx)("td",{children:t.name}),Object(v.jsx)("td",{children:Q(t.attribute)}),Object(v.jsxs)("td",{children:["\u2605",t.star]}),Object(v.jsx)("td",{children:Y(t)}),Object(v.jsx)("td",{children:t.hp}),Object(v.jsx)("td",{children:t.attack}),Object(v.jsx)("td",{children:t.defense}),Object(v.jsx)("td",{children:X(t.favorite)})]})})),Oe=Object(r.memo)((function(e){var t=e.units;return Object(v.jsx)(v.Fragment,{children:t.map((function(e){return Object(v.jsx)(he,{unit:e},e.id)}))})})),pe=c(119);function fe(e){var t=e.sortKey,c=e.children,n=Object(S.d)().values;return Object(v.jsxs)(b.b,{to:{pathname:f,search:B(Object(D.a)(Object(D.a)({},n),{},{sortDirection:n.sortDirection===g.ascending?g.descending:g.ascending,sortKey:t}))},className:"text-decoration-none",children:[Object(v.jsx)("span",{className:"link-dark",children:c}),Object(v.jsx)(pe.a,{icon:"sort",className:"ms-2"})]})}function xe(){var e=Object(j.g)().search,t=Object(j.f)(),c=Object(r.useState)([]),n=Object(F.a)(c,2),a=n[0],i=n[1],s=Object(r.useState)(W),l=Object(F.a)(s,2),o=l[0],u=l[1];return Object(r.useEffect)((function(){function t(){return(t=Object(A.a)(U.a.mark((function t(){var c,n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return c=t.sent,u(c),t.next=6,V.fetchAll(c);case 6:n=t.sent,i(n);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,i]),Object(r.useEffect)((function(){Object(K.forceCheck)()}),[a]),Object(v.jsx)(y,{children:Object(v.jsx)(S.c,{initialValues:o,onSubmit:function(e){t.push({pathname:f,search:B(e)})},enableReinitialize:!0,children:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ee,{}),Object(v.jsxs)("table",{className:"table table-striped",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:Object(v.jsx)(fe,{sortKey:"code",children:"#"})}),Object(v.jsx)("th",{scope:"col",children:"\u30a2\u30d0\u30bf\u30fc"}),Object(v.jsx)("th",{scope:"col",children:"\u540d\u524d"}),Object(v.jsx)("th",{scope:"col",children:"\u5c5e\u6027"}),Object(v.jsx)("th",{scope:"col",children:"\u30ec\u30a2\u5ea6"}),Object(v.jsx)("th",{scope:"col",children:Object(v.jsx)(fe,{sortKey:"totalStats",children:"\u7dcf\u5408\u529b"})}),Object(v.jsx)("th",{scope:"col",children:"HP"}),Object(v.jsx)("th",{scope:"col",children:"\u653b\u6483\u529b"}),Object(v.jsx)("th",{scope:"col",children:"\u9632\u5fa1\u529b"}),Object(v.jsx)("th",{scope:"col",children:"\u597d\u304d\u306a\u7269"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsx)(Oe,{units:a})})]})]})})})}function ve(){return Object(v.jsx)(b.a,{basename:"/fkg-list",children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{path:"/about",children:Object(v.jsx)(w,{})}),Object(v.jsx)(j.a,{path:"/",children:Object(v.jsx)(xe,{})})]})})}l.b.add(o.a,u.a),s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(ve,{})}),document.getElementById("root"))},5:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Unit=void 0,function(e){!function(e){e[e.twoSteps=0]="twoSteps",e[e.threeSteps=1]="threeSteps",e[e.threeStepsWithArt=2]="threeStepsWithArt"}(e.Enhancement||(e.Enhancement={})),function(e){e[e.blue=1]="blue",e[e.red=2]="red",e[e.yellow=3]="yellow",e[e.violet=4]="violet"}(e.Attribute||(e.Attribute={})),function(e){e[e.cake=1]="cake",e[e.book=2]="book",e[e.doll=3]="doll",e[e.jewel=4]="jewel"}(e.Favorite||(e.Favorite={})),function(e){e[e.winterRose=1]="winterRose",e[e.bananaOcean=2]="bananaOcean",e[e.blossomHill=3]="blossomHill",e[e.bergamotValley=4]="bergamotValley",e[e.lilywood=5]="lilywood",e[e.lotusLake=6]="lotusLake"}(e.Family||(e.Family={})),function(e){e[e.none=0]="none",e[e.promoteToSixStars=1]="promoteToSixStars"}(e.Upgradability||(e.Upgradability={}))}(t.Unit||(t.Unit={}))}},[[269,1,2]]]);
//# sourceMappingURL=main.d3aee1c7.chunk.js.map