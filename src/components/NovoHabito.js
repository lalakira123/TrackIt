import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function NovoHabito(props) {
    const {setNovoHabito, token} = props;
    const [input, setInput] = useState("");
    const [dias, setDias] = useState([]);

    const parametrosPost = {
        name: input,
        days: dias
    };

    const config = {
        headers: { Authorization: `Bearer ${token}`}
    };

    function toggle(valor) {
        if(dias.includes(valor)) {
            for(let i = 0; i < dias.length; i++) {
                if(dias[i] === valor) {
                    dias.splice(i, 1);
                }
            }
        } else {
            setDias([...dias, valor]);
        }
    }

    function enviarHabito(e) {
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
            parametrosPost,
            config
        );
        promise.then((resposta) => {
            console.log(resposta.data);
            setNovoHabito(<></>);
        })
        promise.catch(() => alert("Não foi possível salvar o hábito"))
    }

    return (
        <NovoCard>
            <form onSubmit={enviarHabito}>
                <Input 
                    placeholder="nome do hábito"
                    onChange={(e) => setInput(e.target.value)}/>
                <Dias>
                    <Dia onClick={() => toggle(7)}>D</Dia>
                    <Dia onClick={() => toggle(1)}>S</Dia>
                    <Dia onClick={() => toggle(2)}>T</Dia>
                    <Dia onClick={() => toggle(3)}>Q</Dia>
                    <Dia onClick={() => toggle(4)}>Q</Dia>
                    <Dia onClick={() => toggle(5)}>S</Dia>
                    <Dia onClick={() => toggle(6)}>S</Dia>
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
    color: #DBDBDB;
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
    border: none;
    font-size: 16px;
    color: #FFFFFF;
`

const Cancelar = styled.button`
    border: none;
    background-color: #FFFFFF;
    font-size: 16px;
    color: #52B6FF;
    font-weight: 400;
`