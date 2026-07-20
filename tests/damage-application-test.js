
const apply=(incoming,dr,temp,hp)=>{
 let remaining=Math.max(0,incoming-dr);
 const absorbed=Math.min(temp,remaining);
 temp-=absorbed;
 remaining-=absorbed;
 hp=Math.max(0,hp-remaining);
 return {temp,hp};
};
const expect=(a,b,l)=>{if(JSON.stringify(a)!==JSON.stringify(b))throw new Error(`${l}: ${JSON.stringify(a)} != ${JSON.stringify(b)}`)};
expect(apply(7,2,3,10),{temp:0,hp:8},"DR then Temp then Health");
expect(apply(2,3,5,10),{temp:5,hp:10},"DR blocks all");
expect(apply(6,0,10,10),{temp:4,hp:10},"Temp absorbs all");
console.log("Damage application tests passed.");
