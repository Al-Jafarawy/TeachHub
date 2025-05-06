import { useState } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            img: '/Etlalah.jpeg',
            title: 'First Slide Title',
            desc: 'Description for the first slide',
        },
        {
            img: '/Etlalah-2.jpeg',
            title: 'Second Slide Title',
            desc: 'Description for the second slide',
        },
        {
            img: '/Etlalah.jpeg',
            title: 'Third Slide Title',
            desc: 'Description for the third slide',
        },
    ];

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container mx-auto px-4 py-16 my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8 flex flex-col items-center md:items-end text-right order-2 md:order-1">
                    <a
                        href="#"
                        className="flex items-center text-right text-[#C89934] hover:text-[#A67B28] font-medium mb-2 transition duration-300 text-xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-lg font-bold text-right">فيديو يشـرح المنصة</span>
                    </a>
                    <img
                        src="/imgHero.png"
                        alt="Hero"
                        className="rounded-xl shadow-2xl w-3/4 md:w-4/5 object-cover hover:shadow-[#C89934]/20 transition-all duration-300"
                    />
                    <div className="space-y-6 w-full">
                        <div className="flex items-center justify-end mb-4">
                            <span className="text-xl font-semibold text-gray-800 ml-3">منصة التعليم الإلكتروني</span>
                            <i className="fa-solid fa-graduation-cap text-3xl text-[#C89934]"></i>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 border-r-4 border-[#C89934] pr-4">تحية الى طلابنا الاعزاء</h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            أهلا ومرحبا بكم طلابنا الأحباء
                            <br />
                            <br />
                            نتمنى لكم كل نجاح وتوفيق ونحن دائما كما تعودنا نبذل أقصى جهد لمساعدتكم ولوصولكم الى التفوق المنشود
                        </p>
                    </div>
                </div>

                {/* Right Column - Carousel */}
                <div className="w-full order-1 md:order-2">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-[#C89934]/20">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, idx) => (
                                <div className="min-w-full relative" key={idx}>
                                    <img src={slide.img} className="w-full h-[550px] object-cover" alt={`Slide ${idx + 1}`} />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-8">
                                        <h3 className="text-2xl font-bold mb-3 text-[#C89934]">{slide.title}</h3>
                                        <p className="text-lg">{slide.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 text-[#C89934] hover:text-[#A67B28] transition transform hover:scale-110 hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-3 text-[#C89934] hover:text-[#A67B28] transition transform hover:scale-110 hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-6 space-x-3">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-[#C89934] w-8' : 'bg-gray-300 hover:bg-[#C89934]/60'}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
