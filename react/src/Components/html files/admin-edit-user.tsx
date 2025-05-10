import { useState } from "react";
import { Save, Trash2 } from "lucide-react";

const AdminEditUser = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ahmed Al-Jafarawy",
      email: "ahmed@example.com",
      username: "ahmed123",
      totalQuestions: 50,
      correctAnswers: 40,
      wrongAnswers: 10,
    },
    {
      id: 2,
      name: "Sarah Adel",
      email: "sarah@example.com",
      username: "sarah456",
      totalQuestions: 60,
      correctAnswers: 50,
      wrongAnswers: 10,
    },
  ]);

  const handleChange = (id: number, field: string, value: string | number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleSave = (user: any) => {
    console.log("User Saved:", user);
    // Connect this to a real API to save data
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
         Manage All Users
      </h2>

      {users.map((user) => (
        <div
          key={user.id}
          className="bg-gray-100 p-5 rounded-xl shadow-sm border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                handleChange(user.id, "name", e.target.value)
              }
              placeholder="Full Name"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                handleChange(user.id, "email", e.target.value)
              }
              placeholder="Email"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              value={user.username}
              onChange={(e) =>
                handleChange(user.id, "username", e.target.value)
              }
              placeholder="Username"
              className="p-3 border rounded-md w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="number"
              value={user.totalQuestions}
              onChange={(e) =>
                handleChange(user.id, "totalQuestions", parseInt(e.target.value) || 0)
              }
              placeholder="Total Questions"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="number"
              value={user.correctAnswers}
              onChange={(e) =>
                handleChange(user.id, "correctAnswers", parseInt(e.target.value) || 0)
              }
              placeholder="Correct Answers"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="number"
              value={user.wrongAnswers}
              onChange={(e) =>
                handleChange(user.id, "wrongAnswers", parseInt(e.target.value) || 0)
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
              onClick={() => handleDelete(user.id)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEditUser;
