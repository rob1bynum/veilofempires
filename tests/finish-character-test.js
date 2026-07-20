const valid=x=>Boolean(x.heritage&&x.specialty&&x.protocol===3&&x.attributes===10&&x.skills===30);
if(!valid({heritage:"rajah",specialty:"infiltrator",protocol:3,attributes:10,skills:30}))throw new Error("valid rejected");
if(valid({heritage:"",specialty:"infiltrator",protocol:3,attributes:10,skills:30}))throw new Error("invalid accepted");
console.log("Finish Character tests passed.");