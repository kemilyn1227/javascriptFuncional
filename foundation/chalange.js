//crie uma funcao com o nome reange que vai contar do primeiro parametro ate o segundo o terceiro parametro sera o passo

function range(a,b,t = 1 ){
    if( a < b ){
        // 0 para 8
        for (let num = a; num <= b ; num += t){
            console.log(num)
        }
    }else{
        for(let num = a ; num >= b; num -= t)
        console.log(num)
    }

}
//range(1,8)

function range2(a,b,p=1){

    if(a < b){
        while(a <= b){
            
            console.log(a)
            a += p
            

        }
    }else{
        while(a >= b){

            console.log(a)
            a -= p
            
        }
    }
}

range2(8 , -3, 4)
