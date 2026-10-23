// PhotonStudio core: ray tracer + two-pass photon mapping. DOM/three-free so it runs in node tests.
const EPS=1e-4,PI=Math.PI;
const dot=(a,b)=>a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
const norm=v=>{const l=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/l,v[1]/l,v[2]/l]};
export function rngSeed(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
export function toneMap(rgb,exposure=1){
  return rgb.map(v=>{const x=Math.max(0,v*exposure),mapped=x*(2.51*x+.03)/(x*(2.43*x+.59)+.14);return Math.pow(Math.min(1,mapped),1/2.2)})
}
export const luminance=rgb=>.2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
const GREY=[.8,.8,.8],mkO=(id,name,type,pos,rot,scale)=>({id,name,type,pos,rot,scale,col:GREY,visible:true});
export const defaultScene=()=>prepScene({room:{w:5,h:5,d:5},
  walls:{left:[.75,.1,.1],right:[.1,.65,.1],back:[.75,.75,.75],floor:[.75,.75,.75],ceil:[.75,.75,.75]},wallVis:{left:true,right:true,back:true,floor:true,ceil:false},
  lights:[{id:1,name:'Area Light',type:'area',pos:[2.5,4.99,2.5],size:1.2,power:60,color:[1,1,1],on:true,visible:true}],
  objects:[mkO(2,'Sphere','sphere',[1.5,.9,2.3],[0,0,0],[1.8,1.8,1.8]),mkO(3,'Box','box',[3.5,1.1,2.8],[0,.4,0],[1.2,2.2,1.2]),mkO(4,'Cylinder','cylinder',[2.6,.6,1.1],[0,0,0],[.9,1.2,.9])]});
export const sceneKey=(S,P)=>JSON.stringify([S.room,S.walls,S.wallVis,S.rooms,S.wallThickness,S.showCeilings,S.objects.map(o=>[o.type,o.pos,o.rot,o.scale,o.col,o.parts,o.transmission,o.architectureOpening,o.openingType,o.roomId,o.wall,o.doorOpen,o.frameColor,o.doorColor,o.glassColor]),S.lights,P.count,P.bounces]);
/** Precompute rotation matrices (Euler XYZ, same convention as three.js) for every object. */
export function prepScene(S){for(const o of S.objects){const[a,b,c]=o.rot,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b),cc=Math.cos(c),sc=Math.sin(c);
  o.R=[cb*cc,-cb*sc,sb,ca*sc+sa*sb*cc,ca*cc-sa*sb*sc,-sa*cb,sa*sc-ca*sb*cc,sa*cc+ca*sb*sc,ca*cb]}return S}
function hitRoom(s,o,d){const R=s.room,dim=[R.w,R.h,R.d];let best=null;
  for(let a=0;a<3;a++)for(let side=0;side<2;side++){if(a===2&&side)continue; // front (z=d) is open: camera side
    const id=a===0?(side?'right':'left'):a===1?(side?'ceil':'floor'):'back';if(!s.wallVis[id]||!d[a])continue;
    const t=((side?dim[a]:0)-o[a])/d[a];if(t<EPS||(best&&t>=best.t))continue;
    const p=[o[0]+d[0]*t,o[1]+d[1]*t,o[2]+d[2]*t];let ok=true;
    for(let b=0;b<3;b++)if(b!==a&&(p[b]<-1e-3||p[b]>dim[b]+1e-3))ok=false;if(!ok)continue;
    const n=[0,0,0];n[a]=side?-1:1;best={t,p,n,id,col:s.walls[id]}}
  return best}
/** Intersect an object (unit primitive in local space: sphere r=.5, box 1³, cylinder r=.5,h=1). */
function hitObj(ob,o,d){const R=ob.R,s=ob.scale,P=ob.pos,q=[o[0]-P[0],o[1]-P[1],o[2]-P[2]];
  const T=v=>[(R[0]*v[0]+R[3]*v[1]+R[6]*v[2])/s[0],(R[1]*v[0]+R[4]*v[1]+R[7]*v[2])/s[1],(R[2]*v[0]+R[5]*v[1]+R[8]*v[2])/s[2]];
  const lo=T(q),ld=T(d);let t=-1,nl;
  if(ob.type==='sphere'){const a=dot(ld,ld),b=dot(lo,ld),disc=b*b-a*(dot(lo,lo)-.25);
    if(disc>=0){const sq=Math.sqrt(disc);t=(-b-sq)/a;if(t<EPS)t=(-b+sq)/a;if(t>=EPS)nl=[lo[0]+ld[0]*t,lo[1]+ld[1]*t,lo[2]+ld[2]*t];else t=-1}}
  else if(ob.type==='box'){let t0=-1e9,t1=1e9,ax=0,sg=1;for(let i=0;i<3;i++){const inv=1/(ld[i]||1e-12),ta=(-.5-lo[i])*inv,tb=(.5-lo[i])*inv,nr=Math.min(ta,tb),fr=Math.max(ta,tb);
      if(nr>t0){t0=nr;ax=i;sg=ld[i]>0?-1:1}t1=Math.min(t1,fr)}
    if(t0<=t1&&t0>=EPS){t=t0;nl=[0,0,0];nl[ax]=sg}}
  else{const a=ld[0]*ld[0]+ld[2]*ld[2];if(a>1e-12){const b=lo[0]*ld[0]+lo[2]*ld[2],disc=b*b-a*(lo[0]*lo[0]+lo[2]*lo[2]-.25);
      if(disc>=0){const sq=Math.sqrt(disc);for(const tt of[(-b-sq)/a,(-b+sq)/a])if(tt>=EPS&&Math.abs(lo[1]+ld[1]*tt)<=.5){t=tt;nl=[lo[0]+ld[0]*tt,0,lo[2]+ld[2]*tt];break}}}
    if(ld[1])for(const c of[-.5,.5]){const tt=(c-lo[1])/ld[1];if(tt>=EPS&&(t<0||tt<t)){const x=lo[0]+ld[0]*tt,z=lo[2]+ld[2]*tt;if(x*x+z*z<=.25){t=tt;nl=[0,c>0?1:-1,0]}}}}
  if(t<0)return null;const u=[nl[0]/s[0],nl[1]/s[1],nl[2]/s[2]];
  return{t,n:norm([R[0]*u[0]+R[1]*u[1]+R[2]*u[2],R[3]*u[0]+R[4]*u[1]+R[5]*u[2],R[6]*u[0]+R[7]*u[1]+R[8]*u[2]])}}
export function intersect(s,o,d){let best=hitRoom(s,o,d);
  for(const ob of s.objects){const h=hitObj(ob,o,d);if(h&&(!best||h.t<best.t))best={t:h.t,p:[o[0]+d[0]*h.t,o[1]+d[1]*h.t,o[2]+d[2]*h.t],n:h.n,id:'obj',col:ob.col,transmission:ob.transmission||0}}
  return best}
const tintThrough=(filter,h)=>filter.map((v,i)=>v*h.transmission*h.col[i]);
function traceOpaque(s,o,d){
  let filter=[1,1,1],distance=0;
  for(let i=0;i<16;i++){
    const h=intersect(s,o,d);if(!h)return{hit:null,filter,distance};
    distance+=h.t;
    if(!h.transmission)return{hit:h,filter,distance};
    filter=tintThrough(filter,h);o=[h.p[0]+d[0]*EPS*4,h.p[1]+d[1]*EPS*4,h.p[2]+d[2]*EPS*4];
  }
  return{hit:null,filter,distance};
}
function visibilityTo(s,a,b){
  const v=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],L=Math.hypot(...v),d=[v[0]/L,v[1]/L,v[2]/L];
  let origin=a,remaining=L,filter=[1,1,1];
  for(let i=0;i<16&&remaining>EPS;i++){
    const h=intersect(s,origin,d);if(!h||h.t>=remaining-1e-3)return filter;
    if(!h.transmission)return[0,0,0];
    filter=tintThrough(filter,h);remaining-=h.t;origin=[h.p[0]+d[0]*EPS*4,h.p[1]+d[1]*EPS*4,h.p[2]+d[2]*EPS*4];
  }
  return remaining<=EPS?filter:[0,0,0];
}
const cosine=(n,r)=>{const u1=r(),u2=r(),rr=Math.sqrt(u1),ph=2*PI*u2,x=rr*Math.cos(ph),z=rr*Math.sin(ph),y=Math.sqrt(1-u1);
  const up=Math.abs(n[1])<.9?[0,1,0]:[1,0,0];const t=norm([up[1]*n[2]-up[2]*n[1],up[2]*n[0]-up[0]*n[2],up[0]*n[1]-up[1]*n[0]]);
  const b=[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]];
  return[t[0]*x+b[0]*z+n[0]*y,t[1]*x+b[1]*z+n[1]*y,t[2]*x+b[2]*z+n[2]*y]};
// ---- k-d tree (implicit, median split on widest axis) ----
export class KDTree{
  constructor(pos){this.pos=pos;this.n=pos.length/3;this.idx=Uint32Array.from({length:this.n},(_,i)=>i);this.axis=new Uint8Array(this.n);this._b(0,this.n)}
  _b(lo,hi){if(hi-lo<=1)return;const q=this.pos,mn=[1e9,1e9,1e9],mx=[-1e9,-1e9,-1e9];
    for(let i=lo;i<hi;i++){const j=this.idx[i]*3;for(let a=0;a<3;a++){const v=q[j+a];if(v<mn[a])mn[a]=v;if(v>mx[a])mx[a]=v}}
    let ax=0;for(let a=1;a<3;a++)if(mx[a]-mn[a]>mx[ax]-mn[ax])ax=a;
    this.idx.subarray(lo,hi).sort((i,j)=>q[i*3+ax]-q[j*3+ax]);const mid=(lo+hi)>>1;this.axis[mid]=ax;this._b(lo,mid);this._b(mid+1,hi)}
  /** K nearest photons within radius² r2, sorted by distance². Safe on empty tree. */
  query(p,K,r2){const ids=[],ds=[],q=this.pos,idx=this.idx,axis=this.axis;if(!this.n||K<1)return{ids,ds};
    const rec=(lo,hi)=>{if(lo>=hi)return;const mid=(lo+hi)>>1,i=idx[mid],j=i*3,ax=axis[mid];
      const dx=q[j]-p[0],dy=q[j+1]-p[1],dz=q[j+2]-p[2],d2=dx*dx+dy*dy+dz*dz;
      if(d2<r2){let k=ds.length;ds.push(d2);ids.push(i);while(k>0&&ds[k-1]>d2){ds[k]=ds[k-1];ids[k]=ids[k-1];k--}ds[k]=d2;ids[k]=i;
        if(ds.length>K){ds.pop();ids.pop()}if(ds.length===K)r2=ds[K-1]+1e-12}
      const diff=p[ax]-q[j+ax];if(diff<0){rec(lo,mid);if(diff*diff<r2)rec(mid+1,hi)}else{rec(mid+1,hi);if(diff*diff<r2)rec(lo,mid)}};
    rec(0,this.n);return{ids,ds}}}
// ---- Pass A: photon emission & tracing (area: cosine-distributed from the panel; point: uniform sphere), then map build ----
export function buildMap(S,P,seed=1){prepScene(S);const t0=performance.now(),r=rngSeed(seed),Ls=S.lights.filter(l=>l.on),tot=Ls.reduce((a,l)=>a+l.power,0),pathStride=Math.max(1,Math.ceil(P.count/20000));
  const st={emitted:0,traced:0,stored:0,absorbed:0,escaped:0,pathSegments:0},pos=[],flux=[],dir=[],depth=[],path=[],pathDepth=[];
  if(Ls.length&&P.count>0&&tot>0)for(let i=0;i<P.count;i++){st.emitted++;
    let u=r()*tot,L=Ls[Ls.length-1];for(const l of Ls){if(u<l.power){L=l;break}u-=l.power}
    let o,d;if(L.type==='area'){o=[L.pos[0]+(r()-.5)*L.size,L.pos[1]-1e-3,L.pos[2]+(r()-.5)*L.size];d=cosine([0,-1,0],r)}
    else{o=[...L.pos];const z=1-2*r(),rr=Math.sqrt(1-z*z),ph=2*PI*r();d=[rr*Math.cos(ph),z,rr*Math.sin(ph)]}
    let f=[L.color[0]*tot/P.count,L.color[1]*tot/P.count,L.color[2]*tot/P.count],keepPath=i%pathStride===0;st.traced++;      // power-proportional light choice
    for(let b=0;b<P.bounces;b++){const h=intersect(S,o,d);if(!h){st.escaped++;break}
      st.pathSegments++;if(keepPath){path.push(...o,...h.p);pathDepth.push(b)}
      if(h.transmission){f=tintThrough(f,h);o=[h.p[0]+d[0]*EPS*4,h.p[1]+d[1]*EPS*4,h.p[2]+d[2]*EPS*4];continue}
      if(b>=1){pos.push(...h.p);flux.push(...f);dir.push(...d);depth.push(b);st.stored++}        // indirect-only map; direct term is analytic
      const c=h.col,pr=(c[0]+c[1]+c[2])/3;if(r()>=pr){st.absorbed++;break}                       // Russian roulette on mean albedo
      f=[f[0]*c[0]/pr,f[1]*c[1]/pr,f[2]*c[2]/pr];
      const n=dot(h.n,d)>0?[-h.n[0],-h.n[1],-h.n[2]]:h.n;d=cosine(n,r);o=[h.p[0]+n[0]*1e-3,h.p[1]+n[1]*1e-3,h.p[2]+n[2]*1e-3]}}
  const traceMs=performance.now()-t0,t1=performance.now(),P3=new Float32Array(pos);
  return{tree:new KDTree(P3),pos:P3,flux:new Float32Array(flux),dir:new Float32Array(dir),depth:Uint8Array.from(depth),path:new Float32Array(path),pathDepth:Uint8Array.from(pathDepth),stats:{...st,pathSamples:pathDepth.length,pathStride,traceMs,buildMs:performance.now()-t1,emittedPower:tot}}}
// ---- Pass B: radiance estimate L = Σ Φ_p·ρ/π / (π r²); photons filtered by orientation and plane distance ----
export function indirect(map,p,n,col,P){const z=[0,0,0];if(!map||!map.tree.n)return z;
  const{ids}=map.tree.query(p,P.k,P.radius*P.radius);if(!ids.length)return z;
  const s=[0,0,0];let count=0,r2=0;
  for(const i of ids){const j=i*3;if(-(map.dir[j]*n[0]+map.dir[j+1]*n[1]+map.dir[j+2]*n[2])<=0)continue;
    const dx=map.pos[j]-p[0],dy=map.pos[j+1]-p[1],dz=map.pos[j+2]-p[2];
    if(Math.abs(dx*n[0]+dy*n[1]+dz*n[2])>.08)continue;
    s[0]+=map.flux[j];s[1]+=map.flux[j+1];s[2]+=map.flux[j+2];count++;r2=Math.max(r2,dx*dx+dy*dy+dz*dz)}
  if(!count)return z;
  // Each emitted photon carries total light power / emitted count. The gathered
  // flux density is converted to Lambertian radiance over the valid-neighbor disk.
  const area=PI*Math.max(r2,1e-4),scale=1/(PI*area);
  return[s[0]*col[0]*scale,s[1]*col[1]*scale,s[2]*col[2]*scale]}
export function direct(S,p,n,col){const a=[0,0,0],off=[p[0]+n[0]*1e-3,p[1]+n[1]*1e-3,p[2]+n[2]*1e-3];
  for(const L of S.lights){if(!L.on)continue;let E=0;
    if(L.type==='area'){const N=16,channel=[0,0,0];for(let k=0;k<N;k++){const u=((k%4)+.5)/4-.5,vv=(Math.floor(k/4)+.5)/4-.5,lp=[L.pos[0]+u*L.size,L.pos[1],L.pos[2]+vv*L.size];
      const v=[lp[0]-p[0],lp[1]-p[1],lp[2]-p[2]],d2=dot(v,v),w=norm(v),cr=dot(n,w),cs=w[1];if(cr<=0||cs<=0)continue;const vis=visibilityTo(S,off,lp);
      for(let c=0;c<3;c++)channel[c]+=cr*cs/d2*vis[c]*L.color[c]}
      for(let c=0;c<3;c++)a[c]+=col[c]*channel[c]*L.power/(PI*N*PI)}
    else{const v=[L.pos[0]-p[0],L.pos[1]-p[1],L.pos[2]-p[2]],d2=dot(v,v),cr=dot(n,norm(v));if(cr>0){const vis=visibilityTo(S,off,L.pos);
      for(let c=0;c<3;c++)a[c]+=col[c]*L.color[c]*vis[c]*L.power/(4*PI)*cr/d2/PI}}
  }
  return a}
/** Expand composite furniture (parts in object-local space, axis-aligned parts => diagonal scale, no shear) into primitives. */
export function flatten(S){prepScene(S);S.objects=S.objects.flatMap(o=>o.parts?o.parts.map(q=>{const s=o.scale,v=[q.pos[0]*s[0],q.pos[1]*s[1],q.pos[2]*s[2]],R=o.R;
  return{type:q.type,rot:o.rot,  scale:[q.scale[0]*s[0],q.scale[1]*s[1],q.scale[2]*s[2]],col:q.col||o.col,transmission:q.transmission||0,
    pos:[o.pos[0]+R[0]*v[0]+R[1]*v[1]+R[2]*v[2],o.pos[1]+R[3]*v[0]+R[4]*v[1]+R[5]*v[2],o.pos[2]+R[6]*v[0]+R[7]*v[1]+R[8]*v[2]]}}):[o]);return prepScene(S)}
export function shade(S,map,P,o,d,mode){const traced=traceOpaque(S,o,d),h=traced.hit,filter=traced.filter;
  for(const L of S.lights)if(L.on&&L.type==='area'&&d[1]){const t=(L.pos[1]-o[1])/d[1];     // visible emitter panel
    if(t>0&&t<traced.distance&&Math.abs(o[0]+d[0]*t-L.pos[0])<L.size/2&&Math.abs(o[2]+d[2]*t-L.pos[2])<L.size/2){
      if(mode==='indirect')return[0,0,0];
      const radiance=L.power/(PI*Math.max(L.size*L.size,1e-6));return L.color.map((c,i)=>c*radiance*filter[i])}}
  if(!h)return[.02*filter[0],.02*filter[1],.025*filter[2]];
  const n=dot(h.n,d)>0?[-h.n[0],-h.n[1],-h.n[2]]:h.n,a=[0,0,0];
  if(mode!=='indirect'){const D=direct(S,h.p,n,h.col);for(let i=0;i<3;i++)a[i]+=D[i]}
  if(mode!=='direct'){const I=indirect(map,h.p,n,h.col,P),g=P.gain??1;for(let i=0;i<3;i++)a[i]+=I[i]*g}return a.map((v,i)=>v*filter[i])}
