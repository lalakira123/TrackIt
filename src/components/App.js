import { BrowserRouter, Routes, Route } from "react-router-dom";

import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";

import "./../assets/css/reset.css";
import "./../assets/css/style.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaLogin />}/>
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/habitos" element={<TelaHabitos />} />
                <Route path="/hoje" element={<TelaHoje />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;