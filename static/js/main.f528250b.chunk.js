(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(23),a(10)),s=a(11),m=a(15),l=a(12),h=a(16),u=a(13),d=a.n(u),p=a(14),f=a.n(p),v=(a(43),function(e){var t=e.onTakePhoto,a=e.onCameraStart;return o.a.createElement("div",null,o.a.createElement("canvas",{className:"canvas-overlay",id:"canvas-overlay"}),o.a.createElement(f.a,{onTakePhoto:t,onCameraStart:a}))}),w=function(e){var t=e.title,a=e.onClick;return o.a.createElement("button",{onClick:a},t)},g=function(e){var t=e.src;return o.a.createElement("img",{src:t,width:"250px",alt:""})},E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={firstPhoto:"",secondPhoto:"",thirdPhoto:"",timestamp:""},a.sendToS3=function(e,t){d.a.post("https://s3-bucket-proxy.mobidevdemo.com/upload",{photo:e,name:t}).then(function(e){return e}).catch(function(e){return console.error("UPLOAD ERROR => ",e)})},a.initCamera=function(){var e=document.querySelector("video"),t=document.getElementById("canvas-overlay"),a=t.getContext("2d");t.width=e.offsetWidth,t.height=e.offsetHeight;var n=new Image;n.src="face_overlay.png",n.width=e.offsetWidth,n.height=e.offsetHeight,n.onload=function(){a.drawImage(n,0,0,n.width,n.height)}},a.onCameraStart=setTimeout(a.initCamera,3e3),a.onTakePhoto=function(e){var t=a.state,n=t.firstPhoto,o=t.secondPhoto,r=t.timestamp,c=document.getElementById("outer-circle"),i=function(){return setTimeout(function(){return c&&c.click()},300)};if(n)o?(a.setState({thirdPhoto:e}),a.sendToS3(e,"black_".concat(r))):(a.setState({secondPhoto:e}),a.sendToS3(e,"white_".concat(r)),i());else{var s=Date.now();a.setState({firstPhoto:e,timestamp:s}),a.sendToS3(e,"normal_".concat(s)),i()}},a.openInNewTab=function(e){return function(){window.open().document.write('<img src="'.concat(e,'" width="100%">'))}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstPhoto,a=e.secondPhoto,n=e.thirdPhoto,r=e.timestamp;return o.a.createElement("div",{className:"app",style:{backgroundColor:a?"#000":"#fff"}},t&&!n&&o.a.createElement("div",{className:"overlay",style:{backgroundColor:a?"#000":"#fff"}}),o.a.createElement("h1",{className:"app-title"},"Next Photo"),!n&&o.a.createElement(v,{onTakePhoto:this.onTakePhoto,onCameraStart:this.onCameraStart}),t&&!n&&o.a.createElement("p",{className:"announcement"},"Taking photo..."),n&&o.a.createElement("div",{className:"images-wrapper"},o.a.createElement("div",{className:"images-wrapper__item",style:{marginRight:"15px"}},o.a.createElement(g,{src:t}),o.a.createElement(w,{title:"normal_".concat(r),onClick:this.openInNewTab(t)})),o.a.createElement("div",{className:"images-wrapper__item",style:{marginRight:"15px"}},o.a.createElement(g,{src:a}),o.a.createElement(w,{title:"white_".concat(r),onClick:this.openInNewTab(a)})),o.a.createElement("div",{className:"images-wrapper__item"},o.a.createElement(g,{src:n}),o.a.createElement(w,{title:"black_".concat(r),onClick:this.openInNewTab(n)}))))}}]),t}(n.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f528250b.chunk.js.map