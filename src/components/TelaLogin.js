import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "./../assets/img/Group 8.png";

function TelaLogin() {
    return (
        <Container>
            <img src={Logo} alt="Logo"/>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Link to="/habitos" >
                    <Button>Entrar</Button>
                </Link>
            </Form> 
            <Link to="/cadastro">
                <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
            </Link>
        </Container>
    )
}

export default TelaLogin;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 68px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
`

const Input = styled.input`
    margin-bottom: 6px;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
`

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;
    font-size: 21px;
    color: #FFFFFF;
`

const Cadastro = styled.p`
    margin-top: 25px;
    font-size: 14px;
`
