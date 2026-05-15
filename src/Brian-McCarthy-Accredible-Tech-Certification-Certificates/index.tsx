import React from 'react';
import CategoryPage from '../components/CategoryPage';
import { INITIAL_DATA } from '../data';

export default function Page() {
  return (
    <CategoryPage 
      title="Accredible Tech Certification Certificates"
      subtitle="Digital Certificate Wallet"
      description="Professional technical certificates managed through the Accredible network, encompassing deep specializations and academic excellence."
      credentials={INITIAL_DATA.accredible}
      accentColor="border-indigo-600"
    />
  );
}
