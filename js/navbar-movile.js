/* Alternar entre mostrar y ocultar los enlaces del menú de navegación cuando el usuario hace clic en el icono de menú / barra de hamburguesa */
function myFunction() {
    var x = document.getElementsByClassName("items");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }