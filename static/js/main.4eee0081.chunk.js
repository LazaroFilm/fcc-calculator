(this["webpackJsonpfcc-calculator"]=this["webpackJsonpfcc-calculator"]||[]).push([[0],{42:function(e,t,a){e.exports=a(51)},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(9),n=a.n(r),c=a(23),l=a.n(c),s=a(39),m=(a(47),a(48),Object(r.memo)((function(e){var t=e.keyPressed,a=e.keys,r=function(e){var r=e.id;return n.a.createElement("button",{id:r,className:"keypad",onClick:function(){return t(r)}},a[r][1])};return n.a.createElement(n.a.Fragment,null,n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"btn-dark-grey",style:{fontSize:"90%"}},n.a.createElement(r,{id:"clear"})),n.a.createElement("td",{className:"btn-dark-grey",style:{fontSize:"90%"}},n.a.createElement(r,{id:"backspace"})),n.a.createElement("td",{className:"btn-dark-grey"},n.a.createElement(r,{id:"divide"})),n.a.createElement("td",{className:"btn-dark-grey"},n.a.createElement(r,{id:"multiply"}))),n.a.createElement("tr",null,n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"seven"})),n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"eight"})),n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"nine"})),n.a.createElement("td",{className:"btn-orange"},n.a.createElement(r,{id:"subtract"}))),n.a.createElement("tr",null,n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"four"})),n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"five"})),n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"six"})),n.a.createElement("td",{className:"btn-orange"},n.a.createElement(r,{id:"add"}))),n.a.createElement("tr",null,n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"one"})),n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"two"})),n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"three"})),n.a.createElement("td",{style:{height:"120px"},rowSpan:"2",className:"btn-orange"},n.a.createElement(r,{id:"equals"}))),n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2",className:"btn-light-grey"},n.a.createElement(r,{id:"zero"})),n.a.createElement("td",{className:"btn-light-grey"},n.a.createElement(r,{id:"decimal"}))))))}))),o=a(40),i=a(2),u=a(53),d={one:["1","1","num"],two:["2","2","num"],three:["3","3","num"],four:["4","4","num"],five:["5","5","num"],six:["6","6","num"],seven:["7","7","num"],eight:["8","8","num"],nine:["9","9","num"],zero:["0","0","num"],decimal:[".",".","dot"],add:["+","+","oper"],subtract:["-","\u2013","oper"],multiply:["*","\xd7","oper"],divide:["/","\xf7","oper"],equals:["=","=","equal"],clear:["ac","AC","clear"],backspace:["bksp","\u232b","bksp"]},p={calc:"0",result:"0",prevType:"clear"},E=function(e,t){var a=d[t][2];switch(console.log("key: ".concat(t)),a){case"num":return y(e,t);case"oper":return b(e,t);case"dot":return g(e);case"equal":return h(e);case"clear":return v(e)}},y=function(e,t){var a=e.calc,r=e.result,n=e.prevType,c=d[t][0];return"num"===n||"dot"===n?"0"===r[0]&&"."!==r[1]?{calc:c,result:c,prevType:"num"}:{calc:a+c,result:r+c,prevType:"num"}:"clear"===n||"equal"===n?{calc:c,result:c,prevType:"num"}:"oper"===n?{calc:a+c,result:c,prevType:"num"}:void 0},g=function(e){var t=e.calc,a=e.result;return"."===a[a.length-1]||a.includes(".")?{calc:t,result:a,prevType:"dot"}:{calc:t+".",result:a+".",prevType:"dot"}},b=function(e,t){var a=e.calc,r=e.result,n=e.prevType,c=d[t][0],l=d[t][1];return console.log("operator pressed"),"subtract"===t?{calc:a+c,result:r+l,prevType:"oper"}:"equal"===n?{calc:r+c,result:r+l,prevType:"oper"}:"dot"===n?{calc:r.slice(0,-1)+c,result:r.slice(0,-1)+l,prevType:"oper"}:{calc:a.replace(/([+*/]+)$/,"")+c,result:r.replace(/([+\xd7\xf7]+)$/,"")+l,prevType:"oper"}},v=function(){return Object(o.a)({},p)},h=function(e){var t=e.calc;return{calc:"=",result:Object(i.oc)(Object(u.a)(t),{precision:14}),prevType:"equal"}},f=function(){var e=Object(r.useReducer)(E,p),t=Object(s.a)(e,2),a=t[0],c=a.calc,l=a.result,o=t[1];return n.a.createElement("div",{className:"App"},n.a.createElement("div",{id:"formula"},c),n.a.createElement("div",{id:"display"},l),n.a.createElement(m,{keyPressed:o,keys:d,className:"Keypad"}),n.a.createElement("p",{style:{fontSize:"60%",backgroundColor:"white"}},"by LazaroFilm - last update: Oct 8 4:06"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.4eee0081.chunk.js.map