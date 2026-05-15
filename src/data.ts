
export interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  description?: string;
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
    { id: 'acc-1', title: 'Microsoft Business Analyst Professional', issuer: 'Microsoft', date: 'May 13, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['BA'] },
    { id: 'acc-2', title: 'IBM AI Product Manager', issuer: 'IBM', date: 'May 7, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Product'] },
    { id: 'acc-3', title: 'Advanced ASP.NET Core MVC, Deployment & User Management', issuer: 'Packt', date: 'May 6, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-4', title: 'JavaScript Programming with React, Node & MongoDB', issuer: 'IBM', date: 'May 5, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-5', title: 'Advanced C# Object-Oriented Programming', issuer: 'Microsoft', date: 'May 5, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-6', title: 'IBM IT Scrum Master', issuer: 'IBM', date: 'May 4, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Project'] },
    { id: 'acc-7', title: 'Microsoft Project Management Professional', issuer: 'Microsoft', date: 'May 1, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Project'] },
    { id: 'acc-8', title: 'Microsoft AI Product Manager Professional', issuer: 'Microsoft', date: 'April 29, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Product'] },
    { id: 'acc-9', title: 'Academy Accreditation - Platform Administrator', issuer: 'Databricks Academy', date: 'April 25, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['BA', 'Dev'] },
    { id: 'acc-10', title: 'Cucumber Automation Framework Design & Behavior Driven Development', issuer: 'Packt', date: 'April 25, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-11', title: 'ServiceNow System Administrator Professional', issuer: 'Packt', date: 'April 24, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-12', title: 'Google Agile Project Management Certification', issuer: 'Google', date: 'April 24, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Project'] },
    { id: 'acc-13', title: 'Certified in CyberSecurity (CC)', issuer: 'ISC2', date: 'April 13, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev', 'QA'] },
    { id: 'acc-14', title: 'AWS Cloud Practitioner', issuer: 'AWS & SimpliLearn', date: 'January 9, 2026', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-15', title: 'Academy Accreditation - Generative AI Fundamentals', issuer: 'Databricks Academy', date: 'December 17, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Product', 'Dev'] },
    { id: 'acc-16', title: 'Certified Ethical Hacker (CEH)', issuer: 'LinkedIn', date: 'December 16, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-17', title: 'Agile Scrum Master', issuer: 'SimpliLearn', date: 'December 15, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Project'] },
    { id: 'acc-18', title: 'Microsoft Software Development Professional', issuer: 'Microsoft', date: 'December 15, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-19', title: 'Penetration Testing Professional', issuer: 'Cybrary', date: 'December 13, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-20', title: 'Javascript Foundations Professional', issuer: 'Mozilla', date: 'December 12, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-21', title: 'Java Foundations Professional', issuer: 'JetBeans', date: 'December 11, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-22', title: 'Cypress.io End-to-End JavaScript Testing', issuer: 'LinkedIn', date: 'December 11, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-23', title: 'Python Programming Professional', issuer: 'Python Institute', date: 'December 11, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] },
    { id: 'acc-24', title: 'Playwright Test Automation Master', issuer: 'LinkedIn', date: 'December 11, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-25', title: 'Agile Project Management Professional', issuer: 'Atlassian', date: 'December 10, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Project'] },
    { id: 'acc-26', title: 'Microsoft Business Analysis Essentials', issuer: 'Microsoft', date: 'December 8, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['BA'] },
    { id: 'acc-27', title: 'Microsoft Generative AI Essentials', issuer: 'Microsoft', date: 'December 8, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev', 'PM-Product'] },
    { id: 'acc-28', title: 'Microsoft Project Management Essentials', issuer: 'Microsoft', date: 'December 4, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Project'] },
    { id: 'acc-29', title: 'Test Automation Professional', issuer: 'LambdaTest', date: 'December 4, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-30', title: 'Product Managment Professional', issuer: 'Aha!', date: 'December 3, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['PM-Product'] },
    { id: 'acc-31', title: 'REST Assured API Testing with Java', issuer: 'LinkedIn', date: 'December 2, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-32', title: 'Advance Selenium Automation Frameworks', issuer: 'LinkedIn', date: 'December 1, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-33', title: 'Software Testing Professional', issuer: 'LambdaTest', date: 'December 1, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-34', title: 'Selenium Test Automation with Java', issuer: 'LinkedIn', date: 'November 26, 2025', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['QA'] },
    { id: 'acc-35', title: 'Master of Science in Management Information Systems', issuer: 'University of South Florida', date: 'December 12, 2008', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['BA', 'PM-Project'] },
    { id: 'acc-36', title: 'Bachelor of Science in Computer & Information Sciences', issuer: 'University of Florida', date: 'December 10, 2004', verifyUrl: 'https://www.credential.net/profile/brian-mccarthy/wallet', categories: ['Dev'] }
  ],
  credly: [
    { id: 'crd-1', title: 'IBM AI Product Manager Professional Certificate', issuer: 'Coursera/IBM', date: 'May 7, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-2', title: 'Microsoft Project Management Professional Certificate', issuer: 'Coursera/Microsoft', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-3', title: 'IBM IT Scrum Master Professional Certificate', issuer: 'Coursera/IBM', date: 'May 4, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-4', title: 'Microsoft Business Analyst Professional Certificate(v.1)', issuer: 'Coursera/Microsoft', date: 'May 13, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-5', title: 'Java Programming Fundamentals Specialization', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-6', title: 'JavaScript Programming with React, Node & MongoDB Specialization', issuer: 'Coursera/IBM', date: 'May 5, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-7', title: 'Generative AI for Product Managers Specialization', issuer: 'Coursera', date: 'May 7, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-8', title: 'Generative AI for Software Developers Specialization', issuer: 'Coursera', date: 'May 7, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-9', title: 'Software Testing, Deployment, and Maintenance Strategies', issuer: 'Coursera', date: 'Apr 30, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA'] },
    { id: 'crd-10', title: 'Micro-Certification - Agile and Test Management', issuer: 'ServiceNow', date: 'Apr 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA', 'PM-Project'] },
    { id: 'crd-11', title: 'Micro-Certification - Automated Test Framework', issuer: 'ServiceNow', date: 'Mar 19, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA'] },
    { id: 'crd-12', title: 'Penetration Testing, Threat Hunting, and Cryptography', issuer: 'Coursera', date: 'May 4, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA'] },
    { id: 'crd-13', title: 'IBM Z DevOps Testing Fundamentals', issuer: 'IBM', date: 'Apr 22, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA', 'Dev'] },
    { id: 'crd-14', title: 'Introduction to Test Driven Development', issuer: 'Coursera', date: 'May 4, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA', 'Dev'] },
    { id: 'crd-15', title: 'Google AI Professional Certificate', issuer: 'Coursera/Google', date: 'May 4, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product', 'Dev'] },
    { id: 'crd-16', title: 'Fundamentals of Agile Project Management', issuer: 'Project Management Institute', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-17', title: 'Project Management Fundamentals', issuer: 'IBM SkillsBuild', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-18', title: 'Fundamentals of Predictive Project Management', issuer: 'Project Management Institute', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-19', title: 'Practical Application of Gen AI for Project Managers', issuer: 'Project Management Institute', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project', 'PM-Product'] },
    { id: 'crd-20', title: 'Talking to AI: Prompt Engineering for Project Managers', issuer: 'Project Management Institute', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project', 'PM-Product'] },
    { id: 'crd-21', title: 'Generative AI Overview for Project Managers', issuer: 'Project Management Institute', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-22', title: 'PMI Essentials: Seven AI Project Patterns', issuer: 'Project Management Institute', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-23', title: 'PMI Essentials M.O.R.E. Maximizing Product Success', issuer: 'Project Management Institute', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-24', title: 'Product Management Basics Certification', issuer: 'Pendo', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-25', title: 'AI for Product Management', issuer: 'Pendo', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-26', title: 'Product-led Certification', issuer: 'Pendo', date: 'Apr 22, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-27', title: 'Product Analytics Certification', issuer: 'Pendo', date: 'Apr 22, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-28', title: 'Product Discovery Certification', issuer: 'Pendo', date: 'Apr 23, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-29', title: 'Radical Product Thinking: Vision Setting', issuer: 'Pendo', date: 'Apr 23, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-30', title: 'Digital Adoption Certification', issuer: 'Pendo', date: 'Apr 29, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-31', title: 'AWS Knowledge: Security Champion', issuer: 'AWS', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA', 'Dev'] },
    { id: 'crd-32', title: 'AWS Knowledge: Cloud Essentials', issuer: 'AWS', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-33', title: 'AWS Knowledge: Amazon Connect AI Fundamentals', issuer: 'AWS', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev', 'PM-Product'] },
    { id: 'crd-34', title: 'AWS Knowledge: Amazon Connect Fundamentals', issuer: 'AWS', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-35', title: 'AWS Knowledge: Amazon Connect Developer', issuer: 'AWS', date: 'Apr 22, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-36', title: 'AWS Educate Introduction to Generative AI', issuer: 'AWS', date: 'Apr 18, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-37', title: 'AWS Educate Machine Learning Foundations', issuer: 'AWS', date: 'Apr 18, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-38', title: 'Well-Architected Proficient', issuer: 'AWS', date: 'Apr 17, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-39', title: 'Micro-Certification – DevOps Change Velocity', issuer: 'ServiceNow', date: 'Apr 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project', 'Dev'] },
    { id: 'crd-40', title: 'Micro-Certification - Flow Designer', issuer: 'ServiceNow', date: 'Apr 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-41', title: 'Micro-Certification - Integration Hub', issuer: 'ServiceNow', date: 'Apr 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-42', title: 'Micro-Certification - Introduction to App Engine Studio', issuer: 'ServiceNow', date: 'Apr 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-43', title: 'Micro-Certification - Platform Analytics', issuer: 'ServiceNow', date: 'Apr 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-44', title: 'Micro-Certification - Playbooks Advanced', issuer: 'ServiceNow', date: 'Apr 13, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-45', title: 'Micro-Certification - Playbooks Essentials', issuer: 'ServiceNow', date: 'Apr 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-46', title: 'Micro-Certification - Predictive Intelligence', issuer: 'ServiceNow', date: 'Apr 13, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product', 'Dev'] },
    { id: 'crd-47', title: 'Micro-Certification - Service Portal', issuer: 'ServiceNow', date: 'Apr 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-48', title: 'Micro-Certification - UI Builder', issuer: 'ServiceNow', date: 'Apr 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-49', title: 'Micro-Certification - Welcome to ServiceNow', issuer: 'ServiceNow', date: 'Mar 19, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-50', title: 'Agile Explorer', issuer: 'IBM SkillsBuild', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-51', title: 'Querying Databases with SQL', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-52', title: 'Databases and SQL for Data Science', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev', 'BA'] },
    { id: 'crd-53', title: 'Python Project for AI and Application Development', issuer: 'Coursera', date: 'May 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-54', title: 'Building Generative AI-Powered Applications with Python', issuer: 'Coursera', date: 'May 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-55', title: 'JavaScript Programming Essentials', issuer: 'Coursera', date: 'May 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-56', title: 'Web Development Essentials (HTML, CSS, JS)', issuer: 'Coursera', date: 'May 2, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-57', title: 'Object Oriented Programming in Java', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-58', title: 'Java Programming for Beginners', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-59', title: 'Introduction to Agile Development and Scrum', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-60', title: 'DevOps Essentials', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-61', title: 'AWS Educate Introduction to Cloud 101', issuer: 'AWS', date: 'Apr 18, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-62', title: 'Google AI for Brainstorming and Planning', issuer: 'Coursera/Google', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-63', title: 'Google AI for Research and Insights', issuer: 'Coursera/Google', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-64', title: 'Generative AI: Prompt Engineering', issuer: 'Coursera', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev', 'PM-Product'] },
    { id: 'crd-65', title: 'Generative AI Essentials', issuer: 'Coursera', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-66', title: 'Artificial Intelligence Essentials V2', issuer: 'Coursera', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-67', title: 'Generative AI: Foundation Models and Platforms', issuer: 'Coursera', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-68', title: 'Enterprise Design Thinking Practitioner', issuer: 'IBM SkillsBuild', date: 'Apr 20, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product', 'BA'] },
    { id: 'crd-69', title: 'ISC2 Candidate', issuer: 'ISC2', date: 'Apr 30, 2027', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['QA', 'Dev'] },
    { id: 'crd-70', title: 'IT Fundamentals for Everyone', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-71', title: 'Google AI Essentials V1', issuer: 'Coursera/Google', date: 'May 4, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-72', title: 'Google AI for App Building', issuer: 'Coursera/Google', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-73', title: 'Google AI for Content Creation', issuer: 'Coursera/Google', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-74', title: 'Google AI for Data Analysis', issuer: 'Coursera/Google', date: 'May 1, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-75', title: 'Google AI for Writing and Communicating', issuer: 'Coursera/Google', date: 'May 4, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-76', title: 'Google AI Fundamentals', issuer: 'Coursera/Google', date: 'May 4, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-77', title: 'Front-end Development with React V2', issuer: 'Coursera', date: 'May 5, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-78', title: 'Intermediate Back-end Development: Node & MongoDB', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-79', title: 'Node and Express Essentials', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-80', title: 'Product Management Essentials', issuer: 'Coursera', date: 'Apr 30, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Product'] },
    { id: 'crd-81', title: 'Project Management Essentials', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['PM-Project'] },
    { id: 'crd-82', title: 'Python for Data Science and AI', issuer: 'Coursera', date: 'Apr 30, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev', 'BA'] },
    { id: 'crd-83', title: 'Software Engineering Essentials', issuer: 'Coursera', date: 'May 3, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-84', title: 'Generative AI Essentials for Software Developers V2', issuer: 'Coursera', date: 'May 7, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['Dev'] },
    { id: 'crd-85', title: 'Data Science Orientation', issuer: 'Coursera', date: 'May 13, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-86', title: 'Fundamentals of Business Analysis', issuer: 'Coursera', date: 'May 12, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-87', title: 'Data Science Methodology', issuer: 'Coursera', date: 'May 14, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-88', title: 'Excel Essentials for Data Analytics', issuer: 'Coursera', date: 'May 14, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] },
    { id: 'crd-89', title: 'Introduction to Data Science Specialization', issuer: 'Coursera', date: 'May 14, 2026', verifyUrl: 'https://www.credly.com/users/brian-s-mccarthy/badges', categories: ['BA'] }
  ],
  githubRepos: [
    { name: "Playwright-Automation-w-TypeScript", description: "Advanced automation framework using Playwright and TypeScript for enterprise testing.", technologies: ["Playwright", "TypeScript", "Node.js"], url: "https://github.com/BrianGator/Playwright-Automation-w-TypeScript" },
    { name: "Selenium-Java-Framework", description: "Production-ready Selenium framework with Page Object Model and TestNG.", technologies: ["Java", "Selenium", "Maven", "TestNG"], url: "https://github.com/BrianGator/Selenium-Java-Framework" },
    { name: "Azure-DevOps-Pipeline-Templates", description: "Reusable YAML templates for CI/CD pipelines in Azure DevOps.", technologies: ["YAML", "Azure DevOps", "CI/CD"], url: "https://github.com/BrianGator/Azure-DevOps-Pipeline-Templates" },
    { name: "React-Portfolio-Vite", description: "Modern portfolio built with React 18, Vite, and Tailwind CSS.", technologies: ["React", "Vite", "Tailwind CSS"], url: "https://github.com/BrianGator/Brian-McCarthy-Tampa-FL-Credentials-Website" },
    { name: "Python-AI-Tools", description: "Small utility scripts for prompt engineering and AI content validation.", technologies: ["Python", "OpenAI API", "HuggingFace"], url: "https://github.com/BrianGator/Python-AI-Tools" },
    { name: "ServiceNow-Auto-Test", description: "Custom scripts for automated testing within the ServiceNow platform.", technologies: ["JavaScript", "ServiceNow ATF"], url: "https://github.com/BrianGator/ServiceNow-Auto-Test" },
    { name: "Full-Stack-JS-Application", description: "Reference application demonstrating MERN stack capabilities.", technologies: ["MongoDB", "Express", "React", "Node.js"], url: "https://github.com/BrianGator/Full-Stack-JS-Application" }
  ]
};
