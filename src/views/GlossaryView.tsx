import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  X, 
  Globe, 
  WifiOff, 
  BookOpen, 
  Filter,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { LanguageId, GlossaryTerm } from '../types';
import { LANGUAGES } from '../data/languages';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { AudioSpeechButton } from '../components/AudioSpeechButton';

interface GlossaryViewProps {
  selectedLang: LanguageId;
  setSelectedLang: (lang: LanguageId) => void;
  bookmarkedTermIds: string[];
  onToggleBookmark: (termId: string) => void;
  isOfflineMode: boolean;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  selectedLang,
  setSelectedLang,
  bookmarkedTermIds,
  onToggleBookmark,
  isOfflineMode
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlphabet, setSelectedAlphabet] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [activeModalTerm, setActiveModalTerm] = useState<GlossaryTerm | null>(null);

  const isRTL = selectedLang === 'ur';

  const categories = [
    'ALL',
    'Fundamentals',
    'Neural Networks',
    'Generative AI',
    'NLP',
    'Ethics & Prompting'
  ];

  const alphabets = ['ALL', 'A', 'B', 'E', 'H', 'L', 'N', 'O', 'P', 'R', 'T', 'W'];

  // Filtered terms
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      // Bookmark filter
      if (showBookmarksOnly && !bookmarkedTermIds.includes(item.id)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // Alphabet filter
      if (selectedAlphabet !== 'ALL' && !item.term.toUpperCase().startsWith(selectedAlphabet)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const trans = item.translations[selectedLang] || item.translations['en'];
        const matchesTerm = item.term.toLowerCase().includes(q);
        const matchesNative = trans.nativeTerm.toLowerCase().includes(q);
        const matchesTagline = trans.tagline.toLowerCase().includes(q);
        const matchesExplanation = trans.explanation.toLowerCase().includes(q);
        return matchesTerm || matchesNative || matchesTagline || matchesExplanation;
      }

      return true;
    });
  }, [searchQuery, selectedAlphabet, selectedCategory, showBookmarksOnly, bookmarkedTermIds, selectedLang]);

  return (
    <div 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      
      {/* 1. Header & Language Switcher Tabs */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] text-xs font-bold mb-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>160-Term AI Encyclopedia</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
              AI Zero-Jargon Glossary
            </h1>
            <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96]">
              Clear explanations, cultural analogies, and everyday South Asian examples in 8 languages.
            </p>
          </div>

          {/* Offline Cache Status Badge */}
          {isOfflineMode && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700 text-xs font-bold self-start md:self-auto">
              <WifiOff className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Offline Study Pack Active (All terms cached locally)</span>
            </div>
          )}
        </div>

        {/* Language Switcher Tabs for all 8 Languages */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-1 text-xs font-bold text-[#8A726A] dark:text-[#B29E96] shrink-0 mr-2">
            <Globe className="w-3.5 h-3.5 text-[#D96B43]" />
            <span>Dialect:</span>
          </div>
          {Object.values(LANGUAGES).map((lang) => {
            const isCurrent = selectedLang === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => setSelectedLang(lang.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                  isCurrent
                    ? 'bg-[#D96B43] text-white border-[#D96B43] shadow-md shadow-[#D96B43]/20 scale-102'
                    : 'bg-white dark:bg-[#201D1A] text-[#2D2926] dark:text-[#E8DDD2] border-black/8 dark:border-white/10 hover:border-[#D96B43]/30'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      </div>


      {/* 2. Large Search Bar & Filter Controls */}
      <div className="space-y-4">
        
        {/* Search Input Box */}
        <div className="relative">
          <Search className={`w-5 h-5 absolute top-1/2 -translate-y-1/2 text-[#8A726A] dark:text-[#B29E96] ${isRTL ? 'right-4' : 'left-4'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isRTL ? 'کوئی بھی اصطلاح تلاش کریں (مثلاً: پرامپٹ، ٹوکن، نیورل نیٹ ورک)...' : 'Search any AI concept (e.g., Prompt, LLM, Weights, Backpropagation)...'}
            className={`w-full py-3.5 rounded-2xl bg-white dark:bg-[#201D1A] border border-black/10 dark:border-white/10 text-sm font-medium text-[#1E1B18] dark:text-[#FFF8F5] placeholder-[#8A726A] dark:placeholder-[#8A726A] focus:outline-none focus:ring-2 focus:ring-[#D96B43] shadow-sm ${
              isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute top-1/2 -translate-y-1/2 text-xs font-bold text-[#8A726A] hover:text-[#D96B43] ${isRTL ? 'left-4' : 'right-4'}`}
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills & Bookmarks Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1F5C5B] text-white'
                    : 'bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#E8DDD2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Bookmark list toggle */}
          <button
            onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
              showBookmarksOnly
                ? 'bg-[#D96B43] text-white border-[#D96B43]'
                : 'bg-white dark:bg-[#201D1A] text-[#2D2926] dark:text-[#E8DDD2] border-black/8 dark:border-white/10'
            }`}
          >
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>Saved Bookmarks ({bookmarkedTermIds.length})</span>
          </button>
        </div>

        {/* Alphabet Filter Chips */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar text-xs font-bold text-[#8A726A] dark:text-[#B29E96]">
          <span className="shrink-0 mr-1">Alphabet:</span>
          {alphabets.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedAlphabet(letter)}
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                selectedAlphabet === letter
                  ? 'bg-[#D96B43] text-white'
                  : 'hover:bg-[#F0E7DC] dark:hover:bg-[#34302C]'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

      </div>


      {/* 3. Grid of Term Cards */}
      {filteredTerms.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-[#1E1B18] rounded-3xl border border-black/6 dark:border-white/10 space-y-3">
          <HelpCircle className="w-8 h-8 text-[#D96B43] mx-auto opacity-75" />
          <h3 className="text-base font-bold text-[#1E1B18] dark:text-[#FFF8F5]">
            No AI terms match your search
          </h3>
          <p className="text-xs text-[#8A726A] dark:text-[#B29E96]">
            Try searching for another word or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedAlphabet('ALL');
              setSelectedCategory('ALL');
              setShowBookmarksOnly(false);
            }}
            className="px-4 py-2 rounded-full bg-[#D96B43] text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map((item) => {
            const isBookmarked = bookmarkedTermIds.includes(item.id);
            const trans = item.translations[selectedLang] || item.translations['en'];

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalTerm(item)}
                className="group cursor-pointer bg-white dark:bg-[#1E1B18] p-6 rounded-3xl border border-black/8 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#D96B43]/40 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  
                  {/* Category and Bookmark Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] dark:bg-[#25211D] text-[#1F5C5B]">
                      {item.category}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(item.id);
                      }}
                      className={`p-1.5 rounded-full transition-colors ${
                        isBookmarked 
                          ? 'text-[#D96B43] bg-[#FFF0E8] dark:bg-[#3A241A]' 
                          : 'text-[#8A726A] hover:text-[#D96B43]'
                      }`}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark term'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Native Script in Large Size */}
                  <h3 className="text-lg sm:text-xl font-black text-[#D96B43] mb-1 group-hover:scale-101 transition-transform">
                    {trans.nativeTerm}
                  </h3>

                  {/* English Term in Subdued Text */}
                  <div className="text-xs font-semibold text-[#8A726A] dark:text-[#B29E96] mb-3">
                    {item.term}
                  </div>

                  {/* One-Line Zero-Jargon Tagline */}
                  <p className="text-xs sm:text-sm text-[#2D2926] dark:text-[#E8DDD2] font-medium leading-relaxed">
                    {trans.tagline}
                  </p>

                </div>

                {/* Footer with Level and Listen Button */}
                <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    item.level === 'Beginner'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : item.level === 'Intermediate'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  }`}>
                    {item.level}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <AudioSpeechButton
                      textToSpeak={trans.tagline}
                      langCode={selectedLang}
                      label="Listen"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}


      {/* 4. Modal with Real-World Analogy, Example, Audio & Related Terms */}
      {activeModalTerm && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModalTerm(null)}
        >
          <div
            className={`w-full max-w-xl bg-white dark:bg-[#1E1B18] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 dark:border-white/15 max-h-[90vh] overflow-y-auto space-y-6 ${
              isRTL ? 'text-right' : 'text-left'
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43]">
                  {activeModalTerm.category} • {activeModalTerm.level}
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-[#1E1B18] dark:text-[#FFF8F5] mt-2">
                  {(activeModalTerm.translations[selectedLang] || activeModalTerm.translations['en']).nativeTerm}
                </h2>
                <p className="text-xs sm:text-sm text-[#8A726A] dark:text-[#B29E96]">
                  {activeModalTerm.term}
                </p>
              </div>

              <button
                onClick={() => setActiveModalTerm(null)}
                className="p-1.5 rounded-full hover:bg-[#FAF6F0] dark:hover:bg-[#2C2723] text-[#8A726A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Audio Button */}
            <div>
              <AudioSpeechButton
                textToSpeak={(activeModalTerm.translations[selectedLang] || activeModalTerm.translations['en']).analogy}
                langCode={selectedLang}
                label="Listen zero-jargon analogy"
              />
            </div>

            {/* Zero-Jargon Plain Language Explanation */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96]">
                Simple Explanation
              </h4>
              <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#DDC0B7] leading-relaxed">
                {(activeModalTerm.translations[selectedLang] || activeModalTerm.translations['en']).explanation}
              </p>
            </div>

            {/* Real-World Analogy Card */}
            <div className="p-4 rounded-2xl bg-[#FFF6F0] dark:bg-[#2C201A] border border-[#D96B43]/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D96B43]">
                <Sparkles className="w-4 h-4" />
                <span>Real-World South Asian Analogy</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2D2926] dark:text-[#F0E7DC] font-medium leading-relaxed italic">
                "{(activeModalTerm.translations[selectedLang] || activeModalTerm.translations['en']).analogy}"
              </p>
            </div>

            {/* Concrete Everyday Example */}
            <div className="p-4 rounded-2xl bg-[#FAF6F0] dark:bg-[#25211D] border border-black/5 dark:border-white/5 space-y-1.5">
              <h4 className="text-xs font-bold text-[#1F5C5B]">
                Everyday Example
              </h4>
              <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#DDC0B7] leading-relaxed">
                {(activeModalTerm.translations[selectedLang] || activeModalTerm.translations['en']).example}
              </p>
            </div>

            {/* Related Terms with clickable links */}
            {activeModalTerm.relatedTerms && activeModalTerm.relatedTerms.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96]">
                  Related Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalTerm.relatedTerms.map((relId) => {
                    const relatedObj = GLOSSARY_TERMS.find(t => t.id === relId);
                    if (!relatedObj) return null;
                    return (
                      <button
                        key={relId}
                        onClick={() => setActiveModalTerm(relatedObj)}
                        className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#D96B43] hover:text-white transition-colors"
                      >
                        {(relatedObj.translations[selectedLang] || relatedObj.translations['en']).nativeTerm}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-black/8 dark:border-white/10 flex items-center justify-between">
              <button
                onClick={() => onToggleBookmark(activeModalTerm.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-colors ${
                  bookmarkedTermIds.includes(activeModalTerm.id)
                    ? 'bg-[#D96B43] text-white border-[#D96B43]'
                    : 'bg-white dark:bg-[#201D1A] text-[#2D2926] dark:text-[#E8DDD2] border-black/10'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{bookmarkedTermIds.includes(activeModalTerm.id) ? 'Saved in Bookmarks' : 'Save to Bookmarks'}</span>
              </button>

              <button
                onClick={() => setActiveModalTerm(null)}
                className="px-5 py-2 rounded-full bg-[#1F5C5B] text-white text-xs font-bold"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
