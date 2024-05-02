import {Link} from "react-router-dom";
function NavBar() {
    return (
    <ul className="flex gap-2 my-auto">
        <li className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400"><Link to="/" >Home</Link></li>
        <li className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400"><Link to="/Empresa">Empresa</Link></li>
        <li className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400"><Link to="/Contato">Contato</Link></li>
    </ul>
    )
}

export default NavBar;