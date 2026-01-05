import React from 'react';
import { GraduationCap, Award, Languages } from 'lucide-react';

const EducationWindow: React.FC = () => {
  return (
    <div className="p-6">
      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <GraduationCap size={20} />
          Education
        </h2>
        <div className="bg-secondary/30 border border-border rounded-lg p-4">
          <h3 className="font-bold">Bachelor's Degree in Information Systems Development</h3>
          <p className="text-sm text-muted-foreground">ISET Zaghouan</p>
          <p className="text-xs text-accent">2020 – 2023</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Award size={20} />
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-secondary/30 border border-border rounded-lg p-4">
            <h3 className="font-semibold">HTML5 & CSS</h3>
            <p className="text-xs text-muted-foreground">Certiport</p>
          </div>
          <div className="bg-secondary/30 border border-border rounded-lg p-4">
            <h3 className="font-semibold">Python</h3>
            <p className="text-xs text-muted-foreground">Certifrecord</p>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
          <Languages size={20} />
          Languages
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-secondary/30 border border-border rounded-lg p-4 text-center">
            <h3 className="font-semibold">Arabic</h3>
            <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded">C1</span>
          </div>
          <div className="bg-secondary/30 border border-border rounded-lg p-4 text-center">
            <h3 className="font-semibold">English</h3>
            <span className="text-xs bg-primary/20 text-primary-foreground px-2 py-0.5 rounded">B2</span>
          </div>
          <div className="bg-secondary/30 border border-border rounded-lg p-4 text-center">
            <h3 className="font-semibold">French</h3>
            <span className="text-xs bg-primary/20 text-primary-foreground px-2 py-0.5 rounded">B1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWindow;
