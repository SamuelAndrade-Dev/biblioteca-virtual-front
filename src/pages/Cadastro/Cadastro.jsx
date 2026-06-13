import React, { useState } from "react";

function Cadastro() {
    // estados controlados para cada campo
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [quantidade, setQuantidade] = useState("");

    // estado para armazenar mensagens de erro por campo
    const [erros, setErros] = useState({
        titulo: "",
        autor: "",
        categoria: "",
        quantidade: "",
    });

    // valida todos os campos e retorna um objeto com mensagens de erro
    const validar = () => {
        const novoErros = { titulo: "", autor: "", categoria: "", quantidade: "" };

        if (!titulo || titulo.trim().length < 3) {
            novoErros.titulo = "O título é obrigatório e deve ter ao menos 3 caracteres.";
        }

        if (!autor || autor.trim().length < 3) {
            novoErros.autor = "O autor é obrigatório e deve ter ao menos 3 caracteres.";
        }

        if (!categoria || categoria.trim() === "") {
            novoErros.categoria = "A categoria é obrigatória.";
        }

        // quantidade deve ser informada e maior que 0
        const qtdNum = quantidade === "" ? NaN : Number(quantidade);
        if (quantidade === "" || Number.isNaN(qtdNum)) {
            novoErros.quantidade = "A quantidade é obrigatória.";
        } else if (qtdNum <= 0) {
            novoErros.quantidade = "A quantidade deve ser maior que 0.";
        }

        return novoErros;
    };

    // envia o formulário sem recarregar a página e loga os dados
    const handleSubmit = (e) => {
        e.preventDefault();

        const novoErros = validar();
        setErros(novoErros);

        // impede envio se houver qualquer mensagem de erro
        const possuiErros = Object.values(novoErros).some((msg) => msg !== "");
        if (possuiErros) return;

        const novoLivro = {
            titulo: titulo.trim(),
            autor: autor.trim(),
            categoria: categoria.trim(),
            quantidade: Number(quantidade),
        };

        console.log("Livro cadastrado:", novoLivro);

        // limpa o formulário após submissão (boa experiência de usuário)
        setTitulo("");
        setAutor("");
        setCategoria("");
        setQuantidade("");
        setErros({ titulo: "", autor: "", categoria: "", quantidade: "" });
    };

    // handlers que atualizam valor e limpam o erro do campo correspondente
    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
        if (erros.titulo) setErros((prev) => ({ ...prev, titulo: "" }));
    };

    const handleAutorChange = (e) => {
        setAutor(e.target.value);
        if (erros.autor) setErros((prev) => ({ ...prev, autor: "" }));
    };

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
        if (erros.categoria) setErros((prev) => ({ ...prev, categoria: "" }));
    };

    const handleQuantidadeChange = (e) => {
        setQuantidade(e.target.value);
        if (erros.quantidade) setErros((prev) => ({ ...prev, quantidade: "" }));
    };

    return (
        <div className="cadastro-page">
            <h1>Cadastro de Livro</h1>

            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="titulo">Título</label>
                    <input
                        id="titulo"
                        name="titulo"
                        type="text"
                        value={titulo}
                        onChange={handleTituloChange}
                        aria-invalid={erros.titulo ? "true" : "false"}
                    />
                    {erros.titulo && <div className="error-message">{erros.titulo}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="autor">Autor</label>
                    <input
                        id="autor"
                        name="autor"
                        type="text"
                        value={autor}
                        onChange={handleAutorChange}
                        aria-invalid={erros.autor ? "true" : "false"}
                    />
                    {erros.autor && <div className="error-message">{erros.autor}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="categoria">Categoria</label>
                    <input
                        id="categoria"
                        name="categoria"
                        type="text"
                        value={categoria}
                        onChange={handleCategoriaChange}
                        aria-invalid={erros.categoria ? "true" : "false"}
                    />
                    {erros.categoria && <div className="error-message">{erros.categoria}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        id="quantidade"
                        name="quantidade"
                        type="number"
                        min="0"
                        value={quantidade}
                        onChange={handleQuantidadeChange}
                        aria-invalid={erros.quantidade ? "true" : "false"}
                    />
                    {erros.quantidade && <div className="error-message">{erros.quantidade}</div>}
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Cadastro;