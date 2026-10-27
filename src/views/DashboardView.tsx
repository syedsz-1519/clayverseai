import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Flame, 
  Award, 
  CheckCircle2, 
  Calendar, 
  BookMarked, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  Zap, 
  Lock, 
  Unlock,
  Check,
  RotateCcw
} from 'lucide-react';
import { ActivePage, LanguageId, LearnerProfile } from '../types';
import { LANGUAGES } from '../data/languages';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { ClayMascot } from '../components/ClayMascot';

interface DashboardViewProps {
  selectedLang: LanguageId;
  setActivePage: (page: ActivePage) => void;
  profile: LearnerProfile;
  onUpdateProfile: (updated: Partial<LearnerProfile>) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  selectedLang,
  setActivePage,
  profile,
  onUpdateProfile
}) => {
  const [challengeModalOpen, setChallengeModalOpen] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const badges = [
    {
      id: 'first_lesson',
      name: 'First Lesson',
      nativeName: 'शुरुआती दीप',
      desc: 'Completed your first AI concept on the Mind Map',
      earned: profile.completedNodes.length >= 1,
      icon: Sparkles
    },
    {
      id: 'glossary_master',
      name: 'Glossary Master',
      nativeName: 'शब्दकोश ज्ञानी',
      desc: 'Bookmarked 3 or more terms across regional languages',
      earned: profile.bookmarkedTermIds.length >= 3,
      icon: BookMarked
    },
    {
      id: 'quiz_champion',
      name: 'Quiz Champion',
      nativeName: 'क्विज़ विजेता',
      desc: 'Solved a weekly AI challenge test with 100% score',
      earned: profile.weeklyChallengeCompleted,
      icon: Award
    },
    {
      id: 'neural_architect',
      name: 'Neural Architect',
      nativeName: 'न्यूरल शिल्पी',
      desc: 'Ran all steps in the interactive Neural Network visualizer',
      earned: true,
      icon: Zap
    },
    {
      id: 'multilingual_explorer',
      name: 'Polyglot Explorer',
      nativeName: 'बहुभाषी अन्वेषक',
      desc: 'Switched between at least 3 regional Indian languages',
      earned: true,
      icon: Compass
    },
    {
      id: 'streak_keeper',
      name: 'Streak Keeper',
      nativeName: 'अखंड ज्वाला',
      desc: 'Maintained learning consistency for 7 consecutive days',
      earned: profile.streakDays >= 7,
      icon: Flame
    }
  ];

  const currentQ = QUIZ_QUESTIONS[quizIndex];

  const handleSelectQuizOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);

    if (idx === currentQ.correctIndex) {
      setQuizScore(prev => prev + 1);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    }
  };

  const handleNextQuiz = () => {
    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Completed challenge
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      onUpdateProfile({
        weeklyChallengeCompleted: true,
        xp: profile.xp + 150
      });
      setChallengeModalOpen(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-8">
      
      {/* 1. TOP GREETING WITH AVATAR & DAILY STREAK FLAME */}
      <div className="bg-white dark:bg-[#1E1B18] p-6 sm:p-8 rounded-3xl border border-black/8 dark:border-white/10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Avatar + Greeting */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-[#F39C6B] via-[#D96B43] to-[#A8441F] flex items-center justify-center text-white font-black text-2xl shadow-lg ring-4 ring-[#D96B43]/20">
              {profile.name.charAt(0)}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
              ✓
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43]">
                Level {profile.level} • Clay Sculptor
              </span>
              <span className="text-xs font-semibold text-[#8A726A] dark:text-[#B29E96]">
                {profile.xp} XP Earned
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
              {LANGUAGES[selectedLang].greeting}
            </h1>
            <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96]">
              Keep molding your AI knowledge step by step.
            </p>
          </div>
        </div>

        {/* Right: Streak Flame Counter & Quick Action */}
        <div className="flex items-center gap-4 bg-[#FAF6F0] dark:bg-[#25211D] p-4 rounded-2xl border border-black/5 dark:border-white/5">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF0E8] dark:bg-[#3A241A] flex items-center justify-center text-[#D96B43] shadow-sm">
            <Flame className="w-7 h-7 fill-[#D96B43] text-[#D96B43] animate-pulse" />
          </div>

          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-[#D96B43]">
                {profile.streakDays}
              </span>
              <span className="text-xs font-bold text-[#1E1B18] dark:text-[#FFF8F5]">
                Days Streak!
              </span>
            </div>
            <span className="text-[11px] text-emerald-600 font-bold block">
              Active Today • Next reward in 3 days
            </span>
          </div>
        </div>

      </div>


      {/* 2. WEEKLY LEARNING CALENDAR + WEEKLY CHALLENGE CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Weekly Streak Calendar (7 Cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#1E1B18] p-6 rounded-3xl border border-black/8 dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#D96B43]" />
              <h3 className="text-sm font-bold text-[#1E1B18] dark:text-[#FFF8F5]">
                Weekly Consistency Streak
              </h3>
            </div>
            <span className="text-xs font-bold text-[#1F5C5B]">
              Goal: 10 mins/day
            </span>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center pt-2">
            {daysOfWeek.map((day, idx) => {
              const isActive = profile.streakDaysList[idx];
              const isToday = idx === 6; // Sunday/Today

              return (
                <div
                  key={day}
                  className={`p-3 rounded-2xl flex flex-col items-center justify-between gap-2 border transition-all ${
                    isActive
                      ? 'bg-[#FFF0E8] dark:bg-[#3A241A] border-[#D96B43]/40'
                      : 'bg-[#FAF6F0] dark:bg-[#25211D] border-black/5 dark:border-white/5 opacity-70'
                  }`}
                >
                  <span className="text-[11px] font-bold text-[#8A726A] dark:text-[#B29E96]">
                    {day}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    isActive
                      ? 'bg-[#D96B43] text-white shadow-sm'
                      : 'bg-black/5 dark:bg-white/10 text-[#8A726A]'
                  }`}>
                    {isActive ? <Flame className="w-4 h-4 fill-white text-white" /> : '—'}
                  </div>

                  <span className="text-[10px] font-semibold text-[#8A726A] dark:text-[#B29E96]">
                    {isToday ? 'Today' : isActive ? 'Done' : 'Rest'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Challenge Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#1F5C5B] to-[#164241] text-white p-6 rounded-3xl shadow-md flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/20">
                Weekly Quest #12
              </span>
              <span className="text-xs font-bold text-[#FFD5C2]">
                +150 XP Reward
              </span>
            </div>

            <h3 className="text-xl font-black">
              AI Intuition Challenge
            </h3>
            <p className="text-xs opacity-90 leading-relaxed mt-1">
              Test your knowledge on Machine Learning vs Traditional Coding, RAG open-book systems, and hallucination!
            </p>
          </div>

          <div className="pt-2">
            {profile.weeklyChallengeCompleted ? (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/10 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Challenge Completed! +150 XP Collected</span>
              </div>
            ) : (
              <button
                onClick={() => {
                  setQuizIndex(0);
                  setSelectedOption(null);
                  setShowExplanation(false);
                  setChallengeModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#D96B43] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#C2532B] active:scale-95 transition-all flex items-center justify-center gap-2 clay-button-squish"
              >
                <span>Start Challenge (3 Questions)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>


      {/* 3. PROGRESS METERS FOR EACH LEARNING LAYER */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-[#1E1B18] dark:text-[#FFF8F5] flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#D96B43]" />
          Learning Pathway Progress
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: 'The Basics', progress: 85, color: 'bg-emerald-500', modules: '4/5 Topics' },
            { title: 'Core Concepts', progress: 60, color: 'bg-[#D96B43]', modules: '3/5 Topics' },
            { title: 'Practical Applications', progress: 40, color: 'bg-[#1F5C5B]', modules: '2/5 Topics' },
            { title: 'Deep Dive', progress: 15, color: 'bg-[#4F46E5]', modules: '1/4 Topics' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1E1B18] p-5 rounded-3xl border border-black/8 dark:border-white/10 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#8A726A] dark:text-[#B29E96]">
                  Layer {idx + 1}
                </span>
                <span className="text-xs font-black text-[#D96B43]">
                  {item.progress}%
                </span>
              </div>

              <h4 className="text-base font-bold text-[#1E1B18] dark:text-[#FFF8F5]">
                {item.title}
              </h4>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-[#FAF6F0] dark:bg-[#25211D] rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#8A726A] dark:text-[#B29E96] pt-1">
                <span>{item.modules}</span>
                <button
                  onClick={() => setActivePage('mindmap')}
                  className="font-bold text-[#D96B43] hover:underline"
                >
                  Continue →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* 4. ACHIEVEMENT BADGES GRID */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-[#1E1B18] dark:text-[#FFF8F5] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#D96B43]" />
          Earned Badges & Milestones
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className={`p-4 rounded-3xl border text-center flex flex-col items-center justify-between gap-2 transition-all ${
                  b.earned
                    ? 'bg-white dark:bg-[#1E1B18] border-[#D96B43]/30 shadow-md'
                    : 'bg-[#FAF6F0]/60 dark:bg-[#1E1B18]/40 border-dashed border-black/10 dark:border-white/10 opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  b.earned
                    ? 'bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] shadow-xs'
                    : 'bg-black/5 dark:bg-white/10 text-[#8A726A]'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#1E1B18] dark:text-[#FFF8F5]">
                    {b.name}
                  </h4>
                  <span className="text-[10px] text-[#8A726A] dark:text-[#B29E96] block">
                    {b.nativeName}
                  </span>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  b.earned 
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' 
                    : 'bg-black/5 text-[#8A726A]'
                }`}>
                  {b.earned ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            );
          })}
        </div>
      </div>


      {/* 5. BOOKMARKED TERMS QUICK REVIEW */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-[#1E1B18] dark:text-[#FFF8F5] flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-[#D96B43]" />
            Your Saved AI Terms ({profile.bookmarkedTermIds.length})
          </h3>

          <button
            onClick={() => setActivePage('glossary')}
            className="text-xs font-bold text-[#D96B43] hover:underline"
          >
            Explore Full Glossary →
          </button>
        </div>

        {profile.bookmarkedTermIds.length === 0 ? (
          <div className="p-8 text-center bg-white dark:bg-[#1E1B18] rounded-3xl border border-black/8 dark:border-white/10 space-y-2">
            <p className="text-xs text-[#8A726A] dark:text-[#B29E96]">
              No saved terms yet. Click the bookmark icon on any Glossary card to review them here!
            </p>
            <button
              onClick={() => setActivePage('glossary')}
              className="px-4 py-2 rounded-full bg-[#D96B43] text-white text-xs font-bold"
            >
              Go to Glossary
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {profile.bookmarkedTermIds.map((termId) => {
              const term = GLOSSARY_TERMS.find(t => t.id === termId);
              if (!term) return null;
              const trans = term.translations[selectedLang] || term.translations['en'];

              return (
                <div
                  key={term.id}
                  onClick={() => setActivePage('glossary')}
                  className="p-4 rounded-2xl bg-white dark:bg-[#1E1B18] border border-black/8 dark:border-white/10 hover:border-[#D96B43]/40 cursor-pointer shadow-xs transition-all space-y-1.5"
                >
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43]">
                    {term.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#1E1B18] dark:text-[#FFF8F5]">
                    {trans.nativeTerm}
                  </h4>
                  <p className="text-xs text-[#8A726A] dark:text-[#B29E96] line-clamp-2">
                    {trans.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>


      {/* INTERACTIVE CHALLENGE MODAL */}
      {challengeModalOpen && currentQ && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-[#1E1B18] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 dark:border-white/10 space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#D96B43]">
                Question {quizIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs font-bold text-[#8A726A]">
                Score: {quizScore}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-[#1E1B18] dark:text-[#FFF8F5]">
              {currentQ.question[selectedLang] || currentQ.question['en']}
            </h3>

            {/* Options */}
            <div className="space-y-2.5">
              {(currentQ.options[selectedLang] || currentQ.options['en']).map((opt, optIdx) => {
                const isCorrect = optIdx === currentQ.correctIndex;
                const isPicked = selectedOption === optIdx;

                let optStyle = 'bg-[#FAF6F0] dark:bg-[#25211D] text-[#2D2926] dark:text-[#E8DDD2] border-black/5';

                if (selectedOption !== null) {
                  if (isCorrect) {
                    optStyle = 'bg-emerald-500 text-white font-bold border-emerald-500';
                  } else if (isPicked) {
                    optStyle = 'bg-rose-500 text-white font-bold border-rose-500';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectQuizOption(optIdx)}
                    disabled={selectedOption !== null}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all ${optStyle}`}
                  >
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation card */}
            {showExplanation && (
              <div className="p-4 rounded-2xl bg-[#FFF6F0] dark:bg-[#2C201A] border border-[#D96B43]/20 space-y-1">
                <span className="text-xs font-bold text-[#D96B43]">
                  Explanation:
                </span>
                <p className="text-xs text-[#56423C] dark:text-[#DDC0B7] leading-relaxed">
                  {currentQ.explanation[selectedLang] || currentQ.explanation['en']}
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setChallengeModalOpen(false)}
                className="text-xs font-bold text-[#8A726A] hover:text-[#D96B43]"
              >
                Close
              </button>

              {showExplanation && (
                <button
                  onClick={handleNextQuiz}
                  className="px-5 py-2.5 rounded-full bg-[#D96B43] text-white text-xs font-bold shadow-md hover:bg-[#C2532B]"
                >
                  {quizIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question →' : 'Complete Challenge! 🎉'}
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
