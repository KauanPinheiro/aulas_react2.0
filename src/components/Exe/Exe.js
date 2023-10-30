import {useState} from "react"

function Exe(){

    const [login , setLogin] = useState();
    const [senha,setSenha] = useState();

    function enviaBtn(){
        if(login === "teste" && senha === "1234" ){
            console.log(`Login feito com sucesso !`)
        }else{
            if(login === "teste") {
                console.log(`Senha errada`)
            }else if (senha === "1234"){
                console.log(`Login errado`)
            }
        }
        
        
    }


    return(
        <div>
        <form action="#">
            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
            <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha"/>

            <button type="submit" onClick={enviaBtn}>Enviar</button>
        </form>
        </div>

    )
}

export default Exe;