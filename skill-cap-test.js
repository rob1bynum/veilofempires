const BASE=5, CAP=10;
const increase=current=>Math.min(BASE+CAP,current+1);
if(increase(14)!==15) throw new Error("Should reach 15");
if(increase(15)!==15) throw new Error("Should stop at 15");
if((15-BASE)!==10) throw new Error("Discretionary cap should equal 10");
console.log("Skill allocation cap tests passed.");
