const getMorseCodeDeciphers = require('./morse-code-deciphers');

const morseCodeDictionary = {
    '.-': 'a',
    '..': 'b',
    '...': 'c',
    '.': 's',
};

const testCases = [
    ['', 0],        // empty
    ['.', 1],       // s
    ['..', 2],      // ss, b
    ['...', 4],     // sss, sb, bs, c
    ['....', 7],    // sc, bb, ssb, cs, sbs, bss, ssss
    ['.....-', 7],  // sca, bba, ssba, csa, sbsa, bssa, ssssa
    ['.....', 13],  // bc, ssc, cb, sbb, bsb, sssb, scs, bbs, ssbs, css, sbss, bsss, sssss
    ['......', 24], // 'cc', sbc, bsc, sssc, scb, bbb, ssbb, csb, sbsb, bssb, ssssb, bcs, sscs, cbs, sbbs, bsbs, sssbs, scss, bbss, ssbss, csss, sbsss, bssss, ssssss
    ['.......', 44],// 'scc', bbc, ssbc, csc, sbsc, bssc, ssssc, bcb, sscb, cbb, sbbb, bsbb, sssbb, scsb, bbsb, ssbsb, cssb, sbssb, bsssb, sssssb, ccs, sbcs, bscs, ssscs, scbs, bbbs, ssbbs, csbs, sbsbs, bssbs, ssssbs, bcss, sscss, cbss, sbbss, bsbss, sssbss, scsss, bbsss, ssbsss, cssss, sbssss, bsssss, sssssss
    ['.-.-', 1],    // aa
    ['.-...', 4],   // asss, asb, abs, ac
    ['..-', 1],     // sa
    ['..-.', 1],    // sas
    ['..-..', 2],   // sass, sab
    ['..-.-', 1],   // saa
    ['..-.-.', 1],  // saas
    ['..-..-.', 1], // sasas
];

testCases.forEach(testCase => {
    const [testInput, expectedCount] = testCase;
    const decipheredValues = getMorseCodeDeciphers(testInput, morseCodeDictionary);
    const decipheredValuesCount = decipheredValues.length;
    
    console.log(
        decipheredValues.length === expectedCount ? 'OK - ' : 'WRONG - ',
        // decipheredValues,
        '- count: ' + decipheredValuesCount,
        '- expected: ' + expectedCount,
    );
});