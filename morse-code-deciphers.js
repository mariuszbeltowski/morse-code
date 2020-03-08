function getMaximalObjectKeyLength(object) {
    return Object
      .keys(object)
      .map(key => key.length)
      .reduce((prevValue, curValue) => Math.max(curValue, prevValue), 0);
}

function getMorseCodeDeciphers(morseCodeInput, dictionary) {
    const cache = [];
    cache[0] = [''];

    // Init the cache
    for (let i=1; i<=morseCodeInput.length; ++i) {
      cache[i] = [];
    }

    const maximalMorseCodeLength = getMaximalObjectKeyLength(dictionary);

    // iterate over every position in input morse code
    for (let i=0; i<morseCodeInput.length; ++i) {
      
      let currentMorseCodeLength = 1;

      // for every morse code length
      while (currentMorseCodeLength <= maximalMorseCodeLength &&
        i + currentMorseCodeLength <= morseCodeInput.length) {

        const currentMorseCode = morseCodeInput.slice(i, i + currentMorseCodeLength);
        const currentDecodedMorseChar = dictionary[currentMorseCode]
        
        if (currentDecodedMorseChar) {
          // If morse code is decoded, use results from previous main iteration to generate new
          for (let k=0; k<cache[i].length; ++k) {
            cache[i + currentMorseCodeLength].push(cache[i][k] + currentDecodedMorseChar);
          }
        }
        ++currentMorseCodeLength;
      }
    }

    // valid result for empty input
    cache[0] = [];

    return cache[morseCodeInput.length];
};

module.exports = getMorseCodeDeciphers;