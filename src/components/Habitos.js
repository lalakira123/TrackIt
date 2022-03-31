import { useState, useEffect, useContext} from "react";
import styled from "styled-components";
import axios from "axios";

import Habito from "./Habito";

import AtualizaContext from "../contexts/AtualizaContext";

function Habitos(props) {
    const [habitos, setHabitos] = useState([]);
    const {token} = props;
    const {atualiza} = useContext(AtualizaContext);

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        };
        const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promessa.then((resposta) => {
            const {data} = resposta;
            if(data.length > 0){
                setHabitos(data);
            }
        });
        promessa.catch(() => console.log("Tente Novamente"));
    }, [token, atualiza]);

    return habitos.length > 0 ? (
        <>
            {habitos.map((habito) => {
                const {name, days, id} = habito;
                    return(
                        <Habito 
                            key={id} 
                            name={name} 
                            days={days} 
                            id={id} 
                            token={token}
                        />
                    );
                })
            }
        </>
    ):( <SemHabitos>
        Você não tem nenhum hábito cadastrado ainda. 
        Adicione um hábito para começar a trackear!
        </SemHabitos>
    )
}

export default Habitos;

const SemHabitos = styled.p`
    font-size: 18px;
    color: #666666;
    margin: 30px 17px 0 17px;
`