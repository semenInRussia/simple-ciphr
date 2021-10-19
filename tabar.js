let vowelsChars = Array.from('eyuioaуехыаоэяиюEYUIOAУЕХЫАОЭЯИЮ')

function encode(string, syllable) {
    let result = ''

    let indexesOfVowels = _getIndexesOfVowels(string)
    let lastCharIndex = 0;

    for (indexOfVowel of indexesOfVowels) {
        let encodedPieceOfString = getPieceOfStringAndEncode({
            string, syllable, indexOfVowel, lastCharIndex
        })

        result += encodedPieceOfString
        lastCharIndex = indexOfVowel
    }

    let lastPieceOfString = string.slice(lastCharIndex, string.length)

    result += lastPieceOfString

    return result
}

function getPieceOfStringAndEncode({string, syllable, indexOfVowel, lastCharIndex}) {
    let pieceOfString = string.slice(lastCharIndex, indexOfVowel + 1)
    let encodedPieceOfString = pieceOfString + syllable

    return encodedPieceOfString    
}

function _getIndexesOfVowels(string) {
    return Array.from(string)
        .map((value, index) => index)
        .filter(index => _isVowelChar(string[index]))
}

function decode(string, syllable) {
    let piecesOfString = string.split(syllable)
    let piecesOfStringWithExtraVowel = _deleteFirstElement(piecesOfString)
    let decodedPiecesOfString = _deleteFirstElementFromInnerArrays(piecesOfStringWithExtraVowel)
    let decoded = firstElement(piecesOfString) + sum(decodedPiecesOfString)

    return decoded
}

let _deleteFirstElementFromInnerArrays = arr => arr.map(_deleteFirstElement)
let _deleteFirstElement = arr => (arr.slice(1, arr.length))

let _isVowelChar = char => vowelsChars.includes(char)

let lastElement = array => array[array.length - 1]
let firstElement = array => array[0]
let sum = arr => arr.reduce((previous, current) => previous + current)
