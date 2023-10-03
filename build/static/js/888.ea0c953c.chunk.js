"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[888],{9215:function(t,e,n){var r=n(5671),a=n(3144),c=n(136),i=n(7277),o=n(2791),s=n(5609),u=n(184),l=function(t){(0,c.Z)(n,t);var e=(0,i.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={hasError:!1},t}return(0,a.Z)(n,[{key:"componentDidCatch",value:function(t,e){console.log(t,e)}},{key:"render",value:function(){return this.state.hasError?(0,u.jsx)(s.Z,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(o.Component);e.Z=l},5609:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error message"})}},6502:function(t,e,n){n.r(e),n.d(e,{Component:function(){return d}});var r=n(9439),a=n(2791),c=n(4270),i=n(9215),o=n(3433),s=n(1087),u=n(4304),l=n(8684),m=n(5609),p=n(184),f=function(t){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),c=n[0],i=n[1],f=(0,a.useState)(0),d=(0,r.Z)(f,2),h=d[0],v=d[1],g=(0,a.useState)(!0),b=(0,r.Z)(g,2),x=b[0],Z=b[1],y=(0,a.useState)(!1),j=(0,r.Z)(y,2),k=j[0],C=j[1],w=(0,u.Z)(),_=w.loading,E=w.error,N=w.getAllComics;(0,a.useEffect)((function(){S(h,!0)}),[]);var S=function(t,e){Z(!e),N(t).then(A)},A=function(t){i((function(){return[].concat((0,o.Z)(c),(0,o.Z)(t))})),Z(!1),v((function(t){return t+8})),C(t.lenght<8)};var D=function(e){var n=e.map((function(e,n){var r=-1!==e.thumbnail.lastIndexOf("image_not_available")?{objectFit:"unset"}:{objectFit:"cover"};return(0,p.jsx)("li",{className:"comics__item",tabIndex:0,onClick:function(){t.onComicsSelected(e.id)},onKeyDown:function(n){" "!==n.key&&"Enter"!==n.key||(n.preventDefault(),t.onComicsSelected(e.id))},children:(0,p.jsxs)(s.rU,{to:"/comics/".concat(e.id),children:[(0,p.jsx)("img",{src:e.thumbnail,alt:e.title,style:r,className:"comics__item-img"}),(0,p.jsx)("div",{className:"comics__item-name",children:e.title}),(0,p.jsx)("div",{className:"comics__item-price",children:e.price})]})},e.id)}));return(0,p.jsx)("ul",{className:"comics__grid",children:n})}(c),F=_&&!x?(0,p.jsx)(l.Z,{}):null,T=E?(0,p.jsx)(m.Z,{}):null;return(0,p.jsxs)("div",{className:"comics__list",children:[F,T,D,(0,p.jsx)("button",{className:"comics__btn button button_main-color button_long",disabled:x,style:{display:k?"none":"block"},onClick:function(){return S(h)},children:"LOAD MORE"})]})};function d(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],o=e[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(c.q,{children:[(0,p.jsx)("title",{children:"Comics page"}),(0,p.jsx)("meta",{name:"description",content:"Page with list of our comics"})]}),(0,p.jsx)(i.Z,{children:(0,p.jsx)(f,{onComicsSelected:function(t){o(t)},comicsId:n})})]})}d.displayName="ComicsPage"},8684:function(t,e,n){var r=n(184),a=function(t){return(0,r.jsx)("svg",{style:{margin:"".concat(t.margin),background:"none",display:"block"},width:t.size,height:t.size,viewBox:"0 0 128 128",space:"preserve",children:(0,r.jsx)("path",{fill:"#9f0013",d:"M64.4 16a49 49 0 0 0-50 48 51 51 0 0 0 50 52.2 53 53 0 0 0 54-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6z",children:(0,r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"1800ms",repeatCount:"indefinite"})})})};a.defaultProps={size:"64px",margin:"0 auto"},e.Z=a},4304:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(4165),a=n(5861),c=n(9439),i=n(2791),o=function(){var t=function(){var t=(0,i.useState)(!1),e=(0,c.Z)(t,2),n=e[0],o=e[1],s=(0,i.useState)(null),u=(0,c.Z)(s,2),l=u[0],m=u[1],p=(0,i.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a,c,i,s,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},o(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:c});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return s=t.sent,o(!1),t.abrupt("return",s);case 17:throw t.prev=17,t.t0=t.catch(4),o(!1),m(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,error:l,request:p,clearError:(0,i.useCallback)((function(){m(null)}),[])}}(),e=t.loading,n=t.error,o=t.clearError,s=t.request,u="https://gateway.marvel.com:443/v1/public/",l="apikey=4f2080802c14be696101f97dc9e2bd5f",m=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,s("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(g));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",v(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,s("".concat(u,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(b));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",b(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},g=function(t){return{id:t.id,name:t.name,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension}},b=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,pageCount:t.pageCount?"".concat(t.pageCount," pages"):"No information about the number of pages",language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:e,error:n,clearError:o,getAllCharacters:m,getCharacter:f,getCharacterByName:p,getAllComics:d,getComic:h}}}}]);
//# sourceMappingURL=888.ea0c953c.chunk.js.map