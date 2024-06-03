// import "./css/main.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header"
import NotFound from "./components/NotFound"
import { ItemListContainer } from "./components/ItemListContainer"
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ScrollToTop from "./components/ScrollToTop";

function App() {

    const [numero, setnumero] = useState(1);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header numero={numero} setnumero={setnumero} />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Welcome To GuitarStore" />} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Welcome To GuitarStore" />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
