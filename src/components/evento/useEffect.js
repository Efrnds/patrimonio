import { useState, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => counter * 2);
    }, [counter]); // <- add the count variable here

    useEffect(() => {
        setTimeout(() => {
            if (count < 1000) {
                setCount(count + 1);
            } else {
                setCount(0);
            }
        }, 1000);

    });
    return (
        <div className='fixed bottom-0 right-0 p-2 mb-1 mr-1 text-white bg-red-600 rounded-lg shadow-md'>
            <h1>Você esteve nesse site por <b>{count}</b> segundos.</h1>
            <>
                <div className="flex flex-col gap-2">
                    <button className='font-bold text-yellow-500 bg-black' onClick={() => {
                        setCounter(counter + 1)
                    }}>aperta 🫵</button>
                    <button className='font-bold text-black bg-white' onClick={() => {
                        setCounter(0)
                    }}>reseta 👍</button>
                </div>
                <p className='text-center'>{counter} * 2 = {calculation}</p>
            </>
        </div>
    );
}

export default Timer;