const Report = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#C89934' }}>تقرير الاختبارات للطالب</h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-6 text-right text-gray-800">تقرير الامتحانات</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Red Card */}
            <div className="bg-red-500 hover:bg-red-600 text-white rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
              <div className="text-3xl font-bold mb-2">27</div>
              <div className="text-sm text-center">عدد الغيابات-الامتحان</div>
            </div>

            {/* Green Card */}
            <div className="bg-green-500 hover:bg-green-600 text-white rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
              <div className="text-3xl font-bold mb-2">33</div>
              <div className="text-sm text-center">عدد الدرجات المحصلة</div>
            </div>

            {/* Yellow/Amber Card */}
            <div className="bg-amber-400 hover:bg-amber-500 text-white rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
              <div className="text-3xl font-bold mb-2">60</div>
              <div className="text-sm text-center">عدد الأسئلة</div>
            </div>

            {/* Blue Card */}
            <div className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-sm text-center">عدد الامتحانات</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Report 
