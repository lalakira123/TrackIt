import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import TokenContext from "./../contexts/TokenContext";
import AtualizaContext from "./../contexts/AtualizaContext";

function HabitoHoje(props) {
    const {id, name, done, currentSequence, highestSequence} = props;
    const { atualiza, setAtualiza } = useContext(AtualizaContext);
    const { token } = useContext(TokenContext);
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    const [selecionado, setSelecionado] = useState(done);
    const [bateuRecorde, setBateuRecorde] = useState(done);    

    function toogle() {
        if(done) {
            const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config);
            promessa.then(() => {
                setSelecionado(false);
                setBateuRecorde(false);
                setAtualiza(atualiza + 1);
            });
            promessa.catch((erro) => console.log(erro.response));
        } else {
            const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config);
            promessa.then(() => {
                setSelecionado(true);
                setAtualiza(atualiza + 1);
                if(currentSequence === highestSequence) {
                    setBateuRecorde(true);
                }
            })
            promessa.catch((erro) => console.log(erro.response));
        }
    }

    return (
        <Card onClick={toogle}>
            <Info>
                <Titulo>{name}</Titulo>
                <Recordes>
                    <p>Sequência atual: <Selecionado selecionado={selecionado}>{currentSequence} dias</Selecionado></p>
                    <p>Seu recorde: <Recorde bateuRecorde={bateuRecorde}>{highestSequence} dias</Recorde></p>
                </Recordes>
            </Info>
            <Icone selecionado={selecionado}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </Icone>
        </Card>
    );
}

export default HabitoHoje;

const Card = styled.div`
    position: relative;
    width: 340px;
    background-color: #FFFFFF;
    color: #666666;
    margin: 20px auto 0 auto;
    border-radius: 5px;
    padding: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Info = styled.div`
    width: 70%;
`

const Titulo = styled.p`
    font-size: 20px;
`

const Recordes = styled.div`
    margin-top: 7px;
    font-size: 13px;
`

const Selecionado = styled.span`
    color: ${props => props.selecionado ? "#8FC549" : "#666666"};
`

const Recorde = styled.span`
    color: ${props => props.bateuRecorde ? "#8FC549" : "#666666"};
`

const Icone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background-color: ${props => props.selecionado ? "#8FC549" : "#E7E7E7"};
    color: #FFFFFF;
    font-size: 40px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`
