(this.webpackJsonpredux1=this.webpackJsonpredux1||[]).push([[0],{131:function(e,t,i){},132:function(e,t,i){},134:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(15),a=i.n(s),o=(i(61),i.p,i(7)),r=i(12),l=i(22),u=i(30),d=i.n(u),j=i(53),b=(i(67),i(85),i(40),i(13)),h=i(21),O=i.n(h),m=i(135),p=i(146),v=i(136),f=i(137),x=i(138),g=i(54),k=(i(48),i(2)),w=function(e){var t=e.buttonLabel,i=e.className,c=e.url,s=e.VimeoOrYoutube,a=Object(n.useState)(!1),r=Object(o.a)(a,2),l=r[0],u=r[1],d=function(){return u(!l)};return Object(k.jsxs)("div",{children:[Object(k.jsx)(m.a,{color:"danger",onClick:d,children:t}),Object(k.jsxs)(p.a,{isOpen:l,toggle:d,className:i,children:[Object(k.jsx)(v.a,{toggle:d,children:"Modal title"}),Object(k.jsx)(f.a,{children:s?Object(k.jsx)("div",{className:"player-wrapper",children:Object(k.jsx)(O.a,{className:"react-player",url:c,width:"100%",height:"100%"})}):Object(k.jsx)("div",{className:"player-wrapper-vimeo",children:Object(k.jsx)(g.a,{video:"181696349"})})}),Object(k.jsxs)(x.a,{children:[Object(k.jsx)(m.a,{color:"primary",onClick:d,children:"Do Something"})," ",Object(k.jsx)(m.a,{color:"secondary",onClick:d,children:"Cancel"})]})]})]})},C=function(e){var t=e.id,i=e.loading,c=e.dispatch,s=e.image,a=e.title,r=e.like,l=e.view,u=e.published,d=e.video,j=e.favorite,h=Object(n.useState)(!1),O=Object(o.a)(h,2);O[0],O[1];if(i)return Object(k.jsx)("h2",{children:"Loading..."});var m,p=!0;return d.length<=9?(m="https://player.vimeo.com/video/58385453?badge=0",p=!1):(m="https://www.youtube.com/watch?v=".concat(d),p=!0),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("ul",{className:"list-group mb-4",children:Object(k.jsx)("li",{className:"list-group-item",children:Object(k.jsx)(b.Container,{children:Object(k.jsxs)(b.Row,{children:[Object(k.jsx)(b.Col,{sm:3,children:Object(k.jsx)("div",{className:"outside",children:Object(k.jsx)("div",{className:"inside",children:Object(k.jsx)("img",{className:"thumbnail",src:s,alt:"BigCo Inc. logo"})})})}),Object(k.jsxs)(b.Col,{sm:7,children:[Object(k.jsx)("h5",{children:a}),Object(k.jsx)("h6",{children:r}),Object(k.jsx)("h6",{children:l}),Object(k.jsx)("h6",{children:u})]}),Object(k.jsxs)(b.Col,{sm:2,children:[Object(k.jsx)("button",{onClick:function(){c(Z(t))},children:"Usu\u0144"}),Object(k.jsx)("button",{onClick:function(){c(q(t))},style:j?{background:"red"}:{background:"none"},children:"Ulubione"}),Object(k.jsx)(w,{buttonLabel:"Zobacz!",url:m,VimeoOrYoutube:p})]})]})})})})})},y=i(139),N=i(140),F=i(141),L=i(142),V=i(143),S=i(144),P=i(145),D=function(e){var t=e.id,i=e.loading,c=e.dispatch,s=e.image,a=e.title,r=e.like,l=e.view,u=e.published,d=e.video,j=e.favorite,h=e.isFevorite,O=Object(n.useState)(!0),m=Object(o.a)(O,2);m[0],m[1];if(i)return Object(k.jsx)("h2",{children:"Loading..."});var p,v=!0;d.length<=9?(p="https://player.vimeo.com/video/58385453?badge=0",v=!1):(p="https://www.youtube.com/watch?v=".concat(d),v=!0);return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(b.Col,{sm:6,style:j&&h?{display:"none"}:{display:"block"},children:Object(k.jsx)(y.a,{children:Object(k.jsxs)(N.a,{children:[Object(k.jsx)(F.a,{top:!0,src:s,alt:"Card image cap"}),Object(k.jsxs)(L.a,{children:[Object(k.jsx)(V.a,{tag:"h5",children:a}),Object(k.jsxs)(S.a,{tag:"h6",className:"mb-2 text-muted",children:["Published Data : ",u]}),Object(k.jsxs)(P.a,{children:["View : ",l," Like : ",r]}),Object(k.jsx)("button",{onClick:function(){c(Z(t))},children:"Usu\u0144"}),Object(k.jsx)("button",{onClick:function(){c(q(t))},style:j?{background:"none"}:{background:"red"},children:"Ulubione"}),Object(k.jsx)(w,{buttonLabel:"Zobacz!",url:p,VimeoOrYoutube:v})]})]})})})})},_=function(e){for(var t=e.postsPerPage,i=e.totalPosts,n=e.paginate,c=[],s=1;s<=Math.ceil(i/t);s++)c.push(s);return Object(k.jsx)("nav",{children:Object(k.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(k.jsx)("li",{className:"page-item",children:Object(k.jsx)("a",{onClick:function(){return n(e)},className:"page-link",children:e})},e)}))})})},I=function(e){var t=e.list,i=e.isVisible,c=e.isFevorite,s=Object(n.useState)([]),a=Object(o.a)(s,2),l=(a[0],a[1]),u=Object(n.useState)(!0),h=Object(o.a)(u,2),O=h[0],m=h[1],p=Object(n.useState)(1),v=Object(o.a)(p,2),f=v[0],x=v[1],g=Object(n.useState)(5),w=Object(o.a)(g,1)[0],y=Object(n.useState)(4),N=Object(o.a)(y,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m(!0),l(t),m(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);for(var F=f*w,L=F-w,V=t.slice(L,F),S=f*N,P=S-N,I=t.slice(P,S),A=function(e){return x(e)},R=Object(r.b)(),Z=0;Z<t.length;Z++)t[Z].favorite&&!0===c&&0;return Object(k.jsx)(k.Fragment,{children:i?Object(k.jsxs)("div",{className:"container mt-5",children:[V.map((function(e){return Object(k.jsx)(C,{id:e.id,loading:O,dispatch:R,image:e.image,title:e.title,like:e.itemLike,view:e.itemView,published:e.published,favorite:e.favorite,video:e.video,isFevorite:c},e.id)})),Object(k.jsx)(_,{postsPerPage:w,totalPosts:t.length,paginate:A})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(b.Container,{children:Object(k.jsx)(b.Row,{children:I.map((function(e){return Object(k.jsx)(D,{id:e.id,loading:O,dispatch:R,image:e.image,title:e.title,like:e.itemLike,view:e.itemView,published:e.published,favorite:e.favorite,video:e.video,isFevorite:c},e.id)}))})}),Object(k.jsx)(_,{className:"pagination",postsPerPage:N,totalPosts:t.length,paginate:A})]})})},A=Object(l.b)({name:"x",initialState:{todoList:[],isVisible:0,isFevorite:!1},reducers:{setCheck:function(e,t){var i=0;e.todoList.map((function(n){t.payload===n.id&&e.todoList.splice(i,1),i++}))},setFavorite:function(e,t){e.todoList.map((function(e){t.payload===e.id&&(e.favorite=!e.favorite)}))},setClear:function(e){e.todoList.splice(0,e.todoList.length)},setVideo:function(e,t){e.todoList.push(t.payload)},setVisible:function(e,t){e.isVisible=t.payload},setFevorite:function(e,t){e.isFevorite=t.payload}}}),R=A.actions,Z=(R.saveTodo,R.setCheck),J=R.setVideo,U=R.setVisible,q=R.setFavorite,E=R.setClear,H=R.setFevorite,z=function(e){return e.todos.todoList},B=function(e){return e.todos.isVisible},Y=function(e){return e.todos.isFevorite},M=A.reducer;i(131);function W(){var e=Object(r.b)(),t=Object(n.useState)(""),i=Object(o.a)(t,2),c=i[0],s=i[1],a=Object(n.useState)(!0),l=Object(o.a)(a,2),u=l[0],d=l[1],j=Object(n.useState)(!0),b=Object(o.a)(j,2),h=b[0],O=b[1],m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",i=e,n=i.search(t);if(-1===n)return e;var c=e.substring(e.lastIndexOf(t)+1);return(c=c!=e&&c).length>11&&(c=(c=e.substring(e.lastIndexOf("=")+1))!=e&&c),c},p=function(t){fetch("https://vimeo.com/api/v2/video/".concat(t,"/json")).then((function(e){return e.json()})).then((function(t){return e(J({itemView:t[0].stats_number_of_plays,itemLike:t[0].stats_number_of_likes,image:t[0].thumbnail_large,imageSmall:t[0].thumbnail_large,title:t[0].title,published:t[0].upload_date,video:m(c),done:!1,favorite:!1,id:Date.now()}))}))},v=function(t){fetch("https://www.googleapis.com/youtube/v3/videos?id=".concat(t,"&key=AIzaSyDPQ653rSjnsN9tmexU7CmkDKc5t_2t5Jo&part=snippet,contentDetails,statistics,status")).then((function(e){return e.json()})).then((function(t){return e(J({itemView:t.items[0].statistics.viewCount,itemLike:t.items[0].statistics.likeCount,image:t.items[0].snippet.thumbnails.medium.url,imageSmall:t.items[0].snippet.thumbnails.default.url,title:t.items[0].snippet.title,published:t.items[0].snippet.publishedAt,video:m(c),done:!1,favorite:!1,id:Date.now()}))}))};return Object(k.jsxs)("div",{className:"input",children:[Object(k.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)}}),Object(k.jsx)("button",{onClick:function(){var e=m(c);e.length<=9?p(e):v(e)},children:"Add! "}),Object(k.jsx)("button",{onClick:function(){d(!u),e(U({isVisible:u}))},children:"Visible "}),Object(k.jsx)("button",{onClick:function(){e(E())},children:"Clear "}),Object(k.jsx)("button",{onClick:function(){for(var e=["181696349","yHqeqaLsZRE&t","ICRZHDNlJdA&t","ICRZHDNlJdA&t","yHqeqaLsZRE&t"],t=0;t<e.length;t++)e[t].length<=9?p(e[t]):v(e[t])},children:"Demo "}),Object(k.jsx)("button",{style:h?{background:"grey"}:{background:"red"},onClick:function(){O(!h),e(H({isFevorite:h}))},children:"Fev "})]})}i(132);var K=function(){var e=Object(r.c)(z),t=Object(r.c)(B),i=Object(r.c)(Y);return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(W,{}),Object(k.jsx)(I,{list:e,isVisible:t.isVisible,isFevorite:i.isFevorite})]})},Q=Object(l.a)({reducer:{todos:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(133);a.a.render(Object(k.jsx)(c.a.Fragment,{children:Object(k.jsx)(r.a,{store:Q,children:Object(k.jsx)(K,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,i){},61:function(e,t,i){},85:function(e,t,i){}},[[134,1,2]]]);
//# sourceMappingURL=main.22d8b652.chunk.js.map