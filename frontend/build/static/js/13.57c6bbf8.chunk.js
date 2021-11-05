(this["webpackJsonpqueue-management"]=this["webpackJsonpqueue-management"]||[]).push([[13],{190:function(e,t,a){"use strict";var s=a(3),n=(a(0),a(9));t.a=function(e){var t=null;switch(e.elementType){case"input":t=Object(n.jsx)("input",Object(s.a)(Object(s.a)({className:e.elementClassName},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(n.jsx)("textarea",Object(s.a)(Object(s.a)({className:e.elementClassName},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(n.jsxs)("select",{className:e.elementClassName,value:e.value,onChange:e.changed,children:[Object(n.jsx)("option",{value:!1,children:e.elementConfig.filterLabel}),e.elementConfig.options.map((function(t){return Object(n.jsx)("option",{value:t.id,children:t[e.elementConfig.optionKey]},t.id)}))]});break;default:t=Object(n.jsx)("input",Object(s.a)(Object(s.a)({className:e.elementClassName},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(n.jsxs)("div",{className:e.className,children:[e.label&&Object(n.jsx)("label",{className:e.labelClassName,children:e.label}),t]})}},191:function(e,t,a){},265:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var s=a(3),n=function(e,t){return Object(s.a)(Object(s.a)({},e),t)},c=function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),t.isEmail){a=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},266:function(e,t,a){"use strict";a(0),a(9)},988:function(e,t,a){"use strict";a.r(t);var s=a(47),n=a(31),c=a(32),i=a(33),r=a(34),l=a(0),o=a.n(l),d=a(265),b=(a(190),a(266),a(191),a(28)),m=a(35),u=a(301),j=a(36),h=a(18),p=a(10),v=a(144),g=a.n(v),O=a(121),x=a(9),f=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).inputChangedHandler=function(e,t){var a=Object(d.b)(c.state.controls,Object(s.a)({},t,Object(d.b)(c.state.controls[t],{value:e.target.value,valid:Object(d.a)(e.target.value,c.state.controls[t].validation),touched:!0})));c.setState({controls:a})},c.renderRedirectToRoot=function(){if(Object(h.c)())return Object(x.jsx)(p.a,{to:"/"})},c.submitHandler=function(e,t){t.username&&t.password&&(e.preventDefault(),c.props.loginUser(t.username,t.password,c.props.history))},c.switchAuthModeHandler=function(){c.setState((function(e){return{isSignup:!e.isSignup}}))},c.state={username:"",password:""},c}return Object(c.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(o.a.Fragment,{children:[this.renderRedirectToRoot(),Object(x.jsxs)("section",{className:"position-relative",children:[Object(x.jsx)(g.a,{id:"particles-js",params:{particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#1360ef"},shape:{type:"circle",stroke:{width:0,color:"#f94f15"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}),Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"row  text-center",children:Object(x.jsx)("div",{className:"col",children:Object(x.jsx)("h1",{children:"Sign In"})})})})]}),Object(x.jsx)("div",{className:"page-content",children:Object(x.jsx)("section",{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center",children:[Object(x.jsx)("div",{className:"col-lg-7 col-12",children:Object(x.jsx)("img",{className:"img-fluid",src:"/assets/images/login.png",alt:""})}),Object(x.jsx)("div",{className:"col-lg-5 col-12 mt-5 mt-lg-0",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{className:"mb-3",children:"Sign In"}),this.props.login_error&&Object(x.jsx)(u.a,{color:"danger",isOpen:!!this.props.login_error,children:Object(x.jsx)("div",{children:"Invalid Username/Password"})}),Object(x.jsxs)(O.AvForm,{onValidSubmit:this.submitHandler,children:[Object(x.jsx)("div",{className:"messages"}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)(O.AvInput,{type:"text",name:"username",className:"form-control",placeholder:"Email/Mobile",value:this.state.username,required:!0}),Object(x.jsx)("div",{className:"help-block with-errors"})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)(O.AvInput,{type:"password",name:"password",className:"form-control",placeholder:"Password",value:this.state.password,required:!0}),Object(x.jsx)("div",{className:"help-block with-errors"})]}),Object(x.jsx)("div",{className:"form-group mt-4 mb-5",children:Object(x.jsxs)("div",{className:"remember-checkbox d-flex align-items-center justify-content-between",children:[Object(x.jsxs)("div",{className:"form-check mb-0",children:[Object(x.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),Object(x.jsx)("label",{className:"form-check-label mb-0",htmlFor:"flexCheckDefault",children:"Remember Me"})]}),Object(x.jsxs)(j.c,{to:"/reset-password",children:[Object(x.jsx)("b",{children:"Forgot Password?"})," "]})]})}),Object(x.jsx)("input",{type:"submit",value:"Login Now",className:"btn btn-primary btn-block"})]}),Object(x.jsxs)("div",{className:"d-flex align-items-center text-center justify-content-center mt-4",children:[Object(x.jsx)("span",{className:"text-muted me-1",children:"Don't have an account?"}),Object(x.jsxs)(j.c,{to:"/signup",children:[Object(x.jsx)("b",{children:"Sign Up"})," "]})]})]})})]})})})})]})}}]),a}(l.Component);t.default=Object(b.b)((function(e){var t=e.Auth;return{user:t.user,loading:t.loading,login_error:t.login_error}}),{loginUser:m.b})(f)}}]);
//# sourceMappingURL=13.57c6bbf8.chunk.js.map