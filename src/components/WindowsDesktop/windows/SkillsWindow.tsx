import React from 'react';
import { Palette, Server, Database, Cloud, FileCode, Cpu } from 'lucide-react';

const SkillsWindow: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Palette size={20} className="text-pink-400" />,
      color: 'from-pink-500 to-rose-500',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'Angular', 'Ionic'],
    },
    {
      title: 'Backend',
      icon: <Server size={20} className="text-emerald-400" />,
      color: 'from-emerald-500 to-teal-500',
      skills: ['Java', 'Spring Boot', 'NestJS', 'RESTful APIs'],
    },
    {
      title: 'Databases',
      icon: <Database size={20} className="text-amber-400" />,
      color: 'from-amber-500 to-orange-500',
      skills: ['MySQL', 'Oracle'],
    },
    {
      title: 'Cloud & Tools',
      icon: <Cloud size={20} className="text-sky-400" />,
      color: 'from-sky-500 to-blue-500',
      skills: ['AWS (Lambda, EC2, S3)', 'Git', 'GitHub'],
    },
    {
      title: 'Languages',
      icon: <FileCode size={20} className="text-violet-400" />,
      color: 'from-violet-500 to-purple-500',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Thymeleaf'],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold section-title mb-6 flex items-center gap-3">
        <Cpu size={24} className="text-primary" />
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="glass-card p-5 relative overflow-hidden"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />
            
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl flex items-center justify-center border border-white/10`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsWindow;