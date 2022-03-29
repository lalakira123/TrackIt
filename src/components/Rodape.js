import styled from "styled-components";

function Rodape() {
    return (
        <Footer>
            <Habitos>Hábitos</Habitos>
            <Historico>Histórico</Historico>
        </Footer>
    );
}

export default Rodape;

const Footer = styled.div`
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #52B6FF;
`

const Habitos = styled.p`
    margin-left: 36px;
`

const Historico = styled.p`
    margin-right: 26px;
`