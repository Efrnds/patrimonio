import Button from "./evento/Button";

function Evento({ numero = 0 }) {
    function meuEvento() {
        console.log("Evento disparado!");
    }

    function segundoEvento() {
        console.log("Segundo evento disparado!");
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <div className="flex flex-col gap-3 mt-3">
                <Button event={meuEvento} text="Primeiro Evento" />
                <Button event={segundoEvento} text="Segundo Evento" />
            </div>
            <p className="px-6 m-auto bg-slate-100 w-fit" id="zap"></p>
        </div>
    );
}

export default Evento;