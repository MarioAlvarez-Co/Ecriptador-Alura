   
window.onload = function() {
    setTimeout(function() {
        document.querySelector('#loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('#loading-screen').style.display = 'none';
        }, 100); // Tiempo para la transición de opacidad
    }, 3000); // Tiempo de carga en milisegundos
};

let restult =document.querySelector('#result');  
let textInput =document.querySelector('#text-input');

function message(msg) {
    restult.innerHTML =msg;
}
function verifyText(){
    const regex = /^[a-z\s]+$/i;
    if (textInput.value.length === 0) {
        message("texto vacio")
    }else if (regex.test(textInput.value)) {
       return true;
    } else{ 
        message("texto invalido")      
    }
}
function encryptText(text) {
    const encrypt = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");    
    return encrypt;
}
function descryptText(text) {
    const decrypt = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return decrypt;
}
function copyText() {
    navigator.clipboard.writeText(restult.innerHTML)
    .then(() => {
      restult.innerHTML = 'Texto copiado al portapapeles'
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })  
}    
document.querySelector('#encrypt-btn').addEventListener('click', () => {
    verifyText() && message(encryptText(textInput.value.trim()));
});
document.querySelector('#decrypt-btn').addEventListener('click', () => {
    verifyText() && message(descryptText(textInput.value.trim()));
});