import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import ImageContext from "./../contexts/ImageContext";

import Logo from "./../assets/img/Group 8.png";

function TelaLogin() {
    const [login, setLogin] = useState({
        email:"",
        password:""
    });

    const navigate = useNavigate();
    const { setImage } = useContext(ImageContext);

    function logar(e) {
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login);
        promise.then((resposta) => {
            console.log(resposta.data);
            navigate("/habitos");
            setImage(resposta.data.image);
        });
        promise.catch(() => alert("Não foi possível realizar o login"));
    }

    return (
        <Container>
            <img src={Logo} alt="Logo"/>
            <Form onSubmit={logar}>
                <Input 
                    placeholder="email"
                    onChange={(e) => setLogin({...login, email: e.target.value})}
                    value={login.email}
                />
                <Input 
                    placeholder="senha"
                    onChange={(e) => setLogin({...login, password: e.target.value})}
                    value={login.password}
                />
                <Button type="submit">Entrar</Button>

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
