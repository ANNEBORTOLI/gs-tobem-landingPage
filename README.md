# 💚 TôBem · Landing Page

> Check-in diário para idosos que moram sozinhos em Copacabana. Um toque de manhã, outro à noite. Se o aviso não chega, o condomínio vai conferir.

**Disciplinas:** Front-end Design (Prof. Fábio Alencar) e Web Development (Prof. Igor Araújo)
**FIAP · Global Solution 2026.2 · CitizenTech · Engenharia de Software 1º ano · Rio de Janeiro**

## 📋 Ficha da CitizenTech

| Campo                         | Resposta                                                                                                                                                                                            |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 💚 **Nome da CitizenTech**    | **TôBem**                                                                                                                                                                                           |
| 📍 **Cidade e bairro**        | Rio de Janeiro (RJ), Copacabana                                                                                                                                                                     |
| 👵 **Cidadão beneficiado**    | Pessoas idosas (60+) que moram sozinhas em prédios de Copacabana, um dos bairros com maior proporção de idosos da cidade. Indiretamente, também os familiares, o síndico, o porteiro e os vizinhos. |
| ⚠️ **Problema, em uma frase** | Idosos que moram sozinhos podem sofrer quedas ou mal-estar dentro de casa e ficar horas, ou até um dia inteiro, sem socorro, porque ninguém percebe a tempo que algo está errado.                   |

### 🔄 Como funciona

O TôBem não tenta detectar a queda. Ele percebe a **falta do check-in**: um idoso caído e consciente, que não consegue chegar ao telefone, também não confirma que está bem, e isso já dispara o aviso.

1. ⏰ **Lembrete:** às 8h e às 20h, o aparelho no apartamento acende uma luz e toca um bipe curto.
2. 💚 **Check-in com um toque:** o idoso aperta o botão do aparelho ou o botão verde "Tô bem!" na página. Não precisa digitar nada.
3. 🔔 **Aviso ao condomínio:** com 12 h sem check-in, o idoso recebe o lembrete (ATENÇÃO). Com 13 h, ou seja, 1 h de tolerância, a portaria é avisada de qual apartamento conferir (PERIGO). Se ninguém responder no prazo, o aviso segue para vizinhos cadastrados e para um familiar.
4. 🤝 **Verificação:** quem atendeu registra o resultado: "está tudo bem" ou "precisou de ajuda".
5. 🌡️ **Calor:** o sensor mede a temperatura e a umidade da casa e avisa o idoso quando o ambiente fica perigoso.

Os estados são **OK**, **ATENÇÃO** e **PERIGO**, com as mesmas regras e mensagens no aparelho, no Python e na página.

### 🧩 O que cada parte faz

| Parte              | Disciplina                         | O que faz                                                                                                                                                                             |
| ------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📟 **Dispositivo** | Edge Computing                     | Arduino Uno simulado no Wokwi, com sensor DHT22, botão de check-in, LEDs, buzzer e LCD. Funciona sozinho, sem internet. [Ver no Wokwi](https://wokwi.com/projects/479775938984317953) |
| 🐍 **Cérebro**     | Computational Thinking with Python | Classifica as leituras simuladas de um dia com `if/elif/else` e calcula o resumo.                                                                                                     |
| 📐 **Modelo**      | Matemática                         | Parábola do calor ao longo do dia e cálculo do indicador de impacto.                                                                                                                  |
| 🎨 **Página**      | Front-end Design                   | Landing page que explica o problema, a jornada, o impacto e os ODS.                                                                                                                   |
| ⚙️ **Interação**   | Web Development                    | Modo claro/escuro, botão "Tô bem!" funcionando e simulador do aparelho com a regra de decisão em JavaScript.                                                                          |
| 🧭 **Experiência** | Experiência do usuário             | Escopo, requisitos, backlog e priorização pensados para idosos.                                                                                                                       |
| 🎬 **Pitch**       | Storytelling                       | Vídeo de até 3 minutos apresentando a solução.                                                                                                                                        |

### 🔗 Link do repositório

| Disciplina                         | Repositório                                             |
| ---------------------------------- | ------------------------------------------------------- |
| Computational Thinking with Python | _(https://github.com/ANNEBORTOLI/gs-tobem-python-fiap)_ |
| Edge Computing                     | _(https://wokwi.com/projects/479775938984317953)_       |
| Front-end Design e Web Development | _(https://github.com/ANNEBORTOLI/gs-tobem-landingPage)_ |
| Matemática                         | _(https://github.com/ANNEBORTOLI/gs-tobem-landingPage)_ |

### 📈 Indicador de impacto

**Tempo entre a falta do check-in e a verificação presencial do idoso.** Hoje, no caso real que inspirou o projeto, cerca de **24 horas**. Meta do protótipo: **até 1 hora**, uma redução de 95,8%.

Indicadores complementares: percentual de check-ins feitos no horário, por semana, e percentual de alertas atendidos dentro do prazo.

### 🌍 ODS conectados

| ODS                                         | Como o TôBem contribui                                                                                                           |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **3 · Saúde e bem-estar**                   | Reduz o tempo até o socorro depois de quedas e mal-estar, e diminui o isolamento do idoso.                                       |
| **10 · Redução das desigualdades**          | Meta 10.2: promove a inclusão de todos, independentemente da idade. O idoso continua morando sozinho, com autonomia e segurança. |
| **11 · Cidades e comunidades sustentáveis** | Torna o lugar onde se mora mais seguro e inclusivo, usando a estrutura que o prédio já tem: portaria, síndico e vizinhos.        |

---

## 👥 Integrantes

| Nome            | RM     |
| --------------- | ------ |
| Gabriel Almeida | 575525 |
| Anne Bortoli    | 574750 |

---

## 🌐 Sobre a página

A landing page apresenta o TôBem a quem decide adotar a solução no prédio: o **síndico** e os **familiares** dos idosos. Ela explica o problema, mostra como o sistema funciona, deixa o visitante experimentar o app e o aparelho, e apresenta o impacto esperado e os ODS.

| Seção                | O que mostra                                                     |
| -------------------- | ---------------------------------------------------------------- |
| 🏠 **Início**        | A proposta do TôBem, sobre a foto de uma moradora na janela      |
| ⚠️ **O problema**    | O caso real que inspirou o projeto: 24 horas até alguém perceber |
| 🔄 **Como funciona** | A jornada em 4 passos: lembrete, toque, aviso e verificação      |
| 📱 **O app**         | O botão "Tô bem!", os três estados e o simulador do aparelho     |
| 📈 **Impacto**       | O indicador de 24 h para até 1 h e os ODS 3, 10 e 11             |
| 👩‍💻 **Equipe**        | Quem fez o projeto                                               |

## 📁 Estrutura da pasta

```
site/
├── index.html         # a página
├── script.js          # interações em JavaScript
├── style.css          # estilos e variáveis de cor
├── img/               # fotos e ilustrações da página
├── README.md          # este arquivo
├── AI.md              # uso de inteligência artificial
└── integrantes.txt    # integrantes
```

## ▶️ Como abrir

1. Baixe o repositório ou o `.zip` e abra a pasta `site/`.
2. Dê dois cliques no `index.html`. Não é preciso instalar nada.

> 💡 A fonte e os ícones são carregados da internet. Sem conexão, a página funciona, mas com a fonte padrão do sistema e sem os ícones.

---

## ✨ Interações

### 🌙 1. Modo claro e escuro

O botão **"Modo escuro"** no menu troca o tema da página inteira. O ícone de lua vira sol, e o texto vira "Modo claro".

**Como funciona:** o JavaScript coloca ou tira a classe `tema-escuro` do `<body>` com `classList.toggle`. O CSS só troca os valores das variáveis de cor, e todas as regras que usam essas variáveis mudam juntas.

### 💚 2. Botão "Tô bem!"

Na seção **O app**, o botão redondo verde registra o check-in do idoso:

- ⏰ Mostra a hora: "Check-in feito às 08:12. Obrigado!".
- ✅ Troca o coração por um sinal de certo e fica desativado, para evitar toques repetidos.
- 📅 Informa o próximo check-in: hoje às 8h, hoje às 20h ou amanhã às 8h.
- 👋 Ao abrir a página, a saudação muda conforme a hora: "Bom dia!", "Boa tarde!" ou "Boa noite!".

> 🔄 Para repetir a demonstração, recarregue a página com `F5`.

### 🎛️ 3. Simulador do aparelho

Abaixo do celular, o visitante arrasta três controles (temperatura, umidade e horas desde o check-in) e vê na hora o que o aparelho mostraria: as duas linhas do visor, o LED aceso e o selo do estado.

Os controles deslizantes foram escolhidos de propósito: **não existe entrada inválida**, porque o usuário não digita nada.

---

## 🧠 Conceitos de JavaScript aplicados

| Conceito               | Onde aparece                                                                            |
| ---------------------- | --------------------------------------------------------------------------------------- |
| **Funções**            | `trocarTema()`, `fazerCheckin()`, `classificar()`, `atualizarSimulador()`, entre outras |
| **Manipulação do DOM** | `getElementById`, `textContent`, `classList` e `disabled`                               |
| **Eventos**            | `addEventListener` com `"click"` nos botões e `"input"` nos controles                   |
| **Condicionais**       | `if/else if/else` na saudação, no próximo check-in e nas 9 regras de decisão            |
| **Operadores**         | Comparação (`>=`, `<`, `>`, `===`) e lógico (`&&`)                                      |
| **Data e hora**        | `new Date()`, `getHours()` e `getMinutes()` no check-in                                 |

## 🚦 Regras de decisão

A função `classificar()` testa as regras de cima para baixo e mostra a primeira verdadeira. É a mesma regra do aparelho (Edge) e do programa em Python.

| Ordem | Condição                                                 | Estado     | Visor            |
| ----- | -------------------------------------------------------- | ---------- | ---------------- |
| 1     | 13 h ou mais sem check-in                                | 🔴 PERIGO  | SEM CHECK-IN 13h |
| 2     | Temperatura de 32 °C ou mais                             | 🔴 PERIGO  | CALOR PERIGOSO!  |
| 3     | Umidade abaixo de 20 %                                   | 🔴 PERIGO  | AR MUITO SECO!   |
| 4     | Umidade acima de 85 % **e** temperatura de 28 °C ou mais | 🔴 PERIGO  | CALOR + UMIDADE! |
| 5     | 12 h ou mais sem check-in                                | 🟡 ATENÇÃO | Faca check-in    |
| 6     | Temperatura de 28 °C ou mais                             | 🟡 ATENÇÃO | Calor: beba agua |
| 7     | Umidade abaixo de 30 %                                   | 🟡 ATENÇÃO | Ar seco          |
| 8     | Umidade acima de 85 %                                    | 🟡 ATENÇÃO | Ar muito umido   |
| 9     | Nenhuma das anteriores                                   | 🟢 OK      | Tudo bem         |

> 🔤 As mensagens do visor não têm acento porque são os mesmos textos do LCD do aparelho, que não mostra acentos.

## 🔗 Integração com as outras disciplinas

| Disciplina            | Como se conecta                                                                                                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📟 **Edge Computing** | O simulador imita o visor do Arduino Uno: a primeira linha mostra temperatura e umidade como o `lcd.print`, e os LEDs e mensagens são os mesmos. [Ver no Wokwi](https://wokwi.com/projects/479775938984317953) |
| 🐍 **Python**         | A regra de decisão foi reescrita em JavaScript com as mesmas constantes, a mesma ordem e os mesmos 14 casos de teste.                                                                                          |
| 📐 **Matemática**     | O indicador de impacto (de 24 h para até 1 h, meta de 95,8 % de redução) vem do relatório técnico.                                                                                                             |
| 🧩 **Experiência**    | O check-in com um único toque e sem digitação segue os requisitos pensados para idosos com pouca experiência em aplicativos.                                                                                   |

## ♿ Acessibilidade

O público do TôBem são pessoas idosas, então a página foi pensada para elas:

- 🔠 **Fonte Atkinson Hyperlegible**, criada para pessoas com baixa visão, com texto base de 20 px.
- 🎨 **Contraste alto** entre texto e fundo, também no modo escuro.
- 🖱️ **Botões grandes**, com ícone e texto juntos.
- ⌨️ **Navegação pelo teclado**, com contorno amarelo visível em links e botões.
- 🔊 **Leitores de tela:** textos alternativos nas imagens e anúncio da confirmação do check-in com `aria-live`.
- 🚦 **Estados com ícone e palavra**, e não só cor, para quem tem daltonismo.

## 🚧 Limitações e melhorias futuras

- 💾 O check-in **não é salvo nem enviado**: ao recarregar a página, tudo volta ao início. Em uma versão real, o aviso iria para a portaria por um servidor.
- 🌙 O tema escolhido **não é lembrado** ao recarregar a página.
- 🔌 A página e o aparelho **não trocam dados**: os dois seguem as mesmas regras, mas funcionam separados.
- 🌡️ O simulador mostra o valor dos controles na hora. O aparelho real suaviza a leitura da temperatura, então pode demorar alguns segundos para mudar de estado.

## 🖼️ Créditos

- 📸 **Imagens:** geradas com Gemini (Google). Não são fotos de moradores reais.
- ✏️ **Ilustrações da jornada:** SVG criados para o projeto.
- 🔣 **Ícones:** [Font Awesome Free](https://fontawesome.com/).
- 🔠 **Fonte:** [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible), do Braille Institute.
- 📊 **Dados:** todos simulados.

## 🤖 Uso de IA

O uso de inteligência artificial no Front-end e no Web Development está descrito em [`AI.md`](AI.md).
