
//SIMULADOR CARRITO DE COMPRAS//
  //Declaramos variables y constantes//
  //Variables globales//
  const Max_Productos = 10;
  //Arrays vacio//
  let carrito_vacio = [];
  //Variables para el total y la cantidad de productos//
  let total = 0;
  let cantidad_productos = 0;

  let Productos = [
    { id:1, nombre: "Ensaladera de ceramica", precio: 15000},
    { id:2, nombre: "Bandeja de ceramica", precio: 10000},
    { id:3, nombre: "Taza de ceramica", precio: 6000},
    { id:4, nombre: "Juego de 6 platos playos", precio: 20000},
    { id:5, nombre: "Juego de 6 platos hondos", precio: 25000},
    { id:6, nombre: "Maceta de ceramica", precio:12000},
    { id:7, nombre: "portasahumerio-hoja", precio: 5000},
    { id:8, nombre: "portautensilios de cocina", precio: 8000},
    { id:9, nombre: "posa vasos", precio: 3000},
    { id:10, nombre: "juego de 6 platos de postre", precio: 15000},
  ]


  //Declaramos funciones//

  function agregarProducto(carrito_vacio) {
    if (cantidad_productos >= Max_Productos) {
      alert("Limite de productos alcanzado");
      return;
    }
   
    while (carrito_vacio === undefined) {
      let carrito_vacio = prompt("Ingrese el producto que desea agregar al carrito");

    }
    cantidad_productos++;
    alert("Producto agregado al carrito");
    //Agregar el producto al carrito//
    carrito_vacio.push(Productos[id3]);
    return carrito_vacio;



  
    }

    //Invocamos la funcion agregarProducto//
    agregarProducto(carrito_vacio);

    console.log(agregarProducto);




    function listarProductos() {
      if(carrito_vacio.length === 0) {
        alert("El carrito esta vacio");
        return;
      }
      let lista = "productos en el carrito: \n";

      for (let i=1; i <= carrito_vacio.length; i++) {
      //declararmos un array //
      }
    }


    //Invocamos la funcion listarProductos//
    listarProductos();
    console.log(listarProductos);

    //Funciones para eliminar producto, calcular total, finalizar compra//

    function eliminarProducto() {}

    function calcularTotal() {}

    function finalizarCompra() {}

