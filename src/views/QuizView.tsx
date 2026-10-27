import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Flame 
} from 'lucide-react';
import { LanguageId, LearnerProfile } from '../types';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { ClayMascot } from '../components/ClayMascot';

interface QuizViewProps {
  selectedLang: LanguageId;
  profile: LearnerProfile;
  onUpdateProfile: (updated: Partial<LearnerProfile>) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  selectedLang,
  profile,
  onUpdateProfile
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);
    setShowAnswer(true);

    if (idx === question.correctIndex) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOpt(null);
      setShowAnswer(false);
    } else {
      setIsCompleted(true);
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 } });
      onUpdateProfile({
        weeklyChallengeCompleted: true,
        xp: profile.xp + 100
      });
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setShowAnswer(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Interactive Knowledge Sandbox</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
          AI Intuition Practice Sandbox
        </h1>
        <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96]">
          Test your conceptual understanding without pressure. Zero math formulas, pure logic and analogies.
        </p>
      </div>

      {!isCompleted ? (
        <div className="bg-white dark:bg-[#1E1B18] p-6 sm:p-10 rounded-3xl border border-black/8 dark:border-white/10 shadow-lg space-y-6">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/10 text-xs font-bold text-[#8A726A] dark:text-[#B29E96]">
            <span>
              Question <span className="text-[#D96B43]">{currentIdx + 1}</span> of {QUIZ_QUESTIONS.length}
            </span>
            <span>
              Current Score: <span className="text-[#1F5C5B]">{score}</span>
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-lg sm:text-xl font-black text-[#1E1B18] dark:text-[#FFF8F5] leading-relaxed">
            {question.question[selectedLang] || question.question['en']}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {(question.options[selectedLang] || question.options['en']).map((opt, optIndex) => {
              const isCorrect = optIndex === question.correctIndex;
              const isChosen = selectedOpt === optIndex;

              let style = 'bg-[#FAF6F0] dark:bg-[#25211D] text-[#2D2926] dark:text-[#E8DDD2] border-black/8 hover:border-[#D96B43]/40';

              if (showAnswer) {
                if (isCorrect) {
                  style = 'bg-emerald-500 text-white font-bold border-emerald-500 shadow-md';
                } else if (isChosen) {
                  style = 'bg-rose-500 text-white font-bold border-rose-500 shadow-md';
                } else {
                  style = 'bg-[#FAF6F0]/60 dark:bg-[#25211D]/40 text-[#8A726A] border-black/5 opacity-60';
                }
              }

              return (
                <button
                  key={optIndex}
                  onClick={() => handleSelect(optIndex)}
                  disabled={showAnswer}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all duration-200 flex items-center justify-between ${style}`}
                >
                  <span>{opt}</span>
                  {showAnswer && isCorrect && <CheckCircle2 className="w-5 h-5 shrink-0" />}
                  {showAnswer && isChosen && !isCorrect && <XCircle className="w-5 h-5 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {showAnswer && (
            <div className="p-4 rounded-2xl bg-[#FFF6F0] dark:bg-[#2C201A] border border-[#D96B43]/20 space-y-1.5 animate-in fade-in duration-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D96B43]">
                <Sparkles className="w-4 h-4" />
                <span>Zero-Jargon Reason:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2D2926] dark:text-[#F0E7DC] font-medium leading-relaxed">
                {question.explanation[selectedLang] || question.explanation['en']}
              </p>
            </div>
          )}

          {/* Action button */}
          {showAnswer && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-full bg-[#D96B43] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#C2532B] active:scale-95 transition-all flex items-center gap-2"
              >
                <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Results Screen */
        <div className="bg-white dark:bg-[#1E1B18] p-8 sm:p-12 rounded-3xl border border-black/8 dark:border-white/10 shadow-xl text-center space-y-6">
          <ClayMascot size="lg" expression="celebrating" speechBubble="Shabash! Great effort!" />

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
              Challenge Completed!
            </h2>
            <p className="text-sm text-[#56423C] dark:text-[#B29E96]">
              You scored <span className="font-bold text-[#D96B43] text-base">{score}</span> out of {QUIZ_QUESTIONS.length}!
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] font-bold text-sm">
            <Trophy className="w-4 h-4" />
            <span>+100 XP Added to Profile!</span>
          </div>

          <div>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-full bg-[#1F5C5B] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#297574] active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Sandbox Challenge</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
