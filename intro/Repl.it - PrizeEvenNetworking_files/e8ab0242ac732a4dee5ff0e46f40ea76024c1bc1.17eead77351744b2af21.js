(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{EP3k:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("ln6h"),a=r.n(n),o=r("0gYX"),i=r.n(o),c=r("gfZM");function u(e){var t,r,n,o,u,s;return a.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.fs,r=e.language,l.next=3,a.a.awrap(t.readDir("."));case 3:if(!(n=l.sent).error){l.next=6;break}throw new Error("Could not read files");case 6:return o=n.children,!(u=i.a.getMainFileName(r))&&o.length&&(u=o[0].filename),l.next=11,a.a.awrap(t.readFile(u));case 11:if(!(s=l.sent).error){l.next=14;break}throw s.error;case 14:return l.abrupt("return",c.a.from(s.content).toString());case 15:case"end":return l.stop()}}))}},IjuC:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("ln6h"),a=r.n(n);function o(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.navigator.clipboard){t.next=3;break}return i(e),t.abrupt("return");case 3:return t.prev=3,t.next=6,a.a.awrap(window.navigator.clipboard.writeText(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),i(e);case 11:case"end":return t.stop()}}),null,null,[[3,8]])}function i(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},JOwT:function(e,t,r){"use strict";t.a=["package.json","package-lock.json","yarn.lock","node_modules","poetry.lock","pyproject.toml","requirements.txt",".venv/",".local","go.mod","go.sum","Gemfile","Gemfile.lock","pom.xml","target"]},LTTG:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return p}));var n=r("ln6h"),a=r.n(n),o=r("eVuF"),i=r.n(o),c=r("RPwF"),u=r("zgDP"),s=r("dZ/7"),l=r("HADy"),f=r("Fz/E");function p(t){var n,o=t.beforeRun,p=t.getMainFileContents,d=Object(f.a)(),b=l.b.OFFLINE;function h(e){b=e,d.emit(s.a.STATE_CHANGE,b)}function v(){var e;if(!(null===(e=n)||void 0===e?void 0:e.replbox))throw new Error("replbox not loaded. runState is; "+b);h(l.b.OFFLINE),n.replbox.destroy(),n=null}function w(e){var t;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}throw new Error("replbox not loaded. runState is; "+b);case 2:return b!==l.b.RUNNING&&h(l.b.RUNNING),r.next=5,a.a.awrap(n.replbox.evaluate(e,{stdout:function(e){return d.emit(s.a.OUTPUT,e)}}));case 5:if(t=r.sent,b===l.b.RUNNING){r.next=8;break}return r.abrupt("return");case 8:if(!t.error){r.next=11;break}return d.emit(s.a.ERROR,t.error),r.abrupt("return");case 11:d.emit(s.a.OUTPUT,t.data),h(l.b.IDLE);case 13:case"end":return r.stop()}}))}return{load:function t(o){var f,p,b,w,E,g,m,x,O,y,j;return a.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:return f=o.replId,p=o.hostedUrl,b=o.language,w=o.iframeParent,E=o.timeout,g=void 0===E?5e3:E,n&&v(),k.next=4,a.a.awrap(r.e(42).then(r.t.bind(null,"i5jj",7)).then((function(e){return e.default})));case 4:if(m=k.sent,w)for(;w.firstChild;)w.removeChild(w.firstChild);if((x=new m(b,{useIframe:!0,iframeParent:w,track:u.track})).on("warn",(function(e){d.emit(s.a.OUTPUT,e)})),O=e.env.PR_REVIEW_APP?"/public/secure/":"https://replbox.repl.it/public/secure/","html"!==b){k.next=13;break}if(p){k.next=12;break}throw new Error("Expected hostedUrl for "+b);case 12:O=p+"/__debug_wrapper.html";case 13:return y="".concat(window.location.origin,"/public/replbox_lang/").concat(c.version,"/").concat(b,".js"),j=!1,k.next=17,a.a.awrap(new i.a((function(e,t){var r=setTimeout((function(){j=!0,Object(u.track)(u.events.LOAD_REPLBOX_ENGINE_TIMED_OUT,{language:b}),e()}),g),n=window.performance.now();x.load({iframeOrigin:O,languageBundleSrc:y}).then((function(){clearTimeout(r),Object(u.track)(u.events.LOAD_REPLBOX_ENGINE_TIME,{time:window.performance.now()-n}),e()})).catch((function(e){clearTimeout(r),t(e)}))})));case 17:if(!j){k.next=20;break}return x.destroy(),k.abrupt("return",t({replId:f,language:b,hostedUrl:p,iframeParent:w}));case 20:n={replId:f,replbox:x,language:b,hostedUrl:p},h(l.b.IDLE);case 22:case"end":return k.stop()}}))},run:function(){var e,t,r,i=arguments;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:{},t=e.clean,n){c.next=3;break}throw new Error("replbox not loaded. runState is; "+b);case 3:if("web_project"!==n.language){c.next=5;break}throw new Error("TODO?");case 5:return h(l.b.RUNNING),c.next=8,a.a.awrap(o(n.language));case 8:if(b===l.b.RUNNING){c.next=10;break}return c.abrupt("return");case 10:if(n){c.next=12;break}throw new Error("replbox not loaded. runState is; "+b);case 12:if("html"!==n.language){c.next=16;break}return c.next=15,a.a.awrap(n.replbox.runProject([],{stdout:function(e){return d.emit(s.a.OUTPUT,e)},stderr:function(e){return d.emit(s.a.ERROR,e)},replId:n.replId,url:n.hostedUrl}));case 15:return c.abrupt("return");case 16:if(!t){c.next=21;break}return c.next=19,a.a.awrap(n.replbox.reset());case 19:if(b===l.b.RUNNING){c.next=21;break}return c.abrupt("return");case 21:return c.next=23,a.a.awrap(p(n.language));case 23:if(r=c.sent,b===l.b.RUNNING){c.next=26;break}return c.abrupt("return");case 26:return c.abrupt("return",w(r));case 27:case"end":return c.stop()}}))},evalCode:w,refreshWebview:function(){if(!n)throw new Error("replbox not loaded. runState is; "+b);n.replbox.refreshWebProject()},stopRun:function(){if(!n)throw new Error("replbox not loaded. runState is; "+b);try{n.replbox.stop()}catch(e){if(e.message.match(/postmessage/i))return;throw e}h(l.b.IDLE)},destroy:v,onOutput:function(e){return d.on(s.a.OUTPUT,e),function(){d.removeListener(s.a.OUTPUT,e)}},onStateChanged:function(e){return d.on(s.a.STATE_CHANGE,e),function(){d.removeListener(s.a.STATE_CHANGE,e)}}}}}).call(this,r("8oxB"))},NuhN:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"f",(function(){return l})),r.d(t,"e",(function(){return f}));var n=r("pLtp"),a=r.n(n),o=function(e){return""===e};function i(e){return o(e)||e.endsWith("/")?e:e+"/"}function c(e,t){return a()(e).filter((function(e){return u(t,e)}))}function u(e,t){return t!==e&&t.startsWith(i(e))}function s(e,t){return a()(e).filter((function(e){return function(e,t){if(!u(e,t))return!1;var r=i(e),n=t.slice(r.length);n.endsWith("/")&&(n=n.slice(-1));return!n.includes("/")}(t,e)}))}function l(e,t,r){var n=c(e,t).map((function(e){return[e,f(t,r,e)]}));return"undefined"!==typeof e[t]&&n.unshift([t,r]),n}function f(e,t,r){var n=i(e);return i(t)+r.slice(n.length)}},Qbrf:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("hfKm"),a=r.n(n),o=r("2Eek"),i=r.n(o),c=r("XoMD"),u=r.n(c),s=r("Jo+v"),l=r.n(s),f=r("4mXO"),p=r.n(f),d=r("XXOK"),b=r.n(d),h=r("vYYK"),v=r("pLtp"),w=r.n(v);function E(e,t){var r=w()(e);if(p.a){var n=p()(e);t&&(n=n.filter((function(t){return l()(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(h.a)(e,t,r[t])})):u.a?i()(e,u()(r)):E(Object(r)).forEach((function(t){a()(e,t,l()(r,t))}))}return e}function m(e){"function"!==typeof e.primary&&(e.primary=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e});var t=w()(e);return function(r,n){var a=!1,o={},i=!0,c=!1,u=void 0;try{for(var s,l=b()(t);!(i=(s=l.next()).done);i=!0){var f=s.value;if("primary"!==f){var p=e[f],d=r?r[f]:void 0,h=p(d,n);o[f]=h,a=a||h!==d}}}catch(E){c=!0,u=E}finally{try{i||null==l.return||l.return()}finally{if(c)throw u}}var v=r?a?g({},r,{},o):r:void 0,w=e.primary(v,n);return(a=a||w!==v)?g({},o,{},w):r}}},RPwF:function(e){e.exports=JSON.parse('{"name":"@replit/replbox","version":"2.20.0","description":"A sandboxed browser REPL","main":"dist/index.js","files":["/dist"],"scripts":{"prepublishOnly":"yarn build && cp stuffjschild.html dist","clean":"rm -rf ./dist","build":"yarn clean && NODE_ENV=production webpack --config ./webpack.config.js --bail","test":"prettier --check  \\"src/**/*.js\\" && jest","prettier":"prettier --write \\"src/**/*.js\\"","dev":"NODE_ENV=development node dev_server.js"},"author":"amjad@repl.it","license":"UNLICENSED","devDependencies":{"@replit/alcor":"^0.1.0","@sentry/browser":"^5.7.1","apl":"git+https://github.com/ngn/apl.git#cc314fe3be5f2d018d556b7e91916711e46d265e","babel-core":"^6.25.0","babel-generator":"6.26.0","babel-loader":"7.1.2","babel-polyfill":"6.26.0","babel-preset-env":"1.6.1","babel-preset-stage-2":"6.24.1","babel-template":"6.26.0","babel-traverse":"6.26.0","babel-types":"^6.26.0","babylon":"6.18.0","biwascheme":"git+https://github.com/masad-frost/biwascheme.git#3c0d5a67cd1af696c69ab7fb085b2f42c8b0586c","codemirror":"^5.52.0","context-eval":"^0.1.0","empty-module":"^0.0.2","express":"^4.17.1","happypack":"^4.0.1","inspect-x":"1.7.0","jasmine-core":"^2.4.1","jasmine_dom_matchers":"^1.4.0","jest":"^24.9.0","prettier":"^1.18.2","puppeteer":"^1.11.0","script-loader":"0.7.0","serve-handler":"^6.1.2","stuff.js":"^0.4.1","underscore":"1.2.2","underscore.string":"2.0.0","webpack":"3.10","webpack-dev-middleware":"^2","whatwg-fetch":"^3.0.0"},"dependencies":{},"jest":{"globalSetup":"<rootDir>/jest_setup.js","globalTeardown":"<rootDir>/jest_teardown.js","verbose":true,"bail":1},"prettier":{"trailingComma":"all","tabWidth":2,"semi":true,"singleQuote":true}}')},S6NQ:function(e,t,r){"use strict";r.d(t,"b",(function(){return _})),r.d(t,"a",(function(){return L}));var n=r("hfKm"),a=r.n(n),o=r("2Eek"),i=r.n(o),c=r("XoMD"),u=r.n(c),s=r("Jo+v"),l=r.n(s),f=r("4mXO"),p=r.n(f),d=r("pLtp"),b=r.n(d),h=r("XXOK"),v=r.n(h),w=r("9Jkg"),E=r.n(w),g=r("doui"),m=r("vYYK"),x=r("g7Gn"),O=r("gfZM"),y=r("NuhN"),j=r("tSgl"),k=r.n(j),T=r("XE6U");function N(e,t){var r=b()(e);if(p.a){var n=p()(e);t&&(n=n.filter((function(t){return l()(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):u.a?i()(e,u()(r)):N(Object(r)).forEach((function(t){a()(e,t,l()(r,t))}))}return e}var _={};function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;if("string"===typeof t.path&&k()(t.path))return e;var r=function(){switch(t.type){case"FILE_UNLOAD":return I({},e,Object(m.a)({},t.path,{path:t.path,loaded:!1}));case"FILE_LOADED":case"FILE_CACHE_HIT":return I({},e,Object(m.a)({},t.path,I({},e[t.path],{},t.file)));case"CREATE_FILE":return I({},e,Object(m.a)({},t.path,t.file||{path:t.path,loaded:!1}));case"MOVE_FILE":var r=Object(y.f)(e,t.path,t.to);if(!r.length)return e;var n=I({},e);return r.forEach((function(t){var r=Object(g.a)(t,2),a=r[0],o=r[1];delete n[a];var i=e[a];if(!i)throw new Error("No source file!");n[o]=I({},i,{path:o})})),n;case"DELETE_FILE":var a=Object(y.d)(e,t.path);if(a.length&&e[t.path])throw new T.a("matched children and node while deleting").setExtras({path:t.path,fileState:e});var o=I({},e);return a.length?a.forEach((function(e){delete o[e]})):delete o[t.path],o;case"OT_FILE_OP":if(!t.changeSource)throw new Error("Expected changeSource on action OT_FILE_OP got "+E()(t));var i=e[t.path];if(!i)throw new Error("tried to perform an OT op on "+t.path+" but we don't know about that file.");if(!i.loaded)return e;var c=function(e,t){var r=e,n=0,a=!0,o=!1,i=void 0;try{for(var c,u=v()(t);!(a=(c=u.next()).done);a=!0){var s=c.value;if("string"===typeof s)r=r.slice(0,n)+s+r.slice(n),n+=s.length;else if("object"===typeof s&&"number"===typeof s.d)r=r.slice(0,n)+r.slice(n+s.d);else{if("number"!==typeof s)throw new Error("bad ot op: "+s);n+=s}}}catch(l){o=!0,i=l}finally{try{a||null==u.return||u.return()}finally{if(o)throw i}}return r}(O.a.from(i.content).toString("utf8"),t.op);return I({},e,Object(m.a)({},t.path,I({},i,{content:O.a.from(c)})));default:return e}}();return r!==e&&!e[t.path]&&r[t.path]&&"CREATE_FILE"!==t.type&&x.m((function(r){r.setExtra("action",t),r.setExtra("prevstate",e),x.c(new Error("created file without using CREATE_FILE or FILE_CACHE_HIT"))})),r}},ceSv:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("kOwS"),a=r("doui"),o=r("qNsG"),i=r("q1tI"),c=r("7FmB"),u=r.n(c),s=r("tidx"),l=r("IPFe"),f=r.n(l),p=r("8Vt8"),d=r("sMwv"),b=i.createElement;function h(e){var t=e.replId,r=e.onFork,c=e.isLoggedIn,l=e.onAuthCancel,h=Object(o.a)(e,["replId","onFork","isLoggedIn","onAuthCancel"]),v=i.useState(!1),w=Object(a.a)(v,2),E=w[0],g=w[1];i.useEffect((function(){!E&&l&&l()}),[E,l]);var m=Object(d.a)({onFork:r}),x=Object(a.a)(m,2),O=x[0],y=x[1].loading;return b(i.Fragment,null,b(u.a,Object(n.a)({},h,{Icon:f.a,disabled:y,onClick:function(e){h.onClick&&h.onClick(e),c?y||O(t):g(!0)}}),y?"Forking...":"Fork"),c?null:b(p.a,{isOpen:E,onRequestClose:function(){g(!1)}},b(s.a,{title:"Sign up or log in to fork this repl",onSuccess:function(e){e&&O(t)}})))}},"dZ/7":function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.STATE_CHANGE="STATE_CHANGE",e.OUTPUT="OUTPUT",e.ERROR="ERROR"}(n||(n={}))},h7rM:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var n=r("/MKj");function a(e,t,r,n){var a=e.workspace[t].plugins[r];if(a.type!==n)throw new Error("expected type to be "+n);return a.state}function o(e,t,r,o){var i=Object(n.f)((function(n){return a(n,e,t,r)}),o),c=Object(n.e)();return[i,function(r){c({type:"SET_STATE",wid:e,pud:t,state:r})}]}}}]);
//# sourceMappingURL=e8ab0242ac732a4dee5ff0e46f40ea76024c1bc1.17eead77351744b2af21.js.map