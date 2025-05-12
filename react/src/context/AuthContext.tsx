// src/context/AuthContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  isAdmin: boolean;
  authLoading: boolean;
  userId: string | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
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
  const [authLoading, setAuthLoading] = useState(true); 
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authRes = await fetch(`${import.meta.env.VITE_BASE_URL}users/auth`, {
          credentials: 'include',
        });
        if (authRes.ok) {
          setIsLoggedIn(true);
          const data = await authRes.json();
          setUserId(data.user._id); // Set the userId in state
        } else {
          setIsLoggedIn(false);
        }
        setIsAdmin(false); 
        if(checkAdmin) {
          const adminRes = await fetch(`${import.meta.env.VITE_BASE_URL}users/auth/admin`, {
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
      } finally {
        setAuthLoading(false); 
      }
    };

    checkAuth();
  }, [checkAdmin]);
  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin, setCheckAdmin, authLoading, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
