(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{141:function(t,e,i){"use strict";i.r(e);var s=i(1),n=i.n(s),c=i(49),o=i.n(c),r=(i(56),i(6)),a=i(0),l=function(){return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("h1",{children:"BerryBlogs"})}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(r.b,{to:"/",children:"Blogs"}),Object(a.jsx)(r.b,{to:"/about",children:"About"}),Object(a.jsx)(r.b,{to:"/contact",children:"Contact me"})]})]})},b=i(18),j=i(51),h=i.n(j),d=function(t){return console.log(b),Object(a.jsx)("div",{className:"blog-list",children:b.map((function(t){return Object(a.jsx)("div",{className:"blog-preview",children:Object(a.jsxs)(r.b,{to:"/blogs/".concat(t.id),children:[Object(a.jsx)("h2",{children:t.title}),Object(a.jsxs)("div",{className:"blog-info",children:[Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["Written by ",t.author]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["published on ",t.date]})})]}),Object(a.jsx)(h.a,{source:t.content,escapeHtml:!1,renderers:t.content}),Object(a.jsx)("small",{children:"kee reading..."})]})},t.id)}))})},u=i(24),p=function(t){var e=Object(s.useState)(null),i=Object(u.a)(e,2),n=i[0],c=i[1],o=Object(s.useState)(!0),r=Object(u.a)(o,2),a=r[0],l=r[1],b=Object(s.useState)(null),j=Object(u.a)(b,2),h=j[0],d=j[1];return Object(s.useEffect)((function(){var e=new AbortController;return setTimeout((function(){fetch(t,{signal:e.signal}).then((function(t){if(!t.ok)throw Error("could not fetch data");return t.json()})).then((function(t){console.log(t),c(t),l(!1),d(null)})).catch((function(t){"AbortError"===t.name?console.log("fetch aborted"):(d(t.message),l(!1))}))}),1e3),function(){e.abort()}}),[t]),{data:n,isLoading:a,error:h}},O=function(){var t=p("http://localhost:8000/blogs").isLoading;return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("div",{className:"page-title",children:"-All blogs-"}),t&&Object(a.jsx)("div",{children:" loading .... "}),d&&Object(a.jsx)(d,{})]})},m=i(2),x=function(){var t=Object(m.g)().id,e={},i=!1;return b.forEach((function(s,n){+t===+s.id&&(e.title=s.title,e.author=s.author,e.date=s.date,e.content=s.content,i=!0)})),!1===i?Object(a.jsx)(m.a,{to:"/404"}):Object(a.jsx)("div",{className:"blog-details",children:Object(a.jsxs)("article",{children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("p",{children:["written by ",e.author]}),Object(a.jsxs)("p",{children:["published on ",e.date]}),Object(a.jsx)("div",{children:e.content})]})})},g=function(){return Object(a.jsxs)("div",{className:"not-found",children:[Object(a.jsx)("h2",{children:"ooops,"}),Object(a.jsx)("p",{children:"cannot find the page you are looking for"}),Object(a.jsx)(r.b,{to:"/",children:" Back to home page"})]})},f=function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsx)("p",{children:"copyright reserved @berrybabalao2021"})})},v=function(){return Object(a.jsx)("div",{className:"about-page",children:Object(a.jsx)("h2",{children:"this an about me page"})})},y=function(){return Object(a.jsx)("div",{className:"contact-page",children:Object(a.jsx)("h2",{children:"this is a contact page"})})};var N=function(){return Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",children:Object(a.jsx)(O,{})}),Object(a.jsx)(m.b,{path:"/about",children:Object(a.jsx)(v,{})}),Object(a.jsx)(m.b,{path:"/contact",children:Object(a.jsx)(y,{})}),Object(a.jsx)(m.b,{path:"/blogs/:id",children:Object(a.jsx)(x,{})}),Object(a.jsx)(m.b,{path:"/404",children:Object(a.jsx)(g,{})}),Object(a.jsx)(m.b,{path:"*",children:Object(a.jsx)(g,{})})]}),Object(a.jsx)(f,{})]})]})})};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))},18:function(t){t.exports=JSON.parse('[{"id":1,"title":"lorem ipsum","author":"berry babalao","date":"january 24, 2020","content":"\\n![image](https://github.com/bertinNDAYISHIMIYE/blog_react/blob/main/personal/public/images/pexels-photo-1097456.jpeg)\\n\\nThis is my first blog post but i\'ve put all my brains into itThis is my first blog post but i\'ve put all my brains into itThis is my first blog post but i\'ve put all my brains into itThis is my first blog post but i\'ve put all my brains into it"},{"id":2,"title":"lorem ipsum","author":"berry babalao","date":"january 24, 2021","content":"\\n\\nThis is my second blog post but i\'ve put all my brains into itThis is my second blog post but i\'ve put all my brains into itThis is my second blog post but i\'ve put all my brains into itThis is my second blog post but i\'ve put all my brains into it"},{"id":4,"title":"lorem ipsum","author":"berry babalao","date":"january 24, 2020","content":"\\n\\nThis is my first blog post but i\'ve put all my brains into itThis is my first blog post but i\'ve put all my brains into itThis is my first blog post but i\'ve put all my brains into itThis is my first blog post but i\'ve put all my brains into it"}]')},56:function(t,e,i){}},[[141,1,2]]]);
//# sourceMappingURL=main.c862c1d1.chunk.js.map