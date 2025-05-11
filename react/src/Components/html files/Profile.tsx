import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { isLoggedIn, setCheckAdmin, authLoading, userId } = useAuth();
    interface User {
        name?: string;
        username?: string;
        email?: string;
    }

    const [user, setUser] = useState<User>({});
    const navigate = useNavigate();

    // Check if the user is logged in and redirect to login page if not
    useEffect(() => {
        const checkAdmin = async () => {
            await setCheckAdmin(false);
            if (!isLoggedIn && !authLoading) {
                navigate("/login");
            }
        };

        if (!authLoading && !isLoggedIn) {
            checkAdmin();
        }

        // Fetch user data only if the user is logged in
        const getUser = async () => {
            try {
                const BASEURL = import.meta.env.VITE_BASE_URL;
                const res = await fetch(`${BASEURL}users/user/${userId}`, {
                    method: "GET",
                    credentials: "include",
                });
                if (!res.ok) throw new Error("Failed to fetch user data");
                const data = await res.json();
                setUser(data);
                console.log("User data:", data);
            } catch (err) {
                console.error("Error fetching user data:", err instanceof Error ? err.message : err);
            }
        };

        if (!authLoading && isLoggedIn) {
            getUser();
        }
    }, [authLoading, isLoggedIn, userId, setCheckAdmin, navigate]);

    console.log(user);

    return (
        !authLoading ? (
            <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <FaUserCircle className="text-7xl text-[#C89934]" />
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-[#C89934] mb-8 text-center" style={{ marginBottom: '20px' }}>
                        {user?.name ? user.name.split(' ')[0] : 'User'} Profile
                    </h2>

                    {/* Profile Info */}
                    <div className="space-y-6 text-left">
                        <div className="flex justify-start border-b pb-2">
                            <span className="text-gray-500 mr-2">Name:</span>
                            <span className="font-medium text-gray-800">{user?.name || ''}</span>
                        </div>
                        <div className="flex justify-start border-b pb-2">
                            <span className="text-gray-500 mr-2">Username:</span>
                            <span className="font-medium text-gray-800">{user?.username || ''}</span>
                        </div>
                        <div className="flex justify-start border-b pb-2">
                            <span className="text-gray-500 mr-2">Email:</span>
                            <span className="font-medium text-gray-800">{user?.email || ''}</span>
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
        )
    );
};

export default Profile;
