//crear la funcion que deseamos exportar

const saludo = fuction (nombre){
    return `buenas noches $[nombre}!mi primer modulo con funcion`
}

const despedir = fuction (nombre){
     return `adios${nombre}. gracias por usar la app`
}

//exportar la funcion

module.exports = {
    saludo:saludo,
    despedir: despedir
}