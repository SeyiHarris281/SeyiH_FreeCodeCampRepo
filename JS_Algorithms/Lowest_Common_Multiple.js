function smallestCommons(arr) {
    //Greatest common divisor function
    function gcd(lo, hi) {
      let res = hi % lo == 0 ? lo : gcd(hi % lo, lo);
  
      return res;
    }
  
    //Lowest common multiple function
    function lcm(lo, hi) {
      return lo * hi / gcd(lo, hi);
    }
  
    //Create array of range of numbers
    let minn = Math.min(arr[0], arr[1]);
    let maxx = Math.max(arr[0], arr[1]);
    let arrRange = [];
    for (let i = 0; i <= maxx - minn; i++) {
      arrRange.push(minn + i);
    }
  
    //Find LCM of number range
    let mult = minn;
    arrRange.map((el) => mult = lcm(el,mult));
  
    return mult;
  }