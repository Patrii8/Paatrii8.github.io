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
});
