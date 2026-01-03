import './campaign.css'
import moreInfoIcon from '../../images/more-info-icon.svg'
import DownloadButton from '../../../../components/downloadButton/DownloadButton'
import { useNavigate } from 'react-router-dom'
import { normalizeCampaigns } from '../../../../services/getCampaigns/normalizeCampaigns'

const CampaignView = ({ campaignsList }) => {
  const navigate = useNavigate()
  const normalizedCampaigns = normalizeCampaigns(campaignsList)
  return (
    <section className="campaigns">
      {normalizedCampaigns.map((campaign) => (
        <article key={campaign.id} className="campaign">
          <div>
            <img
              src={campaign.creative.fileUrl}
              alt={campaign.app.title}
              className="campaign-image"
            />
          </div>
          <div className="campaign-info">
            <div className="campaign-icon">
              <img
                src={campaign.app.thumbnail}
                alt={campaign.app.title}
                className="campaign-icon"
              />
            </div>
            <div className="campaign-meta-left">
              <h2 className="campaign-title">{campaign.app.title}</h2>
              <p className="campaign-category">{campaign.app.storeCategory}</p>
            </div>
            <div className="campaign-meta-right">
              <img
                className="campaign-details-icon"
                src={moreInfoIcon}
                alt="campaign details"
                onClick={() => navigate(`/campaign/${campaign.id}`)}
              />
            </div>
          </div>
          <DownloadButton campaign={campaign} />
        </article>
      ))}
    </section>
  )
}

export default CampaignView
