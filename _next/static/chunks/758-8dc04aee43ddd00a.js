"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{3526:function(e,s,r){r.d(s,{Z:function(){return n}});var a=r(5893);function n(e){var s=e.title,r=e.description;return(0,a.jsxs)("div",{className:"mb-10",children:[s&&(0,a.jsx)("h1",{className:"text-2xl md:text-4xl text-gray-800 font-bold mb-6",children:s}),r&&(0,a.jsx)("p",{className:"text-lg md:text-xl text-nhsuk-secondary-text",children:r})]})}},6717:function(e,s,r){r.d(s,{Z:function(){return O}});var a=r(5893),n=r(1664),t=r(1163),l=r(5319),c=r(3801),i=r(3153),d=r(7826),o=[{name:"Overview",href:"/"},{name:"Technical Documentation",href:"/data-access"},{name:"Other Information",href:"/nccid-collaborative"}],h=[{name:"Accessing the NCCID data",href:"/data-access"},{name:"Resources for data users",href:"/resources"}],x=[{name:"NCCID Collaborative",href:"/nccid-collaborative"},{name:"NCCID project summaries",href:"/project-summaries"},{name:"Performance Assessment Call",href:"/performance-assessment-call"},{name:"Links to other datasets",href:"/other-datasets"},{name:"Training data statistics",href:"/stats"}],m=[{name:"Overview",href:"/"},{name:"Accessing the NCCID data",href:"/data-access"},{name:"Resources for data users",href:"/resources"},{name:"NCCID Collaborative",href:"/nccid-collaborative"},{name:"NCCID project summaries",href:"/project-summaries"},{name:"Performance Assessment Call",href:"/performance-assessment-call"},{name:"Links to other datasets",href:"/other-datasets"},{name:"Training data statistics",href:"/stats"}];function f(e){var s=e.children;return(0,a.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl",children:s})}var u=r(387);function j(){for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return s.filter(Boolean).join(" ")}var p=function(e){return(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[e.icon&&(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"bg-blue-500 rounded p-1",children:(0,a.jsx)(e.icon,{className:"w-4 h-4 text-white"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"font-semibold text-gray-400 uppercase tracking-wider text-xs",children:e.children})})]})},g=function(e){var s=e.navigation,r=(0,u.useRouter)().query.slug;return(0,a.jsx)("nav",{className:"mb-4 space-y-1 border-l border-gray-200 ml-3",children:s.map((function(e){return(0,a.jsx)(n.default,{href:e.href,children:(0,a.jsxs)("a",{className:j(e.href==="/".concat(r)?"underline font-medium -ml-1 pl-7 text-blue-500":"text-gray-500","relative group flex items-center py-2 px-6 text-base"),children:[e.href==="/".concat(r)&&(0,a.jsx)("div",{className:"flex absolute -left-1 top-1/2 -mt-2 rounded-full border w-4 h-4 bg-white p-px",children:(0,a.jsx)("div",{className:"rounded-full bg-blue-500 flex-1"})}),e.name]})},e.name)}))})};function v(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex-grow flex flex-col space-y-8",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(p,{icon:i.IEm,children:"Technical Documentation"}),(0,a.jsx)(g,{navigation:h})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)(p,{icon:i.KNL,children:"Other Information"}),(0,a.jsx)(g,{navigation:x})]})]})})}function b(e){var s,r=e.color,t=e.children,l=e.href,c=e.type,i=e.onClick,d=void 0===i?function(){}:i;switch(r){default:case"primary":s="bg-green-500 text-white hover:bg-green-600";break;case"secondary":s="bg-gray-500 text-white hover:bg-gray-600";break;case"white":s="bg-white text-nhsuk-text"}var o="".concat("inline-flex items-center px-4 py-3 text-lg duration-100 font-semibold rounded shadow-nhsuk-button focus:bg-nhsuk-focus focus:text-nhsuk-text active:shadow-none"," ").concat(s);return l?(0,a.jsx)(n.default,{href:l,children:(0,a.jsx)("a",{className:o,children:t})}):(0,a.jsx)("button",{type:c||"button",className:o,onClick:d,children:t})}function N(e){return function(e){if(Array.isArray(e)){for(var s=0,r=new Array(e.length);s<e.length;s++)r[s]=e[s];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(){for(var e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return s.filter(Boolean).join(" ")}var w=function(e){var s=e.category;return(0,a.jsx)("div",{className:"border-t border-white border-opacity-20",children:(0,a.jsx)("nav",{className:"flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6",children:o.map((function(e){return(0,a.jsx)(n.default,{href:e.href,children:(0,a.jsx)("a",{className:y(e.name===s?"border-white font-semibold":"border-transparent","group flex items-center px-4 py-3 border-l-4 md:border-l-0 md:border-b-4 text-white hover:underline text-base focus:bg-nhsuk-yellow focus:text-black focus:border-black"),children:e.name})},e.name)}))})})},k=function(){return(0,a.jsx)(n.default,{href:"/",children:(0,a.jsxs)("a",{className:"flex flex-col space-y-6 md:space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-2 flex-shrink-0 text-white",children:[(0,a.jsx)("span",{children:(0,a.jsx)("img",{className:"h-10 w-auto",src:"".concat(d.O,"/logo-inverted.svg"),alt:"NCCID"})}),(0,a.jsx)("span",{className:"text-sm lg:text-lg",children:"National COVID-19 Chest Image Database (NCCID)"})]})})},C=function(){var e=(0,t.useRouter)().query.q;return(0,a.jsxs)("div",{className:"flex-1 flex items-center space-x-6",children:[(0,a.jsxs)("form",{action:"".concat(d.O,"/search/"),method:"GET",className:"flex-1 justify-stretch relative flex",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("input",{type:"text",name:"q",placeholder:"Search",className:"w-full border-2 border-transparent focus:ring-nhsuk-focus focus:ring-4 rounded-tl rounded-bl sm:text-sm",defaultValue:e||""})}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"submit",className:"w-full h-full flex-1 bg-gray-50 rounded-tr rounded-br px-3 text-blue-500 focus:bg-nhsuk-yellow focus:text-black ",children:(0,a.jsx)(i.W1M,{className:"w-6 h-6"})})})]}),(0,a.jsx)(n.default,{href:"https://github.com/nhsx/covid-chest-imaging-database",children:(0,a.jsx)("a",{target:"_BLANK",className:"rounded-full",children:(0,a.jsxs)("svg",{className:"w-10 h-10 flex-shrink-0 text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 16",fill:"none",children:[(0,a.jsx)("g",{clipPath:"url(githublogo)",children:(0,a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z",clipRule:"evenodd",className:"jsx-1651122719"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"githublogo",children:(0,a.jsx)("path",{fill:"transparent",d:"M0 0h15.86v15.86H0z",transform:"translate(.253906 .0493164)"})})})]})})})]})},A=function(e){var s=e.category;return(0,a.jsx)(l.p,{as:"nav",className:"bg-blue-500",children:function(e){var r=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(f,{children:[(0,a.jsxs)("div",{className:"flex justify-between py-6",children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(k,{})}),(0,a.jsx)("div",{className:"hidden md:flex",children:(0,a.jsx)(C,{})}),(0,a.jsx)("div",{className:"-mr-2 flex items-start md:hidden",children:(0,a.jsxs)(l.p.Button,{className:"bg-white inline-flex items-center justify-center p-2 text-nhsuk-text hover:bg-gray-100 focus:bg-nhsuk-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nhsuk-yellow",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),r?(0,a.jsx)(c.b0D,{className:"block h-6 w-6","aria-hidden":"true"}):(0,a.jsx)(c.Oqj,{className:"block h-6 w-6","aria-hidden":"true"})]})})]}),(0,a.jsx)("div",{className:"hidden md:block",children:(0,a.jsx)(w,{category:s})})]}),(0,a.jsxs)(l.p.Panel,{className:"md:hidden",children:[(0,a.jsx)(w,{category:s}),(0,a.jsx)("div",{className:"flex p-4 border-r border-white border-opacity-20",children:(0,a.jsx)(C,{})})]})]})}})},I=function(){return(0,a.jsx)("div",{className:"bg-gray-200 text-gray-500 border-t-4 border-blue-500 py-8 md:py-10",children:(0,a.jsx)(f,{children:(0,a.jsxs)("div",{className:"space-y-10 sm:space-y-6",children:[(0,a.jsxs)("div",{className:"flex flex-col space-y-6 md:space-y-0 md:space-x-10 md:flex-row md:justify-between md:items-start",children:[(0,a.jsx)("div",{className:"space-y-2 md:space-y-0 -ml-4",children:m.map((function(e){return(0,a.jsx)(n.default,{href:e.href,children:(0,a.jsx)("a",{className:"block md:inline-block underline px-4 pb-4",children:e.name})},e.name)}))}),(0,a.jsx)("div",{className:"flex-shrink-0",children:"\xa9 Copyright 2020 NHSX"})]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3 text-base",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 483.2 195.7",height:"17",width:"41",focusable:"false",children:(0,a.jsx)("path",{fill:"currentColor",d:"M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.6 25.4l19.4 22.2h3v-87.8h-80l24.3 27.5zM97.8 145c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.2 21 47.2 47S123.8 145 97.8 145"})}),(0,a.jsx)("span",{className:"",children:"All content is available under the Open Government Licence v3.0, except where otherwise stated."})]})]})})})},D=function(){var e=(0,t.useRouter)().query.slug,s=N(h).concat(N(x)),r=s.findIndex((function(s){return s.href==="/".concat(e)}));return(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{children:r>0&&(0,a.jsx)(b,{href:s[r-1].href,children:"Previous"})}),(0,a.jsx)("div",{children:r<s.length-1&&(0,a.jsx)(b,{href:s[r+1].href,children:"Next"})})]})};function O(e){var s=e.children,r=(e.title,e.category),n=e.formatting,t=e.darkBackground,c=e.noPagination;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"min-h-full",children:[(0,a.jsx)(A,{category:r}),(0,a.jsx)("div",{className:"".concat(t?"bg-gray-50":""),children:(0,a.jsx)("main",{className:"flex-1",children:(0,a.jsx)(f,{children:(0,a.jsxs)("div",{className:"flex flex-col py-8 lg:flex-row lg:py-12",children:[(0,a.jsx)(l.p,{children:function(e){var s=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"hidden lg:flex relative w-80 flex-shrink-0",children:(0,a.jsx)("div",{className:"-mt-6",children:(0,a.jsx)("div",{className:"sticky top-0 pt-6",children:(0,a.jsx)(v,{})})})}),(0,a.jsxs)("div",{className:"lg:hidden flex flex-col mb-8",children:[(0,a.jsx)(l.p.Panel,{className:"mb-6",children:(0,a.jsx)(v,{})}),(0,a.jsx)(l.p.Button,{className:"bg-gray-100 flex justify-center items-center p-4 text-gray-500 underline",children:s?"Close menu":"Show menu"})]})]})}}),(0,a.jsxs)("div",{className:"flex-1 space-y-10",children:[(0,a.jsx)("div",{className:"".concat(n?"prose max-w-none":""),children:s}),!c&&(0,a.jsx)(D,{})]})]})})})})]}),(0,a.jsx)(I,{})]})}},7826:function(e,s,r){r.d(s,{O:function(){return a}});var a="/covid-chest-imaging-database"}}]);