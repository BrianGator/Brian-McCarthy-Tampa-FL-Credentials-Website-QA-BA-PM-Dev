import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { INITIAL_DATA } from '../data';

export default function Page() {
  const allCreds = [...INITIAL_DATA.accredible, ...INITIAL_DATA.credly];
  const baCreds = allCreds.filter(c => c.categories.includes('BA'));
  
  return (
    <CategoryPage 
      title="Business Analyst Tech Certifications"
      subtitle="Strategic Analysis & Specification"
      description="Certifications relating to Business Analysis, Data Science orientation, and logical system architecture."
      credentials={baCreds}
      accentColor="border-violet-600"
    />
  );
}
