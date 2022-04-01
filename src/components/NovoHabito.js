import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import AtualizaContext from "../contexts/AtualizaContext";

function NovoHabito(props) {
    const {setNovoHabito, token} = props;
    const [input, setInput] = useState("");
    const [dias, setDias] = useState([]);
    const [clicou, setClicou] = useState({domingo:false, segunda:false, terca:false, quarta:false, quinta:false, sexta:false, sabado:false})
    const { atualiza, setAtualiza} = useContext(AtualizaContext);

    const parametrosPost = {
        name: input,
        days: dias
    };

    const config = {
        headers: { Authorization: `Bearer ${token}`}
    };

    function toggle(valor, dia) {
        if(dias.includes(valor)) {
            for(let i = 0; i < dias.length; i++) {
                if(dias[i] === valor) {
                    dias.splice(i, 1);
                    setClicou({...clicou, [dia]:false});
                }
            }
        } else {
            setDias([...dias, valor]);
            setClicou({...clicou, [dia]:true});
        }
    }

    function enviarHabito(e) {
        e.preventDefault();
        if (dias.length !== 0) {
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                parametrosPost,
                config
            );
            promise.then(() => {
                setNovoHabito(<></>);
                setAtualiza(atualiza + 1);
            })
            promise.catch(() => alert("Não foi possível salvar o hábito"))
        } else {
            alert("Por favor, selecione pelo menos um dia da semana!");
        }
    }

    return (
        <NovoCard>
            <form onSubmit={enviarHabito}>
                <Input 
                    placeholder="nome do hábito"
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
                <Dias>
                    <Dia selecionado={clicou.domingo} onClick={() => toggle(0, "domingo")}>D</Dia>
                    <Dia selecionado={clicou.segunda} onClick={() => toggle(1, "segunda")}>S</Dia>
                    <Dia selecionado={clicou.terca} onClick={() => toggle(2, "terca")}>T</Dia>
                    <Dia selecionado={clicou.quarta} onClick={() => toggle(3, "quarta")}>Q</Dia>
                    <Dia selecionado={clicou.quinta} onClick={() => toggle(4, "quinta")}>Q</Dia>
                    <Dia selecionado={clicou.sexta} onClick={() => toggle(5, "sexta")}>S</Dia>
                    <Dia selecionado={clicou.sabado} onClick={() => toggle(6, "sabado")}>S</Dia>
                </Dias>
                <Botoes>
                    <Cancelar onClick={() => setNovoHabito(<></>)}>Cancelar</Cancelar>
                    <Salvar type="submit">Salvar</Salvar>
                </Botoes>
            </form>
        </NovoCard>
    );
}

export default NovoHabito;

const NovoCard = styled.div`
    width: 340px;
    background-color: #FFFFFF;
    margin: 20px auto 0 auto;
    border-radius: 5px;
    padding: 18px;
`

const Input = styled.input`
    margin-bottom: 6px;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 11px;
    font-family: 'Lexend Deca', sans-serif;
    &::placeholder {
        color: #DBDBDB;
    }
`

const Dias = styled.div`
    display: flex;
`

const Dia = styled.p`
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px; 
    font-size: 20px;
    padding: 6px 10px;
    margin-right: 4px;
    color: ${props => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"};
`

const Botoes = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: flex-end;
`

const Salvar = styled.button`
    width: 84px;
    height: 35px;
    margin-left:20px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca', sans-serif;
    border: none;
    font-size: 16px;
    color: #FFFFFF;
`

const Cancelar = styled.button`
    border: none;
    background-color: #FFFFFF;
    font-size: 16px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-weight: 400;
`