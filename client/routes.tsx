import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'

// Home
import HomePage from './pages/HomePage.tsx'

// Charity Landing Page
import CharityLandingPage from './pages/CharityLandingPage.tsx'
import CharityWall from './components/charity_landing_page/CharityWall.tsx'
import About from './components/charity_landing_page/About.tsx'
import Registries from './components/charity_landing_page/Registries.tsx'
/**/ import Registry from './components/charity_landing_page/registries/Registry.tsx'
/**/ // will add more imports here if RegistryNav.tsx becomes relevant
import CharityPlayground from './components/charity_landing_page/CharityPlayground.tsx'
import CharitySandbox from './components/charity_landing_page/CharitySandbox.tsx'
import CharityContact from './components/charity_landing_page/CharityContact.tsx'

// Charity Admin Portal
import CharityAdminPortal from './pages/CharityAdminPortal.tsx'
import AdminHome from './components/charity_admin_portal/AdminHome.tsx'
import AdminDashboard from './components/charity_admin_portal/AdminDashboard.tsx'
import AdminPlayground from './components/charity_admin_portal/AdminPlayground.tsx'
import AdminSandbox from './components/charity_admin_portal/AdminSandbox.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route path="charity-name" element={<CharityLandingPage />}>
      <Route index element={<About />} />
      <Route path="posts" element={<CharityWall />} />
      <Route path="donate" element={<Registries />}>
        <Route index element={<Registry />} />
      </Route>
      <Route path="playground" element={<CharityPlayground />} />
      <Route path="sandbox" element={<CharitySandbox />} />
      <Route path="contact" element={<CharityContact />} />
    </Route>
    <Route path="admin" element={<CharityAdminPortal />}>
      <Route index element={<AdminHome />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="playground" element={<AdminPlayground />} />
      <Route path="sandbox" element={<AdminSandbox />} />
    </Route>
  </Route>,
)

export default routes
