function Button(props) {
    return <button onClick={props.event} className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400">{props.text}</button>
}

export default Button;