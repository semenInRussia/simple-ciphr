let alphabet = [
  ['a', '.-'],
  ['b', '-...'],
  ['c', '-.-.'],
  ['d', '-..'],
  ['e', '.'],
  ['f', '..-.'],
  ['g', '--.'],
  ['h', '....'],
  ['i', '..'],
  ['j', '.---'],
  ['k', '-.-'],
  ['l', '.-..'],
  ['m', '--'],
  ['n', '-.'],
  ['o', '---'],
  ['p', '.--.'],
  ['q', '--.-'],
  ['r', '.-.'],
  ['s', '...'],
  ['t', '-'],
  ['u', '..-'],
  ['v', '...-'],
  ['w', '.--'],
  ['x', '-..-'],
  ['y', '-.--'],
  ['z', '--..']
]


function encodeString(string) {
  let result = ''
  string = string.toLowerCase()
  
  for (let symbol of string) {
    let encodedString = ''

    for (let currentSymbolAndValue of alphabet) {
      let currentSymbol = currentSymbolAndValue[0]    
      let valueOfCurrentSymbol = currentSymbolAndValue[1]

      if (currentSymbol == symbol) {
        encodedString = valueOfCurrentSymbol
      }
    }
    
    result += encodedString
    result += ' '
  }
  
  return result.slice(0, -1)
}

function decodeString(string) {
	let result = ''
  
  string = string.toLowerCase()
  
  console.log(string)
  
  

	let valuesOfSymbols = string.split(' ')

	for (let encodedSymbol of valuesOfSymbols) {
		let decodedSymbol = ''

		for (let currentValueAndSymbol of alphabet) {
			let currentSymbol = currentValueAndSymbol[0]
			let valueOfCurrentSymbol = currentValueAndSymbol[1]

			if (encodedSymbol == valueOfCurrentSymbol) {
				decodedSymbol = currentSymbol
        break
			}
		}

		result += decodedSymbol
	}
  
  console.log(result)
  
  return result
}
