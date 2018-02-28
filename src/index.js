// PLEASE DON'T change function name

module.exports = function makeExchange(target) {
  if (target === 0 || target < 0) return {};
  if (target > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  let str = '';
  const coinsObj = {"H":0,"Q":0,"D":0,"N":0,"P":0};
  function find(start, history) {
    if (start == target) {
        return history;
    }
    else if (start > target)
    return null;
    else
    return find(start + 50, "(" + history + " + H)") ||
           find(start + 25, "(" + history + " + Q)") ||
           find(start + 10, "(" + history + " + D)") ||
           find(start + 5, "(" + history + " + N)") ||
           find(start + 1, "(" + history + " + P)") ;

    };
   str = find(0, "0");

   for (var i = 0; i < str.length; i++) {
     if (str[i]==="H") coinsObj["H"] += 1 ;
     if (str[i]==="Q") coinsObj["Q"] += 1 ;
     if (str[i]==="D") coinsObj["D"] += 1 ;
     if (str[i]==="N") coinsObj["N"] += 1 ;
     if (str[i]==="P") coinsObj["P"] += 1 ;
   };
   if (!coinsObj["H"]) delete coinsObj["H"] ;
   if (!coinsObj["Q"]) delete coinsObj["Q"] ;
   if (!coinsObj["D"]) delete coinsObj["D"] ;
   if (!coinsObj["N"]) delete coinsObj["N"] ;
   if (!coinsObj["P"]) delete coinsObj["P"] ;

   return coinsObj;
}
