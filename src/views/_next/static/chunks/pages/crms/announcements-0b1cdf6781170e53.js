(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7247],{57704:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crms/announcements",function(){return n(43279)}])},43279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var l=n(85893),r=n(67294),s=n(17288),i=n(80562),o=n(73812),a=n(31538),c=n(29630),d=n(21448),x=n(79072),u=n(49837),m=n(59742),h=n(61953),j=n(75084),Z=n(91359),f=n(21609),p=n(98966),g=n(94314),C=n(1890),y=n(77745),v=n(95398),b=n(55343),w=n(67836),S=n(5464),_=n(86501);let k=e=>{let{show:t,announcement:n,init:o,onInit:a,onClose:c}=e,{user:d}=(0,s.a)(),[x,u]=(0,r.useState)({title:"",content:""});return(0,r.useEffect)(()=>{let e=async()=>{if(Object.keys(n).length){let{data:e}=await S.Z.get("crms/announcements/".concat(n._id),{params:{userId:d._id}});a(!o),u(e)}};e()},[n]),(0,l.jsxs)(C.Z,{fullWidth:!0,maxWidth:"md",onClose:c,open:t,children:[(0,l.jsxs)(y.Z,{children:["Announcement Detail",(0,l.jsx)(i.Z,{onClick:c,sx:{position:"absolute",right:18,top:18,color:"#aaa"},children:(0,l.jsx)(f.Z,{icon:"mdi:close"})})]}),(0,l.jsxs)(v.Z,{sx:{p:6},children:[(0,l.jsx)(b.Z,{fullWidth:!0,sx:{mt:3,mb:6},children:(0,l.jsx)(w.Z,{value:x.title,label:"Title",readOnly:!0})}),(0,l.jsx)(b.Z,{fullWidth:!0,sx:{mb:6},children:(0,l.jsx)(w.Z,{value:x.content,multiline:!0,rows:8,label:"Content",readOnly:!0})}),(0,l.jsx)(h.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,l.jsx)(j.Z,{variant:"contained",color:"error",size:"large",startIcon:(0,l.jsx)(f.Z,{icon:"mdi:close"}),onClick:c,children:"Close"})})]})]})};var A=n(32631),N=n(58316),I=n(53442),z=n(74231),W=n(47533),E=n(87536);let T=e=>{let{show:t,init:n,onInit:s,onClose:o}=e,c=z.Ry().shape({title:z.Z_().required(),content:z.Z_().required()}),{reset:d,control:x,handleSubmit:u,formState:{errors:m}}=(0,E.cI)({defaultValues:{title:"",content:"",type:"agent"},mode:"onChange",resolver:(0,W.X)(c)});(0,r.useEffect)(()=>{d()},[]);let Z=async e=>{let{data:t}=await S.Z.post("crms/announcements",e);t.status?(_.Am.success(t.msg),s(!n),o()):_.Am.error(t.msg)};return(0,l.jsxs)(C.Z,{fullWidth:!0,maxWidth:"md",onClose:o,open:t,children:[(0,l.jsxs)(y.Z,{children:["New Announcement",(0,l.jsx)(i.Z,{onClick:o,sx:{position:"absolute",right:18,top:18,color:"#aaa"},children:(0,l.jsx)(f.Z,{icon:"mdi:close"})})]}),(0,l.jsx)(v.Z,{sx:{p:6},children:(0,l.jsxs)("form",{onSubmit:u(Z),style:{paddingTop:8},children:[(0,l.jsxs)(b.Z,{fullWidth:!0,sx:{mb:6},children:[(0,l.jsx)(E.Qr,{name:"title",control:x,render(e){let{field:{value:t,onChange:n}}=e;return(0,l.jsx)(w.Z,{value:t,label:"Title",onChange:n,error:Boolean(m.title)})}}),m.title&&(0,l.jsx)(A.Z,{sx:{color:"error.main"},children:m.title.message})]}),(0,l.jsxs)(b.Z,{fullWidth:!0,sx:{mb:6},children:[(0,l.jsx)(E.Qr,{name:"content",control:x,render(e){let{field:{value:t,onChange:n}}=e;return(0,l.jsx)(w.Z,{value:t,multiline:!0,rows:8,label:"Content",onChange:n,error:Boolean(m.content)})}}),m.content&&(0,l.jsx)(A.Z,{sx:{color:"error.main"},children:m.content})]}),(0,l.jsxs)(b.Z,{fullWidth:!0,sx:{mb:6},children:[(0,l.jsx)(N.Z,{error:Boolean(m.type),htmlFor:"type",children:"Type"}),(0,l.jsx)(E.Qr,{name:"type",id:"type",control:x,render(e){let{field:{value:t,onChange:n}}=e;return(0,l.jsxs)(I.Z,{value:t,label:"Type",onChange:n,error:Boolean(m.type),children:[(0,l.jsx)(a.Z,{value:"agent",children:"Agent"}),(0,l.jsx)(a.Z,{value:"staff",children:"Staff"})]})}})]}),(0,l.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:[(0,l.jsx)(j.Z,{type:"submit",variant:"contained",color:"primary",size:"large",startIcon:(0,l.jsx)(f.Z,{icon:"mdi:content-save"}),sx:{mr:4},children:"Save"}),(0,l.jsx)(j.Z,{variant:"contained",color:"error",size:"large",startIcon:(0,l.jsx)(f.Z,{icon:"mdi:delete"}),onClick:o,children:"Cancel"})]})]})})]})},P=e=>{let{show:t,announcement:n,init:s,onInit:o,onClose:a}=e,[c,d]=(0,r.useState)(0);(0,r.useEffect)(()=>{d(n._id),u({title:n.title,content:n.content})},[n]);let x=z.Ry().shape({title:z.Z_().required(),content:z.Z_().required()}),{reset:u,control:m,handleSubmit:Z,formState:{errors:p}}=(0,E.cI)({defaultValues:{title:"",content:""},mode:"onChange",resolver:(0,W.X)(x)}),g=async e=>{let{data:t}=await S.Z.put("crms/announcements/".concat(c),e);t.status?(o(!s),a(),_.Am.success(t.msg)):_.Am.error(t.msg)};return(0,l.jsxs)(C.Z,{fullWidth:!0,maxWidth:"md",onClose:a,open:t,children:[(0,l.jsxs)(y.Z,{children:["Edit Announcement",(0,l.jsx)(i.Z,{onClick:a,sx:{position:"absolute",right:18,top:18,color:"#aaa"},children:(0,l.jsx)(f.Z,{icon:"mdi:close"})})]}),(0,l.jsx)(v.Z,{sx:{p:6},children:(0,l.jsxs)("form",{onSubmit:Z(g),style:{paddingTop:8},children:[(0,l.jsxs)(b.Z,{fullWidth:!0,sx:{mb:6},children:[(0,l.jsx)(E.Qr,{name:"title",control:m,render(e){let{field:{value:t,onChange:n}}=e;return(0,l.jsx)(w.Z,{value:t,label:"Title",onChange:n,error:Boolean(p.title)})}}),p.title&&(0,l.jsx)(A.Z,{sx:{color:"error.main"},children:p.title.message})]}),(0,l.jsxs)(b.Z,{fullWidth:!0,sx:{mb:6},children:[(0,l.jsx)(E.Qr,{name:"content",control:m,render(e){let{field:{value:t,onChange:n}}=e;return(0,l.jsx)(w.Z,{value:t,multiline:!0,rows:8,label:"Content",onChange:n,error:Boolean(p.content)})}}),p.content&&(0,l.jsx)(A.Z,{sx:{color:"error.main"},children:p.content})]}),(0,l.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:[(0,l.jsx)(j.Z,{type:"submit",variant:"contained",color:"primary",size:"large",startIcon:(0,l.jsx)(f.Z,{icon:"mdi:content-save"}),sx:{mr:4},children:"Update"}),(0,l.jsx)(j.Z,{variant:"contained",color:"error",size:"large",startIcon:(0,l.jsx)(f.Z,{icon:"mdi:delete"}),onClick:a,children:"Cancel"})]})]})})]})};var Y=n(30381),B=n.n(Y);n(56701);let D=e=>{let{row:t,onEdit:n,onDelete:s}=e,[c,d]=(0,r.useState)(null),x=Boolean(c),u=e=>{e.stopPropagation(),d(e.currentTarget)},m=()=>{d(null)},h=()=>{n(t),m()},j=()=>{s(t._id),m()};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{size:"small",onClick:u,children:(0,l.jsx)(f.Z,{icon:"mdi:dots-vertical"})}),(0,l.jsxs)(o.Z,{keepMounted:!0,anchorEl:c,open:x,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,l.jsxs)(a.Z,{sx:{"& svg":{mr:2}},onClick:h,children:[(0,l.jsx)(f.Z,{icon:"mdi:pencil-outline",fontSize:20})," Edit"]}),(0,l.jsxs)(a.Z,{sx:{"& svg":{mr:2}},onClick:j,children:[(0,l.jsx)(f.Z,{icon:"mdi:delete-outline",fontSize:20})," Delete"]})]})]})},O=()=>{let{user:e}=(0,s.a)(),[t,n]=(0,r.useState)(!0),[i,o]=(0,r.useState)(""),[a,g]=(0,r.useState)(10),[C,y]=(0,r.useState)([]),[v,b]=(0,r.useState)(!1),[w,A]=(0,r.useState)(!1),[N,I]=(0,r.useState)(!1),[z,W]=(0,r.useState)({}),[E,Y]=(0,r.useState)([]);(0,r.useEffect)(()=>{let t=async()=>{let{data:t}=await S.Z.get("crms/announcements",{params:{userId:e._id,search:i}});y(t)};t(),"super_admin"===e.role||"admin"===e.role?Y([{flex:4,field:"title",headerName:"Title",renderCell(e){let{row:t}=e;return(0,l.jsx)(c.Z,{children:t.title})}},{flex:6,field:"content",headerName:"Content",renderCell(e){let{row:t}=e;return(0,l.jsx)(c.Z,{children:t.content})}},{flex:2,field:"createdAt",headerName:"Sent date",renderCell(e){let{row:t}=e;return(0,l.jsx)(c.Z,{children:B()(t.createdAt).format("YYYY.MM.DD HH:mm:ss")})}},{flex:1,field:"action",headerName:"Action",renderCell(e){let{row:t}=e;return(0,l.jsx)(D,{row:t,onEdit:H,onDelete:M})}}]):Y([{flex:4,field:"title",headerName:"Title",renderCell(e){let{row:t}=e;return(0,l.jsx)(c.Z,{children:t.title})}},{flex:6,field:"content",headerName:"Content",renderCell(e){let{row:t}=e;return(0,l.jsx)(c.Z,{children:t.content})}},{flex:2,field:"createdAt",headerName:"Sent date",renderCell(e){let{row:t}=e;return(0,l.jsx)(c.Z,{children:B()(t.createdAt).format("YYYY.MM.DD HH:mm:ss")})}},{flex:1,field:"status",headerName:"Status",renderCell(e){let{row:t}=e;return(0,l.jsx)(d.Z,{skin:"light",size:"small",variant:"filled",color:t.users.length?"success":"error",label:t.users.length?"Read":"New"})}}])},[t]);let O=async e=>{let{row:t}=e;W(t),b(!0)},H=async e=>{W(e),I(!0)},M=async e=>{let{data:l}=await S.Z.delete("crms/announcements/".concat(e));l.status?(_.Am.success(l.msg),n(!t)):_.Am.error(l.msg)};return(0,l.jsx)(x.ZP,{container:!0,spacing:6,children:(0,l.jsx)(x.ZP,{item:!0,xs:12,children:(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(m.Z,{title:(0,l.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,l.jsx)(c.Z,{variant:"h5",children:"Announcements"}),("super_admin"===e.role||"admin"===e.role)&&(0,l.jsx)(j.Z,{variant:"contained",size:"small",startIcon:(0,l.jsx)(f.Z,{icon:"mdi:plus"}),onClick:()=>A(!0),children:"Add New"})]})}),(0,l.jsxs)(Z.Z,{children:[(0,l.jsx)(h.Z,{children:(0,l.jsx)(p._,{autoHeight:!0,getRowId:e=>e._id,columns:E,rows:C,onRowClick:O,pageSize:a,onPageSizeChange:e=>g(e)})}),(0,l.jsx)(T,{show:w,init:t,onInit:n,onClose:()=>A(!1)}),(0,l.jsx)(P,{show:N,announcement:z,init:t,onInit:n,onClose:()=>I(!1)}),(0,l.jsx)(k,{show:v,announcement:z,init:t,onInit:n,onClose:()=>b(!1)})]})]})})})};O.getLayout=e=>(0,l.jsx)(g.Z,{children:e});var H=O}},function(e){e.O(0,[4885,6284,9799,4583,8515,3344,7836,9072,9491,9317,7985,4314,9774,2888,179],function(){return e(e.s=57704)}),_N_E=e.O()}]);