import { useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import Habito from "./Habito";

function Habitos(props) {
    const [temHabito, setTemHabito] = useState(false);
    const [habitos, setHabitos] = useState([]);
    const {token} = props;

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        };
        const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promessa.then((resposta) => {
            const {data} = resposta;
            console.log(data);
            if(data.length > 0){
                setTemHabito(true);
                setHabitos(data);
            }
        });
        promessa.catch((erro) => console.log(erro.response));
    }, [token]);

    return temHabito ? (
        <>
            {habitos.map((habito) => {
                const {name, days, id} = habito;
                    return(
                        <Habito name={name} days={days} key={id}/>
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