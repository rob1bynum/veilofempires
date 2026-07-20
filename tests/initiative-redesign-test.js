const calc=(skill,roll)=>{const success=roll<=skill;const margin=success?0:roll-skill;return{success,margin,score:success?roll:roll+margin}};
let r=calc(65,18); if(r.score!==18||!r.success) throw new Error("success");
r=calc(65,79); if(r.margin!==14||r.score!==93||r.success) throw new Error("failure1");
r=calc(50,81); if(r.margin!==31||r.score!==112) throw new Error("failure2");
r=calc(80,82); if(r.margin!==2||r.score!==84) throw new Error("failure3");
console.log("Initiative redesign tests passed.");