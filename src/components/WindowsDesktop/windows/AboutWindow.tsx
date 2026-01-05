import React from 'react';
import talelPhoto from '@/assets/talel-photo.jpg';

const AboutWindow: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-primary/30 shadow-lg">
            <img
              src={talelPhoto}
              alt="Talel Oueslati"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-primary mb-2">Talel Oueslati</h1>
          <h2 className="text-lg text-muted-foreground mb-4">Full-Stack Developer</h2>
          
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <span className="text-accent">📍</span>
              <span>Tunisia</span>
            </p>
            
            <div className="border-t border-border pt-3">
              <h3 className="font-semibold mb-2">About Me</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack web developer with strong foundation in modern technologies</li>
                <li>• Passionate about continuous learning and growth</li>
                <li>• Interested in impactful, real-world projects</li>
                <li>• Background in Information Systems Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
