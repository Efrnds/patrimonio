import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Senha', password);
        console.log('Usuário cadastrado com sucesso!');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form className="flex flex-col gap-5" onSubmit={cadastrarUsuario}>
                <div className="flex flex-col text-start">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite o seu email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-start">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Cadastrar" placeholder="enviar" className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400" />
            </form>
        </div>
    );
}

export default Form;