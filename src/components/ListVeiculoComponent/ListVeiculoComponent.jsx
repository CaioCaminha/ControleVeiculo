import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react"
export default function ListVeiculoComponent(){

        const [veiculos, setVeiculos] = useState([]);
    
        useEffect(() => {
                return fetch('https://controle-veiculos-springboot.herokuapp.com/veiculos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }).then(res => res.json().then(data => {
                setVeiculos(data.content);
            }))
        })
    
    
        return(
            <div>
            <TableContainer component="div">
                <Table className="class" size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Marca</TableCell>
                        <TableCell>Modelo</TableCell>
                        <TableCell>Ano</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>Rodízio</TableCell>
                        <TableCell>Combustível</TableCell>
                        <TableCell>Usuario</TableCell>
                        <TableCell>Rodizio ativo</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {veiculos.map((veiculo) => (
                        <TableRow key={veiculo.id}>
                        <TableCell >
                            {veiculo.id}
                        </TableCell>
                        <TableCell align="center">{veiculo.tipo}</TableCell>
                        <TableCell align="center">{veiculo.marca}</TableCell>
                        <TableCell align="center">{veiculo.modelo}</TableCell>
                        <TableCell align="center">{veiculo.ano}</TableCell>
                        <TableCell align="center">{veiculo.valor}</TableCell>
                        <TableCell align="center">{veiculo.diaRodizio}</TableCell>
                        <TableCell align="center">{veiculo.combustivel}</TableCell>
                        <TableCell align="center">{veiculo.usuario}</TableCell>
                        <TableCell align="center">{veiculo.rodizioAtivo}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" style={{position: "relative", marginTop: "3%", marginLeft: "35%", width: "30%"}} onClick={(event) => {
                event.preventDefault();
                window.location.href = 'http://localhost:3000/veiculo'
            }}>CADASTRAR VEICULO</Button>
            </div>
    );
}