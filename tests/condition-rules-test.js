
const rules={
 blinded:{skills:{perception:-20,close_combat:-20,ranged_combat:-20}},
 charmed:{skills:{insight:-10,persuasion:-10,deception:-10,intimidation:-10}},
 deafened:{skills:{perception:-10},initiative:-10},
 exhausted:{all:-10,movement:-10},
 frightened:{all:-10},
 incapacitated:{actions:0,reaction:0},
 poisoned:{all:-10},
 restrained:{attributeSkills:{dexterity:-10},skills:{close_combat:-10,ranged_combat:-10},movementSet:0},
 shocked:{attributes:{intelligence:-10,wisdom:-10},reaction:0},
 stunned:{all:-20,actions:0,reaction:0}
};
const attr=(a,active)=>active.reduce((n,c)=>n+(rules[c].all||0)+((rules[c].attributes||{})[a]||0),0);
const skill=(s,a,active)=>attr(a,active)+active.reduce((n,c)=>n+((rules[c].skills||{})[s]||0)+((rules[c].attributeSkills||{})[a]||0),0);
const expect=(a,b,l)=>{if(a!==b)throw new Error(`${l}: ${a} != ${b}`)};
expect(skill("perception","wisdom",["deafened"]),-10,"Deafened Perception");
expect(skill("athletics","strength",["exhausted"]),-10,"Exhausted not doubled");
expect(skill("perception","wisdom",["stunned"]),-20,"Stunned not doubled");
expect(skill("stealth","dexterity",["restrained"]),-10,"Restrained Dex Skill");
expect(attr("dexterity",["restrained"]),0,"Restrained Dexterity Attribute");
expect(skill("investigation","intelligence",["shocked"]),-10,"Shocked Intelligence Skill");
expect(skill("perception","wisdom",["blinded","deafened"]),-30,"Specific penalties stack");
console.log("Condition tests passed.");
