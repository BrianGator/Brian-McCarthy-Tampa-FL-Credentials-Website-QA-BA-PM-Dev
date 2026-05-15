import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { INITIAL_DATA } from '../data';

export default function Page() {
  const allCreds = [...INITIAL_DATA.accredible, ...INITIAL_DATA.credly];
  const devCreds = allCreds.filter(c => c.categories.includes('Dev'));
  
  return (
    <CategoryPage 
      title="Software Developer Tech Certifications"
      subtitle="Programming & Engineering Mastery"
      description="Certifications relating to Programming in C#, ASP.NET, Java, JavaScript, Python, and SQL."
      credentials={devCreds}
      accentColor="border-blue-500"
    />
  );
}
