import React from "react";
import { useLivros } from "../../context/LivrosContext";
import "./Listagem.css";

function Listagem() {
    // Acessa o contexto de livros
    const contexto = useLivros();
    const livrosDoBanco = contexto.livros;

    const [tituloBusca, setTituloBusca] = React.useState("");
    const [livrosFiltrados, setLivrosFiltrados] = React.useState([]);
    const [pesquisaRealizada, setPesquisaRealizada] = React.useState(false);

    // Função para filtrar os livros localmente pelo título
    const handlePesquisarLocal = (e) => {
        e.preventDefault();
        const termo = tituloBusca.trim().toLowerCase();

        if (!termo) {
            setLivrosFiltrados([]);
            setPesquisaRealizada(false);
            return;
        }

        // Filtra os livros que vieram do db.json
        const resultado = livrosDoBanco.filter(function (livro) {
            return livro.titulo.toLowerCase().includes(termo);
        });

        setLivrosFiltrados(resultado);
        setPesquisaRealizada(true);
    };

    // Determina se exibe a lista completa ou a lista filtrada pela pesquisa
    const listaParaExibir = pesquisaRealizada ? livrosFiltrados : livrosDoBanco;

    return (
        <section className="listagem-page">
            <header>
                <h1>Listagem de Livros</h1>
            </header>

            {/* SEÇÃO DE FILTRO LOCAL */}
            <section className="busca-livros" aria-labelledby="busca-livros-title">
                <h2 id="busca-livros-title">Pesquisar no Acervo</h2>

                <form onSubmit={handlePesquisarLocal} noValidate>
                    <label htmlFor="titulo-busca">Buscar por título</label>
                    <input
                        id="titulo-busca"
                        name="titulo-busca"
                        type="text"
                        value={tituloBusca}
                        onChange={(e) => setTituloBusca(e.target.value)}
                        placeholder="Digite o título do livro"
                    />
                    <button type="submit">
                        Filtrar
                    </button>

                    {pesquisaRealizada && (
                        <button
                            type="button"
                            onClick={function () {
                                setTituloBusca("");
                                setPesquisaRealizada(false);
                            }}
                            style={{ marginLeft: "0.5rem" }}
                        >
                            Limpar Filtro
                        </button>
                    )}
                </form>
            </section>

            {/* SEÇÃO DA TABELA DOS CADASTRADOS */}
            {(!listaParaExibir || listaParaExibir.length === 0) ? (
                <section className="listagem-cadastrados">
                    <h2>Resultado do Acervo</h2>
                    <p>{pesquisaRealizada ? "Nenhum livro corresponde à sua busca." : "Nenhum livro cadastrado no sistema."}</p>
                </section>
            ) : (
                <section className="listagem-cadastrados" aria-labelledby="livros-cadastrados-title">
                    <h2 id="livros-cadastrados-title">
                        {pesquisaRealizada ? "Resultados Encontrados" : "Todos os Livros Cadastrados"}
                    </h2>

                    <section className="table-responsive">
                        <table>
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Autor</th>
                                        <th>Gênero / Categoria</th>
                                        <th>Ano / Qtd</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaParaExibir.map((livro) => (
                                        <tr key={livro.id ?? `${livro.titulo}-${livro.autor}`}>
                                            <td>{livro.titulo}</td>
                                            <td>{livro.autor}</td>
                                            <td>{livro.genero}</td>
                                            <td>{livro.ano}</td>
                                            <td>
                                                <button
                                                    className="btn-remover"
                                                    onClick={() => contexto.removerLivro(livro.id)}
                                                    aria-label={`Remover ${livro.titulo}`}
                                                >
                                                    Remover
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                        </table>
                    </section>
                </section>
            )}
        </section>
    );
}

export default Listagem;