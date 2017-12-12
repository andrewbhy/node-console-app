import chalk from 'chalk'
import Util from './util'

console.log(chalk.yellowBright("Started:"),chalk.greenBright(new Date()))




let x = new Util();


console.warn("hey")
let makePromiseFail = false;
x.somePromiseFunc(makePromiseFail).then(console.log).catch(console.error)

debugger


