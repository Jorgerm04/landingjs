function actualizarPrecio() {
      // Obtener los valores seleccionados de los desplegables
      var longitud = document.getElementById("desplegable-longitud").value;
      var diametro = document.getElementById("desplegable-diametro").value;
      var material = document.getElementById("desplegable-material").value;

      // Actualizar el precio en consecuencia
      switch (true) {
            case longitud === "200" && diametro === "2,7" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "10.00";
                  break;
            case longitud === "200" && diametro === "2,7" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "11.00";
                  break;
            case longitud === "200" && diametro === "2,7" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "12.00";
                  break;
            case longitud === "200" && diametro === "2,8" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "13.00";
                  break;
            case longitud === "200" && diametro === "2,8" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "14.00";
                  break;
            case longitud === "200" && diametro === "2,8" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "15.00";
                  break;
            case longitud === "200" && diametro === "2,9" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "16.00";
                  break;
            case longitud === "200" && diametro === "2,9" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "17.00";
                  break;
            case longitud === "200" && diametro === "2,9" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "18.00";
                  break;
            case longitud === "200" && diametro === "3,0" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "19.00";
                  break;
            case longitud === "200" && diametro === "3,0" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "20.00";
                  break;
            case longitud === "200" && diametro === "3,0" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "21.00";
                  break;
            case longitud === "200" && diametro === "3,1" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "22.00";
                  break;
            case longitud === "200" && diametro === "3,1" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "23.00";
                  break;
            case longitud === "200" && diametro === "3,1" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "24.00";
                  break;
            case longitud === "200" && diametro === "3,2" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "25.00";
                  break;
            case longitud === "200" && diametro === "3,2" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "26.00";
                  break;
            case longitud === "200" && diametro === "3,2" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "27.00";
                  break;
            case longitud === "200" && diametro === "3,3" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "28.00";
                  break;
            case longitud === "200" && diametro === "3,3" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "29.00";
                  break;
            case longitud === "200" && diametro === "3,3" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "30.00";
                  break;
            case longitud === "200" && diametro === "3,4" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "31.00";
                  break;
            case longitud === "200" && diametro === "3,4" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "32.00";
                  break;
            case longitud === "200" && diametro === "3,4" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "33.00";
                  break;
            case longitud === "200" && diametro === "3,5" && material == "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "34.00"
                  break;
            case longitud === "200" && diametro === "3,5" && material == "poliester":
                  document.getElementById("precio-producto").innerHTML = "35.00"
                  break;
            case longitud === "200" && diametro === "3,5" && material == "nylon":
                  document.getElementById("precio-producto").innerHTML = "36.00"
                  break;

            case longitud === "500" && diametro === "2,7" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "10.00";
                  break;
            case longitud === "500" && diametro === "2,7" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "11.00";
                  break;
            case longitud === "500" && diametro === "2,7" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "12.00";
                  break;
            case longitud === "500" && diametro === "2,8" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "13.00";
                  break;
            case longitud === "500" && diametro === "2,8" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "14.00";
                  break;
            case longitud === "500" && diametro === "2,8" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "15.00";
                  break;
            case longitud === "500" && diametro === "2,9" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "16.00";
                  break;
            case longitud === "500" && diametro === "2,9" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "17.00";
                  break;
            case longitud === "500" && diametro === "2,9" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "18.00";
                  break;
            case longitud === "500" && diametro === "3,0" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "19.00";
                  break;
            case longitud === "500" && diametro === "3,0" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "20.00";
                  break;
            case longitud === "500" && diametro === "3,0" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "21.00";
                  break;
            case longitud === "500" && diametro === "3,1" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "22.00";
                  break;
            case longitud === "500" && diametro === "3,1" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "23.00";
                  break;
            case longitud === "500" && diametro === "3,1" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "24.00";
                  break;
            case longitud === "500" && diametro === "3,2" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "25.00";
                  break;
            case longitud === "500" && diametro === "3,2" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "26.00";
                  break;
            case longitud === "500" && diametro === "3,2" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "27.00";
                  break;
            case longitud === "500" && diametro === "3,3" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "28.00";
                  break;
            case longitud === "500" && diametro === "3,3" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "29.00";
                  break;
            case longitud === "500" && diametro === "3,3" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "30.00";
                  break;
            case longitud === "500" && diametro === "3,4" && material === "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "31.00";
                  break;
            case longitud === "500" && diametro === "3,4" && material === "poliester":
                  document.getElementById("precio-producto").innerHTML = "32.00";
                  break;
            case longitud === "500" && diametro === "3,4" && material === "nylon":
                  document.getElementById("precio-producto").innerHTML = "33.00";
                  break;
            case longitud === "500" && diametro === "3,5" && material == "polipropileno":
                  document.getElementById("precio-producto").innerHTML = "34.00"
                  break;
            case longitud === "500" && diametro === "3,5" && material == "poliester":
                  document.getElementById("precio-producto").innerHTML = "35.00"
                  break;
            case longitud === "500" && diametro === "3,5" && material == "nylon":
                  document.getElementById("precio-producto").innerHTML = "36.00"
                  break

      }
}


//Funciones para que al poner el raton encima de uno de los divs se cambien a la vez el color de fondo y para que vuelvan a su color anterior
//El div1 y div2 en una pareja y el div3 y div4 en otra preja
var div1 = document.getElementById('añadir-carrito-carrito');
var div2 = document.getElementById('añadir-carrito-texto');
var div3 = document.getElementById('comprar-ya-carrito');
var div4 = document.getElementById('comprar-ya-texto');

div1.addEventListener('mouseover', function () {
      div1.style.backgroundColor = '#7b5e2b';
      div2.style.backgroundColor = '#7b5e2b';
});

div2.addEventListener('mouseover', function () {
      div1.style.backgroundColor = '#7b5e2b';
      div2.style.backgroundColor = '#7b5e2b';
});

div3.addEventListener('mouseover', function () {
      div3.style.backgroundColor = '#734f22';
      div4.style.backgroundColor = '#734f22';
});

div4.addEventListener('mouseover', function () {
      div3.style.backgroundColor = '#734f22';
      div4.style.backgroundColor = '#734f22';
});

div1.addEventListener('mouseout', function () {
      div1.style.backgroundColor = '#c39444';
      div2.style.backgroundColor = '#c39444';
});

div2.addEventListener('mouseout', function () {
      div1.style.backgroundColor = '#c39444';
      div2.style.backgroundColor = '#c39444';
})

div3.addEventListener('mouseout', function () {
      div3.style.backgroundColor = '#be8136';
      div4.style.backgroundColor = '#be8136';
});

div4.addEventListener('mouseout', function () {
      div3.style.backgroundColor = '#be8136';
      div4.style.backgroundColor = '#be8136';
});