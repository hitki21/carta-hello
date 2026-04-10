function abrirCuaderno() {
  const portada = document.getElementById('portada');
  const interior = document.getElementById('paginaInterior');
  
  portada.classList.add('abrir-animacion');
  interior.style.display = 'flex';
  
  setTimeout(() => {
    interior.classList.add('mostrar-animacion');
  }, 50);
}

function cerrarCuaderno() {
  const portada = document.getElementById('portada');
  const interior = document.getElementById('paginaInterior');
  
  interior.classList.remove('mostrar-animacion');
  
  setTimeout(() => {
    interior.style.display = 'none';
    portada.classList.remove('abrir-animacion');
    // Regresamos a la página 1 cuando se cierra el cuaderno
    cambiarPagina(1);
  }, 800);
}

function cambiarPagina(numeroVista) {
  const hojas = [
    document.getElementById('hoja1'),
    document.getElementById('hoja2'),
    document.getElementById('hoja3'),
    document.getElementById('hoja4')
  ];

  // Verificamos si la pantalla es grande (PC) o pequeña (Celular)
  if (window.innerWidth > 850) {
    // Modo PC: Muestra dos hojas a la vez (1 y 2, o 3 y 4)
    if (numeroVista === 1 || numeroVista === 2) {
      hojas[0].style.display = 'flex';
      hojas[1].style.display = 'flex';
      hojas[2].style.display = 'none';
      hojas[3].style.display = 'none';
    } else {
      hojas[0].style.display = 'none';
      hojas[1].style.display = 'none';
      hojas[2].style.display = 'flex';
      hojas[3].style.display = 'flex';
    }
  } else {
    // Modo Celular: Muestra solo la hoja que el botón pide
    hojas.forEach((hoja, index) => {
      if (index + 1 === numeroVista) {
        hoja.style.display = 'flex';
      } else {
        hoja.style.display = 'none';
      }
    });
  }
}

// Ejecutar una vez al cargar la página para asegurar que todo empiece en la hoja 1
cambiarPagina(1);