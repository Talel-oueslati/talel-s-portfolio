import React from 'react';
import { GraduationCap, Award, Languages, Trophy, Medal, Star } from 'lucide-react';

const EducationWindow: React.FC = () => {
  return (
    <div className="p-6">
      {/* Education */}
      <div className="mb-8">
        <h2 className="text-xl font-bold section-title mb-5 flex items-center gap-3">
          <GraduationCap size={24} className="text-primary" />
          Education
        </h2>
        <div className="glass-card p-5 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
          
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-bold text-foreground text-base">Bachelor's Degree in Information Systems Development</h3>
                <div className="award-badge">
                  <Trophy size={12} />
                  Degree
                </div>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                ISET Zaghouan
              </p>
              <span className="inline-block mt-2 text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                2020 – 2023
              </span>
            </div>
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center border border-primary/20">
              <GraduationCap size={28} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-xl font-bold section-title mb-5 flex items-center gap-3">
          <Award size={24} className="text-accent" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-card p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center border border-orange-500/20">
                <Medal size={24} className="text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">HTML5 & CSS</h3>
                <p className="text-xs text-muted-foreground">Certiport</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="award-badge text-[10px]">
                <Star size={10} />
                Certified
              </div>
            </div>
          </div>
          
          <div className="glass-card p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/20">
                <Medal size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Python</h3>
                <p className="text-xs text-muted-foreground">Certifrecord</p>
              </div>
            </div>
            <div className="mt-3">
              <div className="award-badge text-[10px]">
                <Star size={10} />
                Certified
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-xl font-bold section-title mb-5 flex items-center gap-3">
          <Languages size={24} className="text-violet-400" />
          Languages
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="glass-card p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-500" />
            <h3 className="font-semibold text-foreground mb-2">Arabic</h3>
            <div className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              C1
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-1.5">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-1.5 rounded-full" style={{ width: '90%' }} />
            </div>
          </div>
          
          <div className="glass-card p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
            <h3 className="font-semibold text-foreground mb-2">English</h3>
            <div className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              B2
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-1.5">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
          
          <div className="glass-card p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
            <h3 className="font-semibold text-foreground mb-2">French</h3>
            <div className="inline-flex items-center gap-1 bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
              B1
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-1.5">
              <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-1.5 rounded-full" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWindow;