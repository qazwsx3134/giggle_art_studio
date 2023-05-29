/*!
 * matrix 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var h,g,E,b,w,x,C,v,u="transform",S=u+"Origin",D,B=function(t){var o=t.ownerDocument||t;for(!(u in t.style)&&("msTransform"in t.style)&&(u="msTransform",S=u+"Origin");o.parentNode&&(o=o.parentNode););if(g=window,C=new y,o){h=o,E=o.documentElement,b=o.body,v=h.createElementNS("http://www.w3.org/2000/svg","g"),v.style.transform="none";var e=o.createElement("div"),n=o.createElement("div");b.appendChild(e),e.appendChild(n),e.style.position="static",e.style[u]="translate3d(0,0,1px)",D=n.offsetParent!==e,b.removeChild(e)}return o},m=function(t){for(var o,e;t&&t!==b;)e=t._gsap,e&&e.uncache&&e.get(t,"x"),e&&!e.scaleX&&!e.scaleY&&e.renderTransform&&(e.scaleX=e.scaleY=1e-4,e.renderTransform(1,e),o?o.push(e):o=[e]),t=t.parentNode;return o},A=[],P=[],I=function(){return g.pageYOffset||h.scrollTop||E.scrollTop||b.scrollTop||0},R=function(){return g.pageXOffset||h.scrollLeft||E.scrollLeft||b.scrollLeft||0},L=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},X=function f(t){if(g.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return f(t)},T=function f(t,o){if(t.parentNode&&(h||B(t))){var e=L(t),n=e?e.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",c=e?o?"rect":"g":"div",s=o!==2?0:100,a=o===3?100:0,r="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",i=h.createElementNS?h.createElementNS(n.replace(/^https/,"http"),c):h.createElement(c);return o&&(e?(x||(x=f(t)),i.setAttribute("width",.01),i.setAttribute("height",.01),i.setAttribute("transform","translate("+s+","+a+")"),x.appendChild(i)):(w||(w=f(t),w.style.cssText=r),i.style.cssText=r+"width:0.1px;height:0.1px;top:"+a+"px;left:"+s+"px",w.appendChild(i))),i}throw"Need document and parent."},Y=function(t){for(var o=new y,e=0;e<t.numberOfItems;e++)o.multiply(t.getItem(e).matrix);return o},F=function(t){var o=t.getCTM(),e;return o||(e=t.style[u],t.style[u]="none",t.appendChild(v),o=v.getCTM(),t.removeChild(v),e?t.style[u]=e:t.style.removeProperty(u.replace(/([A-Z])/g,"-$1").toLowerCase())),o||C.clone()},G=function(t,o){var e=L(t),n=t===e,c=e?A:P,s=t.parentNode,a,r,i,p,l,d;if(t===g)return t;if(c.length||c.push(T(t,1),T(t,2),T(t,3)),a=e?x:w,e)n?(i=F(t),p=-i.e/i.a,l=-i.f/i.d,r=C):t.getBBox?(i=t.getBBox(),r=t.transform?t.transform.baseVal:{},r=r.numberOfItems?r.numberOfItems>1?Y(r):r.getItem(0).matrix:C,p=r.a*i.x+r.c*i.y,l=r.b*i.x+r.d*i.y):(r=new y,p=l=0),o&&t.tagName.toLowerCase()==="g"&&(p=l=0),(n?e:s).appendChild(a),a.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+p)+","+(r.f+l)+")");else{if(p=l=0,D)for(r=t.offsetParent,i=t;i&&(i=i.parentNode)&&i!==r&&i.parentNode;)(g.getComputedStyle(i)[u]+"").length>4&&(p=i.offsetLeft,l=i.offsetTop,i=0);if(d=g.getComputedStyle(t),d.position!=="absolute"&&d.position!=="fixed")for(r=t.offsetParent;s&&s!==r;)p+=s.scrollLeft||0,l+=s.scrollTop||0,s=s.parentNode;i=a.style,i.top=t.offsetTop-l+"px",i.left=t.offsetLeft-p+"px",i[u]=d[u],i[S]=d[S],i.position=d.position==="fixed"?"fixed":"absolute",t.parentNode.appendChild(a)}return a},N=function(t,o,e,n,c,s,a){return t.a=o,t.b=e,t.c=n,t.d=c,t.e=s,t.f=a,t},y=function(){function f(o,e,n,c,s,a){o===void 0&&(o=1),e===void 0&&(e=0),n===void 0&&(n=0),c===void 0&&(c=1),s===void 0&&(s=0),a===void 0&&(a=0),N(this,o,e,n,c,s,a)}var t=f.prototype;return t.inverse=function(){var e=this.a,n=this.b,c=this.c,s=this.d,a=this.e,r=this.f,i=e*s-n*c||1e-10;return N(this,s/i,-n/i,-c/i,e/i,(c*r-s*a)/i,-(e*r-n*a)/i)},t.multiply=function(e){var n=this.a,c=this.b,s=this.c,a=this.d,r=this.e,i=this.f,p=e.a,l=e.c,d=e.b,_=e.d,M=e.e,O=e.f;return N(this,p*n+d*s,p*c+d*a,l*n+_*s,l*c+_*a,r+M*n+O*s,i+M*c+O*a)},t.clone=function(){return new f(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(e){var n=this.a,c=this.b,s=this.c,a=this.d,r=this.e,i=this.f;return n===e.a&&c===e.b&&s===e.c&&a===e.d&&r===e.e&&i===e.f},t.apply=function(e,n){n===void 0&&(n={});var c=e.x,s=e.y,a=this.a,r=this.b,i=this.c,p=this.d,l=this.e,d=this.f;return n.x=c*a+s*i+l||0,n.y=c*r+s*p+d||0,n},f}();function V(f,t,o,e){if(!f||!f.parentNode||(h||B(f)).documentElement===f)return new y;var n=m(f),c=L(f),s=c?A:P,a=G(f,o),r=s[0].getBoundingClientRect(),i=s[1].getBoundingClientRect(),p=s[2].getBoundingClientRect(),l=a.parentNode,d=!e&&X(f),_=new y((i.left-r.left)/100,(i.top-r.top)/100,(p.left-r.left)/100,(p.top-r.top)/100,r.left+(d?0:R()),r.top+(d?0:I()));if(l.removeChild(a),n)for(r=n.length;r--;)i=n[r],i.scaleX=i.scaleY=0,i.renderTransform(1,i);return t?_.inverse():_}export{y as M,B as _,R as a,I as b,F as c,V as g};
