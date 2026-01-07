import React, { useState } from 'react';
import { Play, X, ExternalLink, Code2 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  videoUrl?: string;
  color: string;
}

const ProjectsWindow: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
     {
      title: 'Mobile Developer Internship App',
      description: 'Hybrid mobile application development with passport scanning & OCR integration',
      tech: ['Spring Boot', 'Ionic', 'Oracle', ' Angular'],
      videoUrl: 'demo',
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Automated Resume Screening System',
      description: 'CV analysis & candidate shortlisting application with intelligent parsing and scoring algorithms',
      tech: ['NestJS', 'Angular', 'TypeScript'],
      videoUrl: 'demo',
      color: 'from-primary to-accent',
    },
    {
      title: 'Hotel Reservation Management System',
      description: 'Complete hotel booking and management platform with real-time availability tracking',
      tech: ['Spring Boot', 'Thymeleaf', 'Oracle'],
      videoUrl: 'demo',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Movie Playlist & Recommendation App',
      description: 'Personal movie tracker with smart recommendations powered by TMDB API integration',
      tech: ['Ionic', 'React', 'Firebase', 'TMDB API'],
      videoUrl: 'demo',
      color: 'from-violet-500 to-purple-500',
    },
        {
      title: 'Full-stack web app for JVM static analysis',
      description: 'JVM metadata extraction and real-time monitoring dashboards (CPU, memory, GC)',
      tech: ['Spring Boot', 'Oracle', 'Thymeleaf'],
      videoUrl: 'demo',
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'HR & Leave Management System',
      description: 'Employee management with authentication, notifications, and approval workflows',
      tech: ['NestJS', 'Angular', 'PostgreSQL'],
      videoUrl: 'demo',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const openDemo = (project: Project) => {
    setActiveProject(project);
    setActiveVideo(project.videoUrl || null);
  };

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
              {project.videoUrl && (
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
            {project.videoUrl && (
              <button
                onClick={() => openDemo(project)}
                className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg text-xs font-medium text-foreground hover:from-primary/30 hover:to-accent/30 transition-all flex items-center justify-center gap-2 border border-primary/20"
              >
                <Play size={12} className="text-primary" />
                Watch Demo
                <ExternalLink size={12} className="text-muted-foreground" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && activeProject && (
        <div className="fixed inset-0 video-modal-overlay flex items-center justify-center z-50">
          <div className="gradient-border max-w-4xl w-full mx-4">
            <div className="bg-card rounded-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-border">
                <div>
                  <h3 className="font-semibold text-foreground">{activeProject.title}</h3>
                  <p className="text-xs text-muted-foreground">Project Demo</p>
                </div>
                <button
                  onClick={() => {
                    setActiveVideo(null);
                    setActiveProject(null);
                  }}
                  className="p-2 hover:bg-destructive/20 rounded-lg transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
              <div className="aspect-video bg-background flex flex-col items-center justify-center gap-4 p-8">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${activeProject.color} flex items-center justify-center`}>
                  <Play size={32} className="text-primary-foreground" fill="currentColor" />
                </div>
                <p className="text-muted-foreground text-center">
                  Demo video coming soon...
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
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