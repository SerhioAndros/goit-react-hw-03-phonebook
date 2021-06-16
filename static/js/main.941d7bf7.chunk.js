(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={addContactForm:"ContactForm_addContactForm__28hxe",addContactFormLabel:"ContactForm_addContactFormLabel__2_VnT",addContactFormInput:"ContactForm_addContactFormInput__1n0TS",addContactFormBtn:"ContactForm_addContactFormBtn__1pDDj"}},function(t,e,n){t.exports={contactItem:"ContactListItem_contactItem__2q7jW",contactName:"ContactListItem_contactName__2iLwZ",contactNumber:"ContactListItem_contactNumber__3wRqf",deleteContactBtn:"ContactListItem_deleteContactBtn__KUP59"}},,,,,,function(t,e,n){t.exports={container:"App_container__1mQo2",mainHeader:"App_mainHeader__24Inq",additionalHeader:"App_additionalHeader__2BWTu"}},,function(t,e,n){t.exports={filterInputLabel:"Filter_filterInputLabel__X4N64",filterInput:"Filter_filterInput__229pk"}},,function(t,e,n){t.exports={contactList:"ContactList_contactList__6JLvB"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),i=(n(20),n(4)),s=n(14),l=n(5),d=n(6),u=n(8),m=n(7),b=n(23),h=n(9),p=n.n(h),j=n(2),C=n.n(j),f=n(0),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;if(!a.trim()||!c.trim())return alert("You've missed something :)");t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(d.a)(n,[{key:"render",value:function(){var t=Object(b.a)(),e=Object(b.a)();return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:C.a.addContactForm,children:[Object(f.jsx)("label",{htmlFor:t,className:C.a.addContactFormLabel,children:"Name"}),Object(f.jsx)("input",{className:C.a.addContactFormInput,type:"text",name:"name",id:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange,placeholder:"Name"}),Object(f.jsx)("label",{htmlFor:e,className:C.a.addContactFormLabel,children:"Number"}),Object(f.jsx)("input",{className:C.a.addContactFormInput,type:"tel",name:"number",id:e,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange,placeholder:"Tel. number"}),Object(f.jsx)("button",{type:"submit",className:C.a.addContactFormBtn,children:"Add contact"})]})}}]),n}(a.Component),O=n(3),v=n.n(O),x=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(f.jsxs)("li",{className:v.a.contactItem,children:[Object(f.jsxs)("p",{className:v.a.contactName,children:[n,": ",Object(f.jsx)("span",{className:v.a.contactNumber,children:a})]}),Object(f.jsx)("button",{className:v.a.deleteContactBtn,type:"button",onClick:function(){return c(e)},children:"Delete"})]})},I=n(13),N=n.n(I),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:N.a.contactList,children:e.map((function(t){return Object(f.jsx)(x,{id:t.id,name:t.name,number:t.number,onDeleteContact:n},t.id)}))})},F=n(11),L=n.n(F),y=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("label",{className:L.a.filterInputLabel,children:"Find contacts by name"}),Object(f.jsx)("input",{className:L.a.filterInput,type:"text",name:"filter",value:e,onChange:n,placeholder:"Contact"})]})},S=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"5111c54c-addb-481a-a52d-4c060aae7b87",name:"Rosie Simpson",number:"459-12-56"},{id:"3f0a3b82-8cb3-4b7e-ad87-6128ce7c1ed4",name:"Hermione Kline",number:"443-89-12"},{id:"30e9db78-1eca-4250-8c4c-db9087e6819e",name:"Eden Clements",number:"645-17-79"},{id:"75hfo934-1eca-4250-8c4c-db9087efr56g",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,c=t.state.contacts;if(c.map((function(t){return t.name})).includes(n.trim()))return alert('"'.concat(n.trim(),'" is already in contacts'));if(c.map((function(t){return t.number})).includes(a.trim()))return alert('"'.concat(a.trim(),'" is already in contacts'));var o={id:Object(b.a)(),name:n,number:a};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[o])}}))},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.handleInputFilter=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase().trim();return n.filter((function(t){return t.name.toLocaleLowerCase().trim().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){console.log("object");var t=JSON.parse(localStorage.getItem("Contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){console.log("object2"),this.state.contacts!==t.contacts&&localStorage.setItem("Contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.handleInputFilter();return Object(f.jsxs)("div",{className:p.a.container,children:[Object(f.jsx)("h1",{className:p.a.mainHeader,children:"Phonebook"}),Object(f.jsx)(_,{onSubmit:this.handleAddContact,contacts:e}),Object(f.jsx)("h2",{className:p.a.additionalHeader,children:"Contacts"}),Object(f.jsx)(y,{value:n,onChange:this.handleInputChange}),Object(f.jsx)(g,{contacts:a,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.941d7bf7.chunk.js.map