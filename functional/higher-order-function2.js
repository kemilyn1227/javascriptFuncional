//tecnica chamada curring 

function finalPrice(taxa){
    
    return function(price){
        return price * (1 + taxa)
    }
    

}

const nycFinalPrice = finalPrice(0.0875) //segundo parametro ja definido

console.log(finalPrice(0.0875)(25.1))
console.log(nycFinalPrice(21.9))