import React, { useState, useEffect } from 'react';
import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams
} from 'react-router-dom';
import { 
  Linkedin, 
  ExternalLink, 
  Github, 
  Mail, 
  Award, 
  RefreshCw,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Data and Components
import { INITIAL_DATA, PortfolioData, Credential } from './data';
import Home, { AccredibleSection, CredlySection, GitHubSection, RoleHighlights } from './components/Home';
import CredlyPage from './Brian-McCarthy-Credly-Tech-Certification-Badges';
import AccrediblePage from './Brian-McCarthy-Accredible-Tech-Certification-Certificates';
import QAPage from './Brian-McCarthy-QA-Tech-Certifications';
import ProjectManagementPage from './Brian-McCarthy-Project-Management-Tech-Certifications';
import ProductManagementPage from './Brian-McCarthy-Product-Management-Tech-Certifications';
import BusinessAnalystPage from './Brian-McCarthy-Business-Analyst-Tech-Certifications';
import SoftwareDeveloperPage from './Brian-McCarthy-Software-Developer-Tech-Certifications';
import { SocialLink } from './components/Common';

// --- Header Component ---
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
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">Sr. QA • BA • PM Engineer</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
           <Link to="/Brian-McCarthy-Accredible-Tech-Certification-Certificates" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Accredible</Link>
           <Link to="/Brian-McCarthy-Credly-Tech-Certification-Badges" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors">Credly</Link>
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

// --- Credential Detail View ---
const CredentialDetail = ({ data }: { data: PortfolioData }) => {
  const { id } = useParams<{ id: string }>();
  const credentials = [...data.accredible, ...data.credly];
  const cred = credentials.find(c => c.id === id);

  useEffect(() => {
    if (cred) document.title = `${cred.title}-Details-Brian McCarthy`;
    return () => { document.title = "Brian McCarthy - Technical Portfolio"; };
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
             <a href={cred.verifyUrl} target="_blank" rel="noopener noreferrer" className="w-full lg:w-2/5 aspect-square bg-slate-50 rounded-3xl flex items-center justify-center p-12 border border-slate-100 shadow-2xl relative group overflow-hidden">
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
                         <ShieldCheck className="w-3.5 h-3.5" /> Verified Credential
                      </span>
                   </div>
                   <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">{cred.title}</h1>
                   <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
                      <div><p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Issued By</p><p className="text-sm font-bold text-slate-800 uppercase tracking-tight">{cred.issuer}</p></div>
                      <div><p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Issued Date</p><p className="text-sm font-bold text-slate-800 uppercase tracking-tight">{cred.date}</p></div>
                   </div>
                </div>
                <div className="space-y-12">
                   <p className="text-slate-500 text-lg leading-relaxed font-medium italic border-l-4 border-blue-500 pl-8">{cred.description}</p>
                   <div className="flex flex-col sm:flex-row gap-4">
                      <a href={cred.verifyUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-5 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                         <Award className="w-5 h-5" /> Verify on {cred.issuer} <ExternalLink className="w-4 h-4 opacity-50" />
                      </a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default function App() {
  const [data] = useState<PortfolioData>(INITIAL_DATA);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(r => setTimeout(r, 800));
    setRefreshing(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          {/* Main Layout Wrap */}
          <Route path="*" element={
            <>
              <Header handleRefresh={handleRefresh} refreshing={refreshing} />
              <main className="w-full">
                <Routes>
                  <Route path="/" element={<Home data={data} />} />
                  <Route path="/Brian-McCarthy-Credly-Tech-Certification-Badges" element={<CredlyPage />} />
                  <Route path="/Brian-McCarthy-Accredible-Tech-Certification-Certificates" element={<AccrediblePage />} />
                  <Route path="/Brian-McCarthy-QA-Tech-Certifications" element={<QAPage />} />
                  <Route path="/Brian-McCarthy-Project-Management-Tech-Certifications" element={<ProjectManagementPage />} />
                  <Route path="/Brian-McCarthy-Product-Management-Tech-Certifications" element={<ProductManagementPage />} />
                  <Route path="/Brian-McCarthy-Business-Analyst-Tech-Certifications" element={<BusinessAnalystPage />} />
                  <Route path="/Brian-McCarthy-Software-Developer-Tech-Certifications" element={<SoftwareDeveloperPage />} />
                  <Route path="/accredible-credentials" element={<div className="bg-white p-12 md:p-24"><AccredibleSection data={data} /></div>} />
                  <Route path="/credly-credentials" element={<div className="bg-white p-12 md:p-24"><CredlySection data={data} /></div>} />
                  <Route path="/github-portfolio" element={<div className="bg-white p-12 md:p-24"><GitHubSection data={data} /></div>} />
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
                      CSTP-A certified professional with over 14 years of expertise in software quality assurance and agile delivery.
                    </p>
                    <div className="flex gap-4">
                      <SocialLink href="https://www.linkedin.com/in/briansmccarthy/" icon={Linkedin} label="LinkedIn" />
                      <SocialLink href="https://github.com/BrianGator" icon={Github} label="GitHub" />
                      <SocialLink href="mailto:BrianSMc@gmail.com" icon={Mail} label="Email" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-8">Special Directories</h4>
                    <ul className="space-y-4">
                      <li><Link to="/Brian-McCarthy-Accredible-Tech-Certification-Certificates" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight">Accredible Landing</Link></li>
                      <li><Link to="/Brian-McCarthy-Credly-Tech-Certification-Badges" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight">Credly Landing</Link></li>
                      <li><Link to="/Brian-McCarthy-QA-Tech-Certifications" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight">QA Certifications</Link></li>
                      <li><Link to="/Brian-McCarthy-Project-Management-Tech-Certifications" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight">PM Certifications</Link></li>
                      <li><Link to="/Brian-McCarthy-Product-Management-Tech-Certifications" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight">Product Certifications</Link></li>
                      <li><Link to="/Brian-McCarthy-Business-Analyst-Tech-Certifications" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight">BA Certifications</Link></li>
                      <li><Link to="/Brian-McCarthy-Software-Developer-Tech-Certifications" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight">Developer Certifications</Link></li>
                      <li><Link to="/github-portfolio" className="text-[11px] font-bold text-slate-600 hover:text-blue-600 uppercase tracking-tight text-slate-400">GitHub Repos</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-8">Metadata</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4 leading-relaxed">Tampa, FL • US Citizen • Senior QA Automation Engineer</p>
                    <div className="text-[10px] font-mono text-slate-300">Authored by Brian McCarthy</div>
                  </div>
                </div>
              </footer>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
