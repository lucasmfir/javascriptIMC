

//document.getElementsByTagName("table")[0]
//document.querySelectorAll("table")  retorna array
var tabela = document.querySelector("table");



var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){

	event.preventDefault();

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	if(campoNome.value == "" || campoPeso.value == "" || campoAltura.value == ""){ 
		alert("Todos os campos devem estar preenchidos.");

	}else{	
		var novoPaciente = "<tr class='paciente'>" +
							"<td class='info-nome'>" + campoNome.value +"</td>" +
							"<td class='info-peso'>" + campoPeso.value +"</td>" +
							"<td class='info-altura'>" + campoAltura.value +"</td>" +
							"<td class='info-imc'></td>" +
						"</tr>";
		tabela.innerHTML = tabela.innerHTML + novoPaciente;

		campoNome.value = "";
		campoPeso.value = "";
		campoAltura.value = "";
	}

	});