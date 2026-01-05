import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface XPWindowProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
  isActive: boolean;
  onFocus: () => void;
  zIndex: number;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
}

const XPWindow: React.FC<XPWindowProps> = ({
  title,
  icon,
  children,
  onClose,
  isActive,
  onFocus,
  zIndex,
  defaultPosition = { x: 100, y: 50 },
  defaultSize = { width: 600, height: 450 },
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: Math.max(0, e.clientX - dragOffset.x),
          y: Math.max(0, e.clientY - dragOffset.y),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onFocus();
  };

  const windowStyle: React.CSSProperties = isMaximized
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 44px)',
        zIndex,
      }
    : {
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
      };

  return (
    <div
      ref={windowRef}
      className="xp-window flex flex-col"
      style={windowStyle}
      onClick={onFocus}
    >
      {/* Window Header */}
      <div
        className={`xp-window-header ${isActive ? '' : 'opacity-70'}`}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4">{icon}</div>
          <span className="text-primary-foreground text-sm font-semibold drop-shadow-md">
            {title}
          </span>
        </div>
        <div className="flex gap-1">
          <button className="xp-window-btn xp-window-btn-minimize">
            <Minus size={10} />
          </button>
          <button
            className="xp-window-btn xp-window-btn-maximize"
            onClick={handleMaximize}
          >
            <Square size={9} />
          </button>
          <button
            className="xp-window-btn xp-window-btn-close"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto xp-scrollbar bg-card text-card-foreground">
        {children}
      </div>
    </div>
  );
};

export default XPWindow;
