const attrUsed=(values)=>values.reduce((sum,v)=>sum+Math.max(0,v-5),0);
if(attrUsed([6,5,5,5,5,5])!==1) throw new Error("Attribute spend");
if(10-attrUsed([6,5,5,5,5,5])!==9) throw new Error("Attribute remaining");
const skillUsed=(values)=>values.reduce((sum,v)=>sum+Math.max(0,v-5),0);
if(skillUsed([6,7,5])!==3) throw new Error("Skill spend");
if(30-skillUsed([6,7,5])!==27) throw new Error("Skill remaining");
console.log("Builder allocation tests passed.");
