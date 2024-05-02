function Pessoa({ nome, idade, profissao, foto, tamanho}) {
    return (
        <div className="flex flex-col p-10 m-auto rounded-lg bg-slate-100 w-fit">
            <img src={foto} alt={nome} width={tamanho} height={tamanho}/>
            <h1>{nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;