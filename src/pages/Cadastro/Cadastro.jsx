import React, { useState } from "react";

function Cadastro() {
    // estados controlados para cada campo
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [quantidade, setQuantidade] = useState("");

    // envia o formulário sem recarregar a página e loga os dados
    const handleSubmit = (e) => {
        e.preventDefault();

        const novoLivro = {
            titulo: titulo.trim(),
            autor: autor.trim(),
            categoria: categoria.trim(),
            // converte para número quando possível, mantém 0 como fallback
            quantidade: quantidade === "" ? 0 : Number(quantidade),
        };

        console.log("Livro cadastrado:", novoLivro);

        // limpa o formulário após submissão (boa experiência de usuário)
        setTitulo("");
        setAutor("");
        setCategoria("");
        setQuantidade("");
    };

    return (
        <div className="cadastro-page">
            <h1>Cadastro de Livro</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input
                        id="titulo"
                        name="titulo"
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="autor">Autor</label>
                    <input
                        id="autor"
                        name="autor"
                        type="text"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="categoria">Categoria</label>
                    <input
                        id="categoria"
                        name="categoria"
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        id="quantidade"
                        name="quantidade"
                        type="number"
                        min="0"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                    />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Cadastro;