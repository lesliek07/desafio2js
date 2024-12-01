
//ejercicio 2
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
    

const texto = document.getElementById('texto');
const btn = document.getElementById('btn');


btn.addEventListener('click', ()=>{
    
    const num1 = parseInt(input1.value) || 0;
    const num2 = parseInt(input2.value) || 0;
    const num3 = parseInt(input3.value) || 0;
    
    console.log(num1, num2, num3)
    
    const suma = num1 + num2+ num3;
    
    // console.log(suma);
   
    
    texto.innerHTML= suma <= 10 ? `Llevas  ${suma}  stickers` : 'Llevas demasiados stickers';
        


    input1.value = '';
    input2.value = '';
    input3.value = '';

})
