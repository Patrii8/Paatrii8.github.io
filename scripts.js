document.addEventListener('DOMContentLoaded', () => {
    let preguntas = document.querySelectorAll('.item-preguntas');

    preguntas.forEach(pregunta => {
        let boton = pregunta.querySelector('.more');
        let respuesta = pregunta.querySelector('.respuesta');
        let parrafo = respuesta.querySelector('p');

        boton.addEventListener('click', () => {
            if (respuesta.style.height === '0px' || !respuesta.style.height) {
                respuesta.style.height = `${parrafo.scrollHeight}px`;
                boton.innerHTML = '<i>-</i>';
            } else {
                respuesta.style.height = '0px';
                boton.innerHTML = '<i>+</i>';
            }
        });
    });

    const btnEnviar = document.getElementById('enviarComentario');
    const contenedorComentarios = document.getElementById('comentariosContainer');

    btnEnviar.addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value.trim();
        const comentario = document.getElementById('comentario').value.trim();
    
        if (nombre === '' || comentario === '') {
            alert('Por favor, completa ambos campos.');
            return;
        }
    
        const nuevoComentario = document.createElement('div');
        nuevoComentario.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;
        contenedorComentarios.appendChild(nuevoComentario);
    
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';    
    });
});