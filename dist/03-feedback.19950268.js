var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,d=Math.max,s=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var i,o,r,a,u,f,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function h(e){return c=e,u=setTimeout(S,t),l?g(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=r}function S(){var e=m();if(j(e))return O(e);u=setTimeout(S,function(e){var n=t-(e-f);return v?s(n,r-(e-c)):n}(e))}function O(e){return u=void 0,b&&i?g(e):(i=o=void 0,a)}function w(){var e=m(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(v)return u=setTimeout(S,t),g(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,r=(v="maxWait"in n)?d(y(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},w.flush=function(){return void 0===u?a:O(m())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),g=document.querySelector('input[name="email"]'),h=document.querySelector('textarea[name="message"]'),j=document.querySelector('button[type="submit"]');let S=Object(JSON.parse(localStorage.getItem("feedback-form-state")));g.value=S.email||"",h.value=S.message||"",b.addEventListener("input",t((({target:e})=>{S[e.name]=e.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),j.addEventListener("click",(e=>{g.checkValidity()&&h.checkValidity()&&(e.preventDefault(),console.log(S),S={},g.value="",h.value="",localStorage.removeItem("feedback-form-state"))}));
//# sourceMappingURL=03-feedback.19950268.js.map
