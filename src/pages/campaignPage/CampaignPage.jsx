import { CampaignView, NoCampaigns } from './components'
import { Error, Loading } from '../../components'
import { useCampaigns } from '../../hooks/useCampaigns'

// need to update the to use the hoosk to centralize this logic and make it reusable
const CampaignsPage = () => {
  const { campaigns, loading, error } = useCampaigns()

  if (loading) return <Loading />
  if (campaigns.length === 0) return <NoCampaigns />
  if (error) return <Error />

  return <CampaignView campaignsList={campaigns} />
}

export default CampaignsPage
