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

// ---------- Check-in "Tô bem!" ----------
const saudacao = document.getElementById("saudacao");
const instrucao = document.getElementById("instrucao");
const botaoTobem = document.getElementById("botao-tobem");
const iconeTobem = document.getElementById("icone-tobem");
const textoTobem = document.getElementById("texto-tobem");
const proximoCheckin = document.getElementById("proximo-checkin");

// Escolhe a saudação conforme a hora (0 a 23)
function saudacaoPorHora(hora) {
  if (hora < 5) {
    return "Boa noite!";
  } else if (hora < 12) {
    return "Bom dia!";
  } else if (hora < 18) {
    return "Boa tarde!";
  } else {
    return "Boa noite!";
  }
}

// Coloca o zero na frente: 8 vira "08"
function doisDigitos(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return "" + numero;
  }
}

// Diz quando é o próximo check-in, a partir da hora do check-in feito agora
function textoProximoCheckin(hora) {
  if (hora < 8) {
    return "Próximo check-in: hoje às 8h";
  } else if (hora < 20) {
    return "Próximo check-in: hoje às 20h";
  } else {
    return "Próximo check-in: amanhã às 8h";
  }
}

function fazerCheckin() {
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  instrucao.textContent =
    "Check-in feito às " +
    doisDigitos(hora) +
    ":" +
    doisDigitos(minuto) +
    ". Obrigado!";
  instrucao.classList.add("celular-confirmado");

  iconeTobem.classList.remove("fa-heart");
  iconeTobem.classList.add("fa-check");
  textoTobem.textContent = "Feito!";
  botaoTobem.disabled = true;

  proximoCheckin.textContent = textoProximoCheckin(hora);
}

// Ao abrir a página: saudação conforme a hora atual
saudacao.textContent = saudacaoPorHora(new Date().getHours());

botaoTobem.addEventListener("click", fazerCheckin);
