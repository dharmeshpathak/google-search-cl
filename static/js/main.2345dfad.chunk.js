(this["webpackJsonpgoogle-search-clone"]=this["webpackJsonpgoogle-search-clone"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(31),r=n.n(o),i=(n(89),n(29)),s=n.n(i),l=n(35),j=n(25),d=(n(91),n(12)),b=n(8),h=n(139),p=n(145),u=n(141),x=n(147),g=n(140),m=n(33),O=n.n(m),f=n(40),y=n.n(f),w=n(1),v=Object(h.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",justifyContent:"center",width:600},input:{marginLeft:e.spacing(1),flex:1,width:"20%"},iconButton:{padding:10},divider:{height:28,margin:4}}}));var S=function(e){var t=e.setSearch,n=e.SearchTerm,c=e.setData,o=v(),r=Object(a.useState)(""),i=Object(j.a)(r,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){t(s.trim())}),[s,t]),Object(w.jsx)("div",{className:"container",display:"flex",justifycontent:"center",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)(p.a,{mt:4,p:4,children:Object(w.jsx)("img",{src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",alt:"Google Logo"})}),Object(w.jsxs)(p.a,{component:"form",children:[Object(w.jsx)(g.a,{className:o.iconButton,"aria-label":"menu"}),Object(w.jsx)(x.a,{value:s,onChange:function(e){l(e.target.value)},className:o.input,placeholder:"Search Google ",inputProps:{"aria-label":"search google maps"},style:{borderBottom:"1px solid lightgrey"}}),Object(w.jsx)(g.a,{component:d.b,to:"/search",type:"submit",className:o.iconButton,"aria-label":"search",onClick:function(){return c(n)},children:""!==n&&Object(w.jsx)(O.a,{})}),Object(w.jsx)(g.a,{color:"primary",className:o.iconButton,"aria-label":"directions",children:Object(w.jsx)(y.a,{})})]}),Object(w.jsxs)(p.a,{children:[Object(w.jsx)(u.a,{style:{margin:"5px"},variant:"contained",href:"https://www.google.com/",children:"Google Search"}),Object(w.jsx)(u.a,{variant:"contained",style:{margin:"5px"},href:"https://www.google.com/doodles",children:"I'm Feeling Lucky"})]})]})})},k=n(150),N=n(142),T=n(42),C=n.n(T),I=n(41),L=n.n(I),D=(n(99),Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})));function B(){var e=D();return Object(w.jsx)("div",{component:p.a,className:e.root,children:Object(w.jsx)(k.a,{component:p.a,position:"fixed",display:"flex",style:{background:"#ffff",boxShadow:"none"},children:Object(w.jsxs)(N.a,{component:p.a,justifyContent:"flex-end",color:"black",children:[Object(w.jsx)(u.a,{color:"inherit",href:"https://www.gmail.com ",children:"Gmail"}),Object(w.jsx)(u.a,{color:"inherit",href:"https://www.google.com/imghp?hl=EN",children:"Image"}),Object(w.jsx)(g.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"menu",href:"https://store.google.com/",children:Object(w.jsx)(L.a,{})}),Object(w.jsx)(g.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"menu",href:"/",children:Object(w.jsx)(C.a,{})})]})})})}var R=n(23),M=n(13),G=n(43),_=n.n(G),F=Object(h.a)((function(e){return{main:Object(R.a)({},e.breakpoints.down("sm"),{width:"20% !important "}),main1:Object(R.a)({},e.breakpoints.down("sm"),{width:"100%  !important "}),grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(R.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(R.a)({display:"flex",position:"relative",borderRadius:"40px",border:"1px solid lightgrey",backgroundColor:Object(M.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(M.b)(e.palette.common.white,.25),border:"none",boxShadow:"0px 0px 2px 2px lightgrey"},marginRight:e.spacing(2),marginLeft:"10px",width:"40%",marginTop:"5px"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"40%"}),input:{marginLeft:e.spacing(1),flex:1,width:"20%"},iconButton:{padding:10},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"relative",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(R.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(2),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"95%"}),sectionDesktop:Object(R.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(R.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));var U=function(e){var t=e.SearchTerm,n=e.setSearch,c=e.setData,o=F(),r=Object(a.useState)(t),i=Object(j.a)(r,2),s=i[0],l=i[1],b=function(e){!function(e){n(e.trim()),console.log(t)}(e),console.log("log from onclick",t),c(t)};return Object(w.jsx)("div",{className:o.grow,display:"flex",children:Object(w.jsx)(k.a,{position:"fixed",top:"0",style:{background:"#ffff",color:"black",boxShadow:"none"},children:Object(w.jsxs)(N.a,{children:[Object(w.jsx)(d.b,{to:"/",style:{width:"10%"},className:o.main,children:Object(w.jsx)("img",{className:o.main1,component:p.a,style:{width:"90%"},src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",alt:"Google Logo"})}),Object(w.jsxs)(p.a,{component:"form",className:o.search,justifyContent:"flex-end",alignItems:"center",children:[Object(w.jsx)(x.a,{style:{width:"100%",paddingRight:"0"},onChange:function(e){l(e.target.value)},value:s,classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"search"}}),Object(w.jsx)(g.a,{onClick:function(){return b(s)},edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",children:""!==s.trim()&&Object(w.jsx)(O.a,{style:{color:"grey",marginRight:"4px",cursor:"pointer"}})}),Object(w.jsx)(g.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(w.jsx)(y.a,{style:{color:"blue"}})})]}),Object(w.jsx)("div",{className:o.grow}),Object(w.jsxs)("div",{className:o.sectionDesktop,children:[Object(w.jsx)(g.a,{"aria-label":"show 4 new mails",color:"inherit",href:"https://store.google.com/",children:Object(w.jsx)(L.a,{})}),Object(w.jsx)(g.a,{edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",children:Object(w.jsx)(C.a,{})})]}),Object(w.jsx)("div",{className:o.sectionMobile,children:Object(w.jsx)(g.a,{"aria-label":"show more","aria-haspopup":"true",color:"inherit",children:Object(w.jsx)(_.a,{})})})]})})})},z=n(21),A=n(76),E=n(6),W=n(146),P=n(144),H=n(143),J=(n(100),n(69)),K=n.n(J),V=n(70),q=n.n(V),Y=n(71),Z=n.n(Y),$=n(72),Q=n.n($),X=n(73),ee=n.n(X),te=n(68),ne=n.n(te);n(101);var ae=function(e){return Object(w.jsx)("div",{style:{borderBottom:"2px solid lightgrey"},children:Object(w.jsxs)("div",{children:[Object(w.jsxs)("a",{style:{fontSize:"12px",padding:"5px"},href:e.displayLink,children:[e.displayLink," "," ",Object(w.jsx)(ne.a,{})]}),Object(w.jsx)("h4",{children:Object(w.jsx)("a",{href:e.formattedUrl,className:"link-text",dangerouslySetInnerHTML:{__html:e.htmlTitle}})}),Object(w.jsx)("p",{className:"paragraph",dangerouslySetInnerHTML:{__html:e.htmlSnippet},style:{color:"#666"}})]},e.displayLink)})};function ce(e){var t=e.children,n=e.value,a=e.index,c=Object(A.a)(e,["children","value","index"]);return Object(w.jsx)("div",Object(z.a)(Object(z.a)({className:"MuiTabs-fixed",role:"tabpanel",hidden:n!==a,id:"fixed-auto-tabpanel-".concat(a),"aria-labelledby":"fixed-auto-tab-".concat(a)},c),{},{children:n===a&&Object(w.jsx)(p.a,{p:1,children:Object(w.jsx)(H.a,{children:t})})}))}function oe(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var re=Object(E.a)({root:{borderBottom:"1px solid none"},indicator:{backgroundColor:"#1890ff"}})(W.a),ie=Object(E.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(4),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{color:"#40a9ff",opacity:1},"&$selected":{color:"#1890ff",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},selected:{}}}))((function(e){return Object(w.jsx)(P.a,Object(z.a)({disableRipple:!0},e))})),se=Object(h.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#ffff",paddingLeft:"10%"},padding:{padding:e.spacing(.1)},demo1:{backgroundColor:"white",color:"grey",overflow:"hidden"},demo2:{backgroundColor:"white"}}}));function le(e){e.SearchTerm;var t=e.searchData,n=(e.setData,t.items),a=t.searchInformation,o=se(),r=c.a.useState(0),i=Object(j.a)(r,2),s=i[0],l=i[1];return Object(w.jsxs)("div",{className:o.root,children:[Object(w.jsxs)("div",{className:o.demo1,children:[Object(w.jsxs)(re,{className:"MuiTabs-fixed",value:s,onChange:function(e,t){l(t)},style:{fontSize:"0.5rem",width:"100%",color:"grey !important"},alignItems:"center","aria-label":"ant example",children:[Object(w.jsx)(ie,Object(z.a)({label:"All",icon:Object(w.jsx)(O.a,{})},oe(0))),Object(w.jsx)(ie,Object(z.a)({label:"Vedio",icon:Object(w.jsx)(K.a,{})},oe(1))),Object(w.jsx)(ie,Object(z.a)({label:"News",icon:Object(w.jsx)(q.a,{})},oe(2))),Object(w.jsx)(ie,Object(z.a)({label:"Maps",icon:Object(w.jsx)(Z.a,{})},oe(3))),Object(w.jsx)(ie,Object(z.a)({label:"Images",icon:Object(w.jsx)(Q.a,{})},oe(4))),Object(w.jsx)(ie,Object(z.a)({label:"Shopping",icon:Object(w.jsx)(ee.a,{})},oe(5))),Object(w.jsx)(ie,Object(z.a)({label:"More",icon:Object(w.jsx)(_.a,{})},oe(6))),Object(w.jsx)("div",{display:"inline-block",style:{fontSize:".85rem",textDecoration:"none"},children:Object(w.jsxs)("ul",{children:[Object(w.jsx)(d.b,{style:{marginRight:"5px",color:"grey",textDecoration:"none"},children:"Setting"}),Object(w.jsx)(d.b,{style:{marginLeft:"5px",color:"grey",textDecoration:"none"},children:"Tools"})]})})]}),Object(w.jsx)(H.a,{className:o.padding})]}),Object(w.jsxs)("div",{className:o.demo2,children:[Object(w.jsxs)(ce,{value:s,index:0,children:[Object(w.jsxs)("p",{className:"small font-weight-light",style:{fontSize:"8px !important"},children:["About ",a.formattedTotalResults," results (",a.formattedSearchTime,"seconds)"," "]}),n.map((function(e,t){return Object(w.jsx)(ae,{displayLink:e.displayLink,formattedUrl:e.formattedUrl,htmlTitle:e.htmlTitle,htmlSnippet:e.htmlSnippet},e.htmlTitle+e.displayLink)}))]}),Object(w.jsx)(ce,{value:s,index:1,children:Object(w.jsx)("h1",{children:"Vedios"})}),Object(w.jsx)(ce,{value:s,index:2,children:Object(w.jsx)("h1",{children:"News"})}),Object(w.jsx)(ce,{value:s,index:3,children:Object(w.jsx)("h1",{children:"Maps"})}),Object(w.jsx)(ce,{value:s,index:4,children:Object(w.jsx)("h1",{children:"Images"})}),Object(w.jsx)(ce,{value:s,index:5,children:Object(w.jsx)("h1",{children:"shopping"})}),Object(w.jsx)(ce,{value:s,index:6,children:Object(w.jsx)("h1",{children:"know more"})}),Object(w.jsx)(H.a,{className:o.padding})]})]})}var je=function(e){var t=e.SearchTerm,n=e.searchData,a=e.setData,c=e.setSearch;return Object(w.jsxs)("div",{children:[Object(w.jsx)(U,{setSearch:c,SearchTerm:t,setData:a}),0!==n.length?Object(w.jsx)(le,{SearchTerm:t,searchData:n,setData:a}):console.log("halted"),0!==n.length?null:Object(w.jsx)("h1",{style:{justifyContent:"center",alignItems:"center",margin:"0 auto",color:"grey"},children:"loading data"}),console.log(n)]})},de=n(74),be=n.n(de),he=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.a.get("https://www.googleapis.com/customsearch/v1",{params:{key:"AIzaSyB2cKn4YRwB_zDyvSC0WyU2aZSOyaKtOlo",cx:"2ca1b8b9860939878",q:t}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(120),n(75);var pe=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),r=Object(j.a)(o,2),i=r[0],h=r[1],p=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in set data of app,js"),e.next=3,he(t);case 3:return n=e.sent,e.next=6,h(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(d.a,{children:Object(w.jsxs)(b.d,{children:[Object(w.jsx)(b.b,{exact:!0,path:"/",children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(B,{}),Object(w.jsx)(S,{SearchTerm:n,setSearch:p,setData:u})]})}),""!==n?Object(w.jsx)(b.b,{exact:!0,path:"/search",component:function(){return Object(w.jsx)(je,{searchData:i,setSearch:p,SearchTerm:n,setData:u})}}):null,Object(w.jsx)(b.a,{to:"/"})]})})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(pe,{})}),document.getElementById("root")),ue()},89:function(e,t,n){},91:function(e,t,n){},99:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.2345dfad.chunk.js.map