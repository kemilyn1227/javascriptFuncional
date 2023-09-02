// trabalha com arrays ira efetuar a açao pos por pos do array e retornara outro array do mesmo tamanho

const numbers = [1,2,3,4,5,6]

const numbersv12 = numbers.map( (el)=> el*2 )

console.log(numbersv12)

const persons = [
    {name:'jake',score:6.4},
    {name:'susan',score:8.6},
    {name:'emma',score:9.4},
    {name:'peter',score:9.1},
]

const score = el => el.score

console.log(persons
    .map(score)
    .map(Math.ceil)
            //.floor arredonda para baixo
)

