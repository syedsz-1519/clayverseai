import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Wand2, 
  MessageSquare, 
  CheckCircle2, 
  Shapes, 
  Trophy, 
  BookOpen, 
  Database,
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  X, 
  ExternalLink, 
  Youtube, 
  FileText, 
  Compass,
  ArrowRight,
  Sparkle
} from 'lucide-react';
import { LanguageId, MindMapNode } from '../types';
import { MIND_MAP_NODES } from '../data/mindMapData';
import { AudioSpeechButton } from '../components/AudioSpeechButton';
import { ClayMascot } from '../components/ClayMascot';

interface MindMapViewProps {
  selectedLang: LanguageId;
  completedNodes: string[];
  onToggleCompleteNode: (nodeId: string) => void;
}

export const MindMapView: React.FC<MindMapViewProps> = ({
  selectedLang,
  completedNodes,
  onToggleCompleteNode
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('root');
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root', 'ml', 'genai']));
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showRightPanel, setShowRightPanel] = useState<boolean>(true);

  const selectedNode: MindMapNode = MIND_MAP_NODES[selectedNodeId] || MIND_MAP_NODES['root'];

  // Toggle node expansion
  const handleNodeClick = (nodeId: string) => {
    setSelectedNodeId(nodeId);
    setShowRightPanel(true);

    const nextExpanded = new Set(expandedNodes);
    if (nextExpanded.has(nodeId)) {
      // If clicking already expanded, toggle children if not root
      if (nodeId !== 'root') {
        nextExpanded.delete(nodeId);
      }
    } else {
      nextExpanded.add(nodeId);
    }
    setExpandedNodes(nextExpanded);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Wand2': return Wand2;
      case 'MessageSquare': return MessageSquare;
      case 'CheckCircle2': return CheckCircle2;
      case 'Shapes': return Shapes;
      case 'Trophy': return Trophy;
      case 'BookOpen': return BookOpen;
      case 'Database': return Database;
      default: return Sparkle;
    }
  };

  // Node rendering positions
  const nodeLayout = [
    { id: 'root', x: 50, y: 50, type: 'root' },
    // Primary branches
    { id: 'ml', x: 22, y: 25, type: 'primary', parent: 'root' },
    { id: 'dl', x: 22, y: 75, type: 'primary', parent: 'root' },
    { id: 'genai', x: 78, y: 25, type: 'primary', parent: 'root' },
    { id: 'prompting', x: 78, y: 75, type: 'primary', parent: 'root' },
    // ML children
    { id: 'supervised', x: 7, y: 15, type: 'child', parent: 'ml' },
    { id: 'unsupervised', x: 7, y: 28, type: 'child', parent: 'ml' },
    { id: 'reinforcement', x: 7, y: 41, type: 'child', parent: 'ml' },
    // GenAI children
    { id: 'llm-node', x: 93, y: 15, type: 'child', parent: 'genai' },
    { id: 'rag-node', x: 93, y: 32, type: 'child', parent: 'genai' }
  ];

  return (
    <div className="relative h-[calc(100vh-4.5rem)] flex overflow-hidden bg-[#FAF6F0] dark:bg-[#181513]">
      
      {/* Canvas Area */}
      <div className="flex-1 relative bg-dot-grid overflow-hidden flex items-center justify-center">
        
        {/* Top Hint Bar */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 dark:bg-[#201D1A]/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 dark:border-white/10 shadow-sm text-xs font-semibold text-[#56423C] dark:text-[#DDC0B7]">
          <Compass className="w-4 h-4 text-[#D96B43]" />
          <span>Click any node to expand concepts and view regional analogies</span>
        </div>

        {/* Zoomed & Interactive Canvas */}
        <div 
          className="w-full h-full relative transition-transform duration-300 origin-center flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* SVG Connection Curves */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="curveGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D96B43" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="curveGradChild" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D96B43" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1F5C5B" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Root to ML */}
            <path d="M 50% 50% Q 36% 40% 22% 25%" stroke="url(#curveGradPrimary)" strokeWidth="3" fill="none" strokeDasharray="6 3" />
            {/* Root to DL */}
            <path d="M 50% 50% Q 36% 60% 22% 75%" stroke="url(#curveGradPrimary)" strokeWidth="3" fill="none" strokeDasharray="6 3" />
            {/* Root to GenAI */}
            <path d="M 50% 50% Q 64% 40% 78% 25%" stroke="url(#curveGradPrimary)" strokeWidth="3" fill="none" strokeDasharray="6 3" />
            {/* Root to Prompting */}
            <path d="M 50% 50% Q 64% 60% 78% 75%" stroke="url(#curveGradPrimary)" strokeWidth="3" fill="none" strokeDasharray="6 3" />

            {/* ML to its children (if ML is expanded) */}
            {expandedNodes.has('ml') && (
              <>
                <path d="M 22% 25% Q 14% 20% 7% 15%" stroke="url(#curveGradChild)" strokeWidth="2.2" fill="none" />
                <path d="M 22% 25% Q 14% 26% 7% 28%" stroke="url(#curveGradChild)" strokeWidth="2.2" fill="none" />
                <path d="M 22% 25% Q 14% 33% 7% 41%" stroke="url(#curveGradChild)" strokeWidth="2.2" fill="none" />
              </>
            )}

            {/* GenAI to its children (if GenAI is expanded) */}
            {expandedNodes.has('genai') && (
              <>
                <path d="M 78% 25% Q 86% 20% 93% 15%" stroke="url(#curveGradChild)" strokeWidth="2.2" fill="none" />
                <path d="M 78% 25% Q 86% 28% 93% 32%" stroke="url(#curveGradChild)" strokeWidth="2.2" fill="none" />
              </>
            )}
          </svg>

          {/* Interactive Node Cards */}
          {nodeLayout.map((item) => {
            const nodeData = MIND_MAP_NODES[item.id];
            if (!nodeData) return null;

            // Check if visible
            if (item.type === 'child') {
              const parentId = item.parent;
              if (parentId && !expandedNodes.has(parentId)) {
                return null; // hide child if parent collapsed
              }
            }

            const isSelected = selectedNodeId === item.id;
            const isCompleted = completedNodes.includes(item.id);
            const Icon = getIcon(nodeData.iconName);
            const trans = nodeData.translations[selectedLang] || nodeData.translations['en'];

            // Styles based on node type
            const isRoot = item.type === 'root';
            const isPrimary = item.type === 'primary';

            return (
              <div
                key={item.id}
                onClick={() => handleNodeClick(item.id)}
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`absolute z-10 cursor-pointer transition-all duration-300 select-none group ${
                  isSelected ? 'scale-110 z-20' : 'hover:scale-105'
                }`}
              >
                <div
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-md transition-all ${
                    isRoot
                      ? 'bg-gradient-to-r from-[#4F46E5] to-[#D96B43] text-white border-white/20 shadow-xl shadow-[#D96B43]/20 ring-4 ring-[#D96B43]/20'
                      : isSelected
                      ? 'bg-[#D96B43] text-white border-[#D96B43] shadow-lg shadow-[#D96B43]/30 ring-3 ring-[#D96B43]/30'
                      : 'bg-white dark:bg-[#201D1A] text-[#1E1B18] dark:text-[#FFF8F5] border-black/8 dark:border-white/10 hover:border-[#D96B43]/40'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      isRoot
                        ? 'bg-white/20 text-white'
                        : isSelected
                        ? 'bg-white text-[#D96B43]'
                        : 'bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex flex-col pr-1">
                    <span className={`text-xs md:text-sm font-bold whitespace-nowrap leading-tight ${isRoot || isSelected ? 'text-white' : ''}`}>
                      {trans.title}
                    </span>
                    {selectedLang !== 'en' && !isRoot && (
                      <span className={`text-[10px] leading-none opacity-80 ${isSelected ? 'text-white/90' : 'text-[#8A726A] dark:text-[#B29E96]'}`}>
                        {nodeData.title}
                      </span>
                    )}
                  </div>

                  {isCompleted && (
                    <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 ml-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Left: Interactive Minimap */}
        <div className="absolute bottom-4 left-4 z-20 bg-white/95 dark:bg-[#201D1A]/95 backdrop-blur-md p-3 rounded-2xl border border-black/8 dark:border-white/10 shadow-lg hidden sm:block">
          <div className="text-[10px] font-bold text-[#8A726A] dark:text-[#B29E96] uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Mind Minimap</span>
            <span className="text-[#D96B43]">{Math.round(zoomLevel * 100)}%</span>
          </div>
          <div className="w-36 h-24 bg-[#FAF6F0] dark:bg-[#151311] rounded-xl relative border border-black/5 dark:border-white/5 overflow-hidden">
            {/* Miniature nodes */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#4F46E5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-2 h-2 rounded-full bg-[#D96B43] absolute top-[25%] left-[22%]"></div>
            <div className="w-2 h-2 rounded-full bg-[#D96B43] absolute top-[75%] left-[22%]"></div>
            <div className="w-2 h-2 rounded-full bg-[#1F5C5B] absolute top-[25%] left-[78%]"></div>
            <div className="w-2 h-2 rounded-full bg-[#1F5C5B] absolute top-[75%] left-[78%]"></div>
            {/* Viewport frame box */}
            <div className="absolute inset-2 border border-[#D96B43] rounded-sm pointer-events-none opacity-60"></div>
          </div>
        </div>

        {/* Bottom Right: Zoom Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-white/95 dark:bg-[#201D1A]/95 backdrop-blur-md p-1.5 rounded-full border border-black/8 dark:border-white/10 shadow-lg">
          <button
            onClick={() => setZoomLevel(prev => Math.min(prev + 0.15, 1.6))}
            title="Zoom In"
            className="p-2 rounded-full hover:bg-[#FAF6F0] dark:hover:bg-[#2C2723] text-[#2D2926] dark:text-[#E8DDD2] transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            title="Reset Zoom"
            className="px-2 py-1 text-xs font-bold text-[#8A726A] dark:text-[#B29E96] hover:text-[#D96B43]"
          >
            Reset
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(prev - 0.15, 0.65))}
            title="Zoom Out"
            className="p-2 rounded-full hover:bg-[#FAF6F0] dark:hover:bg-[#2C2723] text-[#2D2926] dark:text-[#E8DDD2] transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

      </div>


      {/* Right-Side Slide-In Concept Detail Drawer */}
      {showRightPanel && (
        <aside className="w-full sm:w-96 md:w-[420px] bg-white dark:bg-[#1E1B18] border-l border-black/8 dark:border-white/10 h-full overflow-y-auto shadow-2xl z-30 animate-in slide-in-from-right duration-200 flex flex-col justify-between">
          
          <div className="p-6 space-y-6">
            
            {/* Drawer Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    selectedNode.level === 'Beginner'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : selectedNode.level === 'Intermediate'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  }`}>
                    {selectedNode.level}
                  </span>
                  <span className="text-[11px] font-semibold text-[#8A726A] dark:text-[#B29E96]">
                    {selectedNode.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
                  {(selectedNode.translations[selectedLang] || selectedNode.translations['en']).title}
                </h2>
                {selectedLang !== 'en' && (
                  <p className="text-xs text-[#8A726A] dark:text-[#B29E96] font-medium">
                    {selectedNode.title}
                  </p>
                )}
              </div>

              <button
                onClick={() => setShowRightPanel(false)}
                className="p-1.5 rounded-full hover:bg-[#FAF6F0] dark:hover:bg-[#2C2723] text-[#8A726A] dark:text-[#B29E96]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Audio Speech Button */}
            <div>
              <AudioSpeechButton 
                textToSpeak={(selectedNode.translations[selectedLang] || selectedNode.translations['en']).analogy}
                langCode={selectedLang}
                label="Listen zero-jargon summary"
              />
            </div>

            {/* Real-World Analogy Card (South Asian metaphor) */}
            <div className="p-4 rounded-2xl bg-[#FFF6F0] dark:bg-[#2C201A] border border-[#D96B43]/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#D96B43]">
                <Sparkles className="w-4 h-4" />
                <span>Zero-Jargon Regional Analogy</span>
              </div>
              <p className="text-xs sm:text-sm text-[#2D2926] dark:text-[#F0E7DC] leading-relaxed font-medium">
                "{(selectedNode.translations[selectedLang] || selectedNode.translations['en']).analogy}"
              </p>
            </div>

            {/* Deep Conceptual Details */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96]">
                How It Works
              </h4>
              <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#DDC0B7] leading-relaxed">
                {(selectedNode.translations[selectedLang] || selectedNode.translations['en']).details}
              </p>
            </div>

            {/* Recommended Learning Resources (YouTube, Article, Sandbox) */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A726A] dark:text-[#B29E96]">
                Recommended Resources
              </h4>
              
              <div className="space-y-2">
                {selectedNode.resources.map((res, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6F0] dark:bg-[#25211D] border border-black/5 dark:border-white/5 hover:border-[#D96B43]/30 transition-all text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      {res.type === 'YouTube' ? (
                        <Youtube className="w-4 h-4 text-rose-500" />
                      ) : res.type === 'Article' ? (
                        <FileText className="w-4 h-4 text-[#1F5C5B]" />
                      ) : (
                        <Sparkles className="w-4 h-4 text-[#D96B43]" />
                      )}
                      <div>
                        <span className="font-bold text-[#1E1B18] dark:text-[#FFF8F5] block">
                          {res.title}
                        </span>
                        <span className="text-[11px] text-[#8A726A] dark:text-[#B29E96]">
                          {res.type} • {res.duration}
                        </span>
                      </div>
                    </div>

                    <a 
                      href={res.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1 text-[#8A726A] hover:text-[#D96B43]"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Drawer Footer Actions */}
          <div className="p-6 border-t border-black/8 dark:border-white/10 bg-[#FAF6F0] dark:bg-[#181513]">
            <button
              onClick={() => onToggleCompleteNode(selectedNode.id)}
              className={`w-full py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                completedNodes.includes(selectedNode.id)
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-[#D96B43] text-white shadow-md hover:bg-[#C2532B] active:scale-95'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {completedNodes.includes(selectedNode.id) 
                  ? 'Completed Concept ✓' 
                  : 'Mark as Understood (+50 XP)'}
              </span>
            </button>
          </div>

        </aside>
      )}

      {/* Floating Toggle Drawer button if drawer closed */}
      {!showRightPanel && (
        <button
          onClick={() => setShowRightPanel(true)}
          className="absolute top-4 right-4 z-20 px-3.5 py-2 rounded-full bg-[#D96B43] text-white text-xs font-bold shadow-lg flex items-center gap-1.5"
        >
          <span>View Concept Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      )}

    </div>
  );
};
