import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico";

import ImageContext from "./../contexts/ImageContext";
import TokenContext from "./../contexts/TokenContext";
import AtualizaContext from "./../contexts/AtualizaContext";
import ConcluidoContext from "./../contexts/ConcluidoContext";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {
    const [image, setImage] = useState("");
    const [token, setToken] = useState("");
    const [atualiza, setAtualiza] = useState(0);
    const [concluido, setConcluido] = useState(0);
    return (
        <TokenContext.Provider value={{token, setToken}}>
            <ImageContext.Provider value={{image, setImage}}>
                <AtualizaContext.Provider value={{atualiza, setAtualiza}}>
                    <ConcluidoContext.Provider value={{concluido, setConcluido}}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<TelaLogin />}/>
                                <Route path="/cadastro" element={<TelaCadastro />} />
                                <Route path="/habitos" element={<TelaHabitos />} />
                                <Route path="/hoje" element={<TelaHoje />} />
                                <Route path="/historico" element={<TelaHistorico />} />
                            </Routes>
                        </BrowserRouter>
                    </ConcluidoContext.Provider>
                </AtualizaContext.Provider>
            </ImageContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;