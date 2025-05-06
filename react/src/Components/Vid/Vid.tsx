import { useState } from 'react'

const Vid = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'الاحياء والبعث',
            content: 'تصفح الدرس'
        },
        {
            title: 'قواعد رسم الهمزه',
            content: 'تصفح الدرس'
        },
        {
            title: 'همزة القطع والف الوصل',
            content: 'تصفح الدرس'
        },
        {
            title: 'مقدمة الحصه +التشبيه',
            content: 'تصفح الدرس'
        },
        {
            title: 'التجربه الشعريه + اول 7 ابيات من نص غربه وحنين',
            content: 'تصفح الدرس'
        },
        {
            title: 'باقي نص غربه وحنين',
            content: 'تصفح الدرس'
        },
        {
            title: 'اسم الفاعل + صيغة المبالغه',
            content: 'تصفح الدرس'
        },

    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C89934' }}>فيديوهات شهر 8 - 2024</h2>

            <div className="space-y-4">
                {accordionData.map((item, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full text-right px-6 py-4 font-medium text-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 focus:outline-none"
                        >
                            {item.title}
                        </button>
                        <div
                            className={`px-6 py-4 text-gray-700 transition-all duration-300 ease-in-out text-right ${openIndex === index ? 'block' : 'hidden'
                                }`}
                        >
                            <h3 className='font-bold text-xl text-right mb-4' style={{ color: '#C89934' }}>{item.title}</h3>
                            <a href={item.content} className='text-blue-500-700 font-bold text-xl text-right' target="_blank" rel="noopener noreferrer">
                                {item.content}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vid;
