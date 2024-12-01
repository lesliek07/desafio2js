//ejercicio 3

const txt = document.getElementById('txt');
const btn = document.getElementById('btn');


btn.addEventListener('click', ()=>{

    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;

    
    const password = select1 + select2 + select3;

    if(password == '911'){
        txt.innerHTML = 'Password 1 correcto';
    }else if ( password == '714'){
        txt.innerHTML = 'Password 2 es correcto';
    }else{
        txt.innerHTML = 'Password incorrecto'
    }
})
