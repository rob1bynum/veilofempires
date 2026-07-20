const m=r=>Math.min(15,r*5);
if(m(1)!==5||m(2)!==10||m(3)!==15) throw new Error("Reaction rank scaling");
if(55+m(1)!==60||55+m(2)!==65||55+m(3)!==70) throw new Error("Attack bonus");
console.log("Reaction tests passed.");