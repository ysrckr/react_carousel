(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),c=n(5),r=n(6),s=n(7),o=n(9),l=n(8),u=n(1),h=(n(14),n(3)),m=(n(15),n(0)),b=function(e){var t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,c=e.animationDuration,r=e.infinite,s=Object(u.useState)(0),o=Object(h.a)(s,2),l=o[0],b=o[1],j=Object(u.useState)(0),p=Object(h.a)(j,2),g=p[0],d=p[1],f={width:"".concat(i,"px")},x={width:"".concat(i,"px"),transform:"translateX(-".concat(l,"px)"),transition:"transform ".concat(c,"s ease-in-out")},O={width:"".concat(i*a,"px")};return Object(m.jsxs)("div",{className:"Carousel",children:[Object(m.jsx)("ul",{className:"Carousel__list",style:O,children:t.map((function(e,t){return Object(m.jsx)("li",{className:"Carousel__item",style:x,children:Object(m.jsx)("img",{src:e,alt:String(t+1),className:"Carousel__image",style:f})},e)}))}),Object(m.jsxs)("div",{className:"Carousel__controls",children:[Object(m.jsx)("button",{type:"button",onClick:function(){b(r&&0===g?a*i*n-i*n:function(e){return e-i*n})},className:"Carousel__button Carousel__button--prev",children:"Prev"}),Object(m.jsx)("button",{type:"button","data-cy":"next",onClick:function(){var e=Math.ceil(t.length/(a*n));r&&g===e?(b(0),d(0)):(b((function(e){return e+i*n})),d((function(e){return e+1})))},className:"Carousel__button Carousel__button--next",children:"Next"})]})]})},j=(n(17),function(e){var t=e.children;return Object(m.jsx)("div",{className:"Container",children:t})}),p=(n(18),function(e){var t=e.children;return Object(m.jsx)("form",{className:"Form",children:t})});n(19);var g=function(e){var t=e.label,n=e.option,a=e.changeHandler,i=t.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s+/g,"");return Object(m.jsxs)("label",{className:"Input__label",htmlFor:t,children:[t,Object(m.jsx)("input",{type:"number",value:n,onChange:a,name:i})]})},d=(n(20),function(e){var t=e.infinite,n=e.changeHandler;return Object(m.jsxs)("label",{htmlFor:"checkbox",children:["Infinite: ",Object(m.jsx)("input",{type:"checkbox",className:"CheckBox",name:"checkbox",checked:t,onChange:n})]})}),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1,infinite:!1},e.handleInputChange=function(t){var n=t.target,a=n.name,i=n.value;a&&("checkbox"!==a&&e.setState(Object(c.a)({},a,Number(i))),"checkbox"===a&&e.setState((function(e){return{infinite:!e.infinite}})))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,c=e.animationDuration,r=e.infinite;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(t.length," images")}),Object(m.jsx)(j,{children:Object(m.jsx)(b,{images:t,step:n,frameSize:a,itemWidth:i,animationDuration:c,infinite:r})}),Object(m.jsxs)(p,{children:[Object(m.jsx)(g,{label:"Step",option:n,changeHandler:this.handleInputChange}),Object(m.jsx)(g,{label:"Frame size",option:a,changeHandler:this.handleInputChange}),Object(m.jsx)(g,{label:"Item width",option:i,changeHandler:this.handleInputChange}),Object(m.jsx)(g,{label:"Animation duration",option:c,changeHandler:this.handleInputChange}),Object(m.jsx)(d,{infinite:r,changeHandler:this.handleInputChange})]})]})}}]),n}(u.Component),x=f;i.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.1b677c24.chunk.js.map