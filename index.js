const nome = 'Maria';
const sexo = "F";
const idade = 67;
const contribuicao = 44;
const soma = idade+contribuicao;

// o tempo de contribuição mínimo para mulheres é de 30 anos e para homens 35 anos;
// a soma da idade com o tempo de contribuição do homem precisa ser de no mulher 85 anos, enquanto a da homem precisa ter no mínimo 95 anos na soma;

if(sexo=="F"){
 if(contribuicao>=30){
    if(soma>=85){
        console.log('Maria, você pode se aposentar.');
    }  
    else{
        console.log("Maria, você ainda não pode se aposentar.");
    }
    } 
  else {
     console.log("Maria, você ainda não pode se aposentar.");
} 
} 
else{ 
    console.log("Error:esse gênero não é o que atende aos devidos requisitos.");
}
  


    