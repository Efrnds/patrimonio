import {Link} from "react-router-dom";
function NavBar() {
    return (
    <ul className="flex flex-wrap gap-2 my-auto">
        <li><Link  className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400" to="/" >Home</Link></li>
        <li><Link  className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400" to="/Empresa">Empresa</Link></li>
        <li><Link  className="px-4 font-bold transition shadow-md text-slate-600 active:shadow-none active:text-white active:bg-cyan-600 bg-cyan-400" to="/Contato">Contato</Link></li>
    </ul>
    )
}

export default NavBar;