(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5051],{91359:function(e,a,t){"use strict";t.d(a,{Z:function(){return f}});var o=t(87462),s=t(63366),r=t(67294),n=t(86010),i=t(94780),l=t(67074),c=t(78884),d=t(1588),m=t(34867);function u(e){return(0,m.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var h=t(85893);let x=["className","component"],p=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"]},u,a)},Z=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=r.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:r,component:i="div"}=t,l=(0,s.Z)(t,x),d=(0,o.Z)({},t,{component:i}),m=p(d);return(0,h.jsx)(Z,(0,o.Z)({as:i,className:(0,n.Z)(m.root,r),ownerState:d,ref:a},l))});var f=g},59742:function(e,a,t){"use strict";t.d(a,{Z:function(){return C}});var o=t(63366),s=t(87462),r=t(67294),n=t(86010),i=t(94780),l=t(29630),c=t(78884),d=t(67074),m=t(1588),u=t(34867);function h(e){return(0,u.Z)("MuiCardHeader",e)}let x=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var p=t(85893);let Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,a)},f=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,s.Z)({[`& .${x.title}`]:a.title,[`& .${x.subheader}`]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),j=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),v=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,d.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),N=r.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:i,className:d,component:m="div",disableTypography:u=!1,subheader:h,subheaderTypographyProps:x,title:N,titleTypographyProps:C}=t,b=(0,o.Z)(t,Z),w=(0,s.Z)({},t,{component:m,disableTypography:u}),M=g(w),P=N;null==P||P.type===l.Z||u||(P=(0,p.jsx)(l.Z,(0,s.Z)({variant:i?"body2":"h5",className:M.title,component:"span",display:"block"},C,{children:P})));let R=h;return null==R||R.type===l.Z||u||(R=(0,p.jsx)(l.Z,(0,s.Z)({variant:i?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:R}))),(0,p.jsxs)(f,(0,s.Z)({className:(0,n.Z)(M.root,d),as:m,ref:a,ownerState:w},b,{children:[i&&(0,p.jsx)(j,{className:M.avatar,ownerState:w,children:i}),(0,p.jsxs)(y,{className:M.content,ownerState:w,children:[P,R]}),r&&(0,p.jsx)(v,{className:M.action,ownerState:w,children:r})]}))});var C=N},49837:function(e,a,t){"use strict";t.d(a,{Z:function(){return j}});var o=t(87462),s=t(63366),r=t(67294),n=t(86010),i=t(94780),l=t(67074),c=t(78884),d=t(70918),m=t(1588),u=t(34867);function h(e){return(0,u.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var x=t(85893);let p=["className","raised"],Z=e=>{let{classes:a}=e;return(0,i.Z)({root:["root"]},h,a)},g=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({overflow:"hidden"})),f=r.forwardRef(function(e,a){let t=(0,c.Z)({props:e,name:"MuiCard"}),{className:r,raised:i=!1}=t,l=(0,s.Z)(t,p),d=(0,o.Z)({},t,{raised:i}),m=Z(d);return(0,x.jsx)(g,(0,o.Z)({className:(0,n.Z)(m.root,r),elevation:i?8:void 0,ref:a,ownerState:d},l))});var j=f},70125:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crms/logo",function(){return t(64442)}])},64442:function(e,a,t){"use strict";t.r(a);var o=t(85893),s=t(67294),r=t(79072),n=t(49837),i=t(59742),l=t(91359),c=t(61953),d=t(29630),m=t(80562),u=t(94314),h=t(21609),x=t(5464),p=t(86501);let Z=()=>{let[e,a]=(0,s.useState)([]);(0,s.useEffect)(()=>{t()},[]);let t=async()=>{let{data:e}=await x.Z.get("crms/logos");a(e)},u=async(e,a)=>{let o=new FormData;o.append("logo",e.target.files[0]),o.append("type",a);let{data:s}=await x.Z.post("/crms/logos",o,{headers:{"Content-Type":"multipart/form-data"}});s.status?p.ZP.success(s.msg):p.ZP.error(s.msg),await t()},Z=async e=>{let{data:a}=await x.Z.delete("/crms/logo",{type:e});a.status?p.ZP.success(a.msg):p.ZP.error(a.msg),await t()},g=a=>{let t=e.find(e=>e.type===a);return t?"".concat("/uploads","/logos/").concat(t.image):void 0};return(0,o.jsx)(r.ZP,{container:!0,spacing:6,children:(0,o.jsx)(r.ZP,{item:!0,xs:12,children:(0,o.jsxs)(n.Z,{children:[(0,o.jsx)(i.Z,{title:"Logo Management"}),(0,o.jsx)(l.Z,{children:(0,o.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,o.jsxs)(c.Z,{sx:{mr:4},children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{ml:1,mb:2},children:"Email Logo"}),(0,o.jsxs)("div",{className:"logo-uploader-container",children:[(0,o.jsx)("div",{className:"logo-uploader-content",children:(0,o.jsx)("img",{src:g("email"),style:{width:"100%",height:"auto",maxHeight:180}})}),(0,o.jsxs)("div",{className:"logo-uploader-actions",children:[(0,o.jsxs)(m.Z,{component:"label",children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>u(e,"email")}),(0,o.jsx)(h.Z,{icon:"mdi:camera",color:"#666cffaa",style:{fontSize:60}})]}),(0,o.jsx)(m.Z,{size:"small",className:"logo-uploader-delete-btn",onClick:()=>Z("email"),children:(0,o.jsx)(h.Z,{icon:"mdi:delete",color:"#666cffaa"})})]})]})]}),(0,o.jsxs)(c.Z,{sx:{mr:4},children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{ml:1,mb:2},children:"User Logo"}),(0,o.jsxs)("div",{className:"logo-uploader-container",children:[(0,o.jsx)("div",{className:"logo-uploader-content",children:(0,o.jsx)("img",{src:g("user"),style:{width:"100%",height:"auto",maxHeight:180}})}),(0,o.jsxs)("div",{className:"logo-uploader-actions",children:[(0,o.jsxs)(m.Z,{component:"label",children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>u(e,"user")}),(0,o.jsx)(h.Z,{icon:"mdi:camera",color:"#666cffaa",style:{fontSize:60}})]}),(0,o.jsx)(m.Z,{size:"small",className:"logo-uploader-delete-btn",onClick:()=>Z("user"),children:(0,o.jsx)(h.Z,{icon:"mdi:delete",color:"#666cffaa"})})]})]})]}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{ml:1,mb:2},children:"Admin Logo"}),(0,o.jsxs)("div",{className:"logo-uploader-container",children:[(0,o.jsx)("div",{className:"logo-uploader-content",children:(0,o.jsx)("img",{src:g("admin"),style:{width:"100%",height:"auto",maxHeight:180}})}),(0,o.jsxs)("div",{className:"logo-uploader-actions",children:[(0,o.jsxs)(m.Z,{component:"label",children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>u(e,"admin")}),(0,o.jsx)(h.Z,{icon:"mdi:camera",color:"#666cffaa",style:{fontSize:60}})]}),(0,o.jsx)(m.Z,{size:"small",className:"logo-uploader-delete-btn",onClick:()=>Z("admin"),children:(0,o.jsx)(h.Z,{icon:"mdi:delete",color:"#666cffaa"})})]})]})]}),(0,o.jsxs)(c.Z,{sx:{mr:4},children:[(0,o.jsx)(d.Z,{variant:"h6",sx:{ml:1,mb:2},children:"Footer Logo"}),(0,o.jsxs)("div",{className:"logo-uploader-container",children:[(0,o.jsx)("div",{className:"logo-uploader-content",children:(0,o.jsx)("img",{src:g("footer"),style:{width:"100%",height:"auto",maxHeight:180}})}),(0,o.jsxs)("div",{className:"logo-uploader-actions",children:[(0,o.jsxs)(m.Z,{component:"label",children:[(0,o.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>u(e,"footer")}),(0,o.jsx)(h.Z,{icon:"mdi:camera",color:"#666cffaa",style:{fontSize:60}})]}),(0,o.jsx)(m.Z,{size:"small",className:"logo-uploader-delete-btn",onClick:()=>Z("footer"),children:(0,o.jsx)(h.Z,{icon:"mdi:delete",color:"#666cffaa"})})]})]})]})]})})]})})})};Z.getLayout=e=>(0,o.jsx)(u.Z,{children:e}),a.default=Z}},function(e){e.O(0,[6284,9799,4583,8515,3344,9072,4314,9774,2888,179],function(){return e(e.s=70125)}),_N_E=e.O()}]);