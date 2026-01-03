import { clickLogic } from '../../utils/index'
import { normalizeCampaign } from '../../services/getCampaigns/normalizeCampaigns'
import './DownloadButton.css'

const DownloadButton = ({ campaign }) => {
  const campaignDetails = normalizeCampaign(campaign)
  return (
    <button
      className="download-button"
      onClick={() => clickLogic(campaignDetails.tracking.clickUrl)}
    >
      Download: {campaignDetails.app.title} now!
    </button>
  )
}
export default DownloadButton
