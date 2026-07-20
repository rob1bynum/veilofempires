const validate=(step,x)=>{
 if(step===1)return Boolean(x.heritage);
 if(step===2)return Boolean(x.specialty);
 if(step===3)return x.protocolUsed===x.protocolAvailable;
 if(step===4)return x.attributeUsed===10;
 if(step===5)return x.skillUsed===30;
 return true;
};
const complete={heritage:"rajah",specialty:"infiltrator",protocolUsed:3,protocolAvailable:3,attributeUsed:10,skillUsed:30};
for(let step=1;step<=5;step++)if(!validate(step,complete))throw new Error(`Step ${step} rejected`);
if(validate(3,{...complete,protocolUsed:2}))throw new Error("Protocol step accepted early");
if(validate(4,{...complete,attributeUsed:9}))throw new Error("Attribute step accepted early");
if(validate(5,{...complete,skillUsed:29}))throw new Error("Skill step accepted early");
console.log("Wizard navigation tests passed.");
