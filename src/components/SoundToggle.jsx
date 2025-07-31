
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef(null);

  // Create audio context for sound effects
  useEffect(() => {
    if (typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  }, []);

  // Sound effect generators
  const playSound = (type) => {
    if (!soundEnabled || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    switch (type) {
      case 'zap':
        // Comic ZAP sound
        oscillator.frequency.setValueAtTime(800, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
        break;
      
      case 'sizzle':
        // BBQ sizzle sound
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(100 + Math.random() * 200, ctx.currentTime);
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.3);
        break;
      
      case 'pop':
        // Comic POP sound
        oscillator.frequency.setValueAtTime(100, ctx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.05);
        oscillator.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + 0.1);
        break;
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    playSound('pop');
  };

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.button
        onClick={toggleSound}
        whileHover={{ scale: 1.1, rotate: soundEnabled ? 5 : -5 }}
        whileTap={{ scale: 0.9 }}
        className={`p-3 rounded-full border-2 border-white shadow-lg transition-all ${
          soundEnabled 
            ? 'bg-yellow-400 text-black' 
            : 'bg-gray-800 text-gray-400'
        }`}
        title={soundEnabled ? 'Sound ON' : 'Sound OFF'}
      >
        {soundEnabled ? '🔊' : '🔇'}
      </motion.button>
      
      {/* Sound effect triggers for testing */}
      <div className="absolute top-16 right-0 space-y-2 opacity-20 hover:opacity-100 transition-opacity">
        <button onClick={() => playSound('zap')} className="block text-xs text-white">ZAP</button>
        <button onClick={() => playSound('sizzle')} className="block text-xs text-white">SIZZLE</button>
        <button onClick={() => playSound('pop')} className="block text-xs text-white">POP</button>
      </div>
    </motion.div>
  );
};

export default SoundToggle;
