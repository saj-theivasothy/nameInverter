  const nameInverter = function (name) {
  
  if (!!name || name === '') {
    
  

  const splitWords = name.split(' ');
  // return a single name when passed a single name with extra spaces
  if (splitWords.length >= 1) {
    let words = splitWords.filter(element => element.length > 1);
    if(words.join('') === '') {
      return words;
    }

    if (words[0].includes('.')) {
      if (words.length === 1) {
        return '';
      } else if (words.length === 2) {
        return words.join(' ');
      } else if (words.length === 3) {
        return words[0] + ' ' + words[2] + ', ' + words[1]
      }
    } 

    if (words.length === 1) {
      return words;
    }

    if (words.length === 2) {
      words = words.reverse().join(', ');
      return words;
    }

    return name;
  }

} else {
  throw 'Error';
}
}

module.exports = nameInverter;