// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
  // checkAdmin?: boolean;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false); 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authRes = await fetch(`${import.meta.env.VITE_BASE_URL}auth`, {
          credentials: 'include',
        });
        if (authRes.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        setIsAdmin(false); 

        if(checkAdmin) {
          const adminRes = await fetch(`${import.meta.env.VITE_BASE_URL}auth/admin`, {
            credentials: 'include',
          });
          if (adminRes.ok) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    };

    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin, setCheckAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
