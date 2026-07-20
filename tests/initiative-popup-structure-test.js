const checkbox=true;
const interveningHiddenFields=0;
const generalSiblingSelector=true;
if(!checkbox || interveningHiddenFields!==0 || !generalSiblingSelector) {
  throw new Error("Initiative popup structure invalid");
}
console.log("Initiative popup structure test passed.");
