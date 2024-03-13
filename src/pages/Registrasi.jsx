function Registrasi () {
    return (
        <>
            <div className="bg-gray-200 h-full min-h-screen">
                <h1 className="text-center text-2xl p-5">Registrasi</h1>
                <div className="container flex flex-col">
                    <input type="text" placeholder="Nama" className="input"></input>
                    <input type="text" placeholder="Email" className="input"></input>
                    <input type="text" placeholder="Password" className="input"></input>

                    <button className="bg-blue-500 text-white text-lg rounded-lg px-5 py-3 mt-4" >Registrasi</button>
    
                </div>
            </div>
        </>
    )
}
export default Registrasi