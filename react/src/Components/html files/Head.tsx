import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Head = () => {
    const [activeTitle, setActiveTitle] = useState(0);
    const { isLoggedIn, setCheckAdmin, authLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTitle((prev) => (prev + 1) % 4);
        }, 3000);
        const checkAdmin = async () => {
            await setCheckAdmin(false);
            if (!isLoggedIn && !authLoading) {
              navigate("/login");
            }
          };
          checkAdmin();
        return () => clearInterval(interval);
    }, [ isLoggedIn, authLoading ]);

    const titles = [
        "ممنوع حضور اي طالب غير في مجموعته",
        "تسجيل الدخول اعلي الصفحه من اليسار ",
        "نتمني لكم التوفيق",
        "للتواصل مع الادمن او الاستفسارات يرجى الاتصال بالرقم 01144444444   "
    ];

    return (
        <div className="container mx-auto w-full">
            <div
                className="swiper-slide active rtl transition-all duration-500 hover:bg-amber-700 rounded-lg shadow-2xl p-6 mx-auto grid grid-cols-1 place-items-center w-full"
                style={{
                    backgroundColor: '#C89934',
                    direction: 'rtl',
                    width: '100%',
                    backgroundImage: 'linear-gradient(135deg, #C89934 0%, #d9b05c 50%, #C89934 100%)'
                }}
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 text-center slide-in-right tracking-wide">
                    {titles[activeTitle]}
                </h2>
            </div>
        </div>
    );
};

export default Head;
