import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import AtualizaContext from "../contexts/AtualizaContext";
import SalvoInputContext from "../contexts/SalvoInputContext";

function NovoHabito(props) {
    const { atualiza, setAtualiza} = useContext(AtualizaContext);
    const { inputSalvo, setInputSalvo} = useContext(SalvoInputContext);

    const {setNovoHabito, token} = props;
    const [input, setInput] = useState(inputSalvo !== null ? inputSalvo : input);
    const [dias, setDias] = useState([]);
    const [clicou, setClicou] = useState({domingo:false, segunda:false, terca:false, quarta:false, quinta:false, sexta:false, sabado:false})
    const [carregando, setCarregando] = useState(false);

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
            setCarregando(true);
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                parametrosPost,
                config
            );
            promise.then(() => {
                setNovoHabito(<></>);
                setAtualiza(atualiza + 1);
                setInputSalvo("");
            });
            promise.catch(() => {
                alert("Não foi possível salvar o hábito")
                setCarregando(false);
            });
        } else {
            alert("Por favor, selecione pelo menos um dia da semana!");
        }
    }
    
    function validarInput(e) {
        e.preventDefault();
        setInputSalvo(input);
        setNovoHabito(<></>);
    }

    return (
        <NovoCard>
            <form onSubmit={enviarHabito} onReset={validarInput}>
                <Input 
                    placeholder="nome do hábito"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    required
                    disabled={carregando}
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
                    <Cancelar type="reset" disabled={carregando}>Cancelar</Cancelar>
                    <Salvar type="submit" disabled={carregando}>
                        {carregando ? 
                            (<ThreeDots height="38px" width="48px" color='#FFFFFF' ariaLabel='loading'/>)
                            :
                            (<p>Salvar</p>)
                        }
                    </Salvar>
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
    display: flex;
    align-items: center;
    justify-content: center;
`

const Cancelar = styled.button`
    border: none;
    background-color: #FFFFFF;
    font-size: 16px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-weight: 400;
`