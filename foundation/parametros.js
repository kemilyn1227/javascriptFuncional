function logParams(a,b,c){
    console.log(a,b,c)
    
}
logParams(1,2,3)

function DefaltParams(a = 1,b = 2 ,c = 0){ //vai deixar o c como padrao 0

    console.log(a,b,c)

}

DefaltParams()

                         //... vai receber uma quantidade diversa de parametros spread/rest

function logNum(...nums){  //nums = pode pegar uma quantidade infinita de numeros

    console.log(nums)

    /*for(let n of nums){   vai pegar posiçao por posiçao  
        console.log(n)

    } */

}
logNum(1,2,3)

function sumAll(...nums){
    let total = 0

    for(let c of nums){
        total += c
    }
    
    return total

}
console.log(sumAll(1,2,3))