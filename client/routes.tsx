import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'

// Home
import HomePage from './pages/HomePage.tsx'

// All Charities
import Charities from './pages/Charities.tsx'

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
// import CharityForm from './components/charity_admin_portal/charity-admin-registration/BasicDetailsRegistration.tsx'
import CharityAdminEditItem from './components/charity_admin_portal/charity-admin-manage-item/CharityAdminEditItem.tsx'
import CharityAdminAddItem from './components/charity_admin_portal/charity-admin-manage-item/CharityAdminAddItem.tsx'
import CharityAdminRegister from './components/charity_admin_portal/charity-admin-registers/CharityAdminRegister.tsx'
import CharityAdminManageRegisters from './components/charity_admin_portal/CharityAdminManageRegisters.tsx'
import CharityAdminEditRegister from './components/charity_admin_portal/charity-admin-manage-registers/CharityAdminEditRegister.tsx'
import CharityAdminAddRegister from './components/charity_admin_portal/charity-admin-manage-registers/CharityAdminAddRegister.tsx'
import CharityRegistration from './components/charity_admin_portal/charity-admin-registration/CharityRegistration.tsx'

// Donor Admin Portal
import DonorAdminPortal from './pages/DonorAdminPortal.tsx'
import DonorAdminDashboard from './components/donor_admin_portal/DonorAdminDashboard.tsx'
import DonorAdminHistoryContainer from './components/donor_admin_portal/DonorAdminHistoryContainer.tsx'
import DonorManageFollowed from './components/donor_admin_portal/DonorManageFollowed.tsx'
import DonorRegistration from './components/donor_admin_portal/DonorRegistration.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route path="registration" element={<CharityRegistration />} />
    <Route path="charities" element={<Charities />} />
    <Route path=":charitySlug" element={<CharityLandingPage />}>
      <Route index element={<About />} />
      <Route path="posts" element={<OurImpact />} />
      <Route path="donate" element={<Registries />}>
        <Route path=":registerid" element={<Registry />} />
      </Route>
      <Route path="donors" element={<OurDonors />} />
      <Route path="contact" element={<CharityContact />} />
    </Route>
    <Route path=":charitySlug/admin" element={<CharityAdminPortal />}>
      <Route index element={<AdminHome />} />
      <Route path="dashboard" element={<AdminDashboard />} />

      <Route path="manageregisters" element={<CharityAdminManageRegisters />} />
      <Route path="manageregisters/add" element={<CharityAdminAddRegister />} />
      <Route
        path="manageregisters/edit/:registerid"
        element={<CharityAdminEditRegister />}
      />
      <Route path="registers" element={<CharityAdminRegisters />}>
        <Route path=":registerid" element={<CharityAdminRegister />} />
        <Route path=":registerid/items/add" element={<CharityAdminAddItem />} />
        <Route
          path=":registerid/items/edit/:itemid"
          element={<CharityAdminEditItem />}
        />
      </Route>
    </Route>
    <Route path="donor" element={<DonorAdminPortal />}>
      <Route index element={<DonorAdminDashboard />} />
      <Route path="registration-admin" element={<DonorRegistration />} />
      <Route path="donation-history" element={<DonorAdminHistoryContainer />} />
      <Route path="followed-charities" element={<DonorManageFollowed />} />
    </Route>
  </Route>,
)

export default routes
