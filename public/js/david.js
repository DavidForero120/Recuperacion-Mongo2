const validar = [
      pregunta1 = false,
      pregunta2 = false,
      pregunta2a = false,
      pregunta3 = false,
      pregunta4 = false,
      pregunta5 = false,
      pregunta6 = false,
      pregunta7 = false
  ]
  
    const question1 = document.getElementById('use_'); 
    const question2 = document.getElementById('drop_1');
    const question3 = document.getElementById('drop_2');
    const question4 = document.getElementById('create_');
    const question5 = document.getElementById('insert_');
    const question6 = document.getElementById('update_');
    const question7 = document.getElementById('drop_3');
    const question8 = document.getElementById('drop_4');

  question1.addEventListener('blur',()=>{
      const valor = document.getElementById('use_').value
      if(valor==1){
          question1.classList.remove('incorrecto');
          question1.classList.add('correcto');
          validar['pregunta1'] = true;
          if (validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        } 

      }else{
          question1.classList.remove('correcto');
          question1.classList.add('incorrecto');
          validar['pregunta1'] = false;
      }
  })
  

  question2.addEventListener('blur',()=>{
      const valor = document.getElementById('drop_1').value;
      if(valor == "use perros"){
          question2.classList.remove('incorrecto');
          question2.classList.add('correcto');
          validar['pregunta2'] = true;
          if (validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        } 
      }else{
          question2.classList.remove('correcto');
          question2.classList.add('incorrecto');
          validar['pregunta2'] = false
      }
  })
  

  question3.addEventListener('blur',()=>{
      const valor = document.getElementById('drop_2').value;
      if(valor == "db.dropDatabase()"){
          question3.classList.remove('incorrecto');
          question3.classList.add('correcto');
          validar['pregunta2a'] = true;
          if (validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        } 

      }else{
          question3.classList.remove('correcto');
          question3.classList.add('incorrecto');
          validar['pregunta2a'] = false
      }
  })
  

  question4.addEventListener('blur',()=>{
      const valor = document.getElementById('create_').value
      if(valor == 1){
          question4.classList.remove('incorrecto');
          question4.classList.add('correcto');
          validar['pregunta3'] = true;
          if (validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        } 
            
        

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
          if (validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        } 

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
          if(validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        }

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
          if (validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        }       
        
    } else{
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
          if (validar.pregunta1== true && validar.pregunta2== true && validar.pregunta2a== true && validar.pregunta3== true && validar.pregunta4== true && validar.pregunta5== true && validar.pregunta6== true && validar.pregunta7== true  ){
            seguir.classList.replace('seguir','seguirA')
            
        }else{
            seguir.classList.replace('seguirA','seguir')
        } 
      }else{
          question8.classList.remove('correcto');
          question8.classList.add('incorrecto');
          validar['pregunta7'] = false; 
      }
  
  });
  
 