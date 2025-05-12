import { useState, useEffect } from "react";
import { Save, Trash2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminEditUser = () => {
  const { isLoggedIn, setCheckAdmin, authLoading, userId } = useAuth();
  const navigate = useNavigate();

  // تعريف نوع المستخدم
  type User = {
    _id: string;
    name: string;
    email: string;
    username: string;
    questions: number;
    trueQuestions: number;
    falseQuestions: number;
    role: string;
  };

  const [users, setUsers] = useState<User[]>([]);

  // تغيير البيانات
  const handleChange = (id: string, field: string, value: string | number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, [field]: value } : user
      )
    );
  };

  // حفظ البيانات المعدلة (إرسال البيانات كـ string)
  const handleSave = async (user: User) => {
    try {
      const userString = JSON.stringify(user);
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}users/user/update/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: userString,  // إرسال البيانات كـ string
      });

      if (!res.ok) throw new Error("Failed to update user");

    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // حذف المستخدم (إرسال البيانات كـ string)
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}users/user/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to delete user");

      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // تحميل البيانات عند التحقق من صلاحية الدخول
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

    const getUsers = async () => {
      try {
        const BASEURL = import.meta.env.VITE_BASE_URL;
        const res = await fetch(`${BASEURL}users`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(
          'Error fetching user data:',
          err instanceof Error ? err.message : err
        );
      }
    };

    if (!authLoading && isLoggedIn) {
      getUsers();
    }
  }, [authLoading, isLoggedIn, userId, setCheckAdmin, navigate]);

  return (
    <>
      {/* التكرار عبر المستخدمين لعرض كل مستخدم */}
      {users.map((user) => (
        <div key={user._id} className="bg-gray-100 p-5 rounded-xl shadow-sm border border-gray-200">
          {/* بيانات المستخدم */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              value={user.name}
              onChange={(e) => handleChange(user._id, "name", e.target.value)}
              placeholder="Full Name"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) => handleChange(user._id, "email", e.target.value)}
              placeholder="Email"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              value={user.username}
              onChange={(e) => handleChange(user._id, "username", e.target.value)}
              placeholder="Username"
              className="p-3 border rounded-md w-full"
            />
          </div>

          {/* الأسئلة والتصحيحات */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="number"
              value={user.questions}
              onChange={(e) =>
                handleChange(user._id, "exams", parseInt(e.target.value) || 0)
              }
              placeholder="Total Questions"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="number"
              value={user.trueQuestions}
              onChange={(e) =>
                handleChange(user._id, "trueQuestions", parseInt(e.target.value) || 0)
              }
              placeholder="Correct Answers"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="number"
              value={user.falseQuestions}
              onChange={(e) =>
                handleChange(user._id, "falseQuestions", parseInt(e.target.value) || 0)
              }
              placeholder="Wrong Answers"
              className="p-3 border rounded-md w-full"
            />
          </div>

          {/* أزرار الحفظ والحذف */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => handleSave(user)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
            >
              <Save size={18} />
              Save
            </button>
            <button
              onClick={() => handleDelete(user._id)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdminEditUser;
