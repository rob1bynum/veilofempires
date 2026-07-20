const normalize=(key,rank)=>key&&(rank===""||rank===undefined||rank===null)?1:rank;
const rows=[["ghost_step",2],["iron_heart",1],["arcane_sight",""]];
const used=rows.reduce((s,[k,r])=>s+normalize(k,r),0);
if(used!==4)throw new Error("Expected 4 protocol points");
console.log("Protocol initialization tests passed.");