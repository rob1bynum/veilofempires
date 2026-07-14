const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync('Veil of Empires/veil-of-empires.html','utf8');
const worker=html.split('<script type="text/worker">')[1].split('</script>')[0];
const handlers={};
const attrs={actions_current:'3',attacks_made:'0',attacks_remaining:'3',reaction_available:'1',speed:'35',close_combat_total:'65',ranged_combat_total:'60',target_armor_penalty:'0',target_evading:'0',attack_other_modifier:'0',protocol_slot_1:'',protocol_slot_2:'',protocol_slot_3:'',character_name:'Tester'};
const ctx={console,Object,Math,Number,String,parseFloat,
 on:(events,cb)=>events.split(/\s+/).forEach(e=>(handlers[e]??=[]).push(cb)),
 getAttrs:(keys,cb)=>cb(Object.fromEntries(keys.map(k=>[k,attrs[k]??'']))),
 setAttrs:(u,o,cb)=>{Object.assign(attrs,Object.fromEntries(Object.entries(u).map(([k,v])=>[k,String(v)])));if(cb)cb();},
 startRoll:(s,cb)=>cb({rollId:'1',results:{rolled:{result:25}}}),finishRoll:()=>{},
 getSectionIDs:(s,cb)=>cb([]),removeRepeatingRow:()=>{},generateRowID:()=> 'row1'
};
vm.createContext(ctx);vm.runInContext(worker,ctx);
const fire=e=>(handlers[e]||[]).forEach(fn=>fn({sourceAttribute:e.replace('clicked:','act_')}));
fire('clicked:move_action');
if(attrs.actions_current!=='2'||attrs.attacks_made!=='0'||attrs.attacks_remaining!=='3') throw Error('Move action counters failed '+JSON.stringify(attrs));
fire('clicked:close_attack');
if(attrs.actions_current!=='1'||attrs.attacks_made!=='1'||attrs.attacks_remaining!=='2') throw Error('First attack counters failed '+JSON.stringify(attrs));
fire('clicked:ranged_attack');
if(attrs.actions_current!=='0'||attrs.attacks_made!=='2'||attrs.attacks_remaining!=='1') throw Error('Second attack counters failed '+JSON.stringify(attrs));
fire('clicked:reset_round');
if(attrs.actions_current!=='3'||attrs.attacks_made!=='0'||attrs.attacks_remaining!=='3'||attrs.reaction_available!=='1') throw Error('Reset failed '+JSON.stringify(attrs));
console.log('Round Actions runtime test passed.');
