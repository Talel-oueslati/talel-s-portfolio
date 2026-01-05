import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const ContactWindow: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'taleloueslati3@gmail.com',
      href: 'mailto:taleloueslati3@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+216 58 517 113',
      href: 'tel:+21658517113',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'Talel-oueslati',
      href: 'https://github.com/Talel-oueslati',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Talel Oueslati',
      href: 'https://www.linkedin.com/in/talel-oueslati-3a4b5425a/',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Tunisia',
      href: null,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-primary mb-6">Contact Information</h2>
      
      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            className="bg-secondary/30 border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors"
          >
            {contact.href ? (
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 text-primary hover:text-primary/80"
              >
                <div className="p-3 bg-primary/20 rounded-full">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{contact.label}</p>
                  <p className="font-semibold">{contact.value}</p>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-full text-primary">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{contact.label}</p>
                  <p className="font-semibold">{contact.value}</p>
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
