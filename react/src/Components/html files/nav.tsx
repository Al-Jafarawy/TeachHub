import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';
import '../css/main/nav.css';

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setCheckAdmin, authLoading } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const checkAdmin = async () => {
      await setCheckAdmin(true);
    };
    checkAdmin();
  }, [authLoading, isLoggedIn]);

  const handelLogout = async () => {
    try {
      const BASEURL = import.meta.env.VITE_BASE_URL;
      const res = await fetch(`${BASEURL}users/auth/logout`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Logout failed');
      setIsLoggedIn(false);
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err instanceof Error ? err.message : err);
    }
  };

  return (
    <header className="bg-gradient-to-r from-[#C89934] to-indigo-700 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            TeachHub
          </Link>

          {/* Desktop Navigation - Hidden on medium & smaller screens */}
          <nav className="hidden lg:flex space-x-6 mobile-hidden-nav">
            {[
              ['/', 'Home'],
              ['/profile', 'Profile'],
              ['/reports', 'Reports'],
              ['/works', 'Works'],
              ['/about', 'About'],
              ['/top-students', 'Top Students'],
              ['/courses', 'Course'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons (Desktop) */}
          {!authLoading &&
            (isLoggedIn ? (
              <button
                onClick={handelLogout}
                className="hidden lg:block bg-white text-[#C89934] hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition duration-300"
              >
                Logout
              </button>
            ) : (
              <div className="hidden lg:flex space-x-3">
                <Link
                  to="/login"
                  className="bg-white text-[#C89934] hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className=" sign-up-btn bg-[#C89934] text-white hover:bg-[#A67B28] px-4 py-2 rounded-lg font-medium transition duration-300 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            ))}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col space-y-2 bg-white rounded-lg p-4 shadow-lg">
            {[
              ['/', 'Home'],
              ['/profile', 'Profile'],
              ['/reports', 'Reports'],
              ['/works', 'Works'],
              ['/about', 'About'],
              ['/top-students', 'Top Students'],
              ['/courses', 'Course'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className="text-[#C89934] hover:text-indigo-600 transition font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            {!authLoading &&
              (isLoggedIn ? (
                <button
                  onClick={() => {
                    handelLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-[#C89934] hover:text-indigo-600 text-left"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-[#C89934] hover:text-indigo-600 transition font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-[#C89934] hover:text-indigo-600 transition font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
