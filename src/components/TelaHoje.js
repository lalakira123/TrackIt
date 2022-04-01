import { useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import HabitosHoje from "./HabitosHoje";

import ConcluidoContext from "../contexts/ConcluidoContext";

function TelaHoje() {
    const { concluido } = useContext(ConcluidoContext);

    const date = dayjs().locale("pt-br").format("dddd, DD/MM");
    const upperDate = date[0].toUpperCase() + date.substring(1);

    return  (
        <>
            <Cabecalho/>
            <Main >
                <Hoje>
                    <Titulo>{upperDate}</Titulo>
                    <Concluido>
                        {concluido === 0 ? 
                            <p>Nenhum hábito concluído ainda</p> 
                            : <Progresso>{concluido}% dos hábitos concluídos</Progresso> 
                        }
                    </Concluido>
                </Hoje>
                <HabitosHoje />
            </Main>
            <Rodape />
        </>
    );
}

export default TelaHoje;

const Main = styled.main`
    margin-bottom: 100px;
`

const Hoje = styled.div`
    padding: 100px 17px 0 17px;
`

const Titulo = styled.div`
    font-size: 23px;
    color: #126BA5;
`

const Concluido = styled.div`
    font-size: 18px;
    color: #BABABA;
    margin-top: 10px;
`

const Progresso = styled.p`
    color: #8FC549;
`