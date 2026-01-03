import CampaignView from './components/campaigns/campaign'
import { getCampaigns } from '../../services/getCampaigns'
import { useEffect, useState } from 'react'
import Loading from './components/loading/loading'
import Error from './components/error/error'
import NoCampaigns from './components/noCampaigns/noCampaigns'

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

  if (isLoading) return <Loading />
  if (campaignsList.length === 0) return <NoCampaigns />
  if (isError) return <Error />

  return <CampaignView campaignsList={campaignsList} />
}

export default CampaignsPage
