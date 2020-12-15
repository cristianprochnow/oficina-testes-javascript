function fizzBuzzGame(number) {
    let finalResultStatus = ''

    if (number === 0) return number
    if (number % 3 === 0) finalResultStatus += 'Fizz'
    if (number % 5 === 0) finalResultStatus += 'Buzz'
    if (finalResultStatus === '') finalResultStatus = number

    return finalResultStatus
}

module.exports = fizzBuzzGame