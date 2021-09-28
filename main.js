let strForEncode = 'Сколько уоашуаугшраурашуашурашру'

let alphabet = [
	'abcde',
	'fghik',
	'lmnop',
	'qrstu',
	'vwxyz',
	
	'йцук',
	"енгшщ",
	"зхъфы",
	"ваапр",
	"олджэ",
	"ячсми",
	"тьбю",
	
    '!,@#$',
    '%^&*(',
    ')-_=+\\',
    '12345',
    '67890',
    '`~     ',
    '/,;:',
    '?<>'
]

let result = ''

strForEncode = strForEncode.toLowerCase()
let strForEncodeAsArray = Array.from(strForEncode)

for (let charForEncode of strForEncodeAsArray) {
    let alphabetRow = alphabet.filter(row => row.includes(charForEncode))[0]
    let alphabetRowIndex = alphabet.indexOf(alphabetRow)
    let charInRowIndex = alphabetRow.indexOf(charForEncode)
    
    let encodedChar = alphabetRowIndex.toString() + charInRowIndex.toString()
    
    result += encodedChar
}

console.log(result)
