import Header from "./componentes/Header/Header.jsx";
import Banner from "./componentes/Banner/Banner.jsx";
import Catalogo from "./componentes/Catalogo/Catalogo.jsx";
import Livro from "./componentes/Livro/Livro.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/header" element={<header/>} />
           </Routes>
       </BrowserRouter>
    )
}