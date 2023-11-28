//Preentrega 1


let password = "123456789";

const login = () => {
    
    let pass = false;

    for (let tried = 3; tried > 0; tried--) {
        let passwordPass = prompt("Ingresa tu contraseña. Tienes " + tried+  " intentos");

        if (passwordPass === password) {
            alert("Iniciaste Sesion");
            pass = true;
            break; 
        } else {
            alert("Contraseña inválida.");
        }
    }

    return pass;
    
}

if (login())
// intente hacer un carrito de compras
{
    class Producto {
        constructor(nombre, precio) {
            this.nombre  = nombre.toUpperCase();
            this.precio  = parseFloat(precio);
            this.vendido = false;
        }
        sumaIva() {
            this.precio = this.precio * 1.21;
        }
        vender() {
            this.vendido = true;
        }
    }
    const producto1 = new Producto("Guitarra Criolla", 10000);
    const producto2 = new Producto("Piano Yamaha", 700000);
    const producto3 = new Producto("Auriculares Sure",40000);
    const producto4 = new Producto("Microfono Sure",30000);
    producto1.sumaIva();
    producto2.sumaIva();
    producto3.sumaIva();
    producto4.sumaIva();
    producto1.vender();
    producto2.vender();
    producto3.vender();

    
    
}


//En caso de ofertas o Cupon de descuento, esto lo dejo porque planeo poner cupos de descuento o para oferta. Lo dejo en comentarios porque me estoy fijando bien como usarlo

// let PrecioTotal = parseFloat(prompt("Ingresa Total"));
// let PrecioOff = parseFloat(prompt("Ingresa Descuento"));


// function calculadoraConDescuento(total, descuento){
//     let off= (total*descuento)/100;
//     let totaloff= total - off;//
    
//     return totaloff;
// }

//     let totaloff = calculadoraConDescuento(PrecioTotal,PrecioOff);
//     console.log("el total con el descuento es: "+ totaloff);
