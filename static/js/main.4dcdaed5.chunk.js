(this.webpackJsonpredux1=this.webpackJsonpredux1||[]).push([[0],{103:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(14),o=i.n(s),a=(i(49),i(8)),r=i(12),l=i(20),u=localStorage.getItem("state"),j={todoList:u?JSON.parse(u):[],isVisible:0,isFevorite:!1,isSort:!1},d=Object(l.b)({name:"x",initialState:j,reducers:{setCheck:function(e,t){var i=0;e.todoList.map((function(n){t.payload===n.id&&e.todoList.splice(i,1),i++}))},setFavorite:function(e,t){e.todoList.map((function(e){t.payload===e.id&&(e.favorite=!e.favorite)}))},setClear:function(e){e.todoList.splice(0,e.todoList.length),localStorage.clear()},setVideo:function(e,t){e.todoList.push(t.payload),localStorage.setItem("state",JSON.stringify(e.todoList))},setSort:function(e,t){e.isSort=t.payload},setVisible:function(e,t){e.isVisible=t.payload},setFevorite:function(e,t){e.isFevorite=t.payload}}}),b=d.actions,h=(b.saveTodo,b.setCheck),O=b.setVideo,m=b.setVisible,v=b.setFavorite,f=b.setClear,p=b.setFevorite,g=b.setSort,x=function(e){return e.todos.todoList},k=function(e){return e.todos.isVisible},w=function(e){return e.todos.isFevorite},S=function(e){return e.todos.isSort},C=d.reducer,y=(i(54),i(2));function F(){var e=Object(r.b)(),t=Object(n.useState)(""),i=Object(a.a)(t,2),c=i[0],s=i[1],o=Object(n.useState)(!0),l=Object(a.a)(o,2),u=l[0],j=l[1],d=Object(n.useState)(!0),b=Object(a.a)(d,2),h=b[0],v=b[1],x=Object(n.useState)(!1),k=Object(a.a)(x,2),w=k[0],S=k[1],C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",i=e,n=i.search(t);if(-1===n)return e;var c=e.substring(e.lastIndexOf(t)+1);return(c=c!==e&&c).length>11&&(c=(c=e.substring(e.lastIndexOf("=")+1))!==e&&c),c},F=function(t){fetch("https://vimeo.com/api/v2/video/".concat(t,"/json")).then((function(e){return e.json()})).then((function(i){return e(O({itemView:i[0].stats_number_of_plays,itemLike:i[0].stats_number_of_likes,image:i[0].thumbnail_large,imageSmall:i[0].thumbnail_large,title:i[0].title,published:i[0].upload_date,video:C(t),done:!1,favorite:!1,id:Date.now()}))}))},N=function(t){fetch("https://www.googleapis.com/youtube/v3/videos?id=".concat(t,"&key=").concat("AIzaSyDPQ653rSjnsN9tmexU7CmkDKc5t_2t5Jo","&part=snippet,contentDetails,statistics,status")).then((function(e){return e.json()})).then((function(i){return e(O({itemView:i.items[0].statistics.viewCount,itemLike:i.items[0].statistics.likeCount,image:i.items[0].snippet.thumbnails.medium.url,imageSmall:i.items[0].snippet.thumbnails.default.url,title:i.items[0].snippet.title,published:i.items[0].snippet.publishedAt,video:C(t),done:!1,favorite:!1,id:Date.now()}))}))};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"input",children:[Object(y.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)}}),Object(y.jsx)("button",{onClick:function(){var e=C(c);e.length<=9?F(e):N(e)},children:"Add! "})]}),Object(y.jsxs)("div",{className:"buttonActions",children:[Object(y.jsx)("button",{onClick:function(){j(!u),e(m({isVisible:u}))},children:"Visible "}),Object(y.jsx)("button",{onClick:function(){e(f())},children:"Clear "}),Object(y.jsx)("button",{onClick:function(){for(var e=["yQZm2kLAdEs","c9nH86xA-gg","xZUhlfh62TE","SK2M3f59n-8","E5HqMRHkJvs"],t=0;t<e.length;t++)e[t].length<=9?F(e[t]):N(e[t])},children:"Demo "}),Object(y.jsx)("button",{style:h?{background:"grey"}:{background:"red"},onClick:function(){v(!h),e(p({isFevorite:h}))},children:"Favourite "}),Object(y.jsx)("button",{onClick:function(){S(!w),e(g({isSort:w}))},children:"Sort "})]})]})}i(56);var N=i(28),L=i.n(N),V=i(40),P=(i(58),i(13)),D=i(104),_=i(115),A=i(105),I=i(106),E=i(107),J=i(41),M=i.n(J),B=i(42),H=(i(34),function(e){var t=e.buttonLabel,i=e.className,c=e.url,s=e.VimeoOrYoutube,o=Object(n.useState)(!1),r=Object(a.a)(o,2),l=r[0],u=r[1],j=function(){return u(!l)};return Object(y.jsxs)("div",{children:[Object(y.jsx)(D.a,{color:"danger",onClick:j,children:t}),Object(y.jsxs)(_.a,{isOpen:l,toggle:j,className:i,children:[Object(y.jsx)(A.a,{toggle:j,children:"Modal title"}),Object(y.jsx)(I.a,{children:s?Object(y.jsx)("div",{className:"player-wrapper",children:Object(y.jsx)(M.a,{className:"react-player",url:c,width:"100%",height:"100%"})}):Object(y.jsx)("div",{className:"player-wrapper-vimeo",children:Object(y.jsx)(B.a,{video:"181696349"})})}),Object(y.jsxs)(E.a,{children:[Object(y.jsx)(D.a,{color:"primary",onClick:j,children:"Do Something"})," ",Object(y.jsx)(D.a,{color:"secondary",onClick:j,children:"Cancel"})]})]})]})}),R=function(e){var t=e.id,i=e.loading,n=e.dispatch,c=e.image,s=e.title,o=e.like,a=e.view,r=e.published,l=e.video,u=e.favorite;if(i)return Object(y.jsx)("h2",{children:"Loading..."});var j,d=!0;return l.length<=9?(j="https://player.vimeo.com/video/58385453?badge=0",d=!1):(j="https://www.youtube.com/watch?v=".concat(l),d=!0),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("ul",{className:"list-group mb-4",children:Object(y.jsx)("li",{className:"list-group-item",children:Object(y.jsx)(P.Container,{children:Object(y.jsxs)(P.Row,{children:[Object(y.jsx)(P.Col,{sm:3,children:Object(y.jsx)("div",{className:"outside",children:Object(y.jsx)("div",{className:"inside",children:Object(y.jsx)("img",{className:"thumbnail",src:c,alt:"BigCo Inc. logo"})})})}),Object(y.jsxs)(P.Col,{sm:7,children:[Object(y.jsx)("h5",{children:s}),Object(y.jsx)("h6",{children:o}),Object(y.jsx)("h6",{children:a}),Object(y.jsx)("h6",{children:r})]}),Object(y.jsxs)(P.Col,{sm:2,children:[Object(y.jsx)("button",{onClick:function(){n(h(t))},children:"Delete"}),Object(y.jsx)("button",{onClick:function(){n(v(t))},style:u?{background:"red"}:{background:"none"},children:"Favourite"}),Object(y.jsx)(H,{buttonLabel:"Show!",url:j,VimeoOrYoutube:d})]})]})})})})})},Y=i(108),K=i(109),Q=i(110),T=i(111),U=i(112),W=i(113),Z=i(114),q=function(e){var t=e.id,i=e.loading,n=e.dispatch,c=e.image,s=e.title,o=e.like,a=e.view,r=e.published,l=e.video,u=e.favorite;if(i)return Object(y.jsx)("h2",{children:"Loading..."});var j,d=!0;l.length<=9?(j="https://player.vimeo.com/video/58385453?badge=0",d=!1):(j="https://www.youtube.com/watch?v=".concat(l),d=!0);return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(P.Col,{sm:6,children:Object(y.jsx)(Y.a,{children:Object(y.jsxs)(K.a,{children:[Object(y.jsx)(Q.a,{top:!0,src:c,alt:"Card image cap"}),Object(y.jsxs)(T.a,{children:[Object(y.jsx)(U.a,{tag:"h5",children:s}),Object(y.jsxs)(W.a,{tag:"h6",className:"mb-2 text-muted",children:["Published Data : ",r]}),Object(y.jsxs)(Z.a,{children:["View : ",a," Like : ",o]}),Object(y.jsx)("button",{onClick:function(){n(h(t))},children:"Delete"}),Object(y.jsx)("button",{onClick:function(){n(v(t))},style:u?{background:"red"}:{background:"none"},children:"Favourite"}),Object(y.jsx)(H,{buttonLabel:"Show!",url:j,VimeoOrYoutube:d})]})]})})})})},z=function(e){for(var t=e.postsPerPage,i=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(i/t);s++)c.push(s);return Object(y.jsx)("nav",{children:Object(y.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(y.jsx)("li",{className:"page-item",children:Object(y.jsx)("a",{onClick:function(){return n(e)},className:"page-link",children:e})},e)}))})})},$=function(e){var t=e.list,i=e.isVisible,c=e.isFevorite,s=e.isSort,o=Object(n.useState)([]),l=Object(a.a)(o,2),u=l[0],j=l[1],d=Object(n.useState)(!0),b=Object(a.a)(d,2),h=b[0],O=b[1],m=Object(n.useState)(1),v=Object(a.a)(m,2),f=v[0],p=v[1],g=Object(n.useState)(5),x=Object(a.a)(g,1)[0],k=Object(n.useState)(4),w=Object(a.a)(k,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(V.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0),j(t),O(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var S,C=function(e){for(var t in e)null!==e[t]&&void 0!==e[t]||delete e[t];return e}(function(e,t){return Object.fromEntries(Object.entries(e).map((function(e,i){var n=Object(a.a)(e,2),c=n[0],s=n[1];return[c,t(s,c,i)]})))}(u,(function(e){return c?e.favorite?e:null:e})));S=s?Object.values(C).sort(function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(i,n){return(i[e]<n[e]?-1:i[e]>n[e]?1:0)*t}}("published")):C;for(var F=Object(r.b)(),N=0,D=0;D<Object.values(S).length;D++)!0===Object.values(S)[D].favorite&&N++;var _=c?N:Object.values(S).length,A=f*x,I=A-x,E=Object.values(S).slice(I,A),J=f*w,M=J-w,B=Object.values(S).slice(M,J),H=function(e){return p(e)};return Object(y.jsx)(y.Fragment,{children:i?Object(y.jsxs)("div",{className:"container mt-5",children:[E.map((function(e){return Object(y.jsx)(R,{id:e.id,loading:h,dispatch:F,image:e.image,title:e.title,like:e.itemLike,view:e.itemView,published:e.published,favorite:e.favorite,video:e.video,isFevorite:c},e.id)})),Object(y.jsx)(z,{postsPerPage:x,totalPosts:_,paginate:H})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(P.Container,{children:Object(y.jsx)(P.Row,{children:B.map((function(e){return Object(y.jsx)(q,{id:e.id,loading:h,dispatch:F,image:e.image,title:e.title,like:e.itemLike,view:e.itemView,published:e.published,favorite:e.favorite,video:e.video,isFevorite:c},e.id)}))})}),Object(y.jsx)(z,{className:"pagination",postsPerPage:w,totalPosts:_,paginate:H})]})})};var G=function(){var e=Object(r.c)(x),t=Object(r.c)(k),n=Object(r.c)(w),c=Object(r.c)(S);return i(99).config(),Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(F,{}),Object(y.jsx)($,{list:e,isVisible:t.isVisible,isFevorite:n.isFevorite,isSort:c.isSort})]})},X=Object(l.a)({reducer:{todos:C}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(102);o.a.render(Object(y.jsx)(c.a.Fragment,{children:Object(y.jsx)(r.a,{store:X,children:Object(y.jsx)(G,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},34:function(e,t,i){},49:function(e,t,i){},54:function(e,t,i){},56:function(e,t,i){},58:function(e,t,i){}},[[103,1,2]]]);
//# sourceMappingURL=main.4dcdaed5.chunk.js.map