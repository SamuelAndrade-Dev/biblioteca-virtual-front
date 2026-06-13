const OPEN_LIBRARY_SEARCH_URL = "https://openlibrary.org/search.json?title=";

export async function buscarLivros(titulo) {
    try {
        const tituloNormalizado = String(titulo ?? "").trim();

        if (!tituloNormalizado) {
            return [];
        }

        const response = await fetch(
            `${OPEN_LIBRARY_SEARCH_URL}${encodeURIComponent(tituloNormalizado)}`,
        );

        if (!response.ok) {
            throw new Error("Falha ao consultar a Open Library API.");
        }

        const data = await response.json();
        const docs = Array.isArray(data?.docs) ? data.docs : [];

        return docs.map((livro) => ({
            titulo: livro.title ?? "Título não informado",
            autor: Array.isArray(livro.author_name) ? livro.author_name.join(", ") : "Autor não informado",
            anoPublicacao: livro.first_publish_year ?? null,
            capaUrl: livro.cover_i
                ? `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`
                : null,
            openLibraryKey: livro.key ?? null,
        }));
    } catch (error) {
        console.error("Erro ao buscar livros na Open Library:", error);
        throw error;
    }
}
