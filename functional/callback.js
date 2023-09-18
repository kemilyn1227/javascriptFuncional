function exibir(num){
    console.log('a operaçao resultou e ' + num)
}

function multiplicaçao(a,b, callback){
    const op = a*b

    callback(op)

}

function soma(a,b,  cb){
    op = a + b 

    cb(op)
}

multiplicaçao(2,2, exibir)

soma(2,4,exibir)