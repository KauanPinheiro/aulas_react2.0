import { useState } from "react";
import axios from "axios";
import './consumindoapi.css'

function ConsumindoApi() {
    const [buscaCep, setBuscaUser] = useState();
    const [data, setData] = useState([]);

    const api = `https://viacep.com.br/ws/${buscaCep}/json`;

    function buscaApi(e) {
        e.preventDefault();
        console.log(api);

        axios.get(api)
            .then(response => {
                console.log(response.data);
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <form>
                <label>Pesquisar usuário: </label>
                <br />
                <input type="text" value={buscaCep} onChange={(e) => setBuscaUser(e.target.value)}  />
                <br />
                <button onClick={buscaApi}>Pesquisar</button>
            </form>
            <div className="conteudo">
            <p>{ data.length === 0 ? 'Digite um cep para buscar '
            :
                `${data.logradouro} ,
                ${data.bairro} ,
                ${data.localidade} .
                ${data.uf}     
                ${data.cep}`}</p>
                </div>
        </div>
    )
}

export default ConsumindoApi;