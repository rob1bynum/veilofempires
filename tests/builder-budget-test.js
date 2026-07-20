const spend=(current,delta,min,max,used,budget)=>{
  if(delta>0&&(used>=budget||current>=max))return current;
  if(delta<0&&current<=min)return current;
  return Math.max(min,Math.min(max,current+delta));
};
if(spend(5,1,5,15,0,10)!==6)throw new Error("attribute plus");
if(spend(15,1,5,15,9,10)!==15)throw new Error("attribute cap");
if(spend(5,-1,5,15,0,10)!==5)throw new Error("attribute floor");
if(spend(5,1,5,100,30,30)!==5)throw new Error("skill budget");
console.log("Builder budget tests passed.");