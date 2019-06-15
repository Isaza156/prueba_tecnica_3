var nombre = "Jhon"
var edad = 15
var dias = 0, horas = 0
if (edad >= 18){
    dias = edad * 365
    console.log(nombre + " a vivido " + dias)
}else{
    if (edad % 2 == 0){
        horas = edad * 365 * 24
        console.log("A vivido " + horas)
        }else{

            console.log(nombre + " Hola")
}
}
