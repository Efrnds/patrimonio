import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("red");
    const [bgColor, setBgColor] = useState("#fff");
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964"
    });
    return (
        <div className="flex flex-col">
            <h1>My favorite color is <b style={{ backgroundColor: bgColor }} className="px-2 py-1 text-white transition rounded">{color}</b>!</h1>
            <div className="flex gap-1 my-2">
                <button
                    type="button"
                    className="px-2 mx-auto font-bold text-white bg-blue-500 rounded-lg w-fit "
                    onClick={() => {
                        setColor("blue");
                        setBgColor("#3b82f6");
                    }}
                >Blue</button>
                <button
                    type="button"
                    className="px-2 mx-auto font-bold text-white bg-red-500 rounded-lg w-fit"
                    onClick={() => {
                        setColor("red");
                        setBgColor("#ef4444");
                    }}
                >Red</button>
                <button
                    type="button"
                    className="px-2 mx-auto font-bold text-white bg-pink-500 rounded-lg w-fit"
                    onClick={() => {
                        setColor("pink");
                        setBgColor("#ec4899");
                    }}
                >Pink</button>
                <button
                    type="button"
                    className="px-2 mx-auto font-bold text-white rounded-lg bg-emerald-500 w-fit"
                    onClick={() => {
                        setColor("green");
                        setBgColor("#10b981");
                    }}
                >Green</button>
            </div>
            <>
                <h1 className="my-2 text-xl font-bold">My {car.brand}</h1>
                <p>
                    It is a <b style={{ backgroundColor: bgColor }} className="px-2 py-1 text-white transition rounded">{color}</b> {car.model} from {car.year}.
                </p>
            </>
        </div>
    );
}

export default FavoriteColor;