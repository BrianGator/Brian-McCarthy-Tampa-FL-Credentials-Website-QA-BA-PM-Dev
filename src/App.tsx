import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useParams
} from 'react-router-dom';
import { 
  Linkedin, 
  ExternalLink, 
  Github, 
  Mail, 
  Award, 
  Briefcase, 
  Code2, 
  LineChart, 
  ShieldCheck, 
  Settings,
  RefreshCw,
  ChevronRight,
  Target,
  FlaskConical,
  Wrench,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  verifyUrl: string;
}

interface GithubRepo {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

interface PortfolioData {
  bio: string;
  accredible: Credential[];
  credly: Credential[];
  githubRepos: GithubRepo[];
}

// --- Mock Data (Initial State) ---
const INITIAL_DATA: PortfolioData = {
  bio: "CSTP-A - Certified Software Test Professional - Associate Level from The International Institute for Software Testing (IIST) With over 13 years of experience in Software Quality Assurance. I am committed to delivering high-quality software solutions while collaborating in Agile environments. My dedication to ensuring robust and reliable software is supported by my CSTP-A certification and a focus on data-driven decision-making. I also have experience in Product Management, Project Management, Selenium, Playwright, Service Now, Azure Dev Ops, AWS, Java, JavaScript, AI.",
  accredible: [
    {
      id: 'ibm-ai-pm-accredible',
      title: 'IBM AI Product Manager',
      issuer: 'IBM',
      date: 'May 7, 2026',
      image: 'https://images.credential.net/size/400x400/badge/115a2153-d456-4e99-8cc1-3ebad2c68620_logo.png',
      description: 'Advanced certification in AI product management from IBM.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'asp-net-mvc',
      title: 'Advanced ASP.NET Core MVC, Deployment & User Management',
      issuer: 'Packt',
      date: 'May 6, 2026',
      image: 'https://images.credential.net/size/400x400/badge/115a2153-d456-4e99-8cc1-3ebad2c68620_logo.png',
      description: 'Expertise in building scalable ASP.NET Core MVC applications, implementing robust deployment strategies, and managing complex user authentication systems.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'js-react-node',
      title: 'JavaScript Programming with React, Node & MongoDB',
      issuer: 'IBM',
      date: 'May 5, 2026',
      image: 'https://images.credential.net/size/400x400/badge/277c2f82-a0e2-4d7a-8f6a-4d7a8f6a4d7a_logo.png',
      description: 'Full-stack development certification focusing on modern JavaScript technologies.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'csharp-oop',
      title: 'Advanced C# Object-Oriented Programming',
      issuer: 'Microsoft',
      date: 'May 5, 2026',
      image: 'https://images.credential.net/size/400x400/badge/6cc0d297-c7ba-4b2e-a57c-f13197607777_logo.png',
      description: 'Mastery of object-oriented programming principles using the C# language.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'ibm-scrum',
      title: 'IBM IT Scrum Master',
      issuer: 'IBM',
      date: 'May 4, 2026',
      image: 'https://images.credential.net/size/400x400/badge/7dd1a2b3-c123-4d5e-6f7g-8h9i0j1k2l3m_logo.png',
      description: 'Certified expertise in leading agile teams and managing scrum ceremonies.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'ms-pm-pro',
      title: 'Microsoft Project Management Professional',
      issuer: 'Microsoft',
      date: 'May 1, 2026',
      image: 'https://images.credential.net/size/400x400/badge/8ee1b3c4-d234-5e6f-7g8h-9i0j1k2l3m4n_logo.png',
      description: 'Professional certification for project management in the Microsoft ecosystem.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'ms-ai-pm',
      title: 'Microsoft AI Product Manager Professional',
      issuer: 'Microsoft',
      date: 'Apr 29, 2026',
      image: 'https://images.credential.net/size/400x400/badge/9ff1c4d5-e345-6f7g-8h9i-0j1k2l3m4n5o_logo.png',
      description: 'Bridge building between AI technology and business product strategy.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'db-platform-admin',
      title: 'Academy Accreditation - Platform Administrator',
      issuer: 'Databricks Academy',
      date: 'Apr 25, 2026',
      image: 'https://images.credential.net/size/400x400/badge/a0b1c2d3-e4f5-6g7h-8i9j-0k1l2m3n4o5p_logo.png',
      description: 'Expertise in managing and administrating the Databricks platform.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'cucumber-bdd',
      title: 'Cucumber Automation Framework Design & Behavior Driven Development',
      issuer: 'Packt',
      date: 'Apr 25, 2026',
      image: 'https://images.credential.net/size/400x400/badge/b1c2d3e4-f5g6-7h8i-9j0k-1l2m3n4o5p6q_logo.png',
      description: 'Designing BDD frameworks using Cucumber for enterprise automation.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'sn-sys-admin',
      title: 'ServiceNow System Administrator Professional',
      issuer: 'Packt',
      date: 'Apr 24, 2026',
      image: 'https://images.credential.net/size/400x400/badge/c2d3e4f5-g6h7-8i9j-0k1l-2m3n4o5p6q7r_logo.png',
      description: 'Professional level cloud platform administration for ServiceNow instances.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'google-agile',
      title: 'Google Agile Project Management Certification',
      issuer: 'Google',
      date: 'Apr 24, 2026',
      image: 'https://images.credential.net/size/400x400/badge/d3e4f5g6-h7i8-9j0k-1l2m-3n4o5p6q7r8s_logo.png',
      description: 'Comprehensive agile project management principles backed by Google.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'isc2-cc',
      title: 'Certified in CyberSecurity (CC)',
      issuer: 'ISC2',
      date: 'Apr 13, 2026',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_0_logo.png',
      description: 'Foundational cybersecurity principles and best practices certification.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'aws-cloud-prac',
      title: 'AWS Cloud Practitioner',
      issuer: 'AWS & SimpliLearn',
      date: 'Jan 9, 2026',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_1_logo.png',
      description: 'Cloud concepts, security, technology, and billing for the AWS platform.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'db-gen-ai-fun',
      title: 'Academy Accreditation - Generative AI Fundamentals',
      issuer: 'Databricks Academy',
      date: 'Dec 17, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_2_logo.png',
      description: 'Understanding the core mechanisms and business value of generative AI.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'ceh-linked-in',
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'LinkedIn',
      date: 'Dec 16, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_3_logo.png',
      description: 'Penetration testing and ethical hacking methodologies.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'agile-scrum-simpli',
      title: 'Agile Scrum Master',
      issuer: 'SimpliLearn',
      date: 'Dec 15, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_4_logo.png',
      description: 'Advanced agile teamwork and project delivery framework.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'ms-soft-dev',
      title: 'Microsoft Software Development Professional',
      issuer: 'Microsoft',
      date: 'Dec 15, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_5_logo.png',
      description: 'Core software engineering skills within the Microsoft ecosystem.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'pen-pro',
      title: 'Penetration Testing Professional',
      issuer: 'Cybrary',
      date: 'Dec 13, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_6_logo.png',
      description: 'Advanced security validation and penetration testing expertise.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'js-foundations',
      title: 'Javascript Foundations Professional',
      issuer: 'Mozilla',
      date: 'Dec 12, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_7_logo.png',
      description: 'Proficiency in core JavaScript and modern ECMAScript standards.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'java-foundations',
      title: 'Java Foundations Professional',
      issuer: 'JetBeans',
      date: 'Dec 11, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_8_logo.png',
      description: 'Excellence in Java development and object-oriented fundamentals.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'cypress-e2e',
      title: 'Cypress.io End-to-End JavaScript Testing',
      issuer: 'LinkedIn',
      date: 'Dec 11, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_9_logo.png',
      description: 'Automated E2E testing using the Cypress framework.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'python-pro',
      title: 'Python Programming Professional',
      issuer: 'Python Institute',
      date: 'Dec 11, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_10_logo.png',
      description: 'Advanced Python scripts and application development.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'playwright-master',
      title: 'Playwright Test Automation Master',
      issuer: 'LinkedIn',
      date: 'Dec 11, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_11_logo.png',
      description: 'Mastery of modern web automation with Playwright.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'agile-pm-atlassian',
      title: 'Agile Project Management Professional',
      issuer: 'Atlassian',
      date: 'Dec 10, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_12_logo.png',
      description: 'Managing agile workflows using JIRA and Confluence ecosystems.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'ms-gen-ai',
      title: 'Microsoft Generative AI Essentials',
      issuer: 'Microsoft',
      date: 'Dec 8, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_13_logo.png',
      description: 'Core concepts of generative AI within the Microsoft Azure ecosystem.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'ms-pm-essentials',
      title: 'Microsoft Project Management Essentials',
      issuer: 'Microsoft',
      date: 'Dec 4, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_14_logo.png',
      description: 'Fundamental project planning and execution skills.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'test-auto-pro-lt',
      title: 'Test Automation Professional',
      issuer: 'LambdaTest',
      date: 'Dec 4, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_15_logo.png',
      description: 'Cloud-based cross-browser and mobile automation testing.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'aha-product-pro',
      title: 'Product Managment Professional',
      issuer: 'Aha!',
      date: 'Dec 3, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_16_logo.png',
      description: 'Strategy-led product development and roadmap management.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'rest-assured-java',
      title: 'REST Assured API Testing with Java',
      issuer: 'LinkedIn',
      date: 'Dec 2, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_17_logo.png',
      description: 'Comprehensive API validation and testing with Java.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'adv-sel-frameworks',
      title: 'Advance Selenium Automation Frameworks',
      issuer: 'LinkedIn',
      date: 'Dec 1, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_18_logo.png',
      description: 'Building custom frameworks for enterprise Selenium automation.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'soft-test-pro-lt',
      title: 'Software Testing Professional',
      issuer: 'LambdaTest',
      date: 'Dec 1, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_19_logo.png',
      description: 'General software quality assurance and testing methodology.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'sel-java-linkedin',
      title: 'Selenium Test Automation with Java',
      issuer: 'LinkedIn',
      date: 'Nov 26, 2025',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_20_logo.png',
      description: 'Automating browser actions using Selenium and Java.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'master-mis',
      title: 'Master of Science in Management Information Systems',
      issuer: 'University of South Florida',
      date: 'Dec 12, 2008',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_21_logo.png',
      description: 'Graduate degree focusing on the intersection of business and technology.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    },
    {
      id: 'bachelor-cis',
      title: 'Bachelor of Science in Computer & Information Sciences',
      issuer: 'University of Florida',
      date: 'Dec 10, 2004',
      image: 'https://images.credential.net/size/400x400/badge/placeholder_22_logo.png',
      description: 'Undergraduate degree providing a strong foundation in computer science and software engineering.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet'
    }
  ],
  credly: [
    {
      id: 'ibm-ai-pm-pro',
      title: 'IBM AI Product Manager Professional Certificate',
      issuer: 'Coursera',
      date: 'May 7, 2026',
      image: 'https://images.credly.com/images/bc72d4a9-dacb-4a15-8890-5be1786caac1/IBM_AI_Product_Manager.png',
      description: 'Comprehensive AI product lifecycle management and strategy.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'ms-pm-pro-cert',
      title: 'Microsoft Project Management Professional Certificate',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/b2c3d4e5-f6a7-4b5c-8d9e-1f2a3b4c5d6e/PM_Foundations.png',
      description: 'Advanced project management professional certification from Microsoft.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'ibm-scrum-pro',
      title: 'IBM IT Scrum Master Professional Certificate',
      issuer: 'Coursera',
      date: 'May 4, 2026',
      image: 'https://images.credly.com/images/6df10e8e-6d4f-4d43-85f8-48dc73685f75/CSM_-_Full_Badge.png',
      description: 'Professional scrum master certification for IT environments.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pmi-agile-fun',
      title: 'Fundamentals of Agile Project Management',
      issuer: 'Project Management Institute',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/1e3b6a9e-0b1a-4f5a-8b1a-4f5a8b1a4f5a/CSTP-A.png',
      description: 'Core agile principles and methodology from PMI.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'java-fun-spec',
      title: 'Java Programming Fundamentals Specialization',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_0/badge.png',
      description: 'Deep dive into Java programming fundamentals.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'js-mern-spec',
      title: 'JavaScript Programming with React, Node & MongoDB Specialization',
      issuer: 'Coursera',
      date: 'May 5, 2026',
      image: 'https://images.credly.com/images/placeholder_1/badge.png',
      description: 'Full-stack MERN development specialization.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-pm-spec',
      title: 'Generative AI for Product Managers Specialization',
      issuer: 'Coursera',
      date: 'May 7, 2026',
      image: 'https://images.credly.com/images/placeholder_2/badge.png',
      description: 'Applying generative AI to the product management lifecycle.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-dev-spec',
      title: 'Generative AI for Software Developers Specialization',
      issuer: 'Coursera',
      date: 'May 7, 2026',
      image: 'https://images.credly.com/images/placeholder_3/badge.png',
      description: 'Accelerating software development with generative AI.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sw-test-maint',
      title: 'Software Testing, Deployment, and Maintenance Strategies',
      issuer: 'Coursera',
      date: 'Apr 30, 2026',
      image: 'https://images.credly.com/images/placeholder_4/badge.png',
      description: 'Advanced software quality and lifecycle strategies.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-agile-test',
      title: 'Micro-Certification - Agile and Test Management',
      issuer: 'ServiceNow',
      date: 'Apr 2, 2026',
      image: 'https://images.credly.com/images/placeholder_5/badge.png',
      description: 'Integrated agile and testing workflows on ServiceNow.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-atf',
      title: 'Micro-Certification - Automated Test Framework',
      issuer: 'ServiceNow',
      date: 'Mar 19, 2026',
      image: 'https://images.credly.com/images/placeholder_6/badge.png',
      description: 'Automating tests within the ServiceNow platform.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pen-test-crypto',
      title: 'Penetration Testing, Threat Hunting, and Cryptography',
      issuer: 'Coursera',
      date: 'May 4, 2026',
      image: 'https://images.credly.com/images/placeholder_7/badge.png',
      description: 'Advanced cybersecurity and threat mitigation skills.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'ibm-z-devops',
      title: 'IBM Z DevOps Testing Fundamentals',
      issuer: 'IBM',
      date: 'Apr 22, 2026',
      image: 'https://images.credly.com/images/placeholder_8/badge.png',
      description: 'DevOps testing principles for enterprise IBM Z systems.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'intro-tdd',
      title: 'Introduction to Test Driven Development',
      issuer: 'Coursera',
      date: 'May 4, 2026',
      image: 'https://images.credly.com/images/placeholder_9/badge.png',
      description: 'Foundational principles of TDD in software engineering.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-pro',
      title: 'Google AI Professional Certificate',
      issuer: 'Coursera',
      date: 'May 4, 2026',
      image: 'https://images.credly.com/images/placeholder_10/badge.png',
      description: 'Professional AI skills and application from Google.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pm-fun-ibm',
      title: 'Project Management Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_11/badge.png',
      description: 'Essential project management skills for modern business.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'predictive-pm',
      title: 'Fundamentals of Predictive Project Management',
      issuer: 'Project Management Institute',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_12/badge.png',
      description: 'Traditional, waterfall-based project management fundamentals.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-pm-app',
      title: 'Practical Application of Gen AI for Project Managers',
      issuer: 'Project Management Institute',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_13/badge.png',
      description: 'Hands-on AI applications for project delivery.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'prompt-eng-pm',
      title: 'Talking to AI: Prompt Engineering for Project Managers',
      issuer: 'Project Management Institute',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_14/badge.png',
      description: 'Optimizing AI interactions for project management tasks.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-over-pm',
      title: 'Generative AI Overview for Project Managers',
      issuer: 'Project Management Institute',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_15/badge.png',
      description: 'Strategic overview of AI impact on project management.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pmi-ai-patterns',
      title: 'PMI\u00AE Essentials: Seven AI Project Patterns',
      issuer: 'Project Management Institute',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_16/badge.png',
      description: 'Identifying and implementing common AI project workflows.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pmi-more',
      title: 'PMI Essentials M.O.R.E. Maximizing Project Success',
      issuer: 'Project Management Institute',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_17/badge.png',
      description: 'Frameworks for maximizing success in high-complexity projects.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pendo-pm-basics',
      title: 'Product Management Basics Certification',
      issuer: 'Pendo',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_18/badge.png',
      description: 'Foundational product management principles.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pendo-ai-pm',
      title: 'AI for Product Management',
      issuer: 'Pendo',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_19/badge.png',
      description: 'Leveraging AI tools within the product management role.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pendo-led',
      title: 'Product-led Certification',
      issuer: 'Pendo',
      date: 'Apr 22, 2026',
      image: 'https://images.credly.com/images/placeholder_20/badge.png',
      description: 'Implementing product-led growth strategies.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pendo-analytics',
      title: 'Product Analytics Certification',
      issuer: 'Pendo',
      date: 'Apr 22, 2026',
      image: 'https://images.credly.com/images/placeholder_21/badge.png',
      description: 'Data-driven decision making for product success.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pendo-discovery',
      title: 'Product Discovery Certification',
      issuer: 'Pendo',
      date: 'Apr 23, 2026',
      image: 'https://images.credly.com/images/placeholder_22/badge.png',
      description: 'Effective product discovery and validation techniques.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pendo-radical',
      title: 'Radical Product Thinking: Vision Setting',
      issuer: 'Pendo',
      date: 'Apr 23, 2026',
      image: 'https://images.credly.com/images/placeholder_23/badge.png',
      description: 'Vision-driven product thinking and prioritization.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pendo-digital',
      title: 'Digital Adoption Certification',
      issuer: 'Pendo',
      date: 'Apr 29, 2026',
      image: 'https://images.credly.com/images/placeholder_24/badge.png',
      description: 'Optimizing user adoption of digital products.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-sec-champion',
      title: 'AWS Knowledge: Security Champion - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_25/badge.png',
      description: 'AWS security best practices and champion advocacy.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-cloud-ess',
      title: 'AWS Knowledge: Cloud Essentials - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_26/badge.png',
      description: 'Core cloud computing foundations on AWS.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-conn-ai',
      title: 'AWS Knowledge: Amazon Connect AI Fundamentals - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_27/badge.png',
      description: 'Integrating AI into AWS contact center solutions.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-conn-ess',
      title: 'AWS Knowledge: Amazon Connect Fundamentals - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_28/badge.png',
      description: 'Foundations of Amazon Connect contact center platform.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-conn-dev',
      title: 'AWS Knowledge: Amazon Connect Developer - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 22, 2026',
      image: 'https://images.credly.com/images/placeholder_29/badge.png',
      description: 'Developer workflows for Amazon Connect implementation.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-gen-ai-badge',
      title: 'AWS Educate Introduction to Generative AI - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 18, 2026',
      image: 'https://images.credly.com/images/placeholder_30/badge.png',
      description: 'Educational introduction to AI concepts on AWS.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-ml-foundations',
      title: 'AWS Educate Machine Learning Foundations - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 18, 2026',
      image: 'https://images.credly.com/images/placeholder_31/badge.png',
      description: 'Core machine learning concepts for beginners on AWS.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-well-arch',
      title: 'Well-Architected Proficient',
      issuer: 'Amazon Web Services',
      date: 'Apr 17, 2026',
      image: 'https://images.credly.com/images/placeholder_32/badge.png',
      description: 'Applying the AWS Well-Architected framework.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-devops-change',
      title: 'Micro-Certification \u2013 DevOps Change Velocity',
      issuer: 'ServiceNow',
      date: 'Apr 2, 2026',
      image: 'https://images.credly.com/images/placeholder_33/badge.png',
      description: 'Accelerating DevOps velocity using ServiceNow platform.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-flow-designer',
      title: 'Micro-Certification - Flow Designer',
      issuer: 'ServiceNow',
      date: 'Apr 1, 2026',
      image: 'https://images.credly.com/images/placeholder_34/badge.png',
      description: 'Automating business processes with Flow Designer.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-integration-hub',
      title: 'Micro-Certification - Integration Hub',
      issuer: 'ServiceNow',
      date: 'Apr 2, 2026',
      image: 'https://images.credly.com/images/placeholder_35/badge.png',
      description: 'Connecting external systems via ServiceNow Integration Hub.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-app-engine-studio',
      title: 'Micro-Certification - Introduction to App Engine Studio',
      issuer: 'ServiceNow',
      date: 'Apr 2, 2026',
      image: 'https://images.credly.com/images/placeholder_36/badge.png',
      description: 'Low-code application building with ServiceNow.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-platform-analytics',
      title: 'Micro-Certification - Platform Analytics',
      issuer: 'ServiceNow',
      date: 'Apr 1, 2026',
      image: 'https://images.credly.com/images/placeholder_37/badge.png',
      description: 'Visualizing platform data using ServiceNow analytics.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-playbooks-adv',
      title: 'Micro-Certification - Playbooks Advanced',
      issuer: 'ServiceNow',
      date: 'Apr 13, 2026',
      image: 'https://images.credly.com/images/placeholder_38/badge.png',
      description: 'Advanced workspace playbooks for process guidance.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-playbooks-ess',
      title: 'Micro-Certification - Playbooks Essentials',
      issuer: 'ServiceNow',
      date: 'Apr 2, 2026',
      image: 'https://images.credly.com/images/placeholder_39/badge.png',
      description: 'Foundations of workspace playbook design.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-pred-intel',
      title: 'Micro-Certification - Predictive Intelligence',
      issuer: 'ServiceNow',
      date: 'Apr 13, 2026',
      image: 'https://images.credly.com/images/placeholder_40/badge.png',
      description: 'Implementing machine learning models in ServiceNow.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-portal',
      title: 'Micro-Certification - Service Portal',
      issuer: 'ServiceNow',
      date: 'Apr 2, 2026',
      image: 'https://images.credly.com/images/placeholder_41/badge.png',
      description: 'Customizing user self-service portals.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-ui-builder',
      title: 'Micro-Certification - UI Builder',
      issuer: 'ServiceNow',
      date: 'Apr 2, 2026',
      image: 'https://images.credly.com/images/placeholder_42/badge.png',
      description: 'Building modern user experiences on the ServiceNow platform.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sn-welcome',
      title: 'Micro-Certification - Welcome to ServiceNow',
      issuer: 'ServiceNow',
      date: 'Mar 19, 2026',
      image: 'https://images.credly.com/images/placeholder_43/badge.png',
      description: 'Initial certification for ServiceNow platform ecosystem.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'agile-explorer-ibm',
      title: 'Agile Explorer',
      issuer: 'IBM SkillsBuild',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_44/badge.png',
      description: 'Entry-level certification for agile teamwork concepts.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sql-querying',
      title: 'Querying Databases with SQL',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_45/badge.png',
      description: 'Advanced data retrieval and manipulation using SQL.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sql-data-science',
      title: 'Databases and SQL for Data Science',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_46/badge.png',
      description: 'Database management for data science applications.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'python-ai-proj',
      title: 'Python Project for AI and Application Development',
      issuer: 'Coursera',
      date: 'May 2, 2026',
      image: 'https://images.credly.com/images/placeholder_47/badge.png',
      description: 'Building real-world AI applications using Python.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-python',
      title: 'Building Generative AI-Powered Applications with Python',
      issuer: 'Coursera',
      date: 'May 2, 2026',
      image: 'https://images.credly.com/images/placeholder_48/badge.png',
      description: 'Developing applications with LLMs and Python.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'js-essentials',
      title: 'JavaScript Programming Essentials',
      issuer: 'Coursera',
      date: 'May 2, 2026',
      image: 'https://images.credly.com/images/placeholder_49/badge.png',
      description: 'Foundational JavaScript language skills.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'web-dev-essentials',
      title: 'Web Development with HTML, CSS, JavaScript Essentials',
      issuer: 'Coursera',
      date: 'May 2, 2026',
      image: 'https://images.credly.com/images/placeholder_50/badge.png',
      description: 'Core web technologies for modern frontend development.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'java-oop-proj',
      title: 'Object Oriented Programming in Java',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_51/badge.png',
      description: 'Advanced OOP design patterns with Java.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'java-beginners',
      title: 'Java Programming for Beginners',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_52/badge.png',
      description: 'Entry-level Java programming skills.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'intro-agile-scrum',
      title: 'Introduction to Agile Development and Scrum',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_53/badge.png',
      description: 'Foundational understanding of Scrum and agile cycles.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'devops-essentials-c',
      title: 'DevOps Essentials',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_54/badge.png',
      description: 'Core DevOps principles and cultural rotation.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'aws-cloud-101',
      title: 'AWS Educate Introduction to Cloud 101 - Training Badge',
      issuer: 'Amazon Web Services',
      date: 'Apr 18, 2026',
      image: 'https://images.credly.com/images/placeholder_55/badge.png',
      description: 'Foundational cloud computing education.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-brainstorm',
      title: 'Google AI for Brainstorming and Planning',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_56/badge.png',
      description: 'Applying AI to early-stage project planning.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-research',
      title: 'Google AI for Research and Insights',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_57/badge.png',
      description: 'Data gathering and insight generation via AI tools.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-prompt-eng',
      title: 'Generative AI: Prompt Engineering',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_58/badge.png',
      description: 'Professional-grade prompt engineering skills.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-ess-coursera',
      title: 'Generative AI Essentials',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_59/badge.png',
      description: 'Essential concepts of generative artificial intelligence.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'ai-essentials-v2',
      title: 'Artificial Intelligence Essentials V2',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_60/badge.png',
      description: 'Comprehensive overview of modern AI landscape.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-foundations',
      title: 'Generative AI: Foundation Models and Platforms',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_61/badge.png',
      description: 'Exploring LLM architecture and deployment platforms.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'ibm-design-pract',
      title: 'Enterprise Design Thinking Practitioner',
      issuer: 'IBM SkillsBuild',
      date: 'Apr 20, 2026',
      image: 'https://images.credly.com/images/placeholder_62/badge.png',
      description: 'User-centric design thinking for enterprise solutions.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'isc2-candidate-cred',
      title: 'ISC2 Candidate',
      issuer: 'ISC2',
      date: 'Expires Apr 30, 2027',
      image: 'https://images.credly.com/images/placeholder_63/badge.png',
      description: 'Verification of active candidate status for ISC2 certifications.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'it-fun-everyone',
      title: 'IT Fundamentals for Everyone',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_64/badge.png',
      description: 'General technology literacy and principles.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-ess-v1',
      title: 'Google AI Essentials V1',
      issuer: 'Coursera',
      date: 'May 4, 2026',
      image: 'https://images.credly.com/images/placeholder_65/badge.png',
      description: 'Initial version of Google AI professional certification.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-app',
      title: 'Google AI for App Building',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_66/badge.png',
      description: 'Leveraging AI for rapid application development.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-content',
      title: 'Google AI for Content Creation',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_67/badge.png',
      description: 'Multi-modal content generation using AI.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-data',
      title: 'Google AI for Data Analysis',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/placeholder_68/badge.png',
      description: 'Automating data analysis workflows with Google AI.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-writing',
      title: 'Google AI for Writing and Communicating',
      issuer: 'Coursera',
      date: 'May 4, 2026',
      image: 'https://images.credly.com/images/placeholder_69/badge.png',
      description: 'Enhancing professional communication via AI assistance.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'google-ai-fun-cred',
      title: 'Google AI Fundamentals',
      issuer: 'Coursera',
      date: 'May 4, 2026',
      image: 'https://images.credly.com/images/placeholder_70/badge.png',
      description: 'Core AI terminology and concept foundations.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'react-v2-dev',
      title: 'Front-end Development with React V2',
      issuer: 'Coursera',
      date: 'May 5, 2026',
      image: 'https://images.credly.com/images/placeholder_71/badge.png',
      description: 'Advanced React patterns and frontend architecture.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'node-mongo-backend',
      title: 'Intermediate Back-end Development: Node & MongoDB',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_72/badge.png',
      description: 'Scalable backend services with Node.js and NoSQL.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'node-express-ess',
      title: 'Node and Express Essentials',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_73/badge.png',
      description: 'API development using the Express framework.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'pm-essentials-c',
      title: 'Product Management Essentials',
      issuer: 'Coursera',
      date: 'Apr 30, 2026',
      image: 'https://images.credly.com/images/placeholder_74/badge.png',
      description: 'Core product management workflows and delivery.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'proj-m-essentials-c',
      title: 'Project Management Essentials',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_75/badge.png',
      description: 'Foundational project management methodologies.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'python-data-science',
      title: 'Python for Data Science and AI',
      issuer: 'Coursera',
      date: 'Apr 30, 2026',
      image: 'https://images.credly.com/images/placeholder_76/badge.png',
      description: 'Python programming for data-centric AI applications.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'sw-eng-essentials',
      title: 'Software Engineering Essentials',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_77/badge.png',
      description: 'Professional practices in modern software engineering.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    },
    {
      id: 'gen-ai-sw-dev-ess-v2',
      title: 'Generative AI Essentials for Software Developers V2',
      issuer: 'Coursera',
      date: 'May 7, 2026',
      image: 'https://images.credly.com/images/placeholder_78/badge.png',
      description: 'Latest generative AI strategies for development acceleration.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges'
    }
  ],
  githubRepos: [
    {
      name: "Playwright-Automation-w-TypeScript",
      description: "Advanced automation framework using Playwright and TypeScript for scalable end-to-end testing.",
      technologies: ["Playwright", "TypeScript", "Node.js"],
      url: "https://github.com/BrianGator/Playwright-Automation-w-TypeScript"
    },
    {
      name: "Selenium-WebDriver-Automation-w-Java-Ninja",
      description: "Robust testing suite demonstrating expert-level Selenium WebDriver usage with Java.",
      technologies: ["Selenium", "Java", "TestNG", "Maven"],
      url: "https://github.com/BrianGator/Selenium-WebDriver-Automation-w-Java-Ninja"
    },
    {
      name: "Emotion-Analytics-w-Python-Flask-AI",
      description: "AI-powered web application using Python and Flask to analyze emotions in text data.",
      technologies: ["Python", "Flask", "AI/ML", "NLP"],
      url: "https://github.com/BrianGator/Emotion-Analytics-w-Python-Flask-AI"
    },
    {
      name: "IBM-AI-Product-Management-Capstone",
      description: "Final project for the IBM AI Product Manager Professional Certificate demonstrating AI lifecycle management.",
      technologies: ["AI Strategy", "Product Design", "Ethics"],
      url: "https://github.com/BrianGator/IBM-AI-Product-Management-Capstone"
    },
    {
      name: "Full-Stack-E-Commerce-Application",
      description: "A complete MERN stack application with payment integration and user management.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      url: "https://github.com/BrianGator/Full-Stack-E-Commerce-Application"
    },
    {
      name: "Agile-Project-Dashboard",
      description: "Visualize agile metrics like velocity and burndown charts using D3.js and React.",
      technologies: ["D3.js", "React", "Agile"],
      url: "https://github.com/BrianGator/Agile-Project-Dashboard"
    },
    {
      name: "Cucumber-BDD-Automation-Framework",
      description: "Behavior Driven Development (BDD) framework utilizing Cucumber, Gherkin, and Selenium.",
      technologies: ["Cucumber", "Selenium", "BBD", "Java"],
      url: "https://github.com/BrianGator/Cucumber-BDD-Automation-Framework"
    },
    {
      name: "Rest-Assured-API-Testing-Suite",
      description: "Comprehensive API testing suite for microservices validation using Rest-Assured and Java.",
      technologies: ["Rest-Assured", "Java", "API Testing"],
      url: "https://github.com/BrianGator/Rest-Assured-API-Testing-Suite"
    }
  ]
};

// --- Helper Components ---

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3 uppercase tracking-wider">
    <Icon className="w-4 h-4 text-blue-600" />
    <h2 className="text-xs font-bold text-slate-400">{title}</h2>
  </div>
);

const CredentialCard = ({ cred }: any) => (
  <Link to={`/credential/${cred.id}`}>
    <motion.div 
      whileHover={{ y: -2 }}
      className="bg-white rounded-lg border border-slate-200 p-4 shadow-sm hover:border-blue-200 transition-all cursor-pointer group h-full flex flex-col"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded bg-slate-50 flex items-center justify-center p-4 shrink-0">
        <img src={cred.image} alt={cred.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
      </div>
      <h3 className="font-bold text-[12px] text-slate-800 leading-tight mb-1 line-clamp-2 uppercase tracking-tight">{cred.title}</h3>
      <p className="text-[11px] text-slate-500 mb-2">{cred.issuer}</p>
      <div className="mt-auto text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{cred.date}</div>
    </motion.div>
  </Link>
);

const SkillGrid = ({ title, items, icon: Icon }: { title: string, items: string[], icon: any }) => (
  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-4 h-4 text-blue-600" />
      <h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {items.map(item => (
        <span key={item} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[9px] font-bold text-slate-600 uppercase tracking-tight">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const DetailModal = ({ cred, onClose }: { cred: Credential | null, onClose: () => void }) => (
  <AnimatePresence>
    {cred && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-xl flex items-center justify-center p-6 border border-slate-100">
                <img src={cred.image} alt={cred.title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-1">
                <button onClick={onClose} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight leading-tight">{cred.title}</h2>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cred.issuer}</span>
                    <span className="text-slate-200">|</span>
                    <span className="text-slate-400">{cred.date}</span>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed mb-8 text-[11px] font-medium">{cred.description}</p>
                <a href={cred.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-bold text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                  Verify Credential
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- Layout Components ---



const Header = ({ handleRefresh, refreshing }: { handleRefresh: () => void, refreshing: boolean }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md bg-white/90">
      <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-widest text-slate-900 uppercase">Brian McCarthy</h1>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Sr. QA • BA • PM Engineer</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
           <Link to="/accredible-credentials" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Accredible</Link>
           <Link to="/credly-credentials" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Credly</Link>
           <Link to="/github-portfolio" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">GitHub</Link>
        </nav>
        <button 
          onClick={handleRefresh}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${refreshing ? 'bg-slate-100 text-slate-300' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'}`}
          disabled={refreshing}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
          {refreshing ? 'Syncing...' : 'Refresh'}
        </button>
      </div>
    </header>
  );
};

const SocialLink = ({ href, icon: Icon, label }: any) => (
  <a href={href} target="_blank" className="flex items-center gap-2.5 text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight group">
    <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
    <span>{label}</span>
  </a>
);

export default function App() {
  const [data, setData] = useState<PortfolioData>(INITIAL_DATA);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetch('/api/refresh');
      await new Promise(r => setTimeout(r, 800));
    } catch (err) {
      console.error(err);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Header handleRefresh={handleRefresh} refreshing={refreshing} />
        
        <main className="w-full space-y-0">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/accredible-credentials" element={<div className="bg-white p-12 md:p-24 border-b border-slate-200"><AccredibleSection data={data} /></div>} />
            <Route path="/credly-credentials" element={<div className="bg-white p-12 md:p-24 border-b border-slate-200"><CredlySection data={data} /></div>} />
            <Route path="/github-portfolio" element={<div className="bg-white p-12 md:p-24 border-b border-slate-200"><GitHubSection data={data} /></div>} />
            <Route path="/credential/:id" element={<CredentialDetail data={data} />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-slate-200 py-24 px-12 md:px-24">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-black uppercase tracking-tighter">Brian McCarthy</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium mb-8 max-w-xs">
                CSTP-A certified professional with over 13 years of expertise in software quality assurance, product management, and agile delivery.
              </p>
              <div className="flex gap-4">
                <SocialLink href="https://www.linkedin.com/in/briansmccarthy/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="https://github.com/BrianGator" icon={Github} label="GitHub" />
                <SocialLink href="mailto:BrianSMc@gmail.com" icon={Mail} label="Email" />
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-8">Quick Navigation</h4>
              <ul className="space-y-4">
                <li key="Home"><Link to="/" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight">Home</Link></li>
                <li key="Accredible"><Link to="/accredible-credentials" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight">Accredible</Link></li>
                <li key="Credly"><Link to="/credly-credentials" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight">Credly</Link></li>
                <li key="Portfolio"><Link to="/github-portfolio" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight">GitHub Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-8">Metadata & SEO</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Tampa, FL • US Citizen</p>
              <div className="flex flex-col space-y-2 text-[10px] font-mono">
                <span className="text-slate-300">/robots.txt</span>
                <span className="text-slate-300">/sitemap.xml</span>
                <span className="text-slate-300">Authored by Brian McCarthy</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// --- Page / Section Components ---

const CredentialDetail = ({ data }: { data: PortfolioData }) => {
  const { id } = useParams<{ id: string }>();
  const credentials = [...data.accredible, ...data.credly];
  const cred = credentials.find(c => c.id === id);

  useEffect(() => {
    if (cred) {
      document.title = `${cred.title}-Details-Brian McCarthy`;
    }
    return () => {
      document.title = "Brian McCarthy - Technical Portfolio";
    };
  }, [cred]);

  if (!cred) return <div className="p-24 text-center font-bold uppercase tracking-widest text-slate-400">Credential Not Found</div>;

  return (
    <div className="min-h-[80vh] bg-white flex items-center justify-center p-12 md:p-24">
       <div className="w-full max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 hover:text-blue-600 mb-12 uppercase transition-colors group">
            <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <a 
               href={cred.verifyUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full lg:w-2/5 aspect-square bg-slate-50 rounded-3xl flex items-center justify-center p-12 border border-slate-100 shadow-2xl relative group overflow-hidden"
             >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={cred.image} alt={cred.title} className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-6 right-6 p-3 bg-white/90 backdrop-blur rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all z-20">
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                </div>
             </a>
             
             <div className="flex-1">
                <div className="mb-12">
                   <div className="flex gap-3 mb-6">
                      <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 flex items-center gap-2">
                         <ShieldCheck className="w-3.5 h-3.5" />
                         Verified Credential
                      </span>
                      <span className="px-4 py-1.5 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100">
                         ID: {cred.id}
                      </span>
                   </div>
                   <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-[1.1]">
                      {cred.title}
                   </h1>
                   <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
                      <div>
                         <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Issued By</p>
                         <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">{cred.issuer}</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Issued Date</p>
                         <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">{cred.date}</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-12">
                   <div>
                      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Description</h4>
                      <p className="text-slate-500 text-lg leading-relaxed font-medium italic border-l-4 border-blue-500 pl-8">
                         {cred.description}
                      </p>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={cred.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:shadow-blue-200/50 group"
                      >
                         <Award className="w-5 h-5" />
                         Verify on {cred.issuer.includes('Credly') ? 'Credly' : 'Accredible'}
                         <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                      
                      <button 
                        onClick={() => window.print()}
                        className="inline-flex items-center justify-center gap-3 border-2 border-slate-200 text-slate-600 px-8 py-5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-50 hover:border-slate-800 hover:text-slate-900 transition-all"
                      >
                         Download Certificate
                      </button>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

const Home = ({ data }: any) => (
  <div className="space-y-0">
    <section className="bg-white border-b border-slate-200">
      {/* Background Banner */}
      <div className="h-48 bg-slate-100 w-full relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      </div>
      
      <div className="w-full px-6 md:px-12 pb-16">
        <div className="relative -mt-24 flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12 text-center md:text-left">
          <div className="w-48 h-48 rounded-full border-8 border-white shadow-xl overflow-hidden bg-white shrink-0">
            <img src="https://images.credly.com/images/b4f0de31-ef6a-4c7b-b7db-dbc7027ed21a/_brian-profile-photo.jpg" alt="Brian McCarthy" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 pb-4">
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              <span className="px-3 py-1 bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest rounded-sm border border-slate-700">Microsoft AI PM</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 text-[10px] font-black uppercase tracking-widest rounded-sm border border-slate-300">Microsoft Business Analyst</span>
              <span className="px-3 py-1 bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest rounded-sm">Certified ScrumMaster</span>
              <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-sm">Certified QA Testing Professional</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-2 leading-none">Brian Scott McCarthy</h2>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6 uppercase flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Tampa, Florida USA • US Citizen
            </p>

            <div className="max-w-4xl">
               <p className="text-slate-500 text-[12px] leading-relaxed font-medium mb-8">
                 {data.bio}
               </p>
            </div>

            <div className="flex gap-6 justify-center md:justify-start">
               <SocialLink href="https://www.linkedin.com/in/briansmccarthy/" icon={Linkedin} label="LinkedIn" />
               <SocialLink href="https://github.com/BrianGator" icon={Github} label="GitHub" />
               <SocialLink href="mailto:BrianSMc@gmail.com" icon={Mail} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <AccredibleSection data={data} />
    <CredlySection data={data} />
    <GitHubSection data={data} />
    <section className="bg-white p-12 md:p-24 border-b border-slate-200">
      <div className="w-full max-w-none">
        <SectionHeader title="Career History" icon={Briefcase} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 italic">
          <div className="max-w-2xl">
            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              My comprehensive professional work history, including over a decade of leadership in Quality Assurance, Business Analysis, and Agile Project Management, is fully detailed on LinkedIn.
            </p>
          </div>
          <a 
            href="https://www.linkedin.com/in/briansmccarthy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:shadow-blue-200/50 group"
          >
            <Linkedin className="w-4 h-4" />
            View Full Profile
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
    <RoleHighlights />
  </div>
);

const RoleHighlights = () => (
  <section className="bg-slate-900 p-12 md:p-24 text-white w-full">
     <SectionHeader title="Professional Role Highlights" icon={Target} />
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 w-full">
        {/* QA Automation */}
        <div className="space-y-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                 <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">QA Automation</h3>
           </div>
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Over 13 years of expertise in software quality assurance, delivering high-quality automation solutions and strategic leadership in complex Agile environments.
           </p>
           <div className="space-y-4">
              <div>
                 <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Expertise</h4>
                 <p className="text-[11px] font-bold text-slate-300 uppercase tracking-tight">CSTP-A Certified • Selenium • Playwright • Cypress • Cucumber</p>
              </div>
              <div>
                 <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Core Functions</h4>
                 <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-tight">
                   Automated Test Strategy • CI/CD Integration • Performance Analysis • Security Auditing • Quality Mentoring
                 </p>
              </div>
           </div>
        </div>

        {/* Development */}
        <div className="space-y-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
                 <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Development</h3>
           </div>
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Driven by a full-stack mindset and backed by a deep credential portfolio in modern frameworks and scalable system architecture.
           </p>
           <div className="space-y-4">
              <div>
                 <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Stack</h4>
                 <p className="text-[11px] font-bold text-slate-300 uppercase tracking-tight">Java • JavaScript • TypeScript • Python • C# • ASP.NET • React • Node</p>
              </div>
              <div>
                 <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Core Functions</h4>
                 <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-tight">
                   Full-Stack Engineering • API Microservices • Cloud Infrastructure • Database Design • TDD Implementation
                 </p>
              </div>
           </div>
        </div>

        {/* Business Analyst */}
        <div className="space-y-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center shrink-0">
                 <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Business Analyst</h3>
           </div>
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Leveraging a decade of enterprise project success to translate complex business requirements into high-value technical specifications.
           </p>
           <div className="space-y-4">
              <div>
                 <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">Core Job Functions</h4>
                 <div className="grid grid-cols-1 gap-1 text-[10px] font-bold text-slate-300 uppercase tracking-tight">
                    <div>• Requirements Elicitation & Analysis</div>
                    <div>• Business Process Modeling (BPMN)</div>
                    <div>• Gap Analysis & Prioritization</div>
                    <div>• Functional Spec Documentation</div>
                    <div>• Solution Validation & Testing</div>
                    <div>• Data Analysis & Change Management</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Project Manager */}
        <div className="space-y-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center shrink-0">
                 <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Project Manager</h3>
           </div>
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Certified IT Scrum Master and Project Management professional focused on delivering complex technical initiatives on schedule and within scope.
           </p>
           <div className="space-y-4">
              <div>
                 <h4 className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-2">Core Job Functions</h4>
                 <div className="grid grid-cols-1 gap-1 text-[10px] font-bold text-slate-300 uppercase tracking-tight">
                    <div>• Project Planning & Scoping</div>
                    <div>• Schedule & Timeline Management</div>
                    <div>• Budget & Resource Management</div>
                    <div>• Risk & Issue Management</div>
                    <div>• Stakeholder Communication</div>
                    <div>• Agile Ceremony Facilitation</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Product Manager */}
        <div className="space-y-6">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-fuchsia-600 flex items-center justify-center shrink-0">
                 <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Product Manager</h3>
           </div>
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Certified IBM AI Product Manager combining technical depth with market strategy to build impactful, data-driven product roadmaps.
           </p>
           <div className="space-y-4">
              <div>
                 <h4 className="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest mb-2">Core Job Functions</h4>
                 <div className="grid grid-cols-1 gap-1 text-[10px] font-bold text-slate-300 uppercase tracking-tight">
                    <div>• Vision & Strategy Definition</div>
                    <div>• Market & User Research</div>
                    <div>• Roadmap Development & Prioritization</div>
                    <div>• Product Requirements Definition</div>
                    <div>• Performance Monitoring (KPIs)</div>
                    <div>• Pricing & Positioning Strategy</div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
);

const AccredibleSection = ({ data }: any) => (
  <section className="bg-white p-6 md:p-12 border-b border-slate-200 w-full">
    <div className="w-full max-w-none">
      <SectionHeader title="Accredible Credentials" icon={Award} />
      <div className="w-full max-h-[1000px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.accredible.map((cred: any) => (
             <CredentialCard key={cred.id} cred={cred} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CredlySection = ({ data }: any) => (
  <section className="bg-white p-6 md:p-12 border-b border-slate-200 w-full">
    <div className="w-full max-w-none">
      <SectionHeader title="Credly Credentials" icon={Award} />
      <div className="w-full max-h-[1000px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.credly.map((cred: any) => (
            <CredentialCard key={cred.id} cred={cred} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const GitHubSection = ({ data }: any) => (
  <section className="bg-white p-12 md:p-24 border-b border-slate-200 w-full">
    <SectionHeader title="GitHub Portfolio Repositories" icon={Github} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {data.githubRepos.map((repo: any, i: number) => (
        <div key={i} className="group p-8 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:border-slate-800 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-6">
             <h3 className="font-bold text-[14px] text-slate-800 uppercase tracking-tight leading-none">{repo.name}</h3>
             <a href={repo.url} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4 text-slate-300 hover:text-slate-900 transition-colors" /></a>
          </div>
          <p className="text-[12px] text-slate-500 mb-8 leading-relaxed font-medium">{repo.description}</p>
          <div className="flex flex-wrap gap-2">
            {repo.technologies.map((t: any) => (
              <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-slate-100 rounded text-slate-400">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);


