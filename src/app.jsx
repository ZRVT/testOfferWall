import { Routes, Route } from 'react-router-dom'
import { CampaignsPage, CampaignDetailsPage, Registration } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CampaignsPage />} />
      <Route path="/campaign/:campaignId" element={<CampaignDetailsPage />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  )
}

export default App
