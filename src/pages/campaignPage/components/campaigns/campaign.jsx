import './campaign.css'
import moreInfoIcon from '../../images/more-info-icon.svg'
import DownloadButton from '../../../../components/downloadButton/DownloadButton'
import { useNavigate } from 'react-router-dom'

const CampaignView = ({ campaignsList }) => {
  const navigate = useNavigate()
  return (
    <section className="campaigns">
      {campaignsList.map((campaign) => (
        <article key={campaign.campaignId} className="campaign">
          <div>
            <img
              src={campaign.creative?.creativePacks[0]?.creatives[0]?.fileUrl}
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
                onClick={() => navigate(`/campaign/${campaign.campaignId}`)}
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
