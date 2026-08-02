/* eslint-disable react/jsx-key */
const containt = [
  {
    smallTitle: 'Software',
    bigTitle: 'Software Engineering',
    desc: [
      <div className="p-l"> With a focus on innovation and efficiency, I build robust solutions that meet your</div>,
      <div className="p-l"> business objectives. From backend to AI integration, I leverage cutting-edge </div>,
      <div className="p-l">technologies to deliver scalable and sustainable software.</div>,
    ],
    descMobile: [
      <div className="p-l">With a focus on innovation and efficiency, I build robust solutions that</div>,
      <div className="p-l">meet your business objectives. From backend to AI integration, I </div>,
      <div className="p-l">leverage cutting-edge technologies to deliver scalable and sustainable</div>,
      <div className="p-l">software.</div>,
    ],
    options: [
      { title: 'Backend Development', desc: 'Build robust backend systems and REST APIs using Python (FastAPI) and Node.js (Express)' },
      { title: 'Full Stack Development', desc: 'Deliver end-to-end applications with Next.js, React, and scalable backend services' },
      { title: 'Marketplace Platforms', desc: 'Develop multi-role marketplace systems with authentication and real-time interactions' },
      { title: 'Database Architecture', desc: 'Design and optimize schemas across PostgreSQL, MySQL, and MongoDB' },
      { title: 'Third-Party Integrations', desc: 'Integrate payment, communication, and EHR systems through resilient API design' },
      { title: 'Microservices Architecture', desc: 'Implement event-driven microservices using Kafka for asynchronous processing' },
      { title: 'API Design & Integration', desc: 'Build and integrate REST and FHIR APIs for reliable system interoperability' },
      { title: 'Cloud Deployment', desc: 'Containerize and deploy applications with Docker on Azure and OpenStack infrastructure' },
      { title: 'QA & Testing', desc: 'Secure the quality and reliability of your software through comprehensive testing and QA' },
    ],
  },
  {
    smallTitle: 'AI',
    bigTitle: 'AI Engineering',
    desc: [
      <div className="p-l">I integrate AI and LLM capabilities directly into production applications —</div>,
      <div className="p-l">from automated validation to intelligent document and audio processing.</div>,
      <div className="p-l">I build the AI layer that makes your product smarter.</div>,
    ],
    descMobile: [
      <div className="p-l">I integrate AI and LLM capabilities directly into production</div>,
      <div className="p-l">applications — from automated validation to intelligent document</div>,
      <div className="p-l">and audio processing. I build the AI layer that makes your</div>,
      <div className="p-l">product smarter.</div>,
    ],
    options: [
      { title: 'LLM Integration', desc: 'Integrate large language models like LLaMA into production applications for automated reasoning' },
      { title: 'AI-Based Validation & Trust Scoring', desc: 'Build trust scoring and validation systems that improve quality and reduce manual review' },
      { title: 'Audio Transcription', desc: 'Convert unstructured audio into structured, searchable text using Whisper' },
      { title: 'OCR & Document Intelligence', desc: 'Extract structured information from unstructured documents using Azure OCR and AI-based APIs' },
      { title: 'Automated Documentation', desc: 'Generate structured summaries and notes automatically from unstructured clinical and business content' },
      { title: 'Secure AI Workflows', desc: 'Implement RBAC, audit logging, and traceability for AI-powered systems handling sensitive data' },
    ],
  },
  {
    smallTitle: 'Cloud',
    bigTitle: 'Cloud & DevOps',
    desc: [
      <div className="p-l">I deploy and monitor production systems on cloud infrastructure, automating the</div>,
      <div className="p-l">path from code to release. From CI/CD pipelines to observability, I make sure your</div>,
      <div className="p-l">systems stay reliable, secure, and easy to maintain.</div>,
    ],
    descMobile: [
      <div className="p-l">I deploy and monitor production systems on cloud infrastructure,</div>,
      <div className="p-l">automating the path from code to release. From CI/CD pipelines to</div>,
      <div className="p-l">observability, I make sure your systems stay reliable, secure, and</div>,
      <div className="p-l">easy to maintain.</div>,
    ],
    options: [
      { title: 'CI/CD Pipelines', desc: 'Automate testing, deployment, and updates with GitHub Actions and GitLab CI' },
      { title: 'Containerization', desc: 'Containerize applications with Docker for consistent, portable deployments' },
      { title: 'Cloud Infrastructure', desc: 'Provision and manage virtual machines on Azure and OpenStack-based infrastructure' },
      { title: 'Monitoring & Alerting', desc: 'Deploy Prometheus and Grafana for high observability of infrastructure and pipelines' },
      { title: 'Authentication & Security', desc: 'Implement JWT/OAuth authentication and role-based access control' },
      { title: 'Compliance-Aligned Handling', desc: 'Apply secure data handling practices aligned with healthcare and privacy requirements' },
    ],
  },
];

export default containt;
