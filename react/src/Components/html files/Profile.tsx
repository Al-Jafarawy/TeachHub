import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-7xl text-[#C89934]" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#C89934] mb-8 text-center" style={{marginBottom:'20px'}}>User Profile</h2>

        {/* Profile Info */}
        <div className="space-y-6 text-left" >
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Username:</span>
            <span className="font-medium text-gray-800">Sayed Salah Mahmoud</span>
          </div>
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Email:</span>
            <span className="font-medium text-gray-800">sayed@gmail.com</span>
          </div>
          <div className="flex justify-start border-b pb-2">
            <span className="text-gray-500 mr-2">Registration Date:</span>
            <span className="font-medium text-gray-800">01/01/2025</span>
          </div>
          <div className="flex justify-start">
            <span className="text-gray-500 mr-2">Academic Track:</span>
            <span className="font-medium text-gray-800">Literary Section</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
