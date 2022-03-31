import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import AtualizaContext from "../contexts/AtualizaContext";

import Lixeira from "./../assets/img/lixeira.png";

function Habito(props) {
    const {atualiza, setAtualiza} = useContext(AtualizaContext);
    const {name, days, id, token} = props;

    const config = {
        headers: { Authorization: `Bearer ${token}`}
    };

    function excluirHabito() {
        if(window.confirm("Tem certeza que gostaria de deletar este hábito?")) {
            const promessa = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config);
            promessa.then(() => setAtualiza(atualiza + 1));
            promessa.catch(() => alert("Não foi possível deletar o hábito"));
        }
    }

    return (
        <Card>
            <Name>{name}</Name>
            <Dias>
                <Dia>D</Dia>
                <Dia>S</Dia>
                <Dia>T</Dia>
                <Dia>Q</Dia>
                <Dia>Q</Dia>
                <Dia>S</Dia>
                <Dia>S</Dia>
            </Dias>
            <Icone onClick={excluirHabito} src={Lixeira} alt="lixeira"/>
        </Card>
    );
}   

export default Habito;

const Card = styled.div`
    position: relative;
    width: 340px;
    background-color: #FFFFFF;
    margin: 20px auto 0 auto;
    border-radius: 5px;
    padding: 18px;
`

const Name = styled.p`
    font-size: 20px;
    color: #666666;
`

const Dias = styled.div`
    display: flex;
    margin-top: 7px;
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

const Icone = styled.img`
    position: absolute;
    top: 17px;
    right: 17px;
    width: 13px;
`