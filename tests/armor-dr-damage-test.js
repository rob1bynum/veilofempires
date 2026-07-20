const f=(raw,dr)=>Math.max(0,raw-dr);
if(f(8,3)!==5||f(2,3)!==0||f(7,0)!==7) throw new Error("Armor DR failure");
console.log("Armor DR tests passed.");