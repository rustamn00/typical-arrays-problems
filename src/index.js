
exports.min = function min (array) {
    if(array === undefined || array.length == 0){
        return 0;
    }
    else {
        return Math.min.apply(null, array);
    }
}

exports.max = function max (array) {
    if(array === undefined || array.length == 0){
        return 0;
    }
    else {
        return Math.max.apply(null, array);
    }
}

exports.avg = function avg (array) {
    if(array === undefined || array.length == 0){
        return 0;
    }
    else {
        var x = 0;
        for (var i = 0; i<array.length; i++){
            x = x + array[i];
        }
        x = x/array.length;
        return x;
    }
}
