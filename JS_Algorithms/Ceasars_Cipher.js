function rot13(str) {
    let retArr = [];
    let regEx = /[A-Z]/;
  
    for (let el of str) {
      if (regEx.test(el)) {
        let strNum = el.charCodeAt(0);
        if (strNum - 13 >= 65) {
          retArr.push(String.fromCharCode(strNum - 13));
        } else {
          retArr.push(String.fromCharCode(strNum + 13));
        }
      } else {
        retArr.push(el);
      }
    }
    return retArr.join("");
  }