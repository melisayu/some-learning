var currency = [
    { name: 'ONE HUNDRED', value: 100.00},
    { name: 'TWENTY', value: 20.00},
    { name: 'TEN', value: 10.00},
    { name: 'FIVE', value: 5.00},
    { name: 'ONE', value: 1.00},
    { name: 'QUARTER', value: 0.25},
    { name: 'DIME', value: 0.10},
    { name: 'NICKEL', value: 0.05},
    { name: 'PENNY', value: 0.01}
  ];
 
  function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    const unitAmount = {}
    let totalCash = cid.reduce((a, b) => {
        a.total += b[1]
        a[b[0]] = b[1]
        return a
    }, {total: 0})

    if (change > totalCash.total) {
        return {status: "INSUFFICIENT_FUNDS", change: [change]}
    }
    if (change === totalCash.total) {
        return {status: "CLOSED", change:[...cid]}
    }
    else {
        var change_arr = currency.reduce(function(acc, curr) {
            var value = 0;
            while (totalCash[curr.name] > 0 && change >= curr.val) {
              change -= curr.val;
              totalCash[curr.name] -= curr.val;
              value += curr.val;
              change = Math.round(change * 100) / 100;
            }
            if (value > 0) {
                acc.push([ curr.name, value ]);
            }
            return acc;
          }, []);
        return {status: "OPEN", change: [change_arr]}
    }
  }

  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))