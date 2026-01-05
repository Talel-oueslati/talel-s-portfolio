import React from 'react';
import { MapPin, Sparkles, Target, Lightbulb, Code2 } from 'lucide-react';
import talelPhoto from '@/assets/talel-photo.jpg';

const AboutWindow: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-44 h-44 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl">
              <img
                src={talelPhoto}
                alt="Talel Oueslati"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Sparkles size={14} className="text-primary-foreground" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="mb-4">
            <h1 className="text-2xl font-bold section-title mb-1">Talel Oueslati</h1>
            <h2 className="text-base text-muted-foreground font-medium flex items-center gap-2">
              <Code2 size={16} className="text-primary" />
              Full-Stack Developer
            </h2>
          </div>
          
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
              <MapPin size={14} className="text-accent" />
              <span className="text-sm text-foreground">Tunisia</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-primary">Available for work</span>
            </div>
          </div>
          
          <div className="glass-card p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-sm text-foreground">
              <Target size={16} className="text-primary" />
              About Me
            </h3>
            <ul className="space-y-2.5">
              {[
                { icon: <Code2 size={14} />, text: 'Full-stack web developer with strong foundation in modern technologies' },
                { icon: <Lightbulb size={14} />, text: 'Passionate about continuous learning and growth' },
                { icon: <Target size={14} />, text: 'Interested in impactful, real-world projects' },
                { icon: <Sparkles size={14} />, text: 'Background in Information Systems Development' },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 text-primary">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;