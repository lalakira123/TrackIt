import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Logo from "./../assets/img/Group 8.png";

function TelaCadastro() {
    const [cadastro, setCadastro] = useState({
        email:"",
        password:"",
        name:"",
        image:""
    });

    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",cadastro);
        promise.then(() => {
            navigate("/");
        });
        promise.catch(() => alert("Não foi possível cadastrar essa conta"));
    }

    return (
        <Container>
           <img src={Logo} alt="Logo"/>
           <Form onSubmit={cadastrar}>
               <Input 
                placeholder="email" 
                onChange={(e) => setCadastro({...cadastro, email: e.target.value})}
                value={cadastro.email}
                />
               <Input 
                placeholder="senha"
                onChange={(e) => setCadastro({...cadastro, password: e.target.value})}
                value={cadastro.password}
                />
               <Input 
                placeholder="nome"
                onChange={(e) => setCadastro({...cadastro, name: e.target.value})}
                value={cadastro.name}
                />
               <Input 
                placeholder="foto"
                onChange={(e) => setCadastro({...cadastro, image: e.target.value})}
                value={cadastro.image}
                />
               <Button type="submit">Cadastrar</Button>
           </Form>
           <Link to="/">
                <Login>Já tem uma conta? Faça login!</Login>
           </Link>
        </Container>
    );
}

export default TelaCadastro;

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

const Login = styled.p`
    margin-top: 25px;
    font-size: 14px;
`