const num = [1,2,3,4,5,6]

//caso o valor total/acumulador nao for definido o reduce ira pegar o primeiro elemento do array

const sum = (total , el)=> el + total

const total = num.reduce(sum , 0)

console.log(total)

// acc = acumulador , el = elemento , i = posiçao , array  = array completo 

const avg = num.reduce((acc , el , i , array) =>{


    if (i === array.length -1){


        return (acc + el)  / array.length

    }else{

        return  acc + el
        
    }
})

console.log(avg )