/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Projects from '@src/pages/components/projects/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Zain Ghazanfar - Senior Full Stack AI Engineer',
  description: 'Senior Full Stack AI Engineer building AI-powered production systems — full-stack platforms, intelligent automation, and healthcare data solutions on Azure.',
  keywords: [
    'Zain Ghazanfar',
    'Senior Full Stack AI Engineer',
    'Cloud Developer',
    'Portfolio',
    'AI Engineering',
    'LLM Integration',
    'Python Developer',
    'FastAPI',
    'Node.js Developer',
    'React Developer',
    'Azure',
    'Healthcare Data',
    'REST API Development',
    'Docker',
    'Kafka',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'React',
    'PostgreSQL',
    'MongoDB',
  ],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Projects />
    </>
  );
}

export default Page;
