import React, { useState } from "react";

const units = [
  {
    title: "Unit 1: Introduction to English Grammar",
    lessons: [
      { title: "Lesson 1: Nouns", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 2: Verbs", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 3: Sentence Structure", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    ],
  },
  {
    title: "Unit 2: Vocabulary Expansion",
    lessons: [
      { title: "Lesson 1: Daily Vocabulary", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 2: Academic Words", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 3: Advanced Terms", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 4: Idioms", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    ],
  },
  {
    title: "Unit 3: Reading Comprehension",
    lessons: [
      { title: "Lesson 1: Short Stories", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 2: Articles", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 3: News Reports", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 4: Essays", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { title: "Lesson 5: Poetry", videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4" },
    ],
  },
];

const EnglishUnits = () => {
  const [openUnitIndex, setOpenUnitIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ unitIndex: number | null; lessonIndex: number | null }>({
    unitIndex: null,
    lessonIndex: null,
  });

  const toggleUnit = (index: number) => {
    setOpenUnitIndex(openUnitIndex === index ? null : index);
    setActiveVideo({ unitIndex: null, lessonIndex: null });
  };

  const toggleVideo = (unitIndex: number, lessonIndex: number) => {
    setActiveVideo((prev) =>
      prev.unitIndex === unitIndex && prev.lessonIndex === lessonIndex
        ? { unitIndex: null, lessonIndex: null }
        : { unitIndex, lessonIndex }
    );
  };

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
                className="w-full text-left px-4 py-4 bg-transparent text-[#C89934] text-3xl md:text-4xl font-bold rounded-t-xl text-center hover:bg-[#C89934]  transition"
              >
                {unit.title}
              </button>

              {openUnitIndex === unitIndex && (
                <div className="pt-4 space-y-4">
                  {unit.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="bg-gray-100 rounded-md py-3 px-4 text-center"
                    >
                      <h3 className="text-sm md:text-base font-medium text-gray-800">
                        {lesson.title}
                      </h3>
                      <button
                        className="text-red-500 mt-2 text-sm md:text-base font-medium hover:underline"
                        onClick={() => toggleVideo(unitIndex, lessonIndex)}
                      >
                        Watch Video
                      </button>
                      {activeVideo.unitIndex === unitIndex &&
                        activeVideo.lessonIndex === lessonIndex && (
                          <div className="mt-4">
                            <iframe
                              width="100%"
                              height="315"
                              src={lesson.videoUrl}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
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