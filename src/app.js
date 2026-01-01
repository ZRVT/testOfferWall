import { Routes, Route } from 'react-router-dom'
import CampaignsPage from './pages/CampaignPage'
import CampaignDetailsPage from './pages/campaignDetailsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CampaignsPage />} />
      <Route path="/campaign/:campaignId" element={<CampaignDetailsPage />} />
    </Routes>
  )
}

export default App
