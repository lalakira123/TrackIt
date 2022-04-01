import { useContext, useEffect, useState } from "react";
import axios from "axios";

import TokenContext from "./../contexts/TokenContext";
import AtualizaContext from "./../contexts/AtualizaContext";
import ConcluidoContext from "./../contexts/ConcluidoContext";

import HabitoHoje from "./HabitoHoje";

function HabitosHoje() {
    const { token } = useContext(TokenContext);
    const { atualiza } = useContext(AtualizaContext);
    const { setConcluido } = useContext(ConcluidoContext);
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };
    
    const [habitosDia, setHabitosDia] = useState([]);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promessa.then((resposta) => {
            const {data} = resposta;
            setHabitosDia(data);
            calcularQntdConcluido(data);
        })
        promessa.catch(() => console.log("Carregando ..."));
    },[token, atualiza]); 

    function calcularQntdConcluido(habitos) {
        const qntdConcluido = habitos.filter((habito) => {
            return habito.done === true;
        })
        let porcentagem = (qntdConcluido.length/habitos.length) * 100;
        setConcluido(Math.round(porcentagem));
    }

    return habitosDia.length > 0? (
        <>
            {habitosDia.map((habito) => {
                const {id, name, done, currentSequence, highestSequence} = habito;
                return (
                    <HabitoHoje 
                        key={id}
                        id={id}
                        name={name}
                        done={done}
                        currentSequence={currentSequence}
                        highestSequence={highestSequence}
                    />
                );
            })}
        </>
    ): <></>
}

export default HabitosHoje;