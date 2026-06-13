import { useState } from "react";
import { useLivro } from "../../contexts/LivroContext";
import { useNavigate } from "react-router";
import "./Cadastro.css";

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

    const { adicionarLivro } = useLivro();
    const navigate = useNavigate();

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

        // adiciona ao contexto
        try {
            adicionarLivro(novoLivro);
        } catch (err) {
            console.error("Erro ao adicionar livro:", err);
        }

        // limpa o formulário após submissão (boa experiência de usuário)
        setTitulo("");
        setAutor("");
        setCategoria("");
        setQuantidade("");
        setErros({ titulo: "", autor: "", categoria: "", quantidade: "" });

        // redireciona para a página de listagem
        navigate("/listagem");
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
        <main className="cadastro-page">
            <section aria-labelledby="cadastro-titulo">
                <h1 id="cadastro-titulo">Cadastro de Livro</h1>

                <form onSubmit={handleSubmit} noValidate>
                    <fieldset className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input
                            id="titulo"
                            name="titulo"
                            type="text"
                            required
                            minLength={3}
                            value={titulo}
                            onChange={handleTituloChange}
                            aria-invalid={erros.titulo ? "true" : "false"}
                            aria-describedby={erros.titulo ? "erro-titulo" : undefined}
                        />
                        {erros.titulo && (
                            <output id="erro-titulo" className="error-message" role="alert">
                                {erros.titulo}
                            </output>
                        )}
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="autor">Autor</label>
                        <input
                            id="autor"
                            name="autor"
                            type="text"
                            required
                            minLength={3}
                            value={autor}
                            onChange={handleAutorChange}
                            aria-invalid={erros.autor ? "true" : "false"}
                            aria-describedby={erros.autor ? "erro-autor" : undefined}
                        />
                        {erros.autor && (
                            <output id="erro-autor" className="error-message" role="alert">
                                {erros.autor}
                            </output>
                        )}
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="categoria">Categoria</label>
                        <input
                            id="categoria"
                            name="categoria"
                            type="text"
                            required
                            value={categoria}
                            onChange={handleCategoriaChange}
                            aria-invalid={erros.categoria ? "true" : "false"}
                            aria-describedby={erros.categoria ? "erro-categoria" : undefined}
                        />
                        {erros.categoria && (
                            <output id="erro-categoria" className="error-message" role="alert">
                                {erros.categoria}
                            </output>
                        )}
                    </fieldset>

                    <fieldset className="form-group">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input
                            id="quantidade"
                            name="quantidade"
                            type="number"
                            min="1"
                            required
                            value={quantidade}
                            onChange={handleQuantidadeChange}
                            aria-invalid={erros.quantidade ? "true" : "false"}
                            aria-describedby={erros.quantidade ? "erro-quantidade" : undefined}
                        />
                        {erros.quantidade && (
                            <output id="erro-quantidade" className="error-message" role="alert">
                                {erros.quantidade}
                            </output>
                        )}
                    </fieldset>

                    <button type="submit">Cadastrar</button>
                </form>
            </section>
        </main>
    );
}

export default Cadastro;