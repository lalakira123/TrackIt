import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import ImageContext from "./../contexts/ImageContext";
import TokenContext from "./../contexts/TokenContext";

import Logo from "./../assets/img/Group 8.png";

function TelaLogin() {
    const [login, setLogin] = useState({
        email:"",
        password:""
    });
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();
    const { setImage } = useContext(ImageContext);
    const { setToken } = useContext(TokenContext);

    function logar(e) {
        e.preventDefault();
        setCarregando(true);
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login);
        promise.then((resposta) => {
            navigate("/hoje");
            setImage(resposta.data.image);
            setToken(resposta.data.token);
            localStorage.setItem("token", resposta.data.token);
            localStorage.setItem("image", resposta.data.image);
        });
        promise.catch(() => {
            alert("Não foi possível realizar o login")
            setCarregando(false);
        });
    }

    return (
        <Container>
            <img src={Logo} alt="Logo"/>
            <Form onSubmit={logar}>
                <Input 
                    placeholder="email"
                    onChange={(e) => setLogin({...login, email: e.target.value})}
                    value={login.email}
                    required
                    type="email"
                    disabled={carregando}
                />
                <Input 
                    placeholder="senha"
                    onChange={(e) => setLogin({...login, password: e.target.value})}
                    value={login.password}
                    required
                    type="password"
                    disabled={carregando}
                />
                <Button type="submit" disabled={carregando}>
                    {carregando ? 
                        (<ThreeDots height="38px" width="48px" color='#FFFFFF' ariaLabel='loading'/>)
                        :
                        (<p>Entrar</p>)
                    }
                </Button>
            </Form> 
            <Cadastro>
                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </Cadastro>
        </Container>
    )
}

export default TelaLogin;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    height: 100vh;
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
    font-size: 20px;
    padding-left: 11px;
    font-family: 'Lexend Deca', sans-serif;
    &::placeholder {
        color: #DBDBDB;
    }
`

const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;
    font-size: 21px;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Cadastro = styled.div`
    margin-top: 25px;
    font-size: 14px;
    text-decoration: underline;
`
