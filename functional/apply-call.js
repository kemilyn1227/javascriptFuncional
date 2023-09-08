const hi = {
    nome:'kim',
    idade:20,
}

function t (){

    //o mesmo que (hi.nome)
    console.log(this.nome)
}

t.call(hi)

function ex1 (a ,b ,c){
    console.log(this.nome, a ,b)
}

//consegue passar uma lista de argumentos 
                //no call seria ex1.call(hi,30,4)
console.log(ex1.apply(hi,[30, 4]))