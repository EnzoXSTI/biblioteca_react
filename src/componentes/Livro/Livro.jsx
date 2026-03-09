import css from './Livro.module.css'

export default function Livro() {
    return (
        <div className={css.card}>

            <div className={css.imagem}>
                <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                    alt="Livro"
                />
                <button>VER DETALHES</button>
            </div>

            <span className={css.categoria}>Poesia</span>
            <h3>O Silêncio do Mar</h3>
            <p>Helena Vasconcelos</p>

        </div>
    )
}