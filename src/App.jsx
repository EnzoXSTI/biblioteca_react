import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./componentes/Header/Header.jsx";
import Banner from "./componentes/Banner/Banner.jsx";
import Catalogo from "./componentes/Catalogo/Catalogo.jsx";
import Livro from "./componentes/Livro/Livro.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import Login from "./componentes/Login/Login.jsx";
import Cadastro from "./componentes/Cadastro/Cadastro.jsx";
import Home from "./paes/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/login" element={<Login />} />

                <Route path="/cadastro" element={<Cadastro />} />

                <Route path="/catalogo" element={<Catalogo itens={10} />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App