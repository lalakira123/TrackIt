import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

import ConcluidoContext from "./../contexts/ConcluidoContext";

function Rodape() {
    const { concluido } = useContext(ConcluidoContext);
    return (
        <Footer>
            <Link to="/habitos">
                <Habitos>Hábitos</Habitos>
            </Link>
            <Container>
                <Link to="/hoje">
                    <CircularProgressbar 
                        value={concluido} 
                        text={`Hoje`}
                        styles={buildStyles({
                            textColor: "#FFFFFF",
                            textSize: "22px",
                            trailColor: "none",
                            pathColor: "#FFFFFF"
                        })}
                    />
                </Link>
            </Container>
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

const Container = styled.div`
    margin-bottom: 50px;
    width: 90px;
    height: 90px;
    background-color: #52B6FF;
    border-radius: 100px;
    border: 6px solid #52B6FF;
    color: #FFFFFF;
`

const Habitos = styled.p`
    margin-left: 36px;
    font-size: 18px;
`

const Historico = styled.p`
    margin-right: 26px;
    font-size: 18px;
`