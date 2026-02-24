import css from './Banner.module.css'

export default function Banner() {
    return (
        <section className={css.banner}>

            <span className={css.cura}>CURADORIA EXCLUSIVA</span>

            <h2>
                Descubra seu <br />
                <span>próximo capítulo</span>
            </h2>

            <p>
                Mergulhe em histórias que transformam.
                Explore nossa seleção premium de obras clássicas
                e contemporâneas.
            </p>

            <div className={css.atividade}>
                <button className={css.botao1}>
                    EXPLORAR CATÁLOGO
                </button>

                <a className={css.botao2}>
                    VER PROMOÇÕES
                </a>
            </div>

        </section>
    )
}