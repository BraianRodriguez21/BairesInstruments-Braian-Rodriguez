//Preentrega 2

class Productos {
    constructor(Nombre, Precio, Stock, img) {
      this.Nombre = Nombre;
      this.Precio = Precio;
      this.Stock = Stock;
      this.img = img;
    }
  }
  
  const GuitarraCriolla = new Productos("Guitarra Criolla", 10000, 30, "./assets/img/guitarra_criolla.jpg");
  const PianoYamaha = new Productos("Piano Yamaha", 700000, 15, "./assets/img/piano_yamaha.jpg");
  const AuricularesSure = new Productos("Auriculares Sure", 40000, 20, "./assets/img/sure_auriculares.png");
  const MicrofonoSure = new Productos("Microfono Sure", 30000, 24, "./assets/img/sure_microfono.png");
  const GuitarraElectrica = new Productos("Guitarra Electrica", 350000, 35, "./assets/img/guitarra_electrica.png");
  const Amplificador = new Productos("Amplificador", 280000, 35, "./assets/img/amplificador.png");


  const ArrayProductos = [GuitarraCriolla, PianoYamaha, AuricularesSure, MicrofonoSure, GuitarraElectrica, Amplificador];
  
  ArrayProductos.forEach(producto => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <p>Nombre: ${producto.Nombre}</p>
      <p>Precio: $${producto.Precio}</p>
      <p>Stock: ${producto.Stock}</p>
      <img src="${producto.img}" alt="${producto.Nombre}">
      <button onclick="addToCart('${producto.Nombre}', ${producto.Precio})">Agregar a Carrito</button>
    `;
    document.getElementById('contenedorproductos').appendChild(div);
  });
  
  let cartItems = [];
  let total = 0;
  
  function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    total += price;
    updateCart();
  }
  
  function removeFromCart(index) {
    total -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
  }
  
  function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartList.innerHTML = '';
    
    cartItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price}`;
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Eliminar';
      removeButton.onclick = function() {
        removeFromCart(index);
      };
      
      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
    });
    
    totalElement.textContent = `Total: $${total}`;
  }