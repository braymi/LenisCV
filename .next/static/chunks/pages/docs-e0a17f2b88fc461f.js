(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{7913:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return s(4382)}])},4382:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return Docs}});var o=s(5893),n=s(4156),r=s(7294),l=s(2172),h=s(3970),a=s.n(h);function Docs(){let[e,i]=(0,r.useState)(),[s,h]=(0,r.useState)();(0,r.useEffect)(()=>{let e=new l.Z({});return i(e),()=>{i(void 0),e.destroy()}},[]),(0,r.useEffect)(()=>{let e=new l.Z({wrapper:document.querySelector("#wrapper"),content:document.querySelector("#content"),autoResize:!1});return h(e),window.lenis=e,()=>{h(void 0),e.destroy()}},[]),(0,r.useEffect)(()=>{null==e||e.on("scroll",e=>{})},[e]),(0,n.xQ)(i=>{null==e||e.raf(i),null==s||s.raf(i)},[]);let c=(0,r.useRef)();return(0,o.jsx)("div",{className:a().page,children:(0,o.jsx)("div",{id:"wrapper",className:a().wrapper,children:(0,o.jsx)("p",{id:"content",className:a().content,ref:c,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem accusantium similique quod accusamus ipsum saepe consequuntur, delectus voluptatum quibusdam laboriosam labore eos ab necessitatibus, sit hic ad dignissimos soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem accusantium similique quod accusamus ipsum saepe consequuntur, delectus voluptatum quibusdam laboriosam labore eos ab necessitatibus, sit hic ad dignissimos soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem accusantium similique quod accusamus ipsum saepe consequuntur, delectus voluptatum quibusdam laboriosam labore eos ab necessitatibus, sit hic ad dignissimos soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem accusantium similique quod accusamus ipsum saepe consequuntur, delectus voluptatum quibusdam laboriosam labore eos ab necessitatibus, sit hic ad dignissimos soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem accusantium similique quod accusamus ipsum saepe consequuntur, delectus voluptatum quibusdam laboriosam labore eos ab necessitatibus, sit hic ad dignissimos soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem accusantium similique quod accusamus ipsum saepe consequuntur, delectus voluptatum quibusdam laboriosam labore eos ab necessitatibus, sit hic ad dignissimos soluta."})})})}},3970:function(e){e.exports={page:"docs_page__aebU6",wrapper:"docs_wrapper__2zO9i",content:"docs_content__mw8ju"}},2172:function(e,i,s){"use strict";function t(e,i,s){return Math.max(e,Math.min(i,s))}s.d(i,{Z:function(){return Lenis}});let Animate=class Animate{advance(e){var i,s,o;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(i=this.value,s=this.to,(1-(o=1-Math.exp(-(60*this.lerp)*e)))*i+o*s),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;let i=t(0,this.currentTime/this.duration,1);n=i>=1;let s=n?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}this.onUpdate?.(this.value,n),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,i,{lerp:s=.1,duration:o=1,easing:n=e=>e,onStart:r,onUpdate:l}){this.from=this.value=e,this.to=i,this.lerp=s,this.duration=o,this.easing=n,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=l}};let Dimensions=class Dimensions{constructor({wrapper:e,content:i,autoResize:s=!0}={}){if(this.wrapper=e,this.content=i,s){var o;let e;let i=(o=this.resize,function(){let i=arguments,s=this;clearTimeout(e),e=setTimeout(function(){o.apply(s,i)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(i),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(i),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect()}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}};let Emitter=class Emitter{constructor(){this.events={}}emit(e,...i){let s=this.events[e]||[];for(let e=0,o=s.length;e<o;e++)s[e](...i)}on(e,i){return this.events[e]?.push(i)||(this.events[e]=[i]),()=>{this.events[e]=this.events[e]?.filter(e=>i!==e)}}off(e,i){this.events[e]=this.events[e]?.filter(e=>i!==e)}destroy(){this.events={}}};let VirtualScroll=class VirtualScroll{constructor(e,{wheelMultiplier:i=1,touchMultiplier:s=2,normalizeWheel:o=!1}){this.element=e,this.wheelMultiplier=i,this.touchMultiplier=s,this.normalizeWheel=o,this.touchStart={x:null,y:null},this.emitter=new Emitter,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,i){return this.emitter.on(e,i)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=e=>{let{clientX:i,clientY:s}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:i,clientY:s}=e.targetTouches?e.targetTouches[0]:e,o=-(i-this.touchStart.x)*this.touchMultiplier,n=-(s-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=s,this.lastDelta={x:o,y:n},this.emitter.emit("scroll",{deltaX:o,deltaY:n,event:e})};onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:i,deltaY:s}=e;this.normalizeWheel&&(i=t(-100,i,100),s=t(-100,s,100)),i*=this.wheelMultiplier,s*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})}};let Lenis=class Lenis{constructor({wrapper:e=window,content:i=document.documentElement,wheelEventsTarget:s=e,eventsTarget:o=s,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:l=.075,touchInertiaMultiplier:h=35,duration:a,easing:c=e=>Math.min(1,1.001-Math.pow(2,-10*e)),lerp:u=!a&&.1,infinite:p=!1,orientation:m="vertical",gestureOrientation:d="vertical",touchMultiplier:g=1,wheelMultiplier:v=1,normalizeWheel:S=!1,autoResize:f=!0}={}){window.lenisVersion="1.0.34",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:i,wheelEventsTarget:s,eventsTarget:o,smoothWheel:n,syncTouch:r,syncTouchLerp:l,touchInertiaMultiplier:h,duration:a,easing:c,lerp:u,infinite:p,gestureOrientation:d,orientation:m,touchMultiplier:g,wheelMultiplier:v,normalizeWheel:S,autoResize:f},this.animate=new Animate,this.emitter=new Emitter,this.dimensions=new Dimensions({wrapper:e,content:i,autoResize:f}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=r||n,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll=new VirtualScroll(o,{touchMultiplier:g,wheelMultiplier:v,normalizeWheel:S}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(e,i){return this.emitter.on(e,i)}off(e,i){return this.emitter.off(e,i)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}onVirtualScroll=({deltaX:e,deltaY:i,event:s})=>{if(s.ctrlKey)return;let o=s.type.includes("touch"),n=s.type.includes("wheel");if(this.options.syncTouch&&o&&"touchstart"===s.type)return void this.reset();let r=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(r||l)return;let h=s.composedPath();if((h=h.slice(0,h.indexOf(this.rootElement))).find(e=>e.hasAttribute?.("data-lenis-prevent")||o&&e.hasAttribute?.("data-lenis-prevent-touch")||n&&e.hasAttribute?.("data-lenis-prevent-wheel")||e.classList?.contains("lenis")))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(this.isSmooth=this.options.syncTouch&&o||this.options.smoothWheel&&n,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();s.preventDefault();let a=i;"both"===this.options.gestureOrientation?a=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(a=e);let c=o&&this.options.syncTouch,u=o&&"touchend"===s.type&&Math.abs(a)>5;u&&(a=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+a,{programmatic:!1,...c?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-e),this.emit()}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(e){let i=e-(this.time||e);this.time=e,this.animate.advance(.001*i)}scrollTo(e,{offset:i=0,immediate:s=!1,lock:o=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:l=!n&&this.options.lerp,onComplete:h=null,force:a=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let s;if("string"==typeof e?s=document.querySelector(e):e?.nodeType&&(s=e),s){if(this.options.wrapper!==window){let e=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?e.left:e.top}let o=s.getBoundingClientRect();e=(this.isHorizontal?o.left:o.top)+this.animatedScroll}}if("number"==typeof e){if(e+=i,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=t(0,e,this.limit),s)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void h?.(this);if(!c){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:n,easing:r,lerp:l,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(e,i)=>{this.isScrolling=!0,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),c&&(this.targetScroll=e),i||this.emit(),i&&(this.reset(),this.emit(),h?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var e;return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClass("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClass("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClass("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClass("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClass(e,i){this.rootElement.classList.toggle(e,i),this.emitter.emit("className change",this)}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7913)}),_N_E=e.O()}]);