  const nameInverter = function (name) {
  
  if (!!name || name === '') {

  const splitWords = name.split(' ');
  let words = splitWords.filter(element => element.length > 1);
  
  if (splitWords.length >= 1) {
    // return an empty string when passed an empty string
    if(words.join('') === '') {
      return words;
    }

    if (words[0].includes('.')) {
      if (words.length === 1) {
        return '';
      } else if (words.length === 3) {
        return words[0] + ' ' + words[2] + ', ' + words[1]
      }
    } 

    if (words.length === 2 && !(words[0].includes('.'))) {
      words = words.reverse().join(', ');
      return words;
    }
    return words.join(' ');
  }

} else {
  throw 'Error';
}
}

module.exports = nameInverter;