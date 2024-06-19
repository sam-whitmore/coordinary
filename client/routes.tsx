import { createRoutesFromElements, Route } from 'react-router-dom'

import App from './components/App.tsx'
import HomePage from './pages/HomePage.tsx'
import CharityLandingPage from './pages/CharityLandingPage.tsx'
import CharityAdminPortal from './pages/CharityAdminPortal.tsx'
import OurWork from './components/charity_landing_page/OurWork.tsx'
import AboutUs from './components/charity_landing_page/AboutUs.tsx'
import Registries from './components/charity_landing_page/Registries.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<HomePage />} />
    <Route path="donate" element={<CharityLandingPage />}>
      <Route index element={<OurWork />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="registries" element={<Registries />} />
    </Route>
    <Route path="/:charity/admin" element={<CharityAdminPortal />} />
  </Route>,
)

export default routes
