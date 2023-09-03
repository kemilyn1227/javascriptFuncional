//quase igual o filter fara um teste , porem ira retornar um valor boolean 

const num = [10,50,36,6,,9]

console.log(num.every(el => el >10))

//verificar se todos sao maiores de 18 anos 

const turma = [
   {id:12 , name: 'frederico', age: 8},
   {id: 48 , name: 'francisca', age:6},
   {id: 88 , name:'ramon' , age: 48},
   {id: 85 , name: 'zenon', age: 52},
]

console.log(turma.every(el=> el.age > 18))