import CampaignView from './components/campaigns/campaign'
import { getCampaigns } from '../../services/getCampaigns'

const CampaignsPage = () => {
  const campaignsList = getCampaigns()
  return (
    <>
      <CampaignView campaignsList={campaignsList} />
    </>
  )
}

export default CampaignsPage
