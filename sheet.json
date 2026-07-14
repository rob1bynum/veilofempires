const fs=require("fs");
const html=fs.readFileSync("Veil of Empires/veil-of-empires.html","utf8");
const worker=html.match(/<script type="text\/worker">([\s\S]*?)<\/script>/)[1];
global.on=()=>{}; global.getAttrs=()=>{}; global.setAttrs=()=>{}; global.startRoll=()=>{}; global.finishRoll=()=>{}; global.getSectionIDs=()=>{}; global.removeRepeatingRow=()=>{}; global.generateRowID=()=>"row";
eval(worker);
if(!worker.includes("const VOE_DATA = Object.freeze")) throw new Error("VOE_DATA missing");
console.log("Worker syntax validation passed.");
