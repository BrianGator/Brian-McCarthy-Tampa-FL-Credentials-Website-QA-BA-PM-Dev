import React from 'react';
import { 
  Linkedin, 
  ExternalLink, 
  Github, 
  Mail, 
  Award, 
  Briefcase, 
  Code2, 
  LineChart, 
  Settings,
  Target,
  FlaskConical,
  MapPin
} from 'lucide-react';
import { SectionHeader, PlainTextCredential, BulletedCredential, SocialLink } from './Common';
import { PortfolioData } from '../data';

export const RoleHighlights = () => (
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

export const AccredibleSection = ({ data }: { data: PortfolioData }) => (
  <section className="bg-white p-6 md:p-12 border-b border-slate-200 w-full">
    <div className="w-full max-w-none">
      <SectionHeader title="Accredible Credentials" icon={Award} />
      <div className="w-full">
        <ul className="space-y-1">
          {data.accredible.map((cred) => (
             <BulletedCredential key={cred.id} cred={cred} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export const CredlySection = ({ data }: { data: PortfolioData }) => (
  <section className="bg-white p-6 md:p-12 border-b border-slate-200 w-full">
    <div className="w-full max-w-none">
      <SectionHeader title="Credly Credentials" icon={Award} />
      <div className="w-full">
        <div className="flex flex-col">
          {data.credly.map((cred) => (
            <PlainTextCredential key={cred.id} cred={cred} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const GitHubSection = ({ data }: { data: PortfolioData }) => (
  <section className="bg-white p-12 md:p-24 border-b border-slate-200 w-full">
    <SectionHeader title="GitHub Portfolio Repositories" icon={Github} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {data.githubRepos.map((repo, i) => (
        <div key={i} className="group p-8 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white hover:border-slate-800 transition-all shadow-sm">
          <div className="flex justify-between items-start mb-6">
             <h3 className="font-bold text-[14px] text-slate-800 uppercase tracking-tight leading-none">{repo.name}</h3>
             <a href={repo.url} target="_blank" rel="noreferrer"><ExternalLink className="w-4 h-4 text-slate-300 hover:text-slate-900 transition-colors" /></a>
          </div>
          <p className="text-[12px] text-slate-500 mb-8 leading-relaxed font-medium">{repo.description}</p>
          <div className="flex flex-wrap gap-2">
            {repo.technologies.map((t) => (
              <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-slate-100 rounded text-slate-400">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function Home({ data }: { data: PortfolioData }) {
  return (
    <div className="space-y-0">
      <section className="bg-white border-b border-slate-200">
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

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2 leading-none">Brian Scott McCarthy</h2>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6 flex items-center justify-center md:justify-start gap-2">
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
}
