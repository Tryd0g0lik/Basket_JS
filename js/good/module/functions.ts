function _generatingId(_lis:any[]){
    let _lengs: number = _lis.length

    if (_lengs == 0 || _lengs == null){
        return 0
    }

    return _lengs
}

function sorting(obj:Array<any>){
    /*
        'obj'   -   this's a array with data for sort;
        'atr'   -   this's a attribute according to which it'll be sorted;
     */

    let __i: number = 0;
    let __result: any = [];

    try {
        for (__i; __i < obj.length; __i++) {
            __result.push([obj[__i][1].prices, obj[__i][1]])

        }
        console.log(`prices: ${__result}`)
        return __result
    } catch (e){
        console.log(`ERROR 'sorting' module . Message: ${e.message} `)
        console.log(`ERROR 'sorting' module. Stack: ${e.stack}` )
        return [[],]
    }
}

module.exports = { _generatingId, sorting }
