

import Util  from './util'

//override console warn&log function so that jest can detect the function calls
console = {
    warn: jest.fn(),
    log : jest.fn()

}
test('someFunc outputs "Hello World"', ()=>{
    let x = new Util ()
    x.someFunc()
    expect(console.log).toHaveBeenCalledWith('Hello World')
})