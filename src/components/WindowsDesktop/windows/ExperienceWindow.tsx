import React from 'react';
import { Building2, Calendar, CheckCircle2, Briefcase } from 'lucide-react';

const ExperienceWindow: React.FC = () => {
  const experiences = [
    {
      company: 'Mpsoft',
      role: 'Full-Stack Developer Intern',
      period: '07/2025 – 08/2025',
      description: 'Full-stack web app for JVM static analysis',
      color: 'from-primary to-accent',
      achievements: [
        'Built with Spring Boot, Thymeleaf, Oracle',
        'JVM metadata extraction',
        'Real-time monitoring dashboards (CPU, memory, GC)',
      ],
    },
    {
      company: 'ArabSoft',
      role: 'Mobile Developer Intern',
      period: '03/2023 – 05/2023',
      description: 'Hybrid mobile application development',
      color: 'from-violet-500 to-purple-500',
      achievements: [
        'Developed with Ionic + Angular',
        'Spring Boot backend integration',
        'Passport scanning & OCR integration',
      ],
    },
    {
      company: 'Arab Tunisia Bank',
      role: 'Web Developer Intern',
      period: '08/2022 – 09/2022',
      description: 'Server monitoring web application',
      color: 'from-amber-500 to-orange-500',
      achievements: [
        'Built with Angular, Spring Boot, MySQL',
        'CRUD operations implementation',
        'Performance dashboards',
      ],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold section-title mb-6 flex items-center gap-3">
        <Briefcase size={24} className="text-primary" />
        Work Experience
      </h2>
      
      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-card p-5 relative overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`} />
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${exp.color} bg-opacity-20 rounded-xl flex items-center justify-center border border-white/10 flex-shrink-0`}>
                  <Building2 size={22} className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs bg-secondary/80 text-foreground px-3 py-1.5 rounded-full font-medium">
                <Calendar size={12} className="text-primary" />
                {exp.period}
              </span>
            </div>
            
            <p className="text-sm text-foreground mb-4 pl-16">{exp.description}</p>
            
            <div className="pl-16 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWindow;