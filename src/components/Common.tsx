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

export const PlainTextCredential = ({ cred, ...props }: { cred: Credential } & React.HTMLAttributes<HTMLAnchorElement>) => (
  <a 
    href={cred.verifyUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    {...props}
    className="block p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors last:border-0 group"
  >
    <div className="flex flex-col gap-1">
      <h3 className="font-bold text-[14px] text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
        {cred.title}
      </h3>
      <div className="flex flex-wrap items-center gap-2 text-[12px]">
        <span className="text-slate-600 font-medium">{cred.issuer}</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-400 italic">Issued {cred.date}</span>
      </div>
    </div>
  </a>
);

export const BulletedCredential = ({ cred, ...props }: { cred: Credential } & React.HTMLAttributes<HTMLLIElement>) => (
  <li {...props} className="mb-4 list-disc ml-4 text-slate-700">
    <div className="flex flex-col">
      <h3 className="font-bold text-[14px] text-slate-800 leading-tight">
        {cred.title}
      </h3>
      <div className="flex flex-wrap items-center gap-2 text-[12px] mt-1">
        <span className="text-slate-600 font-medium">{cred.issuer}</span>
        <span className="text-slate-300">|</span>
        <span className="text-slate-400">{cred.date}</span>
        <a 
          href={cred.verifyUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline inline-flex items-center gap-0.5"
        >
          Verify <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  </li>
);

export const SocialLink = ({ href, icon: Icon, label }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[11px] font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-tight group">
    <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
    <span>{label}</span>
  </a>
);
