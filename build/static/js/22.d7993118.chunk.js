(this.webpackJsonpEdunomics=this.webpackJsonpEdunomics||[]).push([[22],{493:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(a){n(e,a,t[a])}))}return e}t.d(a,"a",(function(){return i}))},494:function(e,a,t){"use strict";var n=t(19),i=t(49),s=t(2),o=t.n(s),r=t(61),l=t.n(r),c=t(489),u=t.n(c),d=t(490),m=l.a.oneOfType([l.a.number,l.a.string]),p={tag:d.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},h={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,r=e.tag,l=e.form,c=e.widths,m=Object(i.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];c.forEach((function(a,t){var n=e[a];if(delete m[a],n){var i=!t;p.push(i?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var h=Object(d.m)(u()(a,s?"no-gutters":null,l?"form-row":"row",p),t);return o.a.createElement(r,Object(n.a)({},m,{className:h}))};f.propTypes=p,f.defaultProps=h,a.a=f},495:function(e,a,t){"use strict";var n=t(19),i=t(49),s=t(2),o=t.n(s),r=t(61),l=t.n(r),c=t(489),u=t.n(c),d=t(490),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),h={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,s=e.widths,r=e.tag,l=Object(i.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(a,n){var i=e[a];if(delete l[a],i||""===i){var s=!n;if(Object(d.k)(i)){var o,r=s?"-":"-"+a+"-",m=b(s,a,i.size);c.push(Object(d.m)(u()(((o={})[m]=i.size||""===i.size,o["order"+r+i.order]=i.order||0===i.order,o["offset"+r+i.offset]=i.offset||0===i.offset,o)),t))}else{var p=b(s,a,i);c.push(p)}}})),c.length||c.push("col");var m=Object(d.m)(u()(a,c),t);return o.a.createElement(r,Object(n.a)({},l,{className:m}))};g.propTypes=h,g.defaultProps=f,a.a=g},501:function(e,a,t){"use strict";var n=t(19),i=t(49),s=t(491),o=t(30),r=t(2),l=t.n(r),c=t(61),u=t.n(c),d=t(489),m=t.n(d),p=t(490),h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,o=e.className,r=e.close,c=e.cssModule,u=e.color,d=e.outline,h=e.size,f=e.tag,b=e.innerRef,g=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(d?"-outline":"")+"-"+u,v=Object(p.m)(m()(o,{close:r},r||"btn",r||E,!!h&&"btn-"+h,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),c);g.href&&"button"===f&&(f="a");var O=r?"Close":null;return l.a.createElement(f,Object(n.a)({type:"button"===f&&g.onClick?"button":void 0},g,{className:v,ref:b,onClick:this.onClick,"aria-label":t||O}))},a}(l.a.Component);f.propTypes=h,f.defaultProps={color:"secondary",tag:"button"},a.a=f},503:function(e,a,t){"use strict";var n=t(19),i=t(49),s=t(493),o=t(2),r=t.n(o),l=t(61),c=t.n(l),u=t(489),d=t.n(u),m=t(502),p=t(490),h=Object(s.a)({},m.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:p.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),f=Object(s.a)({},m.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var a=e.tag,t=e.baseClass,s=e.baseClassActive,o=e.className,l=e.cssModule,c=e.children,u=e.innerRef,h=Object(i.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(p.o)(h,p.c),b=Object(p.n)(h,p.c);return r.a.createElement(m.Transition,f,(function(e){var i="entered"===e,m=Object(p.m)(d()(o,t,i&&s),l);return r.a.createElement(a,Object(n.a)({className:m},b,{ref:u}),c)}))}b.propTypes=h,b.defaultProps=f,a.a=b},522:function(e,a,t){"use strict";var n=t(19),i=t(49),s=t(2),o=t.n(s),r=t(61),l=t.n(r),c=t(489),u=t.n(c),d=t(490),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.tag,r=Object(i.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-footer"),t);return o.a.createElement(s,Object(n.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},542:function(e,a,t){"use strict";var n,i=t(19),s=t(49),o=t(491),r=t(30),l=t(493),c=t(2),u=t.n(c),d=t(61),m=t.n(d),p=t(489),h=t.n(p),f=t(502),b=t(490),g=Object(l.a)({},f.Transition.propTypes,{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:b.q,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),E=Object(l.a)({},f.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:b.e.Collapse}),v=((n={})[b.d.ENTERING]="collapsing",n[b.d.ENTERED]="collapse show",n[b.d.EXITING]="collapsing",n[b.d.EXITED]="collapse",n);function O(e){return e.scrollHeight}var y=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(o.a)(t))})),t}Object(r.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:O(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:O(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,n=a.isOpen,o=a.className,r=a.navbar,c=a.cssModule,d=a.children,m=(a.innerRef,Object(s.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,g=Object(b.o)(m,b.c),E=Object(b.n)(m,b.c);return u.a.createElement(f.Transition,Object(i.a)({},g,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var n=function(e){return v[e]||"collapse"}(a),s=Object(b.m)(h()(o,n,r&&"navbar-collapse"),c),m=null===p?null:{height:p};return u.a.createElement(t,Object(i.a)({},E,{style:Object(l.a)({},E.style,{},m),className:s,ref:e.props.innerRef}),d)}))},a}(c.Component);y.propTypes=g,y.defaultProps=E,a.a=y},741:function(e,a,t){"use strict";t.r(a);var n=t(151),i=t(152),s=t(155),o=t(154),r=t(153),l=t(2),c=t.n(l),u=t(494),d=t(495),m=t(497),p=t(499),h=t(542),f=t(498),b=t(522),g=t(501),E=t(503),v=t(729),O=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var i;return Object(n.a)(this,t),(i=a.call(this,e)).onEntering=i.onEntering.bind(Object(s.a)(i)),i.onEntered=i.onEntered.bind(Object(s.a)(i)),i.onExiting=i.onExiting.bind(Object(s.a)(i)),i.onExited=i.onExited.bind(Object(s.a)(i)),i.toggle=i.toggle.bind(Object(s.a)(i)),i.toggleAccordion=i.toggleAccordion.bind(Object(s.a)(i)),i.toggleCustom=i.toggleCustom.bind(Object(s.a)(i)),i.toggleFade=i.toggleFade.bind(Object(s.a)(i)),i.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300},i}return Object(i.a)(t,[{key:"onEntering",value:function(){this.setState({status:"Opening..."})}},{key:"onEntered",value:function(){this.setState({status:"Opened"})}},{key:"onExiting",value:function(){this.setState({status:"Closing..."})}},{key:"onExited",value:function(){this.setState({status:"Closed"})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleAccordion",value:function(e){var a=this.state.accordion.map((function(a,t){return e===t&&!a}));this.setState({accordion:a})}},{key:"toggleCustom",value:function(e){var a=this.state.custom.map((function(a,t){return e===t&&!a}));this.setState({custom:a})}},{key:"toggleFade",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(u.a,null,c.a.createElement(d.a,{xl:"6"},c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Collapse"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/collapse/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(h.a,{isOpen:this.state.collapse,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited},c.a.createElement(f.a,null,c.a.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."),c.a.createElement("p",null,"Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus. Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu, vehicula sagittis elit leo id nisi."))),c.a.createElement(b.a,null,c.a.createElement(g.a,{color:"primary",onClick:this.toggle,className:"mb-1",id:"toggleCollapse1"},"Toggle"),c.a.createElement("hr",null),c.a.createElement("h5",null,"Current state: ",this.state.status))),c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Fade"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/fade/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(f.a,null,c.a.createElement(E.a,{timeout:this.state.timeout,in:this.state.fadeIn,tag:"h5",className:"mt-3"},"This content will fade in and out as the button is pressed...")),c.a.createElement(b.a,null,c.a.createElement(g.a,{color:"primary",onClick:this.toggleFade,id:"toggleFade1"},"Toggle Fade")))),c.a.createElement(d.a,{xl:"6"},c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",c.a.createElement("small",null,"accordion"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement(v.a,null,"NEW"))),c.a.createElement(f.a,null,c.a.createElement("div",{id:"accordion"},c.a.createElement(m.a,{className:"mb-0"},c.a.createElement(p.a,{id:"headingOne"},c.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},c.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #1"))),c.a.createElement(h.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},c.a.createElement(f.a,null,"1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),c.a.createElement(m.a,{className:"mb-0"},c.a.createElement(p.a,{id:"headingTwo"},c.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},c.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #2"))),c.a.createElement(h.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},c.a.createElement(f.a,null,"2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),c.a.createElement(m.a,{className:"mb-0"},c.a.createElement(p.a,{id:"headingThree"},c.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},c.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #3"))),c.a.createElement(h.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},c.a.createElement(f.a,null,"3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))))),c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",c.a.createElement("small",null,"custom accordion"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement(v.a,null,"NEW"))),c.a.createElement(f.a,null,c.a.createElement("div",{id:"exampleAccordion","data-children":".item"},c.a.createElement("div",{className:"item"},c.a.createElement(g.a,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(0)},"aria-expanded":this.state.custom[0],"aria-controls":"exampleAccordion1"},"Toggle item"),c.a.createElement(h.a,{isOpen:this.state.custom[0],"data-parent":"#exampleAccordion",id:"exampleAccordion1"},c.a.createElement("p",{className:"mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare."))),c.a.createElement("div",{className:"item"},c.a.createElement(g.a,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(1)},"aria-expanded":this.state.custom[1],"aria-controls":"exampleAccordion2"},"Toggle item 2"),c.a.createElement(h.a,{isOpen:this.state.custom[1],"data-parent":"#exampleAccordion",id:"exampleAccordion2"},c.a.createElement("p",{className:"mb-3"},"Donec at ipsum dignissim, rutrum turpis scelerisque, tristique lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")))))))))}}]),t}(l.Component);a.default=O}}]);
//# sourceMappingURL=22.d7993118.chunk.js.map