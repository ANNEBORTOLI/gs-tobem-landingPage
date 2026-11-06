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

// ---------- Regras de decisão (as mesmas do Python e do Edge) ----------
const TEMP_ATENCAO = 28;
const TEMP_PERIGO = 32;
const UMID_ATENCAO_BAIXA = 30;
const UMID_PERIGO_BAIXA = 20;
const UMID_ALTA = 85;
const HORAS_ATENCAO = 12; // no Wokwi: 24 s (1 h = 2 s)
const HORAS_PERIGO = 13; // no Wokwi: 26 s

// Mesma ordem de prioridade do Edge: a primeira condição verdadeira vence.
// Devolve [estado, mensagem], como no Python.
function classificar(temperatura, umidade, horasCheckin) {
  if (horasCheckin >= HORAS_PERIGO) {
    return ["PERIGO", "SEM CHECK-IN 13h"];
  } else if (temperatura >= TEMP_PERIGO) {
    return ["PERIGO", "CALOR PERIGOSO!"];
  } else if (umidade < UMID_PERIGO_BAIXA) {
    return ["PERIGO", "AR MUITO SECO!"];
  } else if (umidade > UMID_ALTA && temperatura >= TEMP_ATENCAO) {
    return ["PERIGO", "CALOR + UMIDADE!"];
  } else if (horasCheckin >= HORAS_ATENCAO) {
    return ["ATENÇÃO", "Faca check-in"];
  } else if (temperatura >= TEMP_ATENCAO) {
    return ["ATENÇÃO", "Calor: beba agua"];
  } else if (umidade < UMID_ATENCAO_BAIXA) {
    return ["ATENÇÃO", "Ar seco"];
  } else if (umidade > UMID_ALTA) {
    return ["ATENÇÃO", "Ar muito umido"];
  } else {
    return ["OK", "Tudo bem"];
  }
}

// ---------- Simulador do aparelho ----------
const controleTemperatura = document.getElementById("temperatura");
const controleUmidade = document.getElementById("umidade");
const controleHoras = document.getElementById("horas");

const valorTemperatura = document.getElementById("valor-temperatura");
const valorUmidade = document.getElementById("valor-umidade");
const valorHoras = document.getElementById("valor-horas");

const visor = document.getElementById("visor");
const visorLeitura = document.getElementById("visor-leitura");
const visorMensagem = document.getElementById("visor-mensagem");
const visorIcone = document.getElementById("visor-icone");
const visorEstado = document.getElementById("visor-estado");

function atualizarSimulador() {
  // O valor do controle vem como texto: Number() transforma em número
  const temperatura = Number(controleTemperatura.value);
  const umidade = Number(controleUmidade.value);
  const horas = Number(controleHoras.value);

  // Valores ao lado do nome de cada controle
  valorTemperatura.textContent = temperatura + " °C";
  valorUmidade.textContent = umidade + " %";
  valorHoras.textContent = horas + " h";

  // Mesma decisão do aparelho
  const resultado = classificar(temperatura, umidade, horas);
  const estado = resultado[0];
  const mensagem = resultado[1];

  // Visor: as duas linhas do LCD
  visorLeitura.textContent = temperatura.toFixed(1) + "C " + umidade + "%";
  visorMensagem.textContent = mensagem;
  visorEstado.textContent = estado;

  // Tira a classe e o ícone do estado anterior
  visor.classList.remove("estado-ok", "estado-atencao", "estado-perigo");
  visorIcone.classList.remove(
    "fa-circle-check",
    "fa-triangle-exclamation",
    "fa-bell"
  );

  // Coloca a classe e o ícone do estado atual
  if (estado === "PERIGO") {
    visor.classList.add("estado-perigo");
    visorIcone.classList.add("fa-bell");
  } else if (estado === "ATENÇÃO") {
    visor.classList.add("estado-atencao");
    visorIcone.classList.add("fa-triangle-exclamation");
  } else {
    visor.classList.add("estado-ok");
    visorIcone.classList.add("fa-circle-check");
  }
}

// O evento "input" acontece enquanto o controle é arrastado
controleTemperatura.addEventListener("input", atualizarSimulador);
controleUmidade.addEventListener("input", atualizarSimulador);
controleHoras.addEventListener("input", atualizarSimulador);

// Mostra o estado inicial ao abrir a página
atualizarSimulador();
