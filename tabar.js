let vowelsChars = Array.from('eyuioaуехыаоэяиюEYUIOAУЕХЫАОЭЯИЮ')

function encode(string, syllable) {
  return Array.from(string)
    .map(char => _addSyllableIfIsVowel(char, syllable))
    .reduce((previousChar, currentChar) => (previousChar + currentChar), "")
}

function _addSyllableIfIsVowel(char, syllable) {
  if (vowelsChars.includes(char)) {
    return char + syllable
  }
  
  else {
    return char
  }
}

function decode(string, syllable) {
  let syllableLength = syllable.length
  
  return string
    .split(syllable)
    .reduce((previousChar, currentChar) => (previousChar + currentChar), "")
}
