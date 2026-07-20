
const rankMod=r=>r*5;
const closeTarget=(base,general,close,protocol)=>base+general+close+protocol;
if(rankMod(1)!==5||rankMod(2)!==10||rankMod(3)!==15) throw new Error("Dual-mode scaling");
if(closeTarget(55,0,10,0)!==65) throw new Error("Relentless Assault");
if(closeTarget(55,5,0,0)!==60) throw new Error("Exploit the Opening");
if(closeTarget(55,0,0,10)!==65) throw new Error("Expose Weakness");
console.log("Tactical Reaction tests passed.");
