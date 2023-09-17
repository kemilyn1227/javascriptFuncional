/*const people = [

    {fistName: 'estevao', lastName: 'rodrigues', score:  90},
    {fistName: 'jose', lastName: 'antonio', score: 100},
    {fistName: 'felipe', lastName: 'tavares', score: 81},
    {fistName: 'eric', lastName: 'cartman', score: 82},
     
]

const peopplyCopy = people.map((person) =>{
    return{
        firstname: person.fistName,
        lastname: person.lastName,
        score: person.score

    }
}) 


//se a funçao de comparaçao for fornecida o array sera ordenado de acordo com o valor de retorno 


peopplyCopy.sort((a, b) =>{

    console.log({a, b})
    return a.score - b.score
})

console.log(peopplyCopy)*/

/* se a funçao retornar menor que 0 ordena a para o indice anterior
                      maior que 0 ordena o b para o indice anterior */

  const numberarray = [40, 1, 5, 200]       
  
  console.log('ordena com a comparaçao ' ,numberarray.sort((a,b)=>{


    console.log(a,b)
    /*
    40, 1 , 5 ,200

     40 - 1

     1 ,40 , 5, 200

     40- 5

     1, 5, 40, 200
      
     40 - 200

     1, 5, 40, 200

     repete

     




    
    
    
    
    
    */ 
    return a-b
  }))


