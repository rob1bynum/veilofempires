const used=s=>s.reduce((a,x)=>a+(x.key?x.rank:0),0);
if(used([])!==0)throw new Error("0/3");
if(used([{key:"ghost_step",rank:1}])!==1)throw new Error("1/3");
if(used([{key:"ghost_step",rank:1},{key:"iron_heart",rank:1}])!==2)throw new Error("2/3");
if(used([{key:"ghost_step",rank:1},{key:"iron_heart",rank:1},{key:"arcane_sight",rank:1}])!==3)throw new Error("3/3");
console.log("Protocol counter tests passed.");