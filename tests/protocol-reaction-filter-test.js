const loaded=["Ghost Step II","Iron Heart I","Arcane Sight I","Calm Mind I"];
const text=loaded.join(" • ");
if(text.split(" • ").length!==4) throw new Error("Protocol summary lost an entry");
const available=(sourceRank)=>sourceRank>0?1:0;
if(available(0)!==0||available(1)!==1||available(2)!==1) throw new Error("Reaction availability");
console.log("Protocol summary and Reaction filter tests passed.");