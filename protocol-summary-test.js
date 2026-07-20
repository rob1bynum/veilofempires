
const PROTOCOLS = {
  ghost_step:{name:"Ghost Step",attributes:{dexterity:5},skills:{stealth:10},temporary_health:0,special:"Observers suffer -5 to Perception tests made to locate you."},
  titan_frame:{name:"Titan Frame",attributes:{strength:5},skills:{athletics:10},temporary_health:5,special:"Gain +5 Temporary Health while this Protocol is prepared."}
};
const summarizeProtocol = protocol => {
  const attributes = Object.entries(protocol.attributes || {}).map(([key,value]) => `+${value} ${key}`);
  const skills = Object.entries(protocol.skills || {}).map(([key,value]) => `+${value} ${key}`);
  const extras = [];
  if (Number(protocol.temporary_health || 0)) extras.push(`+${protocol.temporary_health} Temporary Health`);
  if (protocol.special) extras.push(protocol.special);
  return [...attributes, ...skills, ...extras].join(" • ");
};
const ghost = summarizeProtocol(PROTOCOLS.ghost_step);
const titan = summarizeProtocol(PROTOCOLS.titan_frame);
if (!ghost.includes("+5 dexterity") || !ghost.includes("+10 stealth") || !ghost.includes("Observers suffer")) process.exit(1);
if (!titan.includes("+5 strength") || !titan.includes("+10 athletics") || !titan.includes("+5 Temporary Health")) process.exit(1);
console.log("Protocol summary formatter test passed.");
