(this.webpackJsonpenigma=this.webpackJsonpenigma||[]).push([[0],{103:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(17),o=a.n(l),c=(a(103),a(91)),i=a(158),m=a(46),s=a.n(m),u=a(159),d=a(150),p=a(153),b=a(44),h=a(23),g=a(42),E=a(45),x=a(26),y=a(34),f=a(35),v=a(41),C=a(39),w=a(6),O=a(11),j=a(161),N=a(151),R=a(28),S=[{companyName:"Keplerk",product:"BTC-EUR",sentAt:"30 Apr 2020 17:09",status:!0},{companyName:"Enigma",product:"ETH-EUR",sentAt:"30 Apr 2020 17:09",status:!1},{companyName:"I Trust Capital",product:"BTC-EUR",sentAt:"30 Apr 2020 17:09",status:!1},{companyName:"Makor Capital",product:"ETH-EUR",sentAt:"30 Apr 2020 17:09",status:!0},{companyName:"Twitter Inc",product:"ETH-EUR",sentAt:"30 Apr 2020 17:09",status:!0},{companyName:"Square Inc",product:"ETH-EUR",sentAt:"30 Apr 2020 17:09",status:!0},{companyName:"Adobe Inc",product:"ETH-EUR",sentAt:"30 Apr 2020 17:09",status:!1}],k=a(87),A=a.n(k),T=function(e){Object(v.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(y.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).getRowClassName=function(t){var a=t.index,r=e.props,n=r.classes,l=r.onRowClick;return Object(w.a)(n.tableRow,n.flexContainer,Object(x.a)({},n.tableRowHover,-1!==a&&null!=l))},e.setRadioButton=function(e,t,a){return n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"center"},n.a.createElement(A.a,{id:e,htmlColor:t}),n.a.createElement("label",{labelplacement:"end",htmlFor:e,style:{color:"".concat(t)}},a))},e.cellRenderer=function(t){var a=t.cellData,r=t.columnIndex,l=e.props,o=l.columns,c=l.classes,i=l.rowHeight,m=l.onRowClick;return n.a.createElement(j.a,{component:"div",className:Object(w.a)(c.tableCell,c.flexContainer,2===r?c.labelCustom:null,Object(x.a)({},c.noClick,null==m)),variant:"body",style:{height:i},align:null!=r&&o[r].numeric?"right":"left"},3===r?a?e.setRadioButton("radio-active","rgb(41, 170, 41)","Active"):e.setRadioButton("radio-canceled","rgb(208, 41, 61)","Canceled"):a)},e.headerRenderer=function(t){var a=t.label,r=t.columnIndex,l=e.props,o=l.headerHeight,c=l.columns,i=l.classes;return n.a.createElement(j.a,{component:"div",className:Object(w.a)(i.tableCell,i.flexContainer,i.noClick,i.headerClassName),variant:"head",style:{height:o},align:c[r].numeric?"right":"left"},n.a.createElement("span",null,a))},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.columns,l=t.rowHeight,o=t.headerHeight,c=Object(E.a)(t,["classes","columns","rowHeight","headerHeight"]);return n.a.createElement(R.a,null,(function(t){var i=t.height,m=t.width;return n.a.createElement(R.c,Object.assign({height:i,width:m,rowHeight:l,gridStyle:{direction:"inherit"},headerHeight:o,className:a.table},c,{rowClassName:e.getRowClassName}),r.map((function(t,r){var l=t.dataKey,o=Object(E.a)(t,["dataKey"]);return n.a.createElement(R.b,Object.assign({key:l,headerRenderer:function(t){return e.headerRenderer(Object(g.a)(Object(g.a)({},t),{},{columnIndex:r}))},className:a.flexContainer,cellRenderer:e.cellRenderer,dataKey:l},o))})))}))}}]),a}(n.a.PureComponent);T.defaultProps={headerHeight:25,rowHeight:25};var H=Object(O.a)((function(e){return{flexContainer:{display:"flex",alignItems:"center",boxSizing:"border-box",backgroundColor:e.palette.secondary.dark,color:e.palette.common.white,fontSize:8},table:{"& .ReactVirtualized__Table__headerRow":{flip:!1,paddingRight:"rtl"===e.direction?"0 !important":void 0,borderBottom:"1px solid ".concat(e.palette.secondary.main),backgroundColor:e.palette.primary.main}},tableRow:{cursor:"pointer",borderBottom:"1px solid ".concat(e.palette.secondary.main)},tableRowHover:{"&:hover":{backgroundColor:e.palette.grey[200]}},tableCell:{flex:1},noClick:{cursor:"initial"},headerClassName:{backgroundColor:e.palette.primary.main,color:e.palette.primary.light},labelCustom:{color:e.palette.primary.light}}}))(T);function I(e,t,a,r,n){return{id:e,companyName:t,product:a,sentAt:r,status:n}}function D(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)([]),c=Object(h.a)(o,2),i=c[0],m=c[1];return Object(r.useEffect)((function(){S.map((function(e,t){var r=I(t,e.companyName,e.product,e.sentAt,e.status);return a.push(r),l(Object(b.a)(a))}))}),[]),Object(r.useEffect)((function(){for(var e=0;e<200;e+=1){var t=a[Math.floor(Math.random()*a.length)];i.push(I(e,t.companyName,t.product,t.sentAt,t.status))}return m(Object(b.a)(i))}),[a]),n.a.createElement(N.a,{style:{height:320,width:"100%"}},n.a.createElement(H,{rowCount:i.length,rowGetter:function(e){var t=e.index;return i[t]},columns:[{width:140,label:"COMPANY NAME",dataKey:"companyName"},{width:120,label:"PRODUCT",dataKey:"product"},{width:160,label:"SENT AT",dataKey:"sentAt"},{width:130,label:"STATUS",dataKey:"status"}]}))}var U=[{counterParty:"B2C2",btc:"2.125",eth:"0",xpr:"0",eur:"0",usd:"11413",gbr:"0",netExposure:"1000000.36",lastCalLculationDate:"01/07/2020"},{counterParty:"Alameda",btc:"0",eth:"0",xpr:"0",eur:"0",usd:"0",gbr:"0",netExposure:"0",lastCalLculationDate:"01/07/2020"},{counterParty:"Keplerk",btc:"0",eth:"0",xpr:"0",eur:"0",usd:"0",gbr:"0",netExposure:"0",lastCalLculationDate:"01/07/2020"},{counterParty:"Bitcoin",btc:"0",eth:"0",xpr:"0",eur:"0",usd:"0",gbr:"0",netExposure:"0",lastCalLculationDate:"01/07/2020"},{counterParty:"Sygnum",btc:"0",eth:"0",xpr:"0",eur:"0",usd:"0",gbr:"0",netExposure:"0",lastCalLculationDate:"01/07/2020"},{counterParty:"Conlnsourse",btc:"0",eth:"0",xpr:"0",eur:"0",usd:"0",gbr:"0",netExposure:"0",lastCalLculationDate:"01/07/2020"},{counterParty:"I Trust Capital",btc:"0",eth:"0",xpr:"0",eur:"0",usd:"0",gbr:"0",netExposure:"0",lastCalLculationDate:"01/07/2020"}],B=function(e){Object(v.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(y.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).getRowClassName=function(t){var a=t.index,r=e.props,n=r.classes,l=r.onRowClick;return Object(w.a)(n.tableRow,n.flexContainer,Object(x.a)({},n.tableRowHover,-1!==a&&null!=l))},e.cellRenderer=function(t){var a=t.cellData,r=t.columnIndex,l=e.props,o=l.columns,c=l.classes,i=l.rowHeight,m=l.onRowClick;return n.a.createElement(j.a,{component:"div",className:Object(w.a)(c.tableCell,c.flexContainer,8===r?c.labelCustom:null,Object(x.a)({},c.noClick,null==m)),variant:"body",style:{height:i},align:null!=r&&o[r].numeric?"right":"left"},a)},e.headerRenderer=function(t){var a=t.label,r=t.columnIndex,l=e.props,o=l.headerHeight,c=l.columns,i=l.classes;return n.a.createElement(j.a,{component:"div",className:Object(w.a)(i.tableCell,i.flexContainer,i.noClick,i.headerClassName),variant:"head",style:{height:o},align:c[r].numeric?"right":"left"},n.a.createElement("span",null,a))},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,r=t.columns,l=t.rowHeight,o=t.headerHeight,c=Object(E.a)(t,["classes","columns","rowHeight","headerHeight"]);return n.a.createElement(R.a,null,(function(t){var i=t.height,m=t.width;return n.a.createElement(R.c,Object.assign({height:i,width:m,rowHeight:l,gridStyle:{direction:"inherit"},headerHeight:o,className:a.table},c,{rowClassName:e.getRowClassName}),r.map((function(t,r){var l=t.dataKey,o=Object(E.a)(t,["dataKey"]);return n.a.createElement(R.b,Object.assign({key:l,headerRenderer:function(t){return e.headerRenderer(Object(g.a)(Object(g.a)({},t),{},{columnIndex:r}))},className:a.flexContainer,cellRenderer:e.cellRenderer,dataKey:l},o))})))}))}}]),a}(n.a.PureComponent);B.defaultProps={headerHeight:28,rowHeight:28};var z=Object(O.a)((function(e){return{flexContainer:{display:"flex",alignItems:"center",boxSizing:"border-box",backgroundColor:e.palette.secondary.dark,color:e.palette.common.white,fontSize:10},table:{"& .ReactVirtualized__Table__headerRow":{flip:!1,paddingRight:"rtl"===e.direction?"0 !important":void 0,borderBottom:"1px solid ".concat(e.palette.secondary.main),backgroundColor:e.palette.primary.main}},tableRow:{cursor:"pointer",borderBottom:"1px solid ".concat(e.palette.secondary.main)},tableRowHover:{"&:hover":{backgroundColor:e.palette.grey[200]}},tableCell:{flex:1},noClick:{cursor:"initial"},headerClassName:{backgroundColor:e.palette.primary.main,color:e.palette.primary.light},labelCustom:{color:"#78909c"}}}))(B);function K(e,t,a,r,n,l,o,c,i,m){return{id:e,counterParty:t,btc:a,eth:r,xpr:n,eur:l,usd:o,gbr:c,netExposure:i,lastCalLculationDate:m}}function L(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)([]),c=Object(h.a)(o,2),i=c[0],m=c[1];return Object(r.useEffect)((function(){U.map((function(e,t){var r=K(t,e.counterParty,e.btc,e.eth,e.xpr,e.eur,e.usd,e.gbr,e.netExposure,e.lastCalLculationDate);return a.push(r),l(Object(b.a)(a))}))}),[]),Object(r.useEffect)((function(){for(var e=0;e<200;e+=1){var t=a[Math.floor(Math.random()*a.length)];i.push(K(e,t.counterParty,t.btc,t.eth,t.xpr,t.eur,t.usd,t.gbr,t.netExposure,t.lastCalLculationDate))}return m(Object(b.a)(i))}),[a]),n.a.createElement(N.a,{style:{height:280,width:"100%"}},n.a.createElement(z,{rowCount:i.length,rowGetter:function(e){var t=e.index;return i[t]},columns:[{width:180,label:"COUNTERPARTY",dataKey:"counterParty"},{width:100,label:"BTC",dataKey:"btc"},{width:100,label:"ETH",dataKey:"eth"},{width:100,label:"XPR",dataKey:"xpr"},{width:100,label:"EUR",dataKey:"eur"},{width:100,label:"USD",dataKey:"usd"},{width:100,label:"GBR",dataKey:"gbr"},{width:100,label:"NET EXPOSURE",dataKey:"netExposure"},{width:100,label:"LAST CALCULATION DATE",dataKey:"lastCalLculationDate"}]}))}var P=a(160),F=a(152),M=a(154),W=[{label:"ID",text:"123456789"},{label:"CREATED",text:["[2020-08-21 13:11:05] production. INFO: EUR-USD - price: 1.1762 - message : Inserted Id: 1782721","[2020-08-21 13:11:05] production. INFO: EUR-USD - price: 1.1762 - message : Inserted Id: 1782721","[2020-08-21 13:11:05] production. INFO: EUR-USD - price: 1.1762 - message : Inserted Id: 1782721","[2020-08-21 13:11:34] production. WARNING: login failed, Wrong number of segments"]}],G=Object(O.a)({root:{zIndex:1},indicator:{display:"flex",justifyContent:"center",borderColor:"1px solid red",backgroundColor:"1px solid #263238",border:"1px solid #263238",top:"0px",buttom:"0px",height:2}})(P.a),_=Object(O.a)((function(e){return{root:{textTransform:"none",minWidth:32,backgroundColor:e.palette.primary.main,fontSize:10,fontWeight:e.typography.fontWeightRegular,fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{color:e.palette.common.white,opacity:1},"&$selected":{color:e.palette.common.white},"&:focus":{color:e.palette.common.white}},selected:{}}}))((function(e){return n.a.createElement(F.a,Object.assign({disableRipple:!0},e))})),V=Object(p.a)((function(e){return{root:{flexGrow:1},padding:{padding:e.spacing(3)},demo1:{backgroundColor:e.palette.secondary.dark,color:e.palette.common.white,fontSize:10},demo2:{backgroundColor:"#2e1534"}}}));function Y(){var e=V(),t=n.a.useState(1),a=Object(h.a)(t,2),l=a[0],o=a[1],c=Object(r.useState)(""),i=Object(h.a)(c,2),m=i[0],s=i[1],u=Object(r.useState)(""),d=Object(h.a)(u,2),p=d[0],b=d[1];Object(r.useEffect)((function(){W.map((function(e,t){return"ID"===e.label&&s(e.text),"CREATED"===e.label&&b(e.text),e}))}),[]);return n.a.createElement("div",{className:e.root},n.a.createElement("div",{className:e.demo1},n.a.createElement(G,{value:l,onChange:function(e,t){o(t)},"aria-label":"ant example"},n.a.createElement(_,{label:"ID"}),n.a.createElement(_,{label:"CREATED"}),n.a.createElement(_,{label:"LAST OPENED"}),n.a.createElement(_,{label:"INSTRUMENT"}),n.a.createElement(_,{label:"QTY"}),n.a.createElement(_,{label:"BID"}),n.a.createElement(_,{label:"ASK"}),n.a.createElement(_,{label:"DELTA"}),n.a.createElement(_,{label:"MODEL VOL"}),n.a.createElement(_,{label:"STATUS"}),n.a.createElement(_,{label:"CLEARING"})),n.a.createElement("p",null,function(e){switch(e){case 0:return m;case 1:return p;default:return null}}(l)),n.a.createElement(M.a,{className:e.padding})))}var J=a(88),X=a.n(J),$=a(120),q=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}},inputBase:{margin:2,border:"1px solid ".concat(e.palette.primary.light),color:e.palette.primary.light,height:"6vh",padding:e.spacing(1),fontSize:10}}})),Q=function(e){var t=e.textField,a=(e.textId,q());return n.a.createElement("div",null,n.a.createElement($.a,{className:a.inputBase,placeholder:t,variant:"outlined"}))},Z=a(155),ee=a(67),te=a.n(ee),ae=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{margin:"auto",maxWidth:500,background:e.palette.secondary.dark,color:e.palette.primary.light},header:{background:e.palette.secondary.main,color:e.palette.common.white,lineHeight:"normal",fontSize:10,textAlign:"left",verticalAlign:"middle"},spanText:{marginBottom:e.spacing(2)}}})),re=function(){var e=ae();return n.a.createElement("div",{className:e.root},n.a.createElement(N.a,{className:e.paper},n.a.createElement(d.a,{container:!0,spacing:1},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement("div",{className:e.header},n.a.createElement(X.a,null),n.a.createElement("span",{className:e.spanText},"BTC-USD"))),n.a.createElement(d.a,{container:!0,justify:"center",style:{minHeight:"10vh",maxWidth:"100%"}},n.a.createElement(d.a,{item:!0,xs:5,style:{minHeight:"5vh",maxWidth:"30%",margin:3}},n.a.createElement(Z.a,{size:"small",style:{borderRadius:5,backgroundColor:"rgb(208, 41, 61)",padding:"4px 12px",fontSize:"10px",color:"white"},variant:"contained"},n.a.createElement(d.a,{container:!0},n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(te.a,{fontSize:"inherit"}),"  "),n.a.createElement(d.a,{item:!0,xs:8},n.a.createElement("div",null,"9562.47",n.a.createElement("br",null),"Sell"))))),n.a.createElement(d.a,{item:!0,xs:2,align:"center"},n.a.createElement("span",{style:{fontSize:"10px",textAlign:"center",marginLeft:"4px"}},"18.5")),n.a.createElement(d.a,{item:!0,xs:5,style:{minHeight:"5vh",maxWidth:"30%",margin:3}},n.a.createElement(Z.a,{size:"small",style:{borderRadius:5,backgroundColor:"rgb(41, 170, 41)",padding:"4px 12px",fontSize:"10px",color:"white"},variant:"contained"},n.a.createElement(d.a,{container:!0},n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(te.a,{fontSize:"inherit"})),n.a.createElement(d.a,{item:!0,xs:8},n.a.createElement("div",null,"9580.52",n.a.createElement("br",null),"Buy")))))),n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(Q,{textId:"#field1",textField:"1.25"})),n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(Q,{textId:"field2",textField:"MKT"})),n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(Q,{textId:"field3",textField:"Slippage"})))))},ne=a(47),le=a(15),oe=Object(p.a)((function(e){return{root:{flexGrow:1},paper:{margin:"auto",maxWidth:500,maxHeight:175,backgroundColor:e.palette.secondary.dark,color:e.palette.primary.light},header:{backgroundColor:e.palette.secondary.main,lineHeight:"normal",fontSize:10,textAlign:"left",verticalAlign:"middle",borderBottom:"1px solid ".concat(e.palette.primary.light)},spanText:{marginBottom:e.spacing(2)},tab:{minWidth:20,width:20,minHeight:10,height:10,fontSize:10},tabs:{minHeight:10,height:10},chartStyle:{color:e.palette.primary.light}}})),ce=[{argument:"15:15",value:11.64},{argument:"15:30",value:11.64},{argument:"15:45",value:11.69},{argument:"16:00",value:11.7}],ie=function(){return[11.6,11.75]},me=function(){var e=oe(),t=n.a.useState(0),a=Object(h.a)(t,2),r=a[0],l=a[1];return n.a.createElement(N.a,{className:e.paper},n.a.createElement(d.a,{container:!0,spacing:1},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement("div",{className:e.header},n.a.createElement("span",{className:e.spanText},"BTC-USD-CME"),n.a.createElement(P.a,{value:r,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary",centered:!0,className:e.tabs},n.a.createElement(F.a,{className:e.tab,label:"1H"}),n.a.createElement(F.a,{className:e.tab,label:"1D"}),n.a.createElement(F.a,{className:e.tab,label:"1W"}),n.a.createElement(F.a,{className:e.tab,label:"1M"})))),n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(ne.c,{className:e.chartStyle,data:ce,style:{maxHeight:145}},n.a.createElement(le.l,{modifyDomain:ie}),n.a.createElement(ne.b,null),n.a.createElement(ne.e,null),n.a.createElement(ne.d,{name:"line",valueField:"value",argumentField:"argument"}),n.a.createElement(ne.a,{color:"#154b84",name:"area",valueField:"value",argumentField:"argument"})))))},se=a(90),ue=a.n(se),de=a(162),pe=a(156),be=a(157),he=function(e){Object(v.a)(a,e);var t=Object(C.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(pe.a,{className:e.root,margin:"dense",size:"small",variant:"filled"},n.a.createElement(de.a,{className:e.textField,htmlFor:"my-input"},"Filter 1"),n.a.createElement(be.a,{id:"my-input","aria-describedby":"my-helper-text",disableUnderline:!0,type:"search"}),n.a.createElement(ue.a,{style:{position:"absolute",right:10,top:17,width:10,height:10}}))}}]),a}(n.a.Component),ge=Object(O.a)((function(e){return{root:{color:e.palette.primary.light,border:"0.2px solid ".concat(e.palette.primary.light),margin:e.spacing(1)},textField:{color:e.palette.primary.light,fontSize:10,textAlign:"center"}}}))(he),Ee=Object(p.a)((function(e){return{divStyle:{flexGrow:1,background:e.palette.primary.main,color:e.palette.primary.light,borderBottom:"2px solid ".concat(e.palette.secondary.main),fontSize:8,minHeight:20},spanStyle:{margin:"15px"}}})),xe=function(){var e=Ee();return n.a.createElement("div",{className:e.divStyle},n.a.createElement(d.a,{container:!0,direction:"row",alignItems:"center"},n.a.createElement(d.a,{item:!0,xs:3},n.a.createElement("span",{className:e.spanStyle},"FILTERS APPLIED: ")),n.a.createElement(d.a,{item:!0,xs:3},n.a.createElement(ge,null)),n.a.createElement(d.a,{item:!0,xs:3},n.a.createElement(ge,null)),n.a.createElement(d.a,{item:!0,xs:3},n.a.createElement(ge,null))))},ye=Object(p.a)((function(e){return{"@global":{"*::-webkit-scrollbar":{width:"0.5em"},"*::-webkit-scrollbar-track":{"-webkit-box-shadow":"inset 0 0 56px ".concat(e.palette.secondary.dark),borderRadius:6},"*::-webkit-scrollbar-thumb":{backgroundColor:e.palette.secondary.light,borderRadius:3}},root:{background:e.palette.primary.dark},divStyle:{flexGrow:1,background:e.palette.primary.main,color:e.palette.primary.light,borderBottom:"2px solid ".concat(e.palette.secondary.main),fontSize:10,minHeight:20},spanStyle:{margin:"15px"}}})),fe=function(){var e=ye();return n.a.createElement("div",{className:e.root},n.a.createElement(d.a,{container:!0,spacing:2},n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(xe,null),n.a.createElement(D,null)),n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(xe,null),n.a.createElement(D,null)),n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(d.a,{container:!0,spacing:2},n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(me,null)),n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(me,null)),n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(me,null)),n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(me,null)))),n.a.createElement(d.a,{container:!0,spacing:2},n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(d.a,{container:!0},n.a.createElement("div",{className:e.divStyle},n.a.createElement("span",{className:e.spanStyle},"TRESHOLD: 10000")),n.a.createElement(L,null))),n.a.createElement(d.a,{item:!0,xs:2},n.a.createElement(d.a,{container:!0},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(re,null)),n.a.createElement(d.a,{item:!0,xs:!0},n.a.createElement("br",null),n.a.createElement(re,null)))),n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(d.a,{container:!0,spacing:2},n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(me,null))))),n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(Y,null)),n.a.createElement(d.a,{item:!0,xs:6},n.a.createElement(Y,null))))},ve=Object(c.a)({palette:{primary:{light:s.a[400],main:s.a[700],dark:"#232b35"},secondary:{light:s.a[300],main:s.a[600],dark:s.a[800]},typography:{fontFamily:'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',htmlFontSize:10}}});var Ce=function(){return n.a.createElement("div",null,n.a.createElement(i.a,{theme:ve},n.a.createElement(u.a,null),n.a.createElement(fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){e.exports=a(117)}},[[98,1,2]]]);
//# sourceMappingURL=main.c15937c1.chunk.js.map