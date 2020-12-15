const fizzBuzzGame = require('./fizzbuzz')

describe('FizzBuzz Game', () => {
    let result;

    it('should return 0 if were passed 0 as value', () => {
        result = fizzBuzzGame(0)

        expect(result).toEqual(0)
    })

    it('should return 7 if were passed 7 as value', () => {
        result = fizzBuzzGame(7)

        expect(result).toEqual(7)
    })

    it('should return "Fizz" if were passed 3 as value', () => {
        result = fizzBuzzGame(9)

        expect(result).toEqual('Fizz')
    })

    it('should return "Fizz" if were passed 27 as value', () => {
        result = fizzBuzzGame(9)

        expect(result).toEqual('Fizz')
    })

    it('should return "Buzz" if were passed 5 as value', () => {
        result = fizzBuzzGame(5)

        expect(result).toEqual('Buzz')
    })

    it('should return "Buzz" if were passed 55 as value', () => {
        result = fizzBuzzGame(35)

        expect(result).toEqual('Buzz')
    })

    it('should return "FizzBuzz" if were passed 15 as value', () => {
        result = fizzBuzzGame(15)

        expect(result).toEqual('FizzBuzz')
    })

    it('should return "FizzBuzz" if were passed 60 as value', () => {
        result = fizzBuzzGame(60)

        expect(result).toEqual('FizzBuzz')
    })
})