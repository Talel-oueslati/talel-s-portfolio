import React from 'react';

const ExperienceWindow: React.FC = () => {
  const experiences = [
    {
      company: 'Mpsoft',
      role: 'Full-Stack Developer Intern',
      period: '07/2025 – 08/2025',
      description: 'Full-stack web app for JVM static analysis',
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
      achievements: [
        'Built with Angular, Spring Boot, MySQL',
        'CRUD operations implementation',
        'Performance dashboards',
      ],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-primary mb-4">Work Experience</h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-secondary/30 border border-border rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-primary">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
              </div>
              <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
            <p className="text-sm mb-2">{exp.description}</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>• {achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWindow;
