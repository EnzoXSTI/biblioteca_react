import css from "./Login.module.css"
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <main className={css.loginPage}>

            <div className={css.card}>

                <h1 className={css.logo}>BOOK PLUS</h1>
                <p className={css.subtitulo}>Área administrativa</p>

                <form className={css.form}>

                    <div className={css.inputGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                        />
                    </div>

                    <div className={css.inputGroup}>
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <Link to="/" className={css.botao}>
                        ENTRAR
                    </Link>

                </form>
                <p>ou</p>

                <Link to="/cadastro" className={css.botao}>CADASTRAR</Link>
            </div>

        </main>
    )
}