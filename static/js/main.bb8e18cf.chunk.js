(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c,a=n(2),i=n.n(a),s=n(9),r=n.n(s),o=(n(16),n(1)),l=n(3),d=n(10),u=n(4),b=n(0),j={primary:"bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-400 text-white",danger:"bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",success:"bg-green-500 hover:bg-green-600 text-white focus:ring-green-400",default:"bg-white text-gray-600 hover:bg-gray-50 border-gray-300 focus:ring-offset-2 focus:ring-indigo-400"},f=function(e){var t=e.isOpened,n=void 0!==t&&t,c=e.onClose,a=void 0===c?function(){}:c,i=e.children,s=e.footer,r=null!==s&&void 0!==s?s:function(){return Object(b.jsx)(m,{onClick:a,children:"Fechar"})};return Object(b.jsx)("div",{className:"fixed z-10 inset-0 overflow-y-auto transition-opacity\n    ".concat(n?"opacity-100 ease-in duration-200":"pointer-events-none opacity-0 ease-out duration-300","\n    "),children:Object(b.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(b.jsx)("div",{onClick:a,className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in duration-200\n          ".concat(n?"opacity-100 ease-out duration-300":"opacity-0 ease-in duration-200","\n        ")}),Object(b.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"\u200b"}),Object(b.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full\n        ".concat(n?"opacity-100 translate-y-0 sm:scale-100 ease-out duration-300":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 ease-in duration-200","\n      "),children:[Object(b.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:i}),Object(b.jsx)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:Object(b.jsx)(r,{})})]})]})})},m=function(e){var t,n=e.children,c=e.className,a=e.type,i=void 0===a?"default":a,s=Object(u.a)(e,["children","className","type"]);return Object(b.jsx)("button",Object(o.a)(Object(o.a)({type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm\n      ".concat(c,"\n      ").concat(null!==(t=j[i])&&void 0!==t?t:j.default,"\n    ")},s),{},{children:n}))},x=function(e){var t=e.id,n=e.label,c=Object(u.a)(e,["id","label"]);return Object(b.jsxs)("div",{className:"w-full px-3",children:[Object(b.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:t,children:n}),Object(b.jsx)("input",Object(o.a)({className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm bg-white text-gray-600 focus:bg-gray-50 border-gray-300 focus:ring-offset-2 focus:ring-indigo-400 mb-5",id:t,type:"text"},c))]})},O=f,h=function(e){var t=e.id,n=e.label,c=Object(u.a)(e,["id","label"]);return Object(b.jsxs)("div",{className:"w-full px-3",children:[Object(b.jsx)("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:t,children:n}),Object(b.jsx)("textarea",Object(o.a)({className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm bg-white text-gray-600 focus:bg-gray-50 border-gray-300 focus:ring-offset-2 focus:ring-indigo-400 mb-5",id:t,type:"text"},c))]})},g={WORK:{duration:30,label:"Work"},SHORT_BREAK:{duration:6,label:"Short break"},LONG_BREAK:{duration:18,label:"Long break"}},p=function(e){return Object(d.padStart)(e,2,"0")},v=function(e){var t=Math.floor(e/60),n=e%60;return"".concat(p(t),":").concat(p(n))},y=function(e){var t=e.task,n=e.onBack,i=void 0===n?function(){}:n,s=e.onFinish,r=void 0===s?function(){}:s,o=Object(a.useState)("WORK"),d=Object(l.a)(o,2),u=d[0],j=d[1],f=Object(a.useState)(g.WORK.duration),x=Object(l.a)(f,2),O=x[0],h=x[1],p=Object(a.useState)(!1),y=Object(l.a)(p,2),k=y[0],N=y[1];Object(a.useEffect)((function(){return function(){return clearInterval(c)}}),[]);var w=function(e){clearInterval(c),j(e),h(g[e].duration),N(!1)},C=function(){h((function(e){return e<1?(w(u),0):e-1}))};return Object(b.jsxs)("div",{className:"rounded-xl shadow-md w-5/12",children:[Object(b.jsxs)("div",{className:"bg-white p-5 mt-5",children:[t&&Object(b.jsx)("h2",{className:"text-5xl text-primary text-center font-bold mb-4",children:t.title}),Object(b.jsx)("div",{className:"py-3 text-center mb-4",children:Object.entries(g).map((function(e){var t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(b.jsx)(m,{type:n===u?"primary":"default",disabled:k,className:"".concat(k&&(n===u?"":"opacity-50")," ").concat(k?"cursor-default":""),onClick:function(){return w(n)},children:c.label},n)}))}),Object(b.jsx)("div",{className:"text-6xl text-center my-5",children:v(O)}),Object(b.jsxs)("div",{className:"py-3 text-center mb-1",children:[Object(b.jsx)(m,{type:"default",onClick:function(){w(u)},disabled:!k,children:"Stop"}),Object(b.jsx)(m,{type:"success",onClick:function(){N(!0),c=setInterval(C,1e3)},disabled:k,children:"Start"})]})]}),Object(b.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 text-right",children:[Object(b.jsx)(m,{onClick:i,children:"Voltar"}),Object(b.jsx)(m,{onClick:r,children:"Finalizar tarefa"})]})]})},k=n(6),N=function(e){var t=e.task,n=void 0===t?{}:t,c=e.isOpened,i=void 0!==c&&c,s=e.onSave,r=void 0===s?function(){}:s,d=e.onClose,u=void 0===d?function(){}:d,j=Object(a.useState)(n),f=Object(l.a)(j,2),g=f[0],p=f[1],v=function(e){return function(t){p(Object(o.a)(Object(o.a)({},g),{},Object(k.a)({},e,t.target.value)))}},y=function(e){return{value:g[e],onChange:v(e),id:"input-".concat(e,"-title")}},N=function(){r(g),u()};return Object(b.jsx)(O,{isOpened:i,onClose:u,footer:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{type:"primary",onClick:N,children:"Salvar"}),Object(b.jsx)(m,{onClick:u,children:"Fechar"})]})},children:Object(b.jsxs)("div",{children:[Object(b.jsx)(x,Object(o.a)({label:"Title"},y("title"))),Object(b.jsx)(h,Object(o.a)({label:"Description"},y("description"))),Object(b.jsx)(x,Object(o.a)({label:"Data limite",type:"date"},y("limitDate")))]})})},w=function(e){var t=e.task,n=e.allowPlay,c=void 0!==n&&n,i=e.onPlay,s=void 0===i?function(){}:i,r=e.onChange,d=void 0===r?function(){}:r,u=Object(a.useState)(!1),j=Object(l.a)(u,2),f=j[0],x=j[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"shadow-md m-2 bg-gray-50 p-3 rounded-md grid grid-cols-6 gap-1 items-center",children:[Object(b.jsx)("div",{className:"col-span-1",children:Object(b.jsx)("input",{type:"checkbox",checked:t.done,onChange:function(e){d(Object(o.a)(Object(o.a)({},t),{},{done:e.target.checked}))}})}),Object(b.jsx)("div",{className:"col-span-3 text-left",children:Object(b.jsx)("h2",{className:"text-primary text-xl",onClick:function(){return x(!0)},children:t.title})}),c&&Object(b.jsx)("div",{className:"col-span-2 text-right",children:Object(b.jsx)(m,{type:"success",onClick:function(){return s(t)},children:"Play"})})]}),Object(b.jsx)(N,{task:t,isOpened:f,onClose:function(){return x(!1)},onSave:d})]})},C=function(e){var t=e.title,n=void 0===t?"To do":t,c=e.tasks,i=void 0===c?[]:c,s=e.allowPlay,r=void 0!==s&&s,o=e.onNewTask,d=void 0===o?function(){}:o,u=e.onTaskChange,j=void 0===u?function(){}:u,f=e.onTaskPlay,m=void 0===f?function(){}:f,x=Object(a.useState)(""),O=Object(l.a)(x,2),h=O[0],g=O[1];return Object(b.jsxs)("div",{className:"p-2 shadow-sm rounded-md bg-white",children:[Object(b.jsx)("h2",{className:"text-2xl text-center mt-2 mb-4 text-primary font-bold",children:n}),Object(b.jsxs)("div",{children:[i.map((function(e,t){return Object(b.jsx)(w,{task:e,onChange:j,onPlay:m,allowPlay:r},t)})),Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),d({title:h}),g("")},className:"m-2",children:Object(b.jsx)("input",{className:"shadow-md bg-gray-50 p-3 rounded-md block w-full",value:h,onChange:function(e){return g(e.target.value)},placeholder:"Nova tarefa"})})]})]})},S=n(11),T=function(){var e,t,n=Object(a.useState)([]),c=Object(l.a)(n,2),i=c[0],s=c[1],r=(null!==(e=null===(t=i[i.length-1])||void 0===t?void 0:t.id)&&void 0!==e?e:0)+1,d=function(e){localStorage.setItem("tasks",JSON.stringify(e)),s(e)};Object(a.useEffect)((function(){s(JSON.parse(localStorage.getItem("tasks")||"[]"))}),[]);var u=function(e){return Object(o.a)(Object(o.a)({done:!0,labels:[]},e),{},{id:r})};return{tasks:i,addTask:function(e){d([].concat(Object(S.a)(i),[u(e)]))},deleteTask:function(e){d(i.filter((function(t){return t.id!==e.id})))},updateTask:function(e){d(i.map((function(t){return t.id===e.id?e:t})))}}},F=function(){var e=T(),t=e.tasks,n=e.addTask,c=e.updateTask,i=Object(a.useState)(),s=Object(l.a)(i,2),r=s[0],d=s[1];return Object(b.jsx)("div",{className:"p-4 justify-center flex",children:r?Object(b.jsx)(y,{task:r,onBack:function(){return d()},onFinish:function(){c(Object(o.a)(Object(o.a)({},r),{},{done:!0})),d()}}):Object(b.jsx)("div",{className:"flex-1",style:{maxWidth:1e3},children:Object(b.jsxs)("div",{className:"grid grid-cols-2 gap-5",children:[Object(b.jsx)(C,{title:"Para fazer",tasks:t.filter((function(e){return!e.done})),onNewTask:function(e){return n(Object(o.a)(Object(o.a)({},e),{},{done:!1}))},onTaskChange:c,allowPlay:!0,onTaskPlay:function(e){console.log(e),d(e)}}),Object(b.jsx)(C,{title:"Feitas",tasks:t.filter((function(e){return e.done})),onNewTask:function(e){return n(Object(o.a)(Object(o.a)({},e),{},{done:!0}))},onTaskChange:c})]})})})},P=function(){return Object(b.jsx)("div",{className:"App bg-gray-50 min-h-screen",children:Object(b.jsx)(F,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),I()}},[[20,1,2]]]);
//# sourceMappingURL=main.bb8e18cf.chunk.js.map