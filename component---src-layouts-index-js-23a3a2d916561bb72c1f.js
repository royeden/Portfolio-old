webpackJsonp([0x67ef26645b2a,60335399758886],{107:function(e,t){e.exports={layoutContext:{}}},201:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),a=r(i),u=n(208),l=r(u),c=n(107),s=r(c);t.default=function(e){return a.default.createElement(l.default,o({},e,s.default))},e.exports=t.default},291:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!c(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(293),l=n(292),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},292:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},293:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},300:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},411:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=r(s),d=n(7),p=r(d),A=n(432),T=r(A),m=n(291),E=r(m),h=n(412),y=n(188),g=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,E.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=a,t.titleAttributes=l({},i),t));case y.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},i)});case y.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},i)})}return l({},o,(n={},n[r.type]=l({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),l=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=l({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},b=function(){return null},S=(0,T.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(b),v=g(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},188:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},412:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),l=n(5),c=r(l),s=n(188),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,s.TAG_NAMES.TITLE),n=E(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=E(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},A=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();t.indexOf(l)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===s.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:A(s.ATTRIBUTE_NAMES.BODY,e),defer:E(e,s.HELMET_PROPS.DEFER),encode:E(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:A(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:A(s.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){y(t)},0)}}(),g=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,_=function(e){w&&S(w),e.defer?w=b(function(){C(e,function(){w=null})}):(C(e),w=null)},C=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(s.TAG_NAMES.BODY,r),M(s.TAG_NAMES.HTML,o),R(d,p);var A={baseTag:P(s.TAG_NAMES.BASE,n),linkTags:P(s.TAG_NAMES.LINK,i),metaTags:P(s.TAG_NAMES.META,a),noscriptTags:P(s.TAG_NAMES.NOSCRIPT,u),scriptTags:P(s.TAG_NAMES.SCRIPT,c),styleTags:P(s.TAG_NAMES.STYLE,f)},T={},m={};Object.keys(A).forEach(function(e){var t=A[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(m[e]=A[e].oldTags)}),t&&t(),l(e,T,m)},O=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=O(e)),M(s.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=i.indexOf(l);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),i=O(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=H(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,i,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},B=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return k(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return H(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return L(e,t,n)}}}},j=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:B(s.TAG_NAMES.BASE,t,r),bodyAttributes:B(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:B(s.ATTRIBUTE_NAMES.HTML,o,r),link:B(s.TAG_NAMES.LINK,i,r),meta:B(s.TAG_NAMES.META,a,r),noscript:B(s.TAG_NAMES.NOSCRIPT,u,r),script:B(s.TAG_NAMES.SCRIPT,l,r),style:B(s.TAG_NAMES.STYLE,c,r),title:B(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=_,t.mapStateOnServer=j,t.reducePropsToState=h,t.requestAnimationFrame=b,t.warn=v}).call(t,function(){return this}())},432:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(2),l=r(u),c=n(300),s=r(c),f=n(449),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function f(){A=e(p.map(function(e){return e.props})),T.canUseDOM?t(A):n&&(A=n(A))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],A=void 0,T=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return A},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=A;return A=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return l.default.createElement(c,this.props)},t}(u.Component);return T.displayName="SideEffect("+r(c)+")",T.canUseDOM=s.default.canUseDOM,T}}},449:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!u(c))return!1;var s=e[c],f=t[c];if(o=n?n.call(r,s,f,c):void 0,o===!1||void 0===o&&s!==f)return!1}return!0}},204:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}t.__esModule=!0;var i=o(["\nmargin-left: ",";\nmargin-right: ",";\n@media screen and (min-width: ",") {\n  transform: translate3d(0, -2px, 0);\n  &:hover {\n    transform: translate3d(0, 0, 0);\n  }\n}\n"],["\nmargin-left: ",";\nmargin-right: ",";\n@media screen and (min-width: ",") {\n  transform: translate3d(0, -2px, 0);\n  &:hover {\n    transform: translate3d(0, 0, 0);\n  }\n}\n"]),a=n(2),u=r(a),l=n(21),c=r(l),s=n(22),f=n(458),d=r(f),p=n(456),A=r(p),T=n(459),m=r(T),E=n(23),h=c.default.footer.withConfig({displayName:"Footer"})(["align-items:center;background:",";bottom:0;color:",";display:flex;height:",";position:relative;"],E.colors.background,E.colors.ui,function(e){var t=e.mobile;return t?"2.5rem":"3rem"}),y=c.default.span.withConfig({displayName:"Footer__Copryright"})(["font-family:'Merriweather Sans',sans-serif;font-size:",";margin-left:",";width:100%;"],function(e){var t=e.mobile;return t?".8rem":".9rem"},function(e){var t=e.mobile;return t?".4rem":".8rem"}),g=c.default.div.withConfig({displayName:"Footer__ContactsContainer"})(["display:flex;justify-content:flex-end space-between;margin-right:",";"],function(e){var t=e.mobile;return t?".4rem":".8rem"}),b=s.ImgContainer.extend(i,function(e){var t=e.mobile;return t?".25rem":".35rem"},function(e){var t=e.mobile;return t?".25rem":".35rem"},E.screen.mobile);t.default=function(e){var t=e.mobile;return u.default.createElement(h,{mobile:t},u.default.createElement(y,{mobile:t},"© Roy Eden - 2018"),u.default.createElement(g,null,u.default.createElement(b,{href:"https://github.com/RoyEde"},u.default.createElement("img",{alt:"github",src:A.default})),u.default.createElement(b,{href:"https://www.linkedin.com/in/roy-eden/"},u.default.createElement("img",{alt:"linkedin",src:d.default})),u.default.createElement(b,{href:"https://www.twitter.com/RoyEde"},u.default.createElement("img",{alt:"twitter",src:m.default}))))},e.exports=t.default},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(21),u=r(a),l=n(160),c=r(l),s=n(207),f=r(s),d=n(206),p=r(d),A=n(56),T=r(A),m=n(23),E=u.default.img.attrs({alt:"Logo",src:T.default}).withConfig({displayName:"Header__Logo"})(["height:2.9rem;width:2.9rem;@media screen and (min-width:","){&:hover{animation:"," 1.4s ease infinite;}}"],m.screen.mobile,m.animations.shake),h=u.default.progress.withConfig({displayName:"Header__Progress"})(["-moz-appearance:none;-webkit-appearance:none;appareance:none;background-color:transparent;border:none;height:.3rem;position:absolute;width:100vw;z-index:4;&::-moz-progress-bar{background-color:",";}&::-webkit-progress-bar{background-color:transparent;}&::-webkit-progress-value{background-color:",";border-radius:2px;}"],function(e){var t=e.mobile;return t?m.colors.secondary:m.colors.primary},function(e){var t=e.mobile;return t?m.colors.secondary:m.colors.primary}),y=u.default.div.withConfig({displayName:"Header__ButtonContainer"})(["align-items:center;display:flex;float:right;height:100%;margin-right:4vw;"]),g=u.default.div.withConfig({displayName:"Header__HeaderBar"})(["background:",";box-shadow:"," #000000;display:inline-block;height:3.3rem;padding-top:.3rem;width:100vw;z-index:3;"],m.colors.background,function(e){var t=e.mobile;return t?"0px .05rem .1rem":"0px .15rem .2rem"}),b=u.default.header.withConfig({displayName:"Header"})(["display:flex;flex-direction:column;height:",";overflow:hidden;position:fixed;transition:height 1s;width:100%;z-index:3;"],function(e){var t=e.menu;return t?"90vh":"3.6rem"});t.default=function(e){var t=e.handleMenu,n=e.menuOpen,r=e.mobile,o=e.pageHeight,a=e.progress;return i.default.createElement(b,{menu:n},i.default.createElement(h,{max:o,mobile:r,value:a}),i.default.createElement(g,{mobile:r},i.default.createElement(c.default,{to:"/"},i.default.createElement(E,{onClick:function(){return t(!1)}})),r&&i.default.createElement(y,null,i.default.createElement(p.default,{handleClick:function(){return t(!n)},open:n})),!r&&i.default.createElement(f.default,{mobile:r})),r&&i.default.createElement(f.default,{handleClick:function(){return t(!1)},mobile:r,status:n}))},e.exports=t.default},206:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(23),u=n(21),l=r(u),c=l.default.button.withConfig({displayName:"menu-button__Button"})(["align-items:center;background:",";border:none;border-radius:4rem;color:",";display:flex;font-weight:bold;height:3rem;justify-content:center;outline:none;padding:.2rem;text-align:center;width:3rem;&.open{animation:"," 1s ease;font-size:1.3rem;}&.closed{animation:"," 1s ease;font-size:2rem;}"],a.colors.background,a.colors.ui,a.animations.opened,a.animations.closed);t.default=function(e){var t=e.handleClick,n=e.open;return i.default.createElement(c,{className:n?"open":"closed",onClick:t},n?"X":"≡")},e.exports=t.default},207:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(21),u=r(a),l=n(7),c=r(l),s=n(22),f=n(23),d=["Home","Projects","About","Contact"],p=u.default.nav.withConfig({displayName:"nav__Nav"})(["height:100%;float:",";z-index:1;"],function(e){var t=e.mobile;return t?"none":"right"}),A=u.default.menu.withConfig({displayName:"nav__Menu"})(["align-items:center;display:flex;justify-content:center;margin:0;padding:0;height:100%;@media screen and (max-width:","){background-color:",";flex-direction:column;height:auto;transform:",";transform-origin:top;transition:transform .75s ease;}"],f.screen.mobile,f.colors.ui,function(e){var t=e.menu;return t?"translateY(0)":"translateY(-110vh)"}),T=function(e){var t=e.mobile,n=(e.selected,e.page);return i.default.createElement(s.CustomPage,{mobile:t,page:n})},m=function(e){var t=e.handleClick,n=e.mobile,r=e.status;return i.default.createElement(A,{onClick:n?t:"",menu:r},d.map(function(e){return i.default.createElement(T,{key:e,mobile:n,page:e})}))};t.default=function(e){var t=e.handleClick,n=e.mobile,r=e.status;return i.default.createElement(p,{mobile:n},i.default.createElement(m,{handleClick:t,mobile:n,status:r}))},T.propTypes={changePage:c.default.func,mobile:c.default.bool,selected:c.default.bool,where:c.default.string},e.exports=t.default},455:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QwYDzU6LvCszwAAAr1JREFUOMtVk01LMmEUhq/pQ4yZofwaUlN0NCmyiECpRdHHOlq364/0V/oH0aJtVCBBGy2xVi2alCl1RlSGKBj1eRem9Z7dgXPucx24b0kIcQMk+KnBYMDV1RWmaWIYBkIIQqEQzWaT9fV1Njc3iUajo3Fj6mc5AdDv97m4uKDT6RCLxQDI5XJomoZt23S7XcrlMu/v7+RyOQCm+FOXl5fUajVOTk4QQtBsNllYWODr64uPjw8SiQSqqvL4+EgkEiEajTIxWq7VagghOD4+xuv14vF4EELQarVQFIVsNoumaQwGA1zXxXGcXwIhBMViEYBSqUQ0GqXX61EoFJBlGVmW6Xa7rKysEA6HyWazGIZBJpMZEvR6PWzbJp1OI8sy5XKZSqWCz+djfn6eeDxOJpPh+/ub6+tr/H4/7XYbx3GGBLZtU6vVWFtbY3Z2FoCDgwNCoRBCCAAkSUIIgWVZ3N/fI0kSqqoOBSzLQpZlHh4esCwLRVFoNBrU63XS6TQzMzPU63Wq1SperxfHcdA0DWD4QqfTodVqoaoqvV4PVVVRFIVgMIjX60UIgd/vR9d1fD4fpmkSCASYmJgYEmxvb2MYBo7jsLS0hK7rJBIJBoMBpVIJ13UJBoOkUilkWWZnZ4d8Pv9LIEkSsViMl5cXZFlmdXUVgOfnZ87Ozri9veXu7o7Ru7quI0nSrwBAPp9ncnKS8/Pz8XAqleLw8JBMJsPi4iJvb29MT08TiUTG5pv6m4GtrS1s26ZarfL6+koymWR/f5/Pz0/m5uYoFAqk0+nx9f8EFEUhHo9TLBapVCq4rott2ywvL9Nut3l6esLj8aDr+l/3IwkhXkdhEkLQaDQ4PT3FdV2SySQbGxsYhkEsFuPo6Gjsib9pNEadEALTNAmHw1iWxd7eHrlcjpubG0qlEv1+n93dXQKBwFjgH81vNITq6h/OAAAAAElFTkSuQmCC"},456:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAARdEVYdFRpdGxlAGdpdGh1Yi1sb2dv6TOoPQAAAahJREFUOI2dlLtrVEEYR89cNVqthZhCcUHBxzaS0thqColBRAtTCvG/EBSJNoK2WmhjaWWbIgZstLPIw8YQBC1CgiBoQCHHYufK52Q0m/xg4HueedyZCxWpQ+qk+lJdUTfyWMmxSXVfrbcGu6wuu72W1fH/gZL6YABQqftqqgGndwFrdbeEjambOTmrXlVnQsOvPFrNqFfUuexvqhda2B51KRTfDhONqMPBH1ZHgn8n9C2qzV5gHDgTFny4NVJK7+NOUkqrwGoIHQp2D7jUANeK45yrfbR/qKy9TrHdxR3AAMhbbbXQAMdCfn6nQGAh2N0GiDd+633aXp1gDzXA1xA4uwvgyWCvN/y95FPqxUFJ6hhwPITmG2C2qHuqnh4A1gOeFOHXqEfzK/ioTqlr6g/1mXpD3R8gB+z/aZ7nmqif6pG28HEOvlBHQ3G5etQ31vUoFnXUDzlxTu2pN9UTFeDDCmxJ7QA0ACmlb8AE8AV4Rf/1fAcOVo5vo/A/AxOZsWX2rvouzDxdqbkX8m/Vbsw30UkpfQJGgVv0X816ZYVrOTcFnM89f/QbNbhX9gYFdY8AAAAASUVORK5CYII="},56:function(e,t,n){e.exports=n.p+"static/icon.93e54cc1.png"},458:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gQMDh03ZUHtSAAAAMVJREFUOMvlk7sRwjAQRN85ImNoxOMOcDHQAiXQhMsihBIIfOecJTGMxthjPnLEJiftaVa32hGSKkmt8qCVVJmkFliTD26SRGYUj0VE3IDSzAwo+/1vokBjZieAvjY5RDeD3uZr/2l07n6QtO3r11g2qP4tnxhyQB0RF6BOz3Vdt38JNR17jB9wq7HJImI3aT+d8MGn3Fw2o/Znv4r7MQn1+Fb6c/bd/ZqInqd0PrI/vGSqV7AA/lx0sW/qmTW9AOqMwg7Ud2bOTz0q4QD7AAAAAElFTkSuQmCC"},459:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAASdEVYdFRpdGxlAHR3aXR0ZXItbG9nbw0VBpQAAAEzSURBVDiNpZOxLkRBFIa/sZuIhC20JBISlUJoKCiolELhHTyDQvTiFXSyiYjQyIqQiEKloNAohCyhWkRhs59i703Y3Xv3sn8zMzkz3/nnzBwA1D4ySJ1Tz9RP9VXdVgfVEMWGUXPqrTrdBrakVm3Ws/qkHqk51KEoUFGXE2B5tdwCFutdLaqrqP1q7UdwTx1tAE6kwGJtqCFEB46B+QZj50ARuAF6gMOUiryFEApx9oI6qz5kcJGku5icj8ZT4CPtUdroPp50hRAqwAHQ2wHw5NfK+l+67uDK400p1Cl1398vnkWllp7VlX84q5rWEOqa+vUH4Hrb6qoj6mYG2I6aawcbU7esN3+SatGeriTIrFpSXzK4ulJn0kzFrdcDLAILwCQwAHQDZeARuAB2gcsQgmnAbwVrmqpLq6RUAAAAAElFTkSuQmCC"},301:function(e,t){},208:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(2),c=r(l),s=n(7),f=r(s),d=n(411),p=r(d),A=n(205),T=r(A),m=n(204),E=r(m),h=n(455),y=r(h);n(301);var g=n(23),b=n(21),S=r(b),v=S.default.div.withConfig({displayName:"layouts__Container"})([".layout{align-items:center;justify-content:center;display:flex;margin:0 auto;max-width:85vw;padding-top:4rem;z-index:1;@media screen and (min-width:","){max-width:82vw;}}"],g.screen.mobile),w=0,_=function(e){function t(){o(this,t);var n=i(this,e.call(this));return n.state={menuOpen:!1,mobile:!1,pageHeight:0,progress:0},n}return a(t,e),t.prototype.componentDidMount=function(){var e=this;w=window.innerHeight,window.addEventListener("resize",function(){return e.resize()}),window.addEventListener("scroll",function(){return e.checkProgress()}),this.resize()},t.prototype.checkProgress=function(){this.setState({pageHeight:document.body.scrollHeight-window.innerHeight,progress:window.scrollY})},t.prototype.handleMenu=function(e){this.setState({menuOpen:e})},t.prototype.resize=function(){var e=window.innerWidth<=768;this.setState({mobile:e,menuOpen:!!e&&this.state.menuOpen,pageHeight:document.body.scrollHeight-window.innerHeight})},t.prototype.render=function(){var e=this,t=this.state.mobile,n=Math.round(this.state.progress+w),r=this.props,o="/Portfolio/"!==r.location.pathname?r.location.pathname.replace(/\/Portfolio\//g,""):"Home";return c.default.createElement(v,null,c.default.createElement(p.default,{title:"Roy Eden Frontend Dev - "+o+" -",meta:[{name:"description",content:"Roy Eden's Portfolio Page"},{name:"keywords",content:""}],link:[{rel:"shortcut icon",type:"image/png",href:y.default}]}),c.default.createElement(T.default,{handleMenu:function(t){return e.handleMenu(t)},menuOpen:this.state.menuOpen,mobile:t,page:o,pageHeight:this.state.pageHeight,progress:this.state.progress}),c.default.createElement("main",{className:"layout"},this.props.children(u({},r,{mobile:t,progress:n}))),c.default.createElement(E.default,{mobile:t}))},t}(c.default.Component);_.propTypes={children:f.default.func},t.default=_,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-23a3a2d916561bb72c1f.js.map