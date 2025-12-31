import { Routes, Route } from 'react-router-dom'
import CampaignsPage from './pages/CampaignPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CampaignsPage />} />
    </Routes>
  )
}

export default App
