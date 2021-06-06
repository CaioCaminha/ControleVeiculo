import React from "react"
import { Box, Button, TextField, Typography } from "@material-ui/core";
import "./style.css"

export default function CadastroVeiculoComponent(){
    let tipo = '';
    let marca = '';
    let modelo = '';
    let ano = '';
    let combustivel = '';


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
        }).then(res => res.json());
    }

    function executa(){
        return window.location.href = 'http://localhost:3000/home';
    }

    return(
        <div  style={{width: '50%', left: '20%', position: "absolute", top: "5%"}}>
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
                    setTimeout(function(){window.location.href = 'https://controle-veiculos-front.herokuapp.com/home'}, 3000)
                }}>CADASTRAR</Button>
            </Box>
        </div>
    );
}