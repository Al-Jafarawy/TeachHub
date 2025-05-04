import { FaCheck, FaTimes } from 'react-icons/fa';

const tasks = [
    { title: 'واجب 1: مقدمة الوحدة الأولى / الأدب الجاهلي', done: false },
    { title: 'واجب 2: تحليل نص / قصيدة امرؤ القيس', done: false },
    { title: 'واجب 3: النحو', done: true },
    { title: 'واجب 4: تحليل قصيدة / معلقة عنترة', done: true },
    { title: 'واجب 5: اختبار تقييمي', done: true },
    { title: 'واجب 6: بلاغة / مجاز', done: true },
];

const Works = () => {
    const completedCount = tasks.filter(task => task.done).length;
    const completionRate = (completedCount / tasks.length) * 100;

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C89934' }}>
                الأعمال التحريرية لشهر 8
            </h2>

            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-right text-gray-800">القسم</h3>

                <ul className="space-y-3 text-right">
                    {tasks.map((task, index) => (
                        <li key={index} className="flex items-center justify-end gap-2">
                            <span className="text-gray-700">{task.title}</span>
                            {task.done ? (
                                <FaCheck className="text-green-500" />
                            ) : (
                                <FaTimes className="text-red-500" />
                            )}
                        </li>
                    ))}
                </ul>

                <div className="mt-6 text-right">
                    <h4 className="font-bold text-gray-800">المعدل الكلي</h4>
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                        <div
                            className="h-4 rounded-full transition-all duration-500"
                            style={{ width: `${completionRate}%`, backgroundColor: '#C89934' }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        تم إنجاز {completedCount} من أصل {tasks.length} واجبات
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Works;
