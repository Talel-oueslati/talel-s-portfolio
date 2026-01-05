import React from 'react';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, label, onClick, isSelected }) => {
  return (
    <div 
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <div className="desktop-icon-img flex items-center justify-center">
        {icon}
      </div>
      <span className="desktop-icon-text">{label}</span>
    </div>
  );
};

export default DesktopIcon;
