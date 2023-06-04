"use strict";(self.webpackChunkdelivery_app=self.webpackChunkdelivery_app||[]).push([[379],{8289:function(n,t,e){e.d(t,{B:function(){return r}});var r=[{id:1,name:"RapidBurger"},{id:2,name:"TurboTaco"},{id:3,name:"ExpressPizza"}]},379:function(n,t,e){e.r(t),e.d(t,{default:function(){return K}});var r=e(9434),i=e(1094),a=e(6351),o=e(493),s=e(4852),d=e(6151),u=e(8289),c=e(184),l=function(){var n=(0,r.I0)(),t=(0,r.v9)(a.zv);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{children:(0,c.jsx)(o.Z,{children:u.B.map((function(e){return(0,c.jsx)(s.ZP,{children:(0,c.jsx)(d.Z,{onClick:function(){return t=e.id,void n((0,i.HL)(t));var t},sx:{color:t===e.id?"primary.main":"inherit"},children:e.name})},e.id)}))})})})},h=e(1413),m=e(2791),f=e(7774),v=e(7589),p=e(5206),g=e(1889),Z=e(890),x=e(168),w=e(3366),b=e(7462),C=e(8182),j=e(2554),y=e(4419);function k(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function S(n){return parseFloat(n)}var R=e(2065),F=e(6934),N=e(1402),P=e(5878),B=e(1217);function M(n){return(0,B.Z)("MuiSkeleton",n)}(0,P.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var A,I,T,z,X,_,q,E,L=["animation","className","component","height","style","variant","width"],O=(0,j.F4)(X||(X=A||(A=(0,x.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),D=(0,j.F4)(_||(_=I||(I=(0,x.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),G=(0,F.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=k(t.shape.borderRadius)||"px",i=S(t.shape.borderRadius);return(0,b.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,R.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,j.iv)(q||(q=T||(T=(0,x.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),O)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,j.iv)(E||(E=z||(z=(0,x.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),D,(e.vars||e).palette.action.hover)})),H=m.forwardRef((function(n,t){var e=(0,N.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,i=void 0===r?"pulse":r,a=e.className,o=e.component,s=void 0===o?"span":o,d=e.height,u=e.style,l=e.variant,h=void 0===l?"text":l,m=e.width,f=(0,w.Z)(e,L),v=(0,b.Z)({},e,{animation:i,component:s,variant:h,hasChildren:Boolean(f.children)}),p=function(n){var t=n.classes,e=n.variant,r=n.animation,i=n.hasChildren,a=n.width,o=n.height,s={root:["root",e,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,y.Z)(s,M,t)}(v);return(0,c.jsx)(G,(0,b.Z)({as:s,ref:t,className:(0,C.Z)(p.root,a),ownerState:v},f,{style:(0,b.Z)({width:m,height:d},u)}))})),U=function(){var n=(0,r.I0)(),t=(0,r.v9)(a.Z_),e=(0,r.v9)(a.zv);return(0,m.useEffect)((function(){n((0,i.UL)()),n((0,f.T)())}),[n,e]),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(g.ZP,{container:!0,spacing:2,children:t.map((function(t){return(0,c.jsx)(g.ZP,{item:!0,xs:12,sm:6,md:4,children:null!==t&&void 0!==t&&t.image?(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{src:t.image,alt:t.title,style:{width:"100%"}}),(0,c.jsx)(Z.Z,{variant:"h6",component:"div",gutterBottom:!0,children:t.title}),(0,c.jsxs)(Z.Z,{variant:"subtitle1",component:"div",children:["Price: ",t.price]}),(0,c.jsx)(d.Z,{variant:"contained",color:"primary",onClick:function(){n((0,v.Xq)((0,h.Z)({},t))),p.Am.success("Order added to cart successfully")},children:"Add to Cart"})]}):(0,c.jsx)(H,{variant:"rectangular",width:210,height:118})},t.id)}))})})},W=e(4554),J=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(W.Z,{display:"flex",children:[(0,c.jsx)(l,{}),(0,c.jsx)(U,{})]})})},K=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(J,{}),";"]})}},6351:function(n,t,e){e.d(t,{Z_:function(){return i},ny:function(){return a},tr:function(){return s},zv:function(){return o}});var r=e(6916),i=function(n){return n.goods.goods},a=function(n){return n.orders.orders},o=function(n){return n.goods.currentShopID},s=(0,r.P1)((function(n){return n.cart.cartGoods}),o,(function(n,t){return n.filter((function(n){return n.shopId===t.toString()}))}))},4554:function(n,t,e){e.d(t,{Z:function(){return Z}});var r=e(7462),i=e(3366),a=e(2791),o=e(8182),s=e(2421),d=e(104),u=e(8519),c=e(3459),l=e(184),h=["className","component"];var m=e(5902),f=e(7107),v=e(988),p=(0,f.Z)(),g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.themeId,e=n.defaultTheme,m=n.defaultClassName,f=void 0===m?"MuiBox-root":m,v=n.generateClassName,p=(0,s.ZP)("div",{shouldForwardProp:function(n){return"theme"!==n&&"sx"!==n&&"as"!==n}})(d.Z);return a.forwardRef((function(n,a){var s=(0,c.Z)(e),d=(0,u.Z)(n),m=d.className,g=d.component,Z=void 0===g?"div":g,x=(0,i.Z)(d,h);return(0,l.jsx)(p,(0,r.Z)({as:Z,ref:a,className:(0,o.Z)(m,v?v(f):f),theme:t&&s[t]||s},x))}))}({themeId:v.Z,defaultTheme:p,defaultClassName:"MuiBox-root",generateClassName:m.Z.generate}),Z=g}}]);
//# sourceMappingURL=379.db48103b.chunk.js.map