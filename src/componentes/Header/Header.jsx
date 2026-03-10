import css from './Header.module.css'
import {Link} from "react-router-dom";

export default function Header () {
    return (
        <header className="container-fluid">
            <div className={css.header + " row"}>
                <div className={"col-3"}>
                    <Link to="/" className={css.home}>BOOK PLUS</Link>
                </div>


                <div className={css.header + " col-3"}>
                        <input className={css.imput} type="text" placeholder="Encontre sua proxima leitura..." />
                </div>

                <nav className={css.nav + " col-6"}>
                    <Link to="/catalogo" className={css.a}>CATÁLAGO</Link>
                    <a className={css.a}>LANÇAMENTOS</a>
                    <a className={css.a}>MAIS VENDIDOS</a>
                    <Link  to="/login" className={css.login}>LOGIN ADMIN</Link>
                </nav>
            </div>
        </header>
    )

}

