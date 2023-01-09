// import {inflate, inflateRaw} from "zlib";
function lessMore(arr, less = false, more = false, word = null, len) {
    /* Params:  'arr' : Array<Array<any>> -    this's an array which been get  with a outside arrays  insert.
                'less' or/and
                'more' : charaster '<' or '>' - this's determines, at value a length 'word' is the more
                than a 'len' or not.

                'word' : type string -          this's simbol's set.
                'len' type number -             this's integer which defining a word length.
    */
    let __nameAll = [];
    let __result = [];
    let __str2;
    let __i;
    /* ------Start datarmination at the word length------ */
    /*
     This's a filter. Here is determined the string length
        and return the strings list if  length is fulfilling
     requirement of the selection
     */
    try {
        for (let __i = 0; __i < arr.length; __i++) {
            __str2 = new RegExp(String(arr[__i].name));
            if (__str2.test(String(__nameAll)) !== true) {
                __nameAll.push(String(arr[__i].name));
            }
        }
        if (less !== false &&
            more === false) {
            for (__i = 0; __i < __nameAll.length; __i++) {
                if (Number((__nameAll[__i]).length) < Number(len)) {
                    __result.push(__nameAll[__i]);
                }
            }
        }
        else if (more != false &&
            less == false) {
            for (__i = 0; __i < __nameAll.length; __i++) {
                if (Number((__nameAll[__i]).length) > Number(len)) {
                    __result.push(__nameAll[__i]);
                }
            }
        }
        return __result;
    }
    catch (e) {
        console.log(`ERROR of "lessMore" message: ${e.message} /=> Line ${e.line}`);
        console.log(`STACK: ${e.stack}`);
    }
    /* ------End datarmination at the word length------ */
}
module.exports = { lessMore };
