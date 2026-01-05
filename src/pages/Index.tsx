import { Helmet } from 'react-helmet-async';
import Desktop from '@/components/WindowsDesktop/Desktop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Talel Oueslati | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Talel Oueslati - Full-Stack Developer from Tunisia. Expert in React, Angular, Spring Boot, NestJS. View my projects and experience." />
        <meta name="keywords" content="Talel Oueslati, Full-Stack Developer, React, Angular, Spring Boot, NestJS, Tunisia" />
        <link rel="canonical" href="https://talel-oueslati.dev" />
      </Helmet>
      <Desktop />
    </>
  );
};

export default Index;
