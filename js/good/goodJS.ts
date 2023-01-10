
const {Main} = require("./main")
const fs = require("fs");

class Good extends Main{
    constructor(id = 0, names, descriptions, sizes = 0, prices = 0, availbles = false) {
        super(id, names, descriptions, sizes, prices, availbles);
    }
    /*
    'setAvailableRemove'    - The product activation  been made through a way to replace  the value 'valueBoolen' on
                                the 'true'. 'valueBoolen' be default is 'false'.
                            - The search product can by the 'id' or 'name' product.
                            - the "remove" function works if an attribute value change  of 'false' to 'true' /=> 'remove=true' .
                                Work go with a JSON files and instead of 'remove()', 'replace()' is used/

     */

     getFile(path: string= null){
         /*
         read the file.
          */
        let __data: any = fs.readFileSync(path);
        return JSON.parse(__data);

        }

     setAvailableRemove(valueBoolen: boolean|string=false,
                 id:number|null=null,
                 name:string|null=null,
                 path: string,
                 remove: boolean = false) {

        let __i: number = 0;
        let __ind: number = 0;
        let __value = [id, name]
        let __prop = ['id', 'name']

        try {
            for (let atr of __value) {
                if (atr != null) {

                    let __arr = (this.getFile(path))['products'];
                    for (__ind; __ind < (__arr).length; __ind++) {

                        if (Number(__arr[__ind][__prop[__i]]) === Number(atr) ||
                            String(__arr[__ind][__prop[__i]]) === String(atr)) {

                            if (remove == false) {
                                __arr[__ind].avaibles = String(__arr[__ind].avaibles).replace(String(__arr[__ind].avaibles),
                                    String(valueBoolen));
                            }else{ // if 'remove=true' then been the position delete.
                                (__arr).splice(__ind,1 );
                            }
                            fs.writeFileSync('./root.json', JSON.stringify({ "products": __arr }),
                                'utf-8'), (err) => {

                                if (err){
                                   console.log((`ERROR: ${err.name}` + ` ERROR-message ${err.message}`));
                                }
                                else {
                                    console.log("Rewrite too this's file!");
                                }
                            };
                        }

                    }
                }

                __i++;
            }
        } catch(e){
            let __err = `Error message: ${e.message}, stack ${String(e.stack)}`
            console.log(__err)
            return
        }

    }

}


module.exports = { Good }