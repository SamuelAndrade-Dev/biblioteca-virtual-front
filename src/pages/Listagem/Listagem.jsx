import { useState } from "react";
import { useLivro } from "../../contexts/LivroContext";
import { buscarLivros } from "../../services/openLibrary";

function Listagem() {
    const { livros } = useLivro();
    const [tituloBusca, setTituloBusca] = useState("");
    const [resultados, setResultados] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");

    const handlePesquisar = async (e) => {
        e.preventDefault();

        const tituloNormalizado = tituloBusca.trim();

        if (!tituloNormalizado) {
            setResultados([]);
            setErro("Informe um título para pesquisar.");
            return;
        }

        try {
            setCarregando(true);
            setErro("");

            const livrosEncontrados = await buscarLivros(tituloNormalizado);
            setResultados(livrosEncontrados);
        } catch (error) {
            console.error("Erro ao buscar livros na Open Library:", error);
            setResultados([]);
            setErro("Não foi possível buscar livros na Open Library.");
        } finally {
            setCarregando(false);
        }
    };

    return (
        <div className="listagem-page">
            <h1>Listagem de Livros</h1>

            <section className="busca-livros" aria-labelledby="busca-livros-title">
                <h2 id="busca-livros-title">Pesquisa de Livros</h2>

                <form onSubmit={handlePesquisar} noValidate>
                    <label htmlFor="titulo-busca">Buscar por título</label>
                    <input
                        id="titulo-busca"
                        name="titulo-busca"
                        type="text"
                        value={tituloBusca}
                        onChange={(e) => setTituloBusca(e.target.value)}
                        placeholder="Digite o título do livro"
                    />
                    <button type="submit" disabled={carregando}>
                        {carregando ? "Pesquisando..." : "Pesquisar"}
                    </button>
                </form>

                {erro && <p role="alert">{erro}</p>}

                {resultados.length > 0 && (
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Autor</th>
                                    <th>Ano de publicação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resultados.map((livro) => (
                                    <tr key={livro.openLibraryKey ?? `${livro.titulo}-${livro.autor}` }>
                                        <td>{livro.titulo}</td>
                                        <td>{livro.autor}</td>
                                        <td>{livro.anoPublicacao ?? "Ano não informado"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!carregando && !erro && tituloBusca.trim() && resultados.length === 0 && (
                    <p>Nenhum resultado encontrado.</p>
                )}
            </section>

            {(!livros || livros.length === 0) ? (
                <p>Nenhum livro cadastrado.</p>
            ) : (
                <section className="listagem-cadastrados" aria-labelledby="livros-cadastrados-title">
                    <h2 id="livros-cadastrados-title">Livros Cadastrados</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map((livro) => (
                                <tr key={livro.id}>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>{livro.categoria}</td>
                                    <td>{livro.quantidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </section>
            )}
        </div>
    );
}

export default Listagem;