//serve para encontrar determinado elemento 


const pizza = [
    'mussarela',
    'presunto',
    'calabresa',
    'marguerita',
]

console.log(pizza.find(el => el.startsWith('m')))

const fruits = [
    {name:'amora', quantity: 4},
    {name:'abacate', quantity:6},
    {name:'tomate', quantity:3}

]

const foundFruit =  fruits.find(el => el.name === 'amora')


console.log(foundFruit)
