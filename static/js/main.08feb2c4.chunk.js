(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),i=(n(23),n(10)),s=n(11),l=n(15),m=n(12),h=n(16),u=n(13),p=n.n(u),d=n(14),f=n.n(d),E=(n(43),function(e){var t=e.onTakePhoto;return o.a.createElement(f.a,{onTakePhoto:t})}),w=function(e){var t=e.title,n=e.onClick;return o.a.createElement("button",{onClick:n},t)},P=function(e){var t=e.src;return o.a.createElement("img",{src:t,width:"250px",alt:""})},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={firstPhoto:"",secondPhoto:"",thirdPhoto:"",timestamp:""},n.sendToS3=function(e,t){p.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"/next-photo"}).REACT_APP_BE_PATH_TO_UPLOAD,{photo:e,name:t}).then(function(e){return e}).catch(function(e){return console.error("UPLOAD ERROR => ",e)})},n.onTakePhoto=function(e){var t=n.state,a=t.firstPhoto,o=t.secondPhoto,r=t.timestamp,c=document.getElementById("outer-circle"),i=function(){return setTimeout(function(){return c&&c.click()},300)};if(a)o?(n.setState({thirdPhoto:e}),n.sendToS3(e,"black_".concat(r))):(n.setState({secondPhoto:e}),n.sendToS3(e,"white_".concat(r)),i());else{var s=Date.now();n.setState({firstPhoto:e,timestamp:s}),n.sendToS3(e,"normal_".concat(s)),i()}},n.openInNewTab=function(e){return function(){window.open().document.write('<img src="'.concat(e,'" width="100%">'))}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstPhoto,n=e.secondPhoto,a=e.thirdPhoto,r=e.timestamp;return o.a.createElement("div",{className:"app",style:{backgroundColor:n?"#000":"#fff"}},t&&!a&&o.a.createElement("div",{className:"overlay",style:{backgroundColor:n?"#000":"#fff"}}),o.a.createElement("h1",{className:"app-title"},"Next Photo"),!a&&o.a.createElement(E,{onTakePhoto:this.onTakePhoto,onCameraStart:this.onCameraStart}),t&&!a&&o.a.createElement("p",{className:"announcement"},"Taking photo..."),a&&o.a.createElement("div",{className:"images-wrapper"},o.a.createElement("div",{className:"images-wrapper__item",style:{marginRight:"15px"}},o.a.createElement(P,{src:t}),o.a.createElement(w,{title:"normal_".concat(r),onClick:this.openInNewTab(t)})),o.a.createElement("div",{className:"images-wrapper__item",style:{marginRight:"15px"}},o.a.createElement(P,{src:n}),o.a.createElement(w,{title:"white_".concat(r),onClick:this.openInNewTab(n)})),o.a.createElement("div",{className:"images-wrapper__item"},o.a.createElement(P,{src:a}),o.a.createElement(w,{title:"black_".concat(r),onClick:this.openInNewTab(a)}))))}}]),t}(a.Component);c.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.08feb2c4.chunk.js.map