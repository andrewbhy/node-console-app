import chalk from 'chalk'
import Util from './util'
import polyfill from './polyfill'

console.log(chalk.yellowBright("Started:"),chalk.greenBright(new Date()))
let x = new Util();
console.warn("hey")
let makePromiseFail = false;
x.somePromiseFunc(makePromiseFail).then(console.log).catch(console.error)
console.log("something")
debugger

let myArr =
[
    [1,2,3],
    [4,5,6]
]
Util.print2DArray({data:myArr})