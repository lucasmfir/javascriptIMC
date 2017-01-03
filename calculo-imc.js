//document.getElementsByTagName("tr");  pega todos os elementos a partir da tag
/*
var tdPeso1 = document.getElementById("peso-1");
var tdAltura1 = document.getElementById("altura-1");

var peso1 = tdPeso1.textContent;
var altura1 = tdAltura1.textContent;

var paciente1 = {"peso" : peso1, "altura" : altura1};
//paciente.peso = paciente["peso"]

var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");

var peso2 = tdPeso2.textContent;
var altura2 = tdAltura2.textContent;

var paciente2 = {"peso" : peso2, "altura" : altura2};

//paciente.peso = paciente["peso"]




var pacientes = [paciente1, paciente2];
var posicao = 0;
console.log("aki");
*/
var trPacientes = document.getElementsByClassName("paciente");


for(var posicao = 0; posicao < trPacientes.length; posicao++){
	var trPaciente = trPacientes[posicao];

	var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
	var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
	var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];

	var paciente = {"nome" : tdNome.textContent , "peso": tdPeso.textContent , "altura" : tdAltura.textContent};

	if (tdAltura != 0){
		var imc = paciente.peso/(paciente.altura*paciente.altura);
		var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc; 
	} else {
		console.log("altura igual a zero");
	}

}