var botaoBusca = document.querySelector('#buscar-pacientes');

botaoBusca.addEventListener('click', function(){
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', function(){
    console.log('Buscando pacientes...');

    if (xhr.status == 200) {
      var resposta = this.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
        adicionaPacienteTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }

  });

  xhr.send();

})
