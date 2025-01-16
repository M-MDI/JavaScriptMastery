function filter(arr, callback){
    let res = []
    for (let index = 0; index < arr.length ; index++){
        if (callback(arr[index], index , arr)){
            res.push(arr[index])
        }
    }
    return res
}
function reject(arr, callback) {
    return filter(arr, function(element, index, array) {
        return !callback(element, index, array);
    });
}

function partition(array, callback) {
    const truthy = filter(array,callback);
    const falsy = filter(array,function(element, index, array) {
        return !callback(element, index, array);
   }) 
return [truthy, falsy];
}