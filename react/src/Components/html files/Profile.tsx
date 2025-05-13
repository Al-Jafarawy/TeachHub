import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    academicTrack: "Literary Section"
  });

  const navigate = useNavigate();

  useEffect(() => {
    // محاكاة بيانات المستخدم من `localStorage` أو تعيين بيانات افتراضية
    const storedUserData = JSON.parse(localStorage.getItem("userData") || "{}");

    if (storedUserData && Object.keys(storedUserData).length > 0) {
      setUser(storedUserData);
    } else {
      setUser({
        name: "John Doe",
        username: "johndoe",
        email: "john.doe@example.com",
        academicTrack: "Literary Section"
      });
    }

    // إذا كنت بحاجة إلى إضافة رابط لتحرير المستخدم
    // navigate("/admin-edit-user"); إذا كنت تريد التوجيه عند الحاجة
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 bg-gray-100">
      <button
        onClick={() => navigate("/admin-edit-user")}
        className="px-6 py-2 absolute top-4 left-4 bg-[#C89934] text-white font-semibold rounded-lg shadow-md hover:bg-[#a7872a] focus:outline-none focus:ring-2 focus:ring-[#C89934] focus:ring-opacity-50"
      >
        Edit Users
      </button>

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
            <span className="font-medium text-gray-800">{user?.academicTrack || "Unknown"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
