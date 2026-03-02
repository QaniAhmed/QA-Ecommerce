import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// 1. إنشاء السياق (Context)
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // تخزين بيانات المستخدم
  const [loading, setLoading] = useState(true); // حالة التحميل عند فتح الموقع

  // دالة لفحص الجلسة من السيرفر
  const checkUser = async () => {
    try {
      // نطلب من السيرفر التحقق من الكوكي
      const { data } = await axios.get("http://localhost:5000/profile",{
        withCredentials:true
      });
      setUser(data.Details); // نضع بيانات المستخدم (الاسم، الايد، الخ) في الـ State
      console.log(data.Details)
    } catch (err) {
      setUser(null); // إذا فشل أو لا يوجد كوكي، يبقى المستخدم null
    } finally {
      setLoading(false); // انتهينا من الفحص
    }
  };

  // تشغيل الفحص فور فتح الموقع (أو عند عمل Refresh)
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