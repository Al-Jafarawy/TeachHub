import { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const { isLoggedIn, setCheckAdmin, authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      await setCheckAdmin(false);
      if (!isLoggedIn && !authLoading) {
        navigate("/login");
      }
    };
    checkAdmin();
  }, [authLoading, isLoggedIn]);

  return (
   <div>
    <h1>Blog</h1>
   </div>
  )
}

export default Blog
