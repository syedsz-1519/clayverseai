import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Layers, 
  BookOpen, 
  Zap, 
  Flame, 
  CheckCircle2, 
  Wrench, 
  Terminal, 
  Globe2,
  BrainCircuit,
  MessageSquare,
  Play
} from 'lucide-react';
import { ActivePage, LanguageId } from '../types';
import { LANGUAGES, UI_STRINGS } from '../data/languages';
import { ClayMascot } from '../components/ClayMascot';

interface LandingViewProps {
  setActivePage: (page: ActivePage) => void;
  selectedLang: LanguageId;
  setSelectedLang: (lang: LanguageId) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  setActivePage,
  selectedLang,
  setSelectedLang
}) => {
  const t = UI_STRINGS[selectedLang];

  const pathwaySteps = [
    {
      number: '01',
      title: 'The Basics',
      titleHi: 'बुनियादी समझ',
      desc: 'What is AI, how machines learn from patterns, and why it is not magic but intuitive math.',
      descHi: 'AI क्या है, मशीनें कैसे सीखती हैं, और यह जादू नहीं बल्कि सरल पैटर्न हैं।',
      icon: Sparkles,
      time: '15 mins',
      color: 'from-amber-400 to-[#D96B43]'
    },
    {
      number: '02',
      title: 'Core Concepts',
      titleHi: 'मूल सिद्धांत',
      desc: 'Neurons, layers, training loops, loss functions, and how weights adjust with backpropagation.',
      descHi: 'न्यूरॉन्स, लेयर्स, लॉस फंक्शन और गलतियों से सीखने का बैकप्रॉपैगैशन चक्र।',
      icon: BrainCircuit,
      time: '25 mins',
      color: 'from-[#D96B43] to-[#A8441F]'
    },
    {
      number: '03',
      title: 'Practical Applications',
      titleHi: 'व्यावहारिक उपयोग',
      desc: 'Prompt engineering, RAG, chatbots, computer vision, and real-world tools students can use today.',
      descHi: 'प्रॉम्प्ट क्राफ्टिंग, RAG सिस्टम्स, और दैनिक जीवन में काम आने वाले AI टूल्स।',
      icon: Terminal,
      time: '35 mins',
      color: 'from-[#1F5C5B] to-[#164241]'
    },
    {
      number: '04',
      title: 'Deep Dive',
      titleHi: 'गहन समझ',
      desc: 'Transformer attention mechanics, LLM pre-training, fine-tuning, and AI ethics guardrails.',
      descHi: 'ट्रांसफॉर्मर का सेल्फ-अटेंशन, एलएलएम की ट्रेनिंग और जिम्मेदार AI के नियम।',
      icon: Layers,
      time: '45 mins',
      color: 'from-[#4F46E5] to-[#3730A3]'
    }
  ];

  const features = [
    {
      title: 'Interactive Mind Maps',
      desc: 'Explore connections between AI concepts visually. Click to zoom, inspect analogies, and see parent-child branches.',
      icon: Compass,
      action: () => setActivePage('mindmap'),
      badge: 'Interactive'
    },
    {
      title: 'Animated Visualizations',
      desc: 'Watch data flow through glowing neural layers, step through the ML pipeline, and view attention weights in real-time.',
      icon: Zap,
      action: () => setActivePage('visualizer'),
      badge: '5 Simulators'
    },
    {
      title: 'Hands-on Sandboxes',
      desc: 'Test your understanding with instant interactive challenges, zero-risk experiments, and prompt playgrounds.',
      icon: Terminal,
      action: () => setActivePage('quiz'),
      badge: 'Gamified'
    },
    {
      title: '160-Term AI Glossary',
      desc: 'Clear definitions in 8 regional languages with cultural analogies (cricket, chai, Bollywood) and speech synthesis.',
      icon: BookOpen,
      action: () => setActivePage('glossary'),
      badge: '8 Languages'
    },
    {
      title: 'Gamified Streaks & Badges',
      desc: 'Earn daily streak flames, collect badges for completed layers, and challenge yourself with weekly puzzles.',
      icon: Flame,
      action: () => setActivePage('dashboard'),
      badge: 'Rewarding'
    },
    {
      title: '40+ AI Tools Directory',
      desc: 'Curated list of free and student-friendly generative AI tools for writing, coding, image creation, and research.',
      icon: Wrench,
      action: () => setActivePage('tools'),
      badge: 'Directory'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] border border-[#D96B43]/20 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-[#D96B43]" />
              <span>Made for South Asian Students & Beginners</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E1B18] dark:text-[#FFF8F5] tracking-tight leading-[1.15]">
              {t.heroHeadline}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#56423C] dark:text-[#DDC0B7] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.heroSubtext}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => setActivePage('mindmap')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#D96B43] text-white font-bold text-base shadow-lg shadow-[#D96B43]/30 hover:bg-[#C2532B] active:scale-95 transition-all flex items-center justify-center gap-2 clay-button-squish"
              >
                <span>{t.startLearning}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('mindmap')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] font-bold text-base border border-black/8 dark:border-white/10 hover:bg-[#E8DDD2] dark:hover:bg-[#433E38] transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#D96B43]" />
                <span>{t.exploreMindMap}</span>
              </button>
            </div>

            {/* Micro reassurance badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#8A726A] dark:text-[#B29E96]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1F5C5B]" />
                <span>Zero Math Jargon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1F5C5B]" />
                <span>8 Regional Languages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1F5C5B]" />
                <span>Interactive Visualizers</span>
              </div>
            </div>

          </div>

          {/* Right Mascot + Glowing Neural Network Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Background Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D96B43]/20 via-[#4F46E5]/15 to-[#1F5C5B]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* Neural Net Ambient Illustration Card */}
            <div className="w-full max-w-md p-6 bg-white/80 dark:bg-[#201D1A]/90 backdrop-blur-md rounded-3xl border border-[#D96B43]/20 shadow-xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-3 border-b border-black/5 dark:border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D96B43]"></div>
                  <span className="text-xs font-bold text-[#2D2926] dark:text-[#E8DDD2]">
                    Neural Workshop Active
                  </span>
                </div>
                <button 
                  onClick={() => setActivePage('visualizer')}
                  className="text-[11px] font-bold text-[#D96B43] hover:underline flex items-center gap-1"
                >
                  <Play className="w-3 h-3 fill-current" /> Run Simulation
                </button>
              </div>

              {/* Glowing Neural Network Canvas Graphic */}
              <div className="h-48 w-full relative flex items-center justify-between px-4 py-2 bg-[#FAF6F0] dark:bg-[#181513] rounded-2xl border border-black/5 dark:border-white/5">
                
                {/* Flowing animated lines in SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Layer connections */}
                  <line x1="30" y1="40" x2="110" y2="30" stroke="#D96B43" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                  <line x1="30" y1="40" x2="110" y2="80" stroke="#4F46E5" strokeWidth="1.5" strokeOpacity="0.6" />
                  <line x1="30" y1="90" x2="110" y2="80" stroke="#1F5C5B" strokeWidth="2" />
                  <line x1="30" y1="90" x2="110" y2="130" stroke="#D96B43" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="30" y1="140" x2="110" y2="80" stroke="#4F46E5" strokeWidth="1.5" />
                  
                  <line x1="110" y1="30" x2="190" y2="50" stroke="#D96B43" strokeWidth="2" />
                  <line x1="110" y1="80" x2="190" y2="50" stroke="#4F46E5" strokeWidth="2" className="animate-pulse" />
                  <line x1="110" y1="80" x2="190" y2="110" stroke="#1F5C5B" strokeWidth="2" />
                  <line x1="110" y1="130" x2="190" y2="110" stroke="#D96B43" strokeWidth="1.5" />

                  <line x1="190" y1="50" x2="270" y2="80" stroke="#D96B43" strokeWidth="2.5" className="animate-pulse" />
                  <line x1="190" y1="110" x2="270" y2="80" stroke="#1F5C5B" strokeWidth="2" />
                </svg>

                {/* Layer 1 Nodes */}
                <div className="flex flex-col justify-around h-full z-10">
                  <div className="w-5 h-5 rounded-full bg-[#D96B43] shadow-md shadow-[#D96B43]/50 animate-ping opacity-75"></div>
                  <div className="w-5 h-5 rounded-full bg-[#D96B43] shadow-md shadow-[#D96B43]/50 -mt-5"></div>
                  <div className="w-5 h-5 rounded-full bg-[#1F5C5B] shadow-md"></div>
                </div>

                {/* Layer 2 Nodes */}
                <div className="flex flex-col justify-around h-full z-10">
                  <div className="w-5 h-5 rounded-full bg-[#4F46E5] shadow-md shadow-[#4F46E5]/40"></div>
                  <div className="w-6 h-6 rounded-full bg-[#D96B43] shadow-lg shadow-[#D96B43]/60 scale-110 border-2 border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-[#4F46E5] shadow-md"></div>
                </div>

                {/* Layer 3 Nodes */}
                <div className="flex flex-col justify-around h-full z-10">
                  <div className="w-5 h-5 rounded-full bg-[#1F5C5B] shadow-md"></div>
                  <div className="w-5 h-5 rounded-full bg-[#D96B43] shadow-md shadow-[#D96B43]/50"></div>
                </div>

                {/* Output Node */}
                <div className="flex flex-col justify-center h-full z-10">
                  <div className="w-7 h-7 rounded-full bg-[#1F5C5B] text-white flex items-center justify-center font-bold text-[10px] shadow-lg shadow-[#1F5C5B]/50 animate-bounce">
                    99%
                  </div>
                </div>
              </div>

              {/* Floating Clay Mascot on top corner */}
              <div className="absolute -top-6 -right-4 z-20">
                <ClayMascot 
                  size="md" 
                  expression="celebrating" 
                  speechBubble="Namaste! Click any node to learn!"
                  onClick={() => setActivePage('mindmap')}
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#8A726A] dark:text-[#B29E96]">
                <span>Input: Pixels (0-255)</span>
                <span className="font-bold text-[#1F5C5B]">Output: Cat Recognized!</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 2. ROW OF LANGUAGE CHIPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1E1B18] rounded-3xl p-6 shadow-md border border-black/6 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base font-extrabold text-[#1E1B18] dark:text-[#FFF8F5] flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#D96B43]" />
                Learn in Your Mother Tongue
              </h3>
              <p className="text-xs text-[#56423C] dark:text-[#B29E96]">
                Click any language chip to instantly switch analogies, definitions, and interface.
              </p>
            </div>
            <span className="text-xs font-bold text-[#D96B43] px-3 py-1 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A]">
              8 Regional Dialects Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {Object.values(LANGUAGES).map((lang) => {
              const isSelected = selectedLang === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLang(lang.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-200 clay-button-squish ${
                    isSelected
                      ? 'bg-[#D96B43] text-white border-[#D96B43] shadow-md shadow-[#D96B43]/20 scale-102'
                      : 'bg-[#FAF6F0] dark:bg-[#25211D] text-[#2D2926] dark:text-[#E8DDD2] border-black/5 dark:border-white/5 hover:border-[#D96B43]/30'
                  }`}
                >
                  <span className="text-lg mb-1">{lang.flag}</span>
                  <span className="text-sm font-bold tracking-wide">
                    {lang.nativeLabel}
                  </span>
                  <span className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#8A726A] dark:text-[#B29E96]'}`}>
                    {lang.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>


      {/* 3. FOUR-STEP LEARNING PATHWAY (CONNECTED CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3F1] dark:bg-[#163332] text-[#1F5C5B] text-xs font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Step-by-Step Curriculum</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
            {t.pathwayTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#56423C] dark:text-[#B29E96]">
            {t.pathwaySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {pathwaySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                onClick={() => setActivePage('mindmap')}
                className="group cursor-pointer bg-white dark:bg-[#1E1B18] rounded-3xl p-6 border border-black/6 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200 relative flex flex-col justify-between"
              >
                {/* Step pill and number */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#D96B43]/80 font-mono">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF6F0] dark:bg-[#2A2622] text-[#8A726A] dark:text-[#B29E96]">
                      {step.time}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1B18] dark:text-[#FFF8F5] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#D96B43]">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 4. FEATURE CARDS GRID (3 COLUMNS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Learning Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
            {t.featuresTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#56423C] dark:text-[#B29E96]">
            {t.featuresSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                onClick={feat.action}
                className="group cursor-pointer bg-white dark:bg-[#1E1B18] rounded-3xl p-6 border border-black/6 dark:border-white/10 shadow-md hover:shadow-xl hover:border-[#D96B43]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF6F0] dark:bg-[#2A2622] text-[#1F5C5B]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1B18] dark:text-[#FFF8F5] mb-2 group-hover:text-[#D96B43] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#D96B43]">
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 5. STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1F5C5B] via-[#2A6E6D] to-[#1F5C5B] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <span className="text-3xl sm:text-5xl font-black tracking-tight text-[#FFD5C2]">
                8
              </span>
              <p className="text-xs sm:text-sm font-semibold opacity-90">
                {t.statsLanguages}
              </p>
              <span className="text-[11px] opacity-75 block">Native Indic Scripts & Dialects</span>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-5xl font-black tracking-tight text-[#FFD5C2]">
                100+
              </span>
              <p className="text-xs sm:text-sm font-semibold opacity-90">
                {t.statsResources}
              </p>
              <span className="text-[11px] opacity-75 block">Videos, Guides & Sandboxes</span>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-5xl font-black tracking-tight text-[#FFD5C2]">
                160+
              </span>
              <p className="text-xs sm:text-sm font-semibold opacity-90">
                {t.statsTerms}
              </p>
              <span className="text-[11px] opacity-75 block">Zero-Jargon Analogies</span>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-5xl font-black tracking-tight text-[#FFD5C2]">
                5
              </span>
              <p className="text-xs sm:text-sm font-semibold opacity-90">
                {t.statsVisualizations}
              </p>
              <span className="text-[11px] opacity-75 block">Interactive Simulators</span>
            </div>

          </div>
        </div>
      </section>


      {/* 6. REGIONAL LEARNER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h3 className="text-xl sm:text-3xl font-extrabold text-[#1E1B18] dark:text-[#FFF8F5]">
            Loved by Learners Across the Region
          </h3>
          <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96]">
            From high school students in tier-2 cities to college students building their first AI projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#1E1B18] p-6 rounded-3xl border border-black/6 dark:border-white/10 shadow-sm space-y-3">
            <p className="text-xs sm:text-sm italic text-[#56423C] dark:text-[#DDC0B7]">
              "Backpropagation always felt like scary advanced calculus. The tea stall and cricket analogies in Telugu made it click instantly!"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-black/5 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-[#D96B43] text-white flex items-center justify-center font-bold text-xs">
                S
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1E1B18] dark:text-[#FFF8F5]">Sai Krishna</h4>
                <p className="text-[11px] text-[#8A726A] dark:text-[#B29E96]">Engineering Student, Hyderabad</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1B18] p-6 rounded-3xl border border-black/6 dark:border-white/10 shadow-sm space-y-3">
            <p className="text-xs sm:text-sm italic text-[#56423C] dark:text-[#DDC0B7]">
              "Hinglish aur Hindi mein AI tools seekhna itna natural lagta hai. Mind map ke animated nodes dekh kar concepts crystal clear ho gaye!"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-black/5 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-[#1F5C5B] text-white flex items-center justify-center font-bold text-xs">
                P
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1E1B18] dark:text-[#FFF8F5]">Pooja Verma</h4>
                <p className="text-[11px] text-[#8A726A] dark:text-[#B29E96]">BCA Student, Jaipur</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1E1B18] p-6 rounded-3xl border border-black/6 dark:border-white/10 shadow-sm space-y-3">
            <p className="text-xs sm:text-sm italic text-[#56423C] dark:text-[#DDC0B7]">
              "The Urdu RTL glossary with offline mode is fantastic for studying during my train commute. No heavy English textbooks needed!"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-black/5 dark:border-white/10">
              <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-xs">
                F
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1E1B18] dark:text-[#FFF8F5]">Faizan Tariq</h4>
                <p className="text-[11px] text-[#8A726A] dark:text-[#B29E96]">Self-taught Developer, Lahore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF2EC] dark:bg-[#25201C] rounded-3xl p-8 sm:p-12 border border-[#D96B43]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
              Ready to sculpt your understanding of AI?
            </h3>
            <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96]">
              Begin your free journey today with interactive mind maps and visual simulators.
            </p>
          </div>
          <button
            onClick={() => setActivePage('mindmap')}
            className="px-8 py-3.5 rounded-full bg-[#D96B43] text-white font-bold text-base shadow-lg shadow-[#D96B43]/30 hover:bg-[#C2532B] active:scale-95 transition-all flex items-center gap-2 clay-button-squish whitespace-nowrap"
          >
            <span>Start Free Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
