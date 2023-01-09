const {Good} = require("../good/goodJS");
const fs = require("fs");

class Basket extends Good {
    totalprice: number | void;
    totalsum: number | void;
    totalpriceALL: number | void;
    constructor(id = 0, names = null, descriptions = null, sizes = 0, prices = 0, availbles = false) {
    super(id, names, descriptions, sizes, prices, availbles);
    this.totalprice = null;
    this.totalpriceALL = null;
    this.totalsum = null;
    }

    openFile(path:string|void){
        /*
        Open the file;
         */

        return JSON.parse(fs.readFileSync(path))

    }

    removeUnavailable(arr) {
         /*
        Delete an array element if it has  the proporties 'avaibles = "false'
        For the calculate  we can take only if a product has the properties 'available = "false'
         */
        try {
            console.clear()
            let new_arr = [];
            let tr = true;
            let __i;

            while (tr){
                if ((arr).length === 0){

                    tr = false
                    return new_arr;
                }

                if (((arr)[0].avaibles === 'false' && (arr).length !== 0)){
                    (arr).shift()


                } else if (((arr)[0].avaibles === 'true' && (arr).length !== 0)){
                    new_arr.push(arr[0])
                    arr.shift()

                }

            }

        }
        catch (e) {
            console.log(`ERRORE in  Basket a "removeUnavailable". Message: ${e.message}`);
            console.log(`ERRORE in  Basket a "removeUnavailable". Stack: ${e.stack}`);
        }
    }
    totalAmount(path:string|null = null):string| number| Array<any>|void{
        /*
        The total price calculate;
         */
        let __i: number;

         try {
            if (path !== null) {
                let __fBasket = this.openFile(path);
                fs.close

                __fBasket["bascetCount"] = this.removeUnavailable(__fBasket["bascetCount"]);

                console.log(__fBasket["bascetCount"]);
                for (__i = 0; __i < (__fBasket["bascetCount"]).length; __i++) {
                    this.totalprice = (__fBasket["bascetCount"][__i].prices *
                        __fBasket["bascetCount"][__i].amount);
                    __fBasket["bascetCount"][__i]["totalprice"] = this.totalprice;
                }
                fs.writeFile("./totalAmountBasket.json", JSON.stringify({ "totalPrices": __fBasket["bascetCount"] }), "utf-8", (err) => {
                    if (err) {
                        console.log(`WriteFile ERRORE in  Basket a "totalAmount". Message: ${err.message} `);
                        console.log(`WriteFile ERRORE in  Basket a "totalAmount". Stack: ${err.stack}`);
                    }
                    else {
                        console.log("Rewrite  the 'totalAmountBasket' file! Ok");
                    }
                });
                for (__i = 0; __i < (__fBasket["bascetCount"]).length; __i++) {
                    this.totalpriceALL = this.totalpriceALL + __fBasket["bascetCount"][__i].totalprice;
                }
                return ` ${this.totalpriceALL} рубля;`;
            }
            return;
        }
        catch (e) {
            console.log(`ERRORE in  Basket a "totalAmount". Message: ${e.message}`);
            console.log(`ERRORE in  Basket a "totalAmount". Stack: ${e.stack}`);
        }
    }
    totalSum(path:string){
        /*
        The Total items calculate
         */

        try {
            let countItems = 0;
            if (path) {
                let __fBasket = JSON.parse(fs.readFileSync(path));


                for (let __i = 0; __i < __fBasket["totalPrices"].length; __i++) {
                    countItems = countItems + Number(__fBasket["totalPrices"][__i].amount);
                }
                return `Кол-во: ${countItems} шт.`;
            }
        }
        catch (e) {
            console.log(`ERRORE in  Basket a "totalSum". Message: ${e.message}`);
            console.log(`ERRORE in  Basket a "totalSum". Stack: ${e.stack}`);
        }
    }

    clear(path:string){
        try {


            if (path) {

                fs.writeFile(path,
                    JSON.stringify({"totalPrices":[]}),
                    "utf-8", (err)=> {
                        if (err) {
                            console.log(`WriteFile ERRORE in  clear a "totalAmount". Message: ${err.message} `);
                            console.log(`WriteFile ERRORE in  clear a "totalAmount". Stack: ${err.stack}`);
                        } else {
                            console.log("Cleared! Ok");
                        }

                    });


            }
        } catch (e){}
    }

}
const prod = new Basket()
console.clear()
// console.log(prod.totalAmount("./bascetAmount.json")); //

console.log(prod.totalSum("./totalAmountBasket.json"));