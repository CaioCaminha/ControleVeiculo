import React, { useState } from "react"
import { Box, Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link, Redirect } from "react-router-dom";    
import "./style.css"

export default function CadastroVeiculoComponent(){
    let tipo = '';
    let marca = '';
    let modelo = '';
    let ano = '';
    let combustivel = '';
    const [ativo, setAtivo] = useState();


    async function criaVeiculo(tipo, marca, modelo, ano, combustivel){
        return fetch('https://controle-veiculos-springboot.herokuapp.com/veiculos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
            body: JSON.stringify({
                tipo: tipo,
                marca: marca,
                modelo: modelo,
                ano: ano,
                combustivel: combustivel
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
                <Link to="/home" style={{ right: "40px", position: "absolute", fontSize: "30px", top: "20px"}}>
                    HOME
                </Link>
            </header>
            <div  style={{width: '50%', left: '20%', position: "absolute", top: "15%"}}>

                {ativo === false &&
                    <Alert severity="error">Verifique os campos e tente novamente</Alert>
                }

                {ativo === true &&
                    <Redirect to="/home"/>
                }

                <h1 style={{fontFamily:"inherit", fontSize: "55px", textAlign:"center"}}>Cadastro Veículo</h1>  
                <Box className="box" className="box" component="div" p={1} m={1} display="block" > 
                    <TextField label="Marca" variant="filled" fullWidth onChange={(event) => {
                        marca = event.target.value;
                    }}/>
                </Box>
                <Box className="box" component="div" p={1} m={1} display="block">
                    <TextField label="Modelo" variant="filled" fullWidth onChange={(event) => {
                        modelo = event.target.value;
                    }}/>
                </Box>
                <Box className="box" component="div" p={1} m={1} display="block">
                    <TextField label="Ano de Fabricação" variant="filled" type="number" fullWidth onChange={(event) => {
                        ano = event.target.value;
                    }}/>
                </Box>
                <Box className="box" component="div" p={1} m={1} display="block">
                    <TextField label="Tipo de veículo" variant="filled" fullWidth onChange={(event) => {
                        tipo = event.target.value;
                    }}/>
                </Box>
                <Box className="box" component="div" p={1} m={1} display="block">
                    <TextField label="Combustível" variant="filled" fullWidth onChange={(event) => {
                        combustivel = event.target.value;
                    }}/>
                </Box>
                <Box className="button" component="div" p={1} m={1} display="block" width="50%" position="absolute" left="23%">
                    <Button variant="contained" color="primary" size="large" fullWidth onClick={(event) => {
                        event.preventDefault();
                        criaVeiculo(tipo, marca, modelo, ano, combustivel);
                    }}>CADASTRAR</Button>
                </Box>
            </div>
        </div>
    );
}