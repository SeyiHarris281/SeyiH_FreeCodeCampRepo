function convertToRoman(num) {
    let romNumTbl = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  
    let remainder = num;
    let romArr =[];
  
    for (let el of romNumTbl) {
      let romNumCt = Math.floor(remainder / el[0]);
      remainder = remainder % el[0];
      if (romNumCt > 0) {
        for (let i = 1; i <= romNumCt; i++){
          romArr.push(el[1]);
        }
      }
    }
  
   return romArr.join("");
  }