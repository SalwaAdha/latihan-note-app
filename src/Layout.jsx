// import { Link, Outlet } from "react-router-dom";

// export default function Layout(){
//     return(
//         <>
//         <div className="flex gap-2 py-2 h=[55px] items-center justify-around bg-white">
//             <h1>Note App</h1>
//             <nav className="flex gap-5 items-center">
//                 <Link to={"/Login"}><p>Login</p></Link>
//                 <Link to={"/Registrasi"}><p>Registrasi</p></Link>
//             </nav>
//         </div>
//         <Outlet/>
//         </>
//     );
// }

import { Link, Outlet } from "react-router-dom";
//ya ini
export default function Layout(){
    return(
        <>
        <div className="flex bg-indigo-200 justify-around">
            <h1 className="font-bold text-2xl">NOTE APP</h1>
            <nav className="flex gap-5 h-10 ">
                <Link to={"/Login"} className="text-2xl"><span>Login</span></Link>
                <Link to={"/registrasi"} className="text-2xl"><span>Registrasi</span></Link>
                <Link to={"/note"} className="text-2xl"><span>Note</span></Link>
            </nav>
        </div>
        <Outlet/>
        </>
    );
}