import React, { useState } from 'react';
import { User, Code, Briefcase, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import XPWindow from './XPWindow';
import Taskbar from './Taskbar';
import AboutWindow from './windows/AboutWindow';
import SkillsWindow from './windows/SkillsWindow';
import ExperienceWindow from './windows/ExperienceWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import EducationWindow from './windows/EducationWindow';
import ContactWindow from './windows/ContactWindow';

interface WindowState {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  isOpen: boolean;
  zIndex: number;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
}

const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'about',
      title: 'About Me',
      icon: <User size={16} className="text-primary-foreground" />,
      content: <AboutWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 50, y: 30 },
      defaultSize: { width: 550, height: 380 },
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <Code size={16} className="text-primary-foreground" />,
      content: <SkillsWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 120, y: 60 },
      defaultSize: { width: 600, height: 450 },
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <Briefcase size={16} className="text-primary-foreground" />,
      content: <ExperienceWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 180, y: 90 },
      defaultSize: { width: 550, height: 480 },
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: <FolderOpen size={16} className="text-primary-foreground" />,
      content: <ProjectsWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 240, y: 50 },
      defaultSize: { width: 650, height: 450 },
    },
    {
      id: 'education',
      title: 'Education & Certifications',
      icon: <GraduationCap size={16} className="text-primary-foreground" />,
      content: <EducationWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 100, y: 80 },
      defaultSize: { width: 550, height: 500 },
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: <Mail size={16} className="text-primary-foreground" />,
      content: <ContactWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 300, y: 100 },
      defaultSize: { width: 450, height: 420 },
    },
  ]);

  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(1);

  const openWindow = (id: string) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isOpen: true, zIndex: newZIndex } : w
      )
    );
    setActiveWindow(id);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w))
    );
    if (activeWindow === id) {
      const openWindows = windows.filter((w) => w.isOpen && w.id !== id);
      setActiveWindow(openWindows.length > 0 ? openWindows[openWindows.length - 1].id : null);
    }
  };

  const focusWindow = (id: string) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: newZIndex } : w))
    );
    setActiveWindow(id);
  };

  const desktopIcons = [
    { id: 'about', icon: <User size={32} className="text-cyan-300" />, label: 'About Me' },
    { id: 'skills', icon: <Code size={32} className="text-green-300" />, label: 'Skills' },
    { id: 'experience', icon: <Briefcase size={32} className="text-yellow-300" />, label: 'Experience' },
    { id: 'projects', icon: <FolderOpen size={32} className="text-orange-300" />, label: 'Projects' },
    { id: 'education', icon: <GraduationCap size={32} className="text-purple-300" />, label: 'Education' },
    { id: 'contact', icon: <Mail size={32} className="text-pink-300" />, label: 'Contact' },
  ];

  const openWindowsList = windows.filter((w) => w.isOpen).map((w) => ({
    id: w.id,
    title: w.title,
    icon: w.icon,
  }));

  return (
    <div className="h-screen w-screen overflow-hidden desktop-background relative">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            onClick={() => openWindow(icon.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map(
        (window) =>
          window.isOpen && (
            <XPWindow
              key={window.id}
              title={window.title}
              icon={window.icon}
              onClose={() => closeWindow(window.id)}
              isActive={activeWindow === window.id}
              onFocus={() => focusWindow(window.id)}
              zIndex={window.zIndex}
              defaultPosition={window.defaultPosition}
              defaultSize={window.defaultSize}
            >
              {window.content}
            </XPWindow>
          )
      )}

      {/* Taskbar */}
      <Taskbar
        openWindows={openWindowsList}
        activeWindow={activeWindow}
        onWindowClick={focusWindow}
      />
    </div>
  );
};

export default Desktop;
