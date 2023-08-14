// Write ts program that’s calculate sum of two numbers using function?

function sum(num1:number=30,num2:number=40){
    
    var result:number= num1+num2;
    console.log("The sum of two number is ",result)
}

sum();

// Write ts program that’s calculate sum of two numbers 20,30 using function? And add 5 number in result after calculation?



function sum2(num1:number,num2:number):number{
    
    var result:number= num1+num2;
    
    return result;
}

sum(30,40);
var a:number=sum2(30,40);
a=a+5
console.log(a)

// Write ts program that’s calculate sum of two numbers using arrow function?


var Add=()=>{
    var a:number=10;
    var b:number=20;
    var c:number=a+b;
    console.log(c);
}
Add();


// Write a program by using function to convert the temperature from Celsius to Fahrenheit and vice verse?

function c_to_f(){
    var celsius_temp:number=30;
    var Celsius_to_fah:number= (celsius_temp*9/5)+32;
    console.log(Celsius_to_fah);
    

}