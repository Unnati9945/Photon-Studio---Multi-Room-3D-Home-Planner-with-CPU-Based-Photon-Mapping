// Headless end-to-end render: Direct / Indirect / GI images + numeric colour-bleeding check on the rendered pixels. Usage: node tests/render-smoke.mjs [outdir]
import {defaultScene,buildMap,shade,toneMap,luminance} from '../src/photon.js';import fs from 'node:fs';
const out=process.argv[2]||'.',P={count:200000,k:80,radius:.7,bounces:5,exposure:2.2,gain:1},N=160;
const cam=[2.5,3,14],tgt=[2.5,2.5,2.5],nz=v=>{const l=Math.hypot(...v);return v.map(x=>x/l)},f=nz(tgt.map((t,i)=>t-cam[i]));
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],R=nz(cross(f,[0,1,0])),U=cross(R,f),T=Math.tan(20*Math.PI/180);
function img(S,m,mode){const px=new Float32Array(N*N*3);for(let y=0;y<N;y++)for(let x=0;x<N;x++){const a=((x+.5)/N*2-1)*T,b=(1-(y+.5)/N*2)*T,d=nz([0,1,2].map(i=>f[i]+R[i]*a+U[i]*b)),c=shade(S,m,P,cam,d,mode);px.set(c,(y*N+x)*3)}return px}
const save=(px,n)=>{const b=Buffer.alloc(N*N*3);for(let i=0;i<px.length;i+=3){const c=toneMap([px[i],px[i+1],px[i+2]],P.exposure);for(let k=0;k<3;k++)b[i+k]=Math.round(c[k]*255)}fs.writeFileSync(`${out}/${n}.ppm`,Buffer.concat([Buffer.from(`P6 ${N} ${N} 255\n`),b]))};
const mean=(px,x0,x1,y0,y1)=>{const s=[0,0,0];let c=0;for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){for(let k=0;k<3;k++)s[k]+=px[(y*N+x)*3+k];c++}return s.map(v=>+(v/c).toFixed(4))};
const meanLuminance=px=>{let total=0;for(let i=0;i<px.length;i+=3)total+=luminance([px[i],px[i+1],px[i+2]]);return +(total/(px.length/3)).toFixed(5)};
const S=defaultScene(),m=buildMap(S,P),D=img(S,m,'direct'),I=img(S,m,'indirect'),G=img(S,m,'gi');save(D,'direct');save(I,'indirect');save(G,'gi');
const L=[8,40,50,80],Rg=[110,150,50,80];  // floor-ish patches next to the left (red) / right (green) wall in the image
console.log('Tone-mapped image mean luminance', {direct:meanLuminance(D),indirect:meanLuminance(I),gi:meanLuminance(G)});
console.log('INDIRECT left patch',mean(I,...L),'right patch',mean(I,...Rg));console.log('DIRECT   left patch',mean(D,...L),'right patch',mean(D,...Rg));
S.walls.left=[.1,.1,.75];const m2=buildMap(S,P),I2=img(S,m2,'indirect');console.log('INDIRECT after red->blue, left patch',mean(I2,...L));
