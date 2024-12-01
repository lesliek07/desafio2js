
//ejercicio 2


let texto = document.getElementById('texto');
const btn = document.getElementById('btn');
let suma = 0;

btn.addEventListener('click', ()=>{
    
    let input1 = parseInt(document.getElementById('input1').value) || 0;
    let input2 = parseInt(document.getElementById('input2').value) || 0;
    let input3 = parseInt(document.getElementById('input3').value) || 0;
    
    //console.log(input1, input2, input3)
    
    suma = input1 + input2+ input3;
    
    // console.log(suma);
   
    if(suma <= 10){
        texto.innerHTML= 'Llevas ' + suma +' stickers';
        
    }else if(suma> 10){
        texto.innerHTML = 'Llevas demasiados stickers';

    }

        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        document.getElementById('input3').value = '';

})
