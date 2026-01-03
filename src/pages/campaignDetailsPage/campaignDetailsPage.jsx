import { useEffect, useState } from 'react'

// Page import components
import {
  CampaignDetails,
  CampaignEvents,
  CampaignBonusEvents,
  NoCampaigns,
} from './components/index'
// global component imports
import { DownloadButton, Error, Loading } from '../../components'

// utils / services imports
import { getCampaignFromPath } from './utils/'
import { getCampaigns } from '../../services'
import { normalizeCampaign } from '../../services/getCampaigns/normalizeCampaigns'

// styles imports
import './styles/campaignDetailsPage.css'

const CampaignDetailsPage = () => {
  const [campaign, setCampaign] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const campaigns = await getCampaigns()
        const { campaign } = getCampaignFromPath(campaigns)
        setCampaign(normalizeCampaign(campaign) ?? null)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    load()
  }, [])

  if (isLoading) return <Loading />
  if (isError) return <Error />
  if (!campaign) return <NoCampaigns />

  return (
    <section className="campaign-details-container">
      <section className="campaign-details-content">
        <CampaignDetails campaign={campaign} />
        <CampaignEvents campaign={campaign} />
        <CampaignBonusEvents campaign={campaign} />
        <DownloadButton campaign={campaign} />
      </section>
    </section>
  )
}

export default CampaignDetailsPage
