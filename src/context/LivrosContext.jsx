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
      throw erro; // Repassa o erro para o catch do formulário se necessário
    }
  }

  // Monta o objeto de valor que será compartilhado
  const valorCompartilhado = {
    livros: livros,
    adicionarLivro: adicionarLivro
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