/* Qwik Service Worker */
const appBundles=[["q-0480cf9b.js",[1,12],["e0ssiDXoeAM"]],["q-175c7545.js",[]],["q-1c950c03.js",[1],["JKHgMZ4xLZQ","Ku7AU0gi0Go","VkLNXphUh5s"]],["q-1d5c5415.js",[1,7,11,12,22],["vIoGUHuUpew","xYL1qOwPyDI","zqpXT8B27s0"]],["q-1efc3507.js",[1,11,12],["zov20CdSKLU"]],["q-22949cf9.js",[],["zwO7CtYmrPQ"]],["q-313cded3.js",[1],["A5bZC7WO00A"]],["q-3b6ad138.js",[]],["q-45aab3b6.js",[]],["q-47973caf.js",[1],["7gzriUtQs98"]],["q-4945116c.js",[1,22],["jCWj7vH0Zjw","rGfHSMO8yuo","ywlmGgAuPUo"]],["q-4a92e7a0.js",[]],["q-4f0bf77f.js",[1]],["q-57a25293.js",[1,11,12],["qgtPW3dQ4Mc"]],["q-6045bcf9.js",[1,12,16],["u0bwM0i5dA8"]],["q-70a6955e.js",[1],["5Go3iiHXUB4","aXA3vNn55QE","D04jAYuCnhM","LkCVrojX09Y"]],["q-7b47fa86.js",[1,12]],["q-87a475cf.js",[1],["mBt9fIl89mc"]],["q-8834f135.js",[1,12],["3sccYCDd1Z0"]],["q-8a07dd0a.js",[1],["dzxzyqdPP1A"]],["q-8a45205b.js",[1]],["q-8c4bb3d8.js",[1],["gbTR5s532g0"]],["q-9e2476f3.js",[]],["q-a3386078.js",[1],["zQpOYlJkb0s"]],["q-a877e76f.js",[1,12],["wOIPfiQ04l4"]],["q-ade7d70a.js",[1,12],["HU55RV7VfPc","JtGc0nS5Nuo","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-aead8c6a.js",[1,12,39],["J4V2qsF7Yxo"]],["q-aeae38f3.js",[1]],["q-be40d647.js",[1,22],["k0rvS00ivS0","urYmogf0008"]],["q-c464f0f2.js",[1,22],["4Q12sQnguZ0","7un8Cxuoe7g","f0cB0S7QJQs"]],["q-c6b03d7b.js",[1,12],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-c7602705.js",[1,12],["eBQ0vFsFKsk"]],["q-ca40d356.js",[1,12],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-cad31f11.js",[1,11,12],["9ZxjQsS5R5U"]],["q-ccdd24d2.js",[1,7,22],["Bce6l6IDAjc","bCJ2MdoLJwE","C0xj1h5HZtc"]],["q-cd5d879f.js",[1],["gRRz00JItKA","kJCtKbc9zbk","NYEDprtA0Lw","UxlJFslpf0s"]],["q-d0315ab9.js",[1,12],["zrbrqoaqXSY"]],["q-d04dc74c.js",[1],["foRSjkQluCc"]],["q-d05e9cec.js",[1],["Y06nkxHFI9w"]],["q-d0e0595d.js",[1,12]],["q-d2add443.js",[1],["9gV1yuUkB6k"]],["q-d3558e63.js",[1,12],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-d70c09c2.js",[1],["4f0j0JlYOoU","6y7o7VSNYDU"]],["q-d7b5bc27.js",[1],["JuIgA4BlaSQ"]],["q-dd21e713.js",[1,11,12,22],["0JeV0t6lmBQ","G9DXyHIma4k","IGVaSK7X0Iw"]],["q-e7774a46.js",[1]],["q-ef923ca4.js",[1],["fle1EaVOup8"]],["q-efab516d.js",[1]],["q-f08b3c3f.js",[1],["bKnMFxJ3dpg"]],["q-f8f85994.js",[1,12],["BUbtvTyvVRE","WmYC5H00wtI"]]];
const libraryBundleIds=[30];
const linkBundles=[[/^\/$/,[16,2,27,3]],[/^\/demo\/flower\/?$/,[16,2,47,25]],[/^\/demo\/todolist\/?$/,[16,2,39,26]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
