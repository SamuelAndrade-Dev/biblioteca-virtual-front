# 📚 Biblioteca Virtual — Frontend

![React](https://img.shields.io/badge/React-20232A?logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)

**Desenvolvido por:** Equipe Biblioteca Virtual

Aplicação web desenvolvida em React para gerenciamento de livros, permitindo cadastro, listagem, edição, remoção e consulta de informações em um acervo virtual.

---

## 🚀 Funcionalidades

* Página inicial da aplicação
* Cadastro de livros
* Validação de formulário
* Listagem dinâmica de livros
* Busca local por título
* Edição de livros cadastrados
* Remoção de livros cadastrados
* Gerenciamento de estado utilizando Context API
* Integração com API REST utilizando JSON Server
* Interface responsiva

---

## 🛠️ Tecnologias Utilizadas

* React
* Vite
* JavaScript
* Context API
* CSS
* JSON Server

---

## 📁 Estrutura do Projeto

```txt
biblioteca-virtual-front/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   └── Navbar/
│   │
│   ├── context/
│   │   └── LivrosContext.jsx
│   │
│   ├── pages/
│   │   ├── Cadastro/
│   │   ├── Home/
│   │   └── Listagem/
│   │
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/SamuelAndrade-Dev/biblioteca-virtual-front.git

cd biblioteca-virtual-front
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o JSON Server

Em um terminal separado:

```bash
npx json-server --watch db.json --port 3000
```

A API estará disponível em:

```txt
http://localhost:3000/livros
```

### 4. Iniciar a aplicação React

Em outro terminal:

```bash
npm run dev
```

A aplicação estará disponível em:

```txt
http://localhost:5173
```

---

## 📋 Funcionalidades Implementadas

### Página Inicial

* Apresentação do sistema
* Navegação para cadastro e listagem

### Cadastro de Livros

Campos disponíveis:

* Título
* Autor
* Categoria / Gênero
* Ano

Validações:

* Campos obrigatórios
* Tamanho mínimo para textos
* Ano deve possuir valor válido

### Listagem de Livros

* Exibição dinâmica dos livros cadastrados
* Busca por título
* Edição de registros
* Remoção de registros
* Atualização automática da interface

### Estado Compartilhado

Context API utilizado para:

* Armazenar livros cadastrados
* Compartilhar informações entre páginas
* Atualizar a listagem sem recarregar a aplicação

### Integração com API

Utilização do JSON Server para:

* Cadastro de livros
* Consulta de livros
* Atualização de livros
* Remoção de livros

---

## 🗂️ Organização do Desenvolvimento

O projeto foi desenvolvido utilizando:

* GitHub para controle de versão
* GitHub Issues para rastreamento de tarefas
* GitHub Projects (Kanban) para organização do fluxo de trabalho
* Commits semânticos para histórico claro e legível

Exemplos:

```bash
feat: cria formulário controlado de cadastro

feat: implementa validação dos campos

feat: cria contexto global de livros

feat: integra cadastro ao contexto

feat: implementa listagem dinâmica

feat: adiciona edição de livros

style: adiciona responsividade às páginas
```

---

## 👥 Integrantes

| Nome                             |
| -------------------------------- |
| Samuel Pedro Pereira de Andrade  |
| Marcus Williann Neres dos Santos |
| Thiago Pereira dos Santos        |
| Paulo César Daldegan             |

---

## 📄 Licença

Projeto acadêmico desenvolvido para a disciplina de Frontend.
