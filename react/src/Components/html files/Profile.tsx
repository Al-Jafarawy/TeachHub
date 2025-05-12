import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { isLoggedIn, setCheckAdmin, authLoading, userId, isAdmin } = useAuth();
  interface User {
    name?: string;
    username?: string;
    email?: string;
  }

  const [user, setUser] = useState<User>({});
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      await setCheckAdmin(true);
      if (!isLoggedIn && !authLoading) {
        navigate('/login');
      }
    };

    if (!authLoading && !isLoggedIn) {
      checkAdmin();
    }

    const getUser = async () => {
      try {
        const BASEURL = import.meta.env.VITE_BASE_URL;
        const res = await fetch(`${BASEURL}users/user/${userId}`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(
          'Error fetching user data:',
          err instanceof Error ? err.message : err
        );
      }
    };

    if (!authLoading && isLoggedIn) {
      getUser();
    }
  }, [authLoading, isLoggedIn, userId, setCheckAdmin, navigate]);

  return !authLoading ? (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 bg-gray-100">
      {isAdmin ? (
        <button
          onClick={() => navigate('/admin-edit-user')}
          className="px-6 py-2 absolute top-4 left-4 bg-[#C89934] text-white font-semibold rounded-lg shadow-md hover:bg-[#a7872a] focus:outline-none focus:ring-2 focus:ring-[#C89934] focus:ring-opacity-50"
        >
          Edit Users
        </button>
      ) : null}

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-7xl text-[#C89934]" />
        </div>

        {/* Title */}
        <h2
          className="text-3xl font-bold text-[#C89934] mb-8 text-center"
          style={{ marginBottom: '20px' }}
        >
          {user?.name ? user.name.split(' ')[0] : 'User'} Profile
        </h2>

        {/* Profile Info */}
        <div className="space-y-6 text-left">
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Name:</span>
            <span className="font-medium text-gray-800">
              {user?.name || ''}
            </span>
          </div>
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Username:</span>
            <span className="font-medium text-gray-800">
              {user?.username || ''}
            </span>
          </div>
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Email:</span>
            <span className="font-medium text-gray-800">
              {user?.email || ''}
            </span>
          </div>
          <div className="flex justify-start">
            <span className="text-gray-500 mr-2">Academic Track:</span>
            <span className="font-medium text-gray-800">Literary Section</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Profile;
