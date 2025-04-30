let question = document.querySelectorAll('.pregunta');

let btnDropdown = document.querySelectorAll('.pregunta .more');

let answer = document.querySelectorAll('.respuesta');

let parrafo = document.querySelectorAll('.respuesta p');

for(let i = 0; i < btnDropdown.length;i++){
    let altoParrafo=parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click',() =>{

        if(switchc==0){

            answer[i].style.height=`${1.5*altoParrafo}px`;
            question[i].style.marginBottom='10px';
            btnDropdown[i].innerHTML = '<i>-</i>';
            switchc++;
        }
        else if(switchc == 1){

            answer[i].style.height=`0`;
            question[i].style.marginBottom='0';
            btnDropdown[i].innerHTML='<i>+</i>';
            switchc --;
        }
    })
}
