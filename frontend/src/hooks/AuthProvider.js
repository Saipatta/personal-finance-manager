import { createContext, useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate = Navigate();
    const [token, setToken] = useState("");
    const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/api/auth/login", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = ()=> {
    if(token !== "") {
        localStorage.removeItem("token");
        setToken("");
        navigate("/login");
    }
  }

  return(
    <AuthContext.Provider value={{token, handleLogin, handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}


