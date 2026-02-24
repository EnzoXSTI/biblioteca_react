import css from './Header.module.css'

export default function Header () {
    return (
        <header className="container-fluid">
            <div className={css.header + " row"}>
                <h1 className={"col-3"}>BOOK PLUS</h1>

                <div className={css.header + " col-3"}>
                        <input className={css.imput} type="text" placeholder="Encontre sua proxima leitura..." />
                </div>

                <nav className={css.nav + " col-6"}>
                    <a className={css.a}>CATÁLAGO</a>
                    <a className={css.a}>LANÇAMENTOS</a>
                    <a className={css.a}>MAIS VENDIDOS</a>
                    <button className={css.login}>LOGIN ADMIN</button>
                </nav>
            </div>
        </header>
    )

}

