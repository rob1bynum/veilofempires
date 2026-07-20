const update=(budget,used,delta)=>Math.max(0,budget-(used+delta));
if(update(10,0,1)!==9) throw new Error("Attribute counter did not move 10 to 9");
if(update(10,1,-1)!==10) throw new Error("Attribute refund did not move 9 to 10");
if(update(30,0,1)!==29) throw new Error("Skill counter did not move 30 to 29");
if(update(30,1,-1)!==30) throw new Error("Skill refund did not move 29 to 30");
console.log("Builder counter tests passed.");
