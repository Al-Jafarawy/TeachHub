import {
  FaFileAlt,
  FaQuestionCircle,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Report = () => {
  const { isLoggedIn, setCheckAdmin, authLoading, userId } = useAuth();
  interface User {
    name?: string;
    username?: string;
    email?: string;
    exams?: number;
    questions?: number;
    trueQuestions?: number;
    falseQuestions?: number;
  }

  const [user, setUser] = useState<User>({});
  const navigate = useNavigate();

  // Check if the user is logged in and redirect to login page if not

  useEffect(() => {
    const checkAdmin = async () => {
      await setCheckAdmin(false);
      if (!isLoggedIn && !authLoading) {
        navigate('/login');
      }
    };
    checkAdmin();

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
    if (!authLoading) getUser();
  }, [authLoading, isLoggedIn]);


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#C89934] mb-2">
            Student Test Reports
          </h1>
          <p className="text-gray-600 text-sm ">
            A quick overview of the student's test performance
          </p>
        </header>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Exams Taken */}
          <div className="bg-blue-100 text-blue-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center mb-4">
              <FaFileAlt size={32} className="mb-1" />
              <h3 className="text-xs font-medium whitespace-nowrap">
                Exams Taken
              </h3>
            </div>
            <div className="text-4xl font-bold text-center">{user?.exams}</div>
          </div>

          {/* Questions Count */}
          <div className="bg-yellow-100 text-yellow-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center mb-4">
              <FaQuestionCircle size={32} className="mb-1" />
              <h3 className="text-xs font-medium whitespace-nowrap">
                Questions Count
              </h3>
            </div>
            <div className="text-4xl font-bold text-center">
              {user?.questions}
            </div>
          </div>

          {/* Correct Answers */}
          <div className="bg-green-100 text-green-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center mb-4">
              <FaCheckCircle size={32} className="mb-1" />
              <h3 className="text-xs font-medium whitespace-nowrap">
                Correct Answers
              </h3>
            </div>
            <div className="text-4xl font-bold text-center">
              {user.trueQuestions}
            </div>
          </div>

          {/* Wrong Answers */}
          <div className="bg-red-100 text-red-700 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center mb-4">
              <FaTimesCircle size={32} className="mb-1" />
              <h3 className="text-xs font-medium whitespace-nowrap">
                Wrong Answers
              </h3>
            </div>
            <div className="text-4xl font-bold text-center">
              {user.falseQuestions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
