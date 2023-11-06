//iniciar sesion
const USERNAME= prompt("Nombre de Usuario");
const PASSWORD= prompt("Contraseña");

if (USERNAME === "admin" &&(PASSWORD ==="secreta"|| PASSWORD === "123456789")){
    console.log("Iniciaste Sesion");
}else{
    console.log("No has podido iniciar sesion");
}



//En caso de ofertas
let numeroTotal = parseFloat(prompt("Ingresa Total"));
let numDescuento = parseFloat(prompt("Ingresa Descuento"));


function calculadoraConDescuento(total, descuento){
    let off= (total*descuento)/100;
    let totaloff= total - off;//
    
    return totaloff;
}

    let totaloff = calculadoraConDescuento(numeroTotal,numDescuento);
    console.log("el total con el descuento es: "+ totaloff);
