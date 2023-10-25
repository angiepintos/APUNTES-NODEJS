
class persona {
    constructor(nombre,apellido, edad,correo,telefono, pasatiempo){
        this.nombre = nombre
        this.apellido = apellido
        this.edad=edad
        this.correo = correo
        this.telefono= telefono
        this.pasatiempo = pasatiempo
    }
    saludar(){
        return `Hola! mi nombre es ${this.nombre} ${this.apellido} y mi correo ${this.correo} s`
    }
}


module.exports ={
   persona
}
