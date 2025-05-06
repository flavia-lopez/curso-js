
//SIMULADOR CARRITO DE COMPRAS//
  //Declaramos variables y constantes//
  //Variables globales//
  const maxProductos = 10;
  let carritoVacio = [];
  //Variables para el total y la cantidad de productos//
  let total = 0;
  let cantidadProductos = 0;

  let productos = [
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

  function agregarProducto(carritoVacio) {
    if (cantidadProductos >= maxProductos) {
      alert("Limite de productos alcanzado");
      return;
    }else if (carritoVacio.length ===0) {
      alert("El carrito esta vacio");
      return;
    }
    //Solicitamos el producto al usuario// 


    //Agregar el producto al carrito//
    carritoVacio.push(productos[3].nombre); 
    //Verificamos si el carrito esta lleno//
    return carritoVacio;



  
    }

    //Invocamos la funcion agregarProducto//
    agregarProducto(carritoVacio);

    console.log(agregarProducto(carritoVacio));




    function listarProductos() {
      if(carritoVacio.length === 0) {
        alert("El carrito esta vacio");
        return;
      }
      let lista = "productos en el carrito: \n";

      for (let i=1; i <= carritoVacio.length; i++) {
      //declaramos un array //
      }
    }


    //Invocamos la funcion listarProductos//
    listarProductos();
    console.log(listarProductos);

    //Funciones para eliminar producto, calcular total, finalizar compra//

    function eliminarProducto() {}

    function calcularTotal() {}

    function finalizarCompra() {}

