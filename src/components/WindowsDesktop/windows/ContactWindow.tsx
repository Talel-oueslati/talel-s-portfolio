import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

const ContactWindow: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={22} className="text-red-400" />,
      label: 'Email',
      value: 'taleloueslati3@gmail.com',
      href: 'mailto:taleloueslati3@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <Phone size={22} className="text-emerald-400" />,
      label: 'Phone',
      value: '+216 58 517 113',
      href: 'tel:+21658517113',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Github size={22} className="text-foreground" />,
      label: 'GitHub',
      value: 'Talel-oueslati',
      href: 'https://github.com/Talel-oueslati',
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: <Linkedin size={22} className="text-blue-400" />,
      label: 'LinkedIn',
      value: 'Talel Oueslati',
      href: 'https://www.linkedin.com/in/talel-oueslati-3a4b5425a/',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <MapPin size={22} className="text-violet-400" />,
      label: 'Location',
      value: 'Tunisia',
      href: null,
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold section-title mb-6 flex items-center gap-3">
        <MessageCircle size={24} className="text-primary" />
        Contact Information
      </h2>
      
      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="glass-card relative overflow-hidden group"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${contact.color}`} />
            
            {contact.href ? (
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 text-foreground hover:text-primary transition-colors"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} bg-opacity-20 rounded-xl flex items-center justify-center border border-white/10`}>
                  {contact.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">{contact.label}</p>
                  <p className="font-medium text-sm truncate">{contact.value}</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ) : (
              <div className="flex items-center gap-4 p-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} bg-opacity-20 rounded-xl flex items-center justify-center border border-white/10`}>
                  {contact.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">{contact.label}</p>
                  <p className="font-medium text-foreground text-sm">{contact.value}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactWindow;