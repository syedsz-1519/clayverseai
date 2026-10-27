import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Sparkles, 
  Wifi, 
  WifiOff, 
  BookOpen, 
  Network, 
  Compass, 
  Library, 
  Wrench, 
  Award,
  ChevronDown,
  Flame
} from 'lucide-react';
import { ActivePage, LanguageId } from '../types';
import { LANGUAGES, UI_STRINGS } from '../data/languages';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  selectedLang: LanguageId;
  setSelectedLang: (lang: LanguageId) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  isOfflineMode: boolean;
  setIsOfflineMode: (val: boolean) => void;
  streakCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  selectedLang,
  setSelectedLang,
  isDarkMode,
  setIsDarkMode,
  isOfflineMode,
  setIsOfflineMode,
  streakCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = UI_STRINGS[selectedLang];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'landing' as ActivePage, label: 'Home', icon: Sparkles },
    { id: 'mindmap' as ActivePage, label: t.navMindMap, icon: Compass },
    { id: 'visualizer' as ActivePage, label: t.navVisualizer, icon: Network },
    { id: 'glossary' as ActivePage, label: t.navGlossary, icon: Library },
    { id: 'tools' as ActivePage, label: t.navTools, icon: Wrench },
    { id: 'quiz' as ActivePage, label: t.navQuiz, icon: BookOpen },
    { id: 'dashboard' as ActivePage, label: t.navDashboard, icon: Award }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF6F0]/90 dark:bg-[#1E1B18]/90 border-b border-[#2D2926]/8 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo with tactile clay-blob icon */}
          <div 
            onClick={() => { setActivePage('landing'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F39C6B] via-[#D96B43] to-[#A8441F] flex items-center justify-center shadow-md shadow-[#D96B43]/20 group-hover:scale-105 transition-transform duration-200">
              {/* Cute clay blob face */}
              <div className="w-2.5 h-2.5 bg-white rounded-full absolute -top-1 right-2 opacity-80"></div>
              <svg viewBox="0 0 32 32" className="w-6 h-6 text-white drop-shadow">
                <circle cx="11" cy="14" r="2.2" fill="#FFFFFF" />
                <circle cx="21" cy="14" r="2.2" fill="#FFFFFF" />
                <path d="M 12 20 Q 16 24 20 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#1E1B18] dark:text-[#FFF8F5] flex items-center gap-1 font-['Plus_Jakarta_Sans']">
                Clayverse <span className="text-[#D96B43]">AI</span>
              </span>
              <span className="text-[10px] font-semibold text-[#8A726A] dark:text-[#DDC0B7] tracking-wider uppercase -mt-1">
                South Asia EdTech
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 clay-button-squish ${
                    isActive
                      ? 'bg-[#D96B43] text-white shadow-md shadow-[#D96B43]/25'
                      : 'text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#F0E7DC] dark:hover:bg-[#34302C]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${isActive ? 'text-white' : 'text-[#D96B43]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Streak Counter Pill */}
            <div 
              onClick={() => setActivePage('dashboard')}
              title={`${streakCount} Days Active Learning Streak!`}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] border border-[#D96B43]/30 text-xs font-bold cursor-pointer hover:scale-105 transition-transform"
            >
              <Flame className="w-4 h-4 fill-[#D96B43] text-[#D96B43] animate-pulse" />
              <span>{streakCount}d</span>
            </div>

            {/* Offline Mode Indicator & Toggle */}
            <button
              onClick={() => setIsOfflineMode(!isOfflineMode)}
              title={isOfflineMode ? 'Offline study mode is active (cached terms available)' : 'Online mode. Click to toggle offline study mode.'}
              className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                isOfflineMode
                  ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700'
                  : 'bg-[#F0E7DC] dark:bg-[#34302C] text-[#56423C] dark:text-[#DDC0B7] border-black/5 dark:border-white/10'
              }`}
            >
              {isOfflineMode ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span className="hidden md:inline">Offline Mode</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-[#1F5C5B]" />
                  <span className="hidden md:inline">Live</span>
                </>
              )}
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] text-xs font-bold border border-black/5 dark:border-white/10 hover:bg-[#E8DDD2] dark:hover:bg-[#433E38] transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#D96B43]" />
                <span>{LANGUAGES[selectedLang].nativeLabel}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 py-2 bg-white dark:bg-[#23201D] rounded-2xl shadow-xl border border-black/8 dark:border-white/15 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#DDC0B7] border-b border-black/5 dark:border-white/10 mb-1">
                    Select 8 Regional Languages
                  </div>
                  <div className="max-h-72 overflow-y-auto py-1">
                    {Object.values(LANGUAGES).map((lang) => {
                      const isSelected = selectedLang === lang.id;
                      return (
                        <button
                          key={lang.id}
                          onClick={() => {
                            setSelectedLang(lang.id);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                            isSelected 
                              ? 'bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] font-bold' 
                              : 'text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#FAF6F0] dark:hover:bg-[#2C2723]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span className="font-semibold">{lang.nativeLabel}</span>
                          </div>
                          <span className="text-[11px] text-[#8A726A] dark:text-[#B29E96]">
                            {lang.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle Light / Dark mode"
              className="p-2 rounded-full bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#E8DDD2] dark:hover:bg-[#433E38] transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#D96B43]" />}
            </button>

            {/* Primary CTA Button */}
            <button
              onClick={() => setActivePage('mindmap')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1F5C5B] text-white text-xs md:text-sm font-bold shadow-md shadow-[#1F5C5B]/25 hover:bg-[#297574] active:scale-95 transition-all"
            >
              <span>{t.startLearning}</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-black/5 dark:border-white/10 bg-[#FAF6F0] dark:bg-[#1E1B18] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-[#D96B43] text-white shadow-md'
                    : 'text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#F0E7DC] dark:hover:bg-[#34302C]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#D96B43]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                setActivePage('mindmap');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-full bg-[#1F5C5B] text-white text-sm font-bold text-center shadow-md shadow-[#1F5C5B]/20"
            >
              {t.startLearning}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
