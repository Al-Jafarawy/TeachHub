const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C89934' }}>الملف الشخصي</h2>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-4 text-right">
          <div className="flex justify-end items-center gap-2">
            <span className="font-bold text-gray-800">السيد صلاح محمود</span>
            <span className="text-gray-600">اسم المستخدم:</span>
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-bold text-gray-800">abdullah@gmail.com</span>
            <span className="text-gray-600">البريد الإلكتروني:</span>
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-bold text-gray-800">01/01/2023</span>
            <span className="text-gray-600">تاريخ التسجيل:</span>
          </div>
          
          <div className="flex justify-end items-center gap-2">
            <span className="font-bold text-gray-800">القسم الأدبي</span>
            <span className="text-gray-600">القسم الدراسي:</span>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="bg-[#C89934] hover:bg-[#a67b28] text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            تعديل البيانات
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
