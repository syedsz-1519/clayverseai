import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Network, 
  GitCommit, 
  ScanEye, 
  Layers3, 
  Workflow, 
  Gauge, 
  Sparkles,
  Info
} from 'lucide-react';
import { LanguageId, VizType } from '../types';
import { VIZ_TABS, VIZ_EXPLANATIONS, StepExplanation } from '../data/visualizationData';
import { ClayMascot } from '../components/ClayMascot';
import { AudioSpeechButton } from '../components/AudioSpeechButton';

interface VisualizationViewProps {
  selectedLang: LanguageId;
}

export const VisualizationView: React.FC<VisualizationViewProps> = ({
  selectedLang
}) => {
  const [activeTab, setActiveTab] = useState<VizType>('neural-network');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMs, setSpeedMs] = useState<number>(2400); // Animation interval
  const [selectedCanvasNode, setSelectedCanvasNode] = useState<string | null>(null);

  const explanations: StepExplanation[] = VIZ_EXPLANATIONS[activeTab] || VIZ_EXPLANATIONS['neural-network'];
  const maxSteps = explanations.length;
  const activeExplanation = explanations[currentStep] || explanations[0];

  // Auto-advance steps when playing
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % maxSteps);
    }, speedMs);

    return () => clearInterval(timer);
  }, [isPlaying, maxSteps, speedMs]);

  // Tab switch reset
  const handleTabChange = (tabId: VizType) => {
    setActiveTab(tabId);
    setCurrentStep(0);
    setSelectedCanvasNode(null);
  };

  const getTabIcon = (id: VizType) => {
    switch (id) {
      case 'neural-network': return Network;
      case 'ml-pipeline': return GitCommit;
      case 'pattern-matching': return ScanEye;
      case 'transformer': return Layers3;
      case 'full-workflow': return Workflow;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      
      {/* Top Header & Tab Selector */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive AI Engine Simulators</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
              Interactive Machine Learning Visualizer
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8A726A] dark:text-[#B29E96]">
              Speed:
            </span>
            <button
              onClick={() => setSpeedMs(3400)}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${speedMs === 3400 ? 'bg-[#D96B43] text-white' : 'bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2]'}`}
            >
              0.7x
            </button>
            <button
              onClick={() => setSpeedMs(2400)}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${speedMs === 2400 ? 'bg-[#D96B43] text-white' : 'bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2]'}`}
            >
              1.0x
            </button>
            <button
              onClick={() => setSpeedMs(1400)}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${speedMs === 1400 ? 'bg-[#D96B43] text-white' : 'bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2]'}`}
            >
              1.8x
            </button>
          </div>
        </div>

        {/* 5 Tab Switchers */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {VIZ_TABS.map((tab) => {
            const Icon = getTabIcon(tab.id);
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 clay-button-squish border ${
                  isTabActive
                    ? 'bg-[#1F5C5B] text-white border-[#1F5C5B] shadow-md shadow-[#1F5C5B]/25'
                    : 'bg-white dark:bg-[#201D1A] text-[#2D2926] dark:text-[#E8DDD2] border-black/8 dark:border-white/10 hover:border-[#D96B43]/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isTabActive ? 'text-white' : 'text-[#D96B43]'}`} />
                <span>{tab.title[selectedLang] || tab.title['en']}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${isTabActive ? 'bg-white/20 text-white' : 'bg-[#FAF6F0] dark:bg-[#2A2622] text-[#8A726A] dark:text-[#B29E96]'}`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>


      {/* Main Grid: Left Canvas + Right Explanatory Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Large Interactive Canvas */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl bg-[#FAF6F0] dark:bg-[#151311] border border-black/8 dark:border-white/10 shadow-lg overflow-hidden p-6 flex items-center justify-center bg-dot-grid">
            
            {/* Ambient Animated Glowing Layers */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#4F46E5]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#D96B43]/15 rounded-full blur-3xl animate-pulse"></div>
            </div>

            {/* TAB 1: NEURAL NETWORK VISUALIZER */}
            {activeTab === 'neural-network' && (
              <div className="w-full h-full relative flex items-center justify-between px-6 sm:px-12">
                
                {/* SVG Connections between layers */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D96B43" stopOpacity={currentStep >= 1 ? 0.9 : 0.25} />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity={currentStep >= 2 ? 0.9 : 0.25} />
                    </linearGradient>
                  </defs>

                  {/* Lines between Input and Hidden 1 */}
                  {[60, 150, 240, 330].map((y1, i) =>
                    [90, 180, 270, 360].map((y2, j) => (
                      <line
                        key={`l1-${i}-${j}`}
                        x1="12%"
                        y1={`${y1 * 0.25}%`}
                        x2="38%"
                        y2={`${y2 * 0.25}%`}
                        stroke="url(#connGrad)"
                        strokeWidth={currentStep >= 1 ? '2' : '1'}
                        strokeDasharray={currentStep === 1 ? '4 2' : 'none'}
                        className={currentStep === 1 ? 'animate-pulse' : ''}
                      />
                    ))
                  )}

                  {/* Lines between Hidden 1 and Hidden 2 */}
                  {[90, 180, 270, 360].map((y1, i) =>
                    [110, 200, 290].map((y2, j) => (
                      <line
                        key={`l2-${i}-${j}`}
                        x1="38%"
                        y1={`${y1 * 0.25}%`}
                        x2="64%"
                        y2={`${y2 * 0.25}%`}
                        stroke="#4F46E5"
                        strokeOpacity={currentStep >= 2 ? 0.85 : 0.2}
                        strokeWidth={currentStep >= 2 ? '2.5' : '1'}
                        strokeDasharray={currentStep === 2 ? '5 3' : 'none'}
                      />
                    ))
                  )}

                  {/* Lines between Hidden 2 and Output */}
                  {[110, 200, 290].map((y1, i) =>
                    [140, 260].map((y2, j) => (
                      <line
                        key={`l3-${i}-${j}`}
                        x1="64%"
                        y1={`${y1 * 0.25}%`}
                        x2="88%"
                        y2={`${y2 * 0.25}%`}
                        stroke="#1F5C5B"
                        strokeOpacity={currentStep >= 3 ? 1 : 0.25}
                        strokeWidth={currentStep >= 3 ? '3' : '1'}
                      />
                    ))
                  )}
                </svg>

                {/* Layer 1: Input Layer */}
                <div className="flex flex-col justify-around h-[80%] z-10">
                  <div className="text-[10px] font-bold text-center uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96] -mt-6 mb-2">
                    Input Layer
                  </div>
                  {['Pixel (x1)', 'Pixel (x2)', 'Pixel (x3)', 'Pixel (x4)'].map((label, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCanvasNode(`Input ${idx + 1}: Value 0.85`)}
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                        currentStep === 0
                          ? 'bg-[#D96B43] text-white ring-4 ring-[#D96B43]/30 scale-110 shadow-lg'
                          : 'bg-white dark:bg-[#25211D] text-[#2D2926] dark:text-[#FFF8F5] border border-black/10'
                      }`}
                    >
                      x{idx + 1}
                    </button>
                  ))}
                </div>

                {/* Layer 2: Hidden 1 (Features) */}
                <div className="flex flex-col justify-around h-[85%] z-10">
                  <div className="text-[10px] font-bold text-center uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96] -mt-6 mb-2">
                    Edges & Slopes
                  </div>
                  {['Edge 1', 'Edge 2', 'Curve 1', 'Curve 2'].map((label, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCanvasNode(`Hidden Layer 1 Node ${idx + 1}: ReLU Activation = 0.92`)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                        currentStep === 1
                          ? 'bg-[#4F46E5] text-white ring-4 ring-[#4F46E5]/30 scale-110 shadow-lg animate-pulse'
                          : currentStep > 1
                          ? 'bg-[#4F46E5]/90 text-white'
                          : 'bg-white dark:bg-[#25211D] text-[#2D2926] dark:text-[#FFF8F5] border border-black/10'
                      }`}
                    >
                      h{idx + 1}
                    </button>
                  ))}
                </div>

                {/* Layer 3: Hidden 2 (Complex Parts) */}
                <div className="flex flex-col justify-around h-[70%] z-10">
                  <div className="text-[10px] font-bold text-center uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96] -mt-6 mb-2">
                    Complex Parts
                  </div>
                  {['Eyes', 'Ears', 'Nose'].map((label, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCanvasNode(`Hidden Layer 2 Node ${idx + 1}: High-level feature combination`)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                        currentStep === 2
                          ? 'bg-[#1F5C5B] text-white ring-4 ring-[#1F5C5B]/30 scale-110 shadow-lg animate-pulse'
                          : currentStep > 2
                          ? 'bg-[#1F5C5B]/90 text-white'
                          : 'bg-white dark:bg-[#25211D] text-[#2D2926] dark:text-[#FFF8F5] border border-black/10'
                      }`}
                    >
                      f{idx + 1}
                    </button>
                  ))}
                </div>

                {/* Layer 4: Output Layer */}
                <div className="flex flex-col justify-around h-[50%] z-10">
                  <div className="text-[10px] font-bold text-center uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96] -mt-6 mb-2">
                    Output
                  </div>
                  
                  {/* Cat Prediction */}
                  <div
                    onClick={() => setSelectedCanvasNode('Classification Result: Cat with 98.4% Confidence Score!')}
                    className={`px-3 py-2 rounded-2xl flex items-center gap-2 cursor-pointer font-bold text-xs shadow-md transition-all ${
                      currentStep === 3
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-500/30 scale-110 shadow-xl'
                        : 'bg-white dark:bg-[#25211D] text-[#2D2926] dark:text-[#FFF8F5] border'
                    }`}
                  >
                    <span>🐱 Cat</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20">
                      {currentStep === 3 ? '98.4%' : '0%'}
                    </span>
                  </div>

                  {/* Dog Prediction */}
                  <div
                    onClick={() => setSelectedCanvasNode('Classification Result: Dog with 1.6% Confidence')}
                    className="px-3 py-2 rounded-2xl flex items-center gap-2 font-bold text-xs bg-white/60 dark:bg-[#25211D]/60 text-[#8A726A] dark:text-[#B29E96] border opacity-75"
                  >
                    <span>🐶 Dog</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10">
                      {currentStep === 3 ? '1.6%' : '0%'}
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: ML PIPELINE VISUALIZER */}
            {activeTab === 'ml-pipeline' && (
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <div className="w-full flex items-center justify-between max-w-xl relative">
                  
                  {/* Track bar */}
                  <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-black/10 dark:bg-white/10 -translate-y-1/2 z-0"></div>
                  <div 
                    className="absolute top-1/2 left-0 h-1.5 bg-[#1F5C5B] -translate-y-1/2 z-0 transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>

                  {['Data', 'Cleaning', 'Features', 'Training', 'Deploy'].map((step, idx) => {
                    const isDone = currentStep >= idx;
                    const isCurrent = currentStep === idx;
                    return (
                      <div key={idx} className="flex flex-col items-center z-10">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shadow-md transition-all ${
                            isCurrent
                              ? 'bg-[#D96B43] text-white scale-125 ring-4 ring-[#D96B43]/30 shadow-lg'
                              : isDone
                              ? 'bg-[#1F5C5B] text-white'
                              : 'bg-white dark:bg-[#25211D] text-[#8A726A] dark:text-[#B29E96] border'
                          }`}
                        >
                          {idx + 1}
                        </div>
                        <span className={`text-[11px] font-bold mt-2 whitespace-nowrap ${isCurrent ? 'text-[#D96B43]' : 'text-[#8A726A] dark:text-[#B29E96]'}`}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 text-center p-4 rounded-2xl bg-white/70 dark:bg-[#201D1A]/70 backdrop-blur-md border border-black/5 dark:border-white/5 max-w-md">
                  <span className="text-xs font-bold text-[#1F5C5B]">
                    Pipeline Status: Step {currentStep + 1} of 5 Active
                  </span>
                  <p className="text-xs text-[#56423C] dark:text-[#DDC0B7] mt-1">
                    {currentStep === 0 && 'Collecting 100,000 raw sensor and image files.'}
                    {currentStep === 1 && 'Dropping corrupt rows and normalizing pixel brightness.'}
                    {currentStep === 2 && 'Extracting texture descriptors and color histograms.'}
                    {currentStep === 3 && 'Running 50 epochs of stochastic gradient descent.'}
                    {currentStep === 4 && 'Dockerized container running at 12ms latency on cloud!'}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: PATTERN MATCHING VISUALIZER */}
            {activeTab === 'pattern-matching' && (
              <div className="w-full h-full flex items-center justify-around p-4">
                
                {/* 28x28 digit preview */}
                <div className="p-4 bg-white dark:bg-[#201D1A] rounded-2xl border border-black/10 dark:border-white/10 shadow text-center">
                  <div className="text-[10px] font-bold text-[#8A726A] mb-2 uppercase">Input Digit Grid</div>
                  <div className="w-28 h-28 bg-[#181513] rounded-xl p-2 grid grid-cols-5 grid-rows-5 gap-1">
                    {/* Simulated pixel blocks for "7" */}
                    {[
                      1, 1, 1, 1, 1,
                      0, 0, 0, 1, 0,
                      0, 0, 1, 0, 0,
                      0, 1, 0, 0, 0,
                      0, 1, 0, 0, 0
                    ].map((px, i) => (
                      <div 
                        key={i} 
                        className={`rounded-xs transition-colors duration-300 ${
                          px === 1 ? (currentStep >= 1 ? 'bg-[#FFD5C2] shadow-sm' : 'bg-white') : 'bg-white/10'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Filter detection card */}
                <div className="p-5 bg-white dark:bg-[#201D1A] rounded-2xl border border-black/10 dark:border-white/10 shadow max-w-xs space-y-3">
                  <div className="text-xs font-bold text-[#D96B43]">
                    {currentStep === 0 && 'Raw Pixel Matrix (0 to 255)'}
                    {currentStep === 1 && 'Top Horizontal Bar Filter: 96% Match!'}
                    {currentStep === 2 && 'Diagonal Stem Filter: 94% Match!'}
                    {currentStep === 3 && 'Classification: Digit 7 Confirmed (99.4%)'}
                  </div>
                  <div className="space-y-1.5 text-xs text-[#56423C] dark:text-[#B29E96]">
                    <div className="flex justify-between">
                      <span>Digit 7:</span>
                      <span className="font-bold text-emerald-600">{currentStep === 3 ? '99.4%' : 'Searching...'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Digit 1:</span>
                      <span>{currentStep === 3 ? '0.4%' : '0%'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Digit 2:</span>
                      <span>{currentStep === 3 ? '0.2%' : '0%'}</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 4: TRANSFORMER ATTENTION VISUALIZER */}
            {activeTab === 'transformer' && (
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <div className="text-xs font-bold text-[#8A726A] dark:text-[#B29E96] uppercase tracking-wider mb-4">
                  Self-Attention Connections Matrix
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg">
                  {['The', 'animal', 'didn\'t', 'cross', 'the', 'street', 'because', 'it', 'was', 'too', 'tired'].map((word, i) => {
                    const isPronoun = word === 'it';
                    const isTarget = word === 'animal';
                    const isContext = word === 'tired';

                    return (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                          isPronoun && currentStep >= 2
                            ? 'bg-[#D96B43] text-white scale-110 shadow-lg ring-4 ring-[#D96B43]/30'
                            : isTarget && currentStep >= 2
                            ? 'bg-emerald-600 text-white scale-110 shadow-md ring-4 ring-emerald-500/30'
                            : isContext && currentStep >= 1
                            ? 'bg-[#4F46E5] text-white shadow'
                            : 'bg-white dark:bg-[#25211D] text-[#2D2926] dark:text-[#E8DDD2] border border-black/10'
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-8 p-3 rounded-2xl bg-white/80 dark:bg-[#201D1A]/80 border text-center text-xs max-w-md">
                  <span className="font-bold text-[#1F5C5B]">
                    Attention Weight ("it" ➔ "animal"): 88.4%
                  </span>
                  <p className="text-[#56423C] dark:text-[#B29E96] mt-0.5">
                    Model understands that "it" refers to the tired animal, not the street!
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: FULL WORKFLOW VISUALIZER */}
            {activeTab === 'full-workflow' && (
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-md">
                  {[
                    { label: '1. Goal & Metric', desc: 'Pass/Fail Pred' },
                    { label: '2. 80/20 Split', desc: 'Locked Test Vault' },
                    { label: '3. Loss Curve', desc: 'Gradient Descent' },
                    { label: '4. Evaluation', desc: '94.2% Test F1' },
                    { label: '5. Guardrails', desc: 'Zero Drift Alarm' }
                  ].map((card, i) => {
                    const isCurrent = currentStep === i;
                    const isDone = currentStep > i;
                    return (
                      <div
                        key={i}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          isCurrent
                            ? 'bg-[#D96B43] text-white scale-105 shadow-lg border-[#D96B43]'
                            : isDone
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300'
                            : 'bg-white dark:bg-[#201D1A] text-[#8A726A] dark:text-[#B29E96] border-black/10'
                        }`}
                      >
                        <div className="text-xs font-bold">{card.label}</div>
                        <div className="text-[10px] opacity-80 mt-1">{card.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Node Click info tooltip */}
            {selectedCanvasNode && (
              <div className="absolute top-4 left-4 right-4 sm:right-auto z-20 p-3 bg-white/95 dark:bg-[#23201D]/95 backdrop-blur-md rounded-2xl border border-[#D96B43]/30 shadow-xl flex items-center justify-between text-xs font-bold text-[#1E1B18] dark:text-[#FFF8F5] max-w-sm">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#D96B43] shrink-0" />
                  <span>{selectedCanvasNode}</span>
                </div>
                <button
                  onClick={() => setSelectedCanvasNode(null)}
                  className="ml-2 text-[#8A726A] hover:text-[#D96B43] p-1"
                >
                  ✕
                </button>
              </div>
            )}

          </div>

          {/* Control Bar Below Canvas */}
          <div className="bg-white dark:bg-[#1E1B18] p-4 rounded-3xl border border-black/8 dark:border-white/10 shadow-md flex flex-wrap items-center justify-between gap-4">
            
            {/* Play / Pause / Step Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-3 rounded-full text-white font-bold transition-all shadow-md active:scale-95 clay-button-squish ${
                  isPlaying ? 'bg-[#1F5C5B]' : 'bg-[#D96B43]'
                }`}
                title={isPlaying ? 'Pause animation' : 'Play animation'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(prev => (prev === 0 ? maxSteps - 1 : prev - 1));
                }}
                className="p-2.5 rounded-full bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#E8DDD2]"
                title="Previous step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(prev => (prev + 1) % maxSteps);
                }}
                className="p-2.5 rounded-full bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#E8DDD2]"
                title="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className="p-2.5 rounded-full bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#E8DDD2]"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Step progress dots */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxSteps }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    currentStep === idx 
                      ? 'w-7 bg-[#D96B43]' 
                      : 'w-2.5 bg-[#D96B43]/20 hover:bg-[#D96B43]/40'
                  }`}
                  title={`Step ${idx + 1}`}
                />
              ))}
            </div>

            {/* Step counter label */}
            <div className="text-xs font-bold text-[#8A726A] dark:text-[#B29E96]">
              Step <span className="text-[#D96B43]">{currentStep + 1}</span> of {maxSteps}
            </div>

          </div>

        </div>


        {/* Right: Explanatory Card + Reacting Clay Mascot */}
        <div className="lg:col-span-4 bg-white dark:bg-[#1E1B18] p-6 rounded-3xl border border-black/8 dark:border-white/10 shadow-lg relative flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            
            {/* Header with step number and audio */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43]">
                  Active Step
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#1E1B18] dark:text-[#FFF8F5] mt-1.5">
                  {activeExplanation.stepName[selectedLang] || activeExplanation.stepName['en']}
                </h3>
              </div>
            </div>

            {/* Audio speech button */}
            <div>
              <AudioSpeechButton
                textToSpeak={activeExplanation.analogy[selectedLang] || activeExplanation.analogy['en']}
                langCode={selectedLang}
                label="Listen simple explanation"
              />
            </div>

            {/* What is happening in plain words */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96]">
                What is Happening
              </h4>
              <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#DDC0B7] leading-relaxed">
                {activeExplanation.explanation[selectedLang] || activeExplanation.explanation['en']}
              </p>
            </div>

            {/* Real-world South Asian analogy */}
            <div className="p-4 rounded-2xl bg-[#FFF6F0] dark:bg-[#2C201A] border border-[#D96B43]/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D96B43]">
                <Sparkles className="w-4 h-4" />
                <span>Real-World Analogy</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2D2926] dark:text-[#F0E7DC] font-medium leading-relaxed italic">
                "{activeExplanation.analogy[selectedLang] || activeExplanation.analogy['en']}"
              </p>
            </div>

          </div>

          {/* Clay Mascot Corner reaction */}
          <div className="pt-4 border-t border-black/6 dark:border-white/10 flex items-center justify-between">
            <div className="text-xs">
              <span className="font-bold text-[#1E1B18] dark:text-[#FFF8F5] block">
                Mascot Golu's reaction
              </span>
              <span className="text-[#8A726A] dark:text-[#B29E96] capitalize">
                Feeling {activeExplanation.mascotReaction}!
              </span>
            </div>

            <ClayMascot
              size="md"
              expression={activeExplanation.mascotReaction}
              speechBubble={
                activeExplanation.mascotReaction === 'celebrating'
                  ? 'Kamaal! Output confirmed!'
                  : activeExplanation.mascotReaction === 'thinking'
                  ? 'Calculating weights...'
                  : 'Let\'s watch the flow!'
              }
            />
          </div>

        </div>

      </div>

    </div>
  );
};
