import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const EnglishUnits = () => {
  const [openUnitIndex, setOpenUnitIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    unitIndex: number | null;
    lessonIndex: number | null;
  }>({
    unitIndex: null,
    lessonIndex: null,
  });

  const [activeImage, setActiveImage] = useState<{
    unitIndex: number | null;
    lessonIndex: number | null;
  }>({
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

  const { isLoggedIn, setCheckAdmin, authLoading } = useAuth();
  interface Unit {
    lessons?: {
      title?: string;
      description?: string;
      videoUrls?: { url: string }[];
      imageUrls?: { url: string }[];
    }[];
    title?: string;
    description?: string;
  }

  const [units, setUnets] = useState<Unit[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      await setCheckAdmin(false);
      if (!isLoggedIn && !authLoading) {
        navigate('/login');
      }
    };
    checkAdmin();

    const getLessons = async () => {
      try {
        const BASEURL = import.meta.env.VITE_BASE_URL;
        const res = await fetch(`${BASEURL}lessons`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();
        const handelUnits: Unit = {
          lessons: data.lessons,
        };
        setUnets([handelUnits]);
      } catch (err) {
        console.error(
          'Error fetching user data:',
          err instanceof Error ? err.message : err
        );
      }
    };
    if (!authLoading) getLessons();
  }, [authLoading, isLoggedIn]);


  return !authLoading ? (
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
                {unit?.title || 'Unit Title'}
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

                      {activeVideo.unitIndex === unitIndex &&
                        activeVideo.lessonIndex === lessonIndex && (
                          <div className="mt-4">
                            <iframe
                              width="100%"
                              height="315"
                              src={
                                lesson?.videoUrls?.[0]?.url ??
                                'https://res.cloudinary.com/dfpx3gupk/video/upload/v1746475198/lessons/lesson3/qri9srse13e1a4pr9vrm.mp4'
                              }
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}

                      {activeImage.unitIndex === unitIndex &&
                        activeImage.lessonIndex === lessonIndex && (
                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {lesson?.imageUrls?.map((img, i) => (
                              <div
                                key={i}
                                className="relative w-full h-auto"
                                onClick={() =>
                                  setActiveImage({ unitIndex, lessonIndex })
                                }
                              >
                                <img
                                  src={img.url}
                                  alt={`Lesson Image ${i + 1}`}
                                  className={`w-full h-auto rounded shadow ${
                                    activeImage.unitIndex === unitIndex &&
                                    activeImage.lessonIndex === lessonIndex &&
                                    activeImage.lessonIndex === i
                                      ? 'border-4 border-blue-500'
                                      : ''
                                  }`}
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
  ) : null;
};

export default EnglishUnits;
