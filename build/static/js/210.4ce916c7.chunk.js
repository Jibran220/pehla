"use strict";(self.webpackChunkhope_ui_react=self.webpackChunkhope_ui_react||[]).push([[210],{47210:function(e,n,t){t.r(n);var r,s=t(30168),i=t(74165),a=t(15861),l=t(70885),c=t(28619),o=t(29097),d=t(69755),u=t(15004),h=t(521),p=t(72947),m=t(63870),x=(t(35235),t(39073)),f=(t(82920),t(2073),t(87796),t(39066),t(1455)),j=t(61076),g=(t(95651),t(68917)),v=t(49494),Z=(t(9360),t(68978),t(10434)),k=t(16291),w=t(3036),C=t(90552),N=(t(51962),t(58630),t(72791)),b=(t(89403),t(51981)),y=t.n(b),L=(t(44790),t(61044),t(35125),t(52732),t(29609),t(44313)),S=t(74342),_=t(89743),H=t(2677),A=t(92592),M=t(49027),W=t(64880),D=t(91523),U=t(43360),B=(t(43318),t(38402),t(73052),t(9085)),V=(t(5462),t(80184));n.default=function(){(0,N.useEffect)((function(){G()}),[]);(0,N.useRef)();var e=(0,W.k6)(),n=((0,N.useRef)(),(0,W.UO)(),(0,N.useState)("")),t=(0,l.Z)(n,2),r=t[0],s=t[1],b=(0,N.useState)([]),L=(0,l.Z)(b,2),E=L[0],I=L[1],R=(0,N.useState)(!1),F=(0,l.Z)(R,2),O=F[0],J=(F[1],function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x.V,"MAS_WDH/").concat(n," "),{method:"Delete"});case 2:return t=e.sent,e.next=5,t.json();case 5:(t=e.sent)&&G();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),G=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x.V,"MAS_WDH"));case 2:return n=e.sent,e.next=5,n.json();case 5:n=e.sent,I(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(x.V,"MAS_WDH"),{method:"post",body:JSON.stringify({name:r}),headers:{"Content-Type":"application/json"}})&&(s(""),B.Am.info("Added Succesfully!"),G());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=(0,N.useState)(JSON.parse(localStorage.getItem("chat-app-current-user"))),T=(0,l.Z)(P,2),q=T[0];T[1];return(0,N.useEffect)((0,a.Z)((0,i.Z)().mark((function n(){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:localStorage.getItem("chat-app-current-user")||e.push("/auth/sign-in");case 1:case"end":return n.stop()}}),n)}))),[]),(0,N.useEffect)((function(){localStorage.getItem("chat-app-current-user")?"Admin1"===q.username?e.push("/approver"):"Admin"!==q.username&&e.push("/ath"):e.push("/auth/sign-in")}),[]),(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(y(),{toggler:O,sources:[g,k,v,w,j,C,Z,w,f]}),(0,V.jsx)(S.Z.Container,{defaultActiveKey:"first",children:(0,V.jsxs)(_.Z,{children:[(0,V.jsx)(H.Z,{lg:"12",children:(0,V.jsx)(c.Z,{children:(0,V.jsx)(c.Z.Body,{children:(0,V.jsx)("div",{className:"d-flex flex-wrap align-items-center justify-content-between",children:(0,V.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,V.jsxs)("div",{className:"profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1",children:[(0,V.jsx)(A.Z,{className:"theme-color-default-img  img-fluid rounded-pill avatar-100",src:o,alt:"profile-pic"}),(0,V.jsx)(A.Z,{className:"theme-color-purple-img img-fluid rounded-pill avatar-100",src:d,alt:"profile-pic"}),(0,V.jsx)(A.Z,{className:"theme-color-blue-img img-fluid rounded-pill avatar-100",src:u,alt:"profile-pic"}),(0,V.jsx)(A.Z,{className:"theme-color-green-img img-fluid rounded-pill avatar-100",src:p,alt:"profile-pic"}),(0,V.jsx)(A.Z,{className:"theme-color-yellow-img img-fluid rounded-pill avatar-100",src:m,alt:"profile-pic"}),(0,V.jsx)(A.Z,{className:"theme-color-pink-img img-fluid rounded-pill avatar-100",src:h,alt:"profile-pic"})]}),(0,V.jsxs)("div",{className:"d-flex flex-wrap align-items-center mb-3 mb-sm-0",children:[(0,V.jsx)("h4",{className:"me-2 h4",children:" "}),(0,V.jsx)("span",{children:" -  "})]})]})})})})}),(0,V.jsx)(H.Z,{lg:"3",className:"col-lg-3",children:(0,V.jsxs)(c.Z,{children:[(0,V.jsx)(c.Z.Header,{children:(0,V.jsx)("div",{className:"header-title",children:(0,V.jsx)("h4",{className:"card-title",children:"Form"})})}),(0,V.jsxs)(c.Z.Body,{children:[(0,V.jsx)("ul",{className:"list-inline m-0 p-0",children:(0,V.jsx)("li",{className:"d-flex mb-2"})}),(0,V.jsxs)(M.Z.Group,{className:"form-group",children:[(0,V.jsx)(M.Z.Label,{className:"custom-file-input",children:"Name"}),(0,V.jsx)(M.Z.Control,{type:"text",id:"customFile",value:r,onChange:function(e){s(e.target.value)}})]}),(0,V.jsx)(U.Z,{variant:"btn btn-primary",onClick:K,children:"Add"})," "]})]})}),E.map((function(e){return(0,V.jsx)(H.Z,{lg:"3",children:(0,V.jsxs)(c.Z,{children:[(0,V.jsx)(c.Z.Header,{children:(0,V.jsx)("div",{className:"header-title",children:(0,V.jsx)("h4",{className:"card-title",children:e.name})})}),(0,V.jsx)(c.Z.Body,{children:(0,V.jsx)("ul",{className:"list-inline m-0 p-0",children:(0,V.jsxs)("li",{className:"d-flex mb-2",children:[(0,V.jsx)("div",{className:"news-icon me-3",children:(0,V.jsxs)("div",{style:{float:"right"},children:[(0,V.jsx)(D.rU,{className:"btn btn-sm btn-icon text-primary flex-end","data-bs-toggle":"tooltip",title:"Edit User",to:"/dashboard/app/MASW_x_D_x_H_Update/"+e._id,children:(0,V.jsx)("span",{className:"btn-inner",children:(0,V.jsxs)("svg",{width:"50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,V.jsx)("path",{d:"M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,V.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,V.jsx)("path",{d:"M15.1655 4.60254L19.7315 9.16854",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})}),(0,V.jsx)(D.rU,{className:"btn btn-sm btn-icon text-danger","data-bs-toggle":"tooltip",title:"Delete User",to:"#",onClick:function(){return J(e._id)},children:(0,V.jsx)("span",{className:"btn-inner",children:(0,V.jsxs)("svg",{width:"50",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",children:[(0,V.jsx)("path",{d:"M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,V.jsx)("path",{d:"M20.708 6.23975H3.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,V.jsx)("path",{d:"M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]})}),(0,V.jsx)("p",{className:"news-detail mb-0",children:" "})]})})})]})})}))]})}),(0,V.jsx)(B.Ix,{})]})};L.ZP.div(r||(r=(0,s.Z)(["\n  height: 70vh;\n  width: 35vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 0.1rem;\n  align-items: center;\n  background-color:  white;\n  .container {\n    height: 65vh;\n    width: 40vw;\n    background-color: ;\n    display: grid;\n    grid-template-columns: 96%;\n    @media screen and (min-width: 720px) and (max-width: 1080px) {\n      grid-template-columns: 35% 65%;\n    }\n  }\n"])))}}]);
//# sourceMappingURL=210.4ce916c7.chunk.js.map