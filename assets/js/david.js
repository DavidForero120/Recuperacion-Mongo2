
const validar = [
    pregunta1 = false,
    pregunta2 = false,
    pregunta3 = false,
    pregunta4 = false,
    pregunta5 = false,
    pregunta6 = false,
    pregunta7 = false
]

const question1 = document.getElementById('use_');
question1.addEventListener('mouseleave',()=>{
    const valor = document.getElementById('use_').value
    if(valor==1){
        question1.classList.remove('incorrecto');
        question1.classList.add('correcto');
        validar['pregunta1'] = true;
    }else{
        question1.classList.remove('correcto');
        question1.classList.add('incorrecto');
        console.log("mal")
    }
})
