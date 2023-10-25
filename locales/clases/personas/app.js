const clases = require('./personas')

const persona = new clases.persona(
    'angie',
    'sarmiento',
    5,
    'anabiel1234@gmail.com',
     321313131,
     'caminar,leer,ecribir')

console.log(persona)
console.log(persona.saludar())
