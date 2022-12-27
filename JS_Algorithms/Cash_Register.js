function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let chgArr = [];
    let chgObj = {};
    let cidRemTot = 0;
    let currVal = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
    for (let i = 8; i >= 0; i--) {
      let currCtNd = Math.floor(change / currVal[i][1]);
      let chgNd = currCtNd * currVal[i][1];
      let chgAvail = 0;
      if(cid[i][1] >= chgNd) {
        chgAvail = chgNd;
        cidRemTot += cid[i][1] - chgNd;
      } else {
        chgAvail = cid[i][1];
      }
      if (chgAvail > 0) chgArr.push([currVal[i][0], chgAvail]);
      change = (change - chgAvail).toFixed(2);
    }
  
    if (change == 0) {
      chgObj.status = cidRemTot > 0 ? "OPEN" : "CLOSED";
      chgObj.change = chgObj.status === "OPEN" ? chgArr : cid;
    } else {
      chgObj.status = "INSUFFICIENT_FUNDS";
      chgObj.change = [];
    }
  
    return chgObj;
  }