// ===========================================
// TôBem · Landing Page · Web Development
// Gabriel Almeida (RM 575525) e Anne Bortoli (RM 574750)
// ===========================================

// ---------- Modo claro/escuro ----------
const botaoTema = document.getElementById("botao-tema");
const iconeTema = document.getElementById("icone-tema");
const textoTema = document.getElementById("texto-tema");

function trocarTema() {
  document.body.classList.toggle("tema-escuro");

  if (document.body.classList.contains("tema-escuro")) {
    iconeTema.classList.remove("fa-moon");
    iconeTema.classList.add("fa-sun");
    textoTema.textContent = "Modo claro";
  } else {
    iconeTema.classList.remove("fa-sun");
    iconeTema.classList.add("fa-moon");
    textoTema.textContent = "Modo escuro";
  }
}

botaoTema.addEventListener("click", trocarTema);
