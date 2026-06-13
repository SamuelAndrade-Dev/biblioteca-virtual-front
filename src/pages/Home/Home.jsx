import { Link } from "react-router-dom";
import "./Home.css";

const cards = [
    {
        title: "Cadastro de Livros",
        description: "Registre novos títulos com seus dados principais de forma simples.",
    },
    {
        title: "Listagem de Livros",
        description: "Visualize os livros cadastrados em um único lugar.",
    },
    {
        title: "Pesquisa de Livros",
        description: "Encontre rapidamente os títulos que você precisa consultar.",
    },
];

function Home() {
    return (
        <main className="home-page">
            <section className="home-hero" aria-labelledby="home-title">
                <p className="home-kicker">Sistema de gestão de acervo</p>
                <h1 id="home-title">Biblioteca Virtual</h1>
                <p className="home-description">
                    Organize o acervo da biblioteca, cadastre novos livros e acompanhe a
                    listagem com uma navegação simples e direta.
                </p>

                <div className="home-actions" aria-label="Ações principais">
                    <Link className="home-button" to="/cadastro">
                        Cadastro de Livros
                    </Link>
                    <Link className="home-button home-button-secondary" to="/listagem">
                        Listagem de Livros
                    </Link>
                </div>
            </section>

            <section className="home-cards-section" aria-labelledby="home-features-title">
                <h2 id="home-features-title">Funcionalidades principais</h2>

                <div className="home-cards">
                    {cards.map((card) => (
                        <article className="home-card" key={card.title}>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;