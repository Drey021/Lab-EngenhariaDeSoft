function toggleForm() {
  var tipoUsuario = document.getElementById("tipoUsuario").value;
  var formProfessor = document.getElementById("formProfessor");
  var formAluno = document.getElementById("formAluno");

  if (tipoUsuario === "professor") {
    formProfessor.style.display = "block";
    formAluno.style.display = "none";
  } else {
    formAluno.style.display = "block";
    formProfessor.style.display = "none";
  }
}

function mostrarValores() {
  var tipoUsuario = document.getElementById("tipoUsuario").value;
  var form = tipoUsuario === "professor" ? "formProfessor" : "formAluno";
  var formData = document.getElementById(form).elements;
  
  var valores = "";
  for (var i = 0; i < formData.length; i++) {
    valores += formData[i].name + ": " + formData[i].value + "\n";
  }

  alert(valores);
}

function voltarPaginaAnterior() {
  window.history.back();
}
function limparFormulario() {
  var tipoUsuario = document.getElementById("tipoUsuario").value;
  var form = tipoUsuario === "professor" ? "formProfessor" : "formAluno";
  var formData = document.getElementById(form).elements;

  for (var i = 0; i < formData.length; i++) {
    formData[i].value = "";
  }
}