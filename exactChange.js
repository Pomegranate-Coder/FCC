
function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  //Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
  
  var totalInTill = 0;
  for (var i = cid.length - 1; i >= 0; i--) {
  	totalInTill += cid[i][1];
  }
  
  var changeDue = cash - price;

  if (totalInTill === changeDue) {
  	return "Closed";
  }

  if (totalInTill < changeDue) {
  	return "Insufficient Funds";
  }
  
//

var currencyUnits = {
PENNY: 0.01,
NICKEL: 0.05,
DIME: 0.10,
QUARTER: 0.25,
ONE: 1.00,
FIVE: 5.00,
TEN: 10.00,
TWENTY: 20.00,
ONEHUNDRED: 100.00
};

function trayChecker (changeDue, change, tray) {
	if (tray[0] === "ONE HUNDRED") {
		tray[0] = "ONEHUNDRED";
	}

	var totalInTray = tray[1];
	var trayCurrencyUnit = currencyUnits.tray[0];

	if (trayCurrencyUnit > changeDue) {
		return [changeDue, change];
	}

	if (totalInTray < changeDue) {
		changeDue -= totalInTray;
		change.push(tray);
		return [changeDue, change];
	}

	var deductible = (changeDue % trayCurrencyUnit) * trayCurrencyUnit;
	changeDue -= deductible;
	var toAdd = [tray[0], deductible];
	change.push(toAdd);
	return [changeDue, change];

}

 change = [];
  
function trayCycler(changeDue, change, cid) {
	var trayCheckerReturn = [];
for (var i = cid.length - 1; i >= 0; i--) {
	trayCheckerReturn = trayChecker(changeDue, change, cid[i]);
    changeDue = trayCheckerReturn[0];
	change = trayCheckerReturn[1];
	if (changeDue === 0) {
		return change;
	}
	}
	return "Insufficient Funds";
}

//return trayCycler(changeDue, change, cid);

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
