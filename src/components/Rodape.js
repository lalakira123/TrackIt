import { Link } from "react-router-dom";
import styled from "styled-components";

function Rodape() {
    return (
        <Footer>
            <Link to="/habitos">
                <Habitos>Hábitos</Habitos>
            </Link>
            <Link to="/hoje">
                <p>Hoje</p>
            </Link>
            <Link to="/historico">
                <Historico>Histórico</Historico>
            </Link>
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