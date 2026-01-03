import CampaignView from './components/campaigns/campaign'
import { getCampaigns } from '../../services/getCampaigns'
import { useEffect, useState } from 'react'

const CampaignsPage = () => {
  const [campaignsList, setCampaignsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const data = await getCampaigns()
        setCampaignsList(data)
      } catch (err) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    loadCampaigns()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading campaigns</p>

  return <CampaignView campaignsList={campaignsList} />
}

export default CampaignsPage
