import { useContext, useEffect, useState } from "react";
import axios from "axios";

import TokenContext from "./../contexts/TokenContext";
import AtualizaContext from "./../contexts/AtualizaContext";

import HabitoHoje from "./HabitoHoje";

function HabitosHoje() {
    const { token } = useContext(TokenContext);
    const { atualiza } = useContext(AtualizaContext);
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };
    
    const [habitosDia, setHabitosDia] = useState([]);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promessa.then((resposta) => {
            const {data} = resposta;
            setHabitosDia(data);
        })
        promessa.catch(() => console.log("Carregando ..."));
    },[token, atualiza]); 

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