let num1 = 2
const num2 = 3

//Toda função precisa ter um retorno
function soma(){
    return num1 + num2
}

console.log(soma())

num1 = 6
// num2 = 9 
// Variáveis do tipo const nunca muda, sempre é constante

console.log(soma())

//Parâmetros são variáveis
const funcaoSoma = (a, b) => {
    return a + b
}

console.log(funcaoSoma(10, 8))
console.log(funcaoSoma(7, 30))
