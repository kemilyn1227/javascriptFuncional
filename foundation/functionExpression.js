//funcao anonima  é igual a arrow function

var a = 1;

(function(a,b,c){
    console.log(a+b+c)
})(a,1,2)

//function expression

const sum = function soma (a,b){
    return  a + b 
}

const result = sum (1,59)
console.log(result)

x = sum

console.log(x(2,3))