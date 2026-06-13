import { createContext, useContext, useMemo, useState } from "react";

// Contexto com shape inicial
const LivroContext = createContext({
  livros: [],
  adicionarLivro: () => {},
});

// Provider que mantém a lista de livros no estado
export function LivroProvider({ children }) {
  const [livros, setLivros] = useState([]);

  // adiciona um novo livro (gera um id simples com timestamp)
  const adicionarLivro = (livro) => {
    setLivros((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...livro,
      },
    ]);
  };

  const value = useMemo(() => ({ livros, adicionarLivro }), [livros]);

  return <LivroContext.Provider value={value}>{children}</LivroContext.Provider>;
}

// Hook utilitário para consumir o contexto
export function useLivro() {
  const context = useContext(LivroContext);
  if (!context) {
    throw new Error("useLivro deve ser usado dentro de um LivroProvider");
  }
  return context;
}

export default LivroContext;
