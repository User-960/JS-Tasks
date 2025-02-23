// Bank ATM #1
function iWantToGet(amountRequired) {
  const availableNotes = [100, 50, 20, 10]
  const result = []

  if (amountRequired > 0) {
    for (let i = 0; i < availableNotes.length; i++) {
      let note = availableNotes[i]

      while (amountRequired - note >= 0) {
        amountRequired -= note
        result.push(note)
      }
    }
  } else {
    console.log('Please, enter new amount.')
  }

  return result
}

console.log(iWantToGet(160))

// Bank ATM #2
function iWantToGetPay(amountRequired, limits) {

  function collect(amount, nominals) {
    if (amount === 0) return {}
    if (!nominals.length) return;

    let currentNominal = nominals[0]
    let availableNotes = limits[currentNominal]
    let notesNeeded = Math.floor(amount / currentNominal)
    let numberOfNotes = Math.min(availableNotes, notesNeeded)

    console.group('Count')
    console.log('amount', amount)
    console.log('nominals', nominals)
    console.log('currentNominal', currentNominal)
    console.log('availableNotes', availableNotes)
    console.log('notesNeeded', notesNeeded)
    console.log('numberOfNotes', numberOfNotes)
    console.groupEnd()

    for (let i = numberOfNotes; i >= 0; i--) {
      console.log('Start i', i, 'numberOfNotes', numberOfNotes, 'currentNominal', currentNominal)
      let result = collect(amount - i * currentNominal, nominals.slice(1))

      if (result) {
        console.log('i', i, 'numberOfNotes', numberOfNotes, 'currentNominal', currentNominal, 'result', result)
        return i ? { [currentNominal]: i, ...result } : result
      }
    }
  }

  let nominals = Object.keys(limits)
                        .map(Number)
                        .sort((a, b) => b - a)
                        
  return collect(amountRequired, nominals)
}

let limits1 = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };
let limits2 = { 100: 5, 50: 100, 30: 6 };
console.log(iWantToGetPay(230, limits1))
console.log(iWantToGetPay(1000, limits1))
console.log(iWantToGetPay(120, limits1))
console.log(iWantToGetPay(275, limits1))
console.log(iWantToGetPay(50000, limits1))