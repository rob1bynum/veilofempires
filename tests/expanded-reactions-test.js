
const apply=(incoming,armor,reaction)=>Math.max(0,incoming-armor-reaction);
if(apply(8,3,2)!==3) throw new Error("Harden DR");
if(apply(4,3,2)!==0) throw new Error("DR floor");
const mod=r=>r*5;
if(mod(1)!==5||mod(2)!==10||mod(3)!==15) throw new Error("Reaction scaling");
console.log("Expanded Reaction tests passed.");
