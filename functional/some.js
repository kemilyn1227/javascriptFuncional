//testar se pelo menos um passe no teste 


const team = [
     {id: 12, name:'tooper',pilot: true},
     {id: 44, name:'ramada',pilot:true},
     {id: 59, name:'pete',pilot: false},
     {id: 122, name:'kowalski',pilot:false},
]

// algum dos elementos . pilot retorna verdadeiro ??

console.log(team.some(el => el.pilot === true ))