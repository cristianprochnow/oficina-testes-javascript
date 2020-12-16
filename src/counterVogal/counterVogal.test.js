const counterVogal = require('./counterVogal')

describe('Counting vogals', () => {
    let vogalAmount

    it('should recognize that counterVogal() is a function', () => {
        expect(typeof counterVogal).toEqual('function')
    })

    it('should return a Error Exception if a number were passed', () => {
        expect(() => counterVogal(100)).toThrow(Error)
    })

    it('should return a Error Exception if an array were passed', () => {
        expect(() => counterVogal(['a', 1, null])).toThrow(Error)
    })

    it('should return 6 if were passed "Simply delicious" string', () => {
        vowelAmount = counterVogal('Simply delicious')

        expect(vowelAmount).toEqual(6)
    })

    it('should return 6 if were passed "SImply dElicioUs" string', () => {
        vowelAmount = counterVogal('Simply delicious')

        expect(vowelAmount).toEqual(6)
    })

    it('should return 4 if were passed "uNSYNCHRONISeD" string', () => {
        vowelAmount = counterVogal('uNSYNCHRONISeD')

        expect(vowelAmount).toEqual(4)
    })

    it('should return 6 if were passed "Euouae" string', () => {
        vowelAmount = counterVogal('Euouae')

        expect(vowelAmount).toEqual(6)
    })
})