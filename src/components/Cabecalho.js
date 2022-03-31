import styled from "styled-components";
import { useContext } from "react";

import ImageContext from "./../contexts/ImageContext";

function Cabecalho() {
    const { image } = useContext(ImageContext);
    return (
        <Header>
            <Titulo>TrackIt</Titulo>
            <Imagem src={image} alt="perfil" />
        </Header>
    );
}

export default Cabecalho;

const Header = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #126BA5;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const Titulo = styled.h1`
    margin-left: 18px;
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: #FFFFFF;
`

const Imagem = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 10px;
`