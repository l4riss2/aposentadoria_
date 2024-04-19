const nome = "Maria";
const sexo = "F";
const idade = 67;
const contr = 44;
const soma = idade+contr;



if(sexo==="F"){
 if(contr>=30){
    if(soma>=85){
        console.log('Maria, você pode se aposentar.');
    
    }  
    else{
        console.log( 'Maria, você ainda não pode se aposentar.');
    }
    } 
  else {
     console.log("Maria, você ainda não pode se aposentar.");
} 
} 
else if (sexo==="M"){ 
    if(contr>=35){
        if(soma>=95){
            console.log('Maria, você se aposentar');
        }  
        else{
             console.log('Maria, você ainda não pode se aposentar.');
        }
        } 
      else {
         console.log('Maria,você ainda não pode se aposentar');
    } 
}



    