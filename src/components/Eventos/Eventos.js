import { useState } from "react";



function Eventos() {
    //EVENTOS COM "USESTATE"
    const [conta, setConta] = useState(0);

    const [nome, setNome] = useState();

    function enviaNome(e) {
        e.preventDefault();
        console.log(`Nome: ${nome} enviado com sucesso`)
    }


    return (
        <>
            <p>O botão foi clicado {conta} vezes</p>
            <button onClick={() => setConta(conta + 1)}>Clique aqui!</button>
            <form action="#">
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                <p>O nome é: {nome}</p>

                <button type="submit" onClick={enviaNome}>Enviar</button>
            </form>
        </>
    )
}

export default Eventos;