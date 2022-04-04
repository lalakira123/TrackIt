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
import SalvoInputContext from "../contexts/SalvoInputContext";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {
    const [image, setImage] = useState(pegarDadosLocalImagem);
    const [token, setToken] = useState(pegarDadosLocalToken);
    const [atualiza, setAtualiza] = useState(0);
    const [concluido, setConcluido] = useState(0);
    const [inputSalvo, setInputSalvo] = useState("");

    function pegarDadosLocalToken() {
        const tokenLocal = localStorage.getItem("token");
        if (tokenLocal) {
            return tokenLocal;
        } else {
            return "";
        }
    }

    function pegarDadosLocalImagem() {
        const imagemLocal = localStorage.getItem("image");
        if (imagemLocal) {
            return imagemLocal;
        } else {
            return "";
        }
    }

    return (
        <TokenContext.Provider value={{token, setToken}}>
            <ImageContext.Provider value={{image, setImage}}>
                <AtualizaContext.Provider value={{atualiza, setAtualiza}}>
                    <ConcluidoContext.Provider value={{concluido, setConcluido}}>
                        <SalvoInputContext.Provider value={{inputSalvo, setInputSalvo}}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<TelaLogin />}/>
                                    <Route path="/cadastro" element={<TelaCadastro />} />
                                    <Route path="/habitos" element={<TelaHabitos />} />
                                    <Route path="/hoje" element={<TelaHoje />} />
                                    <Route path="/historico" element={<TelaHistorico />} />
                                </Routes>
                            </BrowserRouter>
                        </SalvoInputContext.Provider>
                    </ConcluidoContext.Provider>
                </AtualizaContext.Provider>
            </ImageContext.Provider>
        </TokenContext.Provider>
    );
}

export default App;