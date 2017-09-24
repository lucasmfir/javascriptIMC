var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener("dblclick", function(event){
  let paciente = event.target.parentNode;
  paciente.classList.add('fade-out');

  setTimeout(function (){
    paciente.remove();
  }, 500);

})
