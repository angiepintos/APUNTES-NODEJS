//Ejemplo de exportación de funciones
const sumar = function(a,b){
    return `La suma de ${a} + ${b} es igual a: ${a+b}`; 
}

const restar = function (a,b) {
    return `la resta de ${a}-${b} es igual a: ${a-b}`
}

const multiplicar =  function (a,b){
    return `la multiplicaion de ${a} * ${b} es igual a: ${a*b}`
}

const dividir =  function (a,b){
    if (b!=0){
        return `la divicion de ${a}/${b} es igual a: ${a/b}`
    } else{
        return `La división por 0 no es posible`
    }
   }


//Exportación de modulos
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir

}