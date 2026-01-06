import React, { useState } from 'react';
import { User, Code, Briefcase, FolderOpen, GraduationCap, Mail, Github, Linkedin } from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import XPWindow from './XPWindow';
import Taskbar from './Taskbar';
import AboutWindow from './windows/AboutWindow';
import SkillsWindow from './windows/SkillsWindow';
import ExperienceWindow from './windows/ExperienceWindow';
import ProjectsWindow from './windows/ProjectsWindow';
import EducationWindow from './windows/EducationWindow';
import ContactWindow from './windows/ContactWindow';
import talelPhoto from '@/assets/talel-photo.jpg';

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

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
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
      defaultSize: { width: 600, height: 420 },
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <Code size={16} className="text-primary-foreground" />,
      content: <SkillsWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 120, y: 60 },
      defaultSize: { width: 650, height: 500 },
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <Briefcase size={16} className="text-primary-foreground" />,
      content: <ExperienceWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 180, y: 90 },
      defaultSize: { width: 600, height: 520 },
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: <FolderOpen size={16} className="text-primary-foreground" />,
      content: <ProjectsWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 240, y: 50 },
      defaultSize: { width: 700, height: 500 },
    },
    {
      id: 'education',
      title: 'Education & Certifications',
      icon: <GraduationCap size={16} className="text-primary-foreground" />,
      content: <EducationWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 100, y: 80 },
      defaultSize: { width: 600, height: 540 },
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: <Mail size={16} className="text-primary-foreground" />,
      content: <ContactWindow />,
      isOpen: false,
      zIndex: 1,
      defaultPosition: { x: 300, y: 100 },
      defaultSize: { width: 500, height: 460 },
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

  // Row 1: Main app icons
  const desktopIconsRow1 = [
    { id: 'about', icon: <User size={36} className="text-cyan-400" />, label: 'About Me' },
    { id: 'skills', icon: <Code size={36} className="text-emerald-400" />, label: 'Skills' },
    { id: 'experience', icon: <Briefcase size={36} className="text-amber-400" />, label: 'Experience' },
  ];

  // Row 2: More app icons + social links
  const desktopIconsRow2 = [
    { id: 'projects', icon: <FolderOpen size={36} className="text-orange-400" />, label: 'Projects' },
    { id: 'education', icon: <GraduationCap size={36} className="text-violet-400" />, label: 'Education' },
    { id: 'contact', icon: <Mail size={36} className="text-rose-400" />, label: 'Contact' },
  ];

  const socialLinks: SocialLink[] = [
    { 
      id: 'github', 
      icon: <Github size={36} className="text-slate-300" />, 
      label: 'GitHub',
      href: 'https://github.com/Talel-oueslati'
    },
    { 
      id: 'linkedin', 
      icon: <Linkedin size={36} className="text-sky-400" />, 
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/talel-oueslati-3a4b5425a/'
    },
    { 
      id: 'email', 
      icon: <Mail size={36} className="text-red-400" />, 
      label: 'Gmail',
      href: 'mailto:taleloueslati3@gmail.com'
    },
  ];

  const openWindowsList = windows.filter((w) => w.isOpen).map((w) => ({
    id: w.id,
    title: w.title,
    icon: w.icon,
  }));

  return (
    <div className="h-screen w-screen overflow-hidden desktop-background relative">
      {/* Profile Photo in Background */}
      <div className="profile-photo-container">
        <div className="profile-photo-wrapper">
          <img 
            src={talelPhoto} 
            alt="Talel Oueslati" 
            className="profile-bg-photo"
          />
        </div>
      </div>

      {/* Desktop Icons Grid - Top Left */}
      <div className="absolute top-6 left-6 z-10 flex gap-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          {desktopIconsRow1.map((icon) => (
            <DesktopIcon
              key={icon.id}
              icon={icon.icon}
              label={icon.label}
              onClick={() => openWindow(icon.id)}
            />
          ))}
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          {desktopIconsRow2.map((icon) => (
            <DesktopIcon
              key={icon.id}
              icon={icon.icon}
              label={icon.label}
              onClick={() => openWindow(icon.id)}
            />
          ))}
        </div>

        {/* Column 3 - Social Links */}
        <div className="flex flex-col gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="desktop-icon group"
            >
              <div className="desktop-icon-img flex items-center justify-center group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <span className="desktop-icon-text">{link.label}</span>
            </a>
          ))}
        </div>
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