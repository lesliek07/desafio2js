
//ejercicio 2


let texto = document.getElementById('texto');
const btn = document.getElementById('btn');
let suma = 0;

btn.addEventListener('click', ()=>{
    
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let input3 = document.getElementById('input3').value;
    
    suma = parseInt(input1) + parseInt(input2) + parseInt(input3); 
    console.log(suma);
   
    if(suma <= 10){
        texto.innerHTML= 'Llevas ' + suma +' stickers';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
    }else if(suma> 10){
        texto.innerHTML = 'Llevas demasiados stickers';
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';
    }

})
