import { Link, Outlet } from "react-router-dom";

export default function Layout({token,onLogout}){
    // INI CONTOH PERUBAHAN //
    return(
        <>
        <div className="flex justify-around gap-2 bg-blue-200 h-[70px] py-4 text-align text-2xl ">
            <h1>Vote</h1>
            <nav className="flex gap-10 item-center">
                {token !== null ? null : <Link to={'/Register'}><p className="text-black font-sans hover:text-slate-400">Registrasi</p></Link>}
                {token !== null ? null : <Link to={'/Login'}><p className="text-black font-sans hover:text-slate-400">Login</p></Link>}
                <Link to={"/Note"}><p className="text-black hover:text-slate-400 font-bold text-[20px]">Notes</p></Link>
                {token !== null ? <Link onClick={() => onLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}
            </nav>
        </div>
        <Outlet/>
        </>
    )
}