import chalk from 'chalk'

export default class Util {

    constructor(){
        this.x = 0;
    }

    someFunc (){
        console.log("Hello World")

    }
    somePromiseFunc(makeItFail){

        return new Promise( (res,rej)=>{
    
            if(!makeItFail) {
                res(chalk.bgGreen("success"))
            }
            else{
                rej(chalk.bgRed("you wanted me to fail :/"))
            }
        })
    }
}