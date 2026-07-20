
const modifier=(attackerArmor,defenderArmor)=>defenderArmor-attackerArmor;
const expect=(a,b,l)=>{if(a!==b)throw new Error(`${l}: ${a} != ${b}`)};
expect(modifier(0,0),0,"None vs None");
expect(modifier(0,15),15,"None attacks Heavy");
expect(modifier(15,0),-15,"Heavy attacks None");
expect(modifier(5,15),10,"Light attacks Heavy");
expect(modifier(15,5),-10,"Heavy attacks Light");
expect(modifier(10,15),5,"Medium attacks Heavy");
console.log("Armor mobility tests passed.");
