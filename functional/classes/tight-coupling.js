//acoplamento  e dependencia de classes

class myclass{
    method1(){
        return 'string from method1'
    }

    dontwant(){
        throw new Error('deu um errinho')
    }
}

class mysubclass extends myclass{
    method2(){
        return 'string from method2'
    }
}

const instance = new mysubclass()

//fazer o instance ter acesso aos metodos menos o dontwant

//console.log(instance.dontwant())

const method1 = {
    method1(){

        return 'string from method1'
    }
}


const dontWant = {
    dontWant(){

        throw new Error('noooo')
    }
}

const method2 = {
    method2(){
        return 'string from method2'
    }
}

// ... spread operator , vai adicionar dentro da lista e não criar uma nova posiçao  espalhar elementos

// 'string from method1' + 'string from method2'

const INSTANCE = {...method1, ...method2}

console.log(INSTANCE.method1())
