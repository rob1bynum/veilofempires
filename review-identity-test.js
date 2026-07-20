const heritage={rajah:{name:"Rajah"}};
const specialty={investigator:{name:"Investigator"}};
const review=(h,s)=>({
 heritage:heritage[h]?.name||"No Heritage",
 specialty:specialty[s]?.name||"No Specialty"
});
const r=review("rajah","investigator");
if(r.heritage!=="Rajah") throw new Error("Heritage review failed");
if(r.specialty!=="Investigator") throw new Error("Specialty review failed");
console.log("Review identity tests passed.");
