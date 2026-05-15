import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { INITIAL_DATA } from '../data';

export default function Page() {
  const allCreds = [...INITIAL_DATA.accredible, ...INITIAL_DATA.credly];
  const pmCreds = allCreds.filter(c => c.categories.includes('PM-Project'));
  
  return (
    <CategoryPage 
      title="Project Management Tech Certifications"
      subtitle="Agile Leadership & Delivery"
      description="Certifications relating to Project Management, Management, Azure DevOps, Scrum Master, and Agile methodologies."
      credentials={pmCreds}
      accentColor="border-amber-600"
    />
  );
}
