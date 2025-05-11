import { FaUserCircle, FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/main/profile.css";

const Profile = () => {
  const { setCheckAdmin, authLoading, userId } = useAuth();
  const [user, setUser] = useState({
    name: "Ahmed Al-Jafarawy",
    username: "ahmed123",
    email: "ahmed.al.jafarawy@gmail.com",
  });

  const navigate = useNavigate();
  const isLoggedIn = true;

  useEffect(() => {
    const checkAdmin = async () => {
      await setCheckAdmin(false);
      if (!isLoggedIn && !authLoading) {
        navigate("/login");
      }
    };

    if (!authLoading && isLoggedIn) {
      checkAdmin();
      setUser({
        name: "Ahmed Al-Jafarawy",
        username: "ahmed123",
        email: "ahmed.al.jafarawy@gmail.com",
      });
    }
  }, [authLoading, isLoggedIn]);

  const handleEditUsers = () => {
    navigate("/admin-edit-user");
  };

  return !authLoading ? (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
      
      {/* زر الأدمن خارج الكارد */}
      <div className="w-full  max-w-md mr-150 mb-50  mb-4">
        <button
          onClick={handleEditUsers}
          className="flex items-center gap-2 bg-[#C89934] hover:bg-[#b6882f] text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          <FaEdit />
          Edit Users
        </button>
      </div>

      {/* كارد البروفايل */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-7xl text-[#C89934]" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#C89934] mb-8 text-center">
          {user?.name ? user.name.split(" ")[0] : "User"} Profile
        </h2>

        {/* Profile Info */}
        <div className="space-y-6 text-left">
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Name:</span>
            <span className="font-medium text-gray-800">{user?.name || ""}</span>
          </div>
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Username:</span>
            <span className="font-medium text-gray-800">{user?.username || ""}</span>
          </div>
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Email:</span>
            <span className="font-medium text-gray-800">{user?.email || ""}</span>
          </div>
          <div className="flex justify-start">
            <span className="text-gray-500 mr-2">Academic Track:</span>
            <span className="font-medium text-gray-800">Literary Section</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default Profile;
