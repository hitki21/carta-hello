function abrirCuaderno() {
  const portada = document.getElementById('portada');
  const interior = document.getElementById('paginaInterior');
  
  // 1. Iniciamos la animación de la portada
  portada.classList.add('abrir-animacion');
  
  // 2. Mostramos el contenedor (aún invisible por la opacidad 0)
  interior.style.display = 'flex';
  
  // 3. Un pequeño truco para que el navegador registre el display:flex antes de cambiar la opacidad
  setTimeout(() => {
    interior.classList.add('mostrar-animacion');
  }, 50);
}

function cerrarCuaderno() {
  const portada = document.getElementById('portada');
  const interior = document.getElementById('paginaInterior');
  
  // 1. Ocultamos el interior suavemente
  interior.classList.remove('mostrar-animacion');
  
  // 2. Esperamos a que termine el desvanecimiento para ocultarlo del todo y regresar la portada
  setTimeout(() => {
    interior.style.display = 'none';
    portada.classList.remove('abrir-animacion');
  }, 800);
}
function cambiarPagina(numeroVista) {
  // Ocultamos ambas vistas primero
  document.getElementById('vista1').style.display = 'none';
  document.getElementById('vista2').style.display = 'none';
  
  // Mostramos solo la que queremos ver
  if (numeroVista === 1) {
    document.getElementById('vista1').style.display = 'flex';
  } else {
    document.getElementById('vista2').style.display = 'flex';
  }
}