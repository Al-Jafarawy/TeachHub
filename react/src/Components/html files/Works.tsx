import { FaCheck, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const subjects = [
  {
    name: 'English Literature',
    tasks: [
      { title: 'Task 1: Introduction to English Literature', done: false },
      { title: 'Task 2: Analyzing Shakespeare’s Works', done: false },
      { title: 'Task 3: Analyzing Romantic Poetry', done: true },
    ],
  },
  {
    name: 'English Grammar',
    tasks: [
      { title: 'Task 4: Grammar: Tenses and Structures', done: true },
      { title: 'Task 5: Punctuation and Sentence Structures', done: false },
    ],
  },
  {
    name: 'English Writing Skills',
    tasks: [
      { title: 'Task 6: Writing a Descriptive Essay', done: true },
      { title: 'Task 7: Writing a Persuasive Essay', done: false },
    ],
  },
];

const Works = () => {
  const allTasks = subjects.flatMap((subject) => subject.tasks);
  const completedCount = allTasks.filter((task) => task.done).length;
  const completionRate = (completedCount / allTasks.length) * 100;

  const { isLoggedIn, setCheckAdmin, authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      await setCheckAdmin(false);
      if (!isLoggedIn && !authLoading) {
        navigate('/login');
      }
    };
    checkAdmin();
  }, [authLoading, isLoggedIn]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h2
        className="text-3xl font-bold mb-8 text-center"
        style={{ color: '#C89934', marginBottom: '50px' }}
      >
        English Assignments for April
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-8">
        {subjects.map((subject, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {subject.name}
            </h3>
            <ul className="space-y-3">
              {subject.tasks.map((task, i) => (
                <li key={i} className="flex items-center gap-2">
                  {task.done ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                  <span className="text-gray-700">{task.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-6">
          <h4 className="font-bold text-gray-800">Overall Completion Rate</h4>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
            <div
              className="h-4 rounded-full transition-all duration-500"
              style={{
                width: `${completionRate}%`,
                backgroundColor: '#C89934',
              }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {completedCount} out of {allTasks.length} tasks completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
