const validar = [
    pregunta1 = false,
    pregunta2 = false,
    pregunta3 = false,
    pregunta4 = false,
    pregunta5 = false,
    pregunta6 = false
]

const question1 = document.getElementById('ques_1');
question1.addEventListener('mouseleave',()=>{
    const valor = document.getElementById('ques_1').value;
    if(valor ==2){
        question1.classList.remove('incorrecto');
        question1.classList.add('correcto');
        validar['pregunta1'] = true
    }else{
        question1.classList.remove('correcto');
        question1.classList.add('incorrecto');
        validar['pregunta1'] = false
    }
})

const question2 = document.getElementById('ques_2');
question2.addEventListener('mouseleave',()=>{
    const valor = document.getElementById('ques_2').value;
    if(valor == "db.estudiantes.find({nombre:{$nin:['Pedro']}})"){
        question2.classList.remove('incorrecto');
        question2.classList.add('correcto');
        validar['pregunta2'] = true
    }else{
        question2.classList.remove('correcto');
        question2.classList.add('incorrecto');
        validar['pregunta2'] = false
    }
})

const question3 = document.getElementById('ques_3');
question3.addEventListener('mouseleave',()=>{
    const valor = document.getElementById('ques_3').value;
    if(valor == 3){
        question3.classList.remove('incorrecto');
        question3.classList.add('correcto');
        validar['pregunta3'] = true
    }else{
        question3.classList.remove('correcto');
        question3.classList.add('incorrecto');
        validar['pregunta3'] = false
    }
})

const question4 = document.getElementById('ques_4');
question4.addEventListener('mouseleave',()=>{
    const valor = document.getElementById('ques_4').value
    if(valor == 1){
        question4.classList.remove('incorrecto');
        question4.classList.add('correcto');
        validar['pregunta4'] = true
        console.log(validar)
    }else{
        question4.classList.remove('correcto');
        question4.classList.add('incorrecto');
        validar['pregunta4'] = false
    }
})

const question5 = document.getElementById('insert_');
question5.addEventListener('mouseleave',()=>{
    const valor = document.getElementById('insert_').value;
    if(valor== `db.alumnos.insert({nombre:"pedro"})` || valor == `db.alumnos.insert({ nombre: "pedro" })` || valor == `db.alumnos.insert( { nombre: "pedro" } )`){
        question5.classList.remove('incorrecto');
        question5.classList.add('correcto');
        validar['pregunta'] = true;
    }else{
        question5.classList.remove('correcto');
        question5.classList.add('incorrecto');
        validar['pregunta'] = false;
    }
})

const question6 = document.getElementById('update_');
question6.addEventListener('mouseleave',()=>{
    const valor = document.getElementById('update_').value;
    if(valor== `db.profesores.update({_id:1},{$set:{nombre:"lucas"}})` || valor== `db.profesores.update( {_id:1} , {$set:{nombre:"lucas"} } )`|| valor== `db.profesores.update( {_id:1} , { $set:{nombre:"lucas"} } )` || valor== `db.profesores.update({ _id:1 },{ $set:{ nombre:"lucas" }})`){
        question6.classList.remove('incorrecto');
        question6.classList.add('correcto');
        validar['pregunta5'] = true; 
    }else{
        question6.classList.remove('correcto');
        question6.classList.add('incorrecto');
        validar['pregunta5'] = false; 
    }
})
 
const question7 = document.getElementById('drop_3');
question7.addEventListener('mouseleave',()=> {
    const valor = document.getElementById('drop_3').value;
    if(valor == 4){
        question7.classList.remove('incorrecto');
        question7.classList.add('correcto');
        validar['pregunta6'] = true; 
    }else{
        question7.classList.remove('correcto');
        question7.classList.add('incorrecto');
        validar['pregunta6'] = false; 
    }

});

const question8 = document.getElementById('drop_4');
question8.addEventListener('mouseleave',()=> {
    const valor = document.getElementById('drop_4').value;
    if(valor == "db.dropDatabase()"){
        question8.classList.remove('incorrecto');
        question8.classList.add('correcto');
        validar['pregunta7'] = true; 
        console.log(validar)
    }else{
        question8.classList.remove('correcto');
        question8.classList.add('incorrecto');
        validar['pregunta7'] = false; 
    }

});


question1.addEventListener('blur',()=>{
    const valor = document.getElementById('ques_1').value
    if(valor==2){
        question1.classList.remove('incorrecto');
        question1.classList.add('correcto');
        validar['pregunta1'] = true;
    }else{
        question1.classList.remove('correcto');
        question1.classList.add('incorrecto');
        validar['pregunta1'] = false;
    }
})


question2.addEventListener('blur',()=>{
    const valor = document.getElementById('ques_2').value;
    if(valor == "db.estudiantes.find({nombre:{$nin:['Pedro']}})"){
        question2.classList.remove('incorrecto');
        question2.classList.add('correcto');
        validar['pregunta2'] = true
    }else{
        question2.classList.remove('correcto');
        question2.classList.add('incorrecto');
        validar['pregunta2'] = false
    }
})


question3.addEventListener('blur',()=>{
    const valor = document.getElementById('ques_3').value;
    if(valor == 3){
        question3.classList.remove('incorrecto');
        question3.classList.add('correcto');
        validar['pregunta3'] = true
    }else{
        question3.classList.remove('correcto');
        question3.classList.add('incorrecto');
        validar['pregunta3'] = false
    }
})


question4.addEventListener('blur',()=>{
    const valor = document.getElementById('ques_4').value
    if(valor == 1){
        question4.classList.remove('incorrecto');
        question4.classList.add('correcto');
        validar['pregunta3'] = true
        console.log(validar)
    }else{
        question4.classList.remove('correcto');
        question4.classList.add('incorrecto');
        validar['pregunta3'] = false
    }
})


question5.addEventListener('blur',()=>{
    const valor = document.getElementById('insert_').value;
    if(valor== `db.alumnos.insert({nombre:"pedro"})` || valor == `db.alumnos.insert({ nombre: "pedro" })` || valor == `db.alumnos.insert( { nombre: "pedro" } )`){
        question5.classList.remove('incorrecto');
        question5.classList.add('correcto');
        validar['pregunta4'] = true;
    }else{
        question5.classList.remove('correcto');
        question5.classList.add('incorrecto');
        validar['pregunta4'] = false;
    }
})


question6.addEventListener('blur',()=>{
    const valor = document.getElementById('update_').value;
    if(valor== `db.profesores.update({_id:1},{$set:{nombre:"lucas"}})` || valor== `db.profesores.update( {_id:1} , {$set:{nombre:"lucas"} } )`|| valor== `db.profesores.update( {_id:1} , { $set:{nombre:"lucas"} } )` || valor== `db.profesores.update({ _id:1 },{ $set:{ nombre:"lucas" }})`){
        question6.classList.remove('incorrecto');
        question6.classList.add('correcto');
        validar['pregunta5'] = true; 
    }else{
        question6.classList.remove('correcto');
        question6.classList.add('incorrecto');
        validar['pregunta5'] = false; 
    }
})
 

question7.addEventListener('blur',()=> {
    const valor = document.getElementById('drop_3').value;
    if(valor == 4){
        question7.classList.remove('incorrecto');
        question7.classList.add('correcto');
        validar['pregunta6'] = true; 
    }else{
        question7.classList.remove('correcto');
        question7.classList.add('incorrecto');
        validar['pregunta6'] = false; 
    }

});


question8.addEventListener('blur',()=> {
    const valor = document.getElementById('drop_4').value;
    if(valor == "db.dropDatabase()"){
        question8.classList.remove('incorrecto');
        question8.classList.add('correcto');
        validar['pregunta7'] = true; 
        console.log(validar)
    }else{
        question8.classList.remove('correcto');
        question8.classList.add('incorrecto');
        validar['pregunta7'] = false; 
    }

});

if(validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
    const seguir = document.getElementById('seguir');
    seguir.style.display="flex"
}