# 🤖 Uso de Inteligência Artificial · Front-end e Web Development

**Projeto:** TôBem · FIAP Global Solution 2026.2 · CitizenTech
**Integrantes:** Gabriel Almeida (RM 575525) e Anne Bortoli (RM 574750)

## 🧰 Ferramentas usadas

| Ferramenta             | Para quê                                                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Claude (Anthropic)** | Planejar a página, propor o HTML, o CSS e o JavaScript por etapas, explicar o código, sugerir testes, desenhar as ilustrações SVG da jornada e otimizar o peso das fotos |
| **Gemini (Google)**    | Gerar as três fotos da página: a moradora na janela, o síndico na porta e os vizinhos no terraço                                                                         |

## 📝 Como trabalhamos

Definimos três regras no início:

1. **Código incremental:** a IA passava uma seção ou funcionalidade por vez, e nós colávamos, testávamos no navegador e fazíamos o commit antes de seguir.
2. **Só o que vimos em aula:** no CSS, Flexbox e variáveis; no JavaScript, `getElementById`, `addEventListener`, `classList` e `Date`. Antes de cada disciplina, informamos à IA o que já conhecíamos.
3. **Um teste para cada parte:** testes visuais no Front-end e funções de teste no Console no Web Development.

Abaixo estão as principais decisões. Os prompts foram levemente editados para corrigir digitação.

---

## 🎨 Front-end Design

### Público e simplicidade

> A princípio estamos falando de um aplicativo que será usado por pessoas idosas, que talvez tenham pouca habilidade com aplicativos. Sendo assim, vamos criar algo simples e eficiente pensando em acessibilidade. Vou utilizar Font Awesome para os ícones, mas você poderá propor melhorias.

**Resultado:** a IA propôs a fonte Atkinson Hyperlegible, letra grande, contraste alto e cores de estado iguais aos LEDs do aparelho. Escolhemos o Font Awesome para os ícones.

### Check-in sem digitação

> Antes de escrever qualquer coisa, vamos conversar sobre como deixar a opção de check-in com menos erros de input. Pensei em usar um botão do tipo range para coletar temperatura, umidade a hora que o check-in foi feito.

**Resultado:** a IA sugeriu eliminar a digitação: a hora vem do relógio, a temperatura e a umidade vêm do sensor, e o idoso só toca em um botão.

### Botão redondo

> Pensei na ideia de um botão redondo e vermelho para fazer o check-in. Algo grande e que fique fácil e intuitivo para o idoso. O que acha?

**Resultado:** a ideia do botão redondo é ótima. A IA apontou que o vermelho já significa PERIGO no sistema e lembra um botão de emergência. Adotamos o botão redondo em **verde**, a cor do estado OK.

### Imagens

> Prefiro não usar as imagens de terminal, afinal não é visualmente atraente. Acredito que poderíamos explicar com imagens como funciona a trajetória do usuário dentro do app. Você poderia criar essa imagem educativa? Pode ser um svg.

**Resultado:** a IA desenhou três ilustrações SVG da jornada. As fotos de pessoas foram geradas por nós no Gemini, e a IA as avaliou, sugeriu em que seção usar cada uma e reduziu o peso delas.

### Escolhas de layout

> Abaixo segue o esqueleto em HTML com textos que queremos incluir em casa seção. Verifique se está semântico e pode indicar melhorias.

**Resultado:** a página foi feita para a tela do computador, utilizou tags semânticas. A AI avaliou os textos e fez sugestões de melhoria.

### Dado sobre Copacabana

> Quero acrescentar algum número sobre idosos em Copacabana, como a proporção de idosos que moram sozinhos no bairro. Ele precisa vir de uma fonte pública, como o IBGE, com o link na página.

**Resultado:** a IA pesquisou e não encontrou a proporção de idosos que moram sozinhos por bairro. Encontrou o percentual de idosos em Copacabana no Censo 2022. Decidimos manter o texto genérico na página e usar esse dado no pitch.

### Equipe e rodapé

> Na seção equipe, vamos usar nossas fotos do GitHub.

> O link do footer deve abrir em uma outra página, com blank.

---

## ⚙️ Web Development

### Planejamento

> Vamos fazer 2 interações: o modo claro/escuro, o botão "Tô bem!" funcionando. Você sugere fazer mais alguma coisa para a matéria de Web Development?

**Resultado:** a AI sugeriu um simulador do aparelho com a regra de decisão do Python reescrita em JavaScript. Para o simulador, sugeriu controles deslizantes, para não existir entrada inválida.

### Acessibilidade

> De forma objetiva, explique o que é `aria-live="polite"` e por que devemos usar na tag `<p id="instrucao">`.

**Resultado:** entendemos que o atributo faz o leitor de tela anunciar a confirmação do check-in.

---

## ✅ O que garantimos

- Todo o código foi colado, testado e entendido pela equipe, passo a passo, com um commit por etapa.
- As fotos são creditadas no rodapé da página como geradas com Gemini, para não parecerem fotos de moradores reais.
