exports.id=942,exports.ids=[942],exports.modules={8466:e=>{e.exports={title:"appear-title_title__YdnkI",line:"appear-title_line__xSB5T",visible:"appear-title_visible__5aNQU"}},4942:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{AppearTitle:()=>AppearTitle});var s=i(997),l=i(6317),n=i(8103),a=i.n(n),p=i(4287),c=i(8556),u=i(6689),d=i(621),o=i(6018),h=i(8466),x=i.n(h),T=e([l]);function AppearTitle({children:e,visible:t=!0}){let i=(0,u.useRef)(),[r,n]=(0,u.useState)(!1),p=(0,d.Z)(i,{threshold:1});(0,u.useEffect)(()=>{p?.isIntersecting&&n(!0)},[p]);let{width:h}=(0,o.Z)(),T=(0,l.useMediaQuery)("(max-width: 800px)"),[f,_]=(0,l.useRect)();return(0,u.useEffect)(()=>{if(!1===T){let e=new c.SplitText(i.current,{type:"lines",lineThreshold:.3,tag:"span",linesClass:x().line});return e.lines.forEach((e,t)=>{e.style.setProperty("--i",t);let i=e.innerHTML;e.innerHTML="";let r=document.createElement("span");r.innerHTML=i,e.appendChild(r)}),()=>{e.revert()}}},[h,_,T]),s.jsx("span",{ref:e=>{i.current=e,f(e)},className:a()(x().title,r&&t&&x().visible),children:e})}l=(T.then?(await T)():T)[0],p.gsap.registerPlugin(c.SplitText),r()}catch(e){r(e)}})}};