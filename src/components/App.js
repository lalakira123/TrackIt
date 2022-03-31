import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";

import ImageContext from "./../contexts/ImageContext";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {
    const [image, setImage] = useState("");
    return (
        <ImageContext.Provider value={{image, setImage}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />}/>
                    <Route path="/cadastro" element={<TelaCadastro />} />
                    <Route path="/habitos" element={<TelaHabitos />} />
                    <Route path="/hoje" element={<TelaHoje />} />
                </Routes>
            </BrowserRouter>
        </ImageContext.Provider>
    );
}

export default App;