import { Link } from 'react-router';
import './Footer.css';

function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="footer" aria-label="Rodapé da Biblioteca Virtual">

            <section className="footer-flex">

                <section className="footer__brand" aria-labelledby="footer-marca">
                    <h2 id="footer-marca" className="footer__brand-nome">
                        <span aria-hidden="true">📚</span>
                        Biblioteca Virtual
                    </h2>
                    <p className="footer__brand-desc">
                        Um acervo digital para descobrir, cadastrar e explorar
                        livros de todos os gêneros e categorias.
                    </p>
                    <address className="footer__contato">
                        <p>
                            contato@bibliotecavirtual.com
                        </p>
                    </address>
                </section>

                <nav aria-labelledby="footer-nav-acervo">
                    <h2 id="footer-nav-acervo" className="footer__nav-titulo">Acervo</h2>
                    <ul className="footer__lista" role="list">
                        <li>
                            <Link to="/" className="footer__link">Início</Link>
                        </li>
                        <li>
                            <Link to="/cadastro" className="footer__link">Cadastrar livro</Link>
                        </li>
                        <li>
                            <Link to="/listagem" className="footer__link">Livros Cadastrados</Link>
                        </li>
                    </ul>
                </nav>
                
            </section>

            <section className="footer__bottom">
                <small className="footer__copy">
                    &copy; {anoAtual} Biblioteca Virtual. Todos os direitos reservados.
                </small>
                <small className="footer__tech">
                    Desenvolvido com React + Vite
                </small>
            </section>

        </footer>
    );
}

export default Footer;