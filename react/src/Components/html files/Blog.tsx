import React, { useState } from "react";
import { motion } from "framer-motion";

interface Article {
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-[300px]"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={article.image}
      alt={article.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{article.description}</p>
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  </motion.div>
);

const Articles: React.FC = () => {
  const articles: Article[] = [

  // Grammar
  {
    title: "Understanding Basic English Grammar",
    description:
      "Learn the foundations of English grammar and how to construct proper sentences.",
    link: "https://www.ef.com/wwen/english-resources/english-grammar/basic-grammar/",
    image: "/Blog/1 (1).jpeg",
    category: "Grammar",
  },
  {
    title: "Tenses Made Easy",
    description:
      "A complete guide to English tenses with examples and exercises.",
    link: "https://www.englishclub.com/grammar/verb-tenses.htm",
    image: "/Blog/1 (2).jpeg",
    category: "Grammar",
  },
  
{
  title: "Common Grammar Mistakes",
  description:
    "Avoid these frequent grammar errors in your writing and speaking.",
  link: "https://www.grammarly.com/blog/grammar-mistakes/",
  image: "/Blog/1 (3).jpeg",
  category: "Grammar",
},
{
  title: "Grammar for IELTS",
  description: "Grammar resources tailored for IELTS preparation.",
  link: "https://ieltsliz.com/ielts-grammar/",
  image: "/Blog/1 (4).jpeg",
  category: "Grammar",
},
{
  title: "Subject-Verb Agreement Tips",
  description: "Master subject-verb agreement with these simple tips.",
  link: "https://www.scribbr.com/grammar/subject-verb-agreement/",
  image: "/Blog/1 (5).jpeg",
  category: "Grammar",
},

// Speaking
{
  title: "Improve Your English Speaking",
  description: "Practical techniques to become fluent in spoken English.",
  link: "https://www.britishcouncil.org/school-resources/find/speak-english",
  image: "/Blog/1 (6).jpeg",
  category: "Speaking",
},
{
  title: "Daily English Speaking Practice",
  description: "Learn how to practice speaking English every day.",
  link: "https://www.talkenglish.com/",
  image: "/Blog/1 (7).jpeg",
  category: "Speaking",
},
{
  title: "Top Speaking Activities",
  description: "Fun activities to improve English speaking skills.",
  link: "https://busyteacher.org/classroom_activities-speaking-worksheets/",
  image: "/Blog/1 (8).jpeg",
  category: "Speaking",
},
{
  title: "Fluency vs Accuracy",
  description: "Striking the right balance in spoken English.",
  link: "https://www.englishclub.com/speaking/fluency-accuracy.htm",
  image: "/Blog/1 (9).jpeg",
  category: "Speaking",
},
{
  title: "Speaking Tips for Interviews",
  description: "Impress your interviewers with confident English speaking.",
  link: "https://www.jobinterviewtools.com/blog/improve-english-speaking-skills-interview/",
  image: "/Blog/1 (10).jpeg",
  category: "Speaking",
},

// Vocabulary
{
  title: "Daily Vocabulary List",
  description: "Expand your vocabulary with these common English words.",
  link: "https://www.englishclub.com/vocabulary/daily-vocabulary.htm",
  image: "/Blog/1 (11).jpeg",
  category: "Vocabulary",
},
{
  title: "Vocabulary for Academic Writing",
  description: "Essential words and phrases for writing academic essays.",
  link: "https://www.oxfordlearnersdictionaries.com/wordlist/academic/",
  image: "/Blog/1 (12).jpeg",
  category: "Vocabulary",
},
{
  title: "Synonyms and Antonyms",
  description: "Boost your vocabulary with synonyms and antonyms.",
  link: "https://www.englishclub.com/vocabulary/synonyms-antonyms.htm",
  image: "/Blog/1 (13).jpeg",
  category: "Vocabulary",
},
{
  title: "Idioms and Phrasal Verbs",
  description: "Understand and use common idioms and phrasal verbs.",
  link: "https://www.fluentu.com/blog/english/english-idioms-expressions/",
  image: "/Blog/1 (14).jpeg",
  category: "Vocabulary",
},
{
  title: "Vocabulary Games",
  description: "Fun games to improve your English vocabulary.",
  link: "https://www.vocabulary.com/",
  image: "/Blog/1 (15).jpeg",
  category: "Vocabulary",
},

// Listening
{
  title: "Listening Practice Sites",
  description: "Websites offering English listening activities.",
  link: "https://elllo.org/",
  image: "/Blog/1 (16).jpeg",
  category: "Listening",
},
{
  title: "Podcasts for English Learners",
  description: "Top podcasts to help you improve English listening skills.",
  link: "https://www.bbc.co.uk/learningenglish/podcasts",
  image: "/Blog/1 (17).jpeg",
  category: "Listening",
},
{
  title: "Listening Quizzes",
  description: "Interactive quizzes to test your listening skills.",
  link: "https://www.esl-lab.com/",
  image: "/Blog/1 (18).jpeg",
  category: "Listening",
},
{
  title: "Listening for IELTS",
  description: "Practice materials for IELTS listening exam.",
  link: "https://ieltsliz.com/ielts-listening/",
  image: "/Blog/1 (19).jpeg",
  category: "Listening",
},
{
  title: "Short Stories Audio",
  description: "Improve listening with short English audio stories.",
  link: "https://www.rong-chang.com/",
  image: "/Blog/1 (20).jpeg",
  category: "Listening",
},

// Exams
{
  title: "TOEFL Preparation Guide",
  description: "Essential resources and tips to prepare for the TOEFL test.",
  link: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
  image: "/Blog/1 (21).jpeg",
  category: "Exams",
},
{
  title: "IELTS Preparation Tips",
  description: "Improve your IELTS band score with these tips.",
  link: "https://ieltsliz.com/",
  image: "/Blog/1 (22).jpeg",
  category: "Exams",
},
{
  title: "Cambridge English Exams",
  description: "Everything you need to know about Cambridge English exams.",
  link: "https://www.cambridgeenglish.org/exams-and-tests/",
  image: "/Blog/1 (23).jpeg",
  category: "Exams",
},
{
  title: "Duolingo English Test",
  description: "Resources to help you prepare for the Duolingo test.",
  link: "https://englishtest.duolingo.com/",
  image: "/Blog/1 (24).jpeg",
  category: "Exams",
},
{
  title: "Exam Strategies",
  description: "Learn general strategies for any English language exam.",
  link: "https://www.examenglish.com/",
  image: "/Blog/1 (25).jpeg",
  category: "Exams",
}]

  const categories: string[] = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Explore English Learning Resources
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </motion.div>
    </div>
  );
};

export default Articles;
