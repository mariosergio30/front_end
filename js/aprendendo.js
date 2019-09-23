var calculo = 10 + 20;
c = "Resultado do Calculo foi: ";

texto = "Bom dia !";
	 
function carregou() {	  
	// alert('A página foi carregada com sucesso !');
	 document.getElementById("area").addEventListener("mousemove", saidaComInnerELog); 
	 
	 document.getElementById("botao1").addEventListener("click", saidaComAlert);
}

 
 function saidaComInnerELog() {
    
     calculo = calculo + 1;
	 
 	 elemento =  document.getElementById("resultado");

     elemento.innerHTML = calculo;    
     
    // window.alert(c + calculo);     
     console.log(c + calculo);        
 }
 

 function saidaComAlert() {
         
     window.alert(texto);     
        
 }


 function saidaComWrite() {
     document.write("<h1>Saída com documento.write(), substitui todo o conteúdo existente pelo Novo</h1>!"); 
 }











