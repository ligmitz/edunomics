(this.webpackJsonpEdunomics=this.webpackJsonpEdunomics||[]).push([[37],{494:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),c=t.n(n),l=t(61),o=t.n(l),u=t(489),m=t.n(u),i=t(490),d=o.a.oneOfType([o.a.number,o.a.string]),f={tag:i.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,l=e.tag,o=e.form,u=e.widths,d=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];u.forEach((function(a,t){var r=e[a];if(delete d[a],r){var s=!t;f.push(s?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var b=Object(i.m)(m()(a,n?"no-gutters":null,o?"form-row":"row",f),t);return c.a.createElement(l,Object(r.a)({},d,{className:b}))};g.propTypes=f,g.defaultProps=b,a.a=g},495:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),c=t.n(n),l=t(61),o=t.n(l),u=t(489),m=t.n(u),i=t(490),d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),b={tag:i.q,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,l=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];n.forEach((function(a,r){var s=e[a];if(delete o[a],s||""===s){var n=!r;if(Object(i.k)(s)){var c,l=n?"-":"-"+a+"-",d=p(n,a,s.size);u.push(Object(i.m)(m()(((c={})[d]=s.size||""===s.size,c["order"+l+s.order]=s.order||0===s.order,c["offset"+l+s.offset]=s.offset||0===s.offset,c)),t))}else{var f=p(n,a,s);u.push(f)}}})),u.length||u.push("col");var d=Object(i.m)(m()(a,u),t);return c.a.createElement(l,Object(r.a)({},o,{className:d}))};E.propTypes=b,E.defaultProps=g,a.a=E},497:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),c=t.n(n),l=t(61),o=t.n(l),u=t(489),m=t.n(u),i=t(490),d={tag:i.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.body,o=e.inverse,u=e.outline,d=e.tag,f=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(i.m)(m()(a,"card",!!o&&"text-white",!!l&&"card-body",!!n&&(u?"border":"bg")+"-"+n),t);return c.a.createElement(d,Object(r.a)({},b,{className:g,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},498:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),c=t.n(n),l=t(61),o=t.n(l),u=t(489),m=t.n(u),i=t(490),d={tag:i.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),u=Object(i.m)(m()(a,"card-body"),t);return c.a.createElement(l,Object(r.a)({},o,{className:u,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},499:function(e,a,t){"use strict";var r=t(19),s=t(49),n=t(2),c=t.n(n),l=t(61),o=t.n(l),u=t(489),m=t.n(u),i=t(490),d={tag:i.q,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(s.a)(e,["className","cssModule","tag"]),o=Object(i.m)(m()(a,"card-header"),t);return c.a.createElement(n,Object(r.a)({},l,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},739:function(e,a,t){"use strict";t.r(a);var r=t(151),s=t(152),n=t(154),c=t(153),l=t(2),o=t.n(l),u=t(494),m=t(495),i=t(497),d=t(499),f=t(498),b=t(726),g=t(725),p=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(u.a,null,o.a.createElement(m.a,{xs:"12"},o.a.createElement(i.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Breadcrumbs"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(f.a,null,o.a.createElement(b.a,null,o.a.createElement(g.a,{active:!0},"Home")),o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement(g.a,{active:!0},"Library")),o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement("a",{href:"#"},"Home")),o.a.createElement(g.a,null,o.a.createElement("a",{href:"#"},"Library")),o.a.createElement(g.a,{active:!0},"Data")),o.a.createElement(b.a,{tag:"nav"},o.a.createElement(g.a,{tag:"a",href:"#"},"Home"),o.a.createElement(g.a,{tag:"a",href:"#"},"Library"),o.a.createElement(g.a,{tag:"a",href:"#"},"Data"),o.a.createElement(g.a,{active:!0,tag:"span"},"Bootstrap")))))))}}]),t}(l.Component);a.default=p}}]);
//# sourceMappingURL=37.95a06de1.chunk.js.map