import React from 'react';
import { Award, ExternalLink, RefreshCw, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { INITIAL_DATA, Credential } from '../data';

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  credentials: Credential[];
  accentColor: string;
}

export default function CategoryPage({ title, subtitle, description, credentials, accentColor }: CategoryPageProps) {
  const [refreshing, setRefreshing] = React.useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise(r => setTimeout(r, 800));
    setRefreshing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className={`bg-white border-b-4 ${accentColor} py-12 md:py-20 px-6 md:px-12`}>
        <div className="w-full max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { name: 'Credly', path: '/Brian-McCarthy-Credly-Tech-Certification-Badges' },
              { name: 'Accredible', path: '/Brian-McCarthy-Accredible-Tech-Certification-Certificates' },
              { name: 'QA', path: '/Brian-McCarthy-QA-Tech-Certifications' },
              { name: 'Project Mgmt', path: '/Brian-McCarthy-Project-Management-Tech-Certifications' },
              { name: 'Product Mgmt', path: '/Brian-McCarthy-Product-Management-Tech-Certifications' },
              { name: 'Business Analyst', path: '/Brian-McCarthy-Business-Analyst-Tech-Certifications' },
              { name: 'Software Dev', path: '/Brian-McCarthy-Software-Developer-Tech-Certifications' },
            ].map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-500 rounded-sm hover:bg-slate-900 hover:text-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4 uppercase">
                {title}
              </h1>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6">
                {subtitle}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-medium border-l-2 border-slate-200 pl-6 italic">
                {description}
              </p>
            </div>
            <button 
              onClick={handleRefresh}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all text-white ${accentColor.replace('border-', 'bg-')} hover:opacity-90 shadow-xl`}
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh Data
            </button>
          </div>
        </div>
      </header>

      <main className="py-16 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((cred) => (
            <motion.a 
              href={cred.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={cred.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 mb-6 flex items-center justify-center p-4 group-hover:scale-105 transition-transform">
                <img src={cred.image} alt={cred.title} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-extrabold text-[12px] text-slate-900 leading-tight mb-2 uppercase tracking-tight line-clamp-3">
                {cred.title}
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                {cred.issuer}
              </p>
              <div className="mt-auto pt-4 border-t border-slate-50 w-full">
                <p className="text-[10px] font-black text-slate-200 uppercase tracking-widest">
                  Issued: {cred.date}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        
        {credentials.length === 0 && (
          <div className="p-24 text-center">
            <Award className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">No certificates found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
}
