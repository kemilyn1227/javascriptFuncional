// funçao recebe funçao 

function run (fn){
    console.log(`kim ${fn()}`)
}

function sayHello(){
    return 'hello world'
}

run(sayHello)

