function steamrollArray(arr) {

    function flatten(elem) {
        let retA = [];
	    if (Array.isArray(elem)) {
	      for (let el of elem) {
	        retA.push(...flatten(el));
	      }
	    } else {
	      retA.push(elem);
	    }
	    return retA;
    }
	
	let retArr = [];
	
	for (let el of arr) {
	    retArr.push(...flatten(el));
	}
	
	return retArr;
}