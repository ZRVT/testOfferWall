import { Routes, Route } from 'react-router-dom'
import CampaignsPage from './pages/CampaignPage'
import CampaignDetailsPage from './pages/CampaignDetailsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CampaignsPage />} />
      <Route path="/campaigns/:campaignId" element={<CampaignDetailsPage />} />
    </Routes>
  )
}

export default App
