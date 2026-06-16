# 📚 Biblioteca Virtual — Frontend

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

**Desenvolvido por:** Equipe Biblioteca Virtual

Aplicação web desenvolvida em React para gerenciamento de livros, permitindo cadastro, consulta e simulação de persistência de dados via `db.json`. O projeto foi desenvolvido como atividade prática de Frontend, utilizando componentes reutilizáveis, gerenciamento de estado compartilhado e consumo de API local (JSON Server).

---

## 🚀 Funcionalidades

- Navegação entre páginas com React Router
- Cadastro de livros com formulário controlado
- Validação de campos obrigatórios
- Listagem dinâmica de livros cadastrados
- Gerenciamento de estado global com Context API
- Persistência de dados via `db.json`
- Tratamento de carregamento e erros nas requisições
- Interface responsiva para diferentes dispositivos

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React
- React Router
- Context API
- JavaScript (ES6+)
- CSS3
- Vite

### Infraestrutura
- Docker + Docker Compose (ambiente de desenvolvimento)

### Dados
- `db.json` (JSON Server para simulação de API REST local)

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
├── docker-compose.yml
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Configuração e Execução

### Pré-requisitos

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados

### 1. Clonar o repositório

```bash
git clone https://github.com/SamuelAndrade-Dev/biblioteca-virtual-front.git
cd biblioteca-virtual-front
```

### 2. Rodar com Docker Compose (recomendado)

```bash
docker compose up -d
```

Aplicação disponível em:

```
http://localhost:5174
```

Para encerrar:

```bash
docker compose down
```

---

## 💻 Execução sem Docker (opcional)

### Instalar dependências

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev -- --host
```

### Build de produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

---

## 📋 Funcionalidades Implementadas

### Página Inicial
- Apresentação do sistema
- Navegação para cadastro e listagem

### Cadastro de Livros
Campos disponíveis:
- Título
- Autor
- Categoria
- Ano

Validações:
- Campos obrigatórios
- Tamanho mínimo para textos
- Quantidade maior que zero

### Listagem de Livros
- Exibição dinâmica dos livros cadastrados
- Dados consumidos via `db.json`
- Atualização automática após novos cadastros

### Estado Compartilhado
Context API utilizado para:
- Armazenar livros cadastrados
- Compartilhar informações entre páginas
- Atualizar a listagem sem recarregar a aplicação

---

## 🗂️ Organização do Desenvolvimento

O projeto foi desenvolvido utilizando:

- **GitHub** para controle de versão
- **GitHub Issues** para rastreamento de tarefas
- **GitHub Projects (Kanban)** para organização do fluxo de trabalho
- **Commits semânticos** para histórico claro e legível


Exemplos de commits:

```bash
feat: cria formulário controlado de cadastro
feat: implementa validação dos campos
feat: cria contexto global de livros
feat: integra cadastro ao contexto
feat: implementa listagem dinâmica
style: adiciona responsividade às páginas
```

---

## 👥 Integrantes

| Nome |
|---|
| Samuel Pedro Pereira de Andrade |
| Marcus Williann Neres dos Santos |
| Thiago Pereira dos Santos |
| Paulo César Daldegan |

---

## 📄 Licença

Projeto acadêmico desenvolvido para a disciplina de Frontend.