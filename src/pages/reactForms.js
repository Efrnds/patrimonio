import { useState } from 'react';
import ReactDOM from 'react-dom/client';
function MyForm() {
    const [inputs, setInputs] = useState("");
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleText = (event) => {
        setTextarea(event.target.value);
    }

    const handleSelect = (event) => {
        setMyCar(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit} className='grid'>
            <label className='flex flex-col'>
                Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    className="p-1 m-1 bg-white text-slate-400"
                    onChange={handleChange}
                />
            </label>
            <label className='flex flex-col'>
                Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                    className="p-1 m-1 bg-white text-slate-400"
                />
            </label>
            <select value={myCar} onChange={handleSelect}>
                <option value="Ford">Ford</option>
                <option value="Volvo" selected>Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <textarea value={textarea} onChange={handleText} />
            <input type="submit" />
        </form>
    )
}

export default MyForm;