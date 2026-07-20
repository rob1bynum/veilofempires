
const displayedAttribute=(base,protocol)=>base+protocol;
const displayedSkill=(base,attribute,bonus)=>base+attribute+bonus;
const adjusted=(normal,condition)=>normal+condition;
const expect=(a,b,label)=>{if(a!==b)throw new Error(`${label}: ${a} != ${b}`)};

expect(displayedAttribute(30,5),35,"Displayed Attribute unchanged");
expect(displayedSkill(15,35,5),55,"Displayed Skill unchanged");
expect(adjusted(55,-10),45,"Deafened Perception roll");
expect(adjusted(55,-15),40,"Blinded combat roll");
expect(adjusted(55,0),55,"Condition cleared");
console.log("Condition roll-only tests passed.");
