(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9185],{73688:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crms/communications",function(){return r(58030)}])},58030:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var s=r(85893),i=r(67294),a=r(61953),n=r(64631),o=r(33821),l=r(44731),d=r(67836),c=r(9041),x=r(29630),h=r(85214),p=r(81284),u=r(95309),m=r(19594),g=r(61702),f=r(21448),b=r(17288),j=r(21609),Z=r(51964),v=r.n(Z),w=r(5464);let y=e=>{let{children:t,hidden:r}=e;return r?(0,s.jsx)(a.Z,{sx:{height:"100%",overflow:"auto"},children:t}):(0,s.jsx)(v(),{options:{wheelPropagation:!1},children:t})},C=e=>{let{hidden:t,handleChatClick:r}=e,{user:Z}=(0,b.a)(),[v,C]=(0,i.useState)(""),[_,S]=(0,i.useState)([]);(0,i.useEffect)(()=>{let e=async()=>{let{data:e}=await w.Z.get("crms/communications/contacts",{params:{id:Z._id}});S(e)};e()},[]);let k=e=>{S(_.map(t=>(t._id===e._id&&(t.unSeenCount=0),t))),C(e._id),r(e)};return(0,s.jsxs)(n.ZP,{open:!0,variant:"permanent",sx:{zIndex:7,height:"100%",display:"block",position:"static","& .MuiDrawer-paper":{boxShadow:"none",overflow:"hidden",width:360,position:"static",borderTopLeftRadius:e=>e.shape.borderRadius,borderBottomLeftRadius:e=>e.shape.borderRadius},"& > .MuiBackdrop-root":{borderRadius:1,position:"absolute",zIndex:e=>e.zIndex.drawer-1}},children:[(0,s.jsxs)(a.Z,{sx:{px:5.5,py:3.5,display:"flex",alignItems:"center",borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:[(0,s.jsx)(o.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{mr:4.5},badgeContent:(0,s.jsx)(a.Z,{component:"span",sx:{width:8,height:8,borderRadius:"50%",color:"success.main",backgroundColor:"success.main",boxShadow:e=>"0 0 0 2px ".concat(e.palette.background.paper)}}),children:(0,s.jsx)(l.Z,{src:"/images/avatars/1.png",alt:Z.firstName,sx:{width:40,height:40,cursor:"pointer"}})}),(0,s.jsx)(d.Z,{fullWidth:!0,size:"small",value:"",onChange(){},placeholder:"Search for contact...",sx:{"& .MuiInputBase-root":{borderRadius:5}},InputProps:{startAdornment:(0,s.jsx)(c.Z,{position:"start",children:(0,s.jsx)(j.Z,{icon:"mdi:magnify",fontSize:"1.25rem"})})}})]}),(0,s.jsx)(a.Z,{sx:{height:"calc(100vh - 240px)"},children:(0,s.jsx)(y,{hidden:t,children:(0,s.jsxs)(a.Z,{sx:{p:e=>e.spacing(5,3,3)},children:[(0,s.jsx)(x.Z,{variant:"h6",sx:{ml:2,mb:4,color:"primary.main"},children:"Contacts"}),(0,s.jsx)(h.Z,{sx:{p:0},children:_.length>0&&_.map((e,t)=>(0,s.jsx)(p.ZP,{disablePadding:!0,sx:{"&:not(:last-child)":{mb:1.5}},children:(0,s.jsxs)(u.Z,{disableRipple:!0,onClick(){k(e)},sx:{px:2.5,py:2.5,width:"100%",borderRadius:1,alignItems:"flex-start",...v==e._id&&{backgroundColor:e=>"".concat(e.palette.primary.main," !important")}},children:[(0,s.jsx)(m.Z,{sx:{m:0},children:(0,s.jsx)(l.Z,{alt:"Avatar",src:"/images/avatars/2.png",sx:{width:40,height:40,outline:e=>"2px solid ".concat(e.palette.common.white,"}")}})}),(0,s.jsx)(g.Z,{sx:{my:0,ml:4},primary:(0,s.jsx)(x.Z,{sx:{color:"text.secondary"},children:e.firstName+" "+e.lastName}),secondary:(0,s.jsx)(x.Z,{noWrap:!0,variant:"body2",sx:{color:"text.disabled"},children:e.role})}),(0,s.jsx)(a.Z,{sx:{display:"flex",alignItems:"flex-end",flexDirection:"column",justifyContent:"flex-start"},children:e.unSeenCount?(0,s.jsx)(f.Z,{color:"error",label:e.unSeenCount,sx:{mt:.5,height:18,fontWeight:600,fontSize:"0.75rem","& .MuiChip-label":{pt:.25,px:1.655}}}):null})]})},t))})]})})})]})};var _=r(75084),S=r(67074);let k=(0,S.ZP)(v())(e=>{let{theme:t}=e;return{padding:t.spacing(5)}}),R=e=>{let{msgs:t,hidden:r,user:n,contact:o}=e,d=(0,i.useRef)(null);(0,i.useEffect)(()=>{t&&t.length&&c()},[t]);let c=()=>{d.current&&(r?d.current.scrollTop=Number.MAX_SAFE_INTEGER:d.current._container.scrollTop=Number.MAX_SAFE_INTEGER)},h=e=>{let{children:t}=e;return r?(0,s.jsx)(a.Z,{ref:d,sx:{p:5,height:"100%",overflowY:"auto",overflowX:"hidden"},children:t}):(0,s.jsx)(k,{ref:d,options:{wheelPropagation:!1},children:t})};return(0,s.jsx)(a.Z,{sx:{height:"calc(100vh - 310px)"},children:(0,s.jsx)(h,{children:t.map((e,r)=>{let i=e.user._id===n._id;return(0,s.jsxs)(a.Z,{sx:{display:"flex",flexDirection:i?"row-reverse":"row",mb:r!==t.length-1?3.75:void 0},children:[(0,s.jsx)("div",{children:(0,s.jsx)(l.Z,{skin:"light",color:"primary",sx:{width:"2rem",height:"2rem",fontSize:"0.875rem",ml:i?4:void 0,mr:i?void 0:4},...i?{}:{src:"/images/avatars/2.png",alt:o.firstName+" "+o.lastName},...i?{src:"/images/avatars/1.png",alt:n.firstName+" "+n.lastName}:{}})}),(0,s.jsx)(a.Z,{className:"chat-body",sx:{maxWidth:["calc(100% - 5.75rem)","75%","65%"]},children:(0,s.jsxs)(a.Z,{sx:{"&:not(:last-of-type)":{mb:3.5}},children:[(0,s.jsx)("div",{children:(0,s.jsx)(x.Z,{sx:{boxShadow:1,borderRadius:1,width:"fit-content",fontSize:"0.875rem",p:e=>e.spacing(3,4),ml:i?"auto":void 0,borderTopLeftRadius:i?void 0:0,borderTopRightRadius:i?0:void 0,color:i?"common.white":"text.primary",backgroundColor:i?"primary.main":"background.paper"},children:e.message})}),(0,s.jsx)(a.Z,{sx:{mt:1,display:"flex",alignItems:"center",justifyContent:i?"flex-end":"flex-start"},children:(0,s.jsx)(x.Z,{variant:"caption",sx:{color:"text.disabled"},children:e.createdAt?new Date(e.createdAt).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):null})})]},r)})]},r)})})})};var N=r(86501);let I=(0,S.ZP)(a.Z)(e=>{let{theme:t}=e;return{flexGrow:1,height:"100%",display:"flex",borderRadius:1,alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:t.palette.action.hover}}),E=(0,S.ZP)(a.Z)(e=>{let{theme:t}=e;return{display:"flex",borderRadius:8,alignItems:"center",boxShadow:t.shadows[1],padding:t.spacing(1.25,4),justifyContent:"space-between",backgroundColor:t.palette.background.paper}}),P=(0,S.ZP)("form")(e=>{let{theme:t}=e;return{padding:t.spacing(0,5,5)}}),z=e=>{let{sender:t,hidden:r}=e,{user:n}=(0,b.a)(),[c,h]=(0,i.useState)([]),[p,u]=(0,i.useState)("");(0,i.useEffect)(()=>{let e=async()=>{let{data:e}=await w.Z.get("crms/communications/messages",{params:{user:n._id,sender:t._id}});h(e.messages)};e()},[t]);let m=async e=>{if(e.preventDefault(),p.trim()){let{data:r}=await w.Z.post("crms/communications/messages",{user:n._id,sender:t._id,message:p.trim()});r.status?h([...c,r.message]):N.ZP.error(r.msg)}u("")};return Object.keys(t).length?(0,s.jsxs)(a.Z,{sx:{flexGrow:1,width:"100%",height:"100%",backgroundColor:"action.hover"},children:[(0,s.jsx)(a.Z,{sx:{py:3,px:5,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:(0,s.jsx)(a.Z,{sx:{display:"flex",alignItems:"center"},children:(0,s.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center",cursor:"pointer"},children:[(0,s.jsx)(o.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{mr:4.5},badgeContent:(0,s.jsx)(a.Z,{component:"span",sx:{width:8,height:8,borderRadius:"50%",color:"success.main",boxShadow:e=>"0 0 0 2px ".concat(e.palette.background.paper),backgroundColor:"success.main"}}),children:(0,s.jsx)(l.Z,{src:"/images/avatars/2.png",alt:"Avatar",sx:{width:40,height:40}})}),(0,s.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)(x.Z,{sx:{color:"text.secondary"},children:t.firstName+" "+t.lastName}),(0,s.jsx)(x.Z,{variant:"body2",sx:{color:"text.disabled"},children:t.role})]})]})})}),(0,s.jsx)(R,{hidden:r,msgs:c,user:n,contact:t}),(0,s.jsx)(P,{onSubmit:m,children:(0,s.jsxs)(E,{children:[(0,s.jsx)(a.Z,{sx:{flexGrow:1,display:"flex",alignItems:"center"},children:(0,s.jsx)(d.Z,{fullWidth:!0,value:p,size:"small",placeholder:"Type your message here…",onChange:e=>u(e.target.value),sx:{"& .MuiOutlinedInput-input":{pl:0},"& fieldset":{border:"0 !important"}}})}),(0,s.jsx)(a.Z,{sx:{display:"flex",alignItems:"center"},children:(0,s.jsx)(_.Z,{type:"submit",variant:"contained",children:"Send"})})]})})]}):(0,s.jsx)(I,{sx:{borderTopLeftRadius:0,borderBottomLeftRadius:0,height:"calc(100vh - 170px)"},children:(0,s.jsx)(l.Z,{sx:{mb:5,pt:8,pb:7,px:7.5,width:110,height:110,boxShadow:3,"& svg":{color:"action.active"},backgroundColor:"background.paper"},children:(0,s.jsx)(j.Z,{icon:"mdi:message-outline",fontSize:"3.125rem"})})})};var T=r(61225),A=r(62097),D=r(94314);let L=()=>{let e=(0,A.Z)(),t=(0,T.Z)(e.breakpoints.down("lg")),[r,n]=(0,i.useState)({}),o=e=>{n(e)};return(0,s.jsxs)(a.Z,{className:"app-chat",sx:{width:"100%",display:"flex",borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.paper",boxShadow:6},children:[(0,s.jsx)(C,{hidden:t,handleChatClick:o}),(0,s.jsx)(z,{hidden:t,sender:r})]})};L.authGuard=!0,L.getLayout=e=>(0,s.jsx)(D.Z,{children:e});var M=L}},function(e){e.O(0,[6284,8480,4583,8515,8259,7836,7853,4314,9774,2888,179],function(){return e(e.s=73688)}),_N_E=e.O()}]);