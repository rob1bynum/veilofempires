const attr=(base,heritage,protocol)=>base+heritage+protocol;
if(attr(5,5,0)!==10)throw new Error("heritage attribute");
if(attr(5,0,5)!==10)throw new Error("protocol attribute");
const skill=(base,attribute,heritage,specialty,protocol,player)=>base+attribute+heritage+specialty+protocol+player;
if(skill(5,10,5,0,10,15)!==45)throw new Error("stealth example");
const used=[10,5,5,5,5,5].reduce((s,v)=>s+Math.max(0,v-5),0);
if(used!==5)throw new Error("attribute budget");
console.log("Character creation refactor tests passed.");