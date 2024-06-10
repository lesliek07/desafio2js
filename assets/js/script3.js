//ejercicio 3

let txt = document.getElementById('txt');
const btn = document.getElementById('btn');
let password = '';

btn.addEventListener('click', ()=>{

    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    let select3 = document.getElementById('select3').value;

    
    password = select1 + select2 + select3;
    console.log(password);

    if(password == '911'){
        txt.innerHTML = 'Password 1 correcto';
    }else if ( password == '714'){
        txt.innerHTML = 'Password 2 correcto';
    }else{
        txt.innerHTML = 'Password incorrecto'
    }
})
