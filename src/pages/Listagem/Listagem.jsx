import React from "react";
import { useLivros } from "../../context/LivrosContext";
import "./Listagem.css";

function Listagem() {
    
    const contexto = useLivros();
    const livrosDoBanco = contexto.livros;

    
    const [idEditando, setIdEditando] = React.useState(null);

    
    const [formEdicao, setFormEdicao] = React.useState({
        titulo: "",
        autor: "",
        genero: "",
        ano: ""
    });

    const [tituloBusca, setTituloBusca] = React.useState("");
    const [livrosFiltrados, setLivrosFiltrados] = React.useState([]);
    const [pesquisaRealizada, setPesquisaRealizada] = React.useState(false);

    
    const handlePesquisarLocal = (e) => {
        e.preventDefault();
        const termo = tituloBusca.trim().toLowerCase();

        if (!termo) {
            setLivrosFiltrados([]);
            setPesquisaRealizada(false);
            return;
        }

        
        const resultado = livrosDoBanco.filter(function (livro) {
            return livro.titulo.toLowerCase().includes(termo);
        });

        setLivrosFiltrados(resultado);
        setPesquisaRealizada(true);
    };

    
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
                                        <th>Ano</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaParaExibir.map((livro) => (
                                        <tr key={livro.id ?? `${livro.titulo}-${livro.autor}`}>
                                            {idEditando === livro.id ? (
                                                <>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={formEdicao.titulo}
                                                            onChange={(e) => setFormEdicao(function(prev){ return {...prev, titulo: e.target.value}; })}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={formEdicao.autor}
                                                            onChange={(e) => setFormEdicao(function(prev){ return {...prev, autor: e.target.value}; })}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={formEdicao.genero}
                                                            onChange={(e) => setFormEdicao(function(prev){ return {...prev, genero: e.target.value}; })}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            value={formEdicao.ano}
                                                            onChange={(e) => setFormEdicao(function(prev){ return {...prev, ano: e.target.value}; })}
                                                        />
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={async () => {
                                                                
                                                                const livroEditado = {
                                                                    id: livro.id,
                                                                    titulo: formEdicao.titulo,
                                                                    autor: formEdicao.autor,
                                                                    genero: formEdicao.genero,
                                                                    ano: formEdicao.ano
                                                                };
                                                                try {
                                                                    await contexto.editarLivro(livro.id, livroEditado);
                                                                    setIdEditando(null);
                                                                } catch (erro) {
                                                                    
                                                                    console.error('Erro ao salvar edição:', erro);
                                                                }
                                                            }}
                                                        >
                                                            Salvar
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                
                                                                setIdEditando(null);
                                                                setFormEdicao({ titulo: "", autor: "", genero: "", ano: "" });
                                                            }}
                                                            style={{ marginLeft: "0.5rem" }}
                                                        >
                                                            Cancelar
                                                        </button>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
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
                                                        <button
                                                            onClick={() => {
                                                                
                                                                setIdEditando(livro.id);
                                                                setFormEdicao({
                                                                    titulo: livro.titulo ?? "",
                                                                    autor: livro.autor ?? "",
                                                                    genero: livro.genero ?? "",
                                                                    ano: livro.ano ?? ""
                                                                });
                                                            }}
                                                            style={{ marginLeft: "0.5rem" }}
                                                        >
                                                            Editar
                                                        </button>
                                                    </td>
                                                </>
                                            )}
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
