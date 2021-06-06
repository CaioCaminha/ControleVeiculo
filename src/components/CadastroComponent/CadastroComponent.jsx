import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react"
import { Alert } from "@material-ui/lab";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
export default function CadastroComponent(){
    let nome = "";
    let email = "";
    let cpf = "";
    let nascimento = "";
    let password = "";
    const [ativo, setAtivo] = useState();

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
        }).then(res => {
            if(res.ok){
                return setAtivo(true);
            }else{
                return setAtivo(false);
            }
        });
    }

    return(
    <div>
        <header style={{backgroundColor: "#F0F0F0", width: "100%", height: "80px"}}>
            <h2 style={{fontSize: "40px", textAlign: "center", top: "20px", position: 'relative'}}>Controle Veículos</h2>
            <Link to="/login" style={{ right: "40px", position: "absolute", fontSize: "30px", top: "20px"}}>
                Autentique-se!
            </Link>
        </header>

        <div style={{width: '50%', left: '20%', position: "absolute", top: "15%"}}>

            {ativo === false &&
                <Alert severity="error">Verifique os campos e tente novamente</Alert>
            }

            {ativo === true &&
                <Redirect to="/login"/>
            }

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
                    }}>CADASTRAR</Button>
                </Link>
            </Box>

            </div>
    </div>
    );
}