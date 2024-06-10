//ejercicio 1

const imagen = document.getElementById('img');
let contador = 0;

imagen.addEventListener('click', ()=>{
    if(contador==0){
        imagen.classList.add('borde');
        contador = 1;
    }else{
        imagen.classList.remove('borde');
        contador = 0;
    }

} )


