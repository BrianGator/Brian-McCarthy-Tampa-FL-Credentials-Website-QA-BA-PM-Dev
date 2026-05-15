import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { INITIAL_DATA } from '../data';

export default function Page() {
  const allCreds = [...INITIAL_DATA.accredible, ...INITIAL_DATA.credly];
  const qaCreds = allCreds.filter(c => c.categories.includes('QA'));
  
  return (
    <CategoryPage 
      title="QA Tech Certifications"
      subtitle="Software Testing & Quality Assurance Expertise"
      description="Comprehensive collection of certifications relating to QA, QA Automation, and Software Testing, including CSTP-A and specialized automation frameworks."
      credentials={qaCreds}
      accentColor="border-emerald-600"
    />
  );
}
