(this["webpackJsonpqueue-management"]=this["webpackJsonpqueue-management"]||[]).push([[17],{259:function(e,s,c){"use strict";c.r(s);var n=c(0),i=c.n(n),a=(c(260),c(329),c(332)),t=c.n(a),d=c(28),l=c(9);s.default=function(e){var s=e.medicine_list_,c=e.data,n=s||[],a=i.a.createRef(),r=c.customer_name?c.customer_name:"Undefined",j=c.mobile?c.mobile:"xxxx.xxxx.xx",o=Object(d.c)((function(e){return e.Auth.user})),m=o.clinic_name,x=o.full_name,b=(o.address_line1?o.address_line1:"")+"\n"+(o.address_line2?o.address_line2:"");return console.log(c),Object(l.jsxs)("div",{className:"col-sm-12 prescription-pdf",ref:a,children:[Object(l.jsxs)("div",{className:"pdf-header",id:"pdf-header",children:[Object(l.jsx)("div",{className:"clinic-name",id:"clinic-name",children:m}),Object(l.jsx)("div",{className:"doctor-name",children:x}),Object(l.jsx)("div",{className:"registration-no",children:"13232442"})]}),Object(l.jsxs)("div",{className:"patient-details col-sm-4",children:[Object(l.jsx)("h6",{children:"TO"}),Object(l.jsx)("h5",{children:r}),Object(l.jsxs)("div",{className:"personal-info col-sm-12 row",children:[Object(l.jsxs)("div",{className:"dob col-sm-6",children:[Object(l.jsx)("span",{children:"DOB :"})," x.x.2005"]}),Object(l.jsxs)("div",{className:"age col-sm-6",children:[Object(l.jsx)("span",{children:"Age :"})," 34"]}),Object(l.jsxs)("div",{className:"mobile-no",children:[Object(l.jsx)("span",{children:"Mobile no :"})," ",j]})]})]}),Object(l.jsx)("div",{className:"medicine-list-cards col-sm-12 row",children:Object(l.jsx)("div",{className:"col-sm-12 row",children:n.map((function(e){var s=e.name?e.name:e.medicine_name,c=e.drug_to_taken;return Object(l.jsxs)("div",{className:"row col-sm-12",style:{justifyContent:"space-between"},children:[" ",Object(l.jsxs)("div",{className:"medicine-name col-sm-5",children:[Object(l.jsx)("span",{children:" Medicine NAME"})," : ",Object(l.jsx)("p",{children:s})]}),Object(l.jsxs)("div",{className:"directions_of_intake col-sm-5",children:[Object(l.jsx)("span",{children:"Directions of Intake "})," :",Object(l.jsx)("p",{children:c})]})]})}))})}),Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"pdf-footer",children:b})}),Object(l.jsx)(t.a,{targetRef:a,filename:"div-blue.pdf",options:{orientation:"landscape",unit:"in"},x:.5,y:.5,scale:.8,children:function(e){var s=e.toPdf;return Object(l.jsx)("button",{onClick:s,className:"generatePdfBtn",children:"Generate pdf"})}})]})}},260:function(e,s,c){}}]);
//# sourceMappingURL=17.86e8cc5b.chunk.js.map