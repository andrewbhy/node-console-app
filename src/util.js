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

    static print2DArray({data,length}){


        if(!data || Array.isArray(data) == false ){
            console.error(chalk.bgRed("invalid input"))
            return;
        }


        for(let i = 0; i < data.length; ++i){

            if(!data[i] || Array.isArray(data[i])==false){
                continue
            }
            let str = ""
            let row = data[i]
            for(let j = 0; j < row.length; ++j){
                str += row[j].toString().padStart(length||5)
            }
            console.log(chalk.cyanBright(str))
        }
    }

    
}