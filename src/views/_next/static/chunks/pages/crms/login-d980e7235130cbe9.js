(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{75158:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=n(94780),l=n(41796),c=n(37743),d=n(58175),m=n(85893),u=(0,d.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),x=n(36622),Z=n(78884),v=n(67074),f=n(1588),g=n(34867);function b(e){return(0,g.Z)("MuiCheckbox",e)}let j=(0,f.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],y=e=>{let{classes:t,indeterminate:n,color:r}=e,i={root:["root",n&&"indeterminate",`color${(0,x.Z)(r)}`]},a=(0,s.Z)(i,b,t);return(0,o.Z)({},t,a)},P=(0,v.ZP)(c.Z,{shouldForwardProp:e=>(0,v.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t[`color${(0,x.Z)(n.color)}`]]}})(({theme:e,ownerState:t})=>(0,o.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${j.checked}, &.${j.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${j.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),C=(0,m.jsx)(p,{}),k=(0,m.jsx)(u,{}),z=(0,m.jsx)(h,{}),M=i.forwardRef(function(e,t){var n,s;let l=(0,Z.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:c=C,color:d="primary",icon:u=k,indeterminate:p=!1,indeterminateIcon:h=z,inputProps:x,size:v="medium",className:f}=l,g=(0,r.Z)(l,w),b=p?h:u,j=p?h:c,M=(0,o.Z)({},l,{color:d,indeterminate:p,size:v}),E=y(M);return(0,m.jsx)(P,(0,o.Z)({type:"checkbox",inputProps:(0,o.Z)({"data-indeterminate":p},x),icon:i.cloneElement(b,{fontSize:null!=(n=b.props.fontSize)?n:v}),checkedIcon:i.cloneElement(j,{fontSize:null!=(s=j.props.fontSize)?s:v}),ownerState:M,ref:t,className:(0,a.Z)(E.root,f)},g,{classes:E}))});var E=M},9041:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r,o=n(63366),i=n(87462),a=n(67294),s=n(86010),l=n(94780),c=n(36622),d=n(29630),m=n(82586),u=n(59711),p=n(67074),h=n(1588),x=n(34867);function Z(e){return(0,x.Z)("MuiInputAdornment",e)}let v=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var f=n(78884),g=n(85893);let b=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${(0,c.Z)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]},w=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:r,position:o,size:i,variant:a}=e,s={root:["root",n&&"disablePointerEvents",o&&`position${(0,c.Z)(o)}`,a,r&&"hiddenLabel",i&&`size${(0,c.Z)(i)}`]};return(0,l.Z)(s,Z,t)},y=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:j})(({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${v.positionStart}&:not(.${v.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),P=a.forwardRef(function(e,t){let n=(0,f.Z)({props:e,name:"MuiInputAdornment"}),{children:l,className:c,component:p="div",disablePointerEvents:h=!1,disableTypography:x=!1,position:Z,variant:v}=n,j=(0,o.Z)(n,b),P=(0,u.Z)()||{},C=v;v&&P.variant,P&&!C&&(C=P.variant);let k=(0,i.Z)({},n,{hiddenLabel:P.hiddenLabel,size:P.size,disablePointerEvents:h,position:Z,variant:C}),z=w(k);return(0,g.jsx)(m.Z.Provider,{value:null,children:(0,g.jsx)(y,(0,i.Z)({as:p,ownerState:k,className:(0,s.Z)(z.root,c),ref:t},j,{children:"string"!=typeof l||x?(0,g.jsxs)(a.Fragment,{children:["start"===Z?r||(r=(0,g.jsx)("span",{className:"notranslate",children:"​"})):null,l]}):(0,g.jsx)(d.Z,{color:"text.secondary",children:l})}))})});var C=P},50238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crms/login",function(){return n(15645)}])},21609:function(e,t,n){"use strict";var r=n(85893),o=n(1954);let i=e=>{let{icon:t,...n}=e;return(0,r.jsx)(o.JO,{icon:t,fontSize:"1.5rem",...n})};t.Z=i},88942:function(e,t,n){"use strict";var r=n(85893),o=n(67074),i=n(61953);let a=(0,o.ZP)(i.Z)(e=>{let{theme:t}=e;return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:t.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}),s=e=>{let{children:t}=e;return(0,r.jsx)(a,{className:"layout-wrapper",children:(0,r.jsx)(i.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:t})})};t.Z=s},15645:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),i=n(41664),a=n.n(i),s=n(74231),l=n(47533),c=n(87536),d=n(17288),m=n(86501),u=n(49837),p=n(22841),h=n(61953),x=n(91359),Z=n(55343),v=n(67836),f=n(32631),g=n(58316),b=n(39063),j=n(9041),w=n(80562),y=n(75158),P=n(29630),C=n(75084),k=n(67074),z=n(21609),M=n(88942);let E=(0,k.ZP)(u.Z)(e=>{let{theme:t}=e;return{[t.breakpoints.up("sm")]:{width:450}}}),I=(0,k.ZP)(p.Z)(e=>{let{theme:t}=e;return{"& .MuiFormControlLabel-label":{fontSize:"0.875rem",color:t.palette.text.secondary}}}),S=()=>{let[e,t]=(0,o.useState)(!1),n=(0,d.a)(),i=s.Ry().shape({email:s.Z_().required("Please enter your email.").email("It is not a valid email."),password:s.Z_().required("Please enter your password.").min(8,"Password must be at least 8 characters long.")}),{control:u,handleSubmit:p,formState:{errors:k}}=(0,c.cI)({defaultValues:{email:"",password:"",rememberMe:!1},mode:"onChange",resolver:(0,l.X)(i)}),M=()=>{t(!e)},S=e=>{e.preventDefault()},_=async e=>{n.login(e,e=>m.ZP.error(e.msg))};return(0,r.jsx)(h.Z,{className:"content-center",children:(0,r.jsx)(E,{sx:{zIndex:1},children:(0,r.jsxs)(x.Z,{sx:{p:e=>"".concat(e.spacing(12,7,6.5)," !important")},children:[(0,r.jsx)(h.Z,{sx:{mb:8,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(a(),{href:"/home",children:(0,r.jsx)("img",{src:"/images/Group-90white.svg",alt:"Logo",style:{width:350,height:40}})})}),(0,r.jsxs)("form",{onSubmit:p(_),children:[(0,r.jsxs)(Z.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(c.Qr,{name:"email",control:u,render(e){let{field:{value:t,onChange:n}}=e;return(0,r.jsx)(v.Z,{value:t,label:"Email",onChange:n,placeholder:"user123@gmail.com",error:Boolean(k.email)})}}),k.email&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:k.email.message})]}),(0,r.jsxs)(Z.Z,{fullWidth:!0,children:[(0,r.jsx)(g.Z,{htmlFor:"auth-login-password",children:"Password"}),(0,r.jsx)(c.Qr,{name:"password",control:u,render(t){let{field:{value:n,onChange:o}}=t;return(0,r.jsx)(b.Z,{value:n,label:"Password",id:"auth-login-password",onChange:o,type:e?"text":"password",error:Boolean(k.password),endAdornment:(0,r.jsx)(j.Z,{position:"end",children:(0,r.jsx)(w.Z,{edge:"end",onClick:M,onMouseDown:S,"aria-label":"toggle password visibility",children:(0,r.jsx)(z.Z,{icon:e?"mdi:eye-outline":"mdi:eye-off-outline"})})})})}}),k.password&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:k.password.message})]}),(0,r.jsxs)(h.Z,{sx:{mb:4,display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[(0,r.jsx)(Z.Z,{children:(0,r.jsx)(c.Qr,{name:"rememberMe",control:u,render(e){let{field:t}=e;return(0,r.jsx)(I,{label:"Remember Me",control:(0,r.jsx)(y.Z,{...t}),sx:{"& .MuiFormControlLabel-label":{color:"text.primary"}}})}})}),(0,r.jsx)(P.Z,{variant:"body2",component:a(),href:"/crms/forgot-password",sx:{color:"primary.main",textDecoration:"none"},children:"Forgot Password?"})]}),(0,r.jsx)(C.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:7},children:"Login"})]})]})})})};S.authGuard=!1,S.setConfig=()=>({mode:"dark"}),S.getLayout=e=>(0,r.jsx)(M.Z,{children:e}),t.default=S}},function(e){e.O(0,[284,480,710,72,330,323,733,774,888,179],function(){return e(e.s=50238)}),_N_E=e.O()}]);