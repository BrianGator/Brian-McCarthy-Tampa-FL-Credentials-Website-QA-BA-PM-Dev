
export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  verifyUrl: string;
  categories: ('QA' | 'PM-Project' | 'PM-Product' | 'BA' | 'Dev')[];
}

export interface GithubRepo {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

export interface PortfolioData {
  bio: string;
  accredible: Credential[];
  credly: Credential[];
  githubRepos: GithubRepo[];
}

export const INITIAL_DATA: PortfolioData = {
  bio: "With over 14 years of experience in Software Quality Assurance. I am committed to delivering high-quality software solutions while collaborating in Agile environments. My dedication to ensuring robust and reliable software is supported by my CSTP-A certification and a focus on data-driven decision-making. I also have experience in Product Management, Project Management, Selenium, Playwright, Service Now, Azure Dev Ops, AWS, Java, JavaScript, AI.",
  accredible: [
    {
      id: 'acc-ba-pro',
      title: 'Microsoft Business Analyst Professional',
      issuer: 'Microsoft',
      date: 'May 13, 2026',
      image: 'https://images.credential.net/size/400x400/badge/6cc0d297-c7ba-4b2e-a57c-f13197607777_logo.png',
      description: 'Professional certification for business analysis from Microsoft.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet',
      categories: ['BA']
    },
    {
      id: 'acc-ai-pm',
      title: 'IBM AI Product Manager',
      issuer: 'IBM',
      date: 'May 7, 2026',
      image: 'https://images.credential.net/size/400x400/badge/115a2153-d456-4e99-8cc1-3ebad2c68620_logo.png',
      description: 'Advanced certification in AI product management.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet',
      categories: ['PM-Product']
    },
    {
      id: 'acc-asp-net',
      title: 'Advanced ASP.NET Core MVC, Deployment & User Management',
      issuer: 'Packt',
      date: 'May 6, 2026',
      image: 'https://images.credential.net/size/400x400/badge/c2d3e4f5-g6h7-8i9j-0k1l-2m3n4o5p6q7r_logo.png',
      description: 'Expertise in building scalable ASP.NET Core MVC applications.',
      verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet',
      categories: ['Dev']
    },
    {
       id: 'acc-gs-agile',
       title: 'Google Agile Project Management Certification',
       issuer: 'Google',
       date: 'April 24, 2026',
       image: 'https://images.credential.net/size/400x400/badge/d3e4f5g6-h7i8-9j0k-1l2m-3n4o5p6q7r8s_logo.png',
       description: 'Foundational agile principles for professional project management.',
       verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet',
       categories: ['PM-Project']
    }
  ],
  credly: [
    {
      id: 'crd-ai-pm',
      title: 'IBM AI Product Manager Professional Certificate',
      issuer: 'Coursera',
      date: 'May 7, 2026',
      image: 'https://images.credly.com/images/bc72d4a9-dacb-4a15-8890-5be1786caac1/IBM_AI_Product_Manager.png',
      description: 'Comprehensive AI product management training.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges',
      categories: ['PM-Product']
    },
    {
      id: 'crd-ms-pm',
      title: 'Microsoft Project Management Professional Certificate',
      issuer: 'Coursera',
      date: 'May 1, 2026',
      image: 'https://images.credly.com/images/b2c3d4e5-f6a7-4b5c-8d9e-1f2a3b4c5d6e/PM_Foundations.png',
      description: 'Project management excellence with Microsoft standards.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges',
      categories: ['PM-Project']
    },
    {
      id: 'crd-qa-test',
      title: 'Software Testing, Deployment, and Maintenance Strategies',
      issuer: 'Coursera',
      date: 'Apr 30, 2026',
      image: 'https://images.credly.com/images/placeholder_4/badge.png',
      description: 'Strategic approaches to software quality and lifecycle.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges',
      categories: ['QA']
    },
    {
      id: 'crd-java',
      title: 'Java Programming Fundamentals Specialization',
      issuer: 'Coursera',
      date: 'May 3, 2026',
      image: 'https://images.credly.com/images/placeholder_0/badge.png',
      description: 'Deep dive into computer science using Java.',
      verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges',
      categories: ['Dev']
    }
  ],
  githubRepos: [
    {
      name: "Playwright-Automation-w-TypeScript",
      description: "Advanced automation framework using Playwright and TypeScript.",
      technologies: ["Playwright", "TypeScript", "Node.js"],
      url: "https://github.com/BrianGator/Playwright-Automation-w-TypeScript"
    }
  ]
};
