var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var peso = paciente.querySelector('.info-peso').textContent;
  var altura = paciente.querySelector('.info-altura').textContent;
  var campoImc = paciente.querySelector('.info-imc');

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("Peso inválido!");
    pesoValido = false;
    campoImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaValida) {
    console.log("Altura inválida!");
    alturaValida = false;
    campoImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }


  if(pesoValido && alturaValida){
    paciente.querySelector('.info-imc').textContent = calculaImc(peso, altura);
  }
}

function calculaImc(peso, altura){
  var imc = peso/(altura*altura);
  return imc.toFixed(2);
}


function validaPeso(peso){
  if(peso > 0 && peso < 500){
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura < 3.0){
    return true;
  } else {
    return false;
  }
}
