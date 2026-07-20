const flip=n=>{const s=String(n).padStart(2,"0");const f=Number(s[1]+s[0]);return f===0?100:f};
if(flip(38)!==83||flip(10)!==1||flip(100)!==1) throw new Error("Contingency flip");
const reset=max=>({current:max,actions:3,reaction:1});
const r=reset(3);
if(r.current!==3||r.actions!==3||r.reaction!==1) throw new Error("Encounter reset");
console.log("Contingency and encounter tests passed.");