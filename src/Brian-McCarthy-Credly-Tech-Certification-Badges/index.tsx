import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { INITIAL_DATA } from '../data';

export default function Page() {
  return (
    <CategoryPage 
      title="Credly Tech Certification Badges"
      subtitle="Official Digital Badges Portfolio"
      description="Unified collection of verifiable badges issued via Credly, representing professional competencies in software engineering and management."
      credentials={INITIAL_DATA.credly}
      accentColor="border-blue-600"
    />
  );
}
