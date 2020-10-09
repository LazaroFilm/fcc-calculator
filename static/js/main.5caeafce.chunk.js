/*! For license information please see main.5caeafce.chunk.js.LICENSE.txt */
(this["webpackJsonpfcc-calculator"]=this["webpackJsonpfcc-calculator"]||[]).push([[0],{42:function(e,t,a){e.exports=a(51)},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(9),c=a.n(r),l=a(23),n=a.n(l),s=a(39),o=(a(47),a(48),Object(r.memo)((function(e){var t=e.keyPressed,a=e.keys,r=function(e){var r=e.id;return c.a.createElement("button",{id:r,className:"keypad",onClick:function(){return t(r)}},a[r][1])};return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"btn-dark-grey",style:{fontSize:"90%"}},c.a.createElement(r,{id:"clear"})),c.a.createElement("td",{className:"btn-dark-grey",style:{fontSize:"90%"}},c.a.createElement(r,{id:"backspace"})),c.a.createElement("td",{className:"btn-dark-grey"},c.a.createElement(r,{id:"divide"})),c.a.createElement("td",{className:"btn-dark-grey"},c.a.createElement(r,{id:"multiply"}))),c.a.createElement("tr",null,c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"seven"})),c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"eight"})),c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"nine"})),c.a.createElement("td",{className:"btn-orange"},c.a.createElement(r,{id:"subtract"}))),c.a.createElement("tr",null,c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"four"})),c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"five"})),c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"six"})),c.a.createElement("td",{className:"btn-orange"},c.a.createElement(r,{id:"add"}))),c.a.createElement("tr",null,c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"one"})),c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"two"})),c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"three"})),c.a.createElement("td",{style:{height:"120px"},rowSpan:"2",className:"btn-orange"},c.a.createElement(r,{id:"equals"}))),c.a.createElement("tr",null,c.a.createElement("td",{colSpan:"2",className:"btn-light-grey"},c.a.createElement(r,{id:"zero"})),c.a.createElement("td",{className:"btn-light-grey"},c.a.createElement(r,{id:"decimal"}))))))}))),u=a(40),i=a(2),m=a(53),d={one:["1","1","num"],two:["2","2","num"],three:["3","3","num"],four:["4","4","num"],five:["5","5","num"],six:["6","6","num"],seven:["7","7","num"],eight:["8","8","num"],nine:["9","9","num"],zero:["0","0","num"],decimal:[".",".","dot"],add:["+","+","oper"],subtract:["-","\u2013","oper"],multiply:["*","\xd7","oper"],divide:["/","\xf7","oper"],equals:["=","=","equal"],clear:["ac","AC","clear"],backspace:["bksp","\u232b","bksp"]},p={calc:"0",result:"0",prevType:"clear",twoBack:"clear"},E=function(e,t){var a=d[t][2];switch(console.log("key: ".concat(t)),a){case"num":return y(e,t);case"oper":return g(e,t);case"dot":return v(e);case"equal":return k(e);case"bksp":return h(e);default:return b(e)}},y=function(e,t){var a=e.calc,r=e.result,c=e.prevType,l=d[t][0];return"num"===c||"dot"===c?"0"===r[0]&&"."!==r[1]?{calc:l,result:l,twoBack:c,prevType:"num"}:{calc:a+l,result:r+l,twoBack:c,prevType:"num"}:"clear"===c||"equal"===c?{calc:l,result:l,prevType:"num"}:"oper"===c?{calc:a+l,result:l,twoBack:c,prevType:"num"}:void 0},v=function(e){var t=e.calc,a=e.result,r=e.prevType;return"."===a[a.length-1]||a.includes(".")?{calc:t,result:a,twoBack:r,prevType:"dot"}:{calc:t+".",result:a+".",twoBack:r,prevType:"dot"}},g=function(e,t){var a=e.calc,r=e.result,c=e.prevType,l=d[t][0],n=d[t][1];return"equal"===c?{calc:r+l,result:r+n,twoBack:c,prevType:"oper"}:"dot"===c?{calc:a.slice(0,-1)+l,result:r.slice(0,-1)+n,twoBack:c,prevType:"oper"}:"subtract"===t?{calc:a+l,result:r+n,twoBack:c,prevType:"oper"}:{calc:a.replace(/([+\-*/]+)$/,"")+l,result:r.replace(/([+\\u2013\xd7\xf7]+)$/,"")+n,twoBack:c,prevType:"oper"}},b=function(){return Object(u.a)({},p)},k=function(e){var t=e.calc;return"dot"===e.prevType?{calc:"=",result:Object(i.oc)(Object(m.a)(t.slice(0,-1)),{precision:14}),twoBack:"equal",prevType:"equal"}:{calc:"=",result:Object(i.oc)(Object(m.a)(t),{precision:14}),twoBack:"equal",prevType:"equal"}},h=function(e){var t=e.calc,a=e.result,r=e.twoBack;return a.slice(0,-1).length<=1||t.slice(0,-1).length<=1?{calc:"0",result:"0",prevType:r}:{calc:t.slice(0,-1),result:a.slice(0,-1),prevType:r}},f=function(){var e=Object(r.useReducer)(E,p),t=Object(s.a)(e,2),a=t[0],l=a.calc,n=a.result,u=a.prevType,i=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{id:"formula"},l),c.a.createElement("div",{id:"display"},n),c.a.createElement(o,{keyPressed:i,keys:d,className:"Keypad"}),c.a.createElement("p",null,u),c.a.createElement("p",{style:{fontSize:"60%",backgroundColor:"white"}},"by LazaroFilm - last update: Oct 8 11:49 PM"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5caeafce.chunk.js.map