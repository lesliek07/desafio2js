
//ejercicio 2


let texto = document.getElementById('texto');
const btn = document.getElementById('btn');
let suma = 0;

btn.addEventListener('click', ()=>{
    
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);
    let input3 = parseInt(document.getElementById('input3').value);
    
    input1 = input1 || 0;
    input2 = input2 || 0;
    input3 = input3 || 0;

    //console.log(input1, input2, input3)
    
    suma = input1 + input2+ input3;
    
    // console.log(suma);
   
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
