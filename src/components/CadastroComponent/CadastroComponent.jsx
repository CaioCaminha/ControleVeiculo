import { Box, Button, TextField } from "@material-ui/core";
import React, { useEffect } from "react"
import { Link } from "react-router-dom";
export default function CadastroComponent(){
    let nome = "";
    let email = "";
    let cpf = "";
    let nascimento = "";
    let password = "";

    async function handleCadastro(nome, email, cpf, nascimento, password){
        await fetch('https://controle-veiculos-springboot.herokuapp.com/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                password: password,
                cpf: cpf,
                nascimento: nascimento
            })
        }).then(res => res.json());
    }

    return(
    <div>
        <Link to="/login"><h3 style={{ position: "absolute", right: "20px", fontSize: "25px"}}>Já possui cadastro? Faça login</h3></Link>

        <div style={{width: '50%', left: '20%', position: "absolute", top: "5%"}}>

            <h1 style={{fontFamily:"inherit", fontSize: "55px", textAlign:"center"}}>Cadastro Usuário</h1>

            <Box component="div" p={1} m={1} display="block" > 
                <TextField label="Nome" variant="filled" fullWidth onChange={(event) => {
                    nome = event.target.value;
                }}/>
            </Box>

            <Box component="div" p={1} m={1} display="block">
                <TextField label="Email" variant="filled" fullWidth onChange={(event) => {
                    email = event.target.value;
                }}/>
            </Box>

            <Box component="div" p={1} m={1} display="block">
                <TextField label="CPF" variant="filled" fullWidth onChange={(event) => {
                    cpf = event.target.value;
                }}/>
            </Box>

            <Box component="div" p={1} m={1} display="block">
                <TextField label="Data de Nascimento" variant="filled" fullWidth onChange={(event) => {
                    nascimento = event.target.value;
                }}/>
            </Box>

            <Box component="div" p={1} m={1} display="block">
                <TextField label="Password" variant="filled" fullWidth onChange={(event) => {
                    password = event.target.value;
                }}/>
            </Box>

            <Box component="div" p={1} m={1} display="block" width="50%" position="absolute" left="23%">
                <Link to="/login">
                    <Button variant="contained" color="primary" size="large"  fullWidth onClick={(event) => {
                        event.preventDefault();
                        handleCadastro(nome, email, cpf, nascimento, password);
                        setTimeout(function(){window.location.href = 'http://localhost:3000/login'}, 3000)
                    }}>CADASTRAR</Button>
                </Link>
            </Box>

            </div>
    </div>
    );
}