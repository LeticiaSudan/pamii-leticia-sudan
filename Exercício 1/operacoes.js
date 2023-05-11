let num1 = 10
let num2 = 5

//SOMA
function Soma (){
    return num1 + num2
}

//SUBTRAÇÃO
function Subtração (){
    return num1 - num2
}

//MULTIPLICAÇÃO
function Multiplicação (){
    return num1*num2
}

//DIVISÃO
function Divisão (){
    return num1/num2
}

//POTÊNCIA
function Potência(){
    return num1**num2
}

//RAIZ
function Raiz1 (){
    return Math.sqrt(num1)
}

function Raiz2(){
    return Math.sqrt(num2)
}

//MOSTRAR RESULTADOS NO CONSOLE
console.log("A soma dos valores", num1, "e", num2, "é igual a:", Soma());
console.log("A subtração dos valores", num1, "e", num2, "é igual a:", Subtração());
console.log("A multiplicação dos valores",num1, "e", num2, "é igual a:", Multiplicação());
console.log("A divisão dos valores", num1, "e", num2, "é igual a:", Divisão());
console.log("A potência de", num1, "elevado a", num2, "é igual a:", Potência());
console.log("A raiz do número", num1, "é igual a:", Raiz1());
console.log("A raiz do número", num2, "é igual a:", Raiz2());
