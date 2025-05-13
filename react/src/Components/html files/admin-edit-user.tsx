import { useState } from "react";
import { Save, Trash2 } from "lucide-react";

const AdminEditUser = () => {
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

  // بيانات وهمية
  const [users, setUsers] = useState<User[]>([
    {
      _id: "1",
      name: "Ahmed Ali",
      email: "ahmed@example.com",
      username: "ahmed123",
      questions: 20,
      trueQuestions: 15,
      falseQuestions: 5,
      role: "student",
    },
    {
      _id: "2",
      name: "Sara Adel",
      email: "sara@example.com",
      username: "saraA",
      questions: 30,
      trueQuestions: 25,
      falseQuestions: 5,
      role: "teacher",
    },
  ]);

  // تغيير البيانات
  const handleChange = (id: string, field: string, value: string | number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, [field]: value } : user
      )
    );
  };

  // حفظ البيانات المعدلة (وهمي فقط)
  const handleSave = (user: User) => {
    console.log("Saved user:", user);
    alert(`Changes saved for ${user.name}`);
  };

  // حذف المستخدم (وهمي فقط)
  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((user) => user._id !== id));
    alert(`User deleted`);
  };

  return (
    <>
      {users.map((user) => (
        <div key={user._id} className="bg-gray-100 p-5 rounded-xl shadow-sm border border-gray-200">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="number"
              value={user.questions}
              onChange={(e) =>
                handleChange(user._id, "questions", parseInt(e.target.value) || 0)
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
