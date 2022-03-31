import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";

import ImageContext from "./../contexts/ImageContext";
import TokenContext from "./../contexts/TokenContext";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {
    const [image, setImage] = useState("");
    const [token, setToken] = useState("");
    return (
        <TokenContext.Provider value={{token, setToken}}>
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
        </TokenContext.Provider>
    );
}

export default App;