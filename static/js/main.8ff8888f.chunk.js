(this.webpackJsonpeugene_upston_website=this.webpackJsonpeugene_upston_website||[]).push([[0],{145:function(e,t,a){e.exports={Portfolio:"Portfolio_Portfolio__3g7-2",PortfolioGrid:"Portfolio_PortfolioGrid__30y5w"}},146:function(e,t,a){e.exports={Footer:"Footer_Footer__238hM",FooterSocialMediaItems:"Footer_FooterSocialMediaItems__28pOH"}},215:function(e,t,a){e.exports=a.p+"static/media/profile_pic.63580b13.png"},216:function(e,t,a){e.exports={Aboutcard:"Aboutcard_Aboutcard__3aHyK",Circle:"Aboutcard_Circle__3yYd0"}},218:function(e,t,a){e.exports=a.p+"static/media/deepbeat_interface.45abed6c.png"},219:function(e,t,a){e.exports=a.p+"static/media/Deepbox_img_1.05177358.png"},220:function(e,t,a){e.exports=a.p+"static/media/spotistics_screenshot.d53d03bb.png"},254:function(e,t,a){e.exports=a(413)},259:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){},399:function(e,t,a){},400:function(e,t,a){},401:function(e,t,a){},413:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(36),i=a.n(r),l=(a(259),a(260),a(261),a(262),a(24)),c=a(25),s=a(29),u=a(26),d=a(28),m=(a(263),a(264),a(95)),p=a.n(m),b=a(39),h=function(){return o.a.createElement("div",{className:"Header",id:"home"},o.a.createElement("header",null,o.a.createElement("h1",null,"Eugene Upston"),o.a.createElement("h5",null,"Software Engineer"),o.a.createElement("img",{className:"logo",src:p.a,width:"30px",height:"30px"}),o.a.createElement(b.a,{variant:"outline-light",onClick:function(){return window.location.href="#portfolio"}},"Portfolio")))},f=a(75),g=a.n(f),v=a(206),E=(a(399),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).backend_skills=[{skill:"Spring",value:85,color:"#b25364"},{skill:"SQL",value:75,color:"#b25364"},{skill:"C++",value:70,color:"#b25364"},{skill:"Java",value:80,color:"#b25364"},{skill:"Python",value:95,color:"#b25364"}],a.frontend_skills=[{skill:"Javascript",value:70,color:"#b25364"},{skill:"React",value:80,color:"#b25364"},{skill:"HTML",value:90,color:"#b25364"},{skill:"CSS",value:85,color:"#b25364"},{skill:"Bootstrap",value:80,color:"#b25364"}],a.state={currentData:a.backend_skills},a.handleFrontEnd=function(){a.setState({currentData:a.frontend_skills});var e=document.getElementById("backend_btn"),t=document.getElementById("frontend_btn");t.blur(),e.classList.remove("active"),t.classList.add("active")},a.handleBackEnd=function(){var e=document.getElementById("backend_btn"),t=document.getElementById("frontend_btn");e.blur(),t.classList.remove("active"),e.classList.add("active"),a.setState({currentData:a.backend_skills})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Barchart"},o.a.createElement("div",null,o.a.createElement(b.a,{id:"frontend_btn",variant:"outline-custom ",onClick:this.handleFrontEnd,className:"Buttons"},"Frontend"),o.a.createElement(b.a,{id:"backend_btn",variant:"outline-custom",onClick:this.handleBackEnd,className:"Buttons",active:!0},"Backend")),o.a.createElement(v.a,{data:this.state.currentData,indexBy:"skill",margin:{top:0,right:130,bottom:50,left:60},padding:.19,layout:"horizontal",colors:this.state.currentData.map((function(e){return e.color})),colorBy:"index",borderColor:{from:"color",modifiers:[["darker",1.6]]},borderWidth:1,axisTop:null,axisRight:null,axisBottom:null,axisLeft:{tickSize:7,tickPadding:7,tickRotation:-10},labelTextColor:"#f6f6ef",labelSkipWidth:12,labelSkipHeight:12,animate:!0,motionStiffness:90,motionDamping:15}))}}]),t}(n.Component)),_=a(96),y=a(215),k=a.n(y),x=a(216),C=a.n(x),I=a(217),j=a.n(I),w=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:C.a.Circle},o.a.createElement(j.a,{path:e.image,size:4,color:"white"})),o.a.createElement("h5",null,o.a.createElement("b",null,e.title)),o.a.createElement("h5",null,e.subtext))},S=a(23),N=[{title:"Reactive",subtext:"subtext explaining more",image:S.c},{title:"Intutive",subtext:"subtext explaining more",image:S.a},{title:"Database",subtext:"subtext explaining more",image:S.b},{title:"Adaptive",subtext:"subtext explaining more",image:S.d}].map((function(e){return o.a.createElement(w,{key:e.title,title:e.title,subtext:e.subtext,image:e.image})})),O=function(){return o.a.createElement("div",{className:g.a.About,id:"about"},o.a.createElement("h1",null,"ABOUT"),o.a.createElement("div",{className:g.a.AboutCardGrid},N),o.a.createElement("div",{className:g.a.AboutGrid},o.a.createElement("div",{className:g.a.ImageDescription},o.a.createElement(_.a,{src:k.a,roundedCircle:!0,fluid:!0}),o.a.createElement("div",{style:{margin:"20px"}},o.a.createElement("h4",null,o.a.createElement("strong",null,"Eugene Upston")),o.a.createElement("p",null," is a driven ",o.a.createElement("a",{style:{color:"#b25364"}},"self-taught")," programmer currently working as a Pipeline Software Developer for an AI company ",o.a.createElement("a",{style:{color:"#b25364"}},"Soul Machines.")))),o.a.createElement(E,null)))},M=(a(400),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={pageIds:["home","about","portfolio","contact"],currently_active:null},a.handleStickyNavbar=function(){var e=a.state.currently_active;a.state.pageIds.forEach((function(t){var n=document.getElementById(t),o=document.getElementById("navbar_"+t),r=n.getBoundingClientRect().top;-20<=r&&r<=20?(o.classList.add("active"),a.setState({currently_active:t})):t!==e&&o.classList.remove("active")}));var t=document.getElementById("navbar"),n=t.offsetTop;window.pageYOffset>=n?t.classList.add("sticky"):t.classList.remove("sticky")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleStickyNavbar),document.getElementById("navbar_home").classList.add("active")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleStickyNavbar)}},{key:"render",value:function(){return o.a.createElement("nav",{className:"NavbarCustom navbar navbar-expand",id:"navbar"},o.a.createElement("div",{className:"navbar-nav"},o.a.createElement("a",{href:"#home",className:"nav-link",id:"navbar_home"},"Home"),o.a.createElement("a",{href:"#about",className:"nav-link",id:"navbar_about"},"About"),o.a.createElement("a",{href:"#portfolio",className:"nav-link",id:"navbar_portfolio"},"Portfolio"),o.a.createElement("a",{href:"#contact",className:"nav-link",id:"navbar_contact"},"Contact")))}}]),t}(n.Component)),P=a(145),A=a.n(P),B=a(52),D=a.n(B),H=(a(401),a(147)),L=a(51),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(H.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",className:"PortfolioModal",centered:!0}),o.a.createElement(H.a.Body,{className:"PortfolioModalGrid"},o.a.createElement("img",{src:this.props.projectInfo.modal_image,className:"PortfolioModalImage",alt:""}),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("h3",null,o.a.createElement("b",null,this.props.projectInfo.projectName)),o.a.createElement("hr",null),o.a.createElement("h6",null,"Description"),o.a.createElement("p",null,this.props.projectInfo.description),o.a.createElement("hr",null),o.a.createElement("h6",null,"Technology Stack"),o.a.createElement("br",null),o.a.createElement("ul",null,this.props.projectInfo.tech_stack.map((function(e){return o.a.createElement("li",null,e)}))),o.a.createElement("hr",null),o.a.createElement("h6",null,"Explore"),o.a.createElement("div",{className:"SocialMediaIcons"},this.props.projectInfo.website?o.a.createElement(L.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",borderWidth:"0",borderStyle:"solid",icon:"web",iconColor:"rgba(255,255,255,1)",backgroundColor:"rgba(178,83,100,1)",iconSize:"3",roundness:"50%",url:this.props.projectInfo.website,size:"50"}):null,this.props.projectInfo.github?o.a.createElement(L.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",borderWidth:"0",borderStyle:"solid",icon:"github",iconColor:"rgba(255,255,255,1)",backgroundColor:"rgba(178,83,100,1)",iconSize:"3",roundness:"50%",url:this.props.projectInfo.github,size:"50"}):null,this.props.projectInfo.youtube?o.a.createElement(L.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",borderWidth:"0",borderStyle:"solid",icon:"youtube-play",iconColor:"rgba(255,255,255,1)",backgroundColor:"rgba(178,83,100,1)",iconSize:"3",roundness:"50%",url:this.props.projectInfo.youtube,size:"50"}):null))))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isHovered:!1,learnMore:!1},a.handleOnHover=function(){a.setState({isHovered:!0})},a.handleOffHover=function(){a.setState({isHovered:!1})},a.handleLearnMore=function(){a.setState({learnMore:!0})},a.handleModalHide=function(){a.setState({learnMore:!1}),a.setState({isHovered:!1})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:D.a.Portfoliocard,onMouseOver:this.handleOnHover,onMouseLeave:this.handleOffHover,id:this.props.projectInfo.projectName},this.state.isHovered?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"".concat(D.a.Titles," ").concat(D.a.fadein)},o.a.createElement("h3",null,this.props.projectInfo.projectName),o.a.createElement("h6",null,this.props.projectInfo.languages)),o.a.createElement(b.a,{variant:"outline-custom",className:"".concat(D.a.Button," ").concat(D.a.fadein),onClick:this.handleLearnMore},"Learn More")):o.a.createElement(_.a,{src:this.props.projectInfo.image,className:D.a.Image,fluid:!0}),this.state.learnMore?o.a.createElement(F,{projectInfo:this.props.projectInfo,show:this.state.learnMore,onHide:this.handleModalHide}):null)}}]),t}(n.Component),R=a(218),G=a.n(R),T=a(219),W=a.n(T),J=a(220),U=a.n(J),K=a(98),q=a.n(K),Y={deepbeat:{projectName:"Deepbeat",languages:"Python",image:G.a,modal_image:q.a,description:"Deepbeat is a crossplatform application used to convert beatboxing to midi drum information (Kick, Snare, Hihat) using a convolutional neural network trained on 1000s of beatboxing samples. It includes an audio recorder and trimmer for recording and slicing your beatboxes.",tech_stack:["Python","Tensorflow","Keras","Qt"],github:"https://github.com/eupston/Deepbeat-beatbox2midi",youtube:"https://www.youtube.com/watch?v=qxeina_3zQA&t=108s"},deepbox:{projectName:"Deepbox",languages:"C++",image:W.a,modal_image:q.a,description:"Deepbox is an audio plugin that uses a convolutional neural network to classify and predict beatboxes in realtime. You can then create a midi file from the plugin with the corresponding beats.",tech_stack:["C++","Juce Framework","Python","Keras"],github:"https://github.com/eupston/Deepbox",youtube:"https://www.youtube.com/watch?v=F6jA0xNGhSM&t=193s"},spotistics:{projectName:"Spotistics",languages:"React/Springboot",image:U.a,modal_image:q.a,description:"Spotistics is a web app for viewing artist spotify statistics. At present you can view audio features for any spotify artist for any of their top tracks",tech_stack:["Spring Boot","Spring Rest","JDBC","Hibernate","Postgres Database","Heroku CI/CD","React js"],github:"https://github.com/eupston/Spotistics",website:"https://spotistics.herokuapp.com/"}},Q=function(){return o.a.createElement("div",{className:A.a.Portfolio,id:"portfolio"},o.a.createElement("h1",null,"Portfolio"),o.a.createElement("div",{className:A.a.PortfolioGrid},o.a.createElement(z,{projectInfo:Y.deepbeat}),o.a.createElement(z,{projectInfo:Y.deepbox}),o.a.createElement(z,{projectInfo:Y.spotistics})))},X=a(99),Z=a.n(X),$=function(){return o.a.createElement("div",{className:Z.a.Contact,id:"contact"},o.a.createElement("h1",null,"Contact"),o.a.createElement("div",{className:Z.a.FormContainer},o.a.createElement("div",{className:Z.a.FormItems},o.a.createElement("input",{placeholder:"Name",type:"text",name:"name",required:!0}),o.a.createElement("input",{placeholder:"Email",type:"email",name:"email",required:!0}),o.a.createElement("textarea",{rows:"4",cols:"50",placeholder:"Your Message"})),o.a.createElement(b.a,{variant:"outline-light"},"Submit")))},V=a(146),ee=a.n(V),te=function(){return o.a.createElement("div",{className:ee.a.Footer},o.a.createElement("img",{src:p.a,width:"80px",height:"80px",style:{"margin-top":"30px"}}),o.a.createElement("hr",null),o.a.createElement("div",{className:ee.a.FooterSocialMediaItems},o.a.createElement(L.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",borderWidth:"0",borderStyle:"solid",icon:"github",iconColor:"rgba(255,255,255,1)",backgroundColor:"rgba(76,107,162,1)",iconSize:"3",roundness:"10%",url:"https://github.com/eupston",size:"40"}),o.a.createElement(L.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",borderWidth:"0",borderStyle:"solid",icon:"linkedin",iconColor:"rgba(255,255,255,1)",backgroundColor:"rgba(76,107,162,1)",iconSize:"3",roundness:"10%",url:"https://www.linkedin.com/in/eugene-upston/",size:"40"})),o.a.createElement("hr",null),o.a.createElement("p",null,"Site by ",o.a.createElement("a",{href:"https://github.com/eupston/My-Portfolio-Website",alt:"/"},"Eugene Upston ")))},ae=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(M,null),o.a.createElement(O,null),o.a.createElement(Q,null),o.a.createElement($,null),o.a.createElement(te,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,t,a){e.exports={Portfoliocard:"PortfolioCard_Portfoliocard__1IoaR",Button:"PortfolioCard_Button__2rxUa",Titles:"PortfolioCard_Titles__XLvZi",Image:"PortfolioCard_Image__2LpTW",fadein:"PortfolioCard_fadein__3IMDy",fadeInOpacity:"PortfolioCard_fadeInOpacity__jrFdU"}},75:function(e,t,a){e.exports={About:"About_About__scHdH",AboutCardGrid:"About_AboutCardGrid__uk6Sv",AboutGrid:"About_AboutGrid__107Tu",ImageDescription:"About_ImageDescription__2uKs8"}},95:function(e,t,a){e.exports=a.p+"static/media/eug_logo.03fc768f.png"},98:function(e,t,a){e.exports=a.p+"static/media/deepbox.52a83dc4.gif"},99:function(e,t,a){e.exports={Contact:"Contact_Contact__2CqGJ",FormContainer:"Contact_FormContainer__ybnA1"}}},[[254,1,2]]]);
//# sourceMappingURL=main.8ff8888f.chunk.js.map