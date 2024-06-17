function SeuNome({ setNome }) {
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input type="text" name="" placeholder="qual é o seu nome" id="" onChange={(e) => setNome(e.target.value)}/>
        </div>
    );
}

export default SeuNome;