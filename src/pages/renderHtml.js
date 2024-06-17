function renderHtml() {
    const color = 'red';
    const cars = ['Ford', 'BMW', 'Audi'];
    const shoot = (a, b) => {
        window.alert(b.type);
    }


    function Goal(props) {
        const isGoal = props.isGoal;
        return (
            <>
                {isGoal ? <h1>gol!</h1> : <h1>whatsapp</h1>}
            </>
        );
    }

    function Car(props) {
        return <h2>Hi, I am a {props.color} Car!</h2>;
    }

    function Garage(props) {
        const cars = props.cars;
        return (
            <>
                <h1>Garage</h1>
                {cars.length > 0 &&
                    <h2>
                        You have {cars.length} cars in your garage.
                    </h2>
                }
            </>
        );
    }

    return (
        <div>
            <h1>React is {5 + 5} times better with JSX</h1>
            <table className='grid mx-auto text-center'>
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>John</td>
                </tr>
                <tr>
                    <td>Elsa</td>
                </tr>
            </table>
            <Goal isGoal={false} />
            <Car color={color} />
            <Garage cars={cars} />
            <button onClick={(event) => shoot("Goal!", event)} className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400">Take the shot!</button>
        </div>
    );
}
export default renderHtml;