// no js nao existe classes é uma sintaxe

// te ajuda a criar varios objetos com as mesmas propriedades 

class Carro {
    constructor(nome , ano){
        this.nome = nome 
        this.ano = ano
    }

    //metodo getter = sua funçao é apenas retornar

    get FirstName(){
        return this.nome
    }

    //setar = configurar ou mudar configuraçoes (não recomendado)

    set newName(newname){
        this.nome = newname

    }

    getCarName(){
        return this.nome
    }
}

const carr1 = new Carro('audi', 2020)
const carr2 = new Carro('toyota', 2023)

console.log(carr1, carr2)

console.log(carr1.getCarName())

console.log(carr1.FirstName) //o metodo get nao utiliza os parenteses

carr1.newName =    'new name'


console.log(carr1.nome)