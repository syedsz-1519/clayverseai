/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActivePage, LanguageId, LearnerProfile } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingView } from './views/LandingView';
import { MindMapView } from './views/MindMapView';
import { VisualizationView } from './views/VisualizationView';
import { GlossaryView } from './views/GlossaryView';
import { DashboardView } from './views/DashboardView';
import { ToolsDirectoryView } from './views/ToolsDirectoryView';
import { QuizView } from './views/QuizView';

const INITIAL_PROFILE: LearnerProfile = {
  name: 'Aarav Sharma',
  avatarSeed: 'clay-sculptor-1',
  streakDays: 7,
  streakActiveToday: true,
  streakDaysList: [true, true, true, true, true, true, true],
  xp: 320,
  level: 3,
  completedNodes: ['root', 'ml', 'genai'],
  bookmarkedTermIds: ['llm', 'rag', 'hallucination'],
  earnedBadgeIds: ['first_lesson', 'neural_architect', 'multilingual_explorer', 'streak_keeper'],
  weeklyChallengeCompleted: false
};

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('landing');
  const [selectedLang, setSelectedLang] = useState<LanguageId>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(false);
  const [profile, setProfile] = useState<LearnerProfile>(() => {
    try {
      const saved = localStorage.getItem('clayverse_profile');
      return saved ? JSON.parse(saved) : INITIAL_PROFILE;
    } catch {
      return INITIAL_PROFILE;
    }
  });

  // Dark mode effect on document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Save profile changes
  useEffect(() => {
    try {
      localStorage.setItem('clayverse_profile', JSON.stringify(profile));
    } catch {
      // LocalStorage error fallback
    }
  }, [profile]);

  // Bookmark toggle
  const handleToggleBookmark = (termId: string) => {
    setProfile(prev => {
      const exists = prev.bookmarkedTermIds.includes(termId);
      const updatedBookmarks = exists
        ? prev.bookmarkedTermIds.filter(id => id !== termId)
        : [...prev.bookmarkedTermIds, termId];

      return {
        ...prev,
        bookmarkedTermIds: updatedBookmarks,
        xp: exists ? prev.xp : prev.xp + 20
      };
    });
  };

  // Node complete toggle
  const handleToggleCompleteNode = (nodeId: string) => {
    setProfile(prev => {
      const exists = prev.completedNodes.includes(nodeId);
      const updatedNodes = exists
        ? prev.completedNodes.filter(id => id !== nodeId)
        : [...prev.completedNodes, nodeId];

      return {
        ...prev,
        completedNodes: updatedNodes,
        xp: exists ? Math.max(0, prev.xp - 50) : prev.xp + 50
      };
    });
  };

  const handleUpdateProfile = (updated: Partial<LearnerProfile>) => {
    setProfile(prev => ({ ...prev, ...updated }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] dark:bg-[#151311] text-[#2D2926] dark:text-[#FFF8F5] transition-colors duration-200">
      
      {/* Global Sticky Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        isOfflineMode={isOfflineMode}
        setIsOfflineMode={setIsOfflineMode}
        streakCount={profile.streakDays}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {activePage === 'landing' && (
          <LandingView
            setActivePage={setActivePage}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        )}

        {activePage === 'mindmap' && (
          <MindMapView
            selectedLang={selectedLang}
            completedNodes={profile.completedNodes}
            onToggleCompleteNode={handleToggleCompleteNode}
          />
        )}

        {activePage === 'visualizer' && (
          <VisualizationView
            selectedLang={selectedLang}
          />
        )}

        {activePage === 'glossary' && (
          <GlossaryView
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
            bookmarkedTermIds={profile.bookmarkedTermIds}
            onToggleBookmark={handleToggleBookmark}
            isOfflineMode={isOfflineMode}
          />
        )}

        {activePage === 'dashboard' && (
          <DashboardView
            selectedLang={selectedLang}
            setActivePage={setActivePage}
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activePage === 'tools' && (
          <ToolsDirectoryView
            selectedLang={selectedLang}
          />
        )}

        {activePage === 'quiz' && (
          <QuizView
            selectedLang={selectedLang}
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}
      </main>

      {/* Global Footer (shown on all pages except full-screen mindmap canvas for optimal height) */}
      {activePage !== 'mindmap' && (
        <Footer
          setActivePage={setActivePage}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />
      )}

    </div>
  );
}
