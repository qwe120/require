var arr = [1,2,3];

var fn = function (a,b) {
    return a+b;
}
function require(arr,fn){
    console.log(arr);
    var a=1, b=2;
    return fn(a,b);
}
var h = fn;
function define(h,arr, fn) {
    return h;
}