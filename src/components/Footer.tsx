import React from 'react';
import { ActivePage, LanguageId } from '../types';
import { LANGUAGES } from '../data/languages';
import { Heart, Sparkles, BookOpen, Globe2, Compass, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  selectedLang: LanguageId;
  setSelectedLang: (lang: LanguageId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  selectedLang,
  setSelectedLang
}) => {
  return (
    <footer className="bg-[#F0E7DC] dark:bg-[#181513] text-[#2D2926] dark:text-[#E8DDD2] border-t border-black/5 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div 
              onClick={() => setActivePage('landing')}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#F39C6B] to-[#A8441F] flex items-center justify-center text-white font-bold text-sm shadow">
                C
              </div>
              <span className="text-xl font-black tracking-tight text-[#1E1B18] dark:text-[#FFF8F5]">
                Clayverse <span className="text-[#D96B43]">AI</span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#56423C] dark:text-[#B29E96] leading-relaxed">
              Making Artificial Intelligence, Machine Learning, and GenAI approachable and joyful for students and non-technical learners across South Asia in their own native languages.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8A726A] dark:text-[#DDC0B7]">
              <ShieldCheck className="w-4 h-4 text-[#1F5C5B]" />
              <span>Zero-Jargon • 100% Free Open Education</span>
            </div>
          </div>

          {/* Quick Learning Paths */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96] mb-3">
              Learning Modules
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <button onClick={() => setActivePage('mindmap')} className="hover:text-[#D96B43] transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#D96B43]" />
                  <span>Interactive Mind Map</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('visualizer')} className="hover:text-[#D96B43] transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D96B43]" />
                  <span>Neural Network Visualizer</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('glossary')} className="hover:text-[#D96B43] transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#D96B43]" />
                  <span>160-Term AI Glossary</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('quiz')} className="hover:text-[#D96B43] transition-colors flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#D96B43]" />
                  <span>Interactive Sandboxes</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96] mb-3">
              Student Resources
            </h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <button onClick={() => setActivePage('tools')} className="hover:text-[#D96B43] transition-colors">
                  40+ Curated AI Tools
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('dashboard')} className="hover:text-[#D96B43] transition-colors">
                  Daily Streak & Badges
                </button>
              </li>
              <li>
                <span className="text-[#8A726A] dark:text-[#B29E96]">
                  Offline Study Packs (Local Cache)
                </span>
              </li>
              <li>
                <span className="text-[#8A726A] dark:text-[#B29E96]">
                  Audio Voice Explanations
                </span>
              </li>
            </ul>
          </div>

          {/* Supported Languages Chips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96] mb-3 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-[#D96B43]" />
              <span>Available Languages</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {Object.values(LANGUAGES).map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLang(lang.id)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedLang === lang.id
                      ? 'bg-[#D96B43] text-white shadow-sm font-bold'
                      : 'bg-white dark:bg-[#25211D] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#FAF6F0]'
                  }`}
                >
                  {lang.nativeLabel}
                </button>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-[#8A726A] dark:text-[#A89891]">
              Switching language adapts analogies and UI in real-time.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A726A] dark:text-[#A89891]">
          <p>© 2026 Clayverse AI. Crafted with love for South Asian learners.</p>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-[#D96B43]">Privacy Friendly</span>
            <span>•</span>
            <span className="cursor-pointer hover:text-[#D96B43]">Open Educational Resource</span>
            <span>•</span>
            <span className="text-[#D96B43] font-semibold">Offline Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
