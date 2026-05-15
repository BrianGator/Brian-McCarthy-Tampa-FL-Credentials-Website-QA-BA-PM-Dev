import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Credential } from '../data';

export const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-3 uppercase tracking-wider">
    <Icon className="w-4 h-4 text-blue-600" />
    <h2 className="text-xs font-bold text-slate-400">{title}</h2>
  </div>
);

export const CredentialCard = ({ cred }: any) => (
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

export const SocialLink = ({ href, icon: Icon, label }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight group">
    <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
    <span>{label}</span>
  </a>
);
