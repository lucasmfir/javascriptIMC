var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click", function(){

	var trPacientes = document.getElementsByClassName("paciente");

	percorreArray(trPacientes, calculaImc);

	function calculaImc(trPaciente){
		var tdNome = trPaciente.getElementsByClassName("info-nome")[0];
		var tdPeso = trPaciente.getElementsByClassName("info-peso")[0];
		var tdAltura = trPaciente.getElementsByClassName("info-altura")[0];

		var paciente = {"nome" : tdNome.textContent , 
						"peso": tdPeso.textContent , 
						"altura" : tdAltura.textContent,
						"calcImc" : function(){
							if (this.altura != 0){
								var imc = this.peso/(this.altura*this.altura);
								return imc;
							} else {
								console.log("altura igual a zero");
							}
						}};

		var imc = paciente.calcImc();

		var tdImc = trPaciente.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc; 
	}

})






botao.addEventListener("click", function(){
	console.log("calculando IMCS");
});

