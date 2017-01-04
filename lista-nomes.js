var trPacientes = document.getElementsByClassName("paciente");

percorreArray(trPacientes ,function(trPaciente){
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

	console.log(paciente.nome); 
	});



