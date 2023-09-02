//funciona quase igual o map  porem aplica um filtro entao sem sempre o array devolvido sera do mesmo tamanho

const num = [1,4,6,8,14]

const numM = num.filter(el => el >= 6)

//console.log(numM)

//passar ou reprovar alunos 

const alunos = [
    {nome:'alex', score:6.4},
     {nome: 'kim', score: 8.6},
     {nome:'joao ' , score:9.4},
     {nome:'moony' , score: 9.1},
]

const score = alunos.map(el => el.score) .map(Math.ceil)

const aprovados = score.filter(el => el >= 9)

console.log(aprovados)