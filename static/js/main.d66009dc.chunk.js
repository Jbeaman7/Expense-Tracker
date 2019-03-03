(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(64),c=a.n(l),o=(a(74),a(4)),s=a(5),u=a(7),i=a(6),m=a(8),p=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar navbar-light bg-info"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-white"},"Expense Tracker")))}}]),t}(n.Component),d=a(68),E=a(32),b=a(65),h=r.a.createContext(),f=function(e,t){switch(t.type){case"ADD_EXPENSE":return Object(b.a)({},e,{expenses:t.expenses});default:return e}},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={expenses:[],dispatch:function(e){return a.setState(function(t){return f(t,e)})}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),O=h.Consumer,j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={expenses:[],expenseName:"",price:"",category:""},a.handleInput=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e,t){t.preventDefault(),e({type:"ADD_EXPENSE",expenses:a.state.expenses})},a.addExpenses=function(){a.setState({expenses:[].concat(Object(d.a)(a.state.expenses),[{expenseName:a.state.expenseName,price:a.state.price,category:a.state.category}]),expenseName:"",price:""})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(O,null,function(t){var a=t.dispatch;return r.a.createElement("div",{className:"card card-body"},r.a.createElement("label",null,"Name of purchase"),r.a.createElement("form",{onSubmit:e.handleSubmit.bind(e,a)},r.a.createElement("input",{onChange:e.handleInput,value:e.state.expenseName,className:"form-control",name:"expenseName"}),r.a.createElement("label",null,"Price"),r.a.createElement("input",{onChange:e.handleInput,value:e.state.price,className:"form-control mr-2",name:"price",type:"number",min:"0.01",step:"0.01",max:"5000"}),r.a.createElement("label",null,"Category"),r.a.createElement("select",{defaultValue:e.state.selectValue,onChange:e.handleInput,className:"form-control",name:"category"},r.a.createElement("option",{selected:!0,disabled:!0},"Please Select a Category"),r.a.createElement("option",null,"Food and Drink"),r.a.createElement("option",null,"Transportation"),r.a.createElement("option",null,"Clothing"),r.a.createElement("option",null,"Personal Care"),r.a.createElement("option",null,"Misc.")),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.addExpenses,className:"btn btn-dark"},"Submit")))})}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card mt-5"},r.a.createElement("table",{className:"table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name Of Expense"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Category"))),r.a.createElement(O,null,function(e){var t=e.expenses.length>0?e.expenses.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.expenseName),r.a.createElement("td",null,"$",e.price),r.a.createElement("td",null,e.category))}):r.a.createElement("tr",null,r.a.createElement("td",null,"No Expenses Posted Yet"));return r.a.createElement("tbody",null,t)})))}}]),t}(n.Component),x=function(){return r.a.createElement(O,null,function(e){var t=e.expenses.length>0?e.expenses.reduce(function(e,t){return e+=parseInt(t.price)},0):0;return r.a.createElement("div",{className:"card card-body"},r.a.createElement("h3",{className:"text-center"},"Your Total Expenses: $",t),r.a.createElement(y,null))})},g=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(j,null)),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement(x,null)))},N=a(66),C={labels:["Food and Drink","Clothing","Transportation","Personal Care","Misc."],datasets:[{backgroundColor:["#6a6dad","#007b8f","#8cd1f1","#00897c","#1af6f9"],data:[65,350,80,81,56]}]},k=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{ref:"chart",data:C}))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{className:"container my-5"},r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(k,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(216);c.a.render(r.a.createElement(v,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a(217)},74:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.d66009dc.chunk.js.map