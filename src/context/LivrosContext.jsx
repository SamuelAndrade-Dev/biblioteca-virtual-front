import React from "react";

// Criação do contexto de livros
const LivrosContext = React.createContext();

export function LivrosProvider(props) {
  const [livros, setLivros] = React.useState([]);

  const URL_API = "http://localhost:3000/livros";

  // Busca os livros do db.json assim que o componente carrega
  React.useEffect(function () {
    async function buscarDados() {
      try {
        const resposta = await fetch(URL_API);
        const dados = await resposta.json();
        setLivros(dados);
      } catch (erro) {
        console.error("Erro ao buscar livros do banco de dados:", erro);
      }
    }
    buscarDados();
  }, []);

  // Função assíncrona que seu componente Cadastro já está chamando
  async function adicionarLivro(novoLivro) {
    try {
      const resposta = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novoLivro)
      });

      if (resposta.ok) {
        const livroSalvo = await resposta.json();

        // Atualiza o estado local adicionando o novo livro com o ID gerado pelo banco
        setLivros(function (listaAnterior) {
          return listaAnterior.concat(livroSalvo);
        });
      }
    } catch (erro) {
      console.error("Erro ao salvar o livro no banco de dados:", erro);
      throw erro; 
    }
  }

  async function removerLivro(id) {
    try {
      const resposta = await fetch(`${URL_API}/${id}`, {
        method: "DELETE",
      });
      if (resposta.ok) {
        setLivros(function (listaAnterior) {
          return listaAnterior.filter(function (livro) {
            return livro.id !== id;
          });
        });
      }
    } catch (erro) {
      console.error("Erro ao remover o livro:", erro);
      throw erro;
    }
  }

  // Atualizar o valorCompartilhado
  const valorCompartilhado = {
    livros: livros,
    adicionarLivro: adicionarLivro,
    removerLivro: removerLivro,   // 👈 adicionar aqui
  };

  return (
    <LivrosContext.Provider value={valorCompartilhado}>
      {props.children}
    </LivrosContext.Provider>
  );
}

// Hook customizado para facilitar o acesso nas páginas
export function useLivros() {
  return React.useContext(LivrosContext);
}