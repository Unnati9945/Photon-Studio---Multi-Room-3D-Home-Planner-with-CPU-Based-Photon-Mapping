import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {TransformControls} from 'three/examples/jsm/controls/TransformControls.js';
import {defaultScene,flatten,buildMap,shade,sceneKey,toneMap,luminance} from './photon.js';
import {sampleRooms,buildHouseGeometry,createHouseRoom} from './house.js';
const $=id=>document.getElementById(id),qa=(s,e=document)=>[...e.querySelectorAll(s)];
// ---------- procedural furniture library (axis-aligned parts, local space, origin = floor centre) ----------
const B=(p,s,c)=>({type:'box',pos:p,scale:s,col:c}),Y=(p,s,c)=>({type:'cylinder',pos:p,scale:s,col:c}),legs=(x,z,h,r)=>[[-x,-z],[x,-z],[-x,z],[x,z]].map(([a,b])=>Y([a,h/2,b],[r,h,r]));
const wood=[.5,.33,.2],fab=[.55,.58,.7],wh=[.82,.82,.82];
const ITEMS={Seating:{Chair:{col:wood,parts:[B([0,.45,0],[.45,.06,.45]),B([0,.75,-.2],[.45,.6,.06]),...legs(.2,.2,.42,.05)]},
 Sofa:{col:fab,parts:[B([0,.25,0],[2,.5,.9]),B([0,.7,-.35],[2,.5,.2]),B([-.9,.5,.05],[.2,.35,.8]),B([.9,.5,.05],[.2,.35,.8])]},
 Armchair:{col:[.6,.45,.4],parts:[B([0,.25,0],[.9,.5,.85]),B([0,.65,-.35],[.9,.5,.15]),B([-.4,.5,.05],[.12,.3,.75]),B([.4,.5,.05],[.12,.3,.75])]},
 Stool:{col:wood,parts:[Y([0,.45,0],[.35,.06,.35]),...legs(.12,.12,.42,.04)]}},
 Tables:{'Dining table':{col:wood,parts:[B([0,.75,0],[1.5,.06,.85]),...legs(.65,.32,.72,.06)]},'Coffee table':{col:wood,parts:[B([0,.4,0],[.9,.05,.5]),...legs(.38,.18,.38,.04)]},
 Desk:{col:wood,parts:[B([0,.74,0],[1.3,.05,.65]),B([-.55,.37,0],[.15,.74,.6]),B([.55,.37,0],[.15,.74,.6])]}},
 Bedroom:{Bed:{col:[.85,.85,.9],parts:[B([0,.25,0],[1.6,.5,2]),B([0,.58,.05],[1.5,.18,1.85],[.9,.9,.95]),B([0,.85,-.97],[1.6,.9,.08],wood)]},Wardrobe:{col:wood,parts:[B([0,1,0],[1.1,2,.55])]},Bedside:{col:wood,parts:[B([0,.25,0],[.45,.5,.4])]}},
 Living:{'TV unit':{col:wood,parts:[B([0,.25,0],[1.5,.5,.4]),B([0,.8,0],[1.1,.6,.05],[.05,.05,.06])]},Shelf:{col:wood,parts:[B([0,.9,0],[.9,1.8,.3])]},
  'Floor lamp':{col:[.9,.9,.8],parts:[Y([0,.02,0],[.25,.04,.25],[.2,.2,.2]),Y([0,.8,0],[.04,1.6,.04],[.2,.2,.2]),Y([0,1.6,0],[.35,.3,.35])]}},
 Kitchen:{Counter:{col:wh,parts:[B([0,.45,0],[1.8,.9,.6])]},Fridge:{col:[.85,.88,.9],parts:[B([0,.9,0],[.7,1.8,.7])]}},
 Bathroom:{Bathtub:{col:wh,parts:[B([0,.3,0],[1.7,.6,.75])]},Washbasin:{col:wh,parts:[B([0,.4,0],[.2,.8,.2]),B([0,.85,0],[.55,.15,.4])]}},
 Architecture:{Door:{opening:'door'},Window:{opening:'window'}},
 Decor:{Plant:{col:[.7,.4,.3],parts:[Y([0,.2,0],[.3,.4,.3]),{type:'sphere',pos:[0,.7,0],scale:[.55,.6,.55],col:[.2,.5,.2]}]},Rug:{col:[.6,.3,.3],parts:[B([0,.01,0],[2,.02,1.4])]},Column:{col:wh,parts:[Y([0,1.25,0],[.3,2.5,.3])]}},
 Basic:{Cube:{type:'box',s:[1,1,1],col:wh},Sphere:{type:'sphere',s:[1,1,1],col:wh},Cylinder:{type:'cylinder',s:[.8,1,.8],col:wh}}};
const ITEM=Object.assign({},...Object.values(ITEMS));
$('lib').innerHTML=Object.entries(ITEMS).map(([c,m])=>`<details ${c==='Seating'?'open':''}><summary>${c}</summary><div class="lib">${Object.keys(m).map(n=>`<button draggable="true" data-add="${n}">${n}</button>`).join('')}</div></details>`).join('');
const openingParts=o=>{
  const frame=o.frameColor||[.32,.19,.1],widthFrame=.07;
  if(o.openingType==='window'){
    const glass=o.glassColor||[.55,.78,.9];
    return [
      B([-.465,0,0],[widthFrame,1,1],frame),B([.465,0,0],[widthFrame,1,1],frame),
      B([0,.465,0],[1,widthFrame,1],frame),B([0,-.465,0],[1,widthFrame,1],frame),
      {...B([0,0,0],[.86,.86,.12],glass),transmission:.9}
    ];
  }
  const leaf=o.doorOpen?B([-.4,0,0],[.16,.94,.3],o.doorColor||[.48,.29,.16]):B([0,0,0],[.9,.94,.3],o.doorColor||[.48,.29,.16]);
  return [
    B([-.465,0,0],[widthFrame,1,1],frame),B([.465,0,0],[widthFrame,1,1],frame),
    B([0,.465,0],[1,widthFrame,1],frame),leaf
  ];
};
function normalizeOpening(o){
  const room=st.rooms?.find(r=>r.id===o.roomId);if(!room)return;
  const horizontal=o.wall==='back'||o.wall==='front',length=horizontal?room.w:room.d;
  o.scale[0]=cl(Number.isFinite(o.scale[0])?o.scale[0]:.9,.4,Math.max(.4,length));
  o.scale[1]=cl(Number.isFinite(o.scale[1])?o.scale[1]:2.1,.4,room.height);
  o.scale[2]=cl(Number.isFinite(o.scale[2])?o.scale[2]:.12,.04,.3);
  const start=horizontal?room.x:room.z;
  const offset=cl((horizontal?o.pos[0]:o.pos[2])-start,o.scale[0]/2,Math.max(o.scale[0]/2,length-o.scale[0]/2));
  if(horizontal){o.pos[0]=start+offset;o.pos[2]=o.wall==='back'?room.z:room.z+room.d;o.rot=[0,0,0]}
  else{o.pos[2]=start+offset;o.pos[0]=o.wall==='left'?room.x:room.x+room.w;o.rot=[0,-Math.PI/2,0]}
  const sill=o.openingType==='window'?cl(o.pos[1]-o.scale[1]/2,0,Math.max(0,room.height-o.scale[1])):0;
  o.pos[1]=sill+o.scale[1]/2;
  o.parts=openingParts(o);
}
function makeOpeningObject(type,room,wall,offset,name){
  const width=type==='door'?.9:1.4,height=type==='door'?2.1:1.1,sill=type==='window'?.85:0,horizontal=wall==='back'||wall==='front';
  const o={id:++uid,name:uniq(name|| (type==='door'?'Door':'Window')),type:'group',architectureOpening:type,openingType:type,roomId:room.id,wall,
    pos:horizontal?[room.x+offset,sill+height/2,wall==='back'?room.z:room.z+room.d]:[wall==='left'?room.x:room.x+room.w,sill+height/2,room.z+offset],
    rot:[0,0,0],scale:[width,height,.12],col:type==='door'?[.48,.29,.16]:[.55,.78,.9],frameColor:[.32,.19,.1],
    doorColor:[.48,.29,.16],glassColor:[.55,.78,.9],doorOpen:type==='door',visible:true,parts:[]};
  normalizeOpening(o);return o;
}
// ---------- state ----------
let st=defaultScene(),P={count:150000,k:60,radius:.6,bounces:5,exposure:2.2,gain:1,res:192},sel=null,tool='select',snapG=false,snapF=false,wire=false,showPh=false,cancel=false,uid=100;
let activeRoomId=null,planTool='select',planGesture=null,planScale=1,planOrigin={x:0,y:0};
let hist=[JSON.stringify(st)],hi=0,outdated=true,last=null,latestRender=null,sceneRevision=0,rendering=false;
const all=()=>[...st.objects,...st.lights],find=id=>all().find(o=>o.id===id),isL=o=>o&&!!o.power;
const get=(o,p)=>p.split('.').reduce((a,k)=>a[k],o),set=(o,p,v)=>{const k=p.split('.'),l=k.pop();k.reduce((a,x)=>a[x],o)[l]=v};
const hex=a=>'#'+a.map(v=>Math.round(Math.min(1,Math.max(0,v))*255).toString(16).padStart(2,'0')).join(''),unhex=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16)/255);
const cl=(v,a,b)=>Math.min(b,Math.max(a,v));
// ---------- three.js viewport ----------
const vp=$('vp'),rd=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});vp.append(rd.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color(0x14161b);
const cam=new THREE.PerspectiveCamera(40,1,.1,200),orbit=new OrbitControls(cam,rd.domElement);
scene.add(new THREE.AmbientLight(0xffffff,.6),new THREE.HemisphereLight(0xffffff,0x222233,.5));
const grid=new THREE.GridHelper(20,20,0x555555,0x2a2d36),axes=new THREE.AxesHelper(1.2);scene.add(grid,axes);
const roomG=new THREE.Group(),objG=new THREE.Group(),meshes=new Map();scene.add(roomG,objG);
const tc=new TransformControls(cam,rd.domElement);scene.add(tc.getHelper?tc.getHelper():tc);
const outline=new THREE.BoxHelper(new THREE.Object3D(),0xe8a33d);outline.visible=false;scene.add(outline);let phPts=null;
tc.addEventListener('dragging-changed',e=>{orbit.enabled=!e.value;if(!e.value)commit()});
tc.addEventListener('objectChange',()=>{const m=tc.object,o=find(sel);if(!o)return;const R=st.room;
  m.position.set(cl(m.position.x,0,R.w),cl(m.position.y,0,R.h),cl(m.position.z,0,R.d));       // placement bounds = real room extents
  if(snapF&&!isL(o)){m.updateMatrixWorld();m.position.y-=new THREE.Box3().setFromObject(m).min.y}
  o.pos=m.position.toArray();if(!isL(o)){o.rot=[m.rotation.x,m.rotation.y,m.rotation.z];o.scale=m.scale.toArray()}
  if(o.architectureOpening){normalizeOpening(o);m.position.fromArray(o.pos);m.rotation.set(...o.rot);m.scale.fromArray(o.scale);buildRoom()}
  props();touch()});
function resize(){const w=vp.clientWidth,h=vp.clientHeight;if(w&&h){rd.setSize(w,h);cam.aspect=w/h;cam.updateProjectionMatrix()}}new ResizeObserver(resize).observe(vp);
function setView(n){const{w,h,d}=st.room,c=new THREE.Vector3(w/2,h/2,d/2),m=Math.max(w,d,h);
  const p={persp:[w*.25,h*.9,d*1.55],top:[0,m*1.7,.01],front:[0,0,d*1.6],side:[w*1.7,0,0]}[n];cam.position.copy(c).add(new THREE.Vector3(...p));orbit.target.copy(c);orbit.update()}
function mkGeo(t){return t==='box'?new THREE.BoxGeometry(1,1,1):t==='sphere'?new THREE.SphereGeometry(.5,28,18):new THREE.CylinderGeometry(.5,.5,1,28)}
function buildRoom(){roomG.children.forEach(c=>{c.geometry.dispose();c.material.dispose()});roomG.clear();const{w,h,d}=st.room;
  if(Array.isArray(st.rooms)&&st.rooms.length){
    for(const o of buildHouseGeometry(st.rooms,st.wallThickness||.12,!!st.showCeilings,st.objects.filter(o=>o.architectureOpening))){
      const m=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshStandardMaterial({color:new THREE.Color().fromArray(o.col),wireframe:wire,side:THREE.DoubleSide,roughness:.85}));
      m.position.fromArray(o.pos);m.rotation.set(...o.rot);m.scale.fromArray(o.scale);
      m.visible=o.name.includes('ceiling')?!!st.showCeilings:(!o.name.includes('wall')||st.showHouseWalls!==false);
      m.userData.architecture=true;roomG.add(m);
    }
    grid.position.set(w/2,.003,d/2);return;
  }
  const D={floor:[w,d,[-Math.PI/2,0,0],[w/2,0,d/2]],ceil:[w,d,[Math.PI/2,0,0],[w/2,h,d/2]],back:[w,h,[0,0,0],[w/2,h/2,0]],left:[d,h,[0,Math.PI/2,0],[0,h/2,d/2]],right:[d,h,[0,-Math.PI/2,0],[w,h/2,d/2]]};
  for(const[k,[a,b,r,p]]of Object.entries(D)){if(!st.wallVis[k])continue;const m=new THREE.Mesh(new THREE.PlaneGeometry(a,b),new THREE.MeshStandardMaterial({color:new THREE.Color().fromArray(st.walls[k]),wireframe:wire,side:THREE.DoubleSide}));m.rotation.set(...r);m.position.set(...p);roomG.add(m)}
  grid.position.set(w/2,.003,d/2)}
function disposeM(m){m.traverse(c=>{c.geometry?.dispose();c.material?.dispose()})}
function upd(o){let m=meshes.get(o.id);
  if(!m){const l=isL(o);m=new THREE.Group();m.userData.id=o.id;
    if(l){const g=o.type==='area'?new THREE.PlaneGeometry(1,1).rotateX(Math.PI/2):new THREE.SphereGeometry(.12,16,10);m.add(new THREE.Mesh(g,new THREE.MeshBasicMaterial({side:2})));const pl=new THREE.PointLight(0xffffff,1,0,0);pl.position.y=-.1;m.add(pl);m.userData.pl=pl}
    else if(o.parts)o.parts.forEach(p=>{const c=new THREE.Mesh(mkGeo(p.type),new THREE.MeshStandardMaterial({roughness:.8,transparent:!!p.transmission,opacity:p.transmission ? .3 : 1,depthWrite:!p.transmission}));c.position.fromArray(p.pos);c.scale.fromArray(p.scale);c.userData.pc=p.col;m.add(c)});
    else m.add(new THREE.Mesh(mkGeo(o.type),new THREE.MeshStandardMaterial({roughness:.8})));
    objG.add(m);meshes.set(o.id,m)}
  m.position.fromArray(o.pos);m.visible=o.visible!==false;
  if(isL(o)){m.scale.set(o.type==='area'?o.size:1,1,o.type==='area'?o.size:1);m.children[0].material.color.fromArray(o.color);m.userData.pl.color.fromArray(o.color);m.userData.pl.intensity=o.on?o.power/80:0}
  else{m.rotation.set(...o.rot);m.scale.fromArray(o.scale);m.children.forEach((c,i)=>{const p=o.parts?.[i];if(p){c.position.fromArray(p.pos);c.scale.fromArray(p.scale);c.material.color.fromArray(p.col||o.col);c.material.transparent=!!p.transmission;c.material.opacity=p.transmission ? .3 : 1;c.material.depthWrite=!p.transmission}c.material.wireframe=wire})}}
function sync(){const ids=new Set(all().map(o=>o.id));for(const[id,m]of meshes)if(!ids.has(id)){if(tc.object===m)tc.detach();objG.remove(m);disposeM(m);meshes.delete(id)}
  st.objects.filter(o=>o.architectureOpening).forEach(normalizeOpening);all().forEach(upd);buildRoom();attach()}
function attach(){const m=meshes.get(sel),o=find(sel);if(!m||tool==='select'){tc.detach()}else{tc.attach(m);tc.setMode(isL(o)?'translate':tool)}
  if(o?.architectureOpening)tc.setMode(tool==='scale'?'scale':'translate');
  outline.visible=!!m;if(m)outline.setFromObject(m);tc.setTranslationSnap(snapG?.25:null);tc.setRotationSnap(snapG?Math.PI/12:null);tc.setScaleSnap(snapG?.1:null)}
function loop(){requestAnimationFrame(loop);if(vp.hidden)return;const m=meshes.get(sel);if(m)outline.setFromObject(m);rd.render(scene,cam)}
// ---------- picking ----------
let down=null;rd.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);
const ray=new THREE.Raycaster(),ndc=e=>{const r=rd.domElement.getBoundingClientRect();return new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1)};
rd.domElement.addEventListener('pointerup',e=>{if(!down||tc.dragging||tc.axis||Math.hypot(e.clientX-down[0],e.clientY-down[1])>4)return;
  ray.setFromCamera(ndc(e),cam);const hit=ray.intersectObjects([...meshes.values()].filter(m=>m.visible),true)[0];let n=hit&&hit.object;while(n&&n.userData.id===undefined)n=n.parent;select(n?n.userData.id:null)});
vp.addEventListener('dragover',e=>e.preventDefault());
vp.addEventListener('drop',e=>{e.preventDefault();const n=e.dataTransfer.getData('text');if(!ITEM[n])return;ray.setFromCamera(ndc(e),cam);const v=new THREE.Vector3();
  if(ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),0),v))addItem(n,[cl(v.x,0,st.room.w),0,cl(v.z,0,st.room.d)]);else addItem(n)});
document.addEventListener('dragstart',e=>{if(e.target.dataset?.add)e.dataTransfer.setData('text',e.target.dataset.add)});
// ---------- scene editing ----------
const uniq=n=>{const names=new Set(all().map(o=>o.name));if(!names.has(n))return n;let i=1;while(names.has(`${n}.${String(i).padStart(3,'0')}`))i++;return `${n}.${String(i).padStart(3,'0')}`};
function addArchitectureOpening(type){
  if(!st.rooms?.length){const r=createHouseRoom('Living',++uid,0,0,st.room.w,st.room.d,st.room.h);st.rooms=[r];st.wallThickness=st.wallThickness||.12;st.showHouseWalls=true;st.showCeilings=false;activeRoomId=r.id}
  const room=st.rooms.find(r=>r.id===activeRoomId)||st.rooms[0],o=makeOpeningObject(type,room,'front',room.w/2);
  st.objects.push(o);sel=o.id;sync();commit()
}
function addItem(n,pos){const d=ITEM[n],R=st.room,j=(st.objects.length%5-2)*.35,home=(st.rooms||[]).find(r=>r.id===activeRoomId);if(d.opening){addArchitectureOpening(d.opening);return}const o={id:++uid,name:uniq(n),type:d.parts?'group':d.type,pos:pos||[home?home.x+home.w/2:cl(R.w/2+j,0,R.w),d.parts?0:d.s[1]/2,home?home.z+home.d/2:R.d*.6],rot:[0,0,0],scale:d.parts?[1,1,1]:[...d.s],col:[...d.col],visible:true,...(activeRoomId?{roomId:activeRoomId}:{})};
  if(d.parts)o.parts=JSON.parse(JSON.stringify(d.parts));if(pos&&!d.parts)o.pos[1]=d.s[1]/2;st.objects.push(o);sel=o.id;sync();commit()}
function addLight(type){const R=st.room;const l={id:++uid,name:uniq(type==='area'?'Area Light':'Point Light'),type,pos:[R.w/2+.5,Math.min(R.h-.5,R.h*.7),R.d/2],size:type==='area'?1:0,power:type==='area'?60:40,color:[1,1,1],on:true,visible:true};st.lights.push(l);sel=l.id;sync();commit()}
function del(){if(!sel){if(activeRoomId&&st.rooms){st.rooms=st.rooms.filter(r=>r.id!==activeRoomId);st.objects=st.objects.filter(o=>o.roomId!==activeRoomId);activeRoomId=null;updateHouseBounds();sync();commit()}return}st.objects=st.objects.filter(o=>o.id!==sel);st.lights=st.lights.filter(o=>o.id!==sel);sel=null;sync();commit()}
function dup(){const o=find(sel);if(!o)return;const c=JSON.parse(JSON.stringify(o));c.id=++uid;c.name=uniq(o.name.replace(/\.\d+$/,''));c.pos[0]=cl(c.pos[0]+.4,0,st.room.w);(isL(c)?st.lights:st.objects).push(c);sel=c.id;sync();commit()}
function select(id){sel=id;attach();props();outl()}
function clearRenderResults(){
  for(const id of ['c-direct','c-indirect','c-gi','pathview','densityview']){
    const cv=$(id);if(cv)cv.getContext('2d').clearRect(0,0,cv.width,cv.height)
  }
  $('stats').textContent='No current render. The design or render settings changed; render the active design to refresh previews and photon analysis.';
  $('legend').innerHTML='';
}
function touch(){
  sceneRevision++;outdated=true;latestRender=null;
  $('dirty').textContent='● render outdated';
  if(rendering)cancel=true;
  if(phPts){scene.remove(phPts);phPts.geometry.dispose();phPts.material.dispose();phPts=null}
  clearRenderResults();
}
function commit(){const s=JSON.stringify(st);if(s!==hist[hi]){hist=hist.slice(0,hi+1);hist.push(s);hi=hist.length-1}touch();outl();props();room();drawPlan()}
function loadState(s){st=typeof s==='string'?JSON.parse(s):s;uid=Math.max(uid,...all().map(o=>o.id));if(!find(sel))sel=null;sync();outl();props();room();touch()}
const undo=()=>{if(hi>0){hi--;loadState(hist[hi])}},redo=()=>{if(hi<hist.length-1){hi++;loadState(hist[hi])}};
function roomRules(old){const R=st.room;for(const l of st.lights)if(l.pos[1]>=old.h-.05)l.pos[1]=R.h-.01;       // rule: ceiling lights follow the ceiling; everything is clamped inside the room
  for(const o of all()){o.pos=[cl(o.pos[0],0,R.w),cl(o.pos[1],0,R.h),cl(o.pos[2],0,R.d)]}}
// ---------- multi-room floor-plan editor ----------
function updateHouseBounds(){if(!st.rooms?.length)return;st.room.w=Math.max(st.room.w,Math.max(5,...st.rooms.map(r=>r.x+r.w))+.25);st.room.d=Math.max(st.room.d,Math.max(5,...st.rooms.map(r=>r.z+r.d))+.25);st.room.h=Math.max(2.4,...st.rooms.map(r=>r.height))}
function planPoint(e){const rect=$('floorplan').getBoundingClientRect(),px=e.clientX-rect.left,py=e.clientY-rect.top;
  return{x:(px-planOrigin.x)/planScale,z:(py-planOrigin.y)/planScale}}
function drawPlan(){const cv=$('floorplan');if(!cv||!cv.clientWidth)return;const dpr=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);
  const g=cv.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,w,h);planScale=Math.min((w-60)/st.room.w,(h-60)/st.room.d);planOrigin={x:(w-st.room.w*planScale)/2,y:(h-st.room.d*planScale)/2};
  g.strokeStyle='#2c303b';g.lineWidth=1;for(let x=0;x<=st.room.w;x++){const px=planOrigin.x+x*planScale;g.beginPath();g.moveTo(px,planOrigin.y);g.lineTo(px,planOrigin.y+st.room.d*planScale);g.stroke()}for(let z=0;z<=st.room.d;z++){const py=planOrigin.y+z*planScale;g.beginPath();g.moveTo(planOrigin.x,py);g.lineTo(planOrigin.x+st.room.w*planScale,py);g.stroke()}
  for(const r of st.rooms||[]){const x=planOrigin.x+r.x*planScale,y=planOrigin.y+r.z*planScale,rw=r.w*planScale,rh=r.d*planScale;
    g.fillStyle=hex(r.floorColor||[.5,.5,.5])+'99';g.fillRect(x,y,rw,rh);g.lineWidth=r.id===activeRoomId?3:2;g.strokeStyle=r.id===activeRoomId?'#e8a33d':'#c7cbd4';g.strokeRect(x,y,rw,rh);
    g.fillStyle='#f0f0f0';g.font='12px system-ui';g.textAlign='center';g.fillText(r.name,x+rw/2,y+rh/2-5);g.fillStyle='#b9bdc7';g.font='11px system-ui';g.fillText(`${r.w.toFixed(1)} × ${r.d.toFixed(1)} m`,x+rw/2,y+rh/2+12);
    g.fillStyle='#e8a33d';g.fillRect(x+rw-5,y+rh-5,10,10);
  }
  const p=planGesture;if(p?.mode==='draw'){const a=p.start,b=p.current,x=planOrigin.x+Math.min(a.x,b.x)*planScale,y=planOrigin.y+Math.min(a.z,b.z)*planScale;
    g.fillStyle='#e8a33d55';g.fillRect(x,y,Math.abs(a.x-b.x)*planScale,Math.abs(a.z-b.z)*planScale);g.strokeStyle='#e8a33d';g.setLineDash([5,4]);g.strokeRect(x,y,Math.abs(a.x-b.x)*planScale,Math.abs(a.z-b.z)*planScale);g.setLineDash([])}
}
function planResize(){drawPlan()}
const planCanvas=$('floorplan');
planCanvas.addEventListener('pointerdown',e=>{if(!st.rooms)return;const p=planPoint(e),rect=planCanvas.getBoundingClientRect(),px=e.clientX-rect.left,py=e.clientY-rect.top;
  if(planTool==='draw'){planGesture={mode:'draw',start:p,current:p};planCanvas.setPointerCapture(e.pointerId);drawPlan();return}
  const handleHit=[...st.rooms].reverse().find(r=>Math.hypot(px-(planOrigin.x+(r.x+r.w)*planScale),py-(planOrigin.y+(r.z+r.d)*planScale))<14);
  const hit=handleHit||[...st.rooms].reverse().find(r=>p.x>=r.x&&p.x<=r.x+r.w&&p.z>=r.z&&p.z<=r.z+r.d);
  if(!hit){activeRoomId=null;props();drawPlan();outl();return}activeRoomId=hit.id;sel=null;props();outl();
  planGesture={mode:handleHit?'resize':'move',roomId:hit.id,start:p,orig:{x:hit.x,z:hit.z,w:hit.w,d:hit.d}};planCanvas.setPointerCapture(e.pointerId);
});
planCanvas.addEventListener('pointermove',e=>{if(!planGesture)return;const p=planPoint(e),snap=v=>snapG?Math.round(v*4)/4:v;
  if(planGesture.mode==='draw'){planGesture.current={x:snap(p.x),z:snap(p.z)};drawPlan();return}
  const r=st.rooms.find(x=>x.id===planGesture.roomId),dx=p.x-planGesture.start.x,dz=p.z-planGesture.start.z;if(!r)return;
  const candidate={...r};
  if(planGesture.mode==='move'){candidate.x=Math.max(0,snap(planGesture.orig.x+dx));candidate.z=Math.max(0,snap(planGesture.orig.z+dz))}
  else{candidate.w=Math.max(1,snap(planGesture.orig.w+dx));candidate.d=Math.max(1,snap(planGesture.orig.d+dz))}
  if(!st.rooms.some(other=>other.id!==r.id&&roomsOverlap(candidate,other)))Object.assign(r,candidate);
  updateHouseBounds();buildRoom();drawPlan();
});
planCanvas.addEventListener('pointerup',e=>{if(!planGesture)return;const p=planGesture;
  if(p.mode==='draw'){const a=p.start,b=p.current||p.start,w=Math.abs(b.x-a.x),d=Math.abs(b.z-a.z),x=Math.max(0,Math.min(a.x,b.x)),z=Math.max(0,Math.min(a.z,b.z));if(w>=1&&d>=1){
      if(st.rooms.some(other=>roomsOverlap({x,z,w,d},other)))$('foot').textContent='Room overlaps existing floor-plan geometry; adjust the drag and retry.';
      else{const r=createHouseRoom($('roomtype').value,++uid,x,z,w,d,st.room.h||3);st.rooms.push(r);activeRoomId=r.id;updateHouseBounds()}}}
  planGesture=null;buildRoom();drawPlan();commit();
});
function ensureHouse(){if(!Array.isArray(st.rooms)){st.rooms=[];st.wallThickness=.12;st.showHouseWalls=false;st.showCeilings=false;st.wallVis={left:false,right:false,back:false,floor:false,ceil:false}}}
const roomsOverlap=(a,b)=>a.x<b.x+b.w-.01&&a.x+a.w>b.x+.01&&a.z<b.z+b.d-.01&&a.z+a.d>b.z+.01;
function addRoom(){ensureHouse();const type=$('roomtype').value,anchor=st.rooms.find(r=>r.id===activeRoomId),z=anchor?anchor.z:0,w=4,d=4;let x=anchor?anchor.x+anchor.w:Math.max(0,...st.rooms.map(r=>r.x+r.w));
  while(st.rooms.some(other=>roomsOverlap({x,z,w,d},other)))x+=.25;
  const r=createHouseRoom(type,++uid,x,z,w,d,st.room.h||3);st.rooms.push(r);activeRoomId=r.id;updateHouseBounds();buildRoom();drawPlan();commit()}
function addOpening(type){const r=st.rooms?.find(x=>x.id===activeRoomId);if(!r){$('foot').textContent='Select a room in the outliner or floor plan first.';return}
  const o=makeOpeningObject(type,r,'back',r.w/2);st.objects.push(o);sel=o.id;sync();drawPlan();commit()}
function sampleHouse(){
  st=defaultScene();st.rooms=sampleRooms();st.room={w:12.25,h:3,d:9.25};st.wallThickness=.12;st.showHouseWalls=false;st.showCeilings=false;
  st.wallVis={left:false,right:false,back:false,floor:false,ceil:false};st.objects=[];st.lights=[];
  const place=(name,x,z,roomId,rot=0)=>{const d=ITEM[name];st.objects.push({id:++uid,name:uniq(name),type:d.parts?'group':d.type,pos:[x,d.parts?0:(d.s?.[1]||1)/2,z],rot:[0,rot,0],scale:d.parts?[1,1,1]:[...(d.s||[1,1,1])],col:[...d.col],visible:true,roomId,...(d.parts?{parts:JSON.parse(JSON.stringify(d.parts))}:{})})};
  const ids=st.rooms.map(r=>r.id);
  place('Sofa',2.3,2.1,ids[0]);place('Rug',2.3,3.5,ids[0]);place('Floor lamp',4.1,1,ids[0]);
  place('Chair',6,2.5,ids[1]);place('Bed',9.5,2.6,ids[2]);place('Bedside',11,1.1,ids[2]);place('Wardrobe',11,4,ids[2]);
  place('Counter',1.5,6.3,ids[3]);place('Fridge',3.7,7.4,ids[3]);place('Dining table',7,7,ids[4]);place('Chair',5.8,7,ids[4]);place('Chair',8,7,ids[4]);
  place('Bathtub',10.5,7.9,ids[5]);place('Washbasin',11.3,5.8,ids[5]);
  st.lights=[
    {id:++uid,name:'Living area light',type:'area',pos:[2.5,2.85,2.5],size:1.3,power:65,color:[1,.92,.8],on:true,visible:true},
    {id:++uid,name:'Hall light',type:'point',pos:[6,2.6,2.5],size:0,power:35,color:[1,1,1],on:true,visible:true},
    {id:++uid,name:'Bedroom light',type:'area',pos:[9.5,2.85,2.5],size:1,power:55,color:[.82,.88,1],on:true,visible:true},
    {id:++uid,name:'Kitchen light',type:'point',pos:[2.5,2.6,7],size:0,power:45,color:[1,1,1],on:true,visible:true},
    {id:++uid,name:'Dining light',type:'area',pos:[7,2.85,7],size:1,power:50,color:[1,.88,.72],on:true,visible:true},
    {id:++uid,name:'Bathroom light',type:'point',pos:[10.5,2.6,7],size:0,power:30,color:[.9,.95,1],on:true,visible:true}
  ];
  st.objects.push(
    makeOpeningObject('door',st.rooms[0],'right',2.5,'Living-hall door'),
    makeOpeningObject('door',st.rooms[1],'right',2.5,'Hall-bedroom door'),
    makeOpeningObject('door',st.rooms[3],'right',2,'Kitchen-dining door'),
    makeOpeningObject('door',st.rooms[4],'right',2,'Dining-bathroom door'),
    makeOpeningObject('window',st.rooms[0],'back',2.5,'Living room window'),
    makeOpeningObject('window',st.rooms[3],'front',2.5,'Kitchen window'),
    makeOpeningObject('window',st.rooms[2],'right',2.5,'Bedroom window')
  );
  activeRoomId=ids[0];sel=null;updateHouseBounds();loadState(st);setView('top');drawPlan();commit();$('foot').textContent='Sample six-room home loaded · 6 rooms · 6 lights';
}
// ---------- panels ----------
const v3=(l,k,a,s,d)=>`<div class="g3"><b>${l}</b>${[0,1,2].map(i=>`<input type="number" step="${s}" value="${(d?a[i]*180/Math.PI:a[i]).toFixed(2)}" data-o="${k}.${i}" ${d?'data-deg=1':''}>`).join('')}</div>`;
const fld=(l,k,v,t,a='',at='data-o')=>`<label>${l}<input type="${t}" value="${t==='color'?hex(v):v}" ${t==='checkbox'&&v?'checked':''} ${at}="${k}" ${a}></label>`;
function props(){const o=find(sel),el=$('props'),r=(st.rooms||[]).find(x=>x.id===activeRoomId);if(!o&&r){el.innerHTML=`<h4>${r.type}</h4>${fld('Name','name',r.name,'text','','data-r')}${['x','z','w','d','height'].map(k=>fld({x:'X',z:'Z',w:'Width',d:'Depth',height:'Height'}[k],k,r[k],'number','step=.25 min=1','data-r')).join('')}${fld('Wall colour','wallColor',r.wallColor,'color','','data-r')}${fld('Floor colour','floorColor',r.floorColor,'color','','data-r')}<p class="mu">Rooms that share an edge receive a real doorway opening.</p>`;return}if(!o){el.innerHTML='<p class="mu">Select an object, light, or room.</p>';return}
  if(o.architectureOpening){
    const walls=['back','front','left','right'].map(w=>`<option value="${w}" ${o.wall===w?'selected':''}>${w}</option>`).join('');
    const rooms=(st.rooms||[]).map(x=>`<option value="${x.id}" ${o.roomId===x.id?'selected':''}>${x.name}</option>`).join('');
    el.innerHTML=`<h4>${o.openingType} · wall opening</h4>${fld('Name','name',o.name,'text')}<label>Room<select data-o="roomId">${rooms}</select></label><label>Wall<select data-o="wall">${walls}</select></label>${v3('Position','pos',o.pos,.1)}<div class="g3"><b>Size</b>${['Width','Height','Thickness'].map((n,i)=>`<input aria-label="${n}" type="number" step=.05 min=.04 value="${o.scale[i].toFixed(2)}" data-o="scale.${i}">`).join('')}</div>${o.openingType==='door'?fld('Open','doorOpen',o.doorOpen,'checkbox'):''}${fld('Frame colour','frameColor',o.frameColor,'color')}${o.openingType==='door'?fld('Door colour','doorColor',o.doorColor,'color'):fld('Glass tint','glassColor',o.glassColor,'color')}<p class="mu">Move or resize this object to reposition its cut in the wall. Window glass transmits tinted light.</p>`;
    return;
  }
  el.innerHTML=fld('Name','name',o.name,'text')+v3('Position','pos',o.pos,.1)+(isL(o)?fld('Color','color',o.color,'color')+fld('Power (W)','power',o.power,'number','step=5 min=0')+(o.type==='area'?fld('Size (m)','size',o.size,'number','step=.1 min=.1'):'')+fld('Enabled','on',o.on,'checkbox'):v3('Rotation°','rot',o.rot,5,1)+v3('Scale','scale',o.scale,.1)+fld('Colour','col',o.col,'color')+'<p class="mu">Renderer material: Lambertian (colour only).</p>')}
function room(){const r=st.room;if(st.rooms?.length){$('wallthickness').value=st.wallThickness||.12;$('room').innerHTML=fld('Show walls','showHouseWalls',st.showHouseWalls!==false,'checkbox','','data-s')+fld('Show ceilings','showCeilings',!!st.showCeilings,'checkbox','','data-s')+'<p class="mu">House footprint: '+r.w+' × '+r.d+' m · '+st.rooms.length+' rooms</p><button data-act="samplehouse">Load sample home</button>';return}
  $('room').innerHTML=['w','h','d'].map((k,i)=>fld(['Width','Height','Depth'][i],'room.'+k,r[k],'range','min=3 max=10 step=.1','data-s')+`<div class="mu" style="text-align:right">${r[k].toFixed(1)} m</div>`).join('')+
  Object.keys(st.walls).map(k=>fld(k,'walls.'+k,st.walls[k],'color','','data-s')+fld(' visible','wallVis.'+k,st.wallVis[k],'checkbox','','data-s')).join('')}
function pars(){$('par').innerHTML=[['Photons','count',10000,500000,10000],['Max bounces','bounces',1,10,1],['kNN count','k',5,200,1],['Radius (m)','radius',.1,2,.05],['Exposure','exposure',.5,6,.1],['Indirect gain','gain',0,4,.1],['Resolution','res',96,384,32]].map(([l,k,a,b,s])=>fld(`${l} ${P[k]}`,k,P[k],'range',`min=${a} max=${b} step=${s}`,'data-p')).join('')+
  '<div style="display:flex;gap:4px;margin-top:6px"><button data-act="qprev">Preview</button><button data-act="qfinal">Final</button></div>'}
function outl(){const f=$('q').value.toLowerCase(),roomRows=(st.rooms||[]).filter(r=>r.name.toLowerCase().includes(f)).map(r=>{const children=all().filter(o=>o.roomId===r.id&&o.name.toLowerCase().includes(f)).map(o=>`<div class="ol ${o.id===sel?'sel':''}" data-id="${o.id}" style="margin-left:12px"><span class="eye" data-eye="${o.id}">${o.visible===false?'◌':'●'}</span><span>${isL(o)?'☀ ':''}${o.name}</span></div>`).join('');return `<div class="ol ${r.id===activeRoomId?'sel':''}" data-room="${r.id}"><span>▱</span><span>${r.name}</span></div>${children}`}).join('');
  const items=all().filter(o=>!o.roomId&&o.name.toLowerCase().includes(f)).map(o=>`<div class="ol ${o.id===sel?'sel':''}" data-id="${o.id}"><span class="eye" data-eye="${o.id}">${o.visible===false?'◌':'●'}</span><span>${isL(o)?'☀ ':''}${o.name}</span></div>`).join('');
  $('ol').innerHTML=(roomRows?`<small class="mu">ROOM HIERARCHY</small>${roomRows}`:'')+(items?`<small class="mu">OBJECTS &amp; LIGHTS</small>${items}`:'')||'<span class="mu">Empty</span>'}
$('q').oninput=outl;$('ol').onclick=e=>{const ey=e.target.dataset.eye;if(ey){const o=find(+ey);o.visible=o.visible===false;sync();commit();return}const rr=e.target.closest('[data-room]');if(rr){activeRoomId=+rr.dataset.room;sel=null;props();drawPlan();outl();return}const r=e.target.closest('.ol');if(r&&r.dataset.id)select(+r.dataset.id)};
document.addEventListener('change',e=>{const t=e.target;let root,path;if(t.dataset.o){root=find(sel);path=t.dataset.o}else if(t.dataset.s){root=st;path=t.dataset.s}else if(t.dataset.p){root=P;path=t.dataset.p}else if(t.dataset.r){root=(st.rooms||[]).find(r=>r.id===activeRoomId);path=t.dataset.r}else return;
  let v=t.type==='color'?unhex(t.value):t.type==='checkbox'?t.checked:t.type==='text'||t.type==='select-one'?t.value:parseFloat(t.value);if(typeof v==='number'&&isNaN(v))return;if(t.dataset.deg)v*=Math.PI/180;
  if(root?.architectureOpening&&path==='roomId')v=Number(v);
  const old={...st.room},previous=root?.[path];set(root,path,v);if(t.dataset.p){pars();touch();return}if(t.dataset.r){
    if(['x','z','w','d'].includes(path)&&st.rooms.some(other=>other.id!==root.id&&roomsOverlap(root,other))){root[path]=previous;props();$('foot').textContent='Room edit rejected: rooms cannot overlap.';return}
    updateHouseBounds();sync();commit();return}
  if(root?.architectureOpening){normalizeOpening(root);sync();commit();return}
  if(t.dataset.o==='col'&&root?.parts)root.parts.forEach(part=>{part.col=[...v]});
  if(path==='showHouseWalls'||path==='showCeilings'){sync();commit();return}if(path.startsWith('room.'))roomRules(old);sync();commit()});
document.addEventListener('input',e=>{if(e.target.dataset.s?.startsWith('room.')||e.target.dataset.p)e.target.dispatchEvent(new Event('change',{bubbles:true}))});
document.getElementById('wallthickness').addEventListener('change',e=>{st.wallThickness=cl(parseFloat(e.target.value)||.12,.05,.5);buildRoom();touch();commit()});
// ---------- rendering (CPU photon mapping; chunked so the UI stays live; cancellable) ----------
const tick=()=>new Promise(r=>setTimeout(r)),fmt=v=>v.toFixed(0)+' ms';
function toRender(state){const S=JSON.parse(JSON.stringify(state));S.objects=S.objects.filter(o=>o.visible!==false);S.lights=S.lights.filter(l=>l.visible!==false);
  if(S.rooms?.length)S.objects.push(...buildHouseGeometry(S.rooms,S.wallThickness||.12,!!S.showCeilings,S.objects.filter(o=>o.architectureOpening)));return flatten(S)}
function ensureMap(S,params){const key=sceneKey(S,params);if(last&&last.key===key)return{map:last.map,reuse:true};return{map:buildMap(S,params),key,reuse:false}}
function basis(S){
  let x0=0,x1=S.room.w,z0=0,z1=S.room.d,y0=0,y1=S.room.h;
  if(S.rooms?.length){x0=Math.min(...S.rooms.map(r=>r.x));x1=Math.max(...S.rooms.map(r=>r.x+r.w));z0=Math.min(...S.rooms.map(r=>r.z));z1=Math.max(...S.rooms.map(r=>r.z+r.d));y1=Math.max(...S.rooms.map(r=>r.height))}
  for(const o of S.objects){const r=Math.max(...o.scale)/2;x0=Math.min(x0,o.pos[0]-r);x1=Math.max(x1,o.pos[0]+r);y0=Math.min(y0,o.pos[1]-r);y1=Math.max(y1,o.pos[1]+r);z0=Math.min(z0,o.pos[2]-r);z1=Math.max(z1,o.pos[2]+r)}
  for(const l of S.lights){x0=Math.min(x0,l.pos[0]-l.size/2);x1=Math.max(x1,l.pos[0]+l.size/2);y0=Math.min(y0,l.pos[1]);y1=Math.max(y1,l.pos[1]);z0=Math.min(z0,l.pos[2]-l.size/2);z1=Math.max(z1,l.pos[2]+l.size/2)}
  const center=new THREE.Vector3((x0+x1)/2,(y0+y1)/2,(z0+z1)/2),forward=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
  cam.getWorldDirection(forward);if(forward.lengthSq()<1e-8)forward.set(0,0,-1);forward.normalize();
  const right=new THREE.Vector3().crossVectors(forward,up).normalize();if(right.lengthSq()<1e-8)right.set(1,0,0);
  up.crossVectors(right,forward).normalize();
  const radius=Math.max(.5,Math.hypot(x1-x0,y1-y0,z1-z0)/2),t=Math.tan(cam.fov*Math.PI/360);
  const origin=center.clone().addScaledVector(forward,-radius/Math.sin(Math.atan(t))*1.12);
  return{o:origin.toArray(),r:right.toArray(),u:up.toArray(),f:forward.toArray(),t}
}
async function renderMode(S,map,mode,cv,B,params){const n=params.res;cv.width=cv.height=n;const c2=cv.getContext('2d'),img=c2.createImageData(n,n),metrics={linearMean:0,displayMean:0,linearPeak:0,litPixels:0,pixels:0};let ts=performance.now();
  for(let y=0;y<n&&!cancel;y++){for(let x=0;x<n;x++){const a=((x+.5)/n*2-1)*B.t,b=(1-(y+.5)/n*2)*B.t;let d=[B.f[0]+B.r[0]*a+B.u[0]*b,B.f[1]+B.r[1]*a+B.u[1]*b,B.f[2]+B.r[2]*a+B.u[2]*b];const l=Math.hypot(...d);d=d.map(v=>v/l);
      const c=shade(S,map,params,B.o,d,mode),display=toneMap(c,params.exposure),rawLum=luminance(c),displayLum=luminance(display),i=(y*n+x)*4;
      metrics.linearMean+=rawLum;metrics.displayMean+=displayLum;metrics.linearPeak=Math.max(metrics.linearPeak,rawLum);if(rawLum>1e-6)metrics.litPixels++;metrics.pixels++;
      for(let k=0;k<3;k++)img.data[i+k]=Math.round(display[k]*255);img.data[i+3]=255}
    if(performance.now()-ts>12){c2.putImageData(img,0,0);$('bar').firstChild.style.width=(100*y/n)+'%';await tick();ts=performance.now()}}
  c2.putImageData(img,0,0);const pixels=metrics.pixels;return Object.fromEntries(Object.entries(metrics).map(([k,v])=>[k,['litPixels','pixels','linearPeak'].includes(k)?v:v/Math.max(1,pixels)]))}
async function render(modes){if(rendering)return;rendering=true;cancel=false;const revision=sceneRevision;
  latestRender=null;outdated=true;$('dirty').textContent='● render pending';clearRenderResults();
  qa('[data-act="render"],[data-act="renderall"]').forEach(b=>b.disabled=true);$('cancel').disabled=false;$('bar').hidden=false;if(!$('bar').firstChild)$('bar').innerHTML='<i></i>';
  const design=JSON.parse(JSON.stringify(st)),S=toRender(design),t0=performance.now();try{
    P.count=cl(P.count|0,1000,1e6);P.radius=Math.max(P.radius,.02);P.k=Math.max(P.k|0,3);P.res=cl(P.res|0,32,512);
    const params={...P};
    if(!S.lights.some(l=>l.on&&l.power>0))throw new Error('No enabled light with power > 0 – add or enable a light.');
    const B=basis(S);qa('[data-tab="rv"]')[0].click();$('foot').textContent='Tracing photons…';await tick();const e=ensureMap(S,params);
    if(!e.reuse)last={key:e.key,map:e.map,S};
    const modeStats={};for(const m of modes){$('foot').textContent='Rendering '+m+'…';modeStats[m]=await renderMode(S,e.map,m,$('c-'+m),B,params);if(cancel)break}
    if(cancel||revision!==sceneRevision){latestRender=null;outdated=true;$('dirty').textContent='● render outdated';clearRenderResults();$('foot').textContent='Render cancelled or design changed; no stale results were kept.';return}
    const s=e.map.stats,elapsed=performance.now()-t0;last.info={s,reuse:e.reuse,P:params,total:elapsed,cancel:false,modes:modeStats};
    const sceneSummary={rooms:design.rooms?.length||1,objects:design.objects.filter(o=>o.visible!==false).length,lights:design.lights.filter(l=>l.visible!==false).length};
    latestRender={S,map:e.map,info:last.info,sceneSummary,renderedAt:new Date().toISOString()};outdated=false;$('dirty').textContent='';
    $('foot').textContent=`Done · emitted ${s.emitted} · stored ${s.stored} · trace ${fmt(s.traceMs)} · build ${fmt(s.buildMs)} · map ${e.reuse?'reused':'rebuilt'} · total ${fmt(performance.now()-t0)}`;analysis();if(showPh)photons()
  }catch(err){latestRender=null;outdated=true;$('dirty').textContent='● render outdated';clearRenderResults();$('foot').textContent='Render error: '+err.message}
  finally{rendering=false;qa('[data-act="render"],[data-act="renderall"]').forEach(b=>b.disabled=false);$('cancel').disabled=true;$('bar').hidden=true}}
function analysis(){if(!latestRender){$('stats').textContent='No current render. Render the active design to create current previews and photon analysis.';return}
  const{S,map,info,renderedAt,sceneSummary}=latestRender,{s,reuse,P:p,total,modes}=info,h={},flux=[0,0,0];for(const d of map.depth)h[d]=(h[d]||0)+1;
  for(let i=0;i<map.flux.length;i+=3){flux[0]+=map.flux[i];flux[1]+=map.flux[i+1];flux[2]+=map.flux[i+2]}
  const modeNames={direct:'Direct only',indirect:'Indirect only',gi:'Direct + Indirect'};
  const modeText=Object.entries(modes).map(([name,v])=>`${modeNames[name]}: mean linear luminance ${v.linearMean.toExponential(3)} · mean displayed ${v.displayMean.toFixed(3)} · peak ${v.linearPeak.toFixed(3)} · lit pixels ${v.litPixels}/${v.pixels}`).join('\n');
  const pathStride=Math.max(1,Math.ceil(map.pathDepth.length/30000)),pathDisplayed=Math.ceil(map.pathDepth.length/pathStride);
  $('stats').textContent=`Latest render: ${renderedAt}\nDesign: ${sceneSummary.rooms} room(s), ${sceneSummary.objects} object(s), ${sceneSummary.lights} light(s)\nRender status: complete\nModes rendered: ${Object.keys(modes).map(k=>modeNames[k]).join(', ')}\nEmitted photons: ${s.emitted}\nTraced photons: ${s.traced}\nStored photon hits: ${s.stored}\nStored flux RGB sum: ${flux.map(v=>v.toExponential(3)).join(', ')}\nTraced path segments: ${s.pathSegments}\nPath segments stored for analysis: ${s.pathSamples} (emitted-photon stride ${s.pathStride})\nPath segments plotted: ${pathDisplayed}\nAbsorbed paths: ${s.absorbed}\nEscaped paths: ${s.escaped}\nTrace time: ${fmt(s.traceMs)}\nk-d tree build: ${fmt(s.buildMs)}\nRender total: ${fmt(total)}\nPhoton map: ${reuse?'reused':'rebuilt'}\nSettings: photons=${p.count} bounces=${p.bounces} k=${p.k} radius=${p.radius} exposure=${p.exposure} gain=${p.gain} resolution=${p.res}\nStored hits by bounce: ${Object.entries(h).map(([d,c])=>`${d}: ${c}`).join('  ')}\n\n${modeText}`;
  $('legend').innerHTML=Object.keys(h).map(d=>`<span style="margin-right:10px"><i class="sw" style="background:#${depthCol(+d).getHexString()}"></i>bounce ${d} (${h[d]})</span>`).join('');
  drawPhotonViews(S,map)}
function drawPhotonViews(S,map){
  const room=S.room||{w:5,d:5},bounds={x0:Infinity,z0:Infinity,x1:-Infinity,z1:-Infinity};
  const include=(x,z)=>{bounds.x0=Math.min(bounds.x0,x);bounds.x1=Math.max(bounds.x1,x);bounds.z0=Math.min(bounds.z0,z);bounds.z1=Math.max(bounds.z1,z)};
  if(S.rooms?.length)for(const r of S.rooms){include(r.x,r.z);include(r.x+r.w,r.z+r.d)}
  else{include(0,0);include(room.w,room.d)}
  for(let i=0;i<map.tree.n;i++)include(map.pos[i*3],map.pos[i*3+2]);
  for(let i=0;i<map.pathDepth.length;i++){include(map.path[i*6],map.path[i*6+2]);include(map.path[i*6+3],map.path[i*6+5])}
  const margin=Math.max(.25,Math.max(bounds.x1-bounds.x0,bounds.z1-bounds.z0)*.03);
  bounds.x0-=margin;bounds.x1+=margin;bounds.z0-=margin;bounds.z1+=margin;
  const width=bounds.x1-bounds.x0,height=bounds.z1-bounds.z0;
  const prepare=id=>{const cv=$(id),dpr=window.devicePixelRatio||1,w=cv.clientWidth||640,h=cv.clientHeight||420;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);const g=cv.getContext('2d');g.setTransform(dpr,0,0,dpr,0,0);g.fillStyle='#101218';g.fillRect(0,0,w,h);return{cv,g,w,h}};
  const project=(x,z,v)=>[16+(x-bounds.x0)/width*(v.w-32),v.h-16-(z-bounds.z0)/height*(v.h-32)];
  const pathView=prepare('pathview');pathView.g.strokeStyle='#343945';pathView.g.lineWidth=1;
  for(let x=Math.ceil(bounds.x0);x<=bounds.x1;x+=1){const a=project(x,bounds.z0,pathView),b=project(x,bounds.z1,pathView);pathView.g.beginPath();pathView.g.moveTo(...a);pathView.g.lineTo(...b);pathView.g.stroke()}
  for(let z=Math.ceil(bounds.z0);z<=bounds.z1;z+=1){const a=project(bounds.x0,z,pathView),b=project(bounds.x1,z,pathView);pathView.g.beginPath();pathView.g.moveTo(...a);pathView.g.lineTo(...b);pathView.g.stroke()}
  const footprints=S.rooms?.length?S.rooms:[{name:'Room',x:0,z:0,w:room.w,d:room.d}];
  pathView.g.lineWidth=2;pathView.g.strokeStyle='#e8a33d';pathView.g.fillStyle='#e8a33d18';
  for(const r of footprints){const a=project(r.x,r.z,pathView),b=project(r.x+r.w,r.z+r.d,pathView);pathView.g.fillRect(a[0],b[1],b[0]-a[0],a[1]-b[1]);pathView.g.strokeRect(a[0],b[1],b[0]-a[0],a[1]-b[1]);pathView.g.fillStyle='#d8dbe3';pathView.g.font='10px system-ui';pathView.g.fillText(r.name||r.type||'Room',(a[0]+b[0])/2,(a[1]+b[1])/2);pathView.g.fillStyle='#e8a33d18'}
  const segmentCount=map.pathDepth.length,step=Math.max(1,Math.ceil(segmentCount/30000));
  for(let i=0;i<segmentCount;i+=step){const j=i*6,a=project(map.path[j],map.path[j+2],pathView),b=project(map.path[j+3],map.path[j+5],pathView),color=depthCol(map.pathDepth[i]);pathView.g.strokeStyle=`rgba(${Math.round(color.r*255)},${Math.round(color.g*255)},${Math.round(color.b*255)},.18)`;pathView.g.beginPath();pathView.g.moveTo(...a);pathView.g.lineTo(...b);pathView.g.stroke()}
  const pointStep=Math.max(1,Math.ceil(map.tree.n/20000));
  for(let i=0;i<map.tree.n;i+=pointStep){const j=i*3,[x,y]=project(map.pos[j],map.pos[j+2],pathView),c=depthCol(map.depth[i]);pathView.g.fillStyle=`rgb(${Math.round(c.r*255)},${Math.round(c.g*255)},${Math.round(c.b*255)})`;pathView.g.fillRect(x-1,y-1,2,2)}
  pathView.g.fillStyle='#b8bdc8';pathView.g.font='11px system-ui';pathView.g.fillText(`Actual traced segments: ${safenum(map.stats.pathSegments)} · displayed: ${segmentCount}`,8,14);
  const density=prepare('densityview'),bins=64,counts=new Uint32Array(bins*bins);let max=0;
  for(let i=0;i<map.tree.n;i++){const j=i*3,bx=cl(Math.floor((map.pos[j]-bounds.x0)/width*bins),0,bins-1),bz=cl(Math.floor((map.pos[j+2]-bounds.z0)/height*bins),0,bins-1),index=bz*bins+bx;counts[index]++;max=Math.max(max,counts[index])}
  const cellW=(density.w-32)/bins,cellH=(density.h-32)/bins,denom=Math.log1p(max||1);
  for(let z=0;z<bins;z++)for(let x=0;x<bins;x++){const count=counts[z*bins+x];if(!count)continue;const t=Math.log1p(count)/denom,r=Math.round(35+220*t),g=Math.round(65+120*(1-Math.abs(t-.55)*1.8)),b=Math.round(190*(1-t));density.g.fillStyle=`rgb(${r},${g},${b})`;density.g.fillRect(16+x*cellW,density.h-16-(z+1)*cellH,Math.ceil(cellW),Math.ceil(cellH))}
  density.g.strokeStyle='#747b89';density.g.strokeRect(16,16,density.w-32,density.h-32);density.g.fillStyle='#d8dbe3';density.g.font='11px system-ui';density.g.fillText(`Stored hits: ${map.tree.n} · max per cell: ${max}`,8,14);
}
const safenum=value=>Number(value||0).toLocaleString();
const depthCol=d=>new THREE.Color().setHSL(Math.max(0,.62-.1*d),.9,.55);
async function photons(){if(phPts){scene.remove(phPts);phPts.geometry.dispose();phPts.material.dispose();phPts=null}if(!showPh)return;
  if(!last||outdated){const S=toRender();if(!S.lights.some(l=>l.on)){$('foot').textContent='3D photons: no enabled light';return}const e=ensureMap(S);if(!e.reuse)last={key:e.key,map:e.map,S}}
  const m=last.map,n=m.tree.n,step=Math.max(1,Math.ceil(n/60000)),pos=[],col=[];for(let i=0;i<n;i+=step){pos.push(m.pos[i*3],m.pos[i*3+1],m.pos[i*3+2]);const c=depthCol(m.depth[i]);col.push(c.r,c.g,c.b)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));
  phPts=new THREE.Points(g,new THREE.PointsMaterial({size:.04,vertexColors:true,transparent:true,opacity:outdated?.25:1}));scene.add(phPts);$('foot').textContent=`3D photons: showing ${pos.length/3} of ${n} stored records (colour = bounce depth)`}
// ---------- actions ----------
const dl=(h,n)=>Object.assign(document.createElement('a'),{href:h,download:n}).click();
const ACT={new(){if(confirm('Discard the current scene?')){const s=defaultScene();s.objects=[];sel=null;loadState(s);hist=[JSON.stringify(st)];hi=0}},reset(){if(confirm('Reset to the demo Cornell box?')){sel=null;loadState(defaultScene());commit()}},
 save(){dl(URL.createObjectURL(new Blob([JSON.stringify({version:3,state:st,params:P,camera:{pos:cam.position.toArray(),target:orbit.target.toArray()}},null,1)])),'photonstudio-scene.json')},load(){$('file').click()},
 png(){const c=$('c-gi');if(!c.width||c.width<20){$('foot').textContent='Render first, then export.';return}c.toBlob(b=>dl(URL.createObjectURL(b),'photonstudio-render.png'))},
 undo,redo,dup,del,addpoint:()=>addLight('point'),addarea:()=>addLight('area'),wire(){wire=!wire;sync()},photons(){showPh=!showPh;photons()},snapg(){snapG=!snapG;$('sg').classList.toggle('on',snapG);attach()},snapf(){snapF=!snapF;$('sf').classList.toggle('on',snapF)},
 render:()=>render(['gi']),renderall:()=>render(['direct','indirect','gi']),cancel(){cancel=true},qprev(){Object.assign(P,{count:60000,res:160});pars();touch()},qfinal(){Object.assign(P,{count:300000,res:320,k:80});pars();touch()},
 samplehouse:sampleHouse,addroom:addRoom,adddoor:()=>addOpening('door'),addwindow:()=>addOpening('window')};
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;
  if(d.act)ACT[d.act]();else if(d.add){if(ITEM[d.add])addItem(d.add)}else if(d.view)setView(d.view);
  else if(d.tool){tool=d.tool;qa('[data-tool]').forEach(x=>x.classList.toggle('on',x===b));attach()}
  else if(d.planTool){planTool=d.planTool;if(planTool==='draw'){ensureHouse();drawPlan()}qa('[data-plan-tool]').forEach(x=>x.classList.toggle('on',x===b));$('foot').textContent=planTool==='draw'?'Floor plan · drag to draw a room':'Floor plan · drag rooms to move; resize using lower-right handle'}
  else if(d.tab){qa('.tab').forEach(x=>x.classList.toggle('on',x===b));for(const t of['vp','plan','rv','an'])$(t).hidden=t!==d.tab;document.body.classList.toggle('focus-view',d.tab==='rv'||d.tab==='an');if(d.tab==='vp')resize();if(d.tab==='plan')requestAnimationFrame(drawPlan);if(d.tab==='an')analysis()}});
$('file').onchange=async e=>{try{const j=JSON.parse(await e.target.files[0].text()),s=j.state;if(!s||!s.room||!s.walls||!Array.isArray(s.objects)||!Array.isArray(s.lights))throw new Error('not a PhotonStudio v3 scene');
  s.wallVis=s.wallVis||{left:1,right:1,back:1,floor:1,ceil:1};Object.assign(P,j.params||{});if(j.camera){cam.position.fromArray(j.camera.pos);orbit.target.fromArray(j.camera.target);orbit.update()}sel=null;loadState(s);pars();commit()}catch(err){$('foot').textContent='Load failed: '+err.message}e.target.value=''};
addEventListener('keydown',e=>{if(/INPUT|SELECT/.test(e.target.tagName))return;const k=e.key.toLowerCase();
  if(e.ctrlKey&&k==='z'){e.preventDefault();undo()}else if(e.ctrlKey&&k==='y'){e.preventDefault();redo()}else if(e.ctrlKey&&k==='d'){e.preventDefault();dup()}else if(k==='delete')del();
  else{const t={q:'select',w:'translate',e:'rotate',r:'scale'}[k];if(t)qa(`[data-tool="${t}"]`)[0].click()}});
resize();new ResizeObserver(planResize).observe($('plan'));setView('persp');sync();outl();props();room();pars();drawPlan();loop();
