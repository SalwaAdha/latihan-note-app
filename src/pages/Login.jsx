import { useState } from "react"
import {logins, setTokens} from "../api"

function Login ({onLogin}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");

    const handleLogin = async () => {
        const apiLogin = await logins(email, password);
        console.log(apiLogin)
        if(apiLogin.status === 200) {
            onLogin(apiLogin.data.data.accessToken)
            setTokens(apiLogin.data.data.accessToken)
        }
    }

    return (
        <>
            <div className="bg-gray-200 h-full min-h-screen">
                <h1 className="text-center text-2xl p-5">Login</h1>
                <div className="container flex flex-col">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="input"></input>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className="input"></input>

                    <button onClick={handleLogin} className="bg-blue-500 text-white text-lg rounded-lg px-5 py-3 mt-4" >Registrasi</button>
    
                </div>
            </div>
        </>
    )
}
export default Login