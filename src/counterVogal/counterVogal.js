function counterVogal(string) {
    let vowelAmount = 0

    if (typeof string !== 'string') throw new Error('Passed value must be a string!')

    const separateLettersWithinAnArray = string
        .split('')
        .filter(letter => letter !== ' ')

    separateLettersWithinAnArray.map(letter => {
        const regexExpression = /([aeiou])|([AEIOU])/g

        if (letter.match(regexExpression)) vowelAmount += 1
    })

    return vowelAmount
}

module.exports = counterVogal