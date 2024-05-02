import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email);
        console.log(userEmail);
    }

    function limparEmail() {
        setUserEmail("");
    }
    return (
        <div>
            <h2>Cadastre o seu Email</h2>
            <form>
                <input type="email" id="email" placeholder="Digite o seu email" 
                onChange={(e) => {setEmail(e.target.value);}} />
                <button type="submit" className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400" onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>Email cadastrado: {userEmail}</p>
                        <button onClick={limparEmail} className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400">Limpar o email</button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Condicional;