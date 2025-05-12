import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { isLoggedIn, setCheckAdmin, authLoading, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      setCheckAdmin(false);
      // If user is already logged in, navigate to the homepage
      if (isLoggedIn) {
        navigate('/');
      }
    };

    // Run the authentication check after the component mounts
    checkAuthStatus();
  }, [authLoading, isLoggedIn, navigate, setCheckAdmin]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const BASEURL = import.meta.env.VITE_BASE_URL;

      const res = await fetch(`${BASEURL}users/user/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password, email, name, role: 'user' }),  
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Sign up failed');

      setIsLoggedIn(false);
      navigate('/Login'); // Redirect to login page after successful signup
    } catch (err) {
      if (err instanceof Error) {
        console.error('Signup error:', err.message);
      } else {
        console.error('Signup error:', err);
      }
      setIsLoggedIn(false);
    }
  };

  // Show the sign-up form only when authentication is not loading
  if (authLoading) {
    return <div>Loading...</div>; // You can add a loader here
  }

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sign Up</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join TeachHub today and start your learning journey with us.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="JohnDoe"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="johndoe@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C89934] to-indigo-700 text-white py-3 px-4 rounded-lg hover:opacity-90 transition duration-300"
              >
                Create Account
              </button>

              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-600 hover:underline">
                    Log In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
