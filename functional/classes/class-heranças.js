//cria subclasses que terao as caracteristicas herdadas da classe pai 

class reptile {
    constructor(firstAparence){
        this.firstaparence = firstAparence
    }

    getfirstAparence(){

        return this.firstaparence

    }
}

class dragon extends reptile{
    constructor(FirstAparence){

        //super faz com que o constructor que existe na classe pai exista na classe filha 
        // this.firstaparence = firstAparence

        super(FirstAparence)
    }
}

const smaug = new dragon('the hobbit')

console.log(smaug.getfirstAparence())