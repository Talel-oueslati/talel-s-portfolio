import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  videoUrl?: string;
}

const ProjectsWindow: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'Automated Resume Screening System',
      description: 'CV analysis & candidate shortlisting application',
      tech: ['NestJS', 'Angular'],
      videoUrl: '',
    },
    {
      title: 'Hotel Reservation Management System',
      description: 'Complete hotel booking and management platform',
      tech: ['Spring Boot', 'Thymeleaf'],
      videoUrl: '',
    },
    {
      title: 'Movie Playlist & Recommendation App',
      description: 'Personal movie tracker with smart recommendations',
      tech: ['Ionic', 'React', 'Firebase', 'TMDB API'],
      videoUrl: '',
    },
    {
      title: 'HR & Leave Management System',
      description: 'Employee management with authentication & notifications',
      tech: ['NestJS', 'Angular'],
      videoUrl: '',
    },
  ];

  return (
    <div className="p-6 relative">
      <h2 className="text-xl font-bold text-primary mb-4">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-secondary/30 border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors cursor-pointer group"
            onClick={() => project.videoUrl && setActiveVideo(project.videoUrl)}
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-primary text-sm">{project.title}</h3>
              {project.videoUrl && (
                <button className="p-1 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={12} className="text-accent" />
                </button>
              )}
            </div>
            <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-primary/10 text-xs rounded border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="font-semibold">Project Demo</h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 hover:bg-destructive/20 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Demo video coming soon...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsWindow;
