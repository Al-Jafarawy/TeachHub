import { useState } from "react";

const EnglishUnits = () => {
  const [openUnitIndex, setOpenUnitIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ unitIndex: number | null; lessonIndex: number | null }>({
    unitIndex: null,
    lessonIndex: null,
  });

  const [activeImage, setActiveImage] = useState<{ unitIndex: number | null; lessonIndex: number | null }>({
    unitIndex: null,
    lessonIndex: null,
  });

  const toggleUnit = (index: number) => {
    setOpenUnitIndex(openUnitIndex === index ? null : index);
    setActiveVideo({ unitIndex: null, lessonIndex: null });
    setActiveImage({ unitIndex: null, lessonIndex: null });
  };

  const toggleVideo = (unitIndex: number, lessonIndex: number) => {
    setActiveVideo((prev) =>
      prev.unitIndex === unitIndex && prev.lessonIndex === lessonIndex
        ? { unitIndex: null, lessonIndex: null }
        : { unitIndex, lessonIndex }
    );
  };

  const toggleImage = (unitIndex: number, lessonIndex: number) => {
    setActiveImage((prev) =>
      prev.unitIndex === unitIndex && prev.lessonIndex === lessonIndex
        ? { unitIndex: null, lessonIndex: null }
        : { unitIndex, lessonIndex }
    );
  };

  // بيانات وهمية فقط
  const mockUnits = [
    {
      title: "Unit 1: Introduction to English",
      description: "Basics of English grammar and vocabulary",
      lessons: [
        {
          title: "Lesson 1: Greetings",
          description: "Learn how to greet people in English.",
          videoUrls: [{ url: "https://www.youtube.com/embed/fN4o0Sdi1Qc" }],
          imageUrls: [
            { url: "https://via.placeholder.com/300x200?text=Image+1" },
            { url: "https://via.placeholder.com/300x200?text=Image+2" },
          ],
        },
        {
          title: "Lesson 2: Alphabet",
          description: "Learn the English alphabet.",
          videoUrls: [{ url: "https://www.youtube.com/embed/k9TUPpGqYTo" }],
          imageUrls: [{ url: "https://via.placeholder.com/300x200?text=Image+A" }],
        },
      ],
    },
    {
      title: "Unit 2: Daily Conversations",
      description: "Practice everyday conversations.",
      lessons: [
        {
          title: "Lesson 1: Shopping",
          description: "How to shop using English phrases.",
          videoUrls: [{ url: "https://www.youtube.com/embed/IuVzCpAMJ9c" }],
          imageUrls: [
            { url: "https://via.placeholder.com/300x200?text=Shop+1" },
            { url: "https://via.placeholder.com/300x200?text=Shop+2" },
          ],
        },
      ],
    },
  ];

  const [units] = useState(mockUnits);

  return (
    <div className="bg-gray-50 py-20 px-4 min-h-screen flex justify-center items-start">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-[#C89934] text-center pb-10">
          English Course Units
        </h1>

        <div className="space-y-6">
          {units.map((unit, unitIndex) => (
            <div key={unitIndex} className="bg-white rounded-xl shadow-md p-5">
              <button
                onClick={() => toggleUnit(unitIndex)}
                className="w-full px-4 py-4 bg-transparent text-[#C89934] text-3xl md:text-4xl font-bold rounded-t-xl text-center hover:bg-[#C89934]  transition"
              >
                {unit?.title || "Unit Title"}
              </button>

              {openUnitIndex === unitIndex && (
                <div className="pt-4 space-y-4">
                  {unit?.lessons?.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="bg-gray-100 rounded-md py-3 px-4 text-center"
                    >
                      <h3 className="text-sm md:text-base font-medium text-gray-800">
                        {lesson.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {lesson.description}
                      </p>
                      <button
                        className="text-red-500 mt-2 text-sm md:text-base font-medium hover:underline"
                        onClick={() => toggleVideo(unitIndex, lessonIndex)}
                      >
                        Watch Video
                      </button>
                      <button
                        className="text-blue-500 mt-2 ml-4 text-sm md:text-base font-medium hover:underline"
                        onClick={() => toggleImage(unitIndex, lessonIndex)}
                      >
                        View Images
                      </button>

                      {activeVideo.unitIndex === unitIndex && activeVideo.lessonIndex === lessonIndex && (
                        <div className="mt-4">
                          <iframe
                            width="100%"
                            height="315"
                            src={lesson?.videoUrls?.[0]?.url ?? ""}
                            title="Video Player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}

                      {activeImage.unitIndex === unitIndex && activeImage.lessonIndex === lessonIndex && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {lesson?.imageUrls?.map((img, i) => (
                            <div key={i} className="relative w-full h-auto">
                              <img
                                src={img.url}
                                alt={`Lesson Image ${i + 1}`}
                                className="w-full h-auto rounded shadow"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishUnits;
