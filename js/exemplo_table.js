
function exibe(line,col) {
	   
	valor = document.getElementById("myTable").rows[line].cells.item(col).innerHTML; 
	
	document.getElementById("empresa_sel").innerHTML = valor;
	//alert('Você selecioneou a empresa: ' + valor);

}

function carregou() {	  
	//alert('A página foi carregada com sucesso !');
}

