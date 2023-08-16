"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function arr(array, index, value) {
    if (index >= 0 && index <= array.length) {
        array.splice(index, 0, value);
    }
    else {
        console.log("Invalid index The value is not inserted");
    }
    return array;
}
// var modified_array=arr([1,2,3,4],3,8);
console.log(arr([1, 2, 3, 4], 3, 8));
// var origional_array=[1,2,3,4];
// var new_index=3;
// var new_value=8;
// var modified_array=arr(origional_array,new_index,new_value);
// console.log("modified Array ", modified_array);
// function arr<T>(array:T, index:number, value:T){
//     if(index>=0 && index<=array.length){
//         array.splice(index,0,value);
//     }else{
//     console.log("Invalid index The value is not inserted");
//     }
//     return array;
// }
function modified(arr, index, value) {
    if (index < 0 || index > arr.length) {
        console.log("index out of range");
        return arr;
    }
    arr.splice(index, 0, value);
    return arr;
}
let modefiied_array = modified(["jiya", "ahmed", "arooj", "98"], 1, "bisma");
console.log(modefiied_array);
var todays_id = [1, 2, 3, 4];
var len = todays_id.length;
console.log(len);
if (len % 2 == 0) {
    todays_id.splice(Math.round(len) / 2, 2);
    console.log(todays_id);
}
else {
    todays_id.splice(Math.round(len) / 2, 1);
    console.log(todays_id);
}
