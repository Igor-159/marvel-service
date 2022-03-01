(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[4],{192:function(e,t,c){},193:function(e,t,c){},194:function(e,t,c){},195:function(e,t,c){},196:function(e,t,c){},209:function(e,t,c){"use strict";c.r(t);var r=c(4),a=c(1),n=c(205),s=c(206),i=c(5),o=c(31),l=c(27),u=(c(192),c(0)),h=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],h=t[1],j=Object(o.a)(),d=j.loading,b=j.error,m=j.getCharacterByName,f=j.clearError,p=function(e){h(e)},O=b?Object(u.jsx)("div",{className:"char__search-critical-error",children:Object(u.jsx)(l.a,{})}):null,x=c?c.length>0?Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(u.jsx)(i.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"To page"})})]}):Object(u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(u.jsxs)("div",{className:"char__search-form",children:[Object(u.jsx)(n.d,{initialValues:{charName:""},validationSchema:s.a({charName:s.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,f(),m(t).then(p)},children:Object(u.jsxs)(n.c,{children:[Object(u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsx)(n.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(u.jsx)("button",{type:"submit",className:"button button__main",disabled:d,children:Object(u.jsx)("div",{className:"inner",children:"find"})})]}),Object(u.jsx)(n.a,{component:"div",className:"char__search-error",name:"charName"})]})}),x,O]})},j=c(9),d=(c(193),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),b=function(e,t,c){switch(e){case"waiting":return Object(u.jsx)(d,{});case"loading":return Object(u.jsx)(j.a,{});case"confirmed":return Object(u.jsx)(t,{data:c});case"error":return Object(u.jsx)(l.a,{});default:throw new Error("Unexpected process state")}},m=(c(194),c.p+"static/media/mjolnir.61f31e18.png"),f=function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:r}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},p=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(o.a)(),i=(s.loading,s.error,s.getCharacter),l=s.clearError,h=s.process,j=s.setProcess;Object(a.useEffect)((function(){p();var e=setInterval(p,6e4);return function(){clearInterval(e)}}),[]);var d=function(e){n(e)},p=function(){l();var e=Math.floor(400*Math.random())+1011e3;i(e).then(d).then((function(){return j("confirmed")}))};return Object(u.jsxs)("div",{className:"randomchar",children:[b(h,f,c),Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{onClick:p,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:m,alt:"mjolnir",className:"randomchar__decoration"})]})]})},O=c(29),x=(c(195),function(e,t,c){switch(e){case"waiting":return Object(u.jsx)(j.a,{});case"loading":return c?Object(u.jsx)(t,{}):Object(u.jsx)(j.a,{});case"confirmed":return Object(u.jsx)(t,{});case"error":return Object(u.jsx)(l.a,{});default:throw new Error("Unexpected process state")}}),v=function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!1),l=Object(r.a)(i,2),h=l[0],j=l[1],d=Object(a.useState)(210),b=Object(r.a)(d,2),m=b[0],f=b[1],p=Object(a.useState)(!1),v=Object(r.a)(p,2),_=v[0],g=v[1],N=Object(o.a)(),k=(N.loading,N.error,N.getAllCharacters),w=N.process,y=N.setProcess;Object(a.useEffect)((function(){C(m,!0)}),[]);var C=function(e,t){j(!t),k(e).then(E).then((function(){return y("confirmed")}))},E=function(e){var t=!1;e.length<9&&(t=!0),s((function(t){return[].concat(Object(O.a)(t),Object(O.a)(e))})),j((function(e){return!1})),f((function(e){return e+9})),g((function(e){return t}))},S=Object(a.useRef)([]),F=function(e){S.current.forEach((function(e){return e.classList.remove("char__item_selected")})),S.current[e].classList.add("char__item_selected"),S.current[e].focus()};return Object(u.jsxs)("div",{className:"char__list",children:[x(w,(function(){return function(t){var c=t.map((function(t,c){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(r={objectFit:"unset"}),Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return S.current[c]=e},onClick:function(){e.onCharSelected(t.id),F(c)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(t.id),F(c))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(u.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:c})}(n)}),h),Object(u.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:_?"none":"block"},onClick:function(){return C(m)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})},_=(c(196),function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:a,alt:c,style:o}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:r}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with  this character",i.map((function(e,t){if(!(t>9))return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),g=function(e){var t=Object(a.useState)(null),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(o.a)(),l=i.getCharacter,h=(i.clearError,i.process),j=i.setProcess;Object(a.useEffect)((function(){d()}),[e.charId]);var d=function(){var t=e.charId;t&&l(t).then(m).then((function(){return j("confirmed")}))},m=function(e){s(e)};return Object(u.jsx)("div",{className:"char__info",children:b(h,_,n)})},N=c(20),k=c(21),w=c(25),y=c(26),C=function(e){Object(w.a)(c,e);var t=Object(y.a)(c);function c(){var e;Object(N.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(k.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(l.a,{}):this.props.children}}]),c}(a.Component),E=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(C,{children:Object(u.jsx)(p,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(C,{children:Object(u.jsx)(v,{onCharSelected:function(e){n(e)}})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(C,{children:Object(u.jsx)(g,{charId:c})}),Object(u.jsx)(C,{children:Object(u.jsx)(h,{})})]})]}),Object(u.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})}},27:function(e,t,c){"use strict";var r=c.p+"static/media/error.42292aa1.gif",a=c(0);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250 px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},31:function(e,t,c){"use strict";var r=c(35),a=c.n(r),n=c(36),s=c(4),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],r=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],h=l[1],j=Object(i.useState)("waiting"),d=Object(s.a)(j,2),b=d[0],m=d[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(n.a)(a.a.mark((function e(t){var c,n,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},r(!0),m("loading"),e.prev=5,e.next=8,fetch(t,{method:c,body:n,headers:s});case 8:if((i=e.sent).ok){e.next=11;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 11:return e.next=13,i.json();case 13:return o=e.sent,r(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(5),r(!1),h(e.t0.message),m("error"),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){h(null),m("loading")}),[]),process:b,setProcess:m}}(),t=e.loading,c=e.request,r=e.error,o=e.clearError,l=e.process,u=e.setProcess,h="https://gateway.marvel.com:443/v1/public/",j="apikey=48ae8219bf78404dac3cb3365c964720",d=function(){var e=Object(n.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(h,"characters?name=").concat(t,"&").concat(j));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(a.a.mark((function e(){var t,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,c("".concat(h,"characters?limit=9&offset=").concat(t,"&").concat(j));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(h,"characters/").concat(t,"?&").concat(j));case 2:return r=e.sent,e.abrupt("return",O(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(n.a)(a.a.mark((function e(){var t,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,c("".concat(h,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(j));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(n.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(h,"comics/").concat(t,"?").concat(j));case 2:return r=e.sent,e.abrupt("return",x(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},x=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{getCharacterByName:d,loading:t,error:r,process:l,setProcess:u,clearError:o,getAllCharacters:b,getCharacter:m,getAllComics:f,getComic:p}}}}]);
//# sourceMappingURL=4.a1ec4840.chunk.js.map