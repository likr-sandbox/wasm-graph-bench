(this["webpackJsonpdfs-bench"]=this["webpackJsonpdfs-bench"]||[]).push([[0],{175:function(e,t,a){var n=a(230),r=["GraphJs","run"];e.exports=function(){var e=new Worker(a.p+"fe9faf4efceba86319ab.worker.js",{name:"[hash].worker.js"});return n(e,r),e}},223:function(e,t,a){e.exports=a(362)},362:function(e,t,a){"use strict";a.r(t);a(224);var n=a(1),r=a.n(n),l=a(173),c=a(13),o=a.n(c),i=a(30),s=a(174),m=a(12),u=a(175),d=a.n(u),f=a(176),h=d()().run,p=function(e){for(var t=e.records,a=[],n=function(){for(var e=c[l],n=function(){var n=o[r];a.push({id:"".concat(e,"-").concat(n),data:t.filter((function(t){return t.graphType===e&&t.dfsType===n})).map((function(e){return{x:e.e,y:1e3*e.mean}}))})},r=0,o=["js","rust"];r<o.length;r++)n()},l=0,c=["js","rust"];l<c.length;l++)n();return r.a.createElement("div",{style:{height:"600px"}},r.a.createElement(f.a,{data:a,margin:{top:100,right:10,bottom:50,left:60},xScale:{type:"linear"},yScale:{type:"linear"},axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"|E|",legendOffset:36,legendPosition:"middle"},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"time (ms)",legendOffset:-50,legendPosition:"middle"},colors:{scheme:"category10"},pointColor:{theme:"background"},pointBorderWidth:1,pointBorderColor:{from:"serieColor"},pointLabel:"y",pointLabelYOffset:-12,isInteractive:!1,useMesh:!0,legends:[{anchor:"top-left",direction:"row",justify:!1,translateX:20,translateY:-20,itemsSpacing:2,itemDirection:"left-to-right",itemWidth:80,itemHeight:12,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}]}))},E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),u=Object(m.a)(c,2),d=u[0],f=u[1];return r.a.createElement("div",null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"DFS Benchmark with WebAssembly")))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-primary".concat(d?" is-loading":""),onClick:Object(s.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l([]),f(!0),t=[],a=100;case 4:if(!(a<=1e3)){e.next=15;break}return e.t0=i.a,e.next=8,h(a,.1);case 8:e.t1=e.sent,n=(0,e.t0)(e.t1);try{for(n.s();!(r=n.n()).done;)c=r.value,t.push(c)}catch(o){n.e(o)}finally{n.f()}l(Array.from(t));case 12:a+=100,e.next=4;break;case 15:f(!1);case 16:case"end":return e.stop()}}),e)})))},"Run")),r.a.createElement("div",{className:"control"},r.a.createElement(p,{records:a})),r.a.createElement("div",{className:"control"},r.a.createElement("table",{className:"table is-hoverable is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"|V|"),r.a.createElement("th",null,"|E|"),r.a.createElement("th",null,"Data Structure"),r.a.createElement("th",null,"DFS"),r.a.createElement("th",null,"Mean (ms)"),r.a.createElement("th",null,"Repeat"))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.v),r.a.createElement("td",null,e.e),r.a.createElement("td",null,e.graphType),r.a.createElement("td",null,e.dfsType),r.a.createElement("td",null,(1e3*e.mean).toFixed(3)),r.a.createElement("td",null,e.count))}))))))))};Object(l.render)(r.a.createElement(E,null),document.getElementById("content"))}},[[223,1,2]]]);
//# sourceMappingURL=main.11a6caa2.chunk.js.map