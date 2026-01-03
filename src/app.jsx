import { Routes, Route } from 'react-router-dom'
import { CampaignsPage, CampaignDetailsPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CampaignsPage />} />
      <Route path="/campaign/:campaignId" element={<CampaignDetailsPage />} />
    </Routes>
  )
}

export default App
