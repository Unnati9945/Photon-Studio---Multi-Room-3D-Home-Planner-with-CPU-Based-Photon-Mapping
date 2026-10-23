(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="186",ds={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gu=0,Ol=1,_u=2,Fr=1,xu=2,Us=3,Fi=0,sn=1,pn=2,Jn=0,zs=1,Bl=2,zl=3,Hl=4,vu=5,os=100,Mu=101,Su=102,yu=103,Eu=104,bu=200,Tu=201,wu=202,Au=203,ah=204,oh=205,Ru=206,Cu=207,Pu=208,Lu=209,Du=210,Iu=211,Uu=212,Nu=213,Fu=214,so=0,ro=1,ao=2,Hs=3,oo=4,lo=5,co=6,ho=7,lh=0,Ou=1,Bu=2,Un=0,ch=1,hh=2,uh=3,dh=4,fh=5,ph=6,mh=7,gh=300,Oi=301,_s=302,Sa=303,ya=304,da=306,uo=1e3,$n=1001,fo=1002,Ge=1003,zu=1004,ir=1005,$e=1006,Ea=1007,Ci=1008,cn=1009,_h=1010,xh=1011,Gs=1012,tl=1013,Fn=1014,Dn=1015,On=1016,el=1017,nl=1018,ks=1020,vh=35902,Mh=35899,Sh=1021,yh=1022,Sn=1023,ti=1026,Pi=1027,Eh=1028,il=1029,Bi=1030,sl=1031,rl=1033,Or=33776,Br=33777,zr=33778,Hr=33779,po=35840,mo=35841,go=35842,_o=35843,xo=36196,vo=37492,Mo=37496,So=37488,yo=37489,Kr=37490,Eo=37491,bo=37808,To=37809,wo=37810,Ao=37811,Ro=37812,Co=37813,Po=37814,Lo=37815,Do=37816,Io=37817,Uo=37818,No=37819,Fo=37820,Oo=37821,Bo=36492,zo=36494,Ho=36495,Go=36283,ko=36284,Jr=36285,Vo=36286,Hu=3200,Wo=0,Gu=1,fi="",dn="srgb",Qr="srgb-linear",jr="linear",ne="srgb",ba=7680,ku=519,Vu=512,Wu=513,Xu=514,al=515,Yu=516,qu=517,ol=518,$u=519,Zu=35044,Gl="300 es",In=2e3,Vs=2001;function Ku(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){const i=ta("canvas");return i.style.display="block",i}const kl={};function Vl(...i){const t="THREE."+i.shift();console.log(t,...i)}function bh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=bh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=bh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function fs(...i){const t=i.join(" ");t in kl||(kl[t]=!0,Dt(...i))}function Qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ju={[so]:ro,[ao]:co,[oo]:ho,[Hs]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:Hs};class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,Xo=180/Math.PI;function $s(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function td(i,t){return(i%t+t)%t}function Ta(i,t,e){return(1-e)*i+e*t}function bs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ed={DEG2RAD:Gr},yl=class yl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yl.prototype.isVector2=!0;let Lt=yl;class Fe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],f=r[a+1],x=r[a+2],v=r[a+3];if(p!==v||c!==u||l!==f||h!==x){let m=c*u+l*f+h*x+p*v;m<0&&(u=-u,f=-f,x=-x,v=-v,m=-m);let d=1-o;if(m<.9995){const b=Math.acos(m),R=Math.sin(b);d=Math.sin(d*b)/R,o=Math.sin(o*b)/R,c=c*d+u*o,l=l*d+f*o,h=h*d+x*o,p=p*d+v*o}else{c=c*d+u*o,l=l*d+f*o,h=h*d+x*o,p=p*d+v*o;const b=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=b,l*=b,h*=b,p*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],u=r[a+1],f=r[a+2],x=r[a+3];return t[e]=o*x+h*p+c*f-l*u,t[e+1]=c*x+h*u+l*p-o*f,t[e+2]=l*x+h*f+o*u-c*p,t[e+3]=h*x-o*p-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),u=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=u*h*p+l*f*x,this._y=l*f*p-u*h*x,this._z=l*h*x+u*f*p,this._w=l*h*p-u*f*x;break;case"YXZ":this._x=u*h*p+l*f*x,this._y=l*f*p-u*h*x,this._z=l*h*x-u*f*p,this._w=l*h*p+u*f*x;break;case"ZXY":this._x=u*h*p-l*f*x,this._y=l*f*p+u*h*x,this._z=l*h*x+u*f*p,this._w=l*h*p-u*f*x;break;case"ZYX":this._x=u*h*p-l*f*x,this._y=l*f*p+u*h*x,this._z=l*h*x-u*f*p,this._w=l*h*p+u*f*x;break;case"YZX":this._x=u*h*p+l*f*x,this._y=l*f*p+u*h*x,this._z=l*h*x-u*f*p,this._w=l*h*p-u*f*x;break;case"XZY":this._x=u*h*p-l*f*x,this._y=l*f*p-u*h*x,this._z=l*h*x+u*f*p,this._w=l*h*p+u*f*x;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>p){const f=2*Math.sqrt(1+n-o-p);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>p){const f=2*Math.sqrt(1+o-n-p);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const El=class El{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};El.prototype.isVector3=!0;let P=El;const wa=new P,Wl=new Fe,bl=class bl{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],u=n[2],f=n[5],x=n[8],v=s[0],m=s[3],d=s[6],b=s[1],R=s[4],M=s[7],T=s[2],y=s[5],w=s[8];return r[0]=a*v+o*b+c*T,r[3]=a*m+o*R+c*y,r[6]=a*d+o*M+c*w,r[1]=l*v+h*b+p*T,r[4]=l*m+h*R+p*y,r[7]=l*d+h*M+p*w,r[2]=u*v+f*b+x*T,r[5]=u*m+f*R+x*y,r[8]=u*d+f*M+x*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=h*a-o*l,u=o*c-h*r,f=l*r-a*c,x=e*p+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=p*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bl.prototype.isMatrix3=!0;let Ut=bl;const Aa=new Ut,Xl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nd(){const i={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qr]:{primaries:t,whitePoint:n,transfer:jr,toXYZ:Xl,fromXYZ:Yl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Xl,fromXYZ:Yl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const Xt=nd();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class id{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=ta("canvas")),$i.width=t.width,$i.height=t.height;const s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ta("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sd=0;class ll{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ra(s[a].image)):r.push(Ra(s[a]))}else r=Ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?id.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}let rd=0;const Ca=new P;class je extends gi{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=$n,s=$n,r=$e,a=Ci,o=Sn,c=cn,l=je.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=$s(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uo:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uo:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=gh;je.DEFAULT_ANISOTROPY=1;const Tl=class Tl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],p=c[8],u=c[1],f=c[5],x=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(l+1)/2,M=(f+1)/2,T=(d+1)/2,y=(h+u)/4,w=(p+v)/4,g=(x+m)/4;return R>M&&R>T?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=y/n,r=w/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=y/s,r=g/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=g/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-x)*(m-x)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(p-v)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tl.prototype.isVector4=!0;let ge=Tl;class ad extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new je(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ll(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Th extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class od extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ua=class ua{constructor(t,e,n,s,r,a,o,c,l,h,p,u,f,x,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,p,u,f,x,v,m)}set(t,e,n,s,r,a,o,c,l,h,p,u,f,x,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ua().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*p,x=o*h,v=o*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=f+x*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=x+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*p,x=l*h,v=l*p;e[0]=u+v*o,e[4]=x*o-f,e[8]=a*l,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=f*o-x,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*p,x=l*h,v=l*p;e[0]=u-v*o,e[4]=-a*p,e[8]=x+f*o,e[1]=f+x*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*p,x=o*h,v=o*p;e[0]=c*h,e[4]=x*l-f,e[8]=u*l+v,e[1]=c*p,e[5]=v*l+u,e[9]=f*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,x=o*c,v=o*l;e[0]=c*h,e[4]=v-u*p,e[8]=x*p+f,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*p+x,e[10]=u-v*p}else if(t.order==="XZY"){const u=a*c,f=a*l,x=o*c,v=o*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=u*p+v,e[5]=a*h,e[9]=f*p-x,e[2]=x*p-f,e[6]=o*h,e[10]=v*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),oi.crossVectors(n,an),oi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),oi.crossVectors(n,an)),oi.normalize(),sr.crossVectors(an,oi),s[0]=oi.x,s[4]=sr.x,s[8]=an.x,s[1]=oi.y,s[5]=sr.y,s[9]=an.y,s[2]=oi.z,s[6]=sr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],u=n[9],f=n[13],x=n[2],v=n[6],m=n[10],d=n[14],b=n[3],R=n[7],M=n[11],T=n[15],y=s[0],w=s[4],g=s[8],E=s[12],A=s[1],L=s[5],D=s[9],z=s[13],U=s[2],B=s[6],K=s[10],V=s[14],nt=s[3],X=s[7],j=s[11],et=s[15];return r[0]=a*y+o*A+c*U+l*nt,r[4]=a*w+o*L+c*B+l*X,r[8]=a*g+o*D+c*K+l*j,r[12]=a*E+o*z+c*V+l*et,r[1]=h*y+p*A+u*U+f*nt,r[5]=h*w+p*L+u*B+f*X,r[9]=h*g+p*D+u*K+f*j,r[13]=h*E+p*z+u*V+f*et,r[2]=x*y+v*A+m*U+d*nt,r[6]=x*w+v*L+m*B+d*X,r[10]=x*g+v*D+m*K+d*j,r[14]=x*E+v*z+m*V+d*et,r[3]=b*y+R*A+M*U+T*nt,r[7]=b*w+R*L+M*B+T*X,r[11]=b*g+R*D+M*K+T*j,r[15]=b*E+R*z+M*V+T*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],p=t[6],u=t[10],f=t[14],x=t[3],v=t[7],m=t[11],d=t[15],b=c*f-l*u,R=o*f-l*p,M=o*u-c*p,T=a*f-l*h,y=a*u-c*h,w=a*p-o*h;return e*(v*b-m*R+d*M)-n*(x*b-m*T+d*y)+s*(x*R-v*T+d*w)-r*(x*M-v*y+m*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=t[9],u=t[10],f=t[11],x=t[12],v=t[13],m=t[14],d=t[15],b=e*o-n*a,R=e*c-s*a,M=e*l-r*a,T=n*c-s*o,y=n*l-r*o,w=s*l-r*c,g=h*v-p*x,E=h*m-u*x,A=h*d-f*x,L=p*m-u*v,D=p*d-f*v,z=u*d-f*m,U=b*z-R*D+M*L+T*A-y*E+w*g;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/U;return t[0]=(o*z-c*D+l*L)*B,t[1]=(s*D-n*z-r*L)*B,t[2]=(v*w-m*y+d*T)*B,t[3]=(u*y-p*w-f*T)*B,t[4]=(c*A-a*z-l*E)*B,t[5]=(e*z-s*A+r*E)*B,t[6]=(m*M-x*w-d*R)*B,t[7]=(h*w-u*M+f*R)*B,t[8]=(a*D-o*A+l*g)*B,t[9]=(n*A-e*D-r*g)*B,t[10]=(x*y-v*M+d*b)*B,t[11]=(p*M-h*y-f*b)*B,t[12]=(o*E-a*L-c*g)*B,t[13]=(e*L-n*E+s*g)*B,t[14]=(v*R-x*T-m*b)*B,t[15]=(h*T-p*R+u*b)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,p=o+o,u=r*l,f=r*h,x=r*p,v=a*h,m=a*p,d=o*p,b=c*l,R=c*h,M=c*p,T=n.x,y=n.y,w=n.z;return s[0]=(1-(v+d))*T,s[1]=(f+M)*T,s[2]=(x-R)*T,s[3]=0,s[4]=(f-M)*y,s[5]=(1-(u+d))*y,s[6]=(m+b)*y,s[7]=0,s[8]=(x+R)*w,s[9]=(m-b)*w,s[10]=(1-(u+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length();const o=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);const l=1/a,h=1/o,p=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=p,_n.elements[9]*=p,_n.elements[10]*=p,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=In,c=!1){const l=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let x,v;if(c)x=r/(a-r),v=a*r/(a-r);else if(o===In)x=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Vs)x=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=In,c=!1){const l=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let x,v;if(c)x=1/(a-r),v=a/(a-r);else if(o===In)x=-2/(a-r),v=-(a+r)/(a-r);else if(o===Vs)x=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ua.prototype.isMatrix4=!0;let le=ua;const Zi=new P,_n=new le,ld=new P(0,0,0),cd=new P(1,1,1),oi=new P,sr=new P,an=new P,ql=new le,$l=new Fe;class ei{constructor(t=0,e=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $l.setFromEuler(this),this.setFromQuaternion($l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hd=0;const Zl=new P,Ki=new Fe,Hn=new le,rr=new P,Ts=new P,ud=new P,dd=new Fe,Kl=new P(1,0,0),Jl=new P(0,1,0),Ql=new P(0,0,1),jl={type:"added"},fd={type:"removed"},Ji={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Ee extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new P,e=new ei,n=new Fe,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ut}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Ql,t)}translateOnAxis(t,e){return Zl.copy(t).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ts,rr,this.up):Hn.lookAt(rr,Ts,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Hn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jl),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jl),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Li extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pd={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=td(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Da(a,r,t+1/3),this.g=Da(a,r,t),this.b=Da(a,r,t-1/3)}return Xt.colorSpaceToWorking(this,s),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Xt.workingToColorSpace(Xe.copy(this),t),Math.round(Vt(Xe.r*255,0,255))*65536+Math.round(Vt(Xe.g*255,0,255))*256+Math.round(Vt(Xe.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=dn){Xt.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(ar);const n=Ta(li.h,ar.h,e),s=Ta(li.s,ar.s,e),r=Ta(li.l,ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Nt;Nt.NAMES=wh;class md extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xn=new P,Gn=new P,Ia=new P,kn=new P,Qi=new P,ji=new P,tc=new P,Ua=new P,Na=new P,Fa=new P,Oa=new ge,Ba=new ge,za=new ge;class Mn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Gn.subVectors(n,e),Ia.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Gn),c=xn.dot(Ia),l=Gn.dot(Gn),h=Gn.dot(Ia),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,f=(l*c-o*h)*u,x=(a*h-o*c)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oa.setScalar(0),Ba.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),za.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oa,r.x),a.addScaledVector(Ba,r.y),a.addScaledVector(za,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Gn.subVectors(t,e),xn.cross(Gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),xn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Qi.subVectors(s,n),ji.subVectors(r,n),Ua.subVectors(t,n);const c=Qi.dot(Ua),l=ji.dot(Ua);if(c<=0&&l<=0)return e.copy(n);Na.subVectors(t,s);const h=Qi.dot(Na),p=ji.dot(Na);if(h>=0&&p<=h)return e.copy(s);const u=c*p-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Qi,a);Fa.subVectors(t,r);const f=Qi.dot(Fa),x=ji.dot(Fa);if(x>=0&&f<=x)return e.copy(r);const v=f*l-c*x;if(v<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(ji,o);const m=h*x-f*p;if(m<=0&&p-h>=0&&f-x>=0)return tc.subVectors(r,s),o=(p-h)/(p-h+(f-x)),e.copy(s).addScaledVector(tc,o);const d=1/(m+v+u);return a=v*d,o=u*d,e.copy(n).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ki{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),lr.subVectors(this.max,ws),ts.subVectors(t.a,ws),es.subVectors(t.b,ws),ns.subVectors(t.c,ws),ci.subVectors(es,ts),hi.subVectors(ns,es),vi.subVectors(ts,ns);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-vi.z,vi.y,ci.z,0,-ci.x,hi.z,0,-hi.x,vi.z,0,-vi.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-vi.y,vi.x,0];return!Ha(e,ts,es,ns,lr)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,ts,es,ns,lr))?!1:(cr.crossVectors(ci,hi),e=[cr.x,cr.y,cr.z],Ha(e,ts,es,ns,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,or=new ki,ts=new P,es=new P,ns=new P,ci=new P,hi=new P,vi=new P,ws=new P,lr=new P,cr=new P,Mi=new P;function Ha(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);const o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ae=new P,hr=new Lt;let gd=0;class En extends gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zu,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ah extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rh extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}const _d=new ki,As=new P,Ga=new P;class Zs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Ga)),this.expandByPoint(As.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let xd=0;const un=new le,ka=new Ee,is=new P,on=new ki,Rs=new ki,Ne=new P;class be extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ku(t)?Rh:Ah)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(on.min,Rs.min),on.expandByPoint(Ne),Ne.addVectors(on.max,Rs.max),on.expandByPoint(Ne)):(on.expandByPoint(Rs.min),on.expandByPoint(Rs.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ne.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),Ne.add(is)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let g=0;g<n.count;g++)o[g]=new P,c[g]=new P;const l=new P,h=new P,p=new P,u=new Lt,f=new Lt,x=new Lt,v=new P,m=new P;function d(g,E,A){l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,E),p.fromBufferAttribute(n,A),u.fromBufferAttribute(r,g),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,A),h.sub(l),p.sub(l),f.sub(u),x.sub(u);const L=1/(f.x*x.y-x.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(L),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(L),o[g].add(v),o[E].add(v),o[A].add(v),c[g].add(m),c[E].add(m),c[A].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let g=0,E=b.length;g<E;++g){const A=b[g],L=A.start,D=A.count;for(let z=L,U=L+D;z<U;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const R=new P,M=new P,T=new P,y=new P;function w(g){T.fromBufferAttribute(s,g),y.copy(T);const E=o[g];R.copy(E),R.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(y,E);const L=M.dot(c[g])<0?-1:1;a.setXYZW(g,R.x,R.y,R.z,L)}for(let g=0,E=b.length;g<E;++g){const A=b[g],L=A.start,D=A.count;for(let z=L,U=L+D;z<U;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,p=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const x=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,p=o.normalized,u=new l.constructor(c.length*h);let f=0,x=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let d=0;d<h;d++)u[x++]=l[f++]}return new En(u,h,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,u=l.length;p<u;p++){const f=l[p];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],p=r[l];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new P,vd=new P,Md=new Ut;class Pn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Va.subVectors(n,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Va),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Md.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Sd=0;class Vi extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=zs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Wn=new P,Wa=new P,ur=new P,dr=new P;class Ks{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wa.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),dr.copy(this.origin).sub(Wa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ur),o=dr.dot(this.direction),c=-dr.dot(ur),l=dr.lengthSq(),h=Math.abs(1-a*a);let p,u,f,x;if(h>0)if(p=a*c-o,u=a*o-c,x=r*h,p>=0)if(u>=-x)if(u<=x){const v=1/h;p*=v,u*=v,f=p*(p+a*u+2*o)+u*(a*p+u+2*c)+l}else u=r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*c)+l;else u<=-x?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+l):u<=x?(p=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+l);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Wa).addScaledVector(ur,u),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,c=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,c=(t.min.z-u.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,f=t.z-a.z,x=e.x-a.x,v=e.y-a.y,m=e.z-a.z,d=n.x-a.x,b=n.y-a.y,R=n.z-a.z,M=Math.abs(c),T=Math.abs(l),y=Math.abs(h);let w,g,E,A,L,D,z,U,B,K,V,nt;if(M>=T&&M>=y?(E=c,D=p,B=x,nt=d,c>=0?(w=l,g=h,A=u,L=f,z=v,U=m,K=b,V=R):(w=h,g=l,A=f,L=u,z=m,U=v,K=R,V=b)):T>=y?(E=l,D=u,B=v,nt=b,l>=0?(w=h,g=c,A=f,L=p,z=m,U=x,K=R,V=d):(w=c,g=h,A=p,L=f,z=x,U=m,K=d,V=R)):(E=h,D=f,B=m,nt=R,h>=0?(w=c,g=l,A=p,L=u,z=x,U=v,K=d,V=b):(w=l,g=c,A=u,L=p,z=v,U=x,K=b,V=d)),E===0)return null;const X=w/E,j=g/E,et=1/E,bt=A-X*D,Tt=L-j*D,te=z-X*B,Yt=U-j*B,Kt=K-X*nt,$=V-j*nt,tt=Kt*Yt-$*te,vt=bt*$-Tt*Kt,It=te*Tt-Yt*bt;if(s){if(tt<0||vt<0||It<0)return null}else if((tt<0||vt<0||It<0)&&(tt>0||vt>0||It>0))return null;const _t=tt+vt+It;if(_t===0)return null;const Ht=et*(tt*D+vt*B+It*nt);return(_t>0?Ht<0:Ht>0)?null:this.at(Ht/_t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Js extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ec=new le,Si=new Ks,fr=new Zs,nc=new P,pr=new P,mr=new P,gr=new P,Xa=new P,_r=new P,ic=new P,xr=new P;class pt extends Ee{constructor(t=new be,e=new Js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],p=r[c];h!==0&&(Xa.fromBufferAttribute(p,t),a?_r.addScaledVector(Xa,h):_r.addScaledVector(Xa.sub(e),h))}e.add(_r)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(fr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(fr,nc)===null||Si.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),Si.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const m=u[x],d=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,T=R;M<T;M+=3){const y=o.getX(M),w=o.getX(M+1),g=o.getX(M+2);s=vr(this,d,t,n,l,h,p,y,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=x,d=v;m<d;m+=3){const b=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);s=vr(this,a,t,n,l,h,p,b,R,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){const m=u[x],d=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,T=R;M<T;M+=3){const y=M,w=M+1,g=M+2;s=vr(this,d,t,n,l,h,p,y,w,g),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=x,d=v;m<d;m+=3){const b=m,R=m+1,M=m+2;s=vr(this,a,t,n,l,h,p,b,R,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yd(i,t,e,n,s,r,a,o){let c;if(t.side===sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Fi,o),c===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:i}}function vr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);const h=yd(i,t,e,n,pr,mr,gr,ic);if(h){const p=new P;Mn.getBarycoord(ic,pr,mr,gr,p),s&&(h.uv=Mn.getInterpolatedAttribute(s,o,c,l,p,new Lt)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,o,c,l,p,new Lt)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,c,l,p,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};Mn.getNormal(pr,mr,gr,u.normal),h.face=u,h.barycoord=p}return h}class Ed extends je{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ge,h=Ge,p,u){super(null,a,o,c,l,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yi=new Zs,bd=new Lt(.5,.5),Mr=new P;class hl{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],u=r[6],f=r[7],x=r[8],v=r[9],m=r[10],d=r[11],b=r[12],R=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-a,f-h,d-x,T-b).normalize(),s[1].setComponents(l+a,f+h,d+x,T+b).normalize(),s[2].setComponents(l+o,f+p,d+v,T+R).normalize(),s[3].setComponents(l-o,f-p,d-v,T-R).normalize(),n)s[4].setComponents(c,u,m,M).normalize(),s[5].setComponents(l-c,f-u,d-m,T-M).normalize();else if(s[4].setComponents(l-c,f-u,d-m,T-M).normalize(),e===In)s[5].setComponents(l+c,f+u,d+m,T+M).normalize();else if(e===Vs)s[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);const e=bd.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qs extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ea=new P,na=new P,sc=new le,Cs=new Ks,Sr=new Zs,Ya=new P,rc=new P;class Xn extends Ee{constructor(t=new be,e=new Qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ea.fromBufferAttribute(e,s-1),na.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ea.distanceTo(na);t.setAttribute("lineDistance",new Jt(n,1))}else Dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;sc.copy(s).invert(),Cs.copy(t.ray).applyMatrix4(sc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let v=f,m=x-1;v<m;v+=l){const d=h.getX(v),b=h.getX(v+1),R=yr(this,t,Cs,c,d,b,v);R&&e.push(R)}if(this.isLineLoop){const v=h.getX(x-1),m=h.getX(f),d=yr(this,t,Cs,c,v,m,x-1);d&&e.push(d)}}else{const f=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let v=f,m=x-1;v<m;v+=l){const d=yr(this,t,Cs,c,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){const v=yr(this,t,Cs,c,x-1,f,x-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yr(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(ea.fromBufferAttribute(o,s),na.fromBufferAttribute(o,r),e.distanceSqToSegment(ea,na,Ya,rc)>n)return;Ya.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ya);if(!(l<t.near||l>t.far))return{distance:l,point:rc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const ac=new P,oc=new P;class ul extends Xn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ac.fromBufferAttribute(e,s),oc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ac.distanceTo(oc);t.setAttribute("lineDistance",new Jt(n,1))}else Dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ch extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lc=new le,Yo=new Ks,Er=new Zs,br=new P;class Td extends Ee{constructor(t=new be,e=new Ch){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;lc.copy(s).invert(),Yo.copy(t.ray).applyMatrix4(lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,p=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let x=u,v=f;x<v;x++){const m=l.getX(x);br.fromBufferAttribute(p,m),cc(br,m,c,s,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(p.count,a.start+a.count);for(let x=u,v=f;x<v;x++)br.fromBufferAttribute(p,x),cc(br,x,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function cc(i,t,e,n,s,r,a){const o=Yo.distanceSqToPoint(i);if(o<e){const c=new P;Yo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ph extends je{constructor(t=[],e=Oi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ws extends je{constructor(t,e,n=Fn,s,r,a,o=Ge,c=Ge,l,h=ti,p=1){if(h!==ti&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:p};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class wd extends Ws{constructor(t,e=Fn,n=Oi,s,r,a=Ge,o=Ge,c,l=ti){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Lh extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xe extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],p=[];let u=0,f=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(p,2));function x(v,m,d,b,R,M,T,y,w,g,E){const A=M/w,L=T/g,D=M/2,z=T/2,U=y/2,B=w+1,K=g+1;let V=0,nt=0;const X=new P;for(let j=0;j<K;j++){const et=j*L-z;for(let bt=0;bt<B;bt++){const Tt=bt*A-D;X[v]=Tt*b,X[m]=et*R,X[d]=U,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[d]=y>0?1:-1,h.push(X.x,X.y,X.z),p.push(bt/w),p.push(1-j/g),V+=1}}for(let j=0;j<g;j++)for(let et=0;et<w;et++){const bt=u+et+B*j,Tt=u+et+B*(j+1),te=u+(et+1)+B*(j+1),Yt=u+(et+1)+B*j;c.push(bt,Tt,Yt),c.push(Tt,te,Yt),nt+=6}o.addGroup(f,nt,E),f+=nt,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Oe extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],u=[],f=[];let x=0;const v=[],m=n/2;let d=0;b(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(f,2));function b(){const M=new P,T=new P;let y=0;const w=(e-t)/n;for(let g=0;g<=r;g++){const E=[],A=g/r,L=A*(e-t)+t;for(let D=0;D<=s;D++){const z=D/s,U=z*c+o,B=Math.sin(U),K=Math.cos(U);T.x=L*B,T.y=-A*n+m,T.z=L*K,p.push(T.x,T.y,T.z),M.set(B,w,K).normalize(),u.push(M.x,M.y,M.z),f.push(z,1-A),E.push(x++)}v.push(E)}for(let g=0;g<s;g++)for(let E=0;E<r;E++){const A=v[E][g],L=v[E+1][g],D=v[E+1][g+1],z=v[E][g+1];(t>0||E!==0)&&(h.push(A,L,z),y+=3),(e>0||E!==r-1)&&(h.push(L,D,z),y+=3)}l.addGroup(d,y,0),d+=y}function R(M){const T=x,y=new Lt,w=new P;let g=0;const E=M===!0?t:e,A=M===!0?1:-1;for(let D=1;D<=s;D++)p.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),x++;const L=x;for(let D=0;D<=s;D++){const U=D/s*c+o,B=Math.cos(U),K=Math.sin(U);w.x=E*K,w.y=m*A,w.z=E*B,p.push(w.x,w.y,w.z),u.push(0,A,0),y.x=B*.5+.5,y.y=K*.5*A+.5,f.push(y.x,y.y),x++}for(let D=0;D<s;D++){const z=T+D,U=L+D;M===!0?h.push(U,U+1,z):h.push(U+1,U,z),g+=3}l.addGroup(d,g,M===!0?1:2),d+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dl extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const R=new P,M=new P,T=new P;for(let y=0;y<e.length;y+=3)f(e[y+0],R),f(e[y+1],M),f(e[y+2],T),c(R,M,T,b)}function c(b,R,M,T){const y=T+1,w=[];for(let g=0;g<=y;g++){w[g]=[];const E=b.clone().lerp(M,g/y),A=R.clone().lerp(M,g/y),L=y-g;for(let D=0;D<=L;D++)D===0&&g===y?w[g][D]=E:w[g][D]=E.clone().lerp(A,D/L)}for(let g=0;g<y;g++)for(let E=0;E<2*(y-g)-1;E++){const A=Math.floor(E/2);E%2===0?(u(w[g][A+1]),u(w[g+1][A]),u(w[g][A])):(u(w[g][A+1]),u(w[g+1][A+1]),u(w[g+1][A]))}}function l(b){const R=new P;for(let M=0;M<r.length;M+=3)R.x=r[M+0],R.y=r[M+1],R.z=r[M+2],R.normalize().multiplyScalar(b),r[M+0]=R.x,r[M+1]=R.y,r[M+2]=R.z}function h(){const b=new P;for(let R=0;R<r.length;R+=3){b.x=r[R+0],b.y=r[R+1],b.z=r[R+2];const M=m(b)/2/Math.PI+.5,T=d(b)/Math.PI+.5;a.push(M,1-T)}x(),p()}function p(){for(let b=0;b<a.length;b+=6){const R=a[b+0],M=a[b+2],T=a[b+4],y=Math.max(R,M,T),w=Math.min(R,M,T);y>.9&&w<.1&&(R<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),T<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,R){const M=b*3;R.x=t[M+0],R.y=t[M+1],R.z=t[M+2]}function x(){const b=new P,R=new P,M=new P,T=new P,y=new Lt,w=new Lt,g=new Lt;for(let E=0,A=0;E<r.length;E+=9,A+=6){b.set(r[E+0],r[E+1],r[E+2]),R.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),y.set(a[A+0],a[A+1]),w.set(a[A+2],a[A+3]),g.set(a[A+4],a[A+5]),T.copy(b).add(R).add(M).divideScalar(3);const L=m(T);v(y,A+0,b,L),v(w,A+2,R,L),v(g,A+4,M,L)}}function v(b,R,M,T){T<0&&b.x===1&&(a[R]=b.x-1),M.x===0&&M.z===0&&(a[R]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.vertices,t.indices,t.radius,t.detail)}}class cs extends dl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cs(t.radius,t.detail)}}class Wi extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=t/o,u=e/c,f=[],x=[],v=[],m=[];for(let d=0;d<h;d++){const b=d*u-a;for(let R=0;R<l;R++){const M=R*p-r;x.push(M,-b,0),v.push(0,0,1),m.push(R/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<o;b++){const R=b+l*d,M=b+l*(d+1),T=b+1+l*(d+1),y=b+1+l*d;f.push(R,M,y),f.push(M,T,y)}this.setIndex(f),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.widthSegments,t.heightSegments)}}class js extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],p=new P,u=new P,f=[],x=[],v=[],m=[];for(let d=0;d<=n;d++){const b=[],R=d/n,M=a+R*o,T=t*Math.cos(M),y=Math.sqrt(t*t-T*T);let w=0;d===0&&a===0?w=.5/e:d===n&&c===Math.PI&&(w=-.5/e);for(let g=0;g<=e;g++){const E=g/e,A=s+E*r;p.x=-y*Math.cos(A),p.y=T,p.z=y*Math.sin(A),x.push(p.x,p.y,p.z),u.copy(p).normalize(),v.push(u.x,u.y,u.z),m.push(E+w,1-R),b.push(l++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const R=h[d][b+1],M=h[d][b],T=h[d+1][b],y=h[d+1][b+1];(d!==0||a>0)&&f.push(R,M,y),(d!==n-1||c<Math.PI)&&f.push(M,T,y)}this.setIndex(f),this.setAttribute("position",new Jt(x,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ri extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],p=[],u=new P,f=new P,x=new P;for(let v=0;v<=n;v++){const m=a+v/n*o;for(let d=0;d<=s;d++){const b=d/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),x.subVectors(f,u).normalize(),h.push(x.x,x.y,x.z),p.push(d/s),p.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){const d=(s+1)*v+m-1,b=(s+1)*(v-1)+m-1,R=(s+1)*(v-1)+m,M=(s+1)*v+m;c.push(d,b,M),c.push(b,R,M)}this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(hc(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=xs(i[e]);for(const s in n)t[s]=n[s]}return t}function hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ad(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Rd={clone:xs,merge:Ke};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ld extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ia extends Vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dd extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Id extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fl extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ud extends fl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const qa=new le,uc=new P,dc=new P;class Nd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tr=new P,wr=new Fe,wn=new P;class Ih extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Tr,wr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,wr,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Tr,wr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,wr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new P,fc=new Lt,pc=new Lt;class ln extends Ih{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,fc,pc),e.subVectors(pc,fc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fd extends Nd{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class Od extends fl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Uh extends Ih{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bd extends fl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const ss=-90,rs=1;class zd extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new ln(ss,rs,t,e);r.layers=this.layers,this.add(r);const a=new ln(ss,rs,t,e);a.layers=this.layers,this.add(a);const o=new ln(ss,rs,t,e);o.layers=this.layers,this.add(o);const c=new ln(ss,rs,t,e);c.layers=this.layers,this.add(c);const l=new ln(ss,rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,f),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Hd extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const mc=new le;class Nh{constructor(t,e,n=0,s=1/0){this.ray=new Ks(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mc),this}intersectObject(t,e=!0,n=[]){return qo(t,this,n,e),n.sort(gc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)qo(t[s],this,n,e);return n.sort(gc),n}}function gc(i,t){return i.distance-t.distance}function qo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)qo(r[a],t,e,!0)}}class _c{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const wl=class wl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wl.prototype.isMatrix2=!0;let xc=wl;class Gd extends ul{constructor(t=10,e=10,n=4473924,s=8947848){n=new Nt(n),s=new Nt(s);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let u=0,f=0,x=-o;u<=e;u++,x+=a){c.push(-o,0,x,o,0,x),c.push(x,0,-o,x,0,o);const v=u===r?n:s;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const h=new be;h.setAttribute("position",new Jt(c,3)),h.setAttribute("color",new Jt(l,3));const p=new Qs({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const Ar=new ki;class kd extends ul{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),r=new be;r.setIndex(new En(n,1)),r.setAttribute("position",new En(s,3)),super(r,new Qs({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ar.setFromObject(this.object),Ar.isEmpty())return;const t=Ar.min,e=Ar.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Vd extends ul{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new be;s.setAttribute("position",new Jt(e,3)),s.setAttribute("color",new Jt(n,3));const r=new Qs({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Nt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Fh extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function vc(i,t,e,n){const s=Wd(n);switch(e){case Sh:return i*t;case Eh:return i*t/s.components*s.byteLength;case il:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case sl:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case rl:return i*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:case _o:return Math.max(i,16)*Math.max(t,8)/4;case po:case go:return Math.max(i,8)*Math.max(t,8)/2;case xo:case vo:case So:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:case Kr:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bo:case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Go:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wd(i){switch(i){case cn:case _h:return{byteLength:1,components:1};case Gs:case xh:case On:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case Fn:case tl:case Dn:return{byteLength:4,components:1};case vh:case Mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xd(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<p.length;f++){const x=p[u],v=p[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,p[u]=v)}p.length=u+1;for(let f=0,x=p.length;f<x;f++){const v=p[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Yd,alphahash_pars_fragment:qd,alphamap_fragment:$d,alphamap_pars_fragment:Zd,alphatest_fragment:Kd,alphatest_pars_fragment:Jd,aomap_fragment:Qd,aomap_pars_fragment:jd,batching_pars_vertex:tf,batching_vertex:ef,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:vf,displacementmap_vertex:Mf,emissivemap_fragment:Sf,emissivemap_pars_fragment:yf,colorspace_fragment:Ef,colorspace_pars_fragment:bf,envmap_fragment:Tf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:zf,envmap_vertex:Cf,fog_vertex:Pf,fog_pars_vertex:Lf,fog_fragment:Df,fog_pars_fragment:If,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:Nf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Gf,lights_phong_fragment:kf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:Yf,lights_fragment_maps:qf,lights_fragment_end:$f,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:Kf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Qf,logdepthbuf_vertex:jf,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:Mp,opaque_fragment:Sp,packing:yp,premultiplied_alpha_fragment:Ep,project_vertex:bp,dithering_fragment:Tp,dithering_pars_fragment:wp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Rp,shadowmap_pars_fragment:Cp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Lp,shadowmask_pars_fragment:Dp,skinbase_vertex:Ip,skinning_pars_vertex:Up,skinning_vertex:Np,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:Hp,transmission_fragment:Gp,transmission_pars_fragment:kp,uv_pars_fragment:Vp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:Yp,background_vert:qp,background_frag:$p,backgroundCube_vert:Zp,backgroundCube_frag:Kp,cube_vert:Jp,cube_frag:Qp,depth_vert:jp,depth_frag:tm,distance_vert:em,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:vm,meshtoon_frag:Mm,points_vert:Sm,points_frag:ym,shadow_vert:Em,shadow_frag:bm,sprite_vert:Tm,sprite_frag:wm},ut={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ln={basic:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ke([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ke([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ke([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ke([ut.points,ut.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ke([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ke([ut.common,ut.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ke([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ke([ut.sprite,ut.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:Ke([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:Ke([ut.lights,ut.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Ln.physical={uniforms:Ke([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Rr={r:0,b:0,g:0},Am=new le,Bh=new Ut;Bh.set(-1,0,0,0,1,0,0,0,1);function Rm(i,t,e,n,s,r){const a=new Nt(0);let o=s===!0?0:1,c,l,h=null,p=0,u=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const M=b.backgroundBlurriness>0;R=t.get(R,M)}return R}function x(b){let R=!1;const M=f(b);M===null?m(a,o):M&&M.isColor&&(m(M,1),R=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,R){const M=f(R);M&&(M.isCubeTexture||M.mapping===da)?(l===void 0&&(l=new pt(new xe(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:xs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bh),l.material.toneMapped=Xt.getTransfer(M.colorSpace)!==ne,(h!==M||p!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new pt(new Wi(2,2),new Bn({name:"BackgroundMaterial",uniforms:xs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==ne,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,R){b.getRGB(Rr,Dh(i)),e.buffers.color.setClear(Rr.r,Rr.g,Rr.b,R,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:x,addToRenderList:v,dispose:d}}function Cm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(L,D,z,U,B){let K=!1;const V=p(L,U,z,D);r!==V&&(r=V,l(r.object)),K=f(L,U,z,B),K&&x(L,U,z,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(L,D,z,U),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function p(L,D,z,U){const B=U.wireframe===!0;let K=n[D.id];K===void 0&&(K={},n[D.id]=K);const V=L.isInstancedMesh===!0?L.id:0;let nt=K[V];nt===void 0&&(nt={},K[V]=nt);let X=nt[z.id];X===void 0&&(X={},nt[z.id]=X);let j=X[B];return j===void 0&&(j=u(c()),X[B]=j),j}function u(L){const D=[],z=[],U=[];for(let B=0;B<e;B++)D[B]=0,z[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:U,object:L,attributes:{},index:null}}function f(L,D,z,U){const B=r.attributes,K=D.attributes;let V=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){const et=B[X];let bt=K[X];if(bt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(bt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(bt=L.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function x(L,D,z,U){const B={},K=D.attributes;let V=0;const nt=z.getAttributes();for(const X in nt)if(nt[X].location>=0){let et=K[X];et===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),B[X]=bt,V++}r.attributes=B,r.attributesNum=V,r.index=U}function v(){const L=r.newAttributes;for(let D=0,z=L.length;D<z;D++)L[D]=0}function m(L){d(L,0)}function d(L,D){const z=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;z[L]=1,U[L]===0&&(i.enableVertexAttribArray(L),U[L]=1),B[L]!==D&&(i.vertexAttribDivisor(L,D),B[L]=D)}function b(){const L=r.newAttributes,D=r.enabledAttributes;for(let z=0,U=D.length;z<U;z++)D[z]!==L[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function R(L,D,z,U,B,K,V){V===!0?i.vertexAttribIPointer(L,D,z,B,K):i.vertexAttribPointer(L,D,z,U,B,K)}function M(L,D,z,U){v();const B=U.attributes,K=z.getAttributes(),V=D.defaultAttributeValues;for(const nt in K){const X=K[nt];if(X.location>=0){let j=B[nt];if(j===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const et=j.normalized,bt=j.itemSize,Tt=t.get(j);if(Tt===void 0)continue;const te=Tt.buffer,Yt=Tt.type,Kt=Tt.bytesPerElement,$=Yt===i.INT||Yt===i.UNSIGNED_INT||j.gpuType===tl;if(j.isInterleavedBufferAttribute){const tt=j.data,vt=tt.stride,It=j.offset;if(tt.isInstancedInterleavedBuffer){for(let _t=0;_t<X.locationSize;_t++)d(X.location+_t,tt.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t);i.bindBuffer(i.ARRAY_BUFFER,te);for(let _t=0;_t<X.locationSize;_t++)R(X.location+_t,bt/X.locationSize,Yt,et,vt*Kt,(It+bt/X.locationSize*_t)*Kt,$)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)d(X.location+tt,j.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let tt=0;tt<X.locationSize;tt++)R(X.location+tt,bt/X.locationSize,Yt,et,bt*Kt,bt/X.locationSize*tt*Kt,$)}}else if(V!==void 0){const et=V[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}b()}function T(){E();for(const L in n){const D=n[L];for(const z in D){const U=D[z];for(const B in U){const K=U[B];for(const V in K)h(K[V].object),delete K[V];delete U[B]}}delete n[L]}}function y(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const z in D){const U=D[z];for(const B in U){const K=U[B];for(const V in K)h(K[V].object),delete K[V];delete U[B]}}delete n[L.id]}function w(L){for(const D in n){const z=n[D];for(const U in z){const B=z[U];if(B[L.id]===void 0)continue;const K=B[L.id];for(const V in K)h(K[V].object),delete K[V];delete B[L.id]}}}function g(L){for(const D in n){const z=n[D],U=L.isInstancedMesh===!0?L.id:0,B=z[U];if(B!==void 0){for(const K in B){const V=B[K];for(const nt in V)h(V[nt].object),delete V[nt];delete B[K]}delete z[U],Object.keys(z).length===0&&delete n[D]}}}function E(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Pm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const g=w===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==cn&&w!==Dn&&!g&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Dt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:M,maxSamples:T,samples:y}}function Dm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Pn,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const f=p.length!==0||u||n!==0||s;return s=u,n=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,f){const x=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,d=i.get(p);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,R=b*4;let M=d.clippingState||null;c.value=M,M=h(x,u,R,f);for(let T=0;T!==R;++T)M[T]=e[T];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,f,x){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const d=f+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let R=0,M=f;R!==v;++R,M+=4)a.copy(p[R]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const hs=4,Im=6,Um=20,Nm=256,Ps=new Uh,Mc=new Nt;let $a=null,Za=0,Ka=0,Ja=!1;const Fm=new P,Ei=new P;class Sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Fm}=r;$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Za,Ka),this._renderer.xr.enabled=Ja,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:On,format:Sn,colorSpace:Qr,depthBuffer:!1},s=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Om(r)),this._blurMaterial=zm(r,t,e),this._ggxMaterial=Bm(r,t,e)}return s}_compileMaterial(t){const e=new pt(new be,t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,s,r){const c=new ln(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(Mc),p.toneMapping=Un,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new xe,new Js({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,d=!0):(m.color.copy(Mc),d=!0);for(let R=0;R<6;R++){const M=R%3;M===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):M===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));const T=this._cubeSize;as(s,M*T,R>2?T:0,T,T),p.setRenderTarget(s),d&&p.render(v,c),p.render(t,c)}p.toneMapping=f,p.autoClear=u,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;as(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h),u=l*1.25,f=p*u,{_lodMax:x}=this,v=this._sizeLods[n],m=3*v*(n>x-hs?n-x+hs:0),d=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=x-e,as(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(o,Ps),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,as(t,m,d,3*v,2*v),s.setRenderTarget(t),s.render(o,Ps)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],p=3*h*(s>this._lodMax-hs?s-this._lodMax+hs:0),u=4*(this._cubeSize-h);as(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(c,Ps)}}function Om(i){const t=[],e=[];let n=i;const s=i-hs+1+Im;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,u=6,f=3,x=new Float32Array(f*u*p),v=new Float32Array(f*u*p);for(let d=0;d<p;d++){const b=d%3*2/3-1,R=d>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];x.set(M,f*u*d);for(let T=0;T<u;T++){const y=h[T*2]*2-1,w=h[T*2+1]*2-1;d===0?Ei.set(1,w,y):d===1?Ei.set(-y,1,-w):d===2?Ei.set(-y,w,1):d===3?Ei.set(-1,w,-y):d===4?Ei.set(-y,-1,w):Ei.set(y,w,-1),Ei.toArray(v,(d*u+T)*f)}}const m=new be;m.setAttribute("position",new En(x,f)),m.setAttribute("outputDirection",new En(v,f)),e.push(new pt(m,null)),n>hs&&n--}return{lodMeshes:e,sizeLods:t}}function yc(i,t,e){const n=new yn(i,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bm(i,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function zm(i,t,e){return new Bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ec(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function bc(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class zh extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ph(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xe(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Jn});r.uniforms.tEquirect.value=e;const a=new pt(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=$e),new zd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Sa||f===ya)if(t.has(u)){const x=t.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const v=new zh(x.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,x=f===Sa||f===ya,v=f===Oi||f===_s;if(x||v){let m=e.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Sc(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return x&&b&&b.height>0||v&&b&&c(b)?(n===null&&(n=new Sc(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Sa?u.mapping=Oi:f===ya&&(u.mapping=_s),u}function c(u){let f=0;const x=6;for(let v=0;v<x;v++)u[v]!==void 0&&f++;return f===x}function l(u){const f=u.target;f.removeEventListener("dispose",l);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Gm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function km(i,t,e,n){const s={},r=new WeakMap;function a(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(p){const u=p.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(p){const u=[],f=p.index,x=p.attributes.position;let v=0;if(x===void 0)return;if(f!==null){const b=f.array;v=f.version;for(let R=0,M=b.length;R<M;R+=3){const T=b[R+0],y=b[R+1],w=b[R+2];u.push(T,y,y,w,w,T)}}else{const b=x.array;v=x.version;for(let R=0,M=b.length/3-1;R<M;R+=3){const T=R+0,y=R+1,w=R+2;u.push(T,y,y,w,w,T)}}const m=new(x.count>=65535?Rh:Ah)(u,1);m.version=v;const d=r.get(p);d&&t.remove(d),r.set(p,m)}function h(p){const u=r.get(p);if(u){const f=p.index;f!==null&&u.version<f.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function Vm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function l(p,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,p*a,f),e.update(u,n,f))}function h(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Wm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:$t("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,t,e){const n=new WeakMap,s=new ge;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let A=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",A)};var f=A;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,y=1;T>t.maxTextureSize&&(y=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*y*4*p),g=new Th(w,T,y,p);g.type=Dn,g.needsUpdate=!0;const E=M*4;for(let L=0;L<p;L++){const D=d[L],z=b[L],U=R[L],B=T*y*4*L;for(let K=0;K<D.count;K++){const V=K*E;x===!0&&(s.fromBufferAttribute(D,K),w[B+V+0]=s.x,w[B+V+1]=s.y,w[B+V+2]=s.z,w[B+V+3]=0),v===!0&&(s.fromBufferAttribute(z,K),w[B+V+4]=s.x,w[B+V+5]=s.y,w[B+V+6]=s.z,w[B+V+7]=0),m===!0&&(s.fromBufferAttribute(U,K),w[B+V+8]=s.x,w[B+V+9]=s.y,w[B+V+10]=s.z,w[B+V+11]=U.itemSize===4?s.w:1)}}u={count:p,texture:g,size:new Lt(T,y)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const v=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ym(i,t,e,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,p=l.geometry,u=t.get(l,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const qm={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function $m(i,t,e,n,s,r){const a=new yn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new be;l.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const h=new Ld({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new pt(l,h),u=new Uh(-1,1,1,-1,0,1);let f=null,x=null,v=!1,m,d=null,b=[],R=!1;this.setSize=function(M,T){a.setSize(M,T),o!==null&&o.setSize(M,T),c!==null&&c.setSize(M,T);for(let y=0;y<b.length;y++){const w=b[y];w.setSize&&w.setSize(M,T)}},this.setEffects=function(M){b=M,R=b.length>0&&b[0].isRenderPass===!0;const T=a.width,y=a.height;b.length>0&&o===null&&(o=new yn(T,y,{type:On,depthBuffer:!1,stencilBuffer:!1}),c=new yn(T,y,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<b.length;w++){const g=b[w];g.setSize&&g.setSize(T,y)}},this.begin=function(M,T){if(v||M.toneMapping===Un&&b.length===0)return!1;if(d=T,T!==null){const y=T.width,w=T.height;(a.width!==y||a.height!==w)&&this.setSize(y,w)}return R===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Un,!0},this.hasRenderPass=function(){return R},this.end=function(M,T){M.toneMapping=m,v=!0;let y=a,w=o;for(let g=0;g<b.length;g++){const E=b[g];E.enabled!==!1&&(E.render(M,w,y,T),E.needsSwap!==!1&&(y=w,w=w===o?c:o))}if(f!==M.outputColorSpace||x!==M.toneMapping){f=M.outputColorSpace,x=M.toneMapping,h.defines={},Xt.getTransfer(f)===ne&&(h.defines.SRGB_TRANSFER="");const g=qm[x];g&&(h.defines[g]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(d),M.render(p,u),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Hh=new je,$o=new Ws(1,1),Gh=new Th,kh=new od,Vh=new Ph,Tc=[],wc=[],Ac=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function Ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Tc[s];if(r===void 0&&(r=new Float32Array(s),Tc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pa(i,t){let e=wc[t];e===void 0&&(e=new Int32Array(t),wc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Cc.set(n),i.uniformMatrix2fv(this.addr,!1,Cc),Ie(e,n)}}function t0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Rc.set(n),i.uniformMatrix3fv(this.addr,!1,Rc),Ie(e,n)}}function e0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Ac.set(n),i.uniformMatrix4fv(this.addr,!1,Ac),Ie(e,n)}}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function h0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($o.compareFunction=e.isReversedDepthBuffer()?ol:al,r=$o):r=Hh,e.setTexture2D(t||r,s)}function u0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function f0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gh,s)}function p0(i){switch(i){case 5126:return Zm;case 35664:return Km;case 35665:return Jm;case 35666:return Qm;case 35674:return jm;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(i,t){i.uniform1fv(this.addr,t)}function g0(i,t){const e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function _0(i,t){const e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function x0(i,t){const e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function v0(i,t){const e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M0(i,t){const e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S0(i,t){const e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y0(i,t){i.uniform1iv(this.addr,t)}function E0(i,t){i.uniform2iv(this.addr,t)}function b0(i,t){i.uniform3iv(this.addr,t)}function T0(i,t){i.uniform4iv(this.addr,t)}function w0(i,t){i.uniform1uiv(this.addr,t)}function A0(i,t){i.uniform2uiv(this.addr,t)}function R0(i,t){i.uniform3uiv(this.addr,t)}function C0(i,t){i.uniform4uiv(this.addr,t)}function P0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$o:a=Hh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function L0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kh,r[a])}function D0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vh,r[a])}function I0(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gh,r[a])}function U0(i){switch(i){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return x0;case 35674:return v0;case 35675:return M0;case 35676:return S0;case 5124:case 35670:return y0;case 35667:case 35671:return E0;case 35668:case 35672:return b0;case 35669:case 35673:return T0;case 5125:return w0;case 36294:return A0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}class N0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p0(e.type)}}class F0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U0(e.type)}}class O0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Pc(i,t){i.seq.push(t),i.map[t.id]=t}function B0(i,t,e){const n=i.name,s=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),a=Qa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Pc(e,l===void 0?new N0(o,i,t):new F0(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new O0(o),Pc(e,p)),e=p}}}class kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);B0(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Lc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const z0=37297;let H0=0;function G0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Dc=new Ut;function k0(i){Xt._getMatrix(Dc,Xt.workingColorSpace,i);const t=`mat3( ${Dc.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ic(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+G0(i.getShaderSource(t),o)}else return r}function V0(i,t){const e=k0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const W0={[ch]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[dh]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function X0(i,t){const e=W0[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new P;function Y0(){Xt.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function $0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ns(i){return i!==""}function Uc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(i){return i.replace(K0,Q0)}const J0=new Map;function Q0(i,t){let e=Bt[t];if(e===void 0){const n=J0.get(t);if(n!==void 0)e=Bt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zo(e)}const j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(i){return i.replace(j0,tg)}function tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const eg={[Fr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function ng(i){return eg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ig={[Oi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function sg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ig[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const rg={[_s]:"ENVMAP_MODE_REFRACTION"};function ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const og={[lh]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function lg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":og[i.combine]||"ENVMAP_BLENDING_NONE"}function cg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ng(e),l=sg(e),h=ag(e),p=lg(e),u=cg(e),f=q0(e),x=$0(r),v=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ns).join(`
`),d.length>0&&(d+=`
`)):(m=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),d=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Un?X0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),Y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Zo(a),a=Uc(a,e),a=Nc(a,e),o=Zo(o),o=Uc(o,e),o=Nc(o,e),a=Fc(a),o=Fc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=b+m+a,M=b+d+o,T=Lc(s,s.VERTEX_SHADER,R),y=Lc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,y),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(L){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(T)||"",U=s.getShaderInfoLog(y)||"",B=D.trim(),K=z.trim(),V=U.trim();let nt=!0,X=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,y);else{const j=Ic(s,T,"vertex"),et=Ic(s,y,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+j+`
`+et)}else B!==""?Dt("WebGLProgram: Program Info Log:",B):(K===""||V==="")&&(X=!1);X&&(L.diagnostics={runnable:nt,programLog:B,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(T),s.deleteShader(y),g=new kr(s,v),E=Z0(s,v)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,z0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=y,this}let ug=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fg(t),e.set(t,n)),n}}class fg{constructor(t){this.id=ug++,this.code=t,this.usedTimes=0}}function pg(i){return i===Bi||i===Kr||i===Jr}function mg(i,t,e,n,s,r){const a=new cl,o=new dg,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,E,A,L,D,z){const U=L.fog,B=D.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,nt=t.get(g.envMap||K,V),X=nt&&nt.mapping===da?nt.image.height:null,j=f[g.type];g.precision!==null&&(u=n.getMaxPrecision(g.precision),u!==g.precision&&Dt("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,bt=et!==void 0?et.length:0;let Tt=0;B.morphAttributes.position!==void 0&&(Tt=1),B.morphAttributes.normal!==void 0&&(Tt=2),B.morphAttributes.color!==void 0&&(Tt=3);let te,Yt,Kt,$;if(j){const he=Ln[j];te=he.vertexShader,Yt=he.fragmentShader}else{te=g.vertexShader,Yt=g.fragmentShader;const he=o.getVertexShaderStage(g),Qt=o.getFragmentShaderStage(g);o.update(g,he,Qt),Kt=he.id,$=Qt.id}const tt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),It=D.isInstancedMesh===!0,_t=D.isBatchedMesh===!0,Ht=!!g.map,Ce=!!g.matcap,Gt=!!nt,Zt=!!g.aoMap,ce=!!g.lightMap,Wt=!!g.bumpMap&&g.wireframe===!1,fe=!!g.normalMap,Ue=!!g.displacementMap,tn=!!g.emissiveMap,me=!!g.metalnessMap,Te=!!g.roughnessMap,F=g.anisotropy>0,ke=g.clearcoat>0,ee=g.dispersion>0,C=g.retroreflectivity>0,_=g.iridescence>0,O=g.sheen>0,k=g.transmission>0,q=F&&!!g.anisotropyMap,st=ke&&!!g.clearcoatMap,rt=ke&&!!g.clearcoatNormalMap,Z=ke&&!!g.clearcoatRoughnessMap,Q=_&&!!g.iridescenceMap,at=_&&!!g.iridescenceThicknessMap,wt=O&&!!g.sheenColorMap,ht=O&&!!g.sheenRoughnessMap,ot=!!g.specularMap,At=!!g.specularColorMap,Pt=!!g.specularIntensityMap,Ft=k&&!!g.transmissionMap,N=k&&!!g.thicknessMap,lt=!!g.gradientMap,J=!!g.alphaMap,ct=g.alphaTest>0,mt=!!g.alphaHash,it=!!g.extensions;let Ct=Un;g.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const yt={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:te,fragmentShader:Yt,defines:g.defines,customVertexShaderID:Kt,customFragmentShaderID:$,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:_t,batchingColor:_t&&D._colorsTexture!==null,instancing:It,instancingColor:It&&D.instanceColor!==null,instancingMorph:It&&D.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ht,matcap:Ce,envMap:Gt,envMapMode:Gt&&nt.mapping,envMapCubeUVHeight:X,aoMap:Zt,lightMap:ce,bumpMap:Wt,normalMap:fe,displacementMap:Ue,emissiveMap:tn,normalMapObjectSpace:fe&&g.normalMapType===Gu,normalMapTangentSpace:fe&&g.normalMapType===Wo,packedNormalMap:fe&&g.normalMapType===Wo&&pg(g.normalMap.format),metalnessMap:me,roughnessMap:Te,anisotropy:F,anisotropyMap:q,clearcoat:ke,clearcoatMap:st,clearcoatNormalMap:rt,clearcoatRoughnessMap:Z,dispersion:ee,retroreflection:C,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:O,sheenColorMap:wt,sheenRoughnessMap:ht,specularMap:ot,specularColorMap:At,specularIntensityMap:Pt,transmission:k,transmissionMap:Ft,thicknessMap:N,gradientMap:lt,opaque:g.transparent===!1&&g.blending===zs&&g.alphaToCoverage===!1,alphaMap:J,alphaTest:ct,alphaHash:mt,combine:g.combine,mapUv:Ht&&x(g.map.channel),aoMapUv:Zt&&x(g.aoMap.channel),lightMapUv:ce&&x(g.lightMap.channel),bumpMapUv:Wt&&x(g.bumpMap.channel),normalMapUv:fe&&x(g.normalMap.channel),displacementMapUv:Ue&&x(g.displacementMap.channel),emissiveMapUv:tn&&x(g.emissiveMap.channel),metalnessMapUv:me&&x(g.metalnessMap.channel),roughnessMapUv:Te&&x(g.roughnessMap.channel),anisotropyMapUv:q&&x(g.anisotropyMap.channel),clearcoatMapUv:st&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:rt&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:ht&&x(g.sheenRoughnessMap.channel),specularMapUv:ot&&x(g.specularMap.channel),specularColorMapUv:At&&x(g.specularColorMap.channel),specularIntensityMapUv:Pt&&x(g.specularIntensityMap.channel),transmissionMapUv:Ft&&x(g.transmissionMap.channel),thicknessMapUv:N&&x(g.thicknessMap.channel),alphaMapUv:J&&x(g.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(fe||F),vertexNormals:!!B.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ht||J),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||B.attributes.normal===void 0&&fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:vt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Tt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ht&&g.map.isVideoTexture===!0&&Xt.getTransfer(g.map.colorSpace)===ne,decodeVideoTextureEmissive:tn&&g.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(g.emissiveMap.colorSpace)===ne,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pn,flipSided:g.side===sn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:it&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&g.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function m(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const A in g.defines)E.push(A),E.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(d(E,g),b(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function d(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function b(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function R(g){const E=f[g.type];let A;if(E){const L=Ln[E];A=Rd.clone(L.uniforms)}else A=g.uniforms;return A}function M(g,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new hg(i,E,g,s),l.push(A),h.set(E,A)),A}function T(g){if(--g.usedTimes===0){const E=l.indexOf(g);l[E]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function y(g){o.remove(g)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:T,releaseShaderCache:y,programs:l,dispose:w}}function gg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,x,v,m,d){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:x,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:d},i[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=x,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=m,b.group=d),t++,b}function c(u,f,x,v,m,d,b){b.reversedDepth===!0&&(m=-m);const R=o(u,f,x,v,m,d);x.transmission>0?n.push(R):x.transparent===!0?s.push(R):e.push(R)}function l(u,f,x,v,m,d){const b=o(u,f,x,v,m,d);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(f||Bc),s.length>1&&s.sort(f||Bc)}function p(){for(let u=t,f=i.length;u<f;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function xg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new zc,i.set(n,[a])):s>=r.length?(a=new zc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Nt};break;case"SpotLight":e={position:new P,direction:new P,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sg=0;function yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){const t=new vg,e=Mg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new le,a=new le;function o(l){let h=0,p=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,x=0,v=0,m=0,d=0,b=0,R=0,M=0,T=0,y=0,w=0,g=0,E=0,A=0;l.sort(yg);for(let D=0,z=l.length;D<z;D++){const U=l[D],B=U.color,K=U.intensity,V=U.distance;let nt=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Bi?nt=U.shadow.map.texture:nt=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=B.r*K,p+=B.g*K,u+=B.b*K;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],K);A++}else if(U.isSunLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,et=e.get(U);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=et,n.sunShadowMap[x]=nt;const bt=j.getViewportCount();for(let Tt=0;Tt<bt;Tt++)n.sunShadowMatrix[v+Tt]=j.getMatrix(Tt),n.sunShadowCascade[v+Tt]=j._cascadeData[Tt];v+=bt,x++}n.sun[f]=X,f++}else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const j=U.shadow,et=e.get(U);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=U.shadow.matrix,T++}n.directional[m]=X,m++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(B).multiplyScalar(K),X.distance=V,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[b]=X;const j=U.shadow;if(U.map&&(n.spotLightMap[g]=U.map,g++,j.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[b]=j.matrix,U.castShadow){const et=e.get(U);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.spotShadow[b]=et,n.spotShadowMap[b]=nt,w++}b++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(B).multiplyScalar(K),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[R]=X,R++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const j=U.shadow,et=e.get(U);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,n.pointShadow[d]=et,n.pointShadowMap[d]=nt,n.pointShadowMatrix[d]=U.shadow.matrix,y++}n.point[d]=X,d++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(K),X.groundColor.copy(U.groundColor).multiplyScalar(K),n.hemi[M]=X,M++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==d||L.spotLength!==b||L.rectAreaLength!==R||L.hemiLength!==M||L.numSunShadows!==x||L.numDirectionalShadows!==T||L.numPointShadows!==y||L.numSpotShadows!==w||L.numSpotMaps!==g||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=R,n.point.length=d,n.hemi.length=M,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+g-E,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,L.sunLength=f,L.directionalLength=m,L.pointLength=d,L.spotLength=b,L.rectAreaLength=R,L.hemiLength=M,L.numSunShadows=x,L.numDirectionalShadows=T,L.numPointShadows=y,L.numSpotShadows=w,L.numSpotMaps=g,L.numLightProbes=A,n.version=Sg++)}function c(l,h){let p=0,u=0,f=0,x=0,v=0,m=0;const d=h.matrixWorldInverse;for(let b=0,R=l.length;b<R;b++){const M=l[b];if(M.isSunLight){const T=n.sun[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),p++}else if(M.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),u++}else if(M.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),x++}else if(M.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function Hc(i){const t=new Eg(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function bg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Hc(i),t.set(s,[o])):r>=a.length?(o=new Hc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ag=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Rg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Gc=new le,Ls=new P,ja=new P;function Cg(i,t,e){let n=new hl;const s=new Lt,r=new Lt,a=new ge,o=new Dd,c=new Id,l={},h=e.maxTextureSize,p={[Fi]:sn,[sn]:Fi,[pn]:pn},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Tg,fragmentShader:wg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const x=new be;x.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let d=this.type;this.render=function(y,w,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===xu&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fr);const E=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Jn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=d!==this.type;z&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(B=>B.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,B=y.length;U<B;U++){const K=y[U],V=K.shadow;if(V===void 0){Dt("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const nt=V.getFrameExtents();s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Us){if(K.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new yn(s.x,s.y,{format:Bi,type:On,minFilter:$e,magFilter:$e,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Ws(s.x,s.y,Dn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=ti,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ge,V.map.depthTexture.magFilter=Ge}else K.isPointLight?(V.map=new zh(s.x),V.map.depthTexture=new wd(s.x,Fn)):(V.map=new yn(s.x,s.y),V.map.depthTexture=new Ws(s.x,s.y,Fn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=ti,this.type===Fr?(V.map.depthTexture.compareFunction=X?ol:al,V.map.depthTexture.minFilter=$e,V.map.depthTexture.magFilter=$e):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ge,V.map.depthTexture.magFilter=Ge);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,g);for(let et=0;et<j;et++){const bt=V.getCamera(et);if(K.isPointLight){const Tt=V.camera,te=V.matrix,Yt=K.distance||Tt.far;Yt!==Tt.far&&(Tt.far=Yt,Tt.updateProjectionMatrix()),Ls.setFromMatrixPosition(K.matrixWorld),Tt.position.copy(Ls),ja.copy(Tt.position),ja.add(Ag[et]),Tt.up.copy(Rg[et]),Tt.lookAt(ja),Tt.updateMatrixWorld(),te.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Gc.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Gc,Tt.coordinateSystem,Tt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,et),i.clear();else{et===0&&(i.setRenderTarget(V.map),i.clear());const Tt=V.getViewport(et);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),D.viewport(a)}n=V.getFrustum(et),M(w,g,bt,K,this.type)}V.isPointLightShadow!==!0&&this.type===Us&&b(V,g),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,L)};function b(y,w){const g=t.update(v);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null?y.mapPass=new yn(s.x,s.y,{format:Bi,type:On}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,g,u,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,g,f,v,null)}function R(y,w,g,E){let A=null;const L=g.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)A=L;else if(A=g.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=A.uuid,z=w.uuid;let U=l[D];U===void 0&&(U={},l[D]=U);let B=U[z];B===void 0&&(B=A.clone(),U[z]=B,w.addEventListener("dispose",T)),A=B}if(A.visible=w.visible,A.wireframe=w.wireframe,E===Us?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:p[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,g.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const D=i.properties.get(A);D.light=g}return A}function M(y,w,g,E,A){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&A===Us)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld);const z=t.update(y),U=y.material;if(Array.isArray(U)){const B=z.groups;for(let K=0,V=B.length;K<V;K++){const nt=B[K],X=U[nt.materialIndex];if(X&&X.visible){const j=R(y,X,E,A);y.onBeforeShadow(i,y,w,g,z,j,nt),i.renderBufferDirect(g,null,z,j,y,nt),y.onAfterShadow(i,y,w,g,z,j,nt)}}}else if(U.visible){const B=R(y,U,E,A);y.onBeforeShadow(i,y,w,g,z,B,null),i.renderBufferDirect(g,null,z,B,y,null),y.onAfterShadow(i,y,w,g,z,B,null)}}const D=y.children;for(let z=0,U=D.length;z<U;z++)M(D[z],w,g,E,A)}function T(y){y.target.removeEventListener("dispose",T);for(const g in l){const E=l[g],A=y.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Pg(i,t){function e(){let N=!1;const lt=new ge;let J=null;const ct=new ge(0,0,0,0);return{setMask:function(mt){J!==mt&&!N&&(i.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){N=mt},setClear:function(mt,it,Ct,yt,he){he===!0&&(mt*=yt,it*=yt,Ct*=yt),lt.set(mt,it,Ct,yt),ct.equals(lt)===!1&&(i.clearColor(mt,it,Ct,yt),ct.copy(lt))},reset:function(){N=!1,J=null,ct.set(-1,0,0,0)}}}function n(){let N=!1,lt=!1,J=null,ct=null,mt=null;return{setReversed:function(it){if(lt!==it){const Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),lt=it;const yt=mt;mt=null,this.setClear(yt)}},getReversed:function(){return lt},setTest:function(it){it?tt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(it){J!==it&&!N&&(i.depthMask(it),J=it)},setFunc:function(it){if(lt&&(it=ju[it]),ct!==it){switch(it){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=it}},setLocked:function(it){N=it},setClear:function(it){mt!==it&&(mt=it,lt&&(it=1-it),i.clearDepth(it))},reset:function(){N=!1,J=null,ct=null,mt=null,lt=!1}}}function s(){let N=!1,lt=null,J=null,ct=null,mt=null,it=null,Ct=null,yt=null,he=null;return{setTest:function(Qt){N||(Qt?tt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!N&&(i.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,gn,bn){(J!==Qt||ct!==gn||mt!==bn)&&(i.stencilFunc(Qt,gn,bn),J=Qt,ct=gn,mt=bn)},setOp:function(Qt,gn,bn){(it!==Qt||Ct!==gn||yt!==bn)&&(i.stencilOp(Qt,gn,bn),it=Qt,Ct=gn,yt=bn)},setLocked:function(Qt){N=Qt},setClear:function(Qt){he!==Qt&&(i.clearStencil(Qt),he=Qt)},reset:function(){N=!1,lt=null,J=null,ct=null,mt=null,it=null,Ct=null,yt=null,he=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},p={},u={},f=new WeakMap,x=[],v=null,m=!1,d=null,b=null,R=null,M=null,T=null,y=null,w=null,g=new Nt(0,0,0),E=0,A=!1,L=null,D=null,z=null,U=null,B=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=nt>=2);let j=null,et={};const bt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),te=new ge().fromArray(bt),Yt=new ge().fromArray(Tt);function Kt(N,lt,J,ct){const mt=new Uint8Array(4),it=i.createTexture();i.bindTexture(N,it),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<J;Ct++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(lt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return it}const $={};$[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Hs),Wt(!1),fe(Ol),tt(i.CULL_FACE),Zt(Jn);function tt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function vt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function It(N,lt){return u[N]!==lt?(i.bindFramebuffer(N,lt),u[N]=lt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function _t(N,lt){let J=x,ct=!1;if(N){J=f.get(lt),J===void 0&&(J=[],f.set(lt,J));const mt=N.textures;if(J.length!==mt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ct=mt.length;it<Ct;it++)J[it]=i.COLOR_ATTACHMENT0+it;J.length=mt.length,ct=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ct=!0);ct&&i.drawBuffers(J)}function Ht(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const Ce={[os]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};Ce[yu]=i.MIN,Ce[Eu]=i.MAX;const Gt={[bu]:i.ZERO,[Tu]:i.ONE,[wu]:i.SRC_COLOR,[ah]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(N,lt,J,ct,mt,it,Ct,yt,he,Qt){if(N===Jn){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),N!==vu){if(N!==d||Qt!==A){if((b!==os||T!==os)&&(i.blendEquation(i.FUNC_ADD),b=os,T=os),Qt)switch(N){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",N);break}else switch(N){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",N);break}R=null,M=null,y=null,w=null,g.set(0,0,0),E=0,d=N,A=Qt}return}mt=mt||lt,it=it||J,Ct=Ct||ct,(lt!==b||mt!==T)&&(i.blendEquationSeparate(Ce[lt],Ce[mt]),b=lt,T=mt),(J!==R||ct!==M||it!==y||Ct!==w)&&(i.blendFuncSeparate(Gt[J],Gt[ct],Gt[it],Gt[Ct]),R=J,M=ct,y=it,w=Ct),(yt.equals(g)===!1||he!==E)&&(i.blendColor(yt.r,yt.g,yt.b,he),g.copy(yt),E=he),d=N,A=!1}function ce(N,lt){N.side===pn?vt(i.CULL_FACE):tt(i.CULL_FACE);let J=N.side===sn;lt&&(J=!J),Wt(J),N.blending===zs&&N.transparent===!1?Zt(Jn):Zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ct=N.stencilWrite;o.setTest(ct),ct&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),tn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function fe(N){N!==gu?(tt(i.CULL_FACE),N!==D&&(N===Ol?i.cullFace(i.BACK):N===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),D=N}function Ue(N){N!==z&&(V&&i.lineWidth(N),z=N)}function tn(N,lt,J){N?(tt(i.POLYGON_OFFSET_FILL),(U!==lt||B!==J)&&(U=lt,B=J,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,J))):vt(i.POLYGON_OFFSET_FILL)}function me(N){N?tt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Te(N){N===void 0&&(N=i.TEXTURE0+K-1),j!==N&&(i.activeTexture(N),j=N)}function F(N,lt,J){J===void 0&&(j===null?J=i.TEXTURE0+K-1:J=j);let ct=et[J];ct===void 0&&(ct={type:void 0,texture:void 0},et[J]=ct),(ct.type!==N||ct.texture!==lt)&&(j!==J&&(i.activeTexture(J),j=J),i.bindTexture(N,lt||$[N]),ct.type=N,ct.texture=lt)}function ke(){const N=et[j];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function st(){try{i.texStorage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function rt(){try{i.texStorage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function Z(){try{i.texImage2D(...arguments)}catch(N){$t("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){$t("WebGLState:",N)}}function at(N){return p[N]!==void 0?p[N]:i.getParameter(N)}function wt(N,lt){p[N]!==lt&&(i.pixelStorei(N,lt),p[N]=lt)}function ht(N){te.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),te.copy(N))}function ot(N){Yt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Yt.copy(N))}function At(N,lt){let J=l.get(lt);J===void 0&&(J=new WeakMap,l.set(lt,J));let ct=J.get(N);ct===void 0&&(ct=i.getUniformBlockIndex(lt,N.name),J.set(N,ct))}function Pt(N,lt){const ct=l.get(lt).get(N);c.get(lt)!==ct&&(i.uniformBlockBinding(lt,ct,N.__bindingPointIndex),c.set(lt,ct))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},j=null,et={},u={},f=new WeakMap,x=[],v=null,m=!1,d=null,b=null,R=null,M=null,T=null,y=null,w=null,g=new Nt(0,0,0),E=0,A=!1,L=null,D=null,z=null,U=null,B=null,te.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:It,drawBuffers:_t,useProgram:Ht,setBlending:Zt,setMaterial:ce,setFlipSided:Wt,setCullFace:fe,setLineWidth:Ue,setPolygonOffset:tn,setScissorTest:me,activeTexture:Te,bindTexture:F,unbindTexture:ke,compressedTexImage2D:ee,compressedTexImage3D:C,texImage2D:Z,texImage3D:Q,pixelStorei:wt,getParameter:at,updateUBOMapping:At,uniformBlockBinding:Pt,texStorage2D:st,texStorage3D:rt,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:q,scissor:ht,viewport:ot,reset:Ft}}function Lg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,h=new WeakMap,p=new Set;let u;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,_){return x?new OffscreenCanvas(C,_):ta("canvas")}function m(C,_,O){let k=1;const q=ee(C);if((q.width>O||q.height>O)&&(k=O/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const st=Math.floor(k*q.width),rt=Math.floor(k*q.height);u===void 0&&(u=v(st,rt));const Z=_?v(st,rt):u;return Z.width=st,Z.height=rt,Z.getContext("2d").drawImage(C,0,0,st,rt),Dt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+st+"x"+rt+")."),Z}else return"data"in C&&Dt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function d(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,_,O,k,q,st=!1){if(C!==null){if(i[C]!==void 0)return i[C];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8),O===i.UNSIGNED_SHORT&&rt&&(Z=rt.R16_EXT),O===i.SHORT&&rt&&(Z=rt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8),O===i.UNSIGNED_SHORT&&rt&&(Z=rt.RG16_EXT),O===i.SHORT&&rt&&(Z=rt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&rt&&(Z=rt.RGB16_EXT),O===i.SHORT&&rt&&(Z=rt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){const Q=st?jr:Xt.getTransfer(q);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=Q===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&rt&&(Z=rt.RGBA16_EXT),O===i.SHORT&&rt&&(Z=rt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(C,_){let O;return C?_===null||_===Fn||_===ks?O=i.DEPTH24_STENCIL8:_===Dn?O=i.DEPTH32F_STENCIL8:_===Gs&&(O=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fn||_===ks?O=i.DEPTH_COMPONENT24:_===Dn?O=i.DEPTH_COMPONENT32F:_===Gs&&(O=i.DEPTH_COMPONENT16),O}function y(C,_){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==$e?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function w(C){const _=C.target;_.removeEventListener("dispose",w),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function g(C){const _=C.target;_.removeEventListener("dispose",g),L(_)}function E(C){const _=n.get(C);if(_.__webglInit===void 0)return;const O=C.source,k=f.get(O);if(k){const q=k[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&A(C),Object.keys(k).length===0&&f.delete(O)}n.remove(C)}function A(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const O=C.source,k=f.get(O);delete k[_.__cacheKey],a.memory.textures--}function L(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let q=0;q<_.__webglFramebuffer[k].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[k][q]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=C.textures;for(let k=0,q=O.length;k<q;k++){const st=n.get(O[k]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(O[k])}n.remove(C)}let D=0;function z(){D=0}function U(){return D}function B(C){D=C}function K(){const C=D;return C>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function V(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function nt(C,_){const O=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const k=C.image;if(k===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function X(C,_){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){vt(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function j(C,_){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){vt(O,C,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function et(C,_){const O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){It(O,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const bt={[uo]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},Tt={[Ge]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},te={[Vu]:i.NEVER,[$u]:i.ALWAYS,[Wu]:i.LESS,[al]:i.LEQUAL,[Xu]:i.EQUAL,[ol]:i.GEQUAL,[Yu]:i.GREATER,[qu]:i.NOTEQUAL};function Yt(C,_){if(_.type===Dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===$e||_.magFilter===Ea||_.magFilter===ir||_.magFilter===Ci||_.minFilter===$e||_.minFilter===Ea||_.minFilter===ir||_.minFilter===Ci)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,bt[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,bt[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,bt[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Tt[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Tt[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,te[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ge||_.minFilter!==ir&&_.minFilter!==Ci||_.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",w));const k=_.source;let q=f.get(k);q===void 0&&(q={},f.set(k,q));const st=V(_);if(st!==C.__cacheKey){q[st]===void 0&&(q[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[st].usedTimes++;const rt=q[C.__cacheKey];rt!==void 0&&(q[C.__cacheKey].usedTimes--,rt.usedTimes===0&&A(_)),C.__cacheKey=st,C.__webglTexture=q[st].texture}return O}function $(C,_,O){return Math.floor(Math.floor(C/O)/_)}function tt(C,_,O,k){const st=C.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,k,_.data);else{st.sort((wt,ht)=>wt.start-ht.start);let rt=0;for(let wt=1;wt<st.length;wt++){const ht=st[rt],ot=st[wt],At=ht.start+ht.count,Pt=$(ot.start,_.width,4),Ft=$(ht.start,_.width,4);ot.start<=At+1&&Pt===Ft&&$(ot.start+ot.count-1,_.width,4)===Pt?ht.count=Math.max(ht.count,ot.start+ot.count-ht.start):(++rt,st[rt]=ot)}st.length=rt+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let wt=0,ht=st.length;wt<ht;wt++){const ot=st[wt],At=Math.floor(ot.start/4),Pt=Math.ceil(ot.count/4),Ft=At%_.width,N=Math.floor(At/_.width),lt=Pt,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Ft,N,lt,J,O,k,_.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function vt(C,_,O){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const q=Kt(C,_),st=_.source;e.bindTexture(k,C.__webglTexture,i.TEXTURE0+O);const rt=n.get(st);if(st.version!==rt.__version||q===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const J=Xt.getPrimaries(Xt.workingColorSpace),ct=_.colorSpace===fi?null:Xt.getPrimaries(_.colorSpace),mt=_.colorSpace===fi||J===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=ke(_,Q);const at=r.convert(_.format,_.colorSpace),wt=r.convert(_.type);let ht=M(_.internalFormat,at,wt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(k,_);let ot;const At=_.mipmaps,Pt=_.isVideoTexture!==!0,Ft=rt.__version===void 0||q===!0,N=st.dataReady,lt=y(_,Q);if(_.isDepthTexture)ht=T(_.format===Pi,_.type),Ft&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,ht,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,at,wt,null));else if(_.isDataTexture)if(At.length>0){Pt&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ht,At[0].width,At[0].height);for(let J=0,ct=At.length;J<ct;J++)ot=At[J],Pt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,at,wt,ot.data):e.texImage2D(i.TEXTURE_2D,J,ht,ot.width,ot.height,0,at,wt,ot.data);_.generateMipmaps=!1}else Pt?(Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ht,Q.width,Q.height),N&&tt(_,Q,at,wt)):e.texImage2D(i.TEXTURE_2D,0,ht,Q.width,Q.height,0,at,wt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pt&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,At[0].width,At[0].height,Q.depth);for(let J=0,ct=At.length;J<ct;J++)if(ot=At[J],_.format!==Sn)if(at!==null)if(Pt){if(N)if(_.layerUpdates.size>0){const mt=vc(ot.width,ot.height,_.format,_.type);for(const it of _.layerUpdates){const Ct=ot.data.subarray(it*mt/ot.data.BYTES_PER_ELEMENT,(it+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,it,ot.width,ot.height,1,at,Ct)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,Q.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ht,ot.width,ot.height,Q.depth,0,ot.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,Q.depth,at,wt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,ht,ot.width,ot.height,Q.depth,0,at,wt,ot.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pt&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ht,At[0].width,At[0].height);for(let J=0,ct=At.length;J<ct;J++)ot=At[J],_.format!==Sn?at!==null?Pt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,J,ht,ot.width,ot.height,0,ot.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,at,wt,ot.data):e.texImage2D(i.TEXTURE_2D,J,ht,ot.width,ot.height,0,at,wt,ot.data)}else if(_.isDataArrayTexture)if(Pt){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ht,Q.width,Q.height,Q.depth),N)if(_.layerUpdates.size>0){const J=vc(Q.width,Q.height,_.format,_.type);for(const ct of _.layerUpdates){const mt=Q.data.subarray(ct*J/Q.data.BYTES_PER_ELEMENT,(ct+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,Q.width,Q.height,1,at,wt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,wt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,Q.width,Q.height,Q.depth,0,at,wt,Q.data);else if(_.isData3DTexture)Pt?(Ft&&e.texStorage3D(i.TEXTURE_3D,lt,ht,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,wt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ht,Q.width,Q.height,Q.depth,0,at,wt,Q.data);else if(_.isFramebufferTexture){if(Ft)if(Pt)e.texStorage2D(i.TEXTURE_2D,lt,ht,Q.width,Q.height);else{let J=Q.width,ct=Q.height;for(let mt=0;mt<lt;mt++)e.texImage2D(i.TEXTURE_2D,mt,ht,J,ct,0,at,wt,null),J>>=1,ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),p.add(_),J.onpaint=ct=>{const mt=ct.changedElements;for(const it of p)mt.includes(it.image)&&(it.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const mt=i.RGBA,it=i.RGBA,Ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,it,Ct,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(Pt&&Ft){const J=ee(At[0]);e.texStorage2D(i.TEXTURE_2D,lt,ht,J.width,J.height)}for(let J=0,ct=At.length;J<ct;J++)ot=At[J],Pt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at,wt,ot):e.texImage2D(i.TEXTURE_2D,J,ht,at,wt,ot);_.generateMipmaps=!1}else if(Pt){if(Ft){const J=ee(Q);e.texStorage2D(i.TEXTURE_2D,lt,ht,J.width,J.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,wt,Q)}else e.texImage2D(i.TEXTURE_2D,0,ht,at,wt,Q);d(_)&&b(k),rt.__version=st.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function It(C,_,O){if(_.image.length!==6)return;const k=Kt(C,_),q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);const st=n.get(q);if(q.version!==st.__version||k===!0){e.activeTexture(i.TEXTURE0+O);const rt=Xt.getPrimaries(Xt.workingColorSpace),Z=_.colorSpace===fi?null:Xt.getPrimaries(_.colorSpace),Q=_.colorSpace===fi||rt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const at=_.isCompressedTexture||_.image[0].isCompressedTexture,wt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let it=0;it<6;it++)!at&&!wt?ht[it]=m(_.image[it],!0,s.maxCubemapSize):ht[it]=wt?_.image[it].image:_.image[it],ht[it]=ke(_,ht[it]);const ot=ht[0],At=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),Ft=M(_.internalFormat,At,Pt,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,lt=st.__version===void 0||k===!0,J=q.dataReady;let ct=y(_,ot);Yt(i.TEXTURE_CUBE_MAP,_);let mt;if(at){N&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,ot.width,ot.height);for(let it=0;it<6;it++){mt=ht[it].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const yt=mt[Ct];_.format!==Sn?At!==null?N?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,yt.width,yt.height,At,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Ft,yt.width,yt.height,0,yt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,yt.width,yt.height,At,Pt,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Ft,yt.width,yt.height,0,At,Pt,yt.data)}}}else{if(mt=_.mipmaps,N&&lt){mt.length>0&&ct++;const it=ee(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,it.width,it.height)}for(let it=0;it<6;it++)if(wt){N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ht[it].width,ht[it].height,At,Pt,ht[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,ht[it].width,ht[it].height,0,At,Pt,ht[it].data);for(let Ct=0;Ct<mt.length;Ct++){const he=mt[Ct].image[it].image;N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,he.width,he.height,At,Pt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Ft,he.width,he.height,0,At,Pt,he.data)}}else{N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,At,Pt,ht[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,At,Pt,ht[it]);for(let Ct=0;Ct<mt.length;Ct++){const yt=mt[Ct];N?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,At,Pt,yt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Ft,At,Pt,yt.image[it])}}}d(_)&&b(i.TEXTURE_CUBE_MAP),st.__version=q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function _t(C,_,O,k,q,st){const rt=r.convert(O.format,O.colorSpace),Z=r.convert(O.type),Q=M(O.internalFormat,rt,Z,O.normalized,O.colorSpace),at=n.get(_),wt=n.get(O);if(wt.__renderTarget=_,!at.__hasExternalTextures){const ht=Math.max(1,_.width>>st),ot=Math.max(1,_.height>>st);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,st,Q,ht,ot,_.depth,0,rt,Z,null):e.texImage2D(q,st,Q,ht,ot,0,rt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Te(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,q,wt.__webglTexture,0,me(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,q,wt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const k=_.depthTexture,q=k&&k.isDepthTexture?k.type:null,st=T(_.stencilBuffer,q),rt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(_),st,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,C)}else{const k=_.textures;for(let q=0;q<k.length;q++){const st=k[q],rt=r.convert(st.format,st.colorSpace),Z=r.convert(st.type),Q=M(st.internalFormat,rt,Z,st.normalized,st.colorSpace);Te(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(_),Q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(C,_,O){const k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);const at=r.convert(_.depthTexture.format),wt=r.convert(_.depthTexture.type);let ht;_.depthTexture.format===ti?ht=i.DEPTH_COMPONENT24:_.depthTexture.format===Pi&&(ht=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ht,_.width,_.height,0,at,wt,null)}}else nt(_.depthTexture,0);const st=q.__webglTexture,rt=me(_),Z=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=_.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ti)Te(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,st,0);else if(_.depthTexture.format===Pi)Te(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,st,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(C){const _=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const k=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=k}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)Ce(_.__webglFramebuffer[k],C,k);else{const k=C.texture.mipmaps;k&&k.length>0?Ce(_.__webglFramebuffer[0],C,0):Ce(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Ht(_.__webglDepthbuffer[k],C,!1);else{const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,st)}}else{const k=C.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ht(_.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(C,_,O){const k=n.get(C);_!==void 0&&_t(k.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Gt(C)}function ce(C){const _=C.texture,O=n.get(C),k=n.get(_);C.addEventListener("dispose",g);const q=C.textures,st=C.isWebGLCubeRenderTarget===!0,rt=q.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let Q=0;Q<_.mipmaps.length;Q++)O.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else O.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)O.__webglFramebuffer[Z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(rt)for(let Z=0,Q=q.length;Z<Q;Z++){const at=n.get(q[Z]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Te(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){const Q=q[Z];O.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);const at=r.convert(Q.format,Q.colorSpace),wt=r.convert(Q.type),ht=M(Q.internalFormat,at,wt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ot=me(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ht,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)_t(O.__webglFramebuffer[Z][Q],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else _t(O.__webglFramebuffer[Z],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(_)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let Z=0,Q=q.length;Z<Q;Z++){const at=q[Z],wt=n.get(at);let ht=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,wt.__webglTexture),Yt(ht,at),_t(O.__webglFramebuffer,C,at,i.COLOR_ATTACHMENT0+Z,ht,0),d(at)&&b(ht)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,k.__webglTexture),Yt(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)_t(O.__webglFramebuffer[Q],C,_,i.COLOR_ATTACHMENT0,Z,Q);else _t(O.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,Z,0);d(_)&&b(Z),e.unbindTexture()}C.depthBuffer&&Gt(C)}function Wt(C){const _=C.textures;for(let O=0,k=_.length;O<k;O++){const q=_[O];if(d(q)){const st=R(C),rt=n.get(q).__webglTexture;e.bindTexture(st,rt),b(st),e.unbindTexture()}}}const fe=[],Ue=[];function tn(C){if(C.samples>0){if(Te(C)===!1){const _=C.textures,O=C.width,k=C.height;let q=i.COLOR_BUFFER_BIT;const st=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(C),Z=_.length>1;if(Z)for(let at=0;at<_.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let at=0;at<_.length;at++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const wt=n.get(_[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,O,k,0,0,O,k,q,i.NEAREST),c===!0&&(fe.length=0,Ue.length=0,fe.push(i.COLOR_ATTACHMENT0+at),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(fe.push(st),Ue.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let at=0;at<_.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,rt.__webglColorRenderbuffer[at]);const wt=n.get(_[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function me(C){return Math.min(s.maxSamples,C.samples)}function Te(C){const _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(C){const _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function ke(C,_){const O=C.colorSpace,k=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Qr&&O!==fi&&(Xt.getTransfer(O)===ne?(k!==Sn||q!==cn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",O)),_}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=U,this.setTextureUnits=B,this.setTexture2D=nt,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=Zt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Dg(i,t){function e(n,s=fi){let r;const a=Xt.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_h)return i.BYTE;if(n===xh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Sh)return i.ALPHA;if(n===yh)return i.RGB;if(n===Sn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===il)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===Hr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===vo||n===Mo||n===So||n===yo||n===Kr||n===Eo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===vo)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===So)return r.COMPRESSED_R11_EAC;if(n===yo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Kr)return r.COMPRESSED_RG11_EAC;if(n===Eo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Do)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bo||n===zo||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bo)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Go||n===ko||n===Jr||n===Vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Lh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Bn({vertexShader:Ig,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends gi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,u=null,f=null,x=null;const v=typeof XRWebGLBinding<"u",m=new Ng,d={},b=e.getContextAttributes();let R=null,M=null;const T=[],y=[],w=new Lt;let g=null,E=null;const A=new ln;A.viewport=new ge;const L=new ln;L.viewport=new ge;const D=[A,L],z=new Hd;let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=T[$];return tt===void 0&&(tt=new La,T[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=T[$];return tt===void 0&&(tt=new La,T[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=T[$];return tt===void 0&&(tt=new La,T[$]=tt),tt.getHandSpace()};function K($){const tt=y.indexOf($.inputSource);if(tt===-1)return;const vt=T[tt];vt!==void 0&&(vt.update($.inputSource,$.frame,l||a),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let $=0;$<T.length;$++){const tt=y[$];tt!==null&&(y[$]=null,T[$].disconnect(tt))}U=null,B=null,m.reset();for(const $ in d)delete d[$];if(t.setRenderTarget(R),f=null,u=null,p=null,s=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(w.width,w.height,!1),E!==null){const $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&v&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,It=null,_t=null;b.depth&&(_t=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=b.stencil?Pi:ti,It=b.stencil?ks:Fn);const Ht={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new yn(u.textureWidth,u.textureHeight,{format:Sn,type:cn,depthTexture:new Ws(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt($){for(let tt=0;tt<$.removed.length;tt++){const vt=$.removed[tt],It=y.indexOf(vt);It>=0&&(y[It]=null,T[It].disconnect(vt))}for(let tt=0;tt<$.added.length;tt++){const vt=$.added[tt];let It=y.indexOf(vt);if(It===-1){for(let Ht=0;Ht<T.length;Ht++)if(Ht>=y.length){y.push(vt),It=Ht;break}else if(y[Ht]===null){y[Ht]=vt,It=Ht;break}if(It===-1)break}const _t=T[It];_t&&_t.connect(vt)}}const X=new P,j=new P;function et($,tt,vt){X.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const It=X.distanceTo(j),_t=tt.projectionMatrix.elements,Ht=vt.projectionMatrix.elements,Ce=_t[14]/(_t[10]-1),Gt=_t[14]/(_t[10]+1),Zt=(_t[9]+1)/_t[5],ce=(_t[9]-1)/_t[5],Wt=(_t[8]-1)/_t[0],fe=(Ht[8]+1)/Ht[0],Ue=Ce*Wt,tn=Ce*fe,me=It/(-Wt+fe),Te=me*-Wt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Te),$.translateZ(me),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),_t[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const F=Ce+me,ke=Gt+me,ee=Ue-Te,C=tn+(It-Te),_=Zt*Gt/ke*F,O=ce*Gt/ke*F;$.projectionMatrix.makePerspective(ee,C,_,O,F,ke),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function bt($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let tt=$.near,vt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),z.near=L.near=A.near=tt,z.far=L.far=A.far=vt,(U!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),U=z.near,B=z.far),z.layers.mask=$.layers.mask|6,A.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const It=$.parent,_t=z.cameras;bt(z,It);for(let Ht=0;Ht<_t.length;Ht++)bt(_t[Ht],It);_t.length===2?et(z,A,L):z.projectionMatrix.copy(A.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),Tt($,z,It)};function Tt($,tt,vt){vt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Xo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return d[$]};let te=null;function Yt($,tt){if(h=tt.getViewerPose(l||a),x=tt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let It=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,It=!0);for(let Gt=0;Gt<vt.length;Gt++){const Zt=vt[Gt];let ce=null;if(f!==null)ce=f.getViewport(Zt);else{const fe=p.getViewSubImage(u,Zt);ce=fe.viewport,Gt===0&&(t.setRenderTargetTextures(M,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(M))}let Wt=D[Gt];Wt===void 0&&(Wt=new ln,Wt.layers.enable(Gt),Wt.viewport=new ge,D[Gt]=Wt),Wt.matrix.fromArray(Zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ce.x,ce.y,ce.width,ce.height),Gt===0&&(z.matrix.copy(Wt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),It===!0&&z.cameras.push(Wt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){p=n.getBinding();const Gt=p.getDepthInformation(vt[0]);Gt&&Gt.isValid&&Gt.texture&&m.init(Gt,s.renderState)}if(_t&&_t.includes("camera-access")&&v){t.state.unbindTexture(),p=n.getBinding();for(let Gt=0;Gt<vt.length;Gt++){const Zt=vt[Gt].camera;if(Zt){let ce=d[Zt];ce||(ce=new Lh,d[Zt]=ce);const Wt=p.getCameraImage(Zt);ce.sourceTexture=Wt}}}}for(let vt=0;vt<T.length;vt++){const It=y[vt],_t=T[vt];It!==null&&_t!==void 0&&_t.update(It,tt,l||a)}te&&te($,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),x=null}const Kt=new Oh;Kt.setAnimationLoop(Yt),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}}const Og=new le,Wh=new Ut;Wh.set(-1,0,0,0,1,0,0,0,1);function Bg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Dh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,R,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,b,R):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),R=b.envMap,M=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wh),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,R){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=R*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const y=T.program;n.uniformBlockBinding(M,y)}function l(M,T){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",b));const w=T.program;n.updateUBOMapping(M,w);const g=t.render.frame;r[M.id]!==g&&(u(M),r[M.id]=g)}function h(M){const T=p();M.__bindingPointIndex=T;const y=i.createBuffer(),w=M.__size,g=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const T=s[M.id],y=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let g=0,E=y.length;g<E;g++){const A=y[g];if(Array.isArray(A))for(let L=0,D=A.length;L<D;L++)f(A[L],g,L,w);else f(A,g,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,T,y,w){if(v(M,T,y,w)===!0){const g=M.__offset,E=M.value;if(Array.isArray(E)){let A=0;for(let L=0;L<E.length;L++){const D=E[L],z=d(D);x(D,M.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,M.__data)}}function x(M,T,y){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,y)}function v(M,T,y,w){const g=M.value,E=T+"_"+y;if(w[E]===void 0)return typeof g=="number"||typeof g=="boolean"?w[E]=g:ArrayBuffer.isView(g)?w[E]=g.slice():w[E]=g.clone(),!0;{const A=w[E];if(typeof g=="number"||typeof g=="boolean"){if(A!==g)return w[E]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(A.equals(g)===!1)return A.copy(g),!0}}return!1}function m(M){const T=M.uniforms;let y=0;const w=16;for(let E=0,A=T.length;E<A;E++){const L=Array.isArray(T[E])?T[E]:[T[E]];for(let D=0,z=L.length;D<z;D++){const U=L[D],B=Array.isArray(U.value)?U.value:[U.value];for(let K=0,V=B.length;K<V;K++){const nt=B[K],X=d(nt),j=y%w,et=j%X.boundary,bt=j+et;y+=et,bt!==0&&w-bt<X.storage&&(y+=w-bt),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=X.storage}}}const g=y%w;return g>0&&(y+=w-g),M.__size=y,M.__cache={},this}function d(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",M),T}function b(M){const T=M.target;T.removeEventListener("dispose",b);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function R(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}const Hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function Gg(){return An===null&&(An=new Ed(Hg,16,16,Bi,On),An.name="DFG_LUT",An.minFilter=$e,An.magFilter=$e,An.wrapS=$n,An.wrapT=$n,An.generateMipmaps=!1,An.needsUpdate=!0),An}class kg{constructor(t={}){const{canvas:e=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=cn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const v=f,m=new Set([rl,sl,il]),d=new Set([cn,Fn,Gs,ks,el,nl]),b=new Uint32Array(4),R=new Int32Array(4),M=new P;let T=null,y=null;const w=[],g=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,D=null,z=null,U=null,B=null;this._outputColorSpace=dn;let K=0,V=0,nt=null,X=-1,j=null;const et=new ge,bt=new ge;let Tt=null;const te=new Nt(0);let Yt=0,Kt=e.width,$=e.height,tt=1,vt=null,It=null;const _t=new ge(0,0,Kt,$),Ht=new ge(0,0,Kt,$);let Ce=!1;const Gt=new hl;let Zt=!1,ce=!1;const Wt=new le,fe=new P,Ue=new ge,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Te(){return nt===null?tt:1}let F=n;function ke(S,I){return e.getContext(S,I)}let ee,C,_,O,k,q,st,rt,Z,Q,at,wt,ht,ot,At,Pt,Ft,N,lt,J,ct,mt,it;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",gn,!1),F===null){const I="webgl2";if(F=ke(I,S),F===null)throw ke(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ct()}catch(S){throw e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),$t("WebGLRenderer: "+S.message),S}function Ct(){ee=new Gm(F),ee.init(),ct=new Dg(F,ee),C=new Lm(F,ee,t,ct),_=new Pg(F,ee),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),z=F.createFramebuffer(),U=F.createFramebuffer(),B=F.createFramebuffer(),O=new Wm(F),k=new gg,q=new Lg(F,ee,_,k,C,ct,O),st=new Hm(A),rt=new Xd(F),mt=new Cm(F,rt),Z=new km(F,rt,O,mt),Q=new Ym(F,Z,rt,mt,O),N=new Xm(F,C,q),At=new Dm(k),at=new mg(A,st,ee,C,mt,At),wt=new Bg(A,k),ht=new xg,ot=new bg(ee),Ft=new Rm(A,st,_,Q,x,c),Pt=new Cg(A,Q,C),it=new zg(F,O,C,_),lt=new Pm(F,ee,O),J=new Vm(F,ee,O),O.programs=at.programs,A.capabilities=C,A.extensions=ee,A.properties=k,A.renderLists=ht,A.shadowMap=Pt,A.state=_,A.info=O}v!==cn&&(E=new $m(v,e.width,e.height,o,s,r));const yt=new Fg(A,F);this.xr=yt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(Kt,$,!1))},this.getSize=function(S){return S.set(Kt,$)},this.setSize=function(S,I,W=!0){if(yt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=S,$=I,e.width=Math.floor(S*tt),e.height=Math.floor(I*tt),W===!0&&(e.style.width=S+"px",e.style.height=I+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Kt*tt,$*tt).floor()},this.setDrawingBufferSize=function(S,I,W){Kt=S,$=I,tt=W,e.width=Math.floor(S*W),e.height=Math.floor(I*W),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(v===cn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,I,W,H){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,I,W,H),_.viewport(et.copy(_t).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,I,W,H){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,I,W,H),_.scissor(bt.copy(Ht).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(S){_.setScissorTest(Ce=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){It=S},this.getClearColor=function(S){return S.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,W=!0){let H=0;if(S){let G=!1;if(nt!==null){const ft=nt.texture.format;G=m.has(ft)}if(G){const ft=nt.texture.type,xt=d.has(ft),dt=Ft.getClearColor(),Mt=Ft.getClearAlpha(),Et=dt.r,Ot=dt.g,kt=dt.b;xt?(b[0]=Et,b[1]=Ot,b[2]=kt,b[3]=Mt,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=Et,R[1]=Ot,R[2]=kt,R[3]=Mt,F.clearBufferiv(F.COLOR,0,R))}else H|=F.COLOR_BUFFER_BIT}I&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Ft.dispose(),ht.dispose(),ot.dispose(),k.dispose(),st.dispose(),Q.dispose(),mt.dispose(),it.dispose(),at.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Rl),yt.removeEventListener("sessionend",Cl),xi.stop()};function he(S){S.preventDefault(),Vl("WebGLRenderer: Context Lost."),L=!0}function Qt(){Vl("WebGLRenderer: Context Restored."),L=!1;const S=O.autoReset,I=Pt.enabled,W=Pt.autoUpdate,H=Pt.needsUpdate,G=Pt.type;Ct(),O.autoReset=S,Pt.enabled=I,Pt.autoUpdate=W,Pt.needsUpdate=H,Pt.type=G}function gn(S){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function bn(S){const I=S.target;I.removeEventListener("dispose",bn),cu(I)}function cu(S){hu(S),k.remove(S)}function hu(S){const I=k.get(S).programs;I!==void 0&&(I.forEach(function(W){at.releaseProgram(W)}),S.isShaderMaterial&&at.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,W,H,G,ft){I===null&&(I=tn);const xt=G.isMesh&&G.matrixWorld.determinantAffine()<0,dt=fu(S,I,W,H,G);_.setMaterial(H,xt);let Mt=W.index,Et=1;if(H.wireframe===!0){if(Mt=Z.getWireframeAttribute(W),Mt===void 0)return;Et=2}const Ot=W.drawRange,kt=W.attributes.position;let St=Ot.start*Et,jt=(Ot.start+Ot.count)*Et;ft!==null&&(St=Math.max(St,ft.start*Et),jt=Math.min(jt,(ft.start+ft.count)*Et)),Mt!==null?(St=Math.max(St,0),jt=Math.min(jt,Mt.count)):kt!=null&&(St=Math.max(St,0),jt=Math.min(jt,kt.count));const we=jt-St;if(we<0||we===1/0)return;mt.setup(G,H,dt,W,Mt);let de,re=lt;if(Mt!==null&&(de=rt.get(Mt),re=J,re.setIndex(de)),G.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Te()),re.setMode(F.LINES)):re.setMode(F.TRIANGLES);else if(G.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),_.setLineWidth(Ve*Te()),G.isLineSegments?re.setMode(F.LINES):G.isLineLoop?re.setMode(F.LINE_LOOP):re.setMode(F.LINE_STRIP)}else G.isPoints?re.setMode(F.POINTS):G.isSprite&&re.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ve=G._multiDrawStarts,gt=G._multiDrawCounts,Ze=G._multiDrawCount,qt=Mt?rt.get(Mt).bytesPerElement:1,hn=k.get(H).currentProgram.getUniforms();for(let Tn=0;Tn<Ze;Tn++)hn.setValue(F,"_gl_DrawID",Tn),re.render(Ve[Tn]/qt,gt[Tn])}else if(G.isInstancedMesh)re.renderInstances(St,we,G.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gt=Math.min(W.instanceCount,Ve);re.renderInstances(St,we,gt)}else re.render(St,we)};function Al(S,I,W,H){D!==null&&S.isNodeMaterial&&D.setObject(H,S),Zt===!0&&At.setState(S,W,!1),S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,nr(S,I,H),S.side=Fi,S.needsUpdate=!0,nr(S,I,H),S.side=pn):nr(S,I,H)}this.compile=function(S,I,W=null){W===null&&(W=S),D!==null&&D.renderStart(S,I,W),y=ot.get(W),y.init(I),g.push(y),W.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),S!==W&&S.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights(),D!==null&&D.updateLights(y.state.lightsArray),ce=this.localClippingEnabled,Zt=At.init(this.clippingPlanes,ce),Zt===!0&&At.setGlobalState(this.clippingPlanes,I),D!==null&&Pt.render(y.state.shadowsArray,W,I);const H=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ft=G.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const dt=ft[xt];Al(dt,W,I,G),H.add(dt)}else Al(ft,W,I,G),H.add(ft)}),y=g.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(S,I,W=null){const H=this.compile(S,I,W);return new Promise(G=>{function ft(){if(H.forEach(function(xt){const Mt=k.get(xt).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(xt)}),H.size===0){G(S);return}setTimeout(ft,10)}ee.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let va=null;function uu(S){va&&va(S)}function Rl(){xi.stop()}function Cl(){xi.start()}const xi=new Oh;xi.setAnimationLoop(uu),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(S){va=S,yt.setAnimationLoop(S),S===null?xi.stop():xi.start()},yt.addEventListener("sessionstart",Rl),yt.addEventListener("sessionend",Cl),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(S,I);const W=yt.enabled===!0&&yt.isPresenting===!0,H=E!==null&&(nt===null||W)&&E.begin(A,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(I),I=yt.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,I,nt),y=ot.get(S,g.length),y.init(I),y.state.textureUnits=q.getTextureUnits(),g.push(y),Wt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Gt.setFromProjectionMatrix(Wt,In,I.reversedDepth),ce=this.localClippingEnabled,Zt=At.init(this.clippingPlanes,ce),T=ht.get(S,w.length),T.init(),w.push(T),yt.enabled===!0&&yt.isPresenting===!0){const xt=A.xr.getDepthSensingMesh();xt!==null&&Ma(xt,I,-1/0,A.sortObjects)}Ma(S,I,0,A.sortObjects),T.finish(),D!==null&&D.updateLights(y.state.lightsArray),A.sortObjects===!0&&T.sort(vt,It),me=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,me&&Ft.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&At.beginShadows();const G=y.state.shadowsArray;if(Pt.render(G,S,I),Zt===!0&&At.endShadows(),(H&&E.hasRenderPass())===!1){const xt=T.opaque,dt=T.transmissive;if(y.setupLights(),I.isArrayCamera){const Mt=I.cameras;if(dt.length>0)for(let Et=0,Ot=Mt.length;Et<Ot;Et++){const kt=Mt[Et];Ll(xt,dt,S,kt)}me&&Ft.render(S);for(let Et=0,Ot=Mt.length;Et<Ot;Et++){const kt=Mt[Et];Pl(T,S,kt,kt.viewport)}}else dt.length>0&&Ll(xt,dt,S,I),me&&Ft.render(S),Pl(T,S,I)}nt!==null&&V===0&&(q.updateMultisampleRenderTarget(nt),q.updateRenderTargetMipmap(nt)),H&&E.end(A),S.isScene===!0&&S.onAfterRender(A,S,I),mt.resetDefaultState(),X=-1,j=null,g.pop(),g.length>0?(y=g[g.length-1],q.setTextureUnits(y.state.textureUnits),Zt===!0&&At.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,D!==null&&D.renderEnd()};function Ma(S,I,W,H){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLightProbeGrid)y.pushLightProbeGrid(S);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Gt)){H&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Wt);const xt=Q.update(S),dt=S.material;dt.visible&&T.push(S,xt,dt,W,Ue.z,null,I)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Gt))){const xt=Q.update(S),dt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ue.copy(xt.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(Wt)),Array.isArray(dt)){const Mt=xt.groups;for(let Et=0,Ot=Mt.length;Et<Ot;Et++){const kt=Mt[Et],St=dt[kt.materialIndex];St&&St.visible&&T.push(S,xt,St,W,Ue.z,kt,I)}}else dt.visible&&T.push(S,xt,dt,W,Ue.z,null,I)}}const ft=S.children;for(let xt=0,dt=ft.length;xt<dt;xt++)Ma(ft[xt],I,W,H)}function Pl(S,I,W,H){const{opaque:G,transmissive:ft,transparent:xt}=S;y.setupLightsView(W),Zt===!0&&At.setGlobalState(A.clippingPlanes,W),H&&_.viewport(et.copy(H)),G.length>0&&er(G,I,W),ft.length>0&&er(ft,I,W),xt.length>0&&er(xt,I,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ll(S,I,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){const St=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new yn(1,1,{generateMipmaps:!0,type:St?On:cn,minFilter:Ci,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}const ft=y.state.transmissionRenderTarget[H.id],xt=H.viewport||et;ft.setSize(xt.z*A.transmissionResolutionScale,xt.w*A.transmissionResolutionScale);const dt=A.getRenderTarget(),Mt=A.getActiveCubeFace(),Et=A.getActiveMipmapLevel();A.setRenderTarget(ft),A.getClearColor(te),Yt=A.getClearAlpha(),Yt<1&&A.setClearColor(16777215,.5),A.clear(),me&&Ft.render(W);const Ot=A.toneMapping;A.toneMapping=Un;const kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),Zt===!0&&At.setGlobalState(A.clippingPlanes,H),er(S,W,H),q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft),ee.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let jt=0,we=I.length;jt<we;jt++){const de=I[jt],{object:re,geometry:Ve,material:gt,group:Ze}=de;if(gt.side===pn&&re.layers.test(H.layers)){const qt=gt.side;gt.side=sn,gt.needsUpdate=!0,Dl(re,W,H,Ve,gt,Ze),gt.side=qt,gt.needsUpdate=!0,St=!0}}St===!0&&(q.updateMultisampleRenderTarget(ft),q.updateRenderTargetMipmap(ft))}A.setRenderTarget(dt,Mt,Et),A.setClearColor(te,Yt),kt!==void 0&&(H.viewport=kt),A.toneMapping=Ot}function er(S,I,W){const H=I.isScene===!0?I.overrideMaterial:null;for(let G=0,ft=S.length;G<ft;G++){const xt=S[G],{object:dt,geometry:Mt,group:Et}=xt;let Ot=xt.material;Ot.allowOverride===!0&&H!==null&&(Ot=H),dt.layers.test(W.layers)&&Dl(dt,I,W,Mt,Ot,Et)}}function Dl(S,I,W,H,G,ft){D!==null&&G.isNodeMaterial&&D.setObject(S,G),S.onBeforeRender(A,I,W,H,G,ft),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(A,I,W,H,S,ft),G.transparent===!0&&G.side===pn&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,A.renderBufferDirect(W,I,H,G,S,ft),G.side=Fi,G.needsUpdate=!0,A.renderBufferDirect(W,I,H,G,S,ft),G.side=pn):A.renderBufferDirect(W,I,H,G,S,ft),S.onAfterRender(A,I,W,H,G,ft)}function nr(S,I,W){I.isScene!==!0&&(I=tn);const H=k.get(S),G=y.state.lights,ft=y.state.shadowsArray,xt=G.state.version,dt=at.getParameters(S,G.state,ft,I,W,y.state.lightProbeGridArray),Mt=at.getProgramCacheKey(dt);let Et=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const Ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=st.get(S.envMap||H.environment,Ot),H.envMapRotation=H.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",bn),Et=new Map,H.programs=Et);let kt=Et.get(Mt);if(kt!==void 0){if(H.currentProgram===kt&&H.lightsStateVersion===xt)return Ul(S,dt),kt}else dt.uniforms=at.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,W,dt),S.onBeforeCompile(dt,A),kt=at.acquireProgram(dt,Mt),Et.set(Mt,kt),H.uniforms=dt.uniforms;const St=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=At.uniform),Ul(S,dt),H.needsLights=mu(S),H.lightsStateVersion=xt,H.needsLights&&(St.ambientLightColor.value=G.state.ambient,St.lightProbe.value=G.state.probe,St.sunLights.value=G.state.sun,St.sunLightShadows.value=G.state.sunShadow,St.directionalLights.value=G.state.directional,St.directionalLightShadows.value=G.state.directionalShadow,St.spotLights.value=G.state.spot,St.spotLightShadows.value=G.state.spotShadow,St.rectAreaLights.value=G.state.rectArea,St.ltc_1.value=G.state.rectAreaLTC1,St.ltc_2.value=G.state.rectAreaLTC2,St.pointLights.value=G.state.point,St.pointLightShadows.value=G.state.pointShadow,St.hemisphereLights.value=G.state.hemi,St.sunShadowMatrix.value=G.state.sunShadowMatrix,St.sunShadowCascade.value=G.state.sunShadowCascade,St.directionalShadowMatrix.value=G.state.directionalShadowMatrix,St.spotLightMatrix.value=G.state.spotLightMatrix,St.spotLightMap.value=G.state.spotLightMap,St.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=kt,H.uniformsList=null,kt}function Il(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=kr.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function Ul(S,I){const W=k.get(S);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function du(S,I){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(I.matrixWorld);for(let W=0,H=S.length;W<H;W++){const G=S[W];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function fu(S,I,W,H,G){I.isScene!==!0&&(I=tn),q.resetTextureUnits();const ft=I.fog,xt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,dt=nt===null?A.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Xt.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Et=st.get(H.envMap||xt,Mt),Ot=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,kt=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,we=!!W.morphAttributes.color;let de=Un;H.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(de=A.toneMapping);const re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ve=re!==void 0?re.length:0,gt=k.get(H),Ze=y.state.lights;if(Zt===!0&&(ce===!0||S!==j)){const ue=S===j&&H.id===X;At.setState(H,S,ue)}let qt=!1;H.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Ze.state.version||gt.outputColorSpace!==dt||G.isBatchedMesh&&gt.batching===!1||!G.isBatchedMesh&&gt.batching===!0||G.isBatchedMesh&&gt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&gt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&gt.instancing===!1||!G.isInstancedMesh&&gt.instancing===!0||G.isSkinnedMesh&&gt.skinning===!1||!G.isSkinnedMesh&&gt.skinning===!0||G.isInstancedMesh&&gt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&gt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&gt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&gt.instancingMorph===!1&&G.morphTexture!==null||gt.envMap!==Et||H.fog===!0&&gt.fog!==ft||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==At.numPlanes||gt.numIntersection!==At.numIntersection)||gt.vertexAlphas!==Ot||gt.vertexTangents!==kt||gt.morphTargets!==St||gt.morphNormals!==jt||gt.morphColors!==we||gt.toneMapping!==de||gt.morphTargetsCount!==Ve||!!gt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(qt=!0):(qt=!0,gt.__version=H.version);let hn=gt.currentProgram;qt===!0&&(hn=nr(H,I,G),D&&H.isNodeMaterial&&D.onUpdateProgram(H,hn,gt));let Tn=!1,si=!1,Yi=!1;const se=hn.getUniforms(),Me=gt.uniforms;if(_.useProgram(hn.program)&&(Tn=!0,si=!0,Yi=!0),H.id!==X&&(X=H.id,si=!0),gt.needsLights){const ue=du(y.state.lightProbeGridArray,G);gt.lightProbeGrid!==ue&&(gt.lightProbeGrid=ue,si=!0)}if(Tn||j!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),se.setValue(F,"projectionMatrix",S.projectionMatrix),se.setValue(F,"viewMatrix",S.matrixWorldInverse);const ai=se.map.cameraPosition;ai!==void 0&&ai.setValue(F,fe.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&se.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&se.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,si=!0,Yi=!0)}if(gt.needsLights&&(Ze.state.sunShadowMap.length>0&&se.setValue(F,"sunShadowMap",Ze.state.sunShadowMap,q),Ze.state.directionalShadowMap.length>0&&se.setValue(F,"directionalShadowMap",Ze.state.directionalShadowMap,q),Ze.state.spotShadowMap.length>0&&se.setValue(F,"spotShadowMap",Ze.state.spotShadowMap,q),Ze.state.pointShadowMap.length>0&&se.setValue(F,"pointShadowMap",Ze.state.pointShadowMap,q)),G.isSkinnedMesh){se.setOptional(F,G,"bindMatrix"),se.setOptional(F,G,"bindMatrixInverse");const ue=G.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),se.setValue(F,"boneTexture",ue.boneTexture,q))}G.isBatchedMesh&&(se.setOptional(F,G,"batchingTexture"),se.setValue(F,"batchingTexture",G._matricesTexture,q),se.setOptional(F,G,"batchingIdTexture"),se.setValue(F,"batchingIdTexture",G._indirectTexture,q),se.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&se.setValue(F,"batchingColorTexture",G._colorsTexture,q));const ri=W.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&N.update(G,W,hn),(si||gt.receiveShadow!==G.receiveShadow)&&(gt.receiveShadow=G.receiveShadow,se.setValue(F,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(Me.envMapIntensity.value=I.environmentIntensity),Me.dfgLUT!==void 0&&(Me.dfgLUT.value=Gg()),si){if(se.setValue(F,"toneMappingExposure",A.toneMappingExposure),gt.needsLights&&pu(Me,Yi),ft&&H.fog===!0&&wt.refreshFogUniforms(Me,ft),wt.refreshMaterialUniforms(Me,H,tt,$,y.state.transmissionRenderTarget[S.id]),gt.needsLights&&gt.lightProbeGrid){const ue=gt.lightProbeGrid;Me.probesSH.value=ue.texture,Me.probesMin.value.copy(ue.boundingBox.min),Me.probesMax.value.copy(ue.boundingBox.max),Me.probesResolution.value.copy(ue.resolution)}kr.upload(F,Il(gt),Me,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(kr.upload(F,Il(gt),Me,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&se.setValue(F,"center",G.center),se.setValue(F,"modelViewMatrix",G.modelViewMatrix),se.setValue(F,"normalMatrix",G.normalMatrix),se.setValue(F,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const ue=H.uniformsGroups;for(let ai=0,qi=ue.length;ai<qi;ai++){const Fl=ue[ai];it.update(Fl,hn),it.bind(Fl,hn)}}return hn}function pu(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function mu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,I,W){const H=k.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),k.get(S.texture).__webglTexture=I,k.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const W=k.get(S);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,W=0){nt=S,K=I,V=W;let H=null,G=!1,ft=!1;if(S){const dt=k.get(S);if(dt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(S.viewport),bt.copy(S.scissor),Tt=S.scissorTest,_.viewport(et),_.scissor(bt),_.setScissorTest(Tt),X=-1;return}else if(dt.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(dt.__hasExternalTextures)q.rebindTextures(S,k.get(S.texture).__webglTexture,k.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ot=S.depthTexture;if(dt.__boundDepthTexture!==Ot){if(Ot!==null&&k.has(Ot)&&(S.width!==Ot.image.width||S.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ft=!0);const Et=k.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Et[I])?H=Et[I][W]:H=Et[I],G=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?H=k.get(S).__webglMultisampledFramebuffer:Array.isArray(Et)?H=Et[W]:H=Et,et.copy(S.viewport),bt.copy(S.scissor),Tt=S.scissorTest}else et.copy(_t).multiplyScalar(tt).floor(),bt.copy(Ht).multiplyScalar(tt).floor(),Tt=Ce;if(W!==0&&(H=z),_.bindFramebuffer(F.FRAMEBUFFER,H)&&_.drawBuffers(S,H),_.viewport(et),_.scissor(bt),_.setScissorTest(Tt),G){const dt=k.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,dt.__webglTexture,W)}else if(ft){const dt=I;for(let Mt=0;Mt<S.textures.length;Mt++){const Et=k.get(S.textures[Mt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Mt,Et.__webglTexture,W,dt)}}else if(S!==null&&W!==0){const dt=k.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,W)}X=-1};function Nl(S){const I=k.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=C.textureFormatReadable(S.format),I.__typeReadable=C.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,W,H,G,ft,xt,dt=0){if(!(S&&S.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt){_.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const Et=S.textures[dt],Ot=Et.format,kt=Et.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt);const St=Nl(Et);if(St.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-H&&W>=0&&W<=S.height-G&&F.readPixels(I,W,H,G,ct.convert(Ot),ct.convert(kt),ft)}finally{const Et=nt!==null?k.get(nt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(S,I,W,H,G,ft,xt,dt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Mt=Mt[xt]),Mt)if(I>=0&&I<=S.width-H&&W>=0&&W<=S.height-G){_.bindFramebuffer(F.FRAMEBUFFER,Mt);const Et=S.textures[dt],Ot=Et.format,kt=Et.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+dt);const St=Nl(Et);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.bufferData(F.PIXEL_PACK_BUFFER,ft.byteLength,F.STREAM_READ),F.readPixels(I,W,H,G,ct.convert(Ot),ct.convert(kt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const we=nt!==null?k.get(nt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,we);const de=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qu(F,de,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ft),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(jt),F.deleteSync(de),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,W=0){const H=Math.pow(2,-W),G=Math.floor(S.image.width*H),ft=Math.floor(S.image.height*H),xt=I!==null?I.x:0,dt=I!==null?I.y:0;q.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,xt,dt,G,ft),_.unbindTexture()},this.copyTextureToTexture=function(S,I,W=null,H=null,G=0,ft=0){let xt,dt,Mt,Et,Ot,kt,St,jt,we;const de=S.isCompressedTexture?S.mipmaps[ft]:S.image;if(W!==null)xt=W.max.x-W.min.x,dt=W.max.y-W.min.y,Mt=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Ot=W.min.y,kt=W.isBox3?W.min.z:0;else{const Me=Math.pow(2,-G);xt=Math.floor(de.width*Me),dt=Math.floor(de.height*Me),S.isDataArrayTexture?Mt=de.depth:S.isData3DTexture?Mt=Math.floor(de.depth*Me):Mt=1,Et=0,Ot=0,kt=0}H!==null?(St=H.x,jt=H.y,we=H.z):(St=0,jt=0,we=0);const re=ct.convert(I.format),Ve=ct.convert(I.type);let gt;I.isData3DTexture?(q.setTexture3D(I,0),gt=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(q.setTexture2DArray(I,0),gt=F.TEXTURE_2D_ARRAY):(q.setTexture2D(I,0),gt=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Ze=_.getParameter(F.UNPACK_ROW_LENGTH),qt=_.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=_.getParameter(F.UNPACK_SKIP_PIXELS),Tn=_.getParameter(F.UNPACK_SKIP_ROWS),si=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,de.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,de.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Et),_.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),_.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const Yi=S.isDataArrayTexture||S.isData3DTexture,se=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const Me=k.get(S),ri=k.get(I),ue=k.get(Me.__renderTarget),ai=k.get(ri.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,ue.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let qi=0;qi<Mt;qi++)Yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(S).__webglTexture,G,kt+qi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,k.get(I).__webglTexture,ft,we+qi)),F.blitFramebuffer(Et,Ot,xt,dt,St,jt,xt,dt,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||k.has(S)){const Me=k.get(S),ri=k.get(I);_.bindFramebuffer(F.READ_FRAMEBUFFER,U),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let ue=0;ue<Mt;ue++)Yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Me.__webglTexture,G,kt+ue):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,G),se?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ri.__webglTexture,ft,we+ue):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ri.__webglTexture,ft),G!==0?F.blitFramebuffer(Et,Ot,xt,dt,St,jt,xt,dt,F.COLOR_BUFFER_BIT,F.NEAREST):se?F.copyTexSubImage3D(gt,ft,St,jt,we+ue,Et,Ot,xt,dt):F.copyTexSubImage2D(gt,ft,St,jt,Et,Ot,xt,dt);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else se?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(gt,ft,St,jt,we,xt,dt,Mt,re,Ve,de.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(gt,ft,St,jt,we,xt,dt,Mt,re,de.data):F.texSubImage3D(gt,ft,St,jt,we,xt,dt,Mt,re,Ve,de):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ft,St,jt,xt,dt,re,Ve,de.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ft,St,jt,de.width,de.height,re,de.data):F.texSubImage2D(F.TEXTURE_2D,ft,St,jt,xt,dt,re,Ve,de);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ze),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qt),_.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),_.pixelStorei(F.UNPACK_SKIP_ROWS,Tn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,si),ft===0&&I.generateMipmaps&&F.generateMipmap(gt),_.unbindTexture()},this.initRenderTarget=function(S){k.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){K=0,V=0,nt=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const kc={type:"change"},pl={type:"start"},Xh={type:"end"},Pr=new Ks,Vc=new Pn,Vg=Math.cos(70*ed.DEG2RAD),Pe=new P,nn=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},to=1e-6;class Wg extends Fh{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Fe,this._lastTargetPosition=new P,this._quat=new Fe().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _c,this._sphericalDelta=new _c,this._scale=1,this._panOffset=new P,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new P,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yg.bind(this),this._onPointerDown=Xg.bind(this),this._onPointerUp=qg.bind(this),this._onContextMenu=t_.bind(this),this._onMouseWheel=Kg.bind(this),this._onKeyDown=Jg.bind(this),this._onTouchStart=Qg.bind(this),this._onTouchMove=jg.bind(this),this._onMouseDown=$g.bind(this),this._onMouseMove=Zg.bind(this),this._interceptControlDown=e_.bind(this),this._interceptControlUp=n_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ie.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kc),this.update(),this.state=ie.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pr.origin.copy(this.object.position),Pr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pr.direction))<Vg?this.object.lookAt(this.target):(Vc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pr.intersectPlane(Vc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>to||8*(1-this._lastQuaternion.dot(this.object.quaternion))>to||this._lastTargetPosition.distanceToSquared(this.target)>to?(this.dispatchEvent(kc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xh),this.state=ie.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $g(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(pl)}function Zg(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Kg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(pl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xh))}function Jg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Qg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(pl)}function jg(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function t_(i){this.enabled!==!1&&i.preventDefault()}function e_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bi=new Nh,_e=new P,di=new P,pe=new Fe,Wc={X:new P(1,0,0),Y:new P(0,1,0),Z:new P(0,0,1)},eo={type:"change"},Xc={type:"mouseDown",mode:null},Yc={type:"mouseUp",mode:null},qc={type:"objectChange"};class i_ extends Fh{constructor(t,e=null){super(void 0,e);const n=new c_(this);this._root=n;const s=new h_;this._gizmo=s,n.add(s);const r=new u_;this._plane=r,n.add(r);const a=this;function o(R,M){let T=M;Object.defineProperty(a,R,{get:function(){return T!==void 0?T:M},set:function(y){T!==y&&(T=y,r[R]=y,s[R]=y,a.dispatchEvent({type:R+"-changed",value:y}),a.dispatchEvent(eo))}}),a[R]=M,r[R]=M,s[R]=M}o("camera",t),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),this.viewport=null,o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0),o("showXY",!0),o("showYZ",!0),o("showXZ",!0),o("showXYZE",!0),o("showE",!0),o("minX",-1/0),o("maxX",1/0),o("minY",-1/0),o("maxY",1/0),o("minZ",-1/0),o("maxZ",1/0);const c=new P,l=new P,h=new Fe,p=new Fe,u=new P,f=new Fe,x=new P,v=new P,m=new P,d=0,b=new P;o("worldPosition",c),o("worldPositionStart",l),o("worldQuaternion",h),o("worldQuaternionStart",p),o("cameraPosition",u),o("cameraQuaternion",f),o("pointStart",x),o("pointEnd",v),o("rotationAxis",m),o("rotationAngle",d),o("eye",b),this._offset=new P,this._startNorm=new P,this._endNorm=new P,this._cameraScale=new P,this._parentPosition=new P,this._parentQuaternion=new Fe,this._parentQuaternionInv=new Fe,this._parentScale=new P,this._worldScaleStart=new P,this._worldQuaternionInv=new Fe,this._worldScale=new P,this._positionStart=new P,this._quaternionStart=new Fe,this._scaleStart=new P,this._getPointer=s_.bind(this),this._onPointerDown=a_.bind(this),this._onPointerHover=r_.bind(this),this._onPointerMove=o_.bind(this),this._onPointerUp=l_.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&bi.setFromCamera(t,this.camera);const e=no(this._gizmo.picker[this.mode],bi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&bi.setFromCamera(t,this.camera);const e=no(this._plane,bi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Xc.mode=this.mode,this.dispatchEvent(Xc)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&bi.setFromCamera(t,this.camera);const a=no(this._plane,bi,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(pe.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.getWorldPosition(_e),e.search("X")!==-1&&(_e.x=Math.round(_e.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(_e.y=Math.round(_e.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(_e.z=Math.round(_e.z/this.translationSnap)*this.translationSnap),s.position.copy(s.parent.worldToLocal(_e)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),di.set(o,o,o)}else _e.copy(this.pointStart),di.copy(this.pointEnd),_e.applyQuaternion(this._worldQuaternionInv),di.applyQuaternion(this._worldQuaternionInv),di.divide(_e),e.search("X")===-1&&(di.x=1),e.search("Y")===-1&&(di.y=1),e.search("Z")===-1&&(di.z=1);s.scale.copy(this._scaleStart).multiply(di),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(_e.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(_e.copy(this.rotationAxis).cross(this.eye))*o):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Wc[e]),_e.copy(Wc[e]),r==="local"&&_e.applyQuaternion(this.worldQuaternion),_e.cross(this.eye),_e.length()===0?c=!0:this.rotationAngle=this._offset.dot(_e.normalize())*o),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(pe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(pe.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(eo),this.dispatchEvent(qc)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Yc.mode=this.mode,this.dispatchEvent(Yc)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(eo),this.dispatchEvent(qc),this.pointStart.copy(this.pointEnd))}getRaycaster(){return bi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){const r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}}function s_(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect(),e=this.viewport;let n,s,r,a;return e!==null?(n=e.x,s=t.height-e.y-e.w,r=e.z,a=e.w):(n=0,s=0,r=t.width,a=t.height),{x:(i.clientX-t.left-n)/r*2-1,y:-(i.clientY-t.top-s)/a*2+1,button:i.button}}}function r_(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function a_(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function o_(i){this.enabled&&this.pointerMove(this._getPointer(i))}function l_(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function no(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const Lr=new ei,ae=new P(0,1,0),$c=new P(0,0,0),Zc=new le,Dr=new Fe,Vr=new Fe,Rn=new P,sa=new le,Fs=new P(1,0,0),wi=new P(0,1,0),Os=new P(0,0,1),Ir=new P,Ds=new P,Is=new P;class c_ extends Ee{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),this.parent&&(sa.copy(this.parent.matrixWorld).invert(),sa.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class h_ extends Ee{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Js({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new Qs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const a=t.clone();a.color.setHex(65280);const o=t.clone();o.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const h=t.clone();h.color.setHex(255),h.opacity=.5;const p=t.clone();p.opacity=.25;const u=t.clone();u.color.setHex(16776960),u.opacity=.25;const f=t.clone();f.color.setHex(16776960);const x=t.clone();x.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:a,zAxis:o,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:h,activeTransparent:u};const v=new Oe(0,.04,.1,12);v.translate(0,.05,0);const m=new xe(.08,.08,.08);m.translate(0,.04,0);const d=new be;d.setAttribute("position",new Jt([0,0,0,1,0,0],3));const b=new Oe(.0075,.0075,.5,3);b.translate(0,.25,0);function R(B,K){const V=new Ri(B,.0075,3,64,K*Math.PI*2);return V.rotateY(Math.PI/2),V.rotateX(Math.PI/2),V}function M(){const B=new be;return B.setAttribute("position",new Jt([0,0,0,1,1,1],3)),B}const T={X:[[new pt(v,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(v,r),[-.5,0,0],[0,0,Math.PI/2]],[new pt(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pt(v,a),[0,.5,0]],[new pt(v,a),[0,-.5,0],[Math.PI,0,0]],[new pt(b,a)]],Z:[[new pt(v,o),[0,0,.5],[Math.PI/2,0,0]],[new pt(v,o),[0,0,-.5],[-Math.PI/2,0,0]],[new pt(b,o),null,[Math.PI/2,0,0]]],XYZ:[[new pt(new cs(.1,0),p),[0,0,0]]],XY:[[new pt(new xe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new pt(new xe(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new xe(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},y={X:[[new pt(new Oe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new Oe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new Oe(.2,0,.6,4),n),[0,.3,0]],[new pt(new Oe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new Oe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pt(new Oe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pt(new cs(.2,0),n)]],XY:[[new pt(new xe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pt(new xe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new xe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},w={START:[[new pt(new cs(.01,2),s),null,null,null,"helper"]],END:[[new pt(new cs(.01,2),s),null,null,null,"helper"]],DELTA:[[new Xn(M(),s),null,null,null,"helper"]],X:[[new Xn(d,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(d,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(d,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},g={XYZE:[[new pt(R(.5,1),x),null,[0,Math.PI/2,0]]],X:[[new pt(R(.5,.5),r)]],Y:[[new pt(R(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new pt(R(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new pt(R(.75,1),u),null,[0,Math.PI/2,0]]]},E={AXIS:[[new Xn(d,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},A={XYZE:[[new pt(new js(.25,10,8),n)]],X:[[new pt(new Ri(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pt(new Ri(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pt(new Ri(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pt(new Ri(.75,.1,2,24),n)]]},L={X:[[new pt(m,r),[.5,0,0],[0,0,-Math.PI/2]],[new pt(b,r),[0,0,0],[0,0,-Math.PI/2]],[new pt(m,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pt(m,a),[0,.5,0]],[new pt(b,a)],[new pt(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pt(m,o),[0,0,.5],[Math.PI/2,0,0]],[new pt(b,o),[0,0,0],[Math.PI/2,0,0]],[new pt(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pt(new xe(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new pt(new xe(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new xe(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new xe(.1,.1,.1),p)]]},D={X:[[new pt(new Oe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pt(new Oe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pt(new Oe(.2,0,.6,4),n),[0,.3,0]],[new pt(new Oe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pt(new Oe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pt(new Oe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pt(new xe(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pt(new xe(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pt(new xe(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pt(new xe(.2,.2,.2),n),[0,0,0]]]},z={X:[[new Xn(d,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Xn(d,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Xn(d,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(B){const K=new Ee;for(const V in B)for(let nt=B[V].length;nt--;){const X=B[V][nt][0].clone(),j=B[V][nt][1],et=B[V][nt][2],bt=B[V][nt][3],Tt=B[V][nt][4];X.name=V,X.tag=Tt,j&&X.position.set(j[0],j[1],j[2]),et&&X.rotation.set(et[0],et[1],et[2]),bt&&X.scale.set(bt[0],bt[1],bt[2]),X.updateMatrix();const te=X.geometry.clone();te.applyMatrix4(X.matrix),X.geometry=te,X.renderOrder=1/0,X.position.set(0,0,0),X.rotation.set(0,0,0),X.scale.set(1,1,1),K.add(X)}return K}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(T)),this.add(this.gizmo.rotate=U(g)),this.add(this.gizmo.scale=U(L)),this.add(this.picker.translate=U(y)),this.add(this.picker.rotate=U(A)),this.add(this.picker.scale=U(D)),this.add(this.helper.translate=U(w)),this.add(this.helper.rotate=U(E)),this.add(this.helper.scale=U(z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Vr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const a=s[r];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(pe.setFromEuler(Lr.set(0,0,0)),a.quaternion.copy(n).multiply(pe),Math.abs(ae.copy(Fs).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(pe.setFromEuler(Lr.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(pe),Math.abs(ae.copy(wi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(pe.setFromEuler(Lr.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(pe),Math.abs(ae.copy(Os).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(pe.setFromEuler(Lr.set(0,Math.PI/2,0)),ae.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Zc.lookAt($c,ae,wi)),a.quaternion.multiply(pe),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),_e.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),_e.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(_e),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(ae.copy(Fs).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(ae.copy(wi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(ae.copy(Os).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(ae.copy(Os).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(ae.copy(Fs).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(ae.copy(wi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Dr.copy(n),ae.copy(this.eye).applyQuaternion(pe.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Zc.lookAt(this.eye,$c,wi)),a.name==="X"&&(pe.setFromAxisAngle(Fs,Math.atan2(-ae.y,ae.z)),pe.multiplyQuaternions(Dr,pe),a.quaternion.copy(pe)),a.name==="Y"&&(pe.setFromAxisAngle(wi,Math.atan2(ae.x,ae.z)),pe.multiplyQuaternions(Dr,pe),a.quaternion.copy(pe)),a.name==="Z"&&(pe.setFromAxisAngle(Os,Math.atan2(ae.y,ae.x)),pe.multiplyQuaternions(Dr,pe),a.quaternion.copy(pe))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.visible=a.visible&&(a.name.indexOf("XY")===-1||this.showXY),a.visible=a.visible&&(a.name.indexOf("YZ")===-1||this.showYZ),a.visible=a.visible&&(a.name.indexOf("XZ")===-1||this.showXZ),a.visible=a.visible&&(a.name!=="E"||this.showE),a.visible=a.visible&&(a.name!=="XYZE"||this.showXYZE),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis?(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1):this.axis.split("").some(function(c){return a.name===c})&&(a.material.color.copy(this.materialLib.active.color),a.material.opacity=1))}super.updateMatrixWorld(t)}}class u_ extends pt{constructor(){super(new Wi(1e5,1e5,2,2),new Js({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Ir.copy(Fs).applyQuaternion(e==="local"?this.worldQuaternion:Vr),Ds.copy(wi).applyQuaternion(e==="local"?this.worldQuaternion:Vr),Is.copy(Os).applyQuaternion(e==="local"?this.worldQuaternion:Vr),ae.copy(Ds),this.mode){case"translate":case"scale":switch(this.axis){case"X":ae.copy(this.eye).cross(Ir),Rn.copy(Ir).cross(ae);break;case"Y":ae.copy(this.eye).cross(Ds),Rn.copy(Ds).cross(ae);break;case"Z":ae.copy(this.eye).cross(Is),Rn.copy(Is).cross(ae);break;case"XY":Rn.copy(Is);break;case"YZ":Rn.copy(Ir);break;case"XZ":ae.copy(Is),Rn.copy(Ds);break;case"XYZ":case"E":Rn.set(0,0,0);break}break;case"rotate":default:Rn.set(0,0,0)}Rn.length()===0?this.quaternion.copy(this.cameraQuaternion):(sa.lookAt(_e.set(0,0,0),Rn,ae),this.quaternion.setFromRotationMatrix(sa)),super.updateMatrixWorld(t)}}const He=1e-4,Zn=Math.PI,Kn=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],ra=i=>{const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]};function d_(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function f_(i,t=1){return i.map(e=>{const n=Math.max(0,e*t),s=n*(2.51*n+.03)/(n*(2.43*n+.59)+.14);return Math.pow(Math.min(1,s),1/2.2)})}const Kc=i=>.2126*i[0]+.7152*i[1]+.0722*i[2],p_=[.8,.8,.8],io=(i,t,e,n,s,r)=>({id:i,name:t,type:e,pos:n,rot:s,scale:r,col:p_,visible:!0}),aa=()=>oa({room:{w:5,h:5,d:5},walls:{left:[.75,.1,.1],right:[.1,.65,.1],back:[.75,.75,.75],floor:[.75,.75,.75],ceil:[.75,.75,.75]},wallVis:{left:!0,right:!0,back:!0,floor:!0,ceil:!1},lights:[{id:1,name:"Area Light",type:"area",pos:[2.5,4.99,2.5],size:1.2,power:60,color:[1,1,1],on:!0,visible:!0}],objects:[io(2,"Sphere","sphere",[1.5,.9,2.3],[0,0,0],[1.8,1.8,1.8]),io(3,"Box","box",[3.5,1.1,2.8],[0,.4,0],[1.2,2.2,1.2]),io(4,"Cylinder","cylinder",[2.6,.6,1.1],[0,0,0],[.9,1.2,.9])]}),m_=(i,t)=>JSON.stringify([i.room,i.walls,i.wallVis,i.rooms,i.wallThickness,i.showCeilings,i.objects.map(e=>[e.type,e.pos,e.rot,e.scale,e.col,e.parts,e.transmission,e.architectureOpening,e.openingType,e.roomId,e.wall,e.doorOpen,e.frameColor,e.doorColor,e.glassColor]),i.lights,t.count,t.bounces]);function oa(i){for(const t of i.objects){const[e,n,s]=t.rot,r=Math.cos(e),a=Math.sin(e),o=Math.cos(n),c=Math.sin(n),l=Math.cos(s),h=Math.sin(s);t.R=[o*l,-o*h,c,r*h+a*c*l,r*l-a*c*h,-a*o,a*h-r*c*l,a*l+r*c*h,r*o]}return i}function g_(i,t,e){const n=i.room,s=[n.w,n.h,n.d];let r=null;for(let a=0;a<3;a++)for(let o=0;o<2;o++){if(a===2&&o)continue;const c=a===0?o?"right":"left":a===1?o?"ceil":"floor":"back";if(!i.wallVis[c]||!e[a])continue;const l=((o?s[a]:0)-t[a])/e[a];if(l<He||r&&l>=r.t)continue;const h=[t[0]+e[0]*l,t[1]+e[1]*l,t[2]+e[2]*l];let p=!0;for(let f=0;f<3;f++)f!==a&&(h[f]<-.001||h[f]>s[f]+.001)&&(p=!1);if(!p)continue;const u=[0,0,0];u[a]=o?-1:1,r={t:l,p:h,n:u,id:c,col:i.walls[c]}}return r}function __(i,t,e){const n=i.R,s=i.scale,r=i.pos,a=[t[0]-r[0],t[1]-r[1],t[2]-r[2]],o=f=>[(n[0]*f[0]+n[3]*f[1]+n[6]*f[2])/s[0],(n[1]*f[0]+n[4]*f[1]+n[7]*f[2])/s[1],(n[2]*f[0]+n[5]*f[1]+n[8]*f[2])/s[2]],c=o(a),l=o(e);let h=-1,p;if(i.type==="sphere"){const f=Kn(l,l),x=Kn(c,l),v=x*x-f*(Kn(c,c)-.25);if(v>=0){const m=Math.sqrt(v);h=(-x-m)/f,h<He&&(h=(-x+m)/f),h>=He?p=[c[0]+l[0]*h,c[1]+l[1]*h,c[2]+l[2]*h]:h=-1}}else if(i.type==="box"){let f=-1e9,x=1e9,v=0,m=1;for(let d=0;d<3;d++){const b=1/(l[d]||1e-12),R=(-.5-c[d])*b,M=(.5-c[d])*b,T=Math.min(R,M),y=Math.max(R,M);T>f&&(f=T,v=d,m=l[d]>0?-1:1),x=Math.min(x,y)}f<=x&&f>=He&&(h=f,p=[0,0,0],p[v]=m)}else{const f=l[0]*l[0]+l[2]*l[2];if(f>1e-12){const x=c[0]*l[0]+c[2]*l[2],v=x*x-f*(c[0]*c[0]+c[2]*c[2]-.25);if(v>=0){const m=Math.sqrt(v);for(const d of[(-x-m)/f,(-x+m)/f])if(d>=He&&Math.abs(c[1]+l[1]*d)<=.5){h=d,p=[c[0]+l[0]*d,0,c[2]+l[2]*d];break}}}if(l[1])for(const x of[-.5,.5]){const v=(x-c[1])/l[1];if(v>=He&&(h<0||v<h)){const m=c[0]+l[0]*v,d=c[2]+l[2]*v;m*m+d*d<=.25&&(h=v,p=[0,x>0?1:-1,0])}}}if(h<0)return null;const u=[p[0]/s[0],p[1]/s[1],p[2]/s[2]];return{t:h,n:ra([n[0]*u[0]+n[1]*u[1]+n[2]*u[2],n[3]*u[0]+n[4]*u[1]+n[5]*u[2],n[6]*u[0]+n[7]*u[1]+n[8]*u[2]])}}function ml(i,t,e){let n=g_(i,t,e);for(const s of i.objects){const r=__(s,t,e);r&&(!n||r.t<n.t)&&(n={t:r.t,p:[t[0]+e[0]*r.t,t[1]+e[1]*r.t,t[2]+e[2]*r.t],n:r.n,id:"obj",col:s.col,transmission:s.transmission||0})}return n}const gl=(i,t)=>i.map((e,n)=>e*t.transmission*t.col[n]);function x_(i,t,e){let n=[1,1,1],s=0;for(let r=0;r<16;r++){const a=ml(i,t,e);if(!a)return{hit:null,filter:n,distance:s};if(s+=a.t,!a.transmission)return{hit:a,filter:n,distance:s};n=gl(n,a),t=[a.p[0]+e[0]*He*4,a.p[1]+e[1]*He*4,a.p[2]+e[2]*He*4]}return{hit:null,filter:n,distance:s}}function Jc(i,t,e){const n=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],s=Math.hypot(...n),r=[n[0]/s,n[1]/s,n[2]/s];let a=t,o=s,c=[1,1,1];for(let l=0;l<16&&o>He;l++){const h=ml(i,a,r);if(!h||h.t>=o-.001)return c;if(!h.transmission)return[0,0,0];c=gl(c,h),o-=h.t,a=[h.p[0]+r[0]*He*4,h.p[1]+r[1]*He*4,h.p[2]+r[2]*He*4]}return o<=He?c:[0,0,0]}const Qc=(i,t)=>{const e=t(),n=t(),s=Math.sqrt(e),r=2*Zn*n,a=s*Math.cos(r),o=s*Math.sin(r),c=Math.sqrt(1-e),l=Math.abs(i[1])<.9?[0,1,0]:[1,0,0],h=ra([l[1]*i[2]-l[2]*i[1],l[2]*i[0]-l[0]*i[2],l[0]*i[1]-l[1]*i[0]]),p=[i[1]*h[2]-i[2]*h[1],i[2]*h[0]-i[0]*h[2],i[0]*h[1]-i[1]*h[0]];return[h[0]*a+p[0]*o+i[0]*c,h[1]*a+p[1]*o+i[1]*c,h[2]*a+p[2]*o+i[2]*c]};class v_{constructor(t){this.pos=t,this.n=t.length/3,this.idx=Uint32Array.from({length:this.n},(e,n)=>n),this.axis=new Uint8Array(this.n),this._b(0,this.n)}_b(t,e){if(e-t<=1)return;const n=this.pos,s=[1e9,1e9,1e9],r=[-1e9,-1e9,-1e9];for(let c=t;c<e;c++){const l=this.idx[c]*3;for(let h=0;h<3;h++){const p=n[l+h];p<s[h]&&(s[h]=p),p>r[h]&&(r[h]=p)}}let a=0;for(let c=1;c<3;c++)r[c]-s[c]>r[a]-s[a]&&(a=c);this.idx.subarray(t,e).sort((c,l)=>n[c*3+a]-n[l*3+a]);const o=t+e>>1;this.axis[o]=a,this._b(t,o),this._b(o+1,e)}query(t,e,n){const s=[],r=[],a=this.pos,o=this.idx,c=this.axis;if(!this.n||e<1)return{ids:s,ds:r};const l=(h,p)=>{if(h>=p)return;const u=h+p>>1,f=o[u],x=f*3,v=c[u],m=a[x]-t[0],d=a[x+1]-t[1],b=a[x+2]-t[2],R=m*m+d*d+b*b;if(R<n){let T=r.length;for(r.push(R),s.push(f);T>0&&r[T-1]>R;)r[T]=r[T-1],s[T]=s[T-1],T--;r[T]=R,s[T]=f,r.length>e&&(r.pop(),s.pop()),r.length===e&&(n=r[e-1]+1e-12)}const M=t[v]-a[x+v];M<0?(l(h,u),M*M<n&&l(u+1,p)):(l(u+1,p),M*M<n&&l(h,u))};return l(0,this.n),{ids:s,ds:r}}}function M_(i,t,e=1){oa(i);const n=performance.now(),s=d_(e),r=i.lights.filter(b=>b.on),a=r.reduce((b,R)=>b+R.power,0),o=Math.max(1,Math.ceil(t.count/2e4)),c={emitted:0,traced:0,stored:0,absorbed:0,escaped:0,pathSegments:0},l=[],h=[],p=[],u=[],f=[],x=[];if(r.length&&t.count>0&&a>0)for(let b=0;b<t.count;b++){c.emitted++;let R=s()*a,M=r[r.length-1];for(const E of r){if(R<E.power){M=E;break}R-=E.power}let T,y;if(M.type==="area")T=[M.pos[0]+(s()-.5)*M.size,M.pos[1]-.001,M.pos[2]+(s()-.5)*M.size],y=Qc([0,-1,0],s);else{T=[...M.pos];const E=1-2*s(),A=Math.sqrt(1-E*E),L=2*Zn*s();y=[A*Math.cos(L),E,A*Math.sin(L)]}let w=[M.color[0]*a/t.count,M.color[1]*a/t.count,M.color[2]*a/t.count],g=b%o===0;c.traced++;for(let E=0;E<t.bounces;E++){const A=ml(i,T,y);if(!A){c.escaped++;break}if(c.pathSegments++,g&&(f.push(...T,...A.p),x.push(E)),A.transmission){w=gl(w,A),T=[A.p[0]+y[0]*He*4,A.p[1]+y[1]*He*4,A.p[2]+y[2]*He*4];continue}E>=1&&(l.push(...A.p),h.push(...w),p.push(...y),u.push(E),c.stored++);const L=A.col,D=(L[0]+L[1]+L[2])/3;if(s()>=D){c.absorbed++;break}w=[w[0]*L[0]/D,w[1]*L[1]/D,w[2]*L[2]/D];const z=Kn(A.n,y)>0?[-A.n[0],-A.n[1],-A.n[2]]:A.n;y=Qc(z,s),T=[A.p[0]+z[0]*.001,A.p[1]+z[1]*.001,A.p[2]+z[2]*.001]}}const v=performance.now()-n,m=performance.now(),d=new Float32Array(l);return{tree:new v_(d),pos:d,flux:new Float32Array(h),dir:new Float32Array(p),depth:Uint8Array.from(u),path:new Float32Array(f),pathDepth:Uint8Array.from(x),stats:{...c,pathSamples:x.length,pathStride:o,traceMs:v,buildMs:performance.now()-m,emittedPower:a}}}function S_(i,t,e,n,s){const r=[0,0,0];if(!i||!i.tree.n)return r;const{ids:a}=i.tree.query(t,s.k,s.radius*s.radius);if(!a.length)return r;const o=[0,0,0];let c=0,l=0;for(const u of a){const f=u*3;if(-(i.dir[f]*e[0]+i.dir[f+1]*e[1]+i.dir[f+2]*e[2])<=0)continue;const x=i.pos[f]-t[0],v=i.pos[f+1]-t[1],m=i.pos[f+2]-t[2];Math.abs(x*e[0]+v*e[1]+m*e[2])>.08||(o[0]+=i.flux[f],o[1]+=i.flux[f+1],o[2]+=i.flux[f+2],c++,l=Math.max(l,x*x+v*v+m*m))}if(!c)return r;const h=Zn*Math.max(l,1e-4),p=1/(Zn*h);return[o[0]*n[0]*p,o[1]*n[1]*p,o[2]*n[2]*p]}function y_(i,t,e,n){const s=[0,0,0],r=[t[0]+e[0]*.001,t[1]+e[1]*.001,t[2]+e[2]*.001];for(const a of i.lights)if(a.on)if(a.type==="area"){const c=[0,0,0];for(let l=0;l<16;l++){const h=(l%4+.5)/4-.5,p=(Math.floor(l/4)+.5)/4-.5,u=[a.pos[0]+h*a.size,a.pos[1],a.pos[2]+p*a.size],f=[u[0]-t[0],u[1]-t[1],u[2]-t[2]],x=Kn(f,f),v=ra(f),m=Kn(e,v),d=v[1];if(m<=0||d<=0)continue;const b=Jc(i,r,u);for(let R=0;R<3;R++)c[R]+=m*d/x*b[R]*a.color[R]}for(let l=0;l<3;l++)s[l]+=n[l]*c[l]*a.power/(Zn*16*Zn)}else{const o=[a.pos[0]-t[0],a.pos[1]-t[1],a.pos[2]-t[2]],c=Kn(o,o),l=Kn(e,ra(o));if(l>0){const h=Jc(i,r,a.pos);for(let p=0;p<3;p++)s[p]+=n[p]*a.color[p]*h[p]*a.power/(4*Zn)*l/c/Zn}}return s}function E_(i){return oa(i),i.objects=i.objects.flatMap(t=>t.parts?t.parts.map(e=>{const n=t.scale,s=[e.pos[0]*n[0],e.pos[1]*n[1],e.pos[2]*n[2]],r=t.R;return{type:e.type,rot:t.rot,scale:[e.scale[0]*n[0],e.scale[1]*n[1],e.scale[2]*n[2]],col:e.col||t.col,transmission:e.transmission||0,pos:[t.pos[0]+r[0]*s[0]+r[1]*s[1]+r[2]*s[2],t.pos[1]+r[3]*s[0]+r[4]*s[1]+r[5]*s[2],t.pos[2]+r[6]*s[0]+r[7]*s[1]+r[8]*s[2]]}}):[t]),oa(i)}function b_(i,t,e,n,s,r){const a=x_(i,n,s),o=a.hit,c=a.filter;for(const p of i.lights)if(p.on&&p.type==="area"&&s[1]){const u=(p.pos[1]-n[1])/s[1];if(u>0&&u<a.distance&&Math.abs(n[0]+s[0]*u-p.pos[0])<p.size/2&&Math.abs(n[2]+s[2]*u-p.pos[2])<p.size/2){if(r==="indirect")return[0,0,0];const f=p.power/(Zn*Math.max(p.size*p.size,1e-6));return p.color.map((x,v)=>x*f*c[v])}}if(!o)return[.02*c[0],.02*c[1],.025*c[2]];const l=Kn(o.n,s)>0?[-o.n[0],-o.n[1],-o.n[2]]:o.n,h=[0,0,0];if(r!=="indirect"){const p=y_(i,o.p,l,o.col);for(let u=0;u<3;u++)h[u]+=p[u]}if(r!=="direct"){const p=S_(t,o.p,l,o.col,e),u=e.gain??1;for(let f=0;f<3;f++)h[f]+=p[f]*u}return h.map((p,u)=>p*c[u])}const jc={Living:[.78,.72,.62],Bedroom:[.72,.68,.58],Kitchen:[.78,.78,.72],Bathroom:[.7,.76,.8],Dining:[.76,.68,.56],Hallway:[.72,.72,.72]},T_=()=>[{id:101,name:"Living room",type:"Living",x:0,z:0,w:5,d:5,height:3,wallColor:[.78,.12,.1],floorColor:[.72,.68,.58],openings:[]},{id:102,name:"Hallway",type:"Hallway",x:5,z:0,w:2,d:5,height:3,wallColor:[.78,.76,.7],floorColor:[.7,.67,.58],openings:[]},{id:103,name:"Bedroom",type:"Bedroom",x:7,z:0,w:5,d:5,height:3,wallColor:[.72,.68,.58],floorColor:[.55,.42,.3],openings:[]},{id:104,name:"Kitchen",type:"Kitchen",x:0,z:5,w:5,d:4,height:3,wallColor:[.78,.78,.72],floorColor:[.72,.73,.7],openings:[]},{id:105,name:"Dining room",type:"Dining",x:5,z:5,w:4,d:4,height:3,wallColor:[.76,.68,.56],floorColor:[.65,.52,.38],openings:[]},{id:106,name:"Bathroom",type:"Bathroom",x:9,z:5,w:3,d:4,height:3,wallColor:[.7,.76,.8],floorColor:[.65,.7,.72],openings:[]}];function w_(i,t,e,n=1e-5){const s=e==="left"||e==="right",r=e==="right"?i.x+i.w:e==="left"?i.x:e==="front"?i.z+i.d:i.z,a={left:"right",right:"left",front:"back",back:"front"}[e],o=a==="right"?t.x+t.w:a==="left"?t.x:a==="front"?t.z+t.d:t.z;if(Math.abs(r-o)>n)return null;const c=s?i.z:i.x,l=c+(s?i.d:i.w),h=s?t.z:t.x,p=h+(s?t.d:t.w),u=Math.max(c,h),f=Math.min(l,p);return f-u>.05?{lo:u,hi:f,coordinate:r}:null}function th(i,t,e,n,s,r,a,o,c,l){return{id:i,name:t,type:"box",pos:[n,s,r],rot:[0,0,0],scale:l?[a,o,c]:[c,o,a],col:[...e],visible:!0,architecture:!0,wallOrientation:l?"x":"z"}}function Yh(i,t=.12,e=!1,n=[]){const s=[];let r=-1e3;const a=["back","front","left","right"];for(const l of i){s.push({id:r--,name:`${l.name} floor`,type:"box",pos:[l.x+l.w/2,-.03,l.z+l.d/2],rot:[0,0,0],scale:[l.w,.06,l.d],col:[...l.floorColor||[.72,.72,.72]],visible:!0,architecture:!0}),e&&s.push({id:r--,name:`${l.name} ceiling`,type:"box",pos:[l.x+l.w/2,l.height,l.z+l.d/2],rot:[0,0,0],scale:[l.w,.06,l.d],col:[...l.wallColor||[.8,.8,.8]],visible:!0,architecture:!0});for(const h of a){const p=h==="back"||h==="front",u=p?l.w:l.d,f=p?l.x:l.z,x=h==="back"?l.z:h==="front"?l.z+l.d:h==="left"?l.x:l.x+l.w,v={back:"front",front:"back",left:"right",right:"left"}[h],m=i.filter(y=>y.id!==l.id).map(y=>{const w=w_(l,y,h);return w?n.some(E=>E.openingType==="door"&&(E.roomId===l.id&&E.wall===h||E.roomId===y.id&&E.wall===v)&&(p?E.pos[0]:E.pos[2])>=w.lo&&(p?E.pos[0]:E.pos[2])<=w.hi)?null:w:null}).filter(Boolean);l.height/2;const d=(y,w,g=0,E=l.height,A="")=>{if(w-y<=.015||E-g<=.015)return;const L=(y+w)/2;s.push(th(r--,`${l.name} ${h} wall${A}`,l.wallColor||[.8,.8,.8],p?L:x,(g+E)/2,p?x:L,w-y,E-g,t,p))},b=[];for(const y of m){const w=(y.lo+y.hi)/2;b.push({lo:Math.max(f,w-.5),hi:Math.min(f+u,w+.5),height:2.1,type:"door"})}for(const y of l.openings||[]){if(y.wall!==h)continue;const w=f+y.offset;b.push({lo:Math.max(f,w-y.width/2),hi:Math.min(f+u,w+y.width/2),height:y.height||2.1,type:y.type||"door",sill:y.sill||0})}for(const y of n){if(y.roomId!==l.id||y.wall!==h||y.visible===!1)continue;const w=p?y.pos[0]:y.pos[2],g=y.openingType==="window"?Math.max(0,y.pos[1]-y.scale[1]/2):0;b.push({lo:Math.max(f,w-y.scale[0]/2),hi:Math.min(f+u,w+y.scale[0]/2),height:y.scale[1],type:y.openingType,sill:g})}const R=b.filter(y=>y.hi-y.lo>.015).sort((y,w)=>y.lo-w.lo),M=[];for(const y of R){const w=M[M.length-1];w&&y.lo<=w.hi?(w.hi=Math.max(w.hi,y.hi),w.height=Math.max(w.height,y.height)):M.push({...y})}let T=f;for(const y of M){d(T,y.lo),y.type==="window"&&d(y.lo,y.hi,0,y.sill);const w=y.type==="window"?(y.sill||0)+(y.height||1):y.height||2.1;d(y.lo,y.hi,w,l.height),T=Math.max(T,y.hi)}d(T,f+u)}}const o=new Map,c=s.filter(l=>!l.wallOrientation);for(const l of s.filter(h=>h.wallOrientation)){const h=l.wallOrientation==="x",p=h?0:2,u=h?2:0,f=l.pos[u],x=l.scale[u],v=l.scale[1],m=l.pos[1],d=[l.wallOrientation,f,x,m,v].map(R=>typeof R=="number"?R.toFixed(4):R).join(":"),b=o.get(d)||{wall:l,intervals:[]};b.intervals.push([l.pos[p]-l.scale[p]/2,l.pos[p]+l.scale[p]/2]),o.set(d,b)}for(const{wall:l,intervals:h}of o.values()){h.sort((u,f)=>u[0]-f[0]);const p=[];for(const u of h){const f=p[p.length-1];f&&u[0]<=f[1]+.015?f[1]=Math.max(f[1],u[1]):p.push([...u])}for(const[u,f]of p){const x=l.wallOrientation==="x",v=(u+f)/2;c.push(th(r--,"House wall",l.col,x?v:l.pos[0],l.pos[1],x?l.pos[2]:v,f-u,l.scale[1],l.scale[x?2:0],x))}}return c}function _l(i,t,e,n,s=4,r=4,a=3){const o=jc[i]||jc.Living;return{id:t,name:`${i} ${t}`,type:i,x:e,z:n,w:s,d:r,height:a,wallColor:[...o],floorColor:[.72,.7,.64],openings:[]}}const Rt=i=>document.getElementById(i),Ui=(i,t=document)=>[...t.querySelectorAll(i)],zt=(i,t,e)=>({type:"box",pos:i,scale:t,col:e}),Ai=(i,t,e)=>({type:"cylinder",pos:i,scale:t,col:e}),Ur=(i,t,e,n)=>[[-i,-t],[i,-t],[-i,t],[i,t]].map(([s,r])=>Ai([s,e/2,r],[n,e,n])),Cn=[.5,.33,.2],A_=[.55,.58,.7],Ti=[.82,.82,.82],qh={Seating:{Chair:{col:Cn,parts:[zt([0,.45,0],[.45,.06,.45]),zt([0,.75,-.2],[.45,.6,.06]),...Ur(.2,.2,.42,.05)]},Sofa:{col:A_,parts:[zt([0,.25,0],[2,.5,.9]),zt([0,.7,-.35],[2,.5,.2]),zt([-.9,.5,.05],[.2,.35,.8]),zt([.9,.5,.05],[.2,.35,.8])]},Armchair:{col:[.6,.45,.4],parts:[zt([0,.25,0],[.9,.5,.85]),zt([0,.65,-.35],[.9,.5,.15]),zt([-.4,.5,.05],[.12,.3,.75]),zt([.4,.5,.05],[.12,.3,.75])]},Stool:{col:Cn,parts:[Ai([0,.45,0],[.35,.06,.35]),...Ur(.12,.12,.42,.04)]}},Tables:{"Dining table":{col:Cn,parts:[zt([0,.75,0],[1.5,.06,.85]),...Ur(.65,.32,.72,.06)]},"Coffee table":{col:Cn,parts:[zt([0,.4,0],[.9,.05,.5]),...Ur(.38,.18,.38,.04)]},Desk:{col:Cn,parts:[zt([0,.74,0],[1.3,.05,.65]),zt([-.55,.37,0],[.15,.74,.6]),zt([.55,.37,0],[.15,.74,.6])]}},Bedroom:{Bed:{col:[.85,.85,.9],parts:[zt([0,.25,0],[1.6,.5,2]),zt([0,.58,.05],[1.5,.18,1.85],[.9,.9,.95]),zt([0,.85,-.97],[1.6,.9,.08],Cn)]},Wardrobe:{col:Cn,parts:[zt([0,1,0],[1.1,2,.55])]},Bedside:{col:Cn,parts:[zt([0,.25,0],[.45,.5,.4])]}},Living:{"TV unit":{col:Cn,parts:[zt([0,.25,0],[1.5,.5,.4]),zt([0,.8,0],[1.1,.6,.05],[.05,.05,.06])]},Shelf:{col:Cn,parts:[zt([0,.9,0],[.9,1.8,.3])]},"Floor lamp":{col:[.9,.9,.8],parts:[Ai([0,.02,0],[.25,.04,.25],[.2,.2,.2]),Ai([0,.8,0],[.04,1.6,.04],[.2,.2,.2]),Ai([0,1.6,0],[.35,.3,.35])]}},Kitchen:{Counter:{col:Ti,parts:[zt([0,.45,0],[1.8,.9,.6])]},Fridge:{col:[.85,.88,.9],parts:[zt([0,.9,0],[.7,1.8,.7])]}},Bathroom:{Bathtub:{col:Ti,parts:[zt([0,.3,0],[1.7,.6,.75])]},Washbasin:{col:Ti,parts:[zt([0,.4,0],[.2,.8,.2]),zt([0,.85,0],[.55,.15,.4])]}},Architecture:{Door:{opening:"door"},Window:{opening:"window"}},Decor:{Plant:{col:[.7,.4,.3],parts:[Ai([0,.2,0],[.3,.4,.3]),{type:"sphere",pos:[0,.7,0],scale:[.55,.6,.55],col:[.2,.5,.2]}]},Rug:{col:[.6,.3,.3],parts:[zt([0,.01,0],[2,.02,1.4])]},Column:{col:Ti,parts:[Ai([0,1.25,0],[.3,2.5,.3])]}},Basic:{Cube:{type:"box",s:[1,1,1],col:Ti},Sphere:{type:"sphere",s:[1,1,1],col:Ti},Cylinder:{type:"cylinder",s:[.8,1,.8],col:Ti}}},ma=Object.assign({},...Object.values(qh));Rt("lib").innerHTML=Object.entries(qh).map(([i,t])=>`<details ${i==="Seating"?"open":""}><summary>${i}</summary><div class="lib">${Object.keys(t).map(e=>`<button draggable="true" data-add="${e}">${e}</button>`).join("")}</div></details>`).join("");const R_=i=>{const t=i.frameColor||[.32,.19,.1],e=.07;if(i.openingType==="window"){const s=i.glassColor||[.55,.78,.9];return[zt([-.465,0,0],[e,1,1],t),zt([.465,0,0],[e,1,1],t),zt([0,.465,0],[1,e,1],t),zt([0,-.465,0],[1,e,1],t),{...zt([0,0,0],[.86,.86,.12],s),transmission:.9}]}const n=i.doorOpen?zt([-.4,0,0],[.16,.94,.3],i.doorColor||[.48,.29,.16]):zt([0,0,0],[.9,.94,.3],i.doorColor||[.48,.29,.16]);return[zt([-.465,0,0],[e,1,1],t),zt([.465,0,0],[e,1,1],t),zt([0,.465,0],[1,e,1],t),n]};function ga(i){var o;const t=(o=Y.rooms)==null?void 0:o.find(c=>c.id===i.roomId);if(!t)return;const e=i.wall==="back"||i.wall==="front",n=e?t.w:t.d;i.scale[0]=Re(Number.isFinite(i.scale[0])?i.scale[0]:.9,.4,Math.max(.4,n)),i.scale[1]=Re(Number.isFinite(i.scale[1])?i.scale[1]:2.1,.4,t.height),i.scale[2]=Re(Number.isFinite(i.scale[2])?i.scale[2]:.12,.04,.3);const s=e?t.x:t.z,r=Re((e?i.pos[0]:i.pos[2])-s,i.scale[0]/2,Math.max(i.scale[0]/2,n-i.scale[0]/2));e?(i.pos[0]=s+r,i.pos[2]=i.wall==="back"?t.z:t.z+t.d,i.rot=[0,0,0]):(i.pos[2]=s+r,i.pos[0]=i.wall==="left"?t.x:t.x+t.w,i.rot=[0,-Math.PI/2,0]);const a=i.openingType==="window"?Re(i.pos[1]-i.scale[1]/2,0,Math.max(0,t.height-i.scale[1])):0;i.pos[1]=a+i.scale[1]/2,i.parts=R_(i)}function Yn(i,t,e,n,s){const r=i==="door"?.9:1.4,a=i==="door"?2.1:1.1,o=i==="window"?.85:0,c=e==="back"||e==="front",l={id:++qe,name:tr(s||(i==="door"?"Door":"Window")),type:"group",architectureOpening:i,openingType:i,roomId:t.id,wall:e,pos:c?[t.x+n,o+a/2,e==="back"?t.z:t.z+t.d]:[e==="left"?t.x:t.x+t.w,o+a/2,t.z+n],rot:[0,0,0],scale:[r,a,.12],col:i==="door"?[.48,.29,.16]:[.55,.78,.9],frameColor:[.32,.19,.1],doorColor:[.48,.29,.16],glassColor:[.55,.78,.9],doorOpen:i==="door",visible:!0,parts:[]};return ga(l),l}let Y=aa(),Ye={count:15e4,k:60,radius:.6,bounces:5,exposure:2.2,gain:1,res:192},oe=null,Wr="select",Ni=!1,Xr=!1,Xs=!1,la=!1,ms=!1,qe=100,ve=null,Yr="select",Be=null,Se=1,Je={x:0,y:0},qn=[JSON.stringify(Y)],Nn=0,Di=!0,jn=null,Ii=null,Ko=0,qr=!1;const pi=()=>[...Y.objects,...Y.lights],Xi=i=>pi().find(t=>t.id===i),ni=i=>i&&!!i.power,C_=(i,t,e)=>{const n=t.split("."),s=n.pop();n.reduce((r,a)=>r[a],i)[s]=e},$h=i=>"#"+i.map(t=>Math.round(Math.min(1,Math.max(0,t))*255).toString(16).padStart(2,"0")).join(""),P_=i=>[1,3,5].map(t=>parseInt(i.substr(t,2),16)/255),Re=(i,t,e)=>Math.min(e,Math.max(t,i)),zi=Rt("vp"),_i=new kg({antialias:!0,preserveDrawingBuffer:!0});zi.append(_i.domElement);const zn=new md;zn.background=new Nt(1316379);const mn=new ln(40,1,.1,200),vs=new Wg(mn,_i.domElement);zn.add(new Bd(16777215,.6),new Ud(16777215,2236979,.5));const Jo=new Gd(20,20,5592405,2764086),L_=new Vd(1.2);zn.add(Jo,L_);const Bs=new Li,xl=new Li,Hi=new Map;zn.add(Bs,xl);const ze=new i_(mn,_i.domElement);zn.add(ze.getHelper?ze.getHelper():ze);const Ys=new kd(new Ee,15246141);Ys.visible=!1;zn.add(Ys);let fn=null;ze.addEventListener("dragging-changed",i=>{vs.enabled=!i.value,i.value||Le()});ze.addEventListener("objectChange",()=>{const i=ze.object,t=Xi(oe);if(!t)return;const e=Y.room;i.position.set(Re(i.position.x,0,e.w),Re(i.position.y,0,e.h),Re(i.position.z,0,e.d)),Xr&&!ni(t)&&(i.updateMatrixWorld(),i.position.y-=new ki().setFromObject(i).min.y),t.pos=i.position.toArray(),ni(t)||(t.rot=[i.rotation.x,i.rotation.y,i.rotation.z],t.scale=i.scale.toArray()),t.architectureOpening&&(ga(t),i.position.fromArray(t.pos),i.rotation.set(...t.rot),i.scale.fromArray(t.scale),ys()),ii(),Gi()});function vl(){const i=zi.clientWidth,t=zi.clientHeight;i&&t&&(_i.setSize(i,t),mn.aspect=i/t,mn.updateProjectionMatrix())}new ResizeObserver(vl).observe(zi);function Ml(i){const{w:t,h:e,d:n}=Y.room,s=new P(t/2,e/2,n/2),r=Math.max(t,n,e),a={persp:[t*.25,e*.9,n*1.55],top:[0,r*1.7,.01],front:[0,0,n*1.6],side:[t*1.7,0,0]}[i];mn.position.copy(s).add(new P(...a)),vs.target.copy(s),vs.update()}function eh(i){return i==="box"?new xe(1,1,1):i==="sphere"?new js(.5,28,18):new Oe(.5,.5,1,28)}function ys(){Bs.children.forEach(s=>{s.geometry.dispose(),s.material.dispose()}),Bs.clear();const{w:i,h:t,d:e}=Y.room;if(Array.isArray(Y.rooms)&&Y.rooms.length){for(const s of Yh(Y.rooms,Y.wallThickness||.12,!!Y.showCeilings,Y.objects.filter(r=>r.architectureOpening))){const r=new pt(new xe(1,1,1),new ia({color:new Nt().fromArray(s.col),wireframe:Xs,side:pn,roughness:.85}));r.position.fromArray(s.pos),r.rotation.set(...s.rot),r.scale.fromArray(s.scale),r.visible=s.name.includes("ceiling")?!!Y.showCeilings:!s.name.includes("wall")||Y.showHouseWalls!==!1,r.userData.architecture=!0,Bs.add(r)}Jo.position.set(i/2,.003,e/2);return}const n={floor:[i,e,[-Math.PI/2,0,0],[i/2,0,e/2]],ceil:[i,e,[Math.PI/2,0,0],[i/2,t,e/2]],back:[i,t,[0,0,0],[i/2,t/2,0]],left:[e,t,[0,Math.PI/2,0],[0,t/2,e/2]],right:[e,t,[0,-Math.PI/2,0],[i,t/2,e/2]]};for(const[s,[r,a,o,c]]of Object.entries(n)){if(!Y.wallVis[s])continue;const l=new pt(new Wi(r,a),new ia({color:new Nt().fromArray(Y.walls[s]),wireframe:Xs,side:pn}));l.rotation.set(...o),l.position.set(...c),Bs.add(l)}Jo.position.set(i/2,.003,e/2)}function D_(i){i.traverse(t=>{var e,n;(e=t.geometry)==null||e.dispose(),(n=t.material)==null||n.dispose()})}function I_(i){let t=Hi.get(i.id);if(!t){const e=ni(i);if(t=new Li,t.userData.id=i.id,e){const n=i.type==="area"?new Wi(1,1).rotateX(Math.PI/2):new js(.12,16,10);t.add(new pt(n,new Js({side:2})));const s=new Od(16777215,1,0,0);s.position.y=-.1,t.add(s),t.userData.pl=s}else i.parts?i.parts.forEach(n=>{const s=new pt(eh(n.type),new ia({roughness:.8,transparent:!!n.transmission,opacity:n.transmission?.3:1,depthWrite:!n.transmission}));s.position.fromArray(n.pos),s.scale.fromArray(n.scale),s.userData.pc=n.col,t.add(s)}):t.add(new pt(eh(i.type),new ia({roughness:.8})));xl.add(t),Hi.set(i.id,t)}t.position.fromArray(i.pos),t.visible=i.visible!==!1,ni(i)?(t.scale.set(i.type==="area"?i.size:1,1,i.type==="area"?i.size:1),t.children[0].material.color.fromArray(i.color),t.userData.pl.color.fromArray(i.color),t.userData.pl.intensity=i.on?i.power/80:0):(t.rotation.set(...i.rot),t.scale.fromArray(i.scale),t.children.forEach((e,n)=>{var r;const s=(r=i.parts)==null?void 0:r[n];s&&(e.position.fromArray(s.pos),e.scale.fromArray(s.scale),e.material.color.fromArray(s.col||i.col),e.material.transparent=!!s.transmission,e.material.opacity=s.transmission?.3:1,e.material.depthWrite=!s.transmission),e.material.wireframe=Xs}))}function Qe(){const i=new Set(pi().map(t=>t.id));for(const[t,e]of Hi)i.has(t)||(ze.object===e&&ze.detach(),xl.remove(e),D_(e),Hi.delete(t));Y.objects.filter(t=>t.architectureOpening).forEach(ga),pi().forEach(I_),ys(),_a()}function _a(){const i=Hi.get(oe),t=Xi(oe);!i||Wr==="select"?ze.detach():(ze.attach(i),ze.setMode(ni(t)?"translate":Wr)),t!=null&&t.architectureOpening&&ze.setMode(Wr==="scale"?"scale":"translate"),Ys.visible=!!i,i&&Ys.setFromObject(i),ze.setTranslationSnap(Ni?.25:null),ze.setRotationSnap(Ni?Math.PI/12:null),ze.setScaleSnap(Ni?.1:null)}function Zh(){if(requestAnimationFrame(Zh),zi.hidden)return;const i=Hi.get(oe);i&&Ys.setFromObject(i),_i.render(zn,mn)}let $r=null;_i.domElement.addEventListener("pointerdown",i=>$r=[i.clientX,i.clientY]);const ca=new Nh,Kh=i=>{const t=_i.domElement.getBoundingClientRect();return new Lt((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1)};_i.domElement.addEventListener("pointerup",i=>{if(!$r||ze.dragging||ze.axis||Math.hypot(i.clientX-$r[0],i.clientY-$r[1])>4)return;ca.setFromCamera(Kh(i),mn);const t=ca.intersectObjects([...Hi.values()].filter(n=>n.visible),!0)[0];let e=t&&t.object;for(;e&&e.userData.id===void 0;)e=e.parent;jh(e?e.userData.id:null)});zi.addEventListener("dragover",i=>i.preventDefault());zi.addEventListener("drop",i=>{i.preventDefault();const t=i.dataTransfer.getData("text");if(!ma[t])return;ca.setFromCamera(Kh(i),mn);const e=new P;ca.ray.intersectPlane(new Pn(new P(0,1,0),0),e)?Qo(t,[Re(e.x,0,Y.room.w),0,Re(e.z,0,Y.room.d)]):Qo(t)});document.addEventListener("dragstart",i=>{var t;(t=i.target.dataset)!=null&&t.add&&i.dataTransfer.setData("text",i.target.dataset.add)});const tr=i=>{const t=new Set(pi().map(n=>n.name));if(!t.has(i))return i;let e=1;for(;t.has(`${i}.${String(e).padStart(3,"0")}`);)e++;return`${i}.${String(e).padStart(3,"0")}`};function U_(i){var n;if(!((n=Y.rooms)!=null&&n.length)){const s=_l("Living",++qe,0,0,Y.room.w,Y.room.d,Y.room.h);Y.rooms=[s],Y.wallThickness=Y.wallThickness||.12,Y.showHouseWalls=!0,Y.showCeilings=!1,ve=s.id}const t=Y.rooms.find(s=>s.id===ve)||Y.rooms[0],e=Yn(i,t,"front",t.w/2);Y.objects.push(e),oe=e.id,Qe(),Le()}function Qo(i,t){const e=ma[i],n=Y.room,s=(Y.objects.length%5-2)*.35,r=(Y.rooms||[]).find(o=>o.id===ve);if(e.opening){U_(e.opening);return}const a={id:++qe,name:tr(i),type:e.parts?"group":e.type,pos:t||[r?r.x+r.w/2:Re(n.w/2+s,0,n.w),e.parts?0:e.s[1]/2,r?r.z+r.d/2:n.d*.6],rot:[0,0,0],scale:e.parts?[1,1,1]:[...e.s],col:[...e.col],visible:!0,...ve?{roomId:ve}:{}};e.parts&&(a.parts=JSON.parse(JSON.stringify(e.parts))),t&&!e.parts&&(a.pos[1]=e.s[1]/2),Y.objects.push(a),oe=a.id,Qe(),Le()}function nh(i){const t=Y.room,e={id:++qe,name:tr(i==="area"?"Area Light":"Point Light"),type:i,pos:[t.w/2+.5,Math.min(t.h-.5,t.h*.7),t.d/2],size:i==="area"?1:0,power:i==="area"?60:40,color:[1,1,1],on:!0,visible:!0};Y.lights.push(e),oe=e.id,Qe(),Le()}function Jh(){if(!oe){ve&&Y.rooms&&(Y.rooms=Y.rooms.filter(i=>i.id!==ve),Y.objects=Y.objects.filter(i=>i.roomId!==ve),ve=null,Es(),Qe(),Le());return}Y.objects=Y.objects.filter(i=>i.id!==oe),Y.lights=Y.lights.filter(i=>i.id!==oe),oe=null,Qe(),Le()}function Qh(){const i=Xi(oe);if(!i)return;const t=JSON.parse(JSON.stringify(i));t.id=++qe,t.name=tr(i.name.replace(/\.\d+$/,"")),t.pos[0]=Re(t.pos[0]+.4,0,Y.room.w),(ni(t)?Y.lights:Y.objects).push(t),oe=t.id,Qe(),Le()}function jh(i){oe=i,_a(),ii(),mi()}function Zr(){for(const i of["c-direct","c-indirect","c-gi","pathview","densityview"]){const t=Rt(i);t&&t.getContext("2d").clearRect(0,0,t.width,t.height)}Rt("stats").textContent="No current render. The design or render settings changed; render the active design to refresh previews and photon analysis.",Rt("legend").innerHTML=""}function Gi(){Ko++,Di=!0,Ii=null,Rt("dirty").textContent="● render outdated",qr&&(ms=!0),fn&&(zn.remove(fn),fn.geometry.dispose(),fn.material.dispose(),fn=null),Zr()}function Le(){const i=JSON.stringify(Y);i!==qn[Nn]&&(qn=qn.slice(0,Nn+1),qn.push(i),Nn=qn.length-1),Gi(),mi(),ii(),Sl(),rn()}function Ms(i){Y=typeof i=="string"?JSON.parse(i):i,qe=Math.max(qe,...pi().map(t=>t.id)),Xi(oe)||(oe=null),Qe(),mi(),ii(),Sl(),Gi()}const tu=()=>{Nn>0&&(Nn--,Ms(qn[Nn]))},eu=()=>{Nn<qn.length-1&&(Nn++,Ms(qn[Nn]))};function N_(i){const t=Y.room;for(const e of Y.lights)e.pos[1]>=i.h-.05&&(e.pos[1]=t.h-.01);for(const e of pi())e.pos=[Re(e.pos[0],0,t.w),Re(e.pos[1],0,t.h),Re(e.pos[2],0,t.d)]}function Es(){var i;(i=Y.rooms)!=null&&i.length&&(Y.room.w=Math.max(Y.room.w,Math.max(5,...Y.rooms.map(t=>t.x+t.w))+.25),Y.room.d=Math.max(Y.room.d,Math.max(5,...Y.rooms.map(t=>t.z+t.d))+.25),Y.room.h=Math.max(2.4,...Y.rooms.map(t=>t.height)))}function nu(i){const t=Rt("floorplan").getBoundingClientRect(),e=i.clientX-t.left,n=i.clientY-t.top;return{x:(e-Je.x)/Se,z:(n-Je.y)/Se}}function rn(){const i=Rt("floorplan");if(!i||!i.clientWidth)return;const t=window.devicePixelRatio||1,e=i.clientWidth,n=i.clientHeight;i.width=Math.round(e*t),i.height=Math.round(n*t);const s=i.getContext("2d");s.setTransform(t,0,0,t,0,0),s.clearRect(0,0,e,n),Se=Math.min((e-60)/Y.room.w,(n-60)/Y.room.d),Je={x:(e-Y.room.w*Se)/2,y:(n-Y.room.d*Se)/2},s.strokeStyle="#2c303b",s.lineWidth=1;for(let a=0;a<=Y.room.w;a++){const o=Je.x+a*Se;s.beginPath(),s.moveTo(o,Je.y),s.lineTo(o,Je.y+Y.room.d*Se),s.stroke()}for(let a=0;a<=Y.room.d;a++){const o=Je.y+a*Se;s.beginPath(),s.moveTo(Je.x,o),s.lineTo(Je.x+Y.room.w*Se,o),s.stroke()}for(const a of Y.rooms||[]){const o=Je.x+a.x*Se,c=Je.y+a.z*Se,l=a.w*Se,h=a.d*Se;s.fillStyle=$h(a.floorColor||[.5,.5,.5])+"99",s.fillRect(o,c,l,h),s.lineWidth=a.id===ve?3:2,s.strokeStyle=a.id===ve?"#e8a33d":"#c7cbd4",s.strokeRect(o,c,l,h),s.fillStyle="#f0f0f0",s.font="12px system-ui",s.textAlign="center",s.fillText(a.name,o+l/2,c+h/2-5),s.fillStyle="#b9bdc7",s.font="11px system-ui",s.fillText(`${a.w.toFixed(1)} × ${a.d.toFixed(1)} m`,o+l/2,c+h/2+12),s.fillStyle="#e8a33d",s.fillRect(o+l-5,c+h-5,10,10)}const r=Be;if((r==null?void 0:r.mode)==="draw"){const a=r.start,o=r.current,c=Je.x+Math.min(a.x,o.x)*Se,l=Je.y+Math.min(a.z,o.z)*Se;s.fillStyle="#e8a33d55",s.fillRect(c,l,Math.abs(a.x-o.x)*Se,Math.abs(a.z-o.z)*Se),s.strokeStyle="#e8a33d",s.setLineDash([5,4]),s.strokeRect(c,l,Math.abs(a.x-o.x)*Se,Math.abs(a.z-o.z)*Se),s.setLineDash([])}}function F_(){rn()}const us=Rt("floorplan");us.addEventListener("pointerdown",i=>{if(!Y.rooms)return;const t=nu(i),e=us.getBoundingClientRect(),n=i.clientX-e.left,s=i.clientY-e.top;if(Yr==="draw"){Be={mode:"draw",start:t,current:t},us.setPointerCapture(i.pointerId),rn();return}const r=[...Y.rooms].reverse().find(o=>Math.hypot(n-(Je.x+(o.x+o.w)*Se),s-(Je.y+(o.z+o.d)*Se))<14),a=r||[...Y.rooms].reverse().find(o=>t.x>=o.x&&t.x<=o.x+o.w&&t.z>=o.z&&t.z<=o.z+o.d);if(!a){ve=null,ii(),rn(),mi();return}ve=a.id,oe=null,ii(),mi(),Be={mode:r?"resize":"move",roomId:a.id,start:t,orig:{x:a.x,z:a.z,w:a.w,d:a.d}},us.setPointerCapture(i.pointerId)});us.addEventListener("pointermove",i=>{if(!Be)return;const t=nu(i),e=o=>Ni?Math.round(o*4)/4:o;if(Be.mode==="draw"){Be.current={x:e(t.x),z:e(t.z)},rn();return}const n=Y.rooms.find(o=>o.id===Be.roomId),s=t.x-Be.start.x,r=t.z-Be.start.z;if(!n)return;const a={...n};Be.mode==="move"?(a.x=Math.max(0,e(Be.orig.x+s)),a.z=Math.max(0,e(Be.orig.z+r))):(a.w=Math.max(1,e(Be.orig.w+s)),a.d=Math.max(1,e(Be.orig.d+r))),Y.rooms.some(o=>o.id!==n.id&&xa(a,o))||Object.assign(n,a),Es(),ys(),rn()});us.addEventListener("pointerup",i=>{if(!Be)return;const t=Be;if(t.mode==="draw"){const e=t.start,n=t.current||t.start,s=Math.abs(n.x-e.x),r=Math.abs(n.z-e.z),a=Math.max(0,Math.min(e.x,n.x)),o=Math.max(0,Math.min(e.z,n.z));if(s>=1&&r>=1)if(Y.rooms.some(c=>xa({x:a,z:o,w:s,d:r},c)))Rt("foot").textContent="Room overlaps existing floor-plan geometry; adjust the drag and retry.";else{const c=_l(Rt("roomtype").value,++qe,a,o,s,r,Y.room.h||3);Y.rooms.push(c),ve=c.id,Es()}}Be=null,ys(),rn(),Le()});function iu(){Array.isArray(Y.rooms)||(Y.rooms=[],Y.wallThickness=.12,Y.showHouseWalls=!1,Y.showCeilings=!1,Y.wallVis={left:!1,right:!1,back:!1,floor:!1,ceil:!1})}const xa=(i,t)=>i.x<t.x+t.w-.01&&i.x+i.w>t.x+.01&&i.z<t.z+t.d-.01&&i.z+i.d>t.z+.01;function O_(){iu();const i=Rt("roomtype").value,t=Y.rooms.find(o=>o.id===ve),e=t?t.z:0,n=4,s=4;let r=t?t.x+t.w:Math.max(0,...Y.rooms.map(o=>o.x+o.w));for(;Y.rooms.some(o=>xa({x:r,z:e,w:n,d:s},o));)r+=.25;const a=_l(i,++qe,r,e,n,s,Y.room.h||3);Y.rooms.push(a),ve=a.id,Es(),ys(),rn(),Le()}function ih(i){var n;const t=(n=Y.rooms)==null?void 0:n.find(s=>s.id===ve);if(!t){Rt("foot").textContent="Select a room in the outliner or floor plan first.";return}const e=Yn(i,t,"back",t.w/2);Y.objects.push(e),oe=e.id,Qe(),rn(),Le()}function B_(){Y=aa(),Y.rooms=T_(),Y.room={w:12.25,h:3,d:9.25},Y.wallThickness=.12,Y.showHouseWalls=!1,Y.showCeilings=!1,Y.wallVis={left:!1,right:!1,back:!1,floor:!1,ceil:!1},Y.objects=[],Y.lights=[];const i=(e,n,s,r,a=0)=>{var c;const o=ma[e];Y.objects.push({id:++qe,name:tr(e),type:o.parts?"group":o.type,pos:[n,o.parts?0:(((c=o.s)==null?void 0:c[1])||1)/2,s],rot:[0,a,0],scale:o.parts?[1,1,1]:[...o.s||[1,1,1]],col:[...o.col],visible:!0,roomId:r,...o.parts?{parts:JSON.parse(JSON.stringify(o.parts))}:{}})},t=Y.rooms.map(e=>e.id);i("Sofa",2.3,2.1,t[0]),i("Rug",2.3,3.5,t[0]),i("Floor lamp",4.1,1,t[0]),i("Chair",6,2.5,t[1]),i("Bed",9.5,2.6,t[2]),i("Bedside",11,1.1,t[2]),i("Wardrobe",11,4,t[2]),i("Counter",1.5,6.3,t[3]),i("Fridge",3.7,7.4,t[3]),i("Dining table",7,7,t[4]),i("Chair",5.8,7,t[4]),i("Chair",8,7,t[4]),i("Bathtub",10.5,7.9,t[5]),i("Washbasin",11.3,5.8,t[5]),Y.lights=[{id:++qe,name:"Living area light",type:"area",pos:[2.5,2.85,2.5],size:1.3,power:65,color:[1,.92,.8],on:!0,visible:!0},{id:++qe,name:"Hall light",type:"point",pos:[6,2.6,2.5],size:0,power:35,color:[1,1,1],on:!0,visible:!0},{id:++qe,name:"Bedroom light",type:"area",pos:[9.5,2.85,2.5],size:1,power:55,color:[.82,.88,1],on:!0,visible:!0},{id:++qe,name:"Kitchen light",type:"point",pos:[2.5,2.6,7],size:0,power:45,color:[1,1,1],on:!0,visible:!0},{id:++qe,name:"Dining light",type:"area",pos:[7,2.85,7],size:1,power:50,color:[1,.88,.72],on:!0,visible:!0},{id:++qe,name:"Bathroom light",type:"point",pos:[10.5,2.6,7],size:0,power:30,color:[.9,.95,1],on:!0,visible:!0}],Y.objects.push(Yn("door",Y.rooms[0],"right",2.5,"Living-hall door"),Yn("door",Y.rooms[1],"right",2.5,"Hall-bedroom door"),Yn("door",Y.rooms[3],"right",2,"Kitchen-dining door"),Yn("door",Y.rooms[4],"right",2,"Dining-bathroom door"),Yn("window",Y.rooms[0],"back",2.5,"Living room window"),Yn("window",Y.rooms[3],"front",2.5,"Kitchen window"),Yn("window",Y.rooms[2],"right",2.5,"Bedroom window")),ve=t[0],oe=null,Es(),Ms(Y),Ml("top"),rn(),Le(),Rt("foot").textContent="Sample six-room home loaded · 6 rooms · 6 lights"}const Nr=(i,t,e,n,s)=>`<div class="g3"><b>${i}</b>${[0,1,2].map(r=>`<input type="number" step="${n}" value="${(s?e[r]*180/Math.PI:e[r]).toFixed(2)}" data-o="${t}.${r}" ${s?"data-deg=1":""}>`).join("")}</div>`,ye=(i,t,e,n,s="",r="data-o")=>`<label>${i}<input type="${n}" value="${n==="color"?$h(e):e}" ${n==="checkbox"&&e?"checked":""} ${r}="${t}" ${s}></label>`;function ii(){const i=Xi(oe),t=Rt("props"),e=(Y.rooms||[]).find(n=>n.id===ve);if(!i&&e){t.innerHTML=`<h4>${e.type}</h4>${ye("Name","name",e.name,"text","","data-r")}${["x","z","w","d","height"].map(n=>ye({x:"X",z:"Z",w:"Width",d:"Depth",height:"Height"}[n],n,e[n],"number","step=.25 min=1","data-r")).join("")}${ye("Wall colour","wallColor",e.wallColor,"color","","data-r")}${ye("Floor colour","floorColor",e.floorColor,"color","","data-r")}<p class="mu">Rooms that share an edge receive a real doorway opening.</p>`;return}if(!i){t.innerHTML='<p class="mu">Select an object, light, or room.</p>';return}if(i.architectureOpening){const n=["back","front","left","right"].map(r=>`<option value="${r}" ${i.wall===r?"selected":""}>${r}</option>`).join(""),s=(Y.rooms||[]).map(r=>`<option value="${r.id}" ${i.roomId===r.id?"selected":""}>${r.name}</option>`).join("");t.innerHTML=`<h4>${i.openingType} · wall opening</h4>${ye("Name","name",i.name,"text")}<label>Room<select data-o="roomId">${s}</select></label><label>Wall<select data-o="wall">${n}</select></label>${Nr("Position","pos",i.pos,.1)}<div class="g3"><b>Size</b>${["Width","Height","Thickness"].map((r,a)=>`<input aria-label="${r}" type="number" step=.05 min=.04 value="${i.scale[a].toFixed(2)}" data-o="scale.${a}">`).join("")}</div>${i.openingType==="door"?ye("Open","doorOpen",i.doorOpen,"checkbox"):""}${ye("Frame colour","frameColor",i.frameColor,"color")}${i.openingType==="door"?ye("Door colour","doorColor",i.doorColor,"color"):ye("Glass tint","glassColor",i.glassColor,"color")}<p class="mu">Move or resize this object to reposition its cut in the wall. Window glass transmits tinted light.</p>`;return}t.innerHTML=ye("Name","name",i.name,"text")+Nr("Position","pos",i.pos,.1)+(ni(i)?ye("Color","color",i.color,"color")+ye("Power (W)","power",i.power,"number","step=5 min=0")+(i.type==="area"?ye("Size (m)","size",i.size,"number","step=.1 min=.1"):"")+ye("Enabled","on",i.on,"checkbox"):Nr("Rotation°","rot",i.rot,5,1)+Nr("Scale","scale",i.scale,.1)+ye("Colour","col",i.col,"color")+'<p class="mu">Renderer material: Lambertian (colour only).</p>')}function Sl(){var t;const i=Y.room;if((t=Y.rooms)!=null&&t.length){Rt("wallthickness").value=Y.wallThickness||.12,Rt("room").innerHTML=ye("Show walls","showHouseWalls",Y.showHouseWalls!==!1,"checkbox","","data-s")+ye("Show ceilings","showCeilings",!!Y.showCeilings,"checkbox","","data-s")+'<p class="mu">House footprint: '+i.w+" × "+i.d+" m · "+Y.rooms.length+' rooms</p><button data-act="samplehouse">Load sample home</button>';return}Rt("room").innerHTML=["w","h","d"].map((e,n)=>ye(["Width","Height","Depth"][n],"room."+e,i[e],"range","min=3 max=10 step=.1","data-s")+`<div class="mu" style="text-align:right">${i[e].toFixed(1)} m</div>`).join("")+Object.keys(Y.walls).map(e=>ye(e,"walls."+e,Y.walls[e],"color","","data-s")+ye(" visible","wallVis."+e,Y.wallVis[e],"checkbox","","data-s")).join("")}function qs(){Rt("par").innerHTML=[["Photons","count",1e4,5e5,1e4],["Max bounces","bounces",1,10,1],["kNN count","k",5,200,1],["Radius (m)","radius",.1,2,.05],["Exposure","exposure",.5,6,.1],["Indirect gain","gain",0,4,.1],["Resolution","res",96,384,32]].map(([i,t,e,n,s])=>ye(`${i} ${Ye[t]}`,t,Ye[t],"range",`min=${e} max=${n} step=${s}`,"data-p")).join("")+'<div style="display:flex;gap:4px;margin-top:6px"><button data-act="qprev">Preview</button><button data-act="qfinal">Final</button></div>'}function mi(){const i=Rt("q").value.toLowerCase(),t=(Y.rooms||[]).filter(n=>n.name.toLowerCase().includes(i)).map(n=>{const s=pi().filter(r=>r.roomId===n.id&&r.name.toLowerCase().includes(i)).map(r=>`<div class="ol ${r.id===oe?"sel":""}" data-id="${r.id}" style="margin-left:12px"><span class="eye" data-eye="${r.id}">${r.visible===!1?"◌":"●"}</span><span>${ni(r)?"☀ ":""}${r.name}</span></div>`).join("");return`<div class="ol ${n.id===ve?"sel":""}" data-room="${n.id}"><span>▱</span><span>${n.name}</span></div>${s}`}).join(""),e=pi().filter(n=>!n.roomId&&n.name.toLowerCase().includes(i)).map(n=>`<div class="ol ${n.id===oe?"sel":""}" data-id="${n.id}"><span class="eye" data-eye="${n.id}">${n.visible===!1?"◌":"●"}</span><span>${ni(n)?"☀ ":""}${n.name}</span></div>`).join("");Rt("ol").innerHTML=(t?`<small class="mu">ROOM HIERARCHY</small>${t}`:"")+(e?`<small class="mu">OBJECTS &amp; LIGHTS</small>${e}`:"")||'<span class="mu">Empty</span>'}Rt("q").oninput=mi;Rt("ol").onclick=i=>{const t=i.target.dataset.eye;if(t){const s=Xi(+t);s.visible=s.visible===!1,Qe(),Le();return}const e=i.target.closest("[data-room]");if(e){ve=+e.dataset.room,oe=null,ii(),rn(),mi();return}const n=i.target.closest(".ol");n&&n.dataset.id&&jh(+n.dataset.id)};document.addEventListener("change",i=>{const t=i.target;let e,n;if(t.dataset.o)e=Xi(oe),n=t.dataset.o;else if(t.dataset.s)e=Y,n=t.dataset.s;else if(t.dataset.p)e=Ye,n=t.dataset.p;else if(t.dataset.r)e=(Y.rooms||[]).find(o=>o.id===ve),n=t.dataset.r;else return;let s=t.type==="color"?P_(t.value):t.type==="checkbox"?t.checked:t.type==="text"||t.type==="select-one"?t.value:parseFloat(t.value);if(typeof s=="number"&&isNaN(s))return;t.dataset.deg&&(s*=Math.PI/180),e!=null&&e.architectureOpening&&n==="roomId"&&(s=Number(s));const r={...Y.room},a=e==null?void 0:e[n];if(C_(e,n,s),t.dataset.p){qs(),Gi();return}if(t.dataset.r){if(["x","z","w","d"].includes(n)&&Y.rooms.some(o=>o.id!==e.id&&xa(e,o))){e[n]=a,ii(),Rt("foot").textContent="Room edit rejected: rooms cannot overlap.";return}Es(),Qe(),Le();return}if(e!=null&&e.architectureOpening){ga(e),Qe(),Le();return}if(t.dataset.o==="col"&&(e!=null&&e.parts)&&e.parts.forEach(o=>{o.col=[...s]}),n==="showHouseWalls"||n==="showCeilings"){Qe(),Le();return}n.startsWith("room.")&&N_(r),Qe(),Le()});document.addEventListener("input",i=>{var t;((t=i.target.dataset.s)!=null&&t.startsWith("room.")||i.target.dataset.p)&&i.target.dispatchEvent(new Event("change",{bubbles:!0}))});document.getElementById("wallthickness").addEventListener("change",i=>{Y.wallThickness=Re(parseFloat(i.target.value)||.12,.05,.5),ys(),Gi(),Le()});const su=()=>new Promise(i=>setTimeout(i)),gs=i=>i.toFixed(0)+" ms";function ru(i){var e;const t=JSON.parse(JSON.stringify(i));return t.objects=t.objects.filter(n=>n.visible!==!1),t.lights=t.lights.filter(n=>n.visible!==!1),(e=t.rooms)!=null&&e.length&&t.objects.push(...Yh(t.rooms,t.wallThickness||.12,!!t.showCeilings,t.objects.filter(n=>n.architectureOpening))),E_(t)}function au(i,t){const e=m_(i,t);return jn&&jn.key===e?{map:jn.map,reuse:!0}:{map:M_(i,t),key:e,reuse:!1}}function z_(i){var x;let t=0,e=i.room.w,n=0,s=i.room.d,r=0,a=i.room.h;(x=i.rooms)!=null&&x.length&&(t=Math.min(...i.rooms.map(v=>v.x)),e=Math.max(...i.rooms.map(v=>v.x+v.w)),n=Math.min(...i.rooms.map(v=>v.z)),s=Math.max(...i.rooms.map(v=>v.z+v.d)),a=Math.max(...i.rooms.map(v=>v.height)));for(const v of i.objects){const m=Math.max(...v.scale)/2;t=Math.min(t,v.pos[0]-m),e=Math.max(e,v.pos[0]+m),r=Math.min(r,v.pos[1]-m),a=Math.max(a,v.pos[1]+m),n=Math.min(n,v.pos[2]-m),s=Math.max(s,v.pos[2]+m)}for(const v of i.lights)t=Math.min(t,v.pos[0]-v.size/2),e=Math.max(e,v.pos[0]+v.size/2),r=Math.min(r,v.pos[1]),a=Math.max(a,v.pos[1]),n=Math.min(n,v.pos[2]-v.size/2),s=Math.max(s,v.pos[2]+v.size/2);const o=new P((t+e)/2,(r+a)/2,(n+s)/2),c=new P,l=new P(0,1,0);mn.getWorldDirection(c),c.lengthSq()<1e-8&&c.set(0,0,-1),c.normalize();const h=new P().crossVectors(c,l).normalize();h.lengthSq()<1e-8&&h.set(1,0,0),l.crossVectors(h,c).normalize();const p=Math.max(.5,Math.hypot(e-t,a-r,s-n)/2),u=Math.tan(mn.fov*Math.PI/360);return{o:o.clone().addScaledVector(c,-p/Math.sin(Math.atan(u))*1.12).toArray(),r:h.toArray(),u:l.toArray(),f:c.toArray(),t:u}}async function H_(i,t,e,n,s,r){const a=r.res;n.width=n.height=a;const o=n.getContext("2d"),c=o.createImageData(a,a),l={linearMean:0,displayMean:0,linearPeak:0,litPixels:0,pixels:0};let h=performance.now();for(let u=0;u<a&&!ms;u++){for(let f=0;f<a;f++){const x=((f+.5)/a*2-1)*s.t,v=(1-(u+.5)/a*2)*s.t;let m=[s.f[0]+s.r[0]*x+s.u[0]*v,s.f[1]+s.r[1]*x+s.u[1]*v,s.f[2]+s.r[2]*x+s.u[2]*v];const d=Math.hypot(...m);m=m.map(w=>w/d);const b=b_(i,t,r,s.o,m,e),R=f_(b,r.exposure),M=Kc(b),T=Kc(R),y=(u*a+f)*4;l.linearMean+=M,l.displayMean+=T,l.linearPeak=Math.max(l.linearPeak,M),M>1e-6&&l.litPixels++,l.pixels++;for(let w=0;w<3;w++)c.data[y+w]=Math.round(R[w]*255);c.data[y+3]=255}performance.now()-h>12&&(o.putImageData(c,0,0),Rt("bar").firstChild.style.width=100*u/a+"%",await su(),h=performance.now())}o.putImageData(c,0,0);const p=l.pixels;return Object.fromEntries(Object.entries(l).map(([u,f])=>[u,["litPixels","pixels","linearPeak"].includes(u)?f:f/Math.max(1,p)]))}async function sh(i){var r;if(qr)return;qr=!0,ms=!1;const t=Ko;Ii=null,Di=!0,Rt("dirty").textContent="● render pending",Zr(),Ui('[data-act="render"],[data-act="renderall"]').forEach(a=>a.disabled=!0),Rt("cancel").disabled=!1,Rt("bar").hidden=!1,Rt("bar").firstChild||(Rt("bar").innerHTML="<i></i>");const e=JSON.parse(JSON.stringify(Y)),n=ru(e),s=performance.now();try{Ye.count=Re(Ye.count|0,1e3,1e6),Ye.radius=Math.max(Ye.radius,.02),Ye.k=Math.max(Ye.k|0,3),Ye.res=Re(Ye.res|0,32,512);const a={...Ye};if(!n.lights.some(f=>f.on&&f.power>0))throw new Error("No enabled light with power > 0 – add or enable a light.");const o=z_(n);Ui('[data-tab="rv"]')[0].click(),Rt("foot").textContent="Tracing photons…",await su();const c=au(n,a);c.reuse||(jn={key:c.key,map:c.map,S:n});const l={};for(const f of i)if(Rt("foot").textContent="Rendering "+f+"…",l[f]=await H_(n,c.map,f,Rt("c-"+f),o,a),ms)break;if(ms||t!==Ko){Ii=null,Di=!0,Rt("dirty").textContent="● render outdated",Zr(),Rt("foot").textContent="Render cancelled or design changed; no stale results were kept.";return}const h=c.map.stats,p=performance.now()-s;jn.info={s:h,reuse:c.reuse,P:a,total:p,cancel:!1,modes:l};const u={rooms:((r=e.rooms)==null?void 0:r.length)||1,objects:e.objects.filter(f=>f.visible!==!1).length,lights:e.lights.filter(f=>f.visible!==!1).length};Ii={S:n,map:c.map,info:jn.info,sceneSummary:u,renderedAt:new Date().toISOString()},Di=!1,Rt("dirty").textContent="",Rt("foot").textContent=`Done · emitted ${h.emitted} · stored ${h.stored} · trace ${gs(h.traceMs)} · build ${gs(h.buildMs)} · map ${c.reuse?"reused":"rebuilt"} · total ${gs(performance.now()-s)}`,ou(),la&&lu()}catch(a){Ii=null,Di=!0,Rt("dirty").textContent="● render outdated",Zr(),Rt("foot").textContent="Render error: "+a.message}finally{qr=!1,Ui('[data-act="render"],[data-act="renderall"]').forEach(a=>a.disabled=!1),Rt("cancel").disabled=!0,Rt("bar").hidden=!0}}function ou(){if(!Ii){Rt("stats").textContent="No current render. Render the active design to create current previews and photon analysis.";return}const{S:i,map:t,info:e,renderedAt:n,sceneSummary:s}=Ii,{s:r,reuse:a,P:o,total:c,modes:l}=e,h={},p=[0,0,0];for(const m of t.depth)h[m]=(h[m]||0)+1;for(let m=0;m<t.flux.length;m+=3)p[0]+=t.flux[m],p[1]+=t.flux[m+1],p[2]+=t.flux[m+2];const u={direct:"Direct only",indirect:"Indirect only",gi:"Direct + Indirect"},f=Object.entries(l).map(([m,d])=>`${u[m]}: mean linear luminance ${d.linearMean.toExponential(3)} · mean displayed ${d.displayMean.toFixed(3)} · peak ${d.linearPeak.toFixed(3)} · lit pixels ${d.litPixels}/${d.pixels}`).join(`
`),x=Math.max(1,Math.ceil(t.pathDepth.length/3e4)),v=Math.ceil(t.pathDepth.length/x);Rt("stats").textContent=`Latest render: ${n}
Design: ${s.rooms} room(s), ${s.objects} object(s), ${s.lights} light(s)
Render status: complete
Modes rendered: ${Object.keys(l).map(m=>u[m]).join(", ")}
Emitted photons: ${r.emitted}
Traced photons: ${r.traced}
Stored photon hits: ${r.stored}
Stored flux RGB sum: ${p.map(m=>m.toExponential(3)).join(", ")}
Traced path segments: ${r.pathSegments}
Path segments stored for analysis: ${r.pathSamples} (emitted-photon stride ${r.pathStride})
Path segments plotted: ${v}
Absorbed paths: ${r.absorbed}
Escaped paths: ${r.escaped}
Trace time: ${gs(r.traceMs)}
k-d tree build: ${gs(r.buildMs)}
Render total: ${gs(c)}
Photon map: ${a?"reused":"rebuilt"}
Settings: photons=${o.count} bounces=${o.bounces} k=${o.k} radius=${o.radius} exposure=${o.exposure} gain=${o.gain} resolution=${o.res}
Stored hits by bounce: ${Object.entries(h).map(([m,d])=>`${m}: ${d}`).join("  ")}

${f}`,Rt("legend").innerHTML=Object.keys(h).map(m=>`<span style="margin-right:10px"><i class="sw" style="background:#${ha(+m).getHexString()}"></i>bounce ${m} (${h[m]})</span>`).join(""),G_(i,t)}function G_(i,t){var y,w;const e=i.room||{w:5,d:5},n={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0},s=(g,E)=>{n.x0=Math.min(n.x0,g),n.x1=Math.max(n.x1,g),n.z0=Math.min(n.z0,E),n.z1=Math.max(n.z1,E)};if((y=i.rooms)!=null&&y.length)for(const g of i.rooms)s(g.x,g.z),s(g.x+g.w,g.z+g.d);else s(0,0),s(e.w,e.d);for(let g=0;g<t.tree.n;g++)s(t.pos[g*3],t.pos[g*3+2]);for(let g=0;g<t.pathDepth.length;g++)s(t.path[g*6],t.path[g*6+2]),s(t.path[g*6+3],t.path[g*6+5]);const r=Math.max(.25,Math.max(n.x1-n.x0,n.z1-n.z0)*.03);n.x0-=r,n.x1+=r,n.z0-=r,n.z1+=r;const a=n.x1-n.x0,o=n.z1-n.z0,c=g=>{const E=Rt(g),A=window.devicePixelRatio||1,L=E.clientWidth||640,D=E.clientHeight||420;E.width=Math.round(L*A),E.height=Math.round(D*A);const z=E.getContext("2d");return z.setTransform(A,0,0,A,0,0),z.fillStyle="#101218",z.fillRect(0,0,L,D),{cv:E,g:z,w:L,h:D}},l=(g,E,A)=>[16+(g-n.x0)/a*(A.w-32),A.h-16-(E-n.z0)/o*(A.h-32)],h=c("pathview");h.g.strokeStyle="#343945",h.g.lineWidth=1;for(let g=Math.ceil(n.x0);g<=n.x1;g+=1){const E=l(g,n.z0,h),A=l(g,n.z1,h);h.g.beginPath(),h.g.moveTo(...E),h.g.lineTo(...A),h.g.stroke()}for(let g=Math.ceil(n.z0);g<=n.z1;g+=1){const E=l(n.x0,g,h),A=l(n.x1,g,h);h.g.beginPath(),h.g.moveTo(...E),h.g.lineTo(...A),h.g.stroke()}const p=(w=i.rooms)!=null&&w.length?i.rooms:[{name:"Room",x:0,z:0,w:e.w,d:e.d}];h.g.lineWidth=2,h.g.strokeStyle="#e8a33d",h.g.fillStyle="#e8a33d18";for(const g of p){const E=l(g.x,g.z,h),A=l(g.x+g.w,g.z+g.d,h);h.g.fillRect(E[0],A[1],A[0]-E[0],E[1]-A[1]),h.g.strokeRect(E[0],A[1],A[0]-E[0],E[1]-A[1]),h.g.fillStyle="#d8dbe3",h.g.font="10px system-ui",h.g.fillText(g.name||g.type||"Room",(E[0]+A[0])/2,(E[1]+A[1])/2),h.g.fillStyle="#e8a33d18"}const u=t.pathDepth.length,f=Math.max(1,Math.ceil(u/3e4));for(let g=0;g<u;g+=f){const E=g*6,A=l(t.path[E],t.path[E+2],h),L=l(t.path[E+3],t.path[E+5],h),D=ha(t.pathDepth[g]);h.g.strokeStyle=`rgba(${Math.round(D.r*255)},${Math.round(D.g*255)},${Math.round(D.b*255)},.18)`,h.g.beginPath(),h.g.moveTo(...A),h.g.lineTo(...L),h.g.stroke()}const x=Math.max(1,Math.ceil(t.tree.n/2e4));for(let g=0;g<t.tree.n;g+=x){const E=g*3,[A,L]=l(t.pos[E],t.pos[E+2],h),D=ha(t.depth[g]);h.g.fillStyle=`rgb(${Math.round(D.r*255)},${Math.round(D.g*255)},${Math.round(D.b*255)})`,h.g.fillRect(A-1,L-1,2,2)}h.g.fillStyle="#b8bdc8",h.g.font="11px system-ui",h.g.fillText(`Actual traced segments: ${k_(t.stats.pathSegments)} · displayed: ${u}`,8,14);const v=c("densityview"),m=64,d=new Uint32Array(m*m);let b=0;for(let g=0;g<t.tree.n;g++){const E=g*3,A=Re(Math.floor((t.pos[E]-n.x0)/a*m),0,m-1),L=Re(Math.floor((t.pos[E+2]-n.z0)/o*m),0,m-1),D=L*m+A;d[D]++,b=Math.max(b,d[D])}const R=(v.w-32)/m,M=(v.h-32)/m,T=Math.log1p(b||1);for(let g=0;g<m;g++)for(let E=0;E<m;E++){const A=d[g*m+E];if(!A)continue;const L=Math.log1p(A)/T,D=Math.round(35+220*L),z=Math.round(65+120*(1-Math.abs(L-.55)*1.8)),U=Math.round(190*(1-L));v.g.fillStyle=`rgb(${D},${z},${U})`,v.g.fillRect(16+E*R,v.h-16-(g+1)*M,Math.ceil(R),Math.ceil(M))}v.g.strokeStyle="#747b89",v.g.strokeRect(16,16,v.w-32,v.h-32),v.g.fillStyle="#d8dbe3",v.g.font="11px system-ui",v.g.fillText(`Stored hits: ${t.tree.n} · max per cell: ${b}`,8,14)}const k_=i=>Number(i||0).toLocaleString(),ha=i=>new Nt().setHSL(Math.max(0,.62-.1*i),.9,.55);async function lu(){if(fn&&(zn.remove(fn),fn.geometry.dispose(),fn.material.dispose(),fn=null),!la)return;if(!jn||Di){const a=ru();if(!a.lights.some(c=>c.on)){Rt("foot").textContent="3D photons: no enabled light";return}const o=au(a);o.reuse||(jn={key:o.key,map:o.map,S:a})}const i=jn.map,t=i.tree.n,e=Math.max(1,Math.ceil(t/6e4)),n=[],s=[];for(let a=0;a<t;a+=e){n.push(i.pos[a*3],i.pos[a*3+1],i.pos[a*3+2]);const o=ha(i.depth[a]);s.push(o.r,o.g,o.b)}const r=new be;r.setAttribute("position",new Jt(n,3)),r.setAttribute("color",new Jt(s,3)),fn=new Td(r,new Ch({size:.04,vertexColors:!0,transparent:!0,opacity:Di?.25:1})),zn.add(fn),Rt("foot").textContent=`3D photons: showing ${n.length/3} of ${t} stored records (colour = bounce depth)`}const rh=(i,t)=>Object.assign(document.createElement("a"),{href:i,download:t}).click(),V_={new(){if(confirm("Discard the current scene?")){const i=aa();i.objects=[],oe=null,Ms(i),qn=[JSON.stringify(Y)],Nn=0}},reset(){confirm("Reset to the demo Cornell box?")&&(oe=null,Ms(aa()),Le())},save(){rh(URL.createObjectURL(new Blob([JSON.stringify({version:3,state:Y,params:Ye,camera:{pos:mn.position.toArray(),target:vs.target.toArray()}},null,1)])),"photonstudio-scene.json")},load(){Rt("file").click()},png(){const i=Rt("c-gi");if(!i.width||i.width<20){Rt("foot").textContent="Render first, then export.";return}i.toBlob(t=>rh(URL.createObjectURL(t),"photonstudio-render.png"))},undo:tu,redo:eu,dup:Qh,del:Jh,addpoint:()=>nh("point"),addarea:()=>nh("area"),wire(){Xs=!Xs,Qe()},photons(){la=!la,lu()},snapg(){Ni=!Ni,Rt("sg").classList.toggle("on",Ni),_a()},snapf(){Xr=!Xr,Rt("sf").classList.toggle("on",Xr)},render:()=>sh(["gi"]),renderall:()=>sh(["direct","indirect","gi"]),cancel(){ms=!0},qprev(){Object.assign(Ye,{count:6e4,res:160}),qs(),Gi()},qfinal(){Object.assign(Ye,{count:3e5,res:320,k:80}),qs(),Gi()},samplehouse:B_,addroom:O_,adddoor:()=>ih("door"),addwindow:()=>ih("window")};document.addEventListener("click",i=>{const t=i.target.closest("button");if(!t)return;const e=t.dataset;if(e.act)V_[e.act]();else if(e.add)ma[e.add]&&Qo(e.add);else if(e.view)Ml(e.view);else if(e.tool)Wr=e.tool,Ui("[data-tool]").forEach(n=>n.classList.toggle("on",n===t)),_a();else if(e.planTool)Yr=e.planTool,Yr==="draw"&&(iu(),rn()),Ui("[data-plan-tool]").forEach(n=>n.classList.toggle("on",n===t)),Rt("foot").textContent=Yr==="draw"?"Floor plan · drag to draw a room":"Floor plan · drag rooms to move; resize using lower-right handle";else if(e.tab){Ui(".tab").forEach(n=>n.classList.toggle("on",n===t));for(const n of["vp","plan","rv","an"])Rt(n).hidden=n!==e.tab;document.body.classList.toggle("focus-view",e.tab==="rv"||e.tab==="an"),e.tab==="vp"&&vl(),e.tab==="plan"&&requestAnimationFrame(rn),e.tab==="an"&&ou()}});Rt("file").onchange=async i=>{try{const t=JSON.parse(await i.target.files[0].text()),e=t.state;if(!e||!e.room||!e.walls||!Array.isArray(e.objects)||!Array.isArray(e.lights))throw new Error("not a PhotonStudio v3 scene");e.wallVis=e.wallVis||{left:1,right:1,back:1,floor:1,ceil:1},Object.assign(Ye,t.params||{}),t.camera&&(mn.position.fromArray(t.camera.pos),vs.target.fromArray(t.camera.target),vs.update()),oe=null,Ms(e),qs(),Le()}catch(t){Rt("foot").textContent="Load failed: "+t.message}i.target.value=""};addEventListener("keydown",i=>{if(/INPUT|SELECT/.test(i.target.tagName))return;const t=i.key.toLowerCase();if(i.ctrlKey&&t==="z")i.preventDefault(),tu();else if(i.ctrlKey&&t==="y")i.preventDefault(),eu();else if(i.ctrlKey&&t==="d")i.preventDefault(),Qh();else if(t==="delete")Jh();else{const e={q:"select",w:"translate",e:"rotate",r:"scale"}[t];e&&Ui(`[data-tool="${e}"]`)[0].click()}});vl();new ResizeObserver(F_).observe(Rt("plan"));Ml("persp");Qe();mi();ii();Sl();qs();rn();Zh();
