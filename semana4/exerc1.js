class Pessoa {
  constructor(nome, email, dataNasc, telefoneFixo, telefoneCelular) {
    this.nome = nome;
    this.email = email;
    this.dataNasc = dataNasc;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
  }

  validarDados() {
    let camposObrigatorios = [
      "nome",
      "email",
      "dataNasc",
      "telefoneFixo",
      "telefoneCelular",
    ];

    for (let campo of camposObrigatorios) {
      if (!this[campo]) {
        return false;
      }
    }
    return true;
  }
}

class Aluno extends Pessoa {
  constructor(
    nome,
    email,
    dataNasc,
    telefoneFixo,
    telefoneCelular,
    matricula,
    curso
  ) {
    super(nome, email, dataNasc, telefoneFixo, telefoneCelular);
    this.matricula = matricula;
    this.curso = curso;
  }

  validarDados() {
    super.validarDados();

    let camposObrigatorios = ["matricula", "curso"];

    for (let campo of camposObrigatorios) {
      if (!this[campo]) {
        return false;
      }
    }
    return true;
  }
}

class Professor extends Pessoa {
  constructor(
    nome,
    email,
    dataNasc,
    telefoneFixo,
    telefoneCelular,
    area,
    lattes
  ) {
    super(nome, email, dataNasc, telefoneFixo, telefoneCelular);
    this.area = area;
    this.lattes = lattes;
  }

  validarDados() {
    super.validarDados();

    let camposObrigatorios = ["area", "lattes"];

    for (let campo of camposObrigatorios) {
      if (!this[campo]) {
        return false;
      }
    }
    return true;
  }
}

let usuarios = [];

document.addEventListener("DOMContentLoaded", () => {
  const professorInputs = document.querySelectorAll(
    '[name="area"], [name="lattes"]'
  );
  const alunoInputs = document.querySelectorAll('[name="curso"]');

  alunoInputs.forEach(
    (alunoInput) => (alunoInput.style.display = "none")
  );
  professorInputs.forEach(
    (professorInput) => (professorInput.style.display = "none")
  );

  const tipoUsuarioInput = document.getElementsByName("tipoUsuario");

  tipoUsuarioInput.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.value === "professor") {
        professorInputs.forEach(
          (professorInput) => (professorInput.style.display = "block")
        );
        alunoInputs.forEach(
          (alunoInput) => (alunoInput.style.display = "none")
        );
      } else if (input.value === "aluno") {
        professorInputs.forEach(
          (professorInput) => (professorInput.style.display = "none")
        );
        alunoInputs.forEach(
          (alunoInput) => (alunoInput.style.display = "block")
        );
      }
    });
  });
});
