import React from 'react';

const SkillsWindow: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'React.js', 'Angular', 'Ionic'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'NestJS', 'RESTful APIs'],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'Oracle'],
    },
    {
      title: 'Cloud & Tools',
      icon: '☁️',
      skills: ['AWS (Lambda, EC2, S3)', 'Git', 'GitHub'],
    },
    {
      title: 'Languages',
      icon: '💻',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Thymeleaf'],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-primary mb-4">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-secondary/30 border border-border rounded-lg p-4"
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span>{category.icon}</span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/20 text-primary-foreground text-xs rounded-full border border-primary/30"
                >
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
