!function(e){function t(t){for(var n,i,l=t[0],s=t[1],u=t[2],d=0,f=[];d<l.length;d++)i=l[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={0:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;o.push([140,1]),a()}({138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(54),r=i(a(1)),o=i(a(363));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==l(r)&&"function"!=typeof r?u(n):r).state={modal:!1,id:e.id,listId:e.listId,date:e.date||"",hour:e.hour||"",description:e.description||"",priority:e.priority||""},a.toggle=a.toggle.bind(u(a)),a.handleChange=a.handleChange.bind(u(a)),a.handleClick=a.handleClick.bind(u(a)),a.handlePriorityChange=a.handlePriorityChange.bind(u(a)),a}var a,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a=t,(i=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleChange",value:function(e){var t=e.target.value,a=e.target.name;this.setState(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,t))}},{key:"handlePriorityChange",value:function(e){this.setState({priority:e.target.value})}},{key:"cleanModal",value:function(){this.state.date="",this.state.hour="",this.state.priority="",this.state.description=""}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.addTask?this.props.addTask({date:this.state.date,hour:this.state.hour,priority:this.state.priority,description:this.state.description}):this.props.updateTask&&this.props.updateTask(this.state.listId,this.state.id,{date:this.state.date,hour:this.state.hour,priority:this.state.priority,description:this.state.description}),this.toggle(),this.cleanModal()}},{key:"renderButton",value:function(){return this.props.addTask?r.default.createElement(n.Button,{key:"button",color:"primary",onClick:this.toggle},"Add a new task"):r.default.createElement("button",{key:"modal-button",type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#edit-task-modal",onClick:this.toggle},r.default.createElement("i",null))}},{key:"render",value:function(){return[this.renderButton(),r.default.createElement(n.Modal,{key:"modal",isOpen:this.state.modal,toggle:this.toggle,size:"lg"},r.default.createElement(n.ModalHeader,{toggle:this.toggle},this.props.headerText),r.default.createElement(n.ModalBody,null,r.default.createElement(o.default,{date:this.state.date,hour:this.state.hour,description:this.state.description,priority:this.state.priority,handleChange:this.handleChange,handlePriorityChange:this.handlePriorityChange})),r.default.createElement(n.ModalFooter,null,r.default.createElement(n.Button,{color:"primary",onClick:this.handleClick},this.props.buttonText)," ",r.default.createElement(n.Button,{color:"secondary",onClick:this.toggle},"Close")))]}}])&&s(a.prototype,i),c&&s(a,c),t}();t.default=c},140:function(e,t,a){"use strict";a(141);var n=i(a(1)),r=a(17);a(348),a(350);var o=i(a(351));function i(e){return e&&e.__esModule?e:{default:e}}a(364),(0,r.render)(n.default.createElement(o.default,null),document.getElementById("app"))},350:function(e,t){},351:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(1)),r=(a(54),a(358)),o=u(a(360)),i=u(a(361)),l=u(a(362)),s=u(a(138));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==c(r)&&"function"!=typeof r?p(n):r).state=JSON.parse(localStorage.getItem("state"))||{allLists:[{id:1,name:"Anything",tasks:[]}],currentListId:1},a.addList=a.addList.bind(p(a)),a.removeList=a.removeList.bind(p(a)),a.addTask=a.addTask.bind(p(a)),a.removeTask=a.removeTask.bind(p(a)),a.findList=a.findList.bind(p(a)),a.findTask=a.findTask.bind(p(a)),a.filterLists=a.filterLists.bind(p(a)),a.updateTask=a.updateTask.bind(p(a)),a.changeActiveList=a.changeActiveList.bind(p(a)),a}var a,u,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a=t,(u=[{key:"componentDidUpdate",value:function(){this.saveToLocalStorage()}},{key:"saveToLocalStorage",value:function(){var e=JSON.stringify(this.state);localStorage.setItem("state",e)}},{key:"changeActiveList",value:function(e){this.setState({currentListId:e})}},{key:"findList",value:function(e){return this.state.allLists.find(function(t){return t.id===e})}},{key:"currentList",value:function(){return this.findList(this.state.currentListId)}},{key:"findTask",value:function(e,t){return e.tasks.find(function(e){return e.id===t})}},{key:"filterLists",value:function(e){return this.state.allLists.filter(function(t){return t.id!==e})}},{key:"addList",value:function(e){var t={name:e,id:(0,r.maxBy)(this.state.allLists,"id").id+1,tasks:[]};this.setState({allLists:d(this.state.allLists).concat([t]),currentListId:t.id})}},{key:"removeList",value:function(e){if(1!==e){var t=this.state.allLists.filter(function(t){return t.id!==e});this.setState({allLists:t,currentListId:e===this.state.currentListId?t[0].id:this.state.currentListId})}}},{key:"addTask",value:function(e){var t=e.date,a=e.hour,n=e.priority,r=e.description,o=this.currentList(),i=this.filterLists(o.id),l={date:t,hour:a,priority:n,description:r,id:o.tasks.length+1,listId:o.id};o.tasks.push(l),this.setState({allLists:d(i).concat([o])})}},{key:"removeTask",value:function(e,t){var a=this.findList(e),n=this.findTask(a,t),r=this.filterLists(e),o=a.tasks.indexOf(n);a.tasks.splice(o,1),this.setState({allLists:d(r).concat([a])})}},{key:"updateTask",value:function(e,t,a){var n=this.findList(e),r=this.findTask(n,t),o=this.filterLists(e);r.date=a.date,r.hour=a.hour,r.priority=a.priority,r.description=a.description;var i=n.tasks.indexOf(r);n.tasks.splice(i,1,r),this.setState({allLists:d(o).concat([n])})}},{key:"orderedList",value:function(){return(0,r.orderBy)(this.state.allLists,["id"],["asc"])}},{key:"render",value:function(){var e=this;return n.default.createElement("div",{className:"container-fluid d-flex flex-column"},n.default.createElement("section",{className:"row title-row d-flex justify-content-center"},n.default.createElement("h1",{className:"p-2"},"Your To-Do List")),n.default.createElement("main",{className:"row"},n.default.createElement("section",{className:"lists-sidebar col-md-2 p-3"},n.default.createElement("div",{className:"sidebar-title"},n.default.createElement("h4",{className:"text-center"},"All lists"),n.default.createElement(o.default,{allLists:this.state.allLists,addList:this.addList})),n.default.createElement("ul",{className:"list-group list-group-flush",id:"list-group"},this.orderedList().map(function(t){return n.default.createElement(i.default,{id:t.id,name:t.name,removeList:e.removeList,changeActiveList:e.changeActiveList,active:t.id===e.state.currentListId})}))),n.default.createElement("section",{className:"current-list-container col-md-10 d-flex justify-content-center"},n.default.createElement("div",{className:"current-list-block d-flex flex-column align-items-center"},n.default.createElement("div",{className:"current-list-title d-flex justify-content-center"},n.default.createElement("h2",null,this.currentList().name)),n.default.createElement(s.default,{button:this.addTaskButton,addTask:this.addTask,headerText:"Add a task",buttonText:"Add task"}),n.default.createElement("div",{className:"table-container"},n.default.createElement("table",{className:"table"},n.default.createElement("thead",null,n.default.createElement("tr",null,n.default.createElement("th",{scope:"col",className:"text-center"},"Date"),n.default.createElement("th",{scope:"col",className:"text-center"},"Time"),n.default.createElement("th",{scope:"col",className:"text-center"},"Description"),n.default.createElement("th",{scope:"col",className:"text-center"},"Priority"),n.default.createElement("th",{scope:"col",className:"text-center"},"Done?"),n.default.createElement("th",{scole:"col",className:"text-center"},"Edit"))),n.default.createElement("tbody",{id:"task-table-body"},this.findList(this.state.currentListId).tasks.map(function(t){return n.default.createElement(l.default,{removeTask:e.removeTask,updateTask:e.updateTask,task:t,key:t.id})}))))))))}}])&&f(a.prototype,u),m&&f(a,m),t}();t.default=m},360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(1))&&n.__esModule?n:{default:n},o=a(54);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(r=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==i(r)&&"function"!=typeof r?s(n):r).state={name:"",modal:!1},a.toggle=a.toggle.bind(s(a)),a.handleChangeName=a.handleChangeName.bind(s(a)),a.handleSubmit=a.handleSubmit.bind(s(a)),a}var a,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),a=t,(n=[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleChangeName",value:function(e){this.setState({name:e})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addList(this.state.name),this.setState({name:"",modal:!1})}},{key:"render",value:function(){var e=this;return[r.default.createElement(o.Button,{key:"button",color:"primary",onClick:this.toggle},"Add a list"),r.default.createElement(o.Modal,{key:"modal",isOpen:this.state.modal,toggle:this.toggle},r.default.createElement(o.ModalHeader,{toggle:this.toggle},"Add a new to-do list"),r.default.createElement(o.ModalBody,null,r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement("div",{className:"form-group"},r.default.createElement("label",{forhtml:"list-name",className:"col-form-label"},"List name:"),r.default.createElement("input",{type:"text",className:"form-control",id:"list-name",value:this.state.name,onChange:function(t){e.handleChangeName(t.target.value)}})))),r.default.createElement(o.ModalFooter,null,r.default.createElement(o.Button,{color:"primary",onClick:this.handleSubmit},"Add list")," ",r.default.createElement(o.Button,{color:"secondary",onClick:this.toggle},"Close")))]}}])&&l(a.prototype,n),u&&l(a,u),t}();t.default=u},361:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(1))&&n.__esModule?n:{default:n},o=a(54);var i=function(e){var t=e.id,a=e.name,n=e.removeList,i=e.changeActiveList,l=e.active;return r.default.createElement(o.ListGroupItem,{className:l?"active":"",action:!0},r.default.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),i(t)}},a),1!==t?r.default.createElement("i",{className:"bin",onClick:function(e){e.preventDefault(),n(t)}}):null)};t.default=i},362:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(1)),r=o(a(138));function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var u=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={modal:!1},a}var a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),a=t,(o=[{key:"render",value:function(){var e=this;return n.default.createElement("tr",null,n.default.createElement("td",null,this.props.task.date),n.default.createElement("td",null,this.props.task.hour),n.default.createElement("td",{className:"text-center"},n.default.createElement("strong",null,this.props.task.description)),n.default.createElement("td",{className:"flag-field text-center"},n.default.createElement("i",{className:"".concat(this.props.task.priority,"-flag")})),n.default.createElement("td",null,n.default.createElement("div",{className:"form-check form-check-inline d-flex task-bin-container justify-content-center"},n.default.createElement("i",{className:"bin",onClick:function(){return e.props.removeTask(e.props.task.listId,e.props.task.id)}}))),n.default.createElement("td",{className:"edit-column"},n.default.createElement(r.default,{updateTask:this.props.updateTask,headerText:"Edit task",buttonText:"Update Task",date:this.props.task.date,hour:this.props.task.hour,priority:this.props.task.priority,description:this.props.task.description,id:this.props.task.id,listId:this.props.task.listId})))}}])&&l(a.prototype,o),i&&l(a,i),t}();t.default=u},363:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a(1))&&n.__esModule?n:{default:n},o=a(54);var i=function(e){var t=e.date,a=e.hour,n=e.priority,i=e.description,l=e.handleChange,s=e.handlePriorityChange;return r.default.createElement(o.Form,{className:"d-flex justify-content-around"},r.default.createElement(o.FormGroup,{className:"mb-2 mr-sm-2 mb-sm-0"},r.default.createElement(o.Label,{for:"date-name"},"Date:"),r.default.createElement(o.Input,{type:"date",name:"date",id:"date-name",value:t,onChange:l})),r.default.createElement(o.FormGroup,{className:"mb-2 mr-sm-2 mb-sm-0"},r.default.createElement(o.Label,{for:"hour-text"},"Hour:"),r.default.createElement(o.Input,{type:"time",name:"hour",id:"hour-text",value:a,onChange:l})),r.default.createElement(o.FormGroup,{tag:"fieldset",className:"mb-2 mr-sm-2 mb-sm-0"},"Priority:",r.default.createElement(o.FormGroup,{check:!0},r.default.createElement(o.Label,{check:!0},r.default.createElement(o.Input,{type:"radio",name:"edit-priorityRadios",value:"moderate",checked:"moderate"===n,onChange:s})," ","Normal")),r.default.createElement(o.FormGroup,{check:!0},r.default.createElement(o.Label,{check:!0},r.default.createElement(o.Input,{type:"radio",name:"edit-priorityRadios",value:"high",checked:"high"===n,onChange:s})," ","High")),r.default.createElement(o.FormGroup,{check:!0},r.default.createElement(o.Label,{check:!0},r.default.createElement(o.Input,{type:"radio",name:"edit-priorityRadios",value:"low",checked:"low"===n,onChange:s})," ","Low"))),r.default.createElement(o.FormGroup,{className:"mb-2 mr-sm-2 mb-sm-0"},r.default.createElement(o.Label,{for:"description-text"},"Description:"),r.default.createElement(o.Input,{type:"textarea",name:"description",id:"description-text",value:i,onChange:l})))};t.default=i},364:function(e,t,a){e.exports=a.p+"./images/b36b6a1110b9ea5c27795e0cef69f53a-coffee-note.jpg"}});
//# sourceMappingURL=main.a0f6e3de019be51b141b.js.map