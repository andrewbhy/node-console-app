
import chalk from 'chalk'
import Util from './util'
import polyfill from './polyfill'


//override console warn&log function so that jest can detect the function calls
console = {
    warn: jest.fn(),
    log: jest.fn()

}
test('someFunc outputs "Hello World"', () => {
    let x = new Util()
    x.someFunc()
    expect(console.log).toHaveBeenCalledWith('Hello World')
})


test('somePromiseFunction throws error when input is true', () => {

    let x = new Util()
    expect(x.somePromiseFunc(true)).rejects.toBeDefined()
})


test('somePromiseFunction will resolve when input is false', () => {

    let x = new Util()
    expect(x.somePromiseFunc(false)).resolves.toBeDefined()
})


describe('util', () => {
    describe('static print2DArray', () => {
        it('throws error when input is undefined or null ( destructuring will fail )', () => {
            expect(() => {Util.print2DArray(undefined)}).toThrow()
            expect(() => {Util.print2DArray(null)}).toThrow()
        })

        it('prints "Invalid Input" when input does not have data proprty defined', () => {

            Util.print2DArray({})
            expect(console.log).toHaveBeenCalledWith(chalk.red("invalid input"))
        })

        it('prints "" for input  data : []',()=>{
            
            Util.print2DArray({ data:[],})
            expect(console.log).toHaveBeenCalledWith(chalk.cyanBright(""))

        })

        it('prints " 1 2 3" for input  data : [[1,2,3]], length 2',()=>{
            
            Util.print2DArray({ data:[[1,2,3]],length:2})
            expect(console.log).toHaveBeenCalledWith(chalk.cyanBright(" 1 2 3"))

        })
    })
})

