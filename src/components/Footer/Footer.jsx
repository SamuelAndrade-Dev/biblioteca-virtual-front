import { Link } from 'react-router';
import './Footer.css';

function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="footer" aria-label="Rodapé da Biblioteca Virtual">

            <div className="footer__grid">

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

                <nav aria-labelledby="footer-nav-generos">
                    <h2 id="footer-nav-generos" className="footer__nav-titulo">Gêneros</h2>
                    <ul className="footer__lista" role="list">
                        <li>
                            <Link to="/listagem?genero=ficcao" className="footer__link">Ficção</Link>
                        </li>
                        <li>
                            <Link to="/listagem?genero=nao-ficcao" className="footer__link">Não ficção</Link>
                        </li>
                        <li>
                            <Link to="/listagem?genero=romance" className="footer__link">Romance</Link>
                        </li>
                        <li>
                            <Link to="/listagem?genero=biografia" className="footer__link">Biografia</Link>
                        </li>
                        <li>
                            <Link to="/listagem?genero=classicos" className="footer__link">Clássicos</Link>
                        </li>
                    </ul>
                </nav>

                <nav aria-labelledby="footer-nav-info">
                    <h2 id="footer-nav-info" className="footer__nav-titulo">Informações</h2>
                    <ul className="footer__lista" role="list">
                        <li>
                            <Link to="/sobre" className="footer__link">Sobre a biblioteca</Link>
                        </li>
                        <li>
                            <Link to="/privacidade" className="footer__link">Privacidade</Link>
                        </li>
                        <li>
                            <Link to="/termos" className="footer__link">Termos de uso</Link>
                        </li>
                        <li>
                            <Link to="/contato" className="footer__link">Fale conosco</Link>
                        </li>
                    </ul>
                </nav>

            </div>

            <div className="footer__bottom">
                <small className="footer__copy">
                    &copy; {anoAtual} Biblioteca Virtual. Todos os direitos reservados.
                </small>
                <small className="footer__tech">
                    Desenvolvido com React + Vite
                </small>
            </div>

        </footer>
    );
}

export default Footer;