import styled from "styled-components";

import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

function  TelaHistorico() {
    return (
        <>
            <Cabecalho />
            <Historico>
                <Titulo>Meus hábitos</Titulo>
                <Texto>Em breve você poderá ver o histórico dos seus hábitos aqui!</Texto>
            </Historico>
            <Rodape />
        </>
    );
}

export default TelaHistorico;

const Historico = styled.div`
    padding: 100px 17px 0 17px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.div`
    font-size: 23px;
    color: #126BA5;
    margin-bottom: 17px;
`

const Texto = styled.p`
    font-size: 18px;
    color: #666666;
`