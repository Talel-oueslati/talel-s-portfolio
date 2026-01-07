import React, { useState } from 'react';
import { Play, X, ExternalLink, Code2, ChevronLeft, ChevronRight } from 'lucide-react';

// Import videos from assets
import jvmRunningDemo from '@/assets/jmv runing demo.mp4';
import staticProjectDemo from '@/assets/demo application-static prj.mp4';
import resumeScreeningDemo from '@/assets/Automated-Resume-Screening-Candidate-Shortlisting-Web-App demo.mp4';
import media1 from '@/assets/media1.mp4';
import media2 from '@/assets/media2.mp4';

interface ProjectVideo {
  label: string;
  src: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  videos?: ProjectVideo[];
  color: string;
}

const ProjectsWindow: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'Mobile Developer Internship App',
      description: 'Hybrid mobile application development with passport scanning & OCR integration',
      tech: ['Spring Boot', 'Ionic', 'Oracle', 'Angular'],
      videos: [
        { label: 'Demo', src: media1 }
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Automated Resume Screening System',
      description: 'CV analysis & candidate shortlisting application with intelligent parsing and scoring algorithms',
      tech: ['NestJS', 'Angular', 'TypeScript'],
      videos: [
        { label: 'Full Demo', src: resumeScreeningDemo }
      ],
      color: 'from-primary to-accent',
    },
    {
      title: 'Hotel Reservation Management System',
      description: 'Complete hotel booking and management platform with real-time availability tracking',
      tech: ['Spring Boot', 'Thymeleaf', 'Oracle'],
      videos: [
        { label: 'Demo', src: media2 }
      ],
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Movie Playlist & Recommendation App',
      description: 'Personal movie tracker with smart recommendations powered by TMDB API integration',
      tech: ['Ionic', 'React', 'Firebase', 'TMDB API'],
      videos: [],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Full-stack web app for JVM static analysis',
      description: 'JVM metadata extraction and real-time monitoring dashboards (CPU, memory, GC)',
      tech: ['Spring Boot', 'Oracle', 'Thymeleaf'],
      videos: [
        { label: 'Running Demo', src: jvmRunningDemo },
        { label: 'Static Analysis', src: staticProjectDemo }
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'HR & Leave Management System',
      description: 'Employee management with authentication, notifications, and approval workflows',
      tech: ['NestJS', 'Angular', 'PostgreSQL'],
      videos: [],
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const openDemo = (project: Project) => {
    setActiveProject(project);
    setCurrentVideoIndex(0);
  };

  const closeModal = () => {
    setActiveProject(null);
    setCurrentVideoIndex(0);
  };

  const nextVideo = () => {
    if (activeProject?.videos && currentVideoIndex < activeProject.videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    }
  };

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
    }
  };

  const hasVideos = (project: Project) => project.videos && project.videos.length > 0;

  return (
    <div className="p-6 relative">
      <h2 className="text-xl font-bold section-title mb-6 flex items-center gap-3">
        <Code2 size={24} className="text-primary" />
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card p-5 group relative overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`} />
            
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-foreground text-sm leading-tight pr-2">
                {project.title}
              </h3>
              {hasVideos(project) && (
                <button 
                  onClick={() => openDemo(project)}
                  className="flex-shrink-0 p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-all group-hover:scale-110"
                >
                  <Play size={14} className="text-primary" fill="currentColor" />
                </button>
              )}
            </div>
            
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="skill-badge text-[10px]">
                  {t}
                </span>
              ))}
            </div>

            {/* Demo Button */}
            {hasVideos(project) && (
              <button
                onClick={() => openDemo(project)}
                className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg text-xs font-medium text-foreground hover:from-primary/30 hover:to-accent/30 transition-all flex items-center justify-center gap-2 border border-primary/20"
              >
                <Play size={12} className="text-primary" />
                Watch Demo {project.videos && project.videos.length > 1 && `(${project.videos.length} videos)`}
                <ExternalLink size={12} className="text-muted-foreground" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeProject && hasVideos(activeProject) && (
        <div className="fixed inset-0 video-modal-overlay flex items-center justify-center z-50">
          <div className="gradient-border max-w-4xl w-full mx-4">
            <div className="bg-card rounded-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-border">
                <div>
                  <h3 className="font-semibold text-foreground">{activeProject.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {activeProject.videos && activeProject.videos.length > 1 
                      ? `${activeProject.videos[currentVideoIndex].label} (${currentVideoIndex + 1}/${activeProject.videos.length})`
                      : 'Project Demo'
                    }
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-destructive/20 rounded-lg transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
              
              {/* Video Player */}
              <div className="relative bg-background">
                <video 
                  key={activeProject.videos![currentVideoIndex].src}
                  className="w-full aspect-video"
                  controls
                  autoPlay
                >
                  <source src={activeProject.videos![currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Navigation Arrows for Multiple Videos */}
                {activeProject.videos && activeProject.videos.length > 1 && (
                  <>
                    <button
                      onClick={prevVideo}
                      disabled={currentVideoIndex === 0}
                      className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border transition-all ${
                        currentVideoIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/20'
                      }`}
                    >
                      <ChevronLeft size={24} className="text-foreground" />
                    </button>
                    <button
                      onClick={nextVideo}
                      disabled={currentVideoIndex === activeProject.videos.length - 1}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border transition-all ${
                        currentVideoIndex === activeProject.videos.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary/20'
                      }`}
                    >
                      <ChevronRight size={24} className="text-foreground" />
                    </button>
                  </>
                )}
              </div>

              {/* Video Thumbnails/Tabs for Multiple Videos */}
              {activeProject.videos && activeProject.videos.length > 1 && (
                <div className="p-4 border-t border-border flex gap-2 overflow-x-auto">
                  {activeProject.videos.map((video, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentVideoIndex(idx)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                        idx === currentVideoIndex
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {video.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="p-4 border-t border-border">
                <div className="flex flex-wrap justify-center gap-2">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="skill-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsWindow;
