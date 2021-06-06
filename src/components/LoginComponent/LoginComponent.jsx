import React from "react"
import { Box, Button, Container, DialogTitle, TextField, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { createHashHistory } from 'history'

export default function LoginComponent(){
    let cpf = "";
    let password = "";

    const history = createHashHistory();

    async function login(cpf, password){
        await fetch('https://controle-veiculos-springboot.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cpf: cpf,
                password: password
            })
        }).then(res => res.json().then(data => {
            return sessionStorage.setItem('token', data.token) 
        }));
    }

    return(
        <div style={{width: '50%', left: '20%', position: "absolute", top: "5%"}}>
            <form>
                <h1 style={{fontFamily:"inherit", fontSize: "55px", textAlign:"center"}}>LOGIN</h1>  
                <Box component="div" p={1} m={1} display="block" > 
                    <TextField label="CPF" variant="filled" fullWidth onChange={(event) => {
                        cpf = event.target.value;
                    }}/>
                </Box>
                <Box component="div" p={1} m={1} display="block">
                    <TextField label="Password" variant="filled" fullWidth type="password" onChange={(event) => {
                        password = event.target.value;
                    }}/>
                </Box>
                <Box component="div" p={1} m={1} display="block" width="50%" position="absolute" left="23%">
                        <Button variant="contained" color="primary" size="large" fullWidth onClick={(event) => {
                            event.preventDefault();
                            login(cpf, password);
                            setTimeout(function(){window.location.href = 'http://localhost:3000/home'}, 3000)
                        }}>LOGIN</Button>
                </Box>
            </form>
        </div>
    );
}