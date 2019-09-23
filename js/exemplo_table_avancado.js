function selecionaRegistro(elementoRow) {
	   
	a = elementoRow.cells.item(0).innerHTML; 	
	b = elementoRow.cells.item(1).innerHTML; 	
	c = elementoRow.cells.item(2).innerHTML; 	
	d = elementoRow.cells.item(3).innerHTML; 	
	
	document.getElementById("dados_id").innerHTML = a;
	document.getElementById("dados_company").value = b;
	document.getElementById("dados_contact").value = c;
	document.getElementById("dados_country").value = d;
	
	document.getElementById("divDados").style.display = "block";
}

function  esconder() {	
	document.getElementById("divDados").style.display = "nome";
}

function load() {	  	
	
	// associa o evento click em todas as linhas (tr)  da tabela
	var linhas = document.querySelectorAll("tr");
	
	linhas.forEach(function (linha) {
	  linha.addEventListener("click", function(){selecionaRegistro(linha)});
	});	
}

