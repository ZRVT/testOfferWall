import { useEffect, useState } from 'react'

import {
  CampaignDetails,
  CampaignEvents,
  CampaignBonusEvents,
  Loading,
  Error,
  NoCampaigns,
} from './index'

import { getCampaignFromPath } from './utils/findCampaign'
import { getCampaigns } from '../../services/getCampaigns'
import DownloadButton from '../../components/downloadButton/DownloadButton'

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
        setCampaign(campaign ?? null)
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
