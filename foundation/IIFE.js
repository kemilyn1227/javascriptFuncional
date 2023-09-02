//IIFE immediately invoked fucntion express

(function (a,b,c){
    console.log(`o resultado é ${a+b+c}`)
})(1,3,4);


(function (){
    let x = 3

    console.log(x)
})();

(() => console.log('arrow1'))()

//caso o parametro seje adicionado logo no final da funcao ele ja sera executado 

//Se usa quando se é necessario uma operacao mais privada 