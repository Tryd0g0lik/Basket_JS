
function checkId(arrBascet:Array<any>=[], i:number){
    /*
    TODO: The checking a Basket, has she it's ID-product or no.
    Params: 'arr'   -   This's array products of basket.
            'i'     -   This's product index which we want add
     */
    try{
        for (let __ind = 0; __ind < arrBascet.length; __ind++ ) {
            if (Number(i) === Number(arrBascet[__ind].id)) {
                return false
            }

        }
        return true
    } catch (e) {
        console.log(`ERROR in "checkId" Message: ${e.message}`)
        console.log(`ERROR in "checkId" Stack: ${e.stack}`)
    }
}

module.exports = { checkId }


