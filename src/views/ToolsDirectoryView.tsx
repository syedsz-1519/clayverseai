import React, { useState } from 'react';
import { 
  Wrench, 
  Search, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  Filter 
} from 'lucide-react';
import { LanguageId } from '../types';
import { AI_TOOLS_LIST } from '../data/toolsData';

interface ToolsDirectoryViewProps {
  selectedLang: LanguageId;
}

export const ToolsDirectoryView: React.FC<ToolsDirectoryViewProps> = ({
  selectedLang
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('ALL');

  const categories = [
    'ALL',
    'Text & Writing',
    'Images & Art',
    'Coding',
    'Audio & Voice',
    'Research',
    'Video'
  ];

  const filteredTools = AI_TOOLS_LIST.filter((tool) => {
    if (selectedCat !== 'ALL' && tool.category !== selectedCat) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = tool.name.toLowerCase().includes(q);
      const matchDesc = (tool.description[selectedLang] || tool.description['en']).toLowerCase().includes(q);
      return matchName || matchDesc;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-8">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43] text-xs font-bold mb-1">
          <Wrench className="w-3.5 h-3.5" />
          <span>Curated AI Software Directory</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-[#1E1B18] dark:text-[#FFF8F5]">
          40+ Student-Friendly AI Tools
        </h1>
        <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#B29E96]">
          Handpicked generative AI tools for writing, coding, creating art, and studying without breaking the bank.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4 text-[#8A726A] dark:text-[#B29E96]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search AI tools (e.g., ChatGPT, Claude, Midjourney, Perplexity)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-[#201D1A] border border-black/10 dark:border-white/10 text-sm font-medium text-[#1E1B18] dark:text-[#FFF8F5] placeholder-[#8A726A] focus:outline-none focus:ring-2 focus:ring-[#D96B43] shadow-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                selectedCat === c
                  ? 'bg-[#1F5C5B] text-white shadow-sm'
                  : 'bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] hover:bg-[#E8DDD2]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className="bg-white dark:bg-[#1E1B18] p-6 rounded-3xl border border-black/8 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#D96B43]/40 transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FAF6F0] dark:bg-[#25211D] text-[#1F5C5B]">
                  {tool.category}
                </span>

                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFF0E8] dark:bg-[#3A241A] text-[#D96B43]">
                  {tool.badge}
                </span>
              </div>

              <h3 className="text-xl font-black text-[#1E1B18] dark:text-[#FFF8F5] mb-2">
                {tool.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#56423C] dark:text-[#DDC0B7] leading-relaxed">
                {tool.description[selectedLang] || tool.description['en']}
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-[#8A726A] dark:text-[#B29E96]">
                {tool.pricing}
              </span>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F5C5B] text-white text-xs font-bold hover:bg-[#297574] transition-colors"
              >
                <span>Try Tool</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
