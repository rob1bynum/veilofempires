
const total=(base,attr,extra,cond)=>base+attr+extra+cond;
const expect=(a,b,label)=>{if(a!==b)throw new Error(`${label}: ${a} != ${b}`)};
expect(total(15,30,5,-10),40,"Deafened Perception Total");
expect(total(15,30,5,-15),35,"Blinded Combat Total");
expect(total(15,30,5,0),50,"No Condition Total");
console.log("Condition-inclusive Total tests passed.");
