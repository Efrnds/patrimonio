function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tudo bem?`;
    }

    return <>{nome.length <= 0 ? <p>Insira o seu nome</p> : <p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao;