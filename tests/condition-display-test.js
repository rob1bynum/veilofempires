
const normalTotal=(base,attribute,extra)=>base+attribute+extra;
const conditionDisplay=(attributePenalty,directPenalty)=>attributePenalty+directPenalty;
const adjustedRoll=(normal,condition)=>normal+condition;
const expect=(a,b,label)=>{if(a!==b)throw new Error(`${label}: ${a} != ${b}`)};

expect(normalTotal(15,30,5),50,"Normal Skill total");
expect(conditionDisplay(0,-10),-10,"Deafened Perception display");
expect(conditionDisplay(0,-15),-15,"Blinded combat display");
expect(conditionDisplay(-10,0),-10,"Exhausted display");
expect(adjustedRoll(50,-10),40,"Adjusted roll target");
expect(normalTotal(15,30,5),50,"Total remains unchanged");
console.log("Condition display tests passed.");
