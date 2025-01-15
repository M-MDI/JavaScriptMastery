function pyramid (str , nums) {

    let result = '' ;
    let space  = '' ;
 
    for(var i = 0 ; i < str.length ; i ++) {
        space += ' '
    }

    for (var i = 0 ; i < nums ; i++) {
        const spaces = space.repeat(nums - i - 1 ) 
        const st     = str.repeat(2 * i + 1)
                
        result += spaces + st ; 
            
        if (i != nums-1) {
            result += '\n'
        }
    }
return result
}