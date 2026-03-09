import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

  const checkUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/profile",{
        withCredentials:true
      });
      setUser(data.Details); 
      console.log(data.Details)
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, checkUser }}>
      {children}
    </AuthContext.Provider>
  );
};



// هوك (Hook) مخصص لسهولة الاستخدام في أي مكان
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);