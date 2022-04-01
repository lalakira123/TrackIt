import { useState, useContext } from "react";
import styled from "styled-components";

import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import NovoHabito from "./NovoHabito";
import Habitos from "./Habitos";

import TokenContext from "./../contexts/TokenContext";

function TelaHabitos() {
    const [ novoHabito, setNovoHabito] = useState(<></>);

    const { token } = useContext(TokenContext);

    return (
        <>
            <Cabecalho />
            <Main>
                <MeusHabitos>
                    <Titulo>Meus hábitos</Titulo>
                    <Button 
                        onClick={() => setNovoHabito(
                                        <NovoHabito 
                                            setNovoHabito={setNovoHabito}
                                            token={token}
                                        />
                                    )
                                }
                    >
                    +
                    </Button>
                </MeusHabitos>
                {novoHabito}
                <Habitos token={token}/>
            </Main>
            <Rodape />
        </>
    );
}

export default TelaHabitos;

const Main = styled.main`
    background-color: #E5E5E5;
    margin-bottom: 100px;
`

const MeusHabitos = styled.div`
    padding: 100px 17px 0 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Titulo = styled.div`
    font-size: 23px;
    color: #126BA5;
`

const Button = styled.button`
    border: none;
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 40px;
    height: 35px;   
    color: #FFFFFF;
    font-size: 27px;
`