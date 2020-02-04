/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,s=null,i=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,i),e=s}},r=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},n={},o={},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,h=new RegExp(`${a}|${l}`),c="$lit$";class d{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,o=-1,l=0;const{strings:d,values:{length:p}}=t;for(;l<p;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)u(e[t].name,c)&&i++;for(;i-- >0;){const e=d[l],s=g.exec(e)[2],i=s.toLowerCase()+c,r=t.getAttribute(i);t.removeAttribute(i);const n=r.split(h);this.parts.push({type:"attribute",index:o,name:s,strings:n}),l+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const i=t.parentNode,r=e.split(h),n=r.length-1;for(let e=0;e<n;e++){let s,n=r[e];if(""===n)s=m();else{const t=g.exec(n);null!==t&&u(t[2],c)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-c.length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===r[n]?(i.insertBefore(m(),t),s.push(t)):t.data=r[n],l+=n}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&o!==n||(o++,e.insertBefore(m(),t)),n=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),l++}}else r.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const u=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},p=t=>-1!==t.index,m=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class f{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,l=r.nextNode();for(;o<i.length;)if(n=i[o],p(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=` ${a} `;class y{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const n=g.exec(t);e+=null===n?t+(s?_:l):t.substr(0,n.index)+n[1]+n[2]+c+n[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class v extends y{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),i(e,s.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(b(t)||!w(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===n||b(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=n,t(this)}this.value!==n&&this.committer.commit()}}class P{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=m()),t.__insert(this.endNode=m())}insertAfterPart(t){t.__insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}const t=this.__pendingValue;t!==n&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof y?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===o?(this.value=o,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const s=new f(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)s=e[i],void 0===s&&(s=new P(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=n}}class k extends S{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends x{}let E=!1;try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class ${constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=this.__pendingValue,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),r=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=N(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=n}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const N=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];if("."===r){return new k(t,e.slice(1),s).parts}return"@"===r?[new $(t,e.slice(1),i.eventContext)]:"?"===r?[new C(t,e.slice(1),s)]:new S(t,e,s).parts}handleTextExpression(t){return new P(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(a);return s=e.keyString.get(i),void 0===s&&(s=new d(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const O=new Map,D=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const H=(t,...e)=>new y(t,e,"html",T),R=(t,...e)=>new v(t,e,"svg",T),V=133;function Y(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,V,null,!1);let n=z(i),o=i[n],a=-1,l=0;const h=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,n=z(i,n),o=i[n]}h.forEach(t=>t.parentNode.removeChild(t))}const j=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,V,null,!1);for(;s.nextNode();)e++;return e},z=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(p(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const I=t=>e=>{const s=F(e.type,t);let i=O.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},O.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(a);if(r=i.keyString.get(n),void 0===r){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),r=new d(e,s),i.keyString.set(n,r)}return i.stringsArray.set(e.strings,r),r},L=["html","svg"],U=new Set,B=(t,e,s)=>{U.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{L.forEach(e=>{const s=O.get(F(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),Y(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,V,null,!1);let o=z(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===s&&(a=j(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=z(r,o);return}o=z(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),Y(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Z=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Z},G=Promise.resolve(!0),X=1,K=4,Q=8,tt=16,et=32,st="finalized";class it extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=G,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(st)||t.finalize(),this[st]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=Z){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|et,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||J;this._updateState=this._updateState|tt,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~tt}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||J;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&tt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|K;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&et}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&X}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&X||(this._updateState=this._updateState|X,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}it[st]=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const rt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol();class ot{constructor(t,e){if(e!==nt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(rt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const at=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof ot)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new ot(s,nt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const lt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class ht extends it{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){lt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ht.finalized=!0,ht.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=D.has(e),o=q&&11===e.nodeType&&!!e.host,a=o&&!U.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=D.get(e);void 0===i&&(r(e,e.firstChild),D.set(e,i=new P(Object.assign({templateFactory:A},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:I(i)},s)),a){const t=D.get(l);D.delete(l);const s=t.value instanceof f?t.value.template:void 0;B(i,l,s),r(e,e.firstChild),e.appendChild(l),D.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ct=new WeakMap,dt=(ut=t=>e=>{if(!(e instanceof x)||e instanceof M||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=e,{element:i}=s;ct.has(e)||(i.className=s.strings.join(" "));const{classList:r}=i,n=ct.get(e);for(const e in n)e in t||r.remove(e);for(const e in t){const s=t[e];n&&s===n[e]||r[s?"add":"remove"](e)}ct.set(e,t)},(...e)=>{const s=ut(...e);return t.set(s,!0),s});var ut;function pt(t,e,s=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},s)s.dispatchEvent(t);else{var i=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout #view"))&&t.firstElementChild}();i&&i.dispatchEvent(t)}}const mt=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),gt=mt.prototype.html,ft=(mt.prototype.css,"custom:");function _t(t,e){const s=document.createElement("hui-error-card");return s.setConfig({type:"error",error:t,origConfig:e}),s}function yt(t,e){if(!e||"object"!=typeof e||!e.type)return _t(`No ${t} type configured`,e);let s=e.type;if(s=s.startsWith(ft)?s.substr(ft.length):`hui-${s}-${t}`,customElements.get(s))return function(t,e){const s=document.createElement(t);try{s.setConfig({...e})}catch(t){return _t(t,e)}return s}(s,e);const i=_t(`Custom element doesn't exist: ${s}.`,e);i.style.display="None";const r=setTimeout(()=>{i.style.display=""},2e3);return customElements.whenDefined(s).then(()=>{clearTimeout(r),pt("ll-rebuild",{},i)}),i}const vt=2;class bt extends mt{static get version(){return vt}static get properties(){return{noHass:{type:Boolean}}}setConfig(t){var e;this._config=t,this.el?this.el.setConfig(t):(this.el=this.create(t),this._hass&&(this.el.hass=this._hass),this.noHass&&(e=this,document.querySelector("hc-main")?document.querySelector("hc-main").provideHass(e):document.querySelector("home-assistant")&&document.querySelector("home-assistant").provideHass(e)))}set config(t){this.setConfig(t)}set hass(t){this._hass=t,this.el&&(this.el.hass=t)}createRenderRoot(){return this}render(){return gt`${this.el}`}}const wt=function(t,e){const s=Object.getOwnPropertyDescriptors(e.prototype);for(const[e,i]of Object.entries(s))"constructor"!==e&&Object.defineProperty(t.prototype,e,i);const i=Object.getOwnPropertyDescriptors(e);for(const[e,s]of Object.entries(i))"prototype"!==e&&Object.defineProperty(t,e,s);const r=Object.getPrototypeOf(e),n=Object.getOwnPropertyDescriptors(r.prototype);for(const[e,s]of Object.entries(n))"constructor"!==e&&Object.defineProperty(Object.getPrototypeOf(t).prototype,e,s);const o=Object.getOwnPropertyDescriptors(r);for(const[e,s]of Object.entries(o))"prototype"!==e&&Object.defineProperty(Object.getPrototypeOf(t),e,s)},St=customElements.get("card-maker");if(!St||!St.version||St.version<vt){class t extends bt{create(t){return function(t){return yt("card",t)}(t)}getCardSize(){return this.firstElementChild&&this.firstElementChild.getCardSize?this.firstElementChild.getCardSize():1}}St?wt(St,t):customElements.define("card-maker",t)}const xt=customElements.get("element-maker");if(!xt||!xt.version||xt.version<vt){class t extends bt{create(t){return function(t){return yt("element",t)}(t)}}xt?wt(xt,t):customElements.define("element-maker",t)}const Pt=customElements.get("entity-row-maker");if(!Pt||!Pt.version||Pt.version<vt){class t extends bt{create(t){return function(t){const e=new Set(["call-service","cast","conditional","divider","section","select","weblink"]);if(!t)return _t("Invalid configuration given.",t);if("string"==typeof t&&(t={entity:t}),"object"!=typeof t||!t.entity&&!t.type)return _t("Invalid configuration given.",t);const s=t.type||"default";return e.has(s)||s.startsWith(ft)?yt("row",t):yt("entity-row",{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[t.entity.split(".",1)[0]]||"text",...t})}(t)}}Pt?wt(Pt,t):customElements.define("entity-row-maker",t)}var Ct={},kt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,Mt="[^\\s]+",Et=/\[([^]*?)\]/gm,$t=function(){};function Nt(t,e){for(var s=[],i=0,r=t.length;i<r;i++)s.push(t[i].substr(0,e));return s}function Tt(t){return function(e,s,i){var r=i[t].indexOf(s.charAt(0).toUpperCase()+s.substr(1).toLowerCase());~r&&(e.month=r)}}function At(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var Ot=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Dt=["January","February","March","April","May","June","July","August","September","October","November","December"],Ht=Nt(Dt,3),Rt=Nt(Ot,3);Ct.i18n={dayNamesShort:Rt,dayNames:Ot,monthNamesShort:Ht,monthNames:Dt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var Vt={D:function(t){return t.getDate()},DD:function(t){return At(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return At(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return At(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return At(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return At(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return At(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return At(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return At(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return At(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return At(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return At(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+At(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},Yt={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+Mt,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var s=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?s-1:s)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",$t],ddd:[Mt,$t],MMM:[Mt,Tt("monthNamesShort")],MMMM:[Mt,Tt("monthNames")],a:[Mt,function(t,e,s){var i=e.toLowerCase();i===s.amPm[0]?t.isPm=!1:i===s.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var s,i=(e+"").match(/([+-]|\d\d)/gi);i&&(s=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?s:-s)}]};Yt.dd=Yt.d,Yt.dddd=Yt.ddd,Yt.DD=Yt.D,Yt.mm=Yt.m,Yt.hh=Yt.H=Yt.HH=Yt.h,Yt.MM=Yt.M,Yt.ss=Yt.s,Yt.A=Yt.a,Ct.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},Ct.format=function(t,e,s){var i=s||Ct.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=Ct.masks[e]||e||Ct.masks.default;var r=[];return(e=(e=e.replace(Et,(function(t,e){return r.push(e),"@@@"}))).replace(kt,(function(e){return e in Vt?Vt[e](t,i):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return r.shift()}))},Ct.parse=function(t,e,s){var i=s||Ct.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=Ct.masks[e]||e,t.length>1e3)return null;var r={},n=[],o=[];e=e.replace(Et,(function(t,e){return o.push(e),"@@@"}));var a,l=(a=e,a.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(kt,(function(t){if(Yt[t]){var e=Yt[t];return n.push(e[1]),"("+e[0]+")"}return t}));l=l.replace(/@@@/g,(function(){return o.shift()}));var h=t.match(new RegExp(l,"i"));if(!h)return null;for(var c=1;c<h.length;c++)n[c-1](r,h[c],i);var d,u=new Date;return!0===r.isPm&&null!=r.hour&&12!=+r.hour?r.hour=+r.hour+12:!1===r.isPm&&12==+r.hour&&(r.hour=0),null!=r.timezoneOffset?(r.minute=+(r.minute||0)-+r.timezoneOffset,d=new Date(Date.UTC(r.year||u.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0))):d=new Date(r.year||u.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0),d};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var jt=function(t){return void 0===t.attributes.friendly_name?function(t){return t.substr(t.indexOf(".")+1)}(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""};customElements.define("thermostat-popup-card",class extends ht{constructor(){super(),this.hvacModeOrdering={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7},this.modeIcons={auto:"hass:calendar-repeat",heat_cool:"hass:autorenew",heat:"hass:fire",cool:"hass:snowflake",off:"hass:power",fan_only:"hass:fan",dry:"hass:water-percent"},this._compareClimateHvacModes=(t,e)=>this.hvacModeOrdering[t]-this.hvacModeOrdering[e]}static get properties(){return{hass:{},config:{},active:{}}}render(){var t=this.config.entity,e=this.hass.states[t],s=(this.config.icon?this.config.icon:e.attributes.icon&&e.attributes.icon,this.config.name||jt(this.hass.states[this.config.entity])),i=null!==e.attributes.temperature&&e.attributes.temperature?e.attributes.temperature:e.attributes.min_temp,r=e.attributes.current_temperature,n=e.state in this.modeIcons?e.state:"unknown-mode";n="";n="off"==e.state?"off":"heating"==e.attributes.hvac_action?"heat":"idle"==e.attributes.hvac_action?"idle":e.state in this.modeIcons?e.state:"unknown-mode";var o=this.config.stepSize?this.config.stepSize:e.attributes.target_temp_step?e.attributes.target_temp_step:1,a=!("fullscreen"in this.config)||this.config.fullscreen;return H`
      <div class="${!0===a?"popup-wrapper":""}">
        <div class="popup-inner ${dt({[n]:!0})}" @click="${t=>this._close(t)}">
          <div class="info${!0===a?" fullscreen":""}">
            <div class="temp ${n}">
              ${r}&#176;
            </div>
            <div class="right">
              <div class="name">${s}</div>
              <div class="action">
              ${e.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`):this.hass.localize(`state.climate.${e.state}`)}
              ${e.attributes.preset_mode&&"none"!==e.attributes.preset_mode?H`
                      -
                      ${this.hass.localize(`state_attributes.climate.preset_mode.${e.attributes.preset_mode}`)||e.attributes.preset_mode}
                    `:""}
               ${i}&#176;</div>
            </div>
          </div>


          <div id="controls">
            <div id="slider">
              <custom-round-slider
                .value=${i}
                .low=${e.attributes.target_temp_low}
                .high=${e.attributes.target_temp_high}
                .min=${e.attributes.min_temp}
                .max=${e.attributes.max_temp}
                .step=${o}
                .handleSize=${15}
                .gradient=${!0}
                .gradientPoints=${[{point:0,color:"#4fdae4"},{point:10,color:"#2da9d8"},{point:25,color:"#56b557"},{point:50,color:"#f4c807"},{point:70,color:"#faaa00"},{point:100,color:"#f86618"}]}
                @value-changing=${this._dragEvent}
                @value-changed=${this._setTemperature}
              ></custom-round-slider>

              <div id="slider-center">
                <div class="values">
                  <div class="action">
                    ${e.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${e.attributes.hvac_action}`):this.hass.localize(`state.climate.${e.state}`)}
                    ${e.attributes.preset_mode&&"none"!==e.attributes.preset_mode?H`
                            -
                            ${this.hass.localize(`state_attributes.climate.preset_mode.${e.attributes.preset_mode}`)||e.attributes.preset_mode}
                          `:""}
                  </div>
                  <div class="value">
                    ${this._setTemp?Array.isArray(this._setTemp)?1===o?R`
                              ${this._setTemp[0].toFixed()}&#176; -
                              ${this._setTemp[1].toFixed()}&#176;
                              `:R`
                              ${this._setTemp[0].toFixed(1)}&#176; -
                              ${this._setTemp[1].toFixed(1)}&#176;
                              `:1===o?R`
                              ${this._setTemp.toFixed()}&#176;
                              `:R`
                              ${this._setTemp.toFixed(1)}&#176;
                              `:""}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="modes">
            ${(e.attributes.hvac_modes||[]).concat().sort(this._compareClimateHvacModes).map(t=>this._renderIcon(t,n))}
          </div>
        </div>
      </div>
    `}updated(){this._setTemp=this._getSetTemp(this.hass.states[this.config.entity])}_renderIcon(t,e){return this.modeIcons[t]?H`
      <paper-icon-button
        class="${dt({"selected-icon":e===t})}"
        .mode="${t}"
        .icon="${this.modeIcons[t]}"
        @click="${this._handleModeClick}"
        tabindex="0"
      ></paper-icon-button>
    `:H``}_handleModeClick(t){this.hass.callService("climate","set_hvac_mode",{entity_id:this.config.entity,hvac_mode:t.currentTarget.mode})}_getSetTemp(t){return"unavailable"===t.state?this.hass.localize("state.default.unavailable"):t.attributes.target_temp_low&&t.attributes.target_temp_high?[t.attributes.target_temp_low,t.attributes.target_temp_high]:t.attributes.temperature}_close(t){t&&t.target.className.includes("popup-inner")&&function(){const t=document.querySelector("hc-main")||document.querySelector("home-assistant"),e=t&&t._moreInfoEl;e&&e.close()}()}_dragEvent(t){const e=this.hass.states[this.config.entity];t.detail.low?this._setTemp=[t.detail.low,e.attributes.target_temp_high]:t.detail.high?this._setTemp=[e.attributes.target_temp_low,t.detail.high]:this._setTemp=t.detail.value}_setTemperature(t){const e=this.hass.states[this.config.entity];t.detail.low?this.hass.callService("climate","set_temperature",{entity_id:this.config.entity,target_temp_low:t.detail.low,target_temp_high:e.attributes.target_temp_high}):t.detail.high?this.hass.callService("climate","set_temperature",{entity_id:this.config.entity,target_temp_low:e.attributes.target_temp_low,target_temp_high:t.detail.high}):this.hass.callService("climate","set_temperature",{entity_id:this.config.entity,temperature:t.detail.value})}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}getCardSize(){return 1}static get styles(){return at`
        :host {
            --auto-color: #EE7600;
            --eco-color: springgreen;
            --cool-color: #2b9af9;
            --heat-color: #EE7600;
            --manual-color: #44739e;
            --off-color: lightgrey;
            --fan_only-color: #8a8a8a;
            --dry-color: #efbd07;
            --idle-color: #00CC66;
            --unknown-color: #bac;
        }
        .popup-wrapper {
          margin-top:64px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .popup-inner {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .fullscreen {
          margin-top:-64px;
        }
        .info {
          display:flex;
          flex-direction:row;
          margin-bottom: 40px;
        }
        .info .temp {
          background-color: #67cd67;
          height: 60px;
          width: 60px;  
          text-align:center;
          line-height:60px;
          border-radius:100%;
          color:#FFF;
          font-size:18px;
        }

        .info .temp.heat_cool {
          background-color: var(--auto-color);
        }
        .info .temp.cool {
          background-color: var(--cool-color);
        }
        .info .temp.heat {
          background-color: var(--heat-color);
        }
        .info .temp.manual {
          background-color: var(--manual-color);
        }
        .info .temp.off {
          background-color: var(--off-color);
        }
        .info .temp.fan_only {
          background-color: var(--fan_only-color);
        }
        .info .temp.eco {
          background-color: var(--eco-color);
        }
        .info .temp.dry {
          background-color: var(--dry-color);
        }
        .info .temp.idle {
          background-color: var(--idle-color);
        }
        .info .temp.unknown-mode {
          background-color: var(--unknown-color);
        }


        .info .right {
          display:flex;
          flex-direction:column;
          margin-left:15px;
          height:60px;
          align-items:center;
          justify-content:center;
        }
        .info .right .name {
          color:#FFF;
          font-size:24px;
        }
        .info .right .action {
          color: #8b8a8f;
          font-size:12px;
        }
        
        /* CONTROLS */
        
        .heat_cool {
          --mode-color: var(--auto-color);
        }
        .cool {
          --mode-color: var(--cool-color);
        }
        .heat {
          --mode-color: var(--heat-color);
        }
        .manual {
          --mode-color: var(--manual-color);
        }
        .off {
          --mode-color: var(--off-color);
        }
        .fan_only {
          --mode-color: var(--fan_only-color);
        }
        .eco {
          --mode-color: var(--eco-color);
        }
        .dry {
          --mode-color: var(--dry-color);
        }
        .idle {
          --mode-color: var(--idle-color);
        }
        .unknown-mode {
          --mode-color: var(--unknown-color);
        }
        #controls {
          display: flex;
          justify-content: center;
          padding: 16px;
          position: relative;
          width:500px;
        }
        #slider {
          height: 100%;
          width: 100%;
          position: relative;
          max-width: 300px;
          min-width: 250px;
        }
        round-slider {
          --round-slider-path-color: var(--disabled-text-color);
          --round-slider-bar-color: var(--mode-color);
          padding-bottom: 10%;
        }
        #slider-center {
          position: absolute;
          width: calc(100% - 120px);
          height: calc(100% - 120px);
          box-sizing: border-box;
          border-radius: 100%;
          left: 60px;
          top: 60px;
          text-align: center;
          overflow-wrap: break-word;
          pointer-events: none;
        }
        
        .values {
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          height:100%;
          width:100%;
        }
        .values .action {
          color:#f4b941;
          font-size:10px;
          text-transform:uppercase;
        }
        .values .value {
          color:#FFF;
          font-size:60px;
          line-height: 60px;
        }
        
        #modes > * {
          color: var(--disabled-text-color);
          cursor: pointer;
          display: inline-block;
        }
        #modes .selected-icon {
          --iron-icon-fill-color: var(--mode-color);
        }
        text {
          fill: var(--primary-text-color);
        }
    `}});customElements.define("custom-round-slider",class extends ht{constructor(){super(),this.min=0,this.max=100,this.step=1,this.startAngle=135,this.arcLength=270,this.handleSize=6,this.handleZoom=5,this.disabled=!1,this.dragging=!1,this.rtl=!1,this._scale=1,this.gradient=!1,this.gradientPoints=[]}static get properties(){return{value:{type:Number},high:{type:Number},low:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},startAngle:{type:Number},arcLength:{type:Number},handleSize:{type:Number},handleZoom:{type:Number},disabled:{type:Boolean},dragging:{type:Boolean,reflect:!0},rtl:{type:Boolean},_scale:{type:Number},gradient:{type:Boolean},gradientPoints:{type:Array}}}get _start(){return this.startAngle*Math.PI/180}get _len(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}get _end(){return this._start+this._len}get _enabled(){return!this.disabled&&((null!=this.value||null!=this.high&&null!=this.low)&&((null==this.value||!(this.value>this.max||this.value<this.min))&&((null==this.high||!(this.high>this.max||this.high<this.min))&&(null==this.low||!(this.low>this.max||this.low<this.min)))))}_angleInside(t){let e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}_angle2xy(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}_xy2angle(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+2*Math.PI)%(2*Math.PI)}_value2angle(t){const e=(t-this.min)/(this.max-this.min);return this._start+e*this._len}_angle2value(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}get _boundaries(){const t=this._angle2xy(this._start),e=this._angle2xy(this._end);let s=1;this._angleInside(270)||(s=Math.max(-t.y,-e.y));let i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));let r=1;this._angleInside(180)||(r=Math.max(-t.x,-e.x));let n=1;return this._angleInside(0)||(n=Math.max(t.x,e.x)),{up:s,down:i,left:r,right:n,height:s+i,width:r+n}}dragStart(t){let e=t.target;if(this._rotation&&"focus"!==this._rotation.type)return;if(e.classList.contains("overflow")&&(e=e.nextElementSibling),!e.classList.contains("handle"))return;e.setAttribute("stroke-width",this.handleSize*this._scale+5+this.handleZoom);const s="high"===e.id?this.low:this.min,i="low"===e.id?this.high:this.max;this._rotation={handle:e,min:s,max:i,start:this[e.id],type:t.type},this.dragging=!0}dragEnd(){if(!this._rotation)return;const t=this._rotation.handle;t.setAttribute("stroke-width",this.handleSize*this._scale+5),this._rotation=!1,this.dragging=!1,t.blur();let e=new CustomEvent("value-changed",{detail:{[t.id]:this[t.id]}});this.dispatchEvent(e),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}drag(t){if(!this._rotation)return;if("focus"===this._rotation.type)return;t.preventDefault();const e="touchmove"===t.type?t.touches[0].clientX:t.clientX,s="touchmove"===t.type?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),r=this._boundaries,n=e-(i.left+r.left*i.width/r.width),o=s-(i.top+r.up*i.height/r.height),a=this._xy2angle(n,o),l=this._angle2value(a);this._dragpos(l)}_dragpos(t){if(t<this._rotation.min||t>this._rotation.max)return;const e=this._rotation.handle;this[e.id]=t;let s=new CustomEvent("value-changing",{detail:{[e.id]:t}});this.dispatchEvent(s)}_keyStep(t){if(!this._rotation)return;const e=this._rotation.handle;"ArrowLeft"===t.key&&(this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"===t.key&&(this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step))}firstUpdated(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1}),document.addEventListener("keydown",this._keyStep.bind(this))}updated(t){if(this.shadowRoot.querySelector("svg")&&void 0!==this.shadowRoot.querySelector("svg").style.vectorEffect)return;t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(t=>{if(t.getAttribute("stroke-width"))return;const e=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth=`${e*this._scale}px`});const e=this.shadowRoot.querySelector("svg").getBoundingClientRect(),s=Math.max(e.width,e.height);this._scale=2/s}_renderArc(t,e){const s=e-t;return t=this._angle2xy(t),e=this._angle2xy(e+.001),`\n      M ${t.x} ${t.y}\n      A 1 1,\n        0,\n        ${s>Math.PI?"1":"0"} ${this.rtl?"0":"1"},\n        ${e.x} ${e.y}\n    `}_renderHandle(t){const e=this._value2angle(this[t]),s=this._angle2xy(e);return R`
      <g class="${t} handle">
        <path
          id=${t}
          class="overflow"
          d="
          M ${s.x} ${s.y}
          L ${s.x+.001} ${s.y+.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-linecap="round"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${t}
          class="handle"
          d=${this._renderArc(this._value2angle("low"!=t?this[t]-.35:this[t]+.35),this._value2angle(this[t]))}
          vector-effect="non-scaling-stroke"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          />
        </g>
      `}render(){const t=this._boundaries;return H`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-t.left} ${-t.up} ${t.width} ${t.height}"
        style="margin: 30px;"
        focusable="false"
      >
        ${this.gradient?H`
        
        `:H``}
        <g class="slider">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            ${this.gradientPoints.map(t=>R`<stop offset="${t.point}%" style="stop-color:${t.color};" />`)}
            </linearGradient>
          </defs>
          <path
            class="path" style="${this.gradient?"stroke: url(#gradient);":"stroke: var(--round-slider-path-color, lightgray);"}" 
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          ${this._enabled?R`
              <path
                class="block"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._start,this._value2angle(null!=this.low?this.low:this.min))}
              />
              <path
                class="block"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._value2angle(null!=this.high?this.high:this.value),this._end)}
              />
              <path
                class="block-dash"
                stroke-dasharray="2, 25"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._start,this._end)}
              />
              <path
                class="bar"
                vector-effect="non-scaling-stroke"
                d=${this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value))}
              />
              
              `:""}
        </g>
        <g class="handles">
        ${this._enabled?null!=this.low?this._reverseOrder?H`${this._renderHandle("high")} ${this._renderHandle("low")}`:H`${this._renderHandle("low")} ${this._renderHandle("high")}`:H`${this._renderHandle("value")}`:""}
        </g>
        
      </svg>
    `}static get styles(){return at`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 30);
        stroke-linecap: var(--round-slider-linecap, butt);
      }
      .path {
      }
      .bar {
        stroke: var(--round-slider-bar-color, transparent);
      }
      .block {
        stroke-width: var(--round-slider-block-path-width, 31);
        stroke: #2c2c2e;
      }
      .block-dash {
        stroke-width: var(--round-slider-dash-width, 20);
        stroke: var(--round-slider-block-dash-color, rgba(255,255,255,0.1));
      }
      g.handles {
        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
        stroke-linecap: round;
      }
      g.handle {
        stroke-width: var(--round-slider-dash-width, 20);
        stroke: #FFF;
        stroke-dasharray: 3, 8;
        stroke-linecap: butt;
      }
      .handle:focus {
        outline: unset;
      }
    `}});
