(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(5),c=n(6),s=n(8),l=n(7),u=n(1),o=(n(13),n(3)),m=(n(14),n(0)),b=function(e){var t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,r=e.animationDuration,c=e.infinite,s=Object(u.useState)(0),l=Object(o.a)(s,2),b=l[0],h=l[1],g=Object(u.useState)(0),d=Object(o.a)(g,2),j=d[0],p=d[1],f={width:"".concat(i,"px")},N={width:"".concat(i,"px"),transform:"translateX(-".concat(b,"px)"),transition:"transform ".concat(r,"s ease-in-out")},x={width:"".concat(i*a,"px")};return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("ul",{className:"Carousel__list",style:x,children:t.map((function(e,t){return Object(m.jsx)("li",{className:"Carousel__item",style:N,children:Object(m.jsx)("img",{src:e,alt:String(t+1),className:"Carousel__image",style:f})},e)}))}),Object(m.jsxs)("div",{className:"Carousel__controls",children:[Object(m.jsx)("button",{type:"button",onClick:function(){h(c&&0===j?a*i*n-i*n:function(e){return e-i*n})},className:"Carousel__button Carousel__button--prev",children:"Prev"}),Object(m.jsx)("button",{type:"button","data-cy":"next",onClick:function(){var e=Math.ceil(t.length/(a*n));c&&j===e?(h(0),p(0)):(h((function(e){return e+i*n})),p((function(e){return e+1})))},className:"Carousel__button Carousel__button--next",children:"Next"})]})]})},h=(n(16),function(e){var t=e.children;return Object(m.jsx)("div",{className:"Container",children:t})}),g=(n(17),function(e){var t=e.children;return Object(m.jsx)("form",{className:"Form",children:t})}),d=(n(18),function(e){var t=e.label,n=e.option,a=e.changeHandler;return Object(m.jsxs)("label",{className:"Input__label",htmlFor:t,children:[t,Object(m.jsx)("input",{type:"text",value:n,onChange:a})]})}),j=(n(19),function(e){var t=e.infinite,n=e.changeHandler;return Object(m.jsxs)("label",{htmlFor:"checkbox",children:["Infinite: ",Object(m.jsx)("input",{type:"checkbox",className:"CheckBox",name:"checkbox",checked:t,onChange:n})]})}),p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1,infinite:!1},e.stepChangeHandler=function(t){(""===t.target.value||Number(t.target.value)<1||Number.isNaN(Number(t.target.value)))&&e.setState({step:1}),e.setState({step:Number(t.target.value)})},e.frameSizeChangeHandler=function(t){(""===t.target.value||Number(t.target.value)<1||Number.isNaN(Number(t.target.value)))&&e.setState({frameSize:1}),e.setState({frameSize:Number(t.target.value)})},e.itemWidthHandler=function(t){(""===t.target.value||Number(t.target.value)<90||Number.isNaN(Number(t.target.value)))&&e.setState({itemWidth:90}),e.setState({itemWidth:Number(t.target.value)})},e.animationDurationHandler=function(t){(""===t.target.value||Number(t.target.value)<1||Number.isNaN(Number(t.target.value)))&&e.setState({animationDuration:1}),e.setState({animationDuration:Number(t.target.value)})},e.infiniteHandler=function(t){e.setState({infinite:t.target.checked})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,r=e.animationDuration,c=e.infinite;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(t.length," images")}),Object(m.jsx)(h,{children:Object(m.jsx)(b,{images:t,step:n,frameSize:a,itemWidth:i,animationDuration:r,infinite:c})}),Object(m.jsxs)(g,{children:[Object(m.jsx)(d,{label:"Step",option:n,changeHandler:this.stepChangeHandler}),Object(m.jsx)(d,{label:"Frame size",option:a,changeHandler:this.frameSizeChangeHandler}),Object(m.jsx)(d,{label:"Item width",option:i,changeHandler:this.itemWidthHandler}),Object(m.jsx)(d,{label:"Animation duration",option:r,changeHandler:this.animationDurationHandler}),Object(m.jsx)(j,{infinite:c,changeHandler:this.infiniteHandler})]})]})}}]),n}(u.Component),f=p;i.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.7c00094f.chunk.js.map