(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={list:"ContactList_list__3xuzb",listItem:"ContactList_listItem__lZLv9",button:"ContactList_button__19TFW"}},function(t,e,n){t.exports={container:"ContactsForm_container__39MLw",title:"ContactsForm_title__Ke4_H",button:"ContactsForm_button__3CkBz"}},,,function(t,e,n){t.exports={title:"App_title__HbGPO"}},,function(t,e,n){t.exports={container:"Filter_container__3suR0"}},,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(11),s=n.n(r),i=(n(18),n(8)),l=n(2),u=n(3),h=n(5),b=n(4),m=n(7),p=n.n(m),d=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onChangeName=function(e){e.preventDefault(),t.setState({name:e.target.value})},t.onChangeNumber=function(e){e.preventDefault(),t.setState({number:e.target.value})},t.onPushContact=function(e){e.preventDefault(),console.log(e.target),t.props.handlePushContact(t.state.name,t.state.number)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.name,e=this.props.number;return Object(a.jsx)("div",{className:p.a.container,children:Object(a.jsxs)("form",{onSubmit:this.onPushContact,children:[Object(a.jsx)("h3",{className:p.a.title,children:"Name"}),Object(a.jsx)("input",{name:"name",type:"text",value:t,onChange:this.onChangeName}),Object(a.jsx)("h3",{className:p.a.title,children:"Number"}),Object(a.jsx)("input",{name:"number",type:"text",value:e,onChange:this.onChangeNumber}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),j=n(6),f=n.n(j),O=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).onHandleDelete=function(e){e.preventDefault(),console.log(e.target.parentNode.closest("li").getAttribute("id")),t.props.handleDeleteContact(e.target.parentNode.closest("li").getAttribute("id"))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("li",{id:this.props.id,className:f.a.listItem,children:[Object(a.jsxs)("p",{children:[this.props.name,": ",this.props.number]})," ",Object(a.jsx)("button",{onClick:this.onHandleDelete,className:f.a.button,children:"Delete"})]})}}]),n}(c.Component),v=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t,e){localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var t=this,e=this.props.contacts.filter((function(e){return e.name.toLowerCase().includes(t.props.filter.toLowerCase())}));return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{className:f.a.list,children:e.map((function(e){return Object(a.jsx)(O,{name:e.name,number:e.number,id:e.id,handleDeleteContact:t.props.handleDeleteContact},e.id)}))})})}}]),n}(c.Component),C=n(21),g=n(12),x=n.n(g),y=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).onFilterChange=function(e){e.preventDefault(),t.props.handleGetFilter(e.target.value)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.filter;return Object(a.jsxs)("div",{className:x.a.container,children:[Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",value:t,onChange:this.onFilterChange})]})}}]),n}(c.Component),N=n(10),_=n.n(N),w=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{name:"Roise Simpson",number:"645-17-49",id:Object(C.a)()},{name:"Hermione Kline",number:"443-89-12",id:Object(C.a)()},{name:"Eden Clements",number:"459-12-56",id:Object(C.a)()}],filter:""},t.handleGetFilter=function(e){t.setState({filter:e})},t.handleDeleteContact=function(e){var n=t.state.contacts.map((function(t){return t.id})),a=Object(i.a)(t.state.contacts),c=n.indexOf(e);a.splice(c,1),t.setState({contacts:Object(i.a)(a)})},t.handlePushContact=function(e,n){t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(e.toLowerCase())?alert("".concat(e," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{name:e,number:n,id:Object(C.a)()}])}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(t,e){localStorage.contacts&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h2",{className:_.a.title,children:"Phonebook"}),Object(a.jsx)(d,{name:this.state.name,number:this.state.number,handleGetName:this.handleGetName,handleGetNumber:this.handleGetNumber,handlePushContact:this.handlePushContact}),Object(a.jsx)("h2",{className:_.a.title,children:"Contacts"}),Object(a.jsx)(y,{filter:this.state.filter,handleGetFilter:this.handleGetFilter}),Object(a.jsx)(v,{contacts:this.state.contacts,filter:this.state.filter,handleDeleteContact:this.handleDeleteContact})]})}}]),n}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.5f033aaf.chunk.js.map