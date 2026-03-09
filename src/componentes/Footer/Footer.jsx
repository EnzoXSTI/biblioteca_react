import css from "./Footer.module.css"
export default function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.informacoes}>
                <h2 className={css.logo}>BOOK PLUS</h2>
                <p className={css.paragrafo}>Sua livraria digital de confiança. Uma curadoria minimalista das obras mais
                    impactantes para o seu crescimento.</p>

            </div>
            <div className={css.navs}>
                <div>
                    <h3>EXPLORAR</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Lançamentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Mais vendidos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">E-books</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>SUPORTE</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Ajuda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Envios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Trocas</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>INSTITUCIONAL</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Privacidade</a>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}