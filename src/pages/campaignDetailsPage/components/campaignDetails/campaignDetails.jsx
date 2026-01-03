import './campaignDetails.css'

const CampaignDetails = ({ campaign }) => {
  if (!campaign) return null

  return (
    <section className="campaign">
      <div>
        <img
          src={campaign.creative?.fileUrl}
          alt={campaign.app?.title || 'Campaign'}
          className="campaign-image"
        />
      </div>

      <div className="campaign-info">
        <div className="campaign-icon">
          <img
            src={campaign.app?.thumbnail}
            alt={campaign.app?.title || 'App'}
            className="campaign-icon"
          />
        </div>

        <div className="campaign-meta-left">
          <h2 className="campaign-title">{campaign.app?.title}</h2>
          <p className="campaign-category">{campaign.app?.storeCategory}</p>
        </div>

        <div className="campaign-meta-right"></div>
      </div>
    </section>
  )
}

export default CampaignDetails
