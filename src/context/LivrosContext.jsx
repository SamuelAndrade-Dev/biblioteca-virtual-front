import React from "react";


const LivrosContext = React.createContext();

export function LivrosProvider(props) {
  const [livros, setLivros] = React.useState([]);

  const URL_API = "http://localhost:3000/livros";

  
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

  
  async function editarLivro(id, livroAtualizado) {
    try {
      const resposta = await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(livroAtualizado)
      });

      if (resposta.ok) {
        const livroSalvo = await resposta.json();

        
        setLivros(function (listaAnterior) {
          return listaAnterior.map(function (livro) {
            return livro.id === id ? livroSalvo : livro;
          });
        });
      } else {
        console.error('Falha ao editar o livro, status:', resposta.status);
        throw new Error('Falha ao editar o livro');
      }
    } catch (erro) {
      console.error("Erro ao editar o livro:", erro);
      throw erro;
    }
  }

  
  const valorCompartilhado = {
    livros: livros,
    adicionarLivro: adicionarLivro,
    removerLivro: removerLivro,  
    editarLivro: editarLivro,
  };

  return (
    <LivrosContext.Provider value={valorCompartilhado}>
      {props.children}
    </LivrosContext.Provider>
  );
}


export function useLivros() {
  return React.useContext(LivrosContext);
}