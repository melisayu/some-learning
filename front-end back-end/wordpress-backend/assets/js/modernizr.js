/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-csscalc-cssfilters-cssgradients-cssgrid_cssgridlegacy-cssmask-csstransforms-csstransforms3d-cssvhunit-cssvwunit-flexbox-flexboxlegacy-inlinesvg-svg-svgasimg-mq-prefixedcss-prefixes-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),x.push((o?"":"no-")+s.join("-"))}}function i(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?T.className.baseVal=t:T.className=t)}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function u(e,t){return e-1===t||e===t||e+1===t}function c(){var e=t.body;return e||(e=s(E?"svg":"body"),e.fake=!0),e}function f(e,n,r,o){var i,a,l,u,f="modernizr",d=s("div"),p=c();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=u,T.offsetHeight):d.parentNode.removeChild(d),!!a}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t){if("object"==typeof e)for(var n in e)M(e,n)&&p(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function m(e,t){return!!~(""+e).indexOf(t)}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(t[o])+":"+r+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==l(e,null,"position")})}return n}function g(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?g(o,n||t):o);return!1}function y(e,t,o,i){function a(){u&&(delete I.style,delete I.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=h(e,o);if(!r(l,"undefined"))return l}for(var u,c,f,p,g,v=["modernizr","tspan","samp"];!I.style&&v.length;)u=!0,I.modElem=s(v.shift()),I.style=I.modElem.style;for(f=e.length,c=0;f>c;c++)if(p=e[c],g=I.style[p],m(p,"-")&&(p=d(p)),I.style[p]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?p:!0;try{I.style[p]=o}catch(y){}if(I.style[p]!=g)return a(),"pfx"==t?p:!0}return a(),!1}function S(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+F.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?y(s,t,o,i):(s=(e+" "+R.join(a+" ")+a).split(" "),v(s,t,n))}function w(e,t,r){return S(e,n,n,t,r)}var x=[],C=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var _=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=_;var T=t.documentElement,E="svg"===T.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=S.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=S.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),S.elements=n+" "+e,u(t)}function i(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return S.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(S,t.frag)}function u(e){e||(e=t);var r=i(e);return!S.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var S={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=S,u(t),"object"==typeof module&&module.exports&&(module.exports=S)}("undefined"!=typeof e?e:this,t),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=_.length-1;i>o;o++)e=0===o?"to ":"",r+=t+_[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=s("a"),l=a.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var k="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",k||N);var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return f("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();b.mq=j;var z=b.testStyles=f;z("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(l(t,null,"height"),10);Modernizr.addTest("cssvhunit",u(r,n))}),z("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvwunit",u(r,n))});var M;!function(){var e={}.hasOwnProperty;M=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=p}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var P="Moz O ms Webkit",F=b._config.usePrefixes?P.split(" "):[];b._cssomPrefixes=F;var L=function(t){var r,o=_.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=_[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};b.atRule=L;var R=b._config.usePrefixes?P.toLowerCase().split(" "):[];b._domPrefixes=R;var O={elem:s("modernizr")};Modernizr._q.push(function(){delete O.elem});var I={style:O.elem.style};Modernizr._q.unshift(function(){delete I.style}),b.testAllProps=S;var q=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=d(e)),t?S(e,t,n):S(e,"pfx"))};b.prefixedCSS=function(e){var t=q(e);return t&&a(t)};Modernizr.addTest("backgroundblendmode",q("backgroundBlendMode","text")),b.testAllProps=w,Modernizr.addTest("cssgridlegacy",w("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",w("grid-template-rows","none",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return w("filter","blur(2px)");var e=s("a");return e.style.cssText=_.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",w("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",w("boxDirection","reverse",!0)),Modernizr.addTest("cssmask",w("maskRepeat","repeat-x",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&w("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!w("perspective","1px",!0)}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+_.join(t+e),!!n.style.length}),o(),i(x),delete b.addTest,delete b.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);