import React, { useState } from 'react';
import { Play, X, ExternalLink, Code2, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

interface ProjectVideo {
  label: string;
  src: string;
}

interface Project {
  title: string;
  description: string;
  documentation: string;
  tech: string[];
  videos?: ProjectVideo[];
  color: string;
}

const ProjectsWindow: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [docProject, setDocProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Full-stack web app for JVM static analysis and real-time monitoring',
      description: 'JVM metadata extraction and real-time monitoring dashboards (CPU, memory, GC)',
      documentation: 'This full-stack application provides comprehensive JVM analysis capabilities including static metadata extraction and real-time performance monitoring. The system features interactive dashboards displaying CPU usage, memory allocation patterns, and garbage collection metrics. Built with Spring Boot for robust backend services, Oracle for reliable data persistence, and Thymeleaf for dynamic server-side rendering. The application enables developers to gain deep insights into JVM behavior and optimize application performance.',
      tech: ['Spring Boot', 'Oracle', 'Thymeleaf'],
      videos: [
        { label: 'real-time JVM monitoring', src: 'src/assets/jmv runing demo.mp4' },
        { label: 'Static Analysis', src: 'src/assets/demo application-static prj.mp4' }
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Mobile passport scanning With OCR integration Internship Project',
      description: 'Hybrid mobile application development for passport scanning & OCR integration',
      documentation: 'Developed during my internship, this hybrid mobile application leverages advanced OCR technology to scan and extract data from passports automatically. The solution streamlines identity verification processes by capturing passport images, processing them through OCR algorithms, and extracting key information such as name, nationality, and document numbers. Built using Ionic for cross-platform compatibility, Angular for the frontend, Spring Boot for backend services, and Oracle for secure data storage.',
      tech: ['Spring Boot', 'Ionic', 'Oracle', 'Angular'],
      videos: [{ label: 'Demo', src: 'src/assets/media1.mp4' }],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Automated Resume Screening System',
      description: 'CV analysis & candidate shortlisting application with intelligent parsing and scoring algorithms',
      documentation: 'An intelligent recruitment automation system that revolutionizes the hiring process through automated CV analysis and candidate shortlisting. The application parses uploaded resumes, extracts relevant skills and experience data, and applies scoring algorithms to rank candidates based on job requirements. Features include bulk resume processing, customizable scoring criteria, and an intuitive dashboard for HR professionals. Built with NestJS for scalable backend architecture, Angular for a responsive frontend, and TypeScript for type-safe development.',
      tech: ['NestJS', 'Angular', 'TypeScript'],
      videos: [
        { label: 'Full Demo', src: 'src/assets/Automated-Resume-Screening-Candidate-Shortlisting-Web-App demo.mp4' }
      ],
      color: 'from-primary to-accent',
    },
    {
      title: 'Hotel Reservation Management System',
      description: 'Complete hotel booking and management platform with real-time availability tracking',
      documentation: 'A comprehensive hotel management platform designed to streamline booking operations and enhance guest experiences. The system provides real-time room availability tracking, reservation management, and booking confirmations. Key features include dynamic pricing, room type management, guest profile handling, and detailed reporting. Developed using Spring Boot for enterprise-grade backend services, Thymeleaf for server-side rendered views, and Oracle database for reliable transaction management.',
      tech: ['Spring Boot', 'Thymeleaf', 'Oracle'],
      videos: [
        { label: 'Demo', src: '/assets/hotel-demo.mp4' }
      ],
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Movie Playlist & Recommendation App',
      description: 'Personal movie tracker with smart recommendations powered by TMDB API integration',
      documentation: 'A personalized movie tracking and recommendation application that helps users discover and organize their favorite films. Integrated with the TMDB API for comprehensive movie data, the app provides smart recommendations based on viewing history and preferences. Features include custom playlist creation, watchlist management, movie ratings, and detailed film information. Built with Ionic and React for a smooth cross-platform experience, with Firebase providing real-time data synchronization and user authentication.',
      tech: ['Ionic', 'React', 'Firebase', 'TMDB API'],
      videos: [
        { label: 'Demo', src: '/assets/movzie-app-demo.mp4' }
      ],
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'HR & Leave Management System',
      description: 'Employee management with authentication, notifications, and approval workflows',
      documentation: 'A complete human resources management solution designed to streamline employee administration and leave request workflows. The system features secure authentication, role-based access control, automated email notifications, and multi-level approval processes. Employees can submit leave requests, track their balances, and view approval status, while managers can review and approve requests through an intuitive interface. Built with NestJS for a modular backend architecture, Angular for a dynamic frontend, and PostgreSQL for robust data management.',
      tech: ['NestJS', 'Angular', 'PostgreSQL'],
      videos: [
        { label: 'Running Demo', src: 'src/assezts/jmv runing demo.mp4' }
      ],
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

            {/* Action Buttons */}
            <div className="mt-4 flex gap-2">
              {hasVideos(project) && (
                <button
                  onClick={() => openDemo(project)}
                  className="flex-1 py-2 px-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg text-xs font-medium text-foreground hover:from-primary/30 hover:to-accent/30 transition-all flex items-center justify-center gap-2 border border-primary/20"
                >
                  <Play size={12} className="text-primary" />
                  Demo {project.videos && project.videos.length > 1 && `(${project.videos.length})`}
                </button>
              )}
              <button
                onClick={() => setDocProject(project)}
                className="flex-1 py-2 px-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg text-xs font-medium text-foreground hover:from-blue-500/30 hover:to-cyan-500/30 transition-all flex items-center justify-center gap-2 border border-blue-500/20"
              >
                <FileText size={12} className="text-blue-400" />
                Documentation
              </button>
            </div>
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

      {/* Documentation Modal */}
      {docProject && (
        <div className="fixed inset-0 video-modal-overlay flex items-center justify-center z-50">
          <div className="gradient-border max-w-2xl w-full mx-4">
            <div className="bg-card rounded-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${docProject.color}`}>
                    <FileText size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{docProject.title}</h3>
                    <p className="text-xs text-muted-foreground">Project Documentation</p>
                  </div>
                </div>
                <button
                  onClick={() => setDocProject(null)}
                  className="p-2 hover:bg-destructive/20 rounded-lg transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {docProject.documentation}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <h4 className="text-xs font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {docProject.tech.map((t) => (
                      <span key={t} className="skill-badge">
                        {t}
                      </span>
                    ))}
                  </div>
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