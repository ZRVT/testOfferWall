import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/mainLayout'
import { CampaignsPage, CampaignDetailsPage, Registration } from './pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<CampaignsPage />} />
        <Route path="/campaign/:campaignId" element={<CampaignDetailsPage />} />
        <Route path="/register" element={<Registration />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
