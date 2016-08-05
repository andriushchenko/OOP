function Casino(slotCount, initCasinoCash) {
  var dividedCashCount = twoDigitsRound(initCasinoCash/slotCount);
  var dividedCashRest = twoDigitsRound(initCasinoCash - dividedCashCount*slotCount);
  this.slotMachines = [new SlotMachine(dividedCashCount + dividedCashRest)];

  for (var i = 1; i < slotCount; i ++) {
    this.slotMachines.push(new SlotMachine(dividedCashCount));
  }

  this.sortedMachines = function() {
    return this.slotMachines.sort(function(a, b) {
      return b.cash - a.cash;
    });
  }

  this.getCasinoTotalCash = function() {
    return twoDigitsRound(this.slotMachines.reduce(function(sum, machine) {
      return sum + machine.cash;
    }, 0));
  }

  this.getSlotMachinesCount = function() {
    return this.slotMachines.length;
  }

  this.addSlotMachine = function() {
    var maxCashSlot = this.sortedMachines()[0];
    var dividedCashCount = twoDigitsRound(cash/count);
    maxCashSlot.cash -= dividedCashCount;
    this.slotMachines.push(new SlotMachine(dividedCashCount));
    this.setLuckySlotMachine();
  }

  this.removeSlotMachine = function(id) {
    var machine = this.slotMachines.find(function(m) {
      return m.id == id;
    });
    if (machine) {
      this.slotMachines.splice(this.slotMachines.indexOf(machine), 1);
      var dividedCashCount = twoDigitsRound(machine.cash/this.getSlotMachinesCount());
      var dividedCashRest = twoDigitsRound(machine.cash - dividedCashCount*this.getSlotMachinesCount());
      this.slotMachines.forEach(function(m) {
        return m.cash += dividedCashCount;
      });
      this.slotMachines[0].cash += dividedCashRest;
      this.setLuckySlotMachine();
    } else {
      console.error(`There is no slot machine with #${id} in this casino`);
    }
  }

  this.takeCasinoCash = function(number) {
    return this.sortedMachines().reduce(function(collectedCash, machine){
      if (collectedCash >= number) {
        return collectedCash;
      }
      if (number - collectedCash > machine.cash) {
        return collectedCash += machine.takeCash(machine.cash);
      }
      return collectedCash += machine.takeCash(number - collectedCash);
    }, 0);
  }

  this.setLuckySlotMachine = function() {
    this.slotMachines.map(function(m) {
      return m.lucky = false;
    });
    this.slotMachines[Math.floor(this.getSlotMachinesCount() * Math.random())].lucky = true;
  }

  this.setLuckySlotMachine();
}

function SlotMachine (initSlotMachineCash) {
  this.cash = initSlotMachineCash;
  this.lucky = false;
  SlotMachine.count++;
  this.id = SlotMachine.count;

  this.getSlotMachineCash = function() {
    return this.cash;
  }

  this.takeCash = function(number) {
    if (number > this.cash) {
      number = this.cash;
    }
    this.cash -= number;
    return number;
  }

  this.putCash = function(number) {
    this.cash += number;
    return number;
  }

  this.makeBet = function(number) {
    this.putCash(number);
    var bet = this.lucky ? 777 : SlotMachine.betNumber();
    if (bet === 777) {
      return this.takeCash(this.cash);
    }
    var gain = SlotMachine.checkBetNumber(bet) * number;
    return gain ? this.takeCash(gain) : 0 ;
  }
}

SlotMachine.checkBetNumber = function(bet) {
  var uniqueBetNumbers = new Set(bet.toString().split(''));
  switch (uniqueBetNumbers.size) {
    case 2:
      return 2;
    case 1:
      return 5;
    default:
      return 0;
  }
}

SlotMachine.betNumber = function() {
  return Math.floor(100 + Math.random() * 900);
}

SlotMachine.count = 0;

var twoDigitsRound = function(num) {
  return Math.round(num*100)/100;
}
