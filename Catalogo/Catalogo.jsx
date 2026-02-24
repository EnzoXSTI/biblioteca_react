import css from './Catalogo.module.css'
import Livro from '../Livro/Livro'

export default function Catalogo() {
    return (
        <main className={css.catalogo}>

            <div className={css.topo}>
                <div>
                    <div className={css.novidades}>
                        <span className={css.tag}>NOVIDADES</span>
                    </div>

                    <h2>Destaques da Semana</h2>
                </div>

                <div className={css.filtros}>
                    <button className={css.filtro}>☰</button>

                    <select className={css.select}>
                        <option>Ordenar por: Relevância</option>
                        <option>Mais recentes</option>
                        <option>Menor preço</option>
                    </select>
                </div>
            </div>
            <div className={css.grid}>
                <Livro />
                <Livro />
                <Livro />
                <Livro />
                <Livro />
                <Livro />
                <Livro />
                <Livro />
                <Livro />
                <Livro />
            </div>

            <div className={css.botao}>
                <button>VER CATÁLOGO COMPLETO</button>
            </div>

        </main>
    )
}