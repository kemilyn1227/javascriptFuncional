//function declaration

function sayHello(){
    console.log('hello!')
}

sayHello() //nao recebe e nem retorna parametros

function sayHelloTo(name){
    console.log(`hello ${name}`)
}

sayHelloTo('mike')

function hi(){
    return 'hi'
}

let greeting = hi()

console.log(greeting)

function ReturnHiTo(name){

    return `hi ${name}`
}

console.log(ReturnHiTo('kim'))