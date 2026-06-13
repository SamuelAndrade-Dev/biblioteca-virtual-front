import React from "react";
import { useLivro } from "../../contexts/LivroContext";

function Listagem() {
    const { livros } = useLivro();

    return (
        <div className="listagem-page">
            <h1>Listagem de Livros</h1>

            {(!livros || livros.length === 0) ? (
                <p>Nenhum livro cadastrado.</p>
            ) : (
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
            )}
        </div>
    );
}

export default Listagem;