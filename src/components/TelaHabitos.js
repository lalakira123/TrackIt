import styled from "styled-components";

import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function TelaHabitos() {
    return (
        <>
            <Cabecalho />
            <Main>
                <MeusHabitos>
                    <Titulo>Meus hábitos</Titulo>
                    <Button>+</Button>
                </MeusHabitos>
                <SemHabitos>
                    Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!
                </SemHabitos>
            </Main>
            <Rodape />
        </>
    );
}

export default TelaHabitos;

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
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

const SemHabitos = styled.p`
    font-size: 18px;
    color: #666666;
    margin: 30px 17px 0 17px;
`