import React from "react";
import { useLivros } from "../../context/LivrosContext";
import { useNavigate } from "react-router";
import "./Cadastro.css";

function Cadastro() {
    const [titulo, setTitulo] = React.useState("");
    const [autor, setAutor] = React.useState("");
    const [categoria, setCategoria] = React.useState("");
    const [quantidade, setQuantidade] = React.useState("");

    const [erros, setErros] = React.useState({
        titulo: "",
        autor: "",
        categoria: "",
        quantidade: "",
    });

    const contexto = useLivros();
    const navigate = useNavigate();

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

        const qtdNum = quantidade === "" ? NaN : Number(quantidade);
        if (quantidade === "" || Number.isNaN(qtdNum)) {
            novoErros.quantidade = "A quantidade é obrigatória.";
        } else if (qtdNum <= 0) {
            novoErros.quantidade = "A quantidade deve ser maior que 0.";
        }

        return novoErros;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const novoErros = validar();
        setErros(novoErros);

        const possuiErros = Object.values(novoErros).some((msg) => msg !== "");
        if (possuiErros) return;

        // Monta o objeto com as chaves exatas que a API e a Listagem esperam
        const novoLivro = {
            titulo: titulo.trim(),
            autor: autor.trim(),
            genero: categoria.trim(),
            ano: quantidade.trim()
        };

        try {
            // Envia para a função do contexto que faz o fetch POST para o db.json
            await contexto.adicionarLivro(novoLivro);

            // Limpa os campos do formulário após o sucesso
            setTitulo("");
            setAutor("");
            setCategoria("");
            setQuantidade("");

            // Redireciona o usuário para a tela de listagem onde o dado vai carregar
            navigate("/listagem");
        } catch (err) {
            console.error("Erro ao cadastrar o livro no fluxo do formulário:", err);
        }
    };

    return (
        <main className="cadastro-page">
            <section aria-labelledby="cadastro-titulo">
                <h1 id="cadastro-titulo">Cadastro de Livro</h1>

                <form onSubmit={handleSubmit} noValidate>
                    <fieldset className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input
                            id="titulo"
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder="Ex: O Senhor dos Anéis"
                        />
                        {erros.titulo && <output className="error-message">{erros.titulo}</output>}
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="autor">Autor</label>
                        <input
                            id="autor"
                            type="text"
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                            placeholder="Ex: J.R.R. Tolkien"
                        />
                        {erros.autor && <output className="error-message">{erros.autor}</output>}
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="categoria">Categoria / Gênero</label>
                        <input
                            id="categoria"
                            type="text"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            placeholder="Ex: Fantasia"
                        />
                        {erros.categoria && <output className="error-message">{erros.categoria}</output>}
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="quantidade">Quantidade / Ano</label>
                        <input
                            id="quantidade"
                            type="number"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                            placeholder="Ex: 1954"
                        />
                        {erros.quantidade && <output className="error-message">{erros.quantidade}</output>}
                    </fieldset>

                    <button type="submit">Salvar no Acervo</button>
                </form>
            </section>
        </main>
    );
}

export default Cadastro;