import { useState } from "react"
import { createContext, useContext } from "react"
import { handleLogin } from "../api"

// nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => {},
    doLogout: () => {},
}

// buat context
const AuthContext = createContext(initialAuthState)

// buat custom hook
const useAuth = () => {
    return useContext(AuthContext)
}

// buat provider
const AuthProvider = ({children}) => {
  // state
  const [isLoggedin, setIsLoggedin] = useState(false)

  // function
  const doLogin = async (email, password) => {
    // memanggil api dengan data email & password
    console.log("akan melakukan login dengan: ", email, password)

    //memanggil api menggunakan axios
    const apiResult = await handleLogin(email,password)
    console.log(apiResult)
    console.log(apiResult.data.data.accessToken)

    setIsLoggedin(true)
    console.log('test kepanggil', isLoggedin)
  }

  const doLogout = () => {
    setIsLoggedin(false)
  }

  // return provider 
  return (
    <AuthContext.Provider value={{isLoggedin, doLogin, doLogout}}>
        {children}
    </AuthContext.Provider>
  )
}
  
// export provider & hook
export {AuthProvider, useAuth}