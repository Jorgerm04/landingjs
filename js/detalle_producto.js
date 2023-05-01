function actualizarPrecio() {
      // Obtener los valores seleccionados de los desplegables
      var longitud = document.getElementById("desplegable-longitud").value;
      var diametro = document.getElementById("desplegable-diametro").value;
      var material = document.getElementById("desplegable-material").value;

      // Precios base para cada material
      var preciosBase = {
            polipropileno: 10,
            poliester: 11,
            nylon: 12
      };

      // Verificar si el material es válido
      if (preciosBase.hasOwnProperty(material)) {
            // Calcular el precio base del material seleccionado
            var precioBase = preciosBase[material];

            // Calcular el incremento por diámetro
            var incrementoDiametro = (parseFloat(diametro) - 2.7) * 3;

            // Calcular el incremento por longitud
            var incrementoLongitud = longitud === "500";

            // Calcular el precio final
            var precioFinal = precioBase + incrementoDiametro + incrementoLongitud;

            // Actualizar el HTML con el precio calculado
            document.getElementById("precio-producto").innerHTML = precioFinal.toFixed(2) + "€";
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


//Funcion usada para el cambio de las imagenes dependiendo del material seleccionado en el desplegable
function cambioImagenes() {

      var material = document.getElementById("desplegable-material").value;
      var Imagen1 = document.getElementById("img1");
      var Imagen2 = document.getElementById("img2");
      var Imagen3 = document.getElementById("img3");
      var Imagen4 = document.getElementById("img4");

      switch (true) {
            //detecta longitud diametro y material y en consecuencia le cambia el html al que pongamos en el .innerhtml
            case material === "polipropileno":
                  Imagen1.src = "../media/Imagenes/riel_polipropileno_1.jpg";
                  Imagen2.src = "../media/Imagenes/riel_polipropileno_1.jpg";
                  Imagen3.src = "../media/Imagenes/riel_polipropileno_2.jpg";
                  Imagen4.src = "../media/Imagenes/riel_polipropileno_3.jpg";
                  break;
            case  material === "poliester":
                  Imagen1.src = "../media/Imagenes/riel_poliester_1.jpg";
                  Imagen2.src = "../media/Imagenes/riel_poliester_1.jpg";
                  Imagen3.src = "../media/Imagenes/riel_poliester_2.png";
                  Imagen4.src = "../media/Imagenes/riel_poliester_3.png";
                  break;
            case material === "nylon":
                  Imagen1.src = "../media/Imagenes/riel_nylon_1.jpg";
                  Imagen2.src = "../media/Imagenes/riel_nylon_1.jpg";
                  Imagen3.src = "../media/Imagenes/riel_nylon_2.jpg";
                  Imagen4.src = "../media/Imagenes/riel_nylon_3.png";
                  break;
      }

  }
  
