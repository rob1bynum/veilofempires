const count=slots=>slots.reduce((n,key)=>n+(key?1:0),0);
if(count(["ghost_step","",""])!==1) throw new Error("1 selected should count 1");
if(count(["ghost_step","iron_heart",""])!==2) throw new Error("2 selected should count 2");
if(count(["ghost_step","iron_heart","arcane_sight"])!==3) throw new Error("3 selected should count 3");
console.log("Starting Protocol counter tests passed.");
