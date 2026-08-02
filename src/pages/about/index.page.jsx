/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Zain Ghazanfar - About',
  description: 'Learn about my journey building AI-powered, full-stack applications, from healthcare platforms to intelligent marketplaces.',
  keywords: [
    'Zain Ghazanfar',
    'About Zain Ghazanfar',
    'About me',
    'Senior Full Stack AI Engineer Journey',
    'Full Stack AI Engineer',
    'AI Engineering Expertise',
    'Healthcare Platforms',
    'Cloud Solutions Expertise',
    'Developer Profile',
    'Quality Software Solutions',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
