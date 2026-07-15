
const RANK_DATA={1:{arcaneRank:1,protocolPoints:3},2:{arcaneRank:2,protocolPoints:4}};
const clamp=(r,a)=>Math.max(0,Math.min(Math.trunc(Number(r)||0),a));
const calc=(rank,values)=>{
 const a=RANK_DATA[rank].arcaneRank, max=RANK_DATA[rank].protocolPoints;
 const used=values.reduce((sum,v)=>sum+clamp(v,a),0);
 return {a,max,used,remaining:max-used};
};
let a=calc(2,[2,1,1]);
if(a.used!==4||a.remaining!==0||a.a!==2) process.exit(1);
let b=calc(1,[2,1,1]);
if(b.used!==3||b.a!==1) process.exit(1);
console.log("Protocol budget test passed.");
