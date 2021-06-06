import React, { useState } from "react"
import { Box, Button, TextField} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginComponent(){
    let cpf = "";
    let password = "";
    const [ativo, setAtivo] = useState();

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
        }).then(res => {
            if(res.ok){
                    res.json()  
                        .then(data => {
                            sessionStorage.setItem('token', data.token)
                            return setAtivo(true); 
                        })
            }else{
                return setAtivo(false);
            }
        });
        
    }

    return(
        <div>
            <header style={{backgroundColor: "#F0F0F0", width: "100%", height: "80px"}}>
                <h2 style={{fontSize: "40px", textAlign: "center", top: "20px", position: 'relative'}}>Controle Veículos</h2>
                <Link to="/" style={{ right: "40px", position: "absolute", fontSize: "30px", top: "20px"}}>
                    Cadastre-se
                </Link>
            </header>
            <div style={{width: '50%', left: '20%', position: "absolute", top: "15%"}}>

                {ativo === false &&
                    <Alert severity="error">Verifique os campos e tente novamente</Alert>
                }

                {ativo === true &&
                    <Redirect to="/home"/>
                }

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
                            }}>LOGIN</Button>
                    </Box>
                </form>
                </div>
        </div>
    );
}