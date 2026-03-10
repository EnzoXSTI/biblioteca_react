import css from "./Cadastro.module.css"
import {Link} from "react-router-dom";

export default function Cadastro() {
    return (
        <main className={css.pagCadastro}>

            <div className={css.card}>

                <h1 className={css.logo}>BOOK PLUS</h1>
                <p className={css.subtitulo}>Criar nova conta</p>

                <form className={css.form}>

                    <div className={css.input}>
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div className={css.input}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                        />
                    </div>

                    <div className={css.input}>
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <Link to="/login" className={css.botao}>
                        CADASTRAR
                    </Link>

                </form>

            </div>

        </main>
    )
}