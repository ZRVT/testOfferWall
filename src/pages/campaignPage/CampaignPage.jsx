import { useEffect, useState } from 'react'
import { getCampaigns } from '../../services/getCampaigns'
import { CampaignView, Loading, Error, NoCampaigns } from './index'

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
