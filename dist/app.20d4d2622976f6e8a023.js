!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([58,1]),n()}({16:function(e,t,n){e.exports={app:"app-components-App-App__app--Gqefs",content:"app-components-App-App__content--3Btz6"}},29:function(e,t,n){e.exports={link:"app-components-Link-Link__link--17OD2"}},30:function(e,t,n){e.exports={navGroup:"app-components-NavigationOverlay-NavGroup__navGroup--2sQQe"}},31:function(e,t,n){e.exports={overlay:"app-components-NavigationOverlay-NavigationOverlay__overlay--U9WVc"}},35:function(e,t,n){e.exports={intro:"app-components-Intro-Intro__intro--FbJzU"}},36:function(e,t,n){e.exports={display:"app-components-Playground-Playground__display--1PGtT"}},37:function(e,t,n){e.exports={waveform:"app-components-Waveform-Waveform__waveform--s_R_J"}},45:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);n(45);var r=n(0),o=n.n(r),a=n(15),i=n(8),c=n(20),u=n(25),l=n(26),s=n.n(l),f=n(10),p=n(60),y=n(59),d=n(6),m=n.n(d),b=n(28),h=n.n(b),v=n(29),w=n.n(v);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){O(e,t,n[t])})}return e}({},e,{className:m()(e.className,w.a.link)});var t=h()(e.to);return""===t.protocol()&&""===t.domain()?o.a.createElement(y.a,e):["","http","https"].includes(t.protocol())?o.a.createElement("a",{href:e.to,className:e.className,target:"_blank",rel:"noopener noreferrer"},e.children):o.a.createElement("a",{href:e.to,className:e.className},e.children)}var _=n(30),j=n.n(_);function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=function(e){var t=e.name,n=e.links,r=x(e,["name","links"]);return o.a.createElement("div",r,o.a.createElement("div",null,t),o.a.createElement("div",{className:j.a.navGroup},n.map(function(e){var t=e.title,n=e.url;return o.a.createElement(g,{key:t,to:n},t)})))};function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var P={games:[{title:"life",url:"/life"},{title:"playground",url:"/playground"},{title:"waveform",url:"/waveform"},{title:"spectrum",url:"/spectrum"}],links:[{title:"github",url:"https://github.com/mayavera"},{title:"linkedin",url:"https://linkedin.com/in/mayavera"},{title:"codewars",url:"https://www.codewars.com/users/mayavera"},{title:"stackoverflow",url:"https://stackexchange.com/users/13452692/maya-vera"}]};var k=function(){return o.a.createElement("nav",null,Object.entries(P).map(function(e,t){var n=E(e,2),r=n[0],a=n[1];return o.a.createElement(S,{key:t,name:r,links:a})}))},C=n(31),N=n.n(C),M=function(){return o.a.createElement("div",{className:N.a.overlay},o.a.createElement("h1",null,o.a.createElement(g,{to:"/"},"maya vera")),o.a.createElement(k,null))},A=n(5),D=n(32),R=n.n(D),T=n(33),I=n.n(T),U=n(34),z=n.n(U);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){return function(t){var n=1e3/e,a=function(e){function a(){var e,t,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return r=this,o=(e=G(a)).call.apply(e,[this].concat(c)),t=!o||"object"!==W(o)&&"function"!=typeof o?L(r):o,H(L(t),"state",{step:0,previousAnimationTimestamp:0}),H(L(t),"tick",function(e){e-t.state.previousAnimationTimestamp>=n&&t.setState({step:t.state.step+1,previousAnimationTimestamp:e}),window.requestAnimationFrame(t.tick)}),t}var i,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(a,r.Component),i=a,(c=[{key:"render",value:function(){var e=this;return o.a.createElement(t,B({step:this.state.step,onReady:function(){return e.tick(0)}},this.props))}}])&&q(i.prototype,c),u&&q(i,u),a}();return H(a,"displayName","Animated(".concat(z()(t),")")),I()(a,t),a}},X=n(35),Q=n.n(X);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var te=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return r=this,a=(e=K(t)).call.apply(e,[this].concat(c)),n=!a||"object"!==V(a)&&"function"!=typeof a?Z(r):a,ee(Z(n),"display",o.a.createRef()),ee(Z(n),"renderer",new A.WebGLRenderer),ee(Z(n),"camera",void 0),ee(Z(n),"cube",void 0),ee(Z(n),"scene",void 0),ee(Z(n),"onWindowResize",function(){var e=n.display.current,t=e.clientWidth,r=e.clientHeight;n.renderer.setSize(t,r),n.camera.aspect=t/r,n.camera.updateProjectionMatrix()}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.scene=new A.Scene;var e=new A.MeshPhongMaterial({color:16777215,emissive:4473924});this.cube=new A.Mesh(new A.BoxGeometry(1,1,1),e),this.scene.add(this.cube),this.scene.add(new A.DirectionalLight(16777215,.5));var t=this.display.current;this.camera=new A.PerspectiveCamera(75,t.clientWidth/t.clientHeight,.1,1e3),this.camera.position.z=5,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement),new R.a(this.camera,this.renderer.domElement),window.addEventListener("resize",this.onWindowResize),this.props.onReady()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onWindowResize)}},{key:"componentDidUpdate",value:function(e){this.props.step!==e.step&&(this.cube.rotation.y+=.01,this.cube.rotation.x+=.005,this.renderer.render(this.scene,this.camera))}},{key:"render",value:function(){return o.a.createElement("div",{ref:this.display,className:Q.a.intro})}}])&&Y(n.prototype,r),a&&Y(n,a),t}(),ne=J(60)(te),re=n(11),oe=n(36),ae=n.n(oe);function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,o=(e=ue(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==ie(o)&&"function"!=typeof o?le(r):o,fe(le(n),"state",{circles:[],isNewShape:!1}),fe(le(n),"handleMouseDown",function(e){var t=e.clientX,r=e.clientY,o=e.target;e.target===e.currentTarget?n.setState(Object(re.a)(function(e){var n={x:t,y:r,radius:10};e.circles.push(n),e.selectedCircleId=e.circles.length-1,e.isNewShape=!0,e.dragOffset={x:0,y:0}})):n.setState(Object(re.a)(function(e){e.isNewShape=!1,e.selectedCircleId=Number(o.getAttribute("data-circle-id")),e.dragOffset={x:t-e.circles[e.selectedCircleId].x,y:r-e.circles[e.selectedCircleId].y}}))}),fe(le(n),"handleMouseMove",function(e){var t=e.clientX,r=e.clientY;void 0!==n.state.selectedCircleId&&n.setState(Object(re.a)(function(e){e.circles[e.selectedCircleId].x=t-e.dragOffset.x,e.circles[e.selectedCircleId].y=r-e.dragOffset.y}))}),fe(le(n),"handleMouseUp",function(){n.setState({selectedCircleId:void 0})}),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.props.onReady()}},{key:"componentDidUpdate",value:function(e){this.props.step!==e.step&&void 0!==this.state.selectedCircleId&&this.state.isNewShape&&this.setState(Object(re.a)(function(e){e.circles[e.selectedCircleId].radius++}))}},{key:"render",value:function(){var e=this.state.circles;return o.a.createElement("svg",{className:m()(this.props.className,ae.a.display),onMouseDown:this.handleMouseDown,onMouseMove:this.handleMouseMove,onMouseUp:this.handleMouseUp},e.map(function(e,t){return o.a.createElement("circle",{key:t,"data-circle-id":t,r:e.radius,cx:e.x,cy:e.y})}))}}])&&ce(n.prototype,a),i&&ce(n,i),t}(),ye=J(60)(pe),de=n(37),me=n.n(de);function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return r=this,n=!(o=(e=ve(t)).call.apply(e,[this].concat(i)))||"object"!==be(o)&&"function"!=typeof o?we(r):o,ge(we(n),"audioContext",void 0),ge(we(n),"source",void 0),ge(we(n),"analyser",void 0),ge(we(n),"data",void 0),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){e.audioContext=new(window.AudioContext||window.webkitAudioContext),e.source=e.audioContext.createMediaStreamSource(t),e.analyser=e.audioContext.createAnalyser(),e.analyser.fftSize=1024,e.data=new Uint8Array(e.analyser.frequencyBinCount),e.analyser.getByteFrequencyData(e.data),e.source.connect(e.analyser),e.props.onReady()})}},{key:"componentDidUpdate",value:function(e){this.props.step!==e.step&&this.analyser.getByteFrequencyData(this.data)}},{key:"render",value:function(){return o.a.createElement("div",{className:m()(this.props.className,me.a.waveform)},this.data&&Array.from(this.data).map(function(e,t){return o.a.createElement("div",{key:t,style:{height:e}})}))}}])&&he(n.prototype,r),a&&he(n,a),t}(),je=J(60)(_e);function xe(e){return(xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e){return(Ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ne=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return r=this,n=!(a=(e=Ee(t)).call.apply(e,[this].concat(c)))||"object"!==xe(a)&&"function"!=typeof a?Pe(r):a,Ce(Pe(n),"canvas",o.a.createRef()),Ce(Pe(n),"ctx",void 0),Ce(Pe(n),"audioContext",void 0),Ce(Pe(n),"source",void 0),Ce(Pe(n),"analyser",void 0),Ce(Pe(n),"data",void 0),Ce(Pe(n),"x",100),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ke(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.ctx=this.canvas.current.getContext("2d"),navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){e.audioContext=new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),e.source=e.audioContext.createMediaStreamSource(t),e.analyser=e.audioContext.createAnalyser(),e.analyser.fftSize=1024,e.data=new Uint8Array(e.analyser.frequencyBinCount),e.analyser.getByteFrequencyData(e.data),e.source.connect(e.analyser),e.props.onReady()})}},{key:"componentDidUpdate",value:function(e){if(this.props.step!==e.step){this.ctx.save(),this.ctx.translate(1,0),this.ctx.drawImage(this.canvas.current,0,0),this.ctx.restore(),this.analyser.getByteFrequencyData(this.data),this.x=(this.x+20)%256;for(var t=0;t<this.data.length;t++){var n=this.data[t];this.ctx.fillStyle="rgb(".concat(n,",").concat(n,",").concat(n,")"),this.ctx.fillRect(0,t,1,1)}}}},{key:"render",value:function(){return o.a.createElement("canvas",{ref:this.canvas,className:this.props.className})}}])&&Se(n.prototype,r),a&&Se(n,a),t}(),Me=J(60)(Ne),Ae=n(16),De=n.n(Ae),Re=n(38);function Te(e){return function(){return o.a.createElement(e,{className:De.a.content})}}var Ie=function(){return o.a.createElement("div",{className:De.a.app},o.a.createElement(M,null),o.a.createElement("div",{className:De.a.content},o.a.createElement(p.a,{exact:!0,path:"/",render:Te(ne)}),o.a.createElement(p.a,{exact:!0,path:"/life",render:Te(Re.a)}),o.a.createElement(p.a,{exact:!0,path:"/playground",component:Te(ye)}),o.a.createElement(p.a,{exact:!0,path:"/waveform",component:Te(je)}),o.a.createElement(p.a,{exact:!0,path:"/spectrum",component:Te(Me)})))},Ue=Object(a.a)(),ze=Object(i.c)({router:Object(c.b)(Ue)}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,Be=Object(i.e)(ze,{},We(Object(i.a)(Object(u.a)(Ue))));s.a.render(o.a.createElement(f.a,{store:Be},o.a.createElement(c.a,{history:Ue},o.a.createElement(Ie,null))),document.getElementById("app"))}});