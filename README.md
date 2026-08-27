# 🚀 Sprint 3 — Web Development

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como parte da **Sprint 3 de Web Development da FIAP**, dando continuidade ao projeto desenvolvido nas sprints anteriores.

Nesta etapa, o protótipo anteriormente desenvolvido em **HTML, CSS e JavaScript** foi migrado para **React**, utilizando componentes funcionais, `import` e `export`, organização hierárquica de componentes e funcionalidades desenvolvidas com JavaScript.

O projeto apresenta o conceito do **SnapFlow AI**, uma solução que utiliza Inteligência Artificial para tornar a experiência de fotografia mais intuitiva, auxiliando o usuário na identificação do cenário e na escolha das melhores configurações para capturar uma imagem.

A aplicação foi desenvolvida utilizando **React.js e Vite**, mantendo a identidade visual e a proposta definida no protótipo das sprints anteriores.

---

# 🎯 Objetivo

O principal objetivo desta Sprint é realizar a migração do protótipo desenvolvido anteriormente para uma aplicação utilizando **React**, aplicando os principais conceitos de desenvolvimento de interfaces baseadas em componentes.

Durante o desenvolvimento foram aplicados:

* Componentes funcionais;
* Estrutura de componentes pai e filho;
* Utilização de `import` e `export`;
* JSX;
* Hooks do React, como `useState`, `useEffect` e `useRef`;
* Armazenamento de informações utilizando `localStorage`;
* Operações matemáticas utilizando o objeto `Math`;
* Utilização de câmera do dispositivo;
* Interface responsiva;
* Organização modular do código;
* Versionamento utilizando Git e GitHub;
* Deploy da aplicação utilizando Vercel.

---

# 📱 Sobre o SnapFlow AI

O **SnapFlow AI** é uma proposta de câmera inteligente desenvolvida para tornar a experiência de fotografia mais simples e intuitiva.

A solução busca analisar o contexto da fotografia e apresentar informações ao usuário sobre elementos como:

* Tipo de cena;
* Foco;
* Iluminação;
* Estabilidade;
* Estado da Inteligência Artificial.

A aplicação também possui uma demonstração interativa que simula o funcionamento da análise inteligente da câmera.

---

# 🔄 Migração do Protótipo para React

Nas sprints anteriores, o projeto foi desenvolvido inicialmente utilizando **HTML, CSS e JavaScript**.

Na Sprint 3, essa estrutura foi migrada para **React**, mantendo como referência o protótipo desenvolvido anteriormente.

Durante a migração foram realizadas as seguintes adaptações:

* Transformação das estruturas HTML em componentes React;
* Separação das diferentes partes da interface em componentes;
* Utilização de JSX;
* Organização dos componentes em pastas;
* Utilização de `import` e `export`;
* Utilização de Hooks do React;
* Implementação de funcionalidades utilizando JavaScript;
* Utilização de `localStorage`;
* Implementação de simulação da análise inteligente da câmera;
* Manutenção da identidade visual do projeto.

---

# ⚛️ Estrutura de Componentes

A aplicação utiliza uma arquitetura baseada em **componentes funcionais do React**.

O componente principal `App.jsx` funciona como componente pai e organiza os principais componentes da aplicação.

A estrutura segue uma hierarquia de pai para filho:

```text
App
│
├── Header
│
├── Main
│   ├── Hero
│   ├── Problem
│   ├── Perception
│   ├── HowItWorks
│   ├── Demo
│   └── MVP
│
└── Footer
```

O `App.jsx` importa os componentes e os renderiza de acordo com a estrutura da página. Além disso, o componente pai controla estados e funções que são enviados para componentes filhos por meio de propriedades (`props`).

---

# 🧩 Componentes do Projeto

## Header

O componente **Header** é responsável pelo cabeçalho da aplicação e pelo controle relacionado ao estado da Inteligência Artificial.

Ele recebe informações e funções do componente `App`, demonstrando a comunicação entre componente pai e filho.

---

## Hero

O componente **Hero** apresenta a seção inicial da aplicação, introduzindo a proposta do SnapFlow AI ao usuário.

---

## Problem

O componente **Problem** apresenta o problema que o SnapFlow AI busca solucionar, contextualizando as dificuldades encontradas pelos usuários durante a utilização de câmeras de smartphones.

---

## Perception

O componente **Perception** apresenta o conceito de percepção inteligente da câmera, demonstrando como a solução pode analisar diferentes aspectos da fotografia.

O estado `aiEnabled` é recebido do componente pai por meio de `props`.

---

## HowItWorks

O componente **HowItWorks** apresenta o funcionamento da solução, explicando de forma visual e organizada como o SnapFlow AI pode auxiliar o usuário.

---

## Demo

O componente **Demo** contém a demonstração interativa da solução.

É neste componente que são utilizados recursos como:

* Acesso à câmera;
* Simulação de análise da cena;
* Identificação de diferentes tipos de cenário;
* Geração de indicadores de foco;
* Geração de indicadores de iluminação;
* Geração de indicadores de estabilidade;
* Captura de imagens;
* Comunicação com o componente pai.

O componente utiliza Hooks como `useState`, `useEffect` e `useRef`.

---

## MVP

O componente **MVP** apresenta os conteúdos capturados durante a utilização da demonstração.

As capturas podem ser:

* Armazenadas;
* Marcadas como privadas;
* Excluídas.

As informações são controladas pelo componente `App` e enviadas para o `MVP` através de `props`.

---

## Footer

O componente **Footer** representa o rodapé da aplicação e encerra a estrutura principal da página.

---

# 🔗 Comunicação entre Componentes

A comunicação entre os componentes ocorre utilizando **props**, seguindo a estrutura de componente pai para componente filho.

No `App.jsx`, por exemplo, o componente `Demo` recebe:

```jsx
<Demo
  aiEnabled={aiEnabled}
  onSaveCapture={saveCapture}
/>
```

Dessa maneira, o componente `App` mantém o controle dos estados e funções principais, enquanto os componentes filhos utilizam as informações recebidas para executar suas respectivas responsabilidades.

Outro exemplo ocorre com o componente `MVP`, que recebe as capturas e as funções responsáveis por alterar privacidade e excluir itens:

```jsx
<MVP
  items={items}
  onTogglePrivacy={togglePrivacy}
  onDeleteItem={deleteItem}
/>
```

---

# 💾 Utilização do LocalStorage

O projeto utiliza o **`localStorage`** do navegador para armazenar informações da aplicação localmente.

Foram utilizadas duas principais chaves:

```text
snapflow_items
snapflow_ai
```

### `snapflow_items`

É utilizada para armazenar as capturas realizadas na aplicação.

Quando uma captura é salva, ela recebe informações como:

* ID;
* Dados da captura;
* Data de criação;
* Estado de privacidade.

As capturas são convertidas para JSON antes de serem armazenadas no navegador.

Quando a aplicação é iniciada, os dados existentes são recuperados utilizando `localStorage.getItem()` e convertidos novamente para objetos JavaScript.

---

### `snapflow_ai`

É utilizada para armazenar o estado da Inteligência Artificial.

Dessa maneira, a aplicação consegue manter a preferência do usuário relacionada à ativação ou desativação da IA mesmo após uma atualização da página.

O projeto utiliza `localStorage.setItem()` para salvar os dados e `localStorage.getItem()` para recuperá-los.

---

# 🧮 Utilização do Math

O objeto **`Math`** do JavaScript é utilizado no componente `Demo.jsx` para realizar a simulação dos resultados da análise inteligente da câmera.

Foi criada a função:

```javascript
function randomInt(min, max) {
  return Math.round(
    Math.random() * (max - min) + min
  );
}
```

Essa função utiliza:

* **`Math.random()`** para gerar um número aleatório;
* **`Math.round()`** para arredondar o resultado para um número inteiro.

A função é utilizada para gerar valores dentro de determinados intervalos e simular os resultados da Inteligência Artificial.

Durante a demonstração, esses valores são utilizados para simular:

* **Foco:** valores entre 55 e 99;
* **Luz:** valores entre 50 e 99;
* **Estabilidade:** valores entre 60 e 99.

Além disso, a função é utilizada para selecionar aleatoriamente uma das cenas disponíveis:

* Retrato;
* Paisagem;
* Noite;
* Ação.

Os valores são atualizados periodicamente enquanto a câmera está ativa e a IA está habilitada, criando uma simulação dinâmica do funcionamento do SnapFlow AI.

---

# 📸 Utilização da Câmera

O componente `Demo` utiliza recursos do navegador para acessar a câmera do dispositivo.

A aplicação utiliza referências (`useRef`) para controlar elementos relacionados ao vídeo e ao canvas.

A câmera pode ser ativada durante a demonstração, permitindo que o usuário experimente a funcionalidade proposta pelo SnapFlow AI.

O projeto também realiza o gerenciamento do fluxo da câmera e encerra as faixas do dispositivo quando necessário.

---

# ✨ Funcionalidades

As principais funcionalidades implementadas são:

* Interface desenvolvida em React;
* Componentes funcionais;
* Estrutura pai → filho;
* Comunicação entre componentes utilizando props;
* Controle de estado utilizando `useState`;
* Execução de efeitos utilizando `useEffect`;
* Utilização de referências com `useRef`;
* Ativação da câmera;
* Simulação de análise inteligente;
* Identificação aleatória de cenários;
* Indicador de foco;
* Indicador de iluminação;
* Indicador de estabilidade;
* Captura de conteúdo;
* Armazenamento de capturas;
* Controle de privacidade das capturas;
* Exclusão de capturas;
* Persistência de dados utilizando `localStorage`;
* Utilização de `Math.random()` e `Math.round()`;
* Interface responsiva;
* Versionamento no GitHub.

---

# 🎨 Interface e Design

A interface da aplicação foi desenvolvida tendo como base o protótipo criado nas sprints anteriores.

Durante a migração para React, foram mantidos elementos importantes da identidade visual do projeto, incluindo:

* Estrutura das seções;
* Tipografia;
* Imagens;
* Elementos visuais;
* Organização do conteúdo;
* Cores;
* Espaçamentos;
* Hierarquia visual.

O objetivo foi realizar a migração tecnológica mantendo a identidade definida no protótipo original.

---

# 📱 Responsividade

A aplicação foi desenvolvida considerando diferentes tamanhos de tela.

O layout foi estruturado para proporcionar uma boa experiência de utilização em:

* 💻 Computadores;
* 💻 Notebooks;
* 📱 Smartphones;
* 📱 Tablets.

A responsividade é implementada principalmente por meio de CSS e adaptações do layout para diferentes dimensões de tela.

---

# 🛠️ Tecnologias Utilizadas

## Front-End

* **React.js** — Biblioteca utilizada para construção da interface;
* **JavaScript** — Linguagem utilizada para lógica e funcionalidades;
* **JSX** — Sintaxe utilizada para estruturar os componentes React;
* **HTML5** — Estrutura base da aplicação;
* **CSS3** — Estilização e responsividade;
* **Vite** — Ferramenta utilizada para desenvolvimento e execução do projeto.

## APIs e Recursos do Navegador

* **LocalStorage** — Armazenamento local das informações da aplicação;
* **MediaDevices / getUserMedia** — Recurso utilizado para acesso à câmera;
* **Canvas** — Recurso utilizado durante o funcionamento da demonstração.

## Ferramentas

* **Visual Studio Code** — Ambiente de desenvolvimento;
* **Git** — Sistema de controle de versão;
* **GitHub** — Hospedagem do código-fonte;
* **Vercel** — Plataforma utilizada para o deploy;
* **ESLint** — Ferramenta de análise e padronização do código.

---

# 📂 Estrutura do Projeto

A estrutura atual do projeto está organizada da seguinte maneira:

```text
Sprint-3-Web-Development/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   │
│   │   ├── demo/
│   │   │   ├── Demo.css
│   │   │   └── Demo.jsx
│   │   │
│   │   ├── footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   │
│   │   ├── hero/
│   │   │   ├── Hero.css
│   │   │   └── Hero.jsx
│   │   │
│   │   ├── howItWorks/
│   │   │   ├── HowItWorks.css
│   │   │   └── HowItWorks.jsx
│   │   │
│   │   ├── MVP/
│   │   │   ├── MVP.css
│   │   │   └── MVP.jsx
│   │   │
│   │   ├── perception/
│   │   │   ├── Perception.css
│   │   │   └── Perception.jsx
│   │   │
│   │   └── Problem/
│   │       ├── Problem.css
│   │       └── Problem.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── integrantes.txt
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

A estrutura de componentes do repositório confirma a separação entre `demo`, `footer`, `header`, `hero`, `howItWorks`, `MVP`, `perception` e `Problem`.

---

# 📄 Principais Arquivos

### `src/App.jsx`

Componente principal da aplicação.

É responsável por:

* Importar os componentes;
* Controlar estados globais da página;
* Gerenciar o `localStorage`;
* Salvar capturas;
* Alterar a privacidade das capturas;
* Excluir itens;
* Enviar informações para os componentes filhos.

---

### `src/main.jsx`

É o ponto de entrada da aplicação React e responsável por iniciar a renderização do componente principal.

---

### `src/index.css`

Contém estilos globais utilizados pela aplicação.

---

### `src/components/`

Contém os componentes funcionais utilizados para estruturar a interface.

Cada componente possui seu próprio arquivo `.jsx` e, quando necessário, seu arquivo `.css`.

---

### `package.json`

Contém as configurações do projeto, dependências e scripts utilizados para executar a aplicação.

---

### `vite.config.js`

Contém as configurações utilizadas pelo Vite.

---

### `integrantes.txt`

Arquivo obrigatório contendo os nomes completos e RMs dos integrantes da equipe.

---

# ⚙️ Pré-requisitos

Para executar o projeto em outra máquina, é necessário possuir:

* **Node.js**
* **npm**
* **Git**

Para verificar o Node.js:

```bash
node -v
```

Para verificar o npm:

```bash
npm -v
```

Para verificar o Git:

```bash
git --version
```

---

# 📥 Instalação

## 1. Clonar o repositório

```bash
git clone https://github.com/EduardoGuzeli/Sprint-3-Web-Development.git
```

## 2. Entrar na pasta do projeto

```bash
cd Sprint-3-Web-Development
```

## 3. Instalar as dependências

```bash
npm install
```

O comando `npm install` instala todas as dependências necessárias definidas no arquivo `package.json`.

A pasta `node_modules` será criada automaticamente.

> A pasta `node_modules` não precisa ser enviada para o GitHub ou incluída manualmente no ZIP, pois as dependências podem ser reinstaladas utilizando `npm install`.

---

# ▶️ Executando o Projeto

Após instalar as dependências, execute:

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento.

Normalmente, a aplicação estará disponível em:

```text
http://localhost:5173
```

O endereço exato será apresentado no terminal após a execução do comando.

---

# 👤 Usuários e Senhas

O projeto **não possui sistema de autenticação ou login**.

Portanto, não são necessários usuários ou senhas para acessar e testar a aplicação.

---

# 🤖 Uso de Inteligência Artificial

Durante o desenvolvimento do projeto, ferramentas de **Inteligência Artificial** foram utilizadas como apoio ao processo de desenvolvimento e aprendizagem.

A IA foi utilizada principalmente para auxiliar a equipe na compreensão de conceitos relacionados a **React, JavaScript, componentização, organização do projeto, `localStorage`, utilização de funções matemáticas, identificação e correção de possíveis erros e documentação da aplicação**.

As sugestões fornecidas pela IA foram analisadas e adaptadas pela equipe de acordo com as necessidades do projeto. A implementação, integração dos componentes, testes e validação do funcionamento da aplicação foram realizados pela equipe.

---

# 🔗 Repositório GitHub

O código-fonte do projeto está disponível no GitHub:

[Repositório GitHub — Sprint 3 Web Development](https://github.com/EduardoGuzeli/Sprint-3-Web-Development?utm_source=chatgpt.com)

O repositório contém o código-fonte da aplicação, os componentes React, arquivos de configuração e a documentação necessária.

---

# 🌐 Deploy — Vercel

A aplicação está disponível online por meio da plataforma Vercel.

**Link do Deploy:**

👉 [Acessar o projeto na Vercel](https://sprint-3-web-development-gxpx8a8oa-eduardoguzelis-projects.vercel.app)

---

# 🔄 Fluxo de Desenvolvimento

O desenvolvimento da Sprint seguiu o seguinte fluxo:

```text
Protótipo das Sprints anteriores
              ↓
      Análise do protótipo
              ↓
       Migração para React
              ↓
      Criação dos componentes
              ↓
      Estrutura pai → filho
              ↓
     Implementação dos Hooks
              ↓
 LocalStorage + Math + Câmera
              ↓
     Estilização e responsividade
              ↓
            Testes
              ↓
       Versionamento Git
              ↓
           GitHub
              ↓
          Vercel
```

---

# 🧪 Testes

A aplicação deve ser testada após a instalação das dependências para verificar:

* Inicialização correta do projeto;
* Funcionamento dos componentes;
* Comunicação entre componentes;
* Ativação da câmera;
* Funcionamento da demonstração;
* Alteração do estado da IA;
* Geração dos indicadores;
* Salvamento das capturas;
* Persistência dos dados no `localStorage`;
* Alteração do estado de privacidade;
* Exclusão de capturas;
* Responsividade da interface;
* Carregamento das imagens e recursos;
* Ausência de erros críticos no console.

---

# 📦 Entrega

De acordo com os requisitos da Sprint, a equipe deverá entregar um único arquivo `.ZIP` contendo o projeto completo.

A estrutura deverá incluir:

```text
Sprint-3-Web-Development.zip
│
├── Código-fonte
├── README.md
├── integrantes.txt
└── Demais arquivos necessários para execução
```

O arquivo `integrantes.txt` deve obrigatoriamente estar dentro do `.ZIP`.

Além do arquivo `.ZIP`, devem ser informados:

* Link do repositório Git;
* Link do Deploy na Vercel.

---

# 👨‍💻 Integrantes

| Integrante                    |     RM |
| ----------------------------- | -----: |
| **Eduardo Guzeli Nogueira**   | 571143 |
| **Diego Caio de Ulhôa**       | 572190 |
| **Lucas Dos Santos Oliveira** | 571718 |

### 🎓 Instituição

**FIAP — Engenharia de Software**

Projeto desenvolvido para a disciplina de **Web Development**, como parte das atividades acadêmicas da Sprint 3.

### 🔗 GitHub dos integrantes

* **Eduardo Guzeli Nogueira:** https://github.com/EduardoGuzeli
* **Lucas Dos Santos Oliveira:** https://github.com/luczss
* **Diego Caio de Ulhôa:** https://github.com/diego-caio

---

# 📚 Conceitos Aplicados

Durante o desenvolvimento do projeto foram aplicados conhecimentos relacionados a:

* React.js;
* JSX;
* JavaScript;
* Componentes funcionais;
* Componentes pai e filho;
* Props;
* `import` e `export`;
* `useState`;
* `useEffect`;
* `useRef`;
* HTML5;
* CSS3;
* Responsividade;
* `localStorage`;
* `Math.random()`;
* `Math.round()`;
* Acesso à câmera;
* NPM;
* Vite;
* Git;
* GitHub;
* Vercel.

---

# 🎓 Contexto Acadêmico

Este projeto foi desenvolvido para fins **acadêmicos**, como parte da disciplina de **Web Development da FIAP**.

A Sprint 3 tem como objetivo aplicar conhecimentos de desenvolvimento Front-End por meio da migração de um protótipo existente para uma aplicação React, utilizando componentes funcionais, estrutura pai e filho, armazenamento local, operações matemáticas, versionamento e deploy.

---

# 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.

---

# ⭐ Considerações Finais

O desenvolvimento desta Sprint permitiu à equipe transformar o protótipo desenvolvido anteriormente em uma aplicação estruturada utilizando React.

A implementação possibilitou aplicar conceitos de componentes funcionais, comunicação entre componentes, gerenciamento de estados, Hooks, `localStorage`, operações matemáticas e acesso à câmera.

Além do desenvolvimento da aplicação, o projeto foi versionado utilizando Git e GitHub e preparado para disponibilização por meio da Vercel.

O projeto representa a evolução das etapas anteriores e estabelece uma base para futuras melhorias e novas funcionalidades do SnapFlow AI.
