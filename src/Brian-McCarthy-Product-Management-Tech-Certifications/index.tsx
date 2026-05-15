import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { INITIAL_DATA } from '../data';

export default function Page() {
  const allCreds = [...INITIAL_DATA.accredible, ...INITIAL_DATA.credly];
  const prodCreds = allCreds.filter(c => c.categories.includes('PM-Product'));
  
  return (
    <CategoryPage 
      title="Product Management Tech Certifications"
      subtitle="Vision, Strategy & Innovation"
      description="Certifications focused on Product Management, including AI Product Management and product lifecycle excellence."
      credentials={prodCreds}
      accentColor="border-fuchsia-600"
    />
  );
}
