import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'

// Home
import HomePage from './pages/HomePage.tsx'

// Charity Landing Page
import CharityLandingPage from './pages/CharityLandingPage.tsx'
import OurImpact from './components/charity_landing_page/OurImpact.tsx'
import About from './components/charity_landing_page/About.tsx'
import Registries from './components/charity_landing_page/Registries.tsx'
/**/ import Registry from './components/charity_landing_page/registries/Registry.tsx'
/**/ // will add more imports here if RegistryNav.tsx becomes relevant
import CharityContact from './components/charity_landing_page/CharityContact.tsx'
import OurDonors from './components/charity_landing_page/OurDonors.tsx'

// Charity Admin Portal
import CharityAdminPortal from './pages/CharityAdminPortal.tsx'
import AdminHome from './components/charity_admin_portal/AdminHome.tsx'
import AdminDashboard from './components/charity_admin_portal/AdminDashboard.tsx'
import CharityAdminRegisters from './components/charity_admin_portal/CharityAdminRegisters.tsx'

// Donor Admin Portal
import DonorAdminPortal from './pages/DonorAdminPortal.tsx'
import DonorAdminDashboard from './components/donor_admin_portal/DonorAdminDashboard.tsx'
import DonorAdminHistoryContainer from './components/donor_admin_portal/DonorAdminHistoryContainer.tsx'
import DonorManageFollowed from './components/donor_admin_portal/DonorManageFollowed.tsx'
import DonorRegistration from './components/donor_admin_portal/DonorRegistration.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route path=":charitySlug" element={<CharityLandingPage />}>
      <Route index element={<About />} />
      <Route path="posts" element={<OurImpact />} />
      <Route path="donate" element={<Registries />}>
        <Route index element={<Registry />} />
      </Route>
      <Route path="donors" element={<OurDonors />} />
      <Route path="contact" element={<CharityContact />} />
    </Route>
    <Route path=":charitySlug/admin" element={<CharityAdminPortal />}>
      <Route index element={<AdminHome />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="registers" element={<CharityAdminRegisters />} />
    </Route>
    <Route path="donor/admin" element={<DonorAdminPortal />}>
      <Route index element={<DonorAdminDashboard />} />
      <Route path="registration-admin" element={<DonorRegistration />} />
      <Route path="donation-history" element={<DonorAdminHistoryContainer />} />
      <Route path="followed-charities" element={<DonorManageFollowed />} />
    </Route>
  </Route>,
)

export default routes
