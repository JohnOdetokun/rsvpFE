/*! For license information please see component---src-pages-rsvp-js-2dc48a29e6fa0560753a.js.LICENSE.txt */
(self.webpackChunkjanandolivia=self.webpackChunkjanandolivia||[]).push([[302],{6964:function(e,t,n){e.exports=function(){"use strict";function e(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}function t(e){return"function"==typeof e}var r=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=0,s=void 0,i=void 0,o=function(e,t){b[a]=e,b[a+1]=t,2===(a+=2)&&(i?i(E):w())};function l(e){i=e}function c(e){o=e}var u="undefined"!=typeof window?window:void 0,f=u||{},d=f.MutationObserver||f.WebKitMutationObserver,m="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function v(){return function(){return process.nextTick(E)}}function p(){return void 0!==s?function(){s(E)}:y()}function g(){var e=0,t=new d(E),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function _(){var e=new MessageChannel;return e.port1.onmessage=E,function(){return e.port2.postMessage(0)}}function y(){var e=setTimeout;return function(){return e(E,1)}}var b=new Array(1e3);function E(){for(var e=0;e<a;e+=2)(0,b[e])(b[e+1]),b[e]=void 0,b[e+1]=void 0;a=0}function N(){try{var e=Function("return this")().require("vertx");return s=e.runOnLoop||e.runOnContext,p()}catch(t){return y()}}var w=void 0;function x(e,t){var n=this,r=new this.constructor(C);void 0===r[k]&&Y(r);var a=n._state;if(a){var s=arguments[a-1];o((function(){return V(a,r,s,n._result)}))}else q(n,r,e,t);return r}function S(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(C);return L(n,e),n}w=m?v():d?g():h?_():void 0===u?N():y();var k=Math.random().toString(36).substring(2);function C(){}var A=void 0,j=1,R=2;function F(){return new TypeError("You cannot resolve a promise with itself")}function P(){return new TypeError("A promises callback cannot return that same promise.")}function O(e,t,n,r){try{e.call(t,n,r)}catch(a){return a}}function U(e,t,n){o((function(e){var r=!1,a=O(n,t,(function(n){r||(r=!0,t!==n?L(e,n):D(e,n))}),(function(t){r||(r=!0,G(e,t))}),"Settle: "+(e._label||" unknown promise"));!r&&a&&(r=!0,G(e,a))}),e)}function z(e,t){t._state===j?D(e,t._result):t._state===R?G(e,t._result):q(t,void 0,(function(t){return L(e,t)}),(function(t){return G(e,t)}))}function M(e,n,r){n.constructor===e.constructor&&r===x&&n.constructor.resolve===S?z(e,n):void 0===r?D(e,n):t(r)?U(e,n,r):D(e,n)}function L(t,n){if(t===n)G(t,F());else if(e(n)){var r=void 0;try{r=n.then}catch(a){return void G(t,a)}M(t,n,r)}else D(t,n)}function I(e){e._onerror&&e._onerror(e._result),T(e)}function D(e,t){e._state===A&&(e._result=t,e._state=j,0!==e._subscribers.length&&o(T,e))}function G(e,t){e._state===A&&(e._state=R,e._result=t,o(I,e))}function q(e,t,n,r){var a=e._subscribers,s=a.length;e._onerror=null,a[s]=t,a[s+j]=n,a[s+R]=r,0===s&&e._state&&o(T,e)}function T(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,a=void 0,s=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?V(n,r,a,s):a(s);e._subscribers.length=0}}function V(e,n,r,a){var s=t(r),i=void 0,o=void 0,l=!0;if(s){try{i=r(a)}catch(c){l=!1,o=c}if(n===i)return void G(n,P())}else i=a;n._state!==A||(s&&l?L(n,i):!1===l?G(n,o):e===j?D(n,i):e===R&&G(n,i))}function B(e,t){try{t((function(t){L(e,t)}),(function(t){G(e,t)}))}catch(n){G(e,n)}}var H=0;function W(){return H++}function Y(e){e[k]=H++,e._state=void 0,e._result=void 0,e._subscribers=[]}function J(){return new Error("Array Methods must be provided an Array")}var $=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(C),this.promise[k]||Y(this.promise),r(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?D(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&D(this.promise,this._result))):G(this.promise,J())}return e.prototype._enumerate=function(e){for(var t=0;this._state===A&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===S){var a=void 0,s=void 0,i=!1;try{a=e.then}catch(l){i=!0,s=l}if(a===x&&e._state!==A)this._settledAt(e._state,t,e._result);else if("function"!=typeof a)this._remaining--,this._result[t]=e;else if(n===te){var o=new n(C);i?G(o,s):M(o,e,a),this._willSettleAt(o,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===A&&(this._remaining--,e===R?G(r,n):this._result[t]=n),0===this._remaining&&D(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;q(e,void 0,(function(e){return n._settledAt(j,t,e)}),(function(e){return n._settledAt(R,t,e)}))},e}();function Q(e){return new $(this,e).promise}function X(e){var t=this;return r(e)?new t((function(n,r){for(var a=e.length,s=0;s<a;s++)t.resolve(e[s]).then(n,r)})):new t((function(e,t){return t(new TypeError("You must pass an array to race."))}))}function K(e){var t=new this(C);return G(t,e),t}function Z(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ee(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var te=function(){function e(t){this[k]=W(),this._result=this._state=void 0,this._subscribers=[],C!==t&&("function"!=typeof t&&Z(),this instanceof e?B(this,t):ee())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();function ne(){var e=void 0;if(void 0!==n.g)e=n.g;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(a){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(a){}if("[object Promise]"===r&&!t.cast)return}e.Promise=te}return te.prototype.then=x,te.all=Q,te.race=X,te.resolve=S,te.reject=K,te._setScheduler=l,te._setAsap=c,te._asap=o,te.polyfill=ne,te.Promise=te,te}()},6071:function(e,t,n){"use strict";e.exports=n.g.fetch},2753:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(6540),a=n(3895),s=n(237),i=n(4506),o=n(5540);var l=e=>r.createElement("div",{className:"form__footer"},e.renderFooter());var c=e=>r.createElement("div",{className:"form__body"},r.createElement("div",{className:"form__controls"},r.createElement("div",{className:"control__textbox-group"},r.createElement("label",{className:"control__textbox-label",htmlFor:"fullName"},0===e.guestNum?"Guest Name":`Guest ${e.guestNum}'s name`),r.createElement("input",{className:"control__textbox-input",type:"text",id:"fullName",name:"fullName",value:e.guestNameValue,onChange:e.handleChange}),e.isInvalidName&&r.createElement("p",{className:"is-error"},"Guest name is required.")),r.createElement("fieldset",{className:"control__checkbox-fieldset"},r.createElement("legend",{className:"control__checkbox-legend"},"Which events will this guest be attending?"),r.createElement("div",{className:"control__checkbox-group"},r.createElement("input",{className:"control__checkbox-input",type:"checkbox",id:"attend-1",name:"attendingCeremony",defaultChecked:e.attendingCeremonyValue,onChange:e.handleChange}),r.createElement("label",{className:"control__checkbox-description",htmlFor:"attend-1"},r.createElement("span",{className:"control__checkbox-label"},"Ceremony & Brunch Reception"),r.createElement("br",null),r.createElement("span",{className:"control__checkbox-caption"},"11am, Queens Botanical Garden"))),r.createElement("div",{className:"control__checkbox-group"},r.createElement("input",{className:"control__checkbox-input",type:"checkbox",id:"attend-2",name:"attendingBanquet",defaultChecked:e.attendingBanquetValue,onChange:e.handleChange}),r.createElement("label",{className:"control__checkbox-description",htmlFor:"attend-2"},r.createElement("span",{className:"control__checkbox-label"},"Banquet Dinner"),r.createElement("br",null),r.createElement("span",{className:"control__checkbox-caption"},"6pm, Royal Queen")))),r.createElement("div",{className:"control__textbox-group"},r.createElement("label",{className:"control__textbox-label",htmlFor:"dietaryRestrictions"},"Any dietary restrictions?"),r.createElement("label",{className:"control__textbox-caption",htmlFor:"dietaryRestrictions"},"For example: vegetarian, seafood allergy, etc."),r.createElement("input",{className:"control__textbox-input",type:"text",id:"dietaryRestrictions",name:"dietaryRestrictions",value:e.dietaryRestrictionsValue,onChange:e.handleChange}))),r.createElement(l,{renderFooter:e.renderFooter}));var u=e=>r.createElement("div",{className:"guest"},r.createElement("div",{className:"guest__heading"},r.createElement("span",{className:"guest__title"},e.personInfo.fullName),r.createElement("button",{className:"form-btn form-btn--edit",type:"button",onClick:t=>e.handleEdit(t,e.personInfo,e.guestNum)},"Edit",r.createElement("svg",{width:"11",height:"11",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M6.54 3.74l.51.52-5.03 5.03h-.5v-.51l5.02-5.04zm2-3.34a.56.56 0 0 0-.39.16L7.14 1.58l2.08 2.08 1.02-1.02a.55.55 0 0 0 0-.78L8.94.56a.55.55 0 0 0-.4-.16zm-2 1.77L.4 8.32v2.08h2.08l6.15-6.14-2.09-2.09z",fill:"#A2C3D4",fillRule:"nonzero"})))),r.createElement("p",{className:"guest__detail"},e.personInfo.dietaryRestrictions),r.createElement("div",{className:"guest__attendance"},e.renderGuestChoice(e.personInfo.attendingCeremony),r.createElement("span",{className:"guest__event"},e.personInfo.attendingCeremony?"Attending":"Not attending"," Ceremony & Brunch Reception")),r.createElement("div",{className:"guest__attendance"},e.renderGuestChoice(e.personInfo.attendingBanquet),r.createElement("span",{className:"guest__event"},e.personInfo.attendingBanquet?"Attending":"Not attending"," Banquet Dinner")));var f=e=>r.createElement("div",{className:"form__body"},r.createElement("div",{className:"form__guest-summary"},e.guestInfo.map(((t,n)=>r.createElement(u,{key:t.id,personInfo:t,handleEdit:e.handleEdit,renderGuestChoice:e.renderGuestChoice,guestNum:n+1}))),r.createElement("button",{className:"form-btn form-btn--white form-btn__add-guest",type:"button",onClick:e.handleAddGuest},r.createElement("div",{className:"form-btn__body"},r.createElement("svg",{width:"22",height:"16",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M14 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H8zm-3-3V8h3V6H5V3H3v3H0v2h3v3h2z",fill:"#153048",fillRule:"nonzero"})),"Add another guest")),e.isSubmissionError&&r.createElement("p",{className:"is-error"},"There was an error. Please try submitting again.")),r.createElement(l,{renderFooter:e.renderFooter}));var d=e=>r.createElement("div",{className:"form__body"},r.createElement("div",{className:"form__result"},r.createElement("span",{className:"result__emoji"},"🎉"),r.createElement("p",{className:"result__title"},"We've received your RSVP for"),r.createElement("ul",{className:"result__guest-list"},e.guestInfo.map((e=>r.createElement("li",{className:"result__guest-item",key:e.id},r.createElement("div",{className:"result__guest-item-body"},r.createElement("svg",{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M8 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2zm0 10c2.7 0 5.8 1.29 6 2H2c.23-.72 3.31-2 6-2zM8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"#000",fillRule:"nonzero"})),e.fullName)))))),r.createElement(l,{renderFooter:e.renderFooter}));const m=n(182);n(6964).polyfill(),n(6071);let h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).state={fullName:"",attendingCeremony:!1,attendingBanquet:!1,dietaryRestrictions:"",guestList:[],display:"showForm",isInvalidName:!1,isSubmissionError:!1,isLoading:!1,isEdit:!1,editGuestNum:0},t.buildRequestBody=e=>{let{guestList:t}=e;const[{fullName:n,attendingCeremony:r,attendingBanquet:a,dietaryRestrictions:s},...i]=t;return{fullName:n,attendingCeremony:r,attendingBanquet:a,dietaryRestrictions:s,guests:i}},t.buildGuest=e=>{let{fullName:t,attendingCeremony:n,attendingBanquet:r,dietaryRestrictions:a}=e;return""===a&&(a="No dietary restrictions"),{fullName:t,attendingCeremony:n,attendingBanquet:r,dietaryRestrictions:a,id:m.v1()}},t.handleSubmit=async e=>{e.preventDefault(),t.setState({isLoading:!0});const n=t.buildRequestBody(t.state);try{const e=await fetch("https://shptockpog.execute-api.us-east-1.amazonaws.com/dev/responses/accept",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});if(!e.ok)throw Error(e.statusText);const r=await e.json();console.log(r),t.setState({isSubmissionError:!1,isLoading:!1,display:"showResult"})}catch(r){console.log(r),t.setState({isSubmissionError:!0,isLoading:!1})}},t.handleAddGuest=()=>{t.setState({fullName:"",attendingCeremony:!1,attendingBanquet:!1,dietaryRestrictions:"",isEdit:!1,editGuestNum:0,display:"showForm"})},t.handleRemoveGuest=()=>{const e=t.state.editGuestNum-1,n=(0,i.A)(t.state.guestList);n.splice(e,1),t.setState({guestList:n,isEdit:!1,editGuestNum:0,display:"showSummary"})},t.handleNext=()=>{const e=""===t.state.fullName.trim();if(t.setState({isInvalidName:e}),!1===e){const e=t.buildGuest(t.state);switch(t.state.isEdit){case!0:const n=t.state.editGuestNum-1,r=(0,i.A)(t.state.guestList);r.splice(n,1,e),t.setState((e=>({guestList:r,isEdit:!1,editGuestNum:0,display:"showSummary"})));break;case!1:t.setState((t=>({guestList:[].concat((0,i.A)(t.guestList),[e]),isEdit:!1,editGuestNum:0,display:"showSummary"})))}}},t.handleEdit=(e,n,r)=>{let{fullName:a,attendingCeremony:s,attendingBanquet:i,dietaryRestrictions:o}=n;"No dietary restrictions"===o&&(o=""),console.dir(n),console.warn(s),console.warn(i),console.warn(o),t.setState({fullName:a,attendingCeremony:s,attendingBanquet:i,dietaryRestrictions:o,isEdit:!0,editGuestNum:r,display:"showForm"})},t.handleChange=e=>{let n="";"checkbox"===e.target.type?(n=e.target.name,console.warn("check"),console.warn(n),t.setState((e=>(console.warn(e),{[n]:!e[n]})))):(n=e.target.name,t.setState({[n]:e.target.value}))},t.isAttending=()=>{if(t.state.guestList.length){const e=t.state.guestList[0];return e.attendingBanquet||e.attendingCeremony}},t.renderHeaderSubtitle=()=>{const e=t.state.guestList.length,n=t.isAttending(),r=t.state.editGuestNum;switch(t.state.display){case"showSummary":return 1===e?"You've added 1 person to your party so far.":`You've added ${e} people to your party so far.`;case"showResult":if(!0===n)return"Hurray! Can't wait to see you on the big day!";case"showForm":if(!0===t.state.isEdit)return`Guest ${r}`;default:return"Jan and Olivia's celebration on June 30th, 2019"}},t.renderFooter=()=>{const e=1===t.state.editGuestNum;switch(t.state.display){case"showForm":return!0===t.state.isEdit&&!1===e?r.createElement(r.Fragment,null,r.createElement("button",{className:"form-btn form-btn--white form-btn__remove",type:"button",onClick:t.handleRemoveGuest},"Remove this guest"),r.createElement("button",{className:"form-btn",type:"button",onClick:t.handleNext},"Continue",r.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"})))):r.createElement("button",{className:"form-btn",type:"button",onClick:t.handleNext},"Continue",r.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"})));case"showSummary":switch(t.state.isLoading){case!0:return r.createElement("button",{className:"form-btn is-loading",type:"button"},r.createElement("svg",{width:"31",height:"5",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{fill:"#FFF",fillRule:"evenodd"},r.createElement("circle",{cx:"2.5",cy:"2.5",r:"2.5"}),r.createElement("circle",{cx:"15.5",cy:"2.5",r:"2.5"}),r.createElement("circle",{cx:"28.5",cy:"2.5",r:"2.5"}))));case!1:return r.createElement("button",{className:"form-btn",type:"submit"},"Send RSVP",r.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"})))}case"showResult":return r.createElement("a",{className:"result__link",href:"/"},r.createElement("button",{className:"form-btn",type:"button"},"Wedding details",r.createElement("svg",{width:"16",height:"8",xmlns:"http://www.w3.org/2000/svg",className:"icon-arrow"},r.createElement("path",{d:"M12.01 3.05H0v2h12.01v3l3.99-4-3.99-4v3z",fill:"#FFF",fillRule:"nonzero"}))))}},t.renderGuestChoice=e=>e?r.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",className:"guest__choice-icon"},r.createElement("path",{d:"M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42z",fill:"#A2C3D4",fillRule:"nonzero"})):r.createElement("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",className:"guest__choice-icon"},r.createElement("path",{d:"M10 0a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm0 18a8.01 8.01 0 0 1 0-16 8.01 8.01 0 0 1 0 16zm3.59-13L10 8.59 6.41 5 5 6.41 8.59 10 5 13.59 6.41 15 10 11.41 13.59 15 15 13.59 11.41 10 15 6.41 13.59 5z",fill:"#DE8787",fillRule:"nonzero"})),t.renderComponents=()=>{switch(t.state.display){case"showForm":return r.createElement(c,{handleChange:t.handleChange,handleNext:t.handleNext,guestNameValue:t.state.fullName,dietaryRestrictionsValue:t.state.dietaryRestrictions,attendingCeremonyValue:t.state.attendingCeremony,attendingBanquetValue:t.state.attendingBanquet,guestNum:t.state.editGuestNum,isInvalidName:t.state.isInvalidName,renderFooter:t.renderFooter});case"showSummary":return r.createElement(f,{guestInfo:t.state.guestList,handleAddGuest:t.handleAddGuest,handleEdit:t.handleEdit,isSubmissionError:t.state.isSubmissionError,renderGuestChoice:t.renderGuestChoice,renderFooter:t.renderFooter});case"showResult":return r.createElement(d,{guestInfo:t.state.guestList,renderFooter:t.renderFooter})}},t}return(0,o.A)(t,e),t.prototype.render=function(){return r.createElement("div",{className:"form-container"},r.createElement("div",{className:"form__header"},r.createElement("h1",{className:"header__title"},"Rsvp"),r.createElement("p",{className:"header__subtitle"},this.renderHeaderSubtitle())),r.createElement("form",{onSubmit:this.handleSubmit},this.renderComponents()))},t}(r.Component);var v=h,p=n(8154),g=()=>r.createElement(a.A,null,r.createElement(p.m,null,r.createElement("title",null,"jan & olivia"),r.createElement("link",{rel:"icon",href:"/favicon/favicon-32.png",sizes:"32x32"}),r.createElement("link",{rel:"icon",href:"/favicon/favicon-57.png",sizes:"57x57"}),r.createElement("link",{rel:"icon",href:"/favicon/favicon-76.png",sizes:"76x76"}),r.createElement("link",{rel:"icon",href:"/favicon/favicon-96.png",sizes:"96x96"}),r.createElement("link",{rel:"icon",href:"/favicon/favicon-128.png",sizes:"128x128"}),r.createElement("link",{rel:"icon",href:"/favicon/favicon-192.png",sizes:"192x192"}),r.createElement("link",{rel:"icon",href:"/favicon/favicon-228.png",sizes:"228x228"}),r.createElement("link",{rel:"shortcut icon",sizes:"196x196",href:"/favicon/favicon-196.png"}),r.createElement("link",{rel:"apple-touch-icon",href:"/favicon/favicon-120.png",sizes:"120x120"}),r.createElement("link",{rel:"apple-touch-icon",href:"/favicon/favicon-152.png",sizes:"152x152"}),r.createElement("link",{rel:"apple-touch-icon",href:"/favicon/favicon-180.png",sizes:"180x180"}),r.createElement("meta",{name:"msapplication-TileColor",content:"#FFFFFF"}),r.createElement("meta",{name:"msapplication-TileImage",content:"/favicon/favicon-144.png"}),r.createElement("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"})),r.createElement(s.A,null),r.createElement("nav",{className:"navbar"},r.createElement("ul",{className:"navbar__links"},r.createElement("li",{className:"navbar__link--hidden-mobile"},r.createElement("a",{className:"navbar__link",href:"/#a-story"},r.createElement("span",{className:"navbar__ordinal"},"01"),r.createElement("div",{className:"navbar__divider"}),r.createElement("div",{className:"navbar__label"},r.createElement("span",{className:"navbar__title"},"How We Got Here"),r.createElement("span",{className:"navbar__text"},"A Story")))),r.createElement("li",null,r.createElement("a",{className:"navbar__link",href:"/#the-plan"},r.createElement("span",{className:"navbar__ordinal"},"02"),r.createElement("div",{className:"navbar__divider"}),r.createElement("div",{className:"navbar__label"},r.createElement("span",{className:"navbar__title"},"What's Going Down"),r.createElement("span",{className:"navbar__text"},r.createElement("span",{className:"navbar__text--hidden-mobile"},"The")," Plan")))),r.createElement("li",{className:"navbar__link-divider"}),r.createElement("li",null,r.createElement("a",{className:"navbar__link",href:"/#the-venues"},r.createElement("span",{className:"navbar__ordinal"},"03"),r.createElement("div",{className:"navbar__divider"}),r.createElement("div",{className:"navbar__label"},r.createElement("span",{className:"navbar__title"},"Where is it"),r.createElement("span",{className:"navbar__text"},"Venue ",r.createElement("span",{className:"navbar__text--hidden-mobile"},"Details"))))),r.createElement("li",{className:"navbar__link-divider"}),r.createElement("li",null,r.createElement("a",{className:"navbar__link navbar__link--active",href:"/rsvp"},r.createElement("span",{className:"navbar__ordinal"},"04"),r.createElement("div",{className:"navbar__divider"}),r.createElement("div",{className:"navbar__label"},r.createElement("span",{className:"navbar__title"},"You Coming?"),r.createElement("span",{className:"navbar__text"},"RSVP")))),r.createElement("li",{className:"navbar__link-divider"}),r.createElement("li",null,r.createElement("a",{className:"navbar__link",href:"https://www.amazon.com/wedding/share/jan-and-olivia",target:"_blank",rel:"noopener noreferrer"},r.createElement("span",{className:"navbar__ordinal"},"05"),r.createElement("div",{className:"navbar__divider"}),r.createElement("div",{className:"navbar__label"},r.createElement("span",{className:"navbar__title"},"A Wishlist of Sorts"),r.createElement("span",{className:"navbar__text"},"Registry")))))),r.createElement("img",{className:"logo logo--small",src:"/janandolivia_logo.svg",alt:"Jan and Olivia are getting married!"}),r.createElement(v,null))},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version=t.validate=t.v7=t.v6ToV1=t.v6=t.v5=t.v4=t.v3=t.v1ToV6=t.v1=t.stringify=t.parse=t.NIL=t.MAX=void 0;var r=n(2196);Object.defineProperty(t,"MAX",{enumerable:!0,get:function(){return r.default}});var a=n(3465);Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return a.default}});var s=n(1797);Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return s.default}});var i=n(6011);Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return i.default}});var o=n(1425);Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return o.default}});var l=n(6568);Object.defineProperty(t,"v1ToV6",{enumerable:!0,get:function(){return l.default}});var c=n(591);Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return c.default}});var u=n(8286);Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return u.default}});var f=n(4557);Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return f.default}});var d=n(6356);Object.defineProperty(t,"v6",{enumerable:!0,get:function(){return d.default}});var m=n(268);Object.defineProperty(t,"v6ToV1",{enumerable:!0,get:function(){return m.default}});var h=n(4299);Object.defineProperty(t,"v7",{enumerable:!0,get:function(){return h.default}});var v=n(9746);Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return v.default}});var p=n(2770);Object.defineProperty(t,"version",{enumerable:!0,get:function(){return p.default}})},2196:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="ffffffff-ffff-ffff-ffff-ffffffffffff"},338:function(e,t){"use strict";function n(e){return 14+(e+64>>>9<<4)+1}function r(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function a(e,t,n,a,s,i){return r((o=r(r(t,e),r(a,i)))<<(l=s)|o>>>32-l,n);var o,l}function s(e,t,n,r,s,i,o){return a(t&n|~t&r,e,t,s,i,o)}function i(e,t,n,r,s,i,o){return a(t&r|n&~r,e,t,s,i,o)}function o(e,t,n,r,s,i,o){return a(t^n^r,e,t,s,i,o)}function l(e,t,n,r,s,i,o){return a(n^(t|~r),e,t,s,i,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(e){const t=new Uint8Array(4*e.length);for(let n=0;n<4*e.length;n++)t[n]=e[n>>2]>>>n%4*8&255;return t}(function(e,t){const a=new Uint32Array(n(t)).fill(0);a.set(e),a[t>>5]|=128<<t%32,a[a.length-1]=t,e=a;let c=1732584193,u=-271733879,f=-1732584194,d=271733878;for(let n=0;n<e.length;n+=16){const t=c,a=u,m=f,h=d;c=s(c,u,f,d,e[n],7,-680876936),d=s(d,c,u,f,e[n+1],12,-389564586),f=s(f,d,c,u,e[n+2],17,606105819),u=s(u,f,d,c,e[n+3],22,-1044525330),c=s(c,u,f,d,e[n+4],7,-176418897),d=s(d,c,u,f,e[n+5],12,1200080426),f=s(f,d,c,u,e[n+6],17,-1473231341),u=s(u,f,d,c,e[n+7],22,-45705983),c=s(c,u,f,d,e[n+8],7,1770035416),d=s(d,c,u,f,e[n+9],12,-1958414417),f=s(f,d,c,u,e[n+10],17,-42063),u=s(u,f,d,c,e[n+11],22,-1990404162),c=s(c,u,f,d,e[n+12],7,1804603682),d=s(d,c,u,f,e[n+13],12,-40341101),f=s(f,d,c,u,e[n+14],17,-1502002290),u=s(u,f,d,c,e[n+15],22,1236535329),c=i(c,u,f,d,e[n+1],5,-165796510),d=i(d,c,u,f,e[n+6],9,-1069501632),f=i(f,d,c,u,e[n+11],14,643717713),u=i(u,f,d,c,e[n],20,-373897302),c=i(c,u,f,d,e[n+5],5,-701558691),d=i(d,c,u,f,e[n+10],9,38016083),f=i(f,d,c,u,e[n+15],14,-660478335),u=i(u,f,d,c,e[n+4],20,-405537848),c=i(c,u,f,d,e[n+9],5,568446438),d=i(d,c,u,f,e[n+14],9,-1019803690),f=i(f,d,c,u,e[n+3],14,-187363961),u=i(u,f,d,c,e[n+8],20,1163531501),c=i(c,u,f,d,e[n+13],5,-1444681467),d=i(d,c,u,f,e[n+2],9,-51403784),f=i(f,d,c,u,e[n+7],14,1735328473),u=i(u,f,d,c,e[n+12],20,-1926607734),c=o(c,u,f,d,e[n+5],4,-378558),d=o(d,c,u,f,e[n+8],11,-2022574463),f=o(f,d,c,u,e[n+11],16,1839030562),u=o(u,f,d,c,e[n+14],23,-35309556),c=o(c,u,f,d,e[n+1],4,-1530992060),d=o(d,c,u,f,e[n+4],11,1272893353),f=o(f,d,c,u,e[n+7],16,-155497632),u=o(u,f,d,c,e[n+10],23,-1094730640),c=o(c,u,f,d,e[n+13],4,681279174),d=o(d,c,u,f,e[n],11,-358537222),f=o(f,d,c,u,e[n+3],16,-722521979),u=o(u,f,d,c,e[n+6],23,76029189),c=o(c,u,f,d,e[n+9],4,-640364487),d=o(d,c,u,f,e[n+12],11,-421815835),f=o(f,d,c,u,e[n+15],16,530742520),u=o(u,f,d,c,e[n+2],23,-995338651),c=l(c,u,f,d,e[n],6,-198630844),d=l(d,c,u,f,e[n+7],10,1126891415),f=l(f,d,c,u,e[n+14],15,-1416354905),u=l(u,f,d,c,e[n+5],21,-57434055),c=l(c,u,f,d,e[n+12],6,1700485571),d=l(d,c,u,f,e[n+3],10,-1894986606),f=l(f,d,c,u,e[n+10],15,-1051523),u=l(u,f,d,c,e[n+1],21,-2054922799),c=l(c,u,f,d,e[n+8],6,1873313359),d=l(d,c,u,f,e[n+15],10,-30611744),f=l(f,d,c,u,e[n+6],15,-1560198380),u=l(u,f,d,c,e[n+13],21,1309151649),c=l(c,u,f,d,e[n+4],6,-145523070),d=l(d,c,u,f,e[n+11],10,-1120210379),f=l(f,d,c,u,e[n+2],15,718787259),u=l(u,f,d,c,e[n+9],21,-343485551),c=r(c,t),u=r(u,a),f=r(f,m),d=r(d,h)}return Uint32Array.of(c,u,f,d)}(function(e){if(0===e.length)return new Uint32Array;const t=new Uint32Array(n(8*e.length)).fill(0);for(let n=0;n<e.length;n++)t[n>>2]|=(255&e[n])<<n%4*8;return t}(e),8*e.length))}},3779:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);t.default={randomUUID:n}},3465:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default="00000000-0000-0000-0000-000000000000"},1797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(9746);t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");let t;return Uint8Array.of((t=parseInt(e.slice(0,8),16))>>>24,t>>>16&255,t>>>8&255,255&t,(t=parseInt(e.slice(9,13),16))>>>8,255&t,(t=parseInt(e.slice(14,18),16))>>>8,255&t,(t=parseInt(e.slice(19,23),16))>>>8,255&t,(t=parseInt(e.slice(24,36),16))/1099511627776&255,t/4294967296&255,t>>>24&255,t>>>16&255,t>>>8&255,255&t)}},6697:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i},2291:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");n=crypto.getRandomValues.bind(crypto)}return n(r)};const r=new Uint8Array(16)},2829:function(e,t){"use strict";function n(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:case 3:return t^n^r;case 2:return t&n^t&r^n&r}}function r(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],a=[1732584193,4023233417,2562383102,271733878,3285377520],s=new Uint8Array(e.length+1);s.set(e),s[e.length]=128;const i=(e=s).length/4+2,o=Math.ceil(i/16),l=new Array(o);for(let n=0;n<o;++n){const t=new Uint32Array(16);for(let r=0;r<16;++r)t[r]=e[64*n+4*r]<<24|e[64*n+4*r+1]<<16|e[64*n+4*r+2]<<8|e[64*n+4*r+3];l[n]=t}l[o-1][14]=8*(e.length-1)/Math.pow(2,32),l[o-1][14]=Math.floor(l[o-1][14]),l[o-1][15]=8*(e.length-1)&4294967295;for(let c=0;c<o;++c){const e=new Uint32Array(80);for(let t=0;t<16;++t)e[t]=l[c][t];for(let t=16;t<80;++t)e[t]=r(e[t-3]^e[t-8]^e[t-14]^e[t-16],1);let s=a[0],i=a[1],o=a[2],u=a[3],f=a[4];for(let a=0;a<80;++a){const l=Math.floor(a/20),c=r(s,5)+n(l,i,o,u)+f+t[l]+e[a]>>>0;f=u,u=o,o=r(i,30)>>>0,i=s,s=c}a[0]=a[0]+s>>>0,a[1]=a[1]+i>>>0,a[2]=a[2]+o>>>0,a[3]=a[3]+u>>>0,a[4]=a[4]+f>>>0}return Uint8Array.of(a[0]>>24,a[0]>>16,a[0]>>8,a[0],a[1]>>24,a[1]>>16,a[1]>>8,a[1],a[2]>>24,a[2]>>16,a[2]>>8,a[2],a[3]>>24,a[3]>>16,a[3]>>8,a[3],a[4]>>24,a[4]>>16,a[4]>>8,a[4])}},6011:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unsafeStringify=s;const r=n(9746),a=[];for(let i=0;i<256;++i)a.push((i+256).toString(16).slice(1));function s(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}t.default=function(e,t=0){const n=s(e,t);if(!(0,r.default)(n))throw TypeError("Stringified UUID is invalid");return n}},1425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateV1State=i;const r=n(2291),a=n(6011),s={};function i(e,t,n){return e.msecs??=-1/0,e.nsecs??=0,t===e.msecs?(e.nsecs++,e.nsecs>=1e4&&(e.node=void 0,e.nsecs=0)):t>e.msecs?e.nsecs=0:t<e.msecs&&(e.node=void 0),e.node||(e.node=n.slice(10,16),e.node[0]|=1,e.clockseq=16383&(n[8]<<8|n[9])),e.msecs=t,e}function o(e,t,n,r,a,s,i=0){s||(s=new Uint8Array(16),i=0),t??=Date.now(),n??=0,r??=16383&(e[8]<<8|e[9]),a??=e.slice(10,16);const o=(1e4*(268435455&(t+=122192928e5))+n)%4294967296;s[i++]=o>>>24&255,s[i++]=o>>>16&255,s[i++]=o>>>8&255,s[i++]=255&o;const l=t/4294967296*1e4&268435455;s[i++]=l>>>8&255,s[i++]=255&l,s[i++]=l>>>24&15|16,s[i++]=l>>>16&255,s[i++]=r>>>8|128,s[i++]=255&r;for(let c=0;c<6;++c)s[i++]=a[c];return s}t.default=function(e,t,n){let l;const c=e?._v6??!1;if(e){const t=Object.keys(e);1===t.length&&"_v6"===t[0]&&(e=void 0)}if(e)l=o(e.random??e.rng?.()??(0,r.default)(),e.msecs,e.nsecs,e.clockseq,e.node,t,n);else{const e=Date.now(),a=(0,r.default)();i(s,e,a),l=o(a,s.msecs,s.nsecs,c?void 0:s.clockseq,c?void 0:s.node,t,n)}return t?l:(0,a.unsafeStringify)(l)}},6568:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=function(e){return Uint8Array.of((15&e[6])<<4|e[7]>>4&15,(15&e[7])<<4|(240&e[4])>>4,(15&e[4])<<4|(240&e[5])>>4,(15&e[5])<<4|(240&e[0])>>4,(15&e[0])<<4|(240&e[1])>>4,(15&e[1])<<4|(240&e[2])>>4,96|15&e[2],e[3],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}("string"==typeof e?(0,r.default)(e):e);return"string"==typeof e?(0,a.unsafeStringify)(t):t};const r=n(1797),a=n(6011)},591:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0;const r=n(338),a=n(2988);var s=n(2988);function i(e,t,n,s){return(0,a.default)(48,r.default,e,t,n,s)}Object.defineProperty(t,"DNS",{enumerable:!0,get:function(){return s.DNS}}),Object.defineProperty(t,"URL",{enumerable:!0,get:function(){return s.URL}}),i.DNS=a.DNS,i.URL=a.URL,t.default=i},2988:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.stringToBytes=s,t.default=function(e,t,n,i,o,l){const c="string"==typeof n?s(n):n,u="string"==typeof i?(0,r.default)(i):i;"string"==typeof i&&(i=(0,r.default)(i));if(16!==i?.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let f=new Uint8Array(16+c.length);if(f.set(u),f.set(c,u.length),f=t(f),f[6]=15&f[6]|e,f[8]=63&f[8]|128,o){l=l||0;for(let e=0;e<16;++e)o[l+e]=f[e];return o}return(0,a.unsafeStringify)(f)};const r=n(1797),a=n(6011);function s(e){e=unescape(encodeURIComponent(e));const t=new Uint8Array(e.length);for(let n=0;n<e.length;++n)t[n]=e.charCodeAt(n);return t}t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8"},8286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(3779),a=n(2291),s=n(6011);t.default=function(e,t,n){if(r.default.randomUUID&&!t&&!e)return r.default.randomUUID();const i=(e=e||{}).random||(e.rng||a.default)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return(0,s.unsafeStringify)(i)}},4557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0;const r=n(2829),a=n(2988);var s=n(2988);function i(e,t,n,s){return(0,a.default)(80,r.default,e,t,n,s)}Object.defineProperty(t,"DNS",{enumerable:!0,get:function(){return s.DNS}}),Object.defineProperty(t,"URL",{enumerable:!0,get:function(){return s.URL}}),i.DNS=a.DNS,i.URL=a.URL,t.default=i},6356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6011),a=n(1425),s=n(6568);t.default=function(e,t,n){e??={},n??=0;let i=(0,a.default)({...e,_v6:!0},new Uint8Array(16));if(i=(0,s.default)(i),t){for(let e=0;e<16;e++)t[n+e]=i[e];return t}return(0,r.unsafeStringify)(i)}},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=function(e){return Uint8Array.of((15&e[3])<<4|e[4]>>4&15,(15&e[4])<<4|(240&e[5])>>4,(15&e[5])<<4|15&e[6],e[7],(15&e[1])<<4|(240&e[2])>>4,(15&e[2])<<4|(240&e[3])>>4,16|(240&e[0])>>4,(15&e[0])<<4|(240&e[1])>>4,e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}("string"==typeof e?(0,r.default)(e):e);return"string"==typeof e?(0,a.unsafeStringify)(t):t};const r=n(1797),a=n(6011)},4299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateV7State=i;const r=n(2291),a=n(6011),s={};function i(e,t,n){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=n[6]<<23|n[7]<<16|n[8]<<8|n[9],e.msecs=t):(e.seq=e.seq+1|0,0===e.seq&&e.msecs++),e}function o(e,t,n,r,a=0){return r||(r=new Uint8Array(16),a=0),t??=Date.now(),n??=127*e[6]<<24|e[7]<<16|e[8]<<8|e[9],r[a++]=t/1099511627776&255,r[a++]=t/4294967296&255,r[a++]=t/16777216&255,r[a++]=t/65536&255,r[a++]=t/256&255,r[a++]=255&t,r[a++]=112|n>>>28&15,r[a++]=n>>>20&255,r[a++]=128|n>>>14&63,r[a++]=n>>>6&255,r[a++]=n<<2&255|3&e[10],r[a++]=e[11],r[a++]=e[12],r[a++]=e[13],r[a++]=e[14],r[a++]=e[15],r}t.default=function(e,t,n){let l;if(e)l=o(e.random??e.rng?.()??(0,r.default)(),e.msecs,e.seq,t,n);else{const e=Date.now(),a=(0,r.default)();i(s,e,a),l=o(a,s.msecs,s.seq,t,n)}return t?l:(0,a.unsafeStringify)(l)}},9746:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(6697);t.default=function(e){return"string"==typeof e&&r.default.test(e)}},2770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(9746);t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}}]);
//# sourceMappingURL=component---src-pages-rsvp-js-2dc48a29e6fa0560753a.js.map