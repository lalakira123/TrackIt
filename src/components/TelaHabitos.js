import { useState, useContext } from "react";
import styled from "styled-components";

import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

import TokenContext from "./../contexts/TokenContext";

function TelaHabitos() {
    const [ novoHabito, setNovoHabito] = useState(<></>);

    const { token } = useContext(TokenContext);
    console.log(token);

    function adicionarHabito() {
        setNovoHabito(
            <NovoHabito>
                <Input placeholder="nome do hábito"/>
                <Dias>
                    <Dia>D</Dia>
                    <Dia>S</Dia>
                    <Dia>T</Dia>
                    <Dia>Q</Dia>
                    <Dia>Q</Dia>
                    <Dia>S</Dia>
                    <Dia>S</Dia>
                </Dias>
                <Botoes>
                    <Cancelar onClick={cancelar}>Cancelar</Cancelar>
                    <Salvar>Salvar</Salvar>
                </Botoes>
            </NovoHabito>
        );
    }

    function cancelar() {
        setNovoHabito(<></>);
    }

    return (
        <>
            <Cabecalho />
            <Main>
                <MeusHabitos>
                    <Titulo>Meus hábitos</Titulo>
                    <Button onClick={adicionarHabito}>+</Button>
                </MeusHabitos>
                {novoHabito}
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

const NovoHabito = styled.div`
    width: 340px;
    height: 180px;
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

const SemHabitos = styled.p`
    font-size: 18px;
    color: #666666;
    margin: 30px 17px 0 17px;
`