import CampaignDetails from './components/campaignDetails/campaignDetails'
import { getCampaignFromPath } from './utils/findCampaign'
import { getCampaigns } from '../../services/getCampaigns'
import CampaignEvents from './components/campaignEvents/campaignEvents'
import CampaignBonusEvents from './components/campaignBonusEvents/campaignBonusEvents'
import DownloadButton from '../../components/downloadButton/DownloadButton'
import './styles/campaignDetailsPage.css'

const CampaignDetailsPage = () => {
  const { campaign } = getCampaignFromPath(getCampaigns())
  if (!campaign) return <p>Campaign not found</p>

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
