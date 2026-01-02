import { Routes, Route } from 'react-router-dom'
import CampaignsPage from './pages/campaignPage/CampaignPage'
import CampaignDetailsPage from './pages/campaignDetailsPage/campaignDetailsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CampaignsPage />} />
      <Route path="/campaign/:campaignId" element={<CampaignDetailsPage />} />
    </Routes>
  )
}

export default App
