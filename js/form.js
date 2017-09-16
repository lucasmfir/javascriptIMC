var tabela = document.querySelector('#tabela-pacientes');
var botao = document.querySelector('#adicionar-paciente');

botao.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector('#form-adicionar');
  var paciente = obtemPacienteForm(form);
  var pacienteTr = montaPacienteTr(paciente);

  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    mostraErros(erros);
    return;
  }

  tabela.appendChild(pacienteTr);
  form.reset();
  var ul = document.querySelector('#mensagens-erros');
  ul.innerHTML = '';

})


function obtemPacienteForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTd(dado, classe){
  var td = document.createElement('td');
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function montaPacienteTr(paciente){
  var tr = document.createElement('tr');
  tr.classList.add('paciente')

  tr.appendChild(montaTd(paciente.nome, 'info-nome'));
  tr.appendChild(montaTd(paciente.peso, 'info-peso'));
  tr.appendChild(montaTd(paciente.altura, 'info-altura'));
  tr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  tr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return tr;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length <= 0) erros.push('Nome inválido');
  if(paciente.peso.length <= 0 || !validaPeso(paciente.peso)) erros.push('Peso inválido');
  if(paciente.altura.leng <= 0 || !validaAltura(paciente.altura)) erros.push('Altura inválida');
  if(paciente.gordura.length <= 0) erros.push('Gordura inválida');

  return erros;
}

function mostraErros(erros){
  var ul = document.querySelector('#mensagens-erros');
  ul.innerHTML = '';
  erros.forEach(function(erro){
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}
