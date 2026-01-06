import React, { useState, useEffect } from 'react';
import { Monitor } from 'lucide-react';

interface TaskbarProps {
  openWindows: Array<{ id: string; title: string; icon: React.ReactNode }>;
  activeWindow: string | null;
  onWindowClick: (id: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ openWindows, activeWindow, onWindowClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="xp-taskbar h-11 flex items-center justify-between px-1 fixed bottom-0 left-0 right-0 z-50">
      {/* Start Button */}
      <button className="xp-start-btn flex items-center gap-2 h-8">
        <Monitor size={18} />
        <span className="text-sm">Talel</span>
      </button>

      {/* Open Windows */}
      <div className="flex-1 flex items-center gap-1 px-2 overflow-x-auto">
        {openWindows.map((window) => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            className={`
              flex items-center gap-2 px-3 py-1 min-w-32 max-w-48 
              rounded text-sm text-primary-foreground truncate
              transition-all duration-150
              ${activeWindow === window.id
                ? 'bg-primary/40 shadow-inner border border-primary/50'
                : 'bg-primary/20 hover:bg-primary/30 border border-transparent'
              }
            `}
          >
            <div className="w-4 h-4 flex-shrink-0">{window.icon}</div>
            <span className="truncate">{window.title}</span>
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-3 px-4 h-full bg-slate-900/80 border-l border-cyan-500/30 rounded-l-lg">
        <span className="text-cyan-300 text-sm font-medium tracking-wide">
          {formatTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
