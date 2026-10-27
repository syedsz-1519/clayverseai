import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface AudioSpeechButtonProps {
  textToSpeak: string;
  langCode?: string;
  label?: string;
  className?: string;
}

export const AudioSpeechButton: React.FC<AudioSpeechButtonProps> = ({
  textToSpeak,
  langCode = 'en',
  label = 'Listen',
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Map language IDs to BCP 47 language codes
    const speechCodeMap: Record<string, string> = {
      en: 'en-IN',
      hi: 'hi-IN',
      te: 'te-IN',
      mr: 'mr-IN',
      ta: 'ta-IN',
      ur: 'ur-PK',
      'r-ur': 'ur-PK',
      hin: 'hi-IN'
    };

    utterance.lang = speechCodeMap[langCode] || 'en-IN';
    utterance.rate = 0.95; // Slightly slower, comfortable for learning
    utterance.pitch = 1.05; // Warm, friendly tone

    utterance.onstart = () => {
      setIsPlaying(true);
    };

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={handleSpeak}
      title={isPlaying ? 'Stop audio' : 'Listen in regional voice'}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border clay-button-squish ${
        isPlaying
          ? 'bg-[#D96B43] text-white border-[#D96B43] shadow-md animate-pulse'
          : 'bg-[#F0E7DC] dark:bg-[#34302C] text-[#2D2926] dark:text-[#E8DDD2] border-black/5 dark:border-white/10 hover:bg-[#E8DDD2] dark:hover:bg-[#433E38]'
      } ${className}`}
    >
      {isPlaying ? (
        <>
          <VolumeX className="w-3.5 h-3.5 text-white animate-spin" />
          <span>Speaking...</span>
        </>
      ) : (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#D96B43]" />
          <span>{label}</span>
          <Sparkles className="w-2.5 h-2.5 text-[#D96B43]/70" />
        </>
      )}
    </button>
  );
};
