import './campaignDetails.css'

const CampaignDetails = ({ campaign }) => {
  return (
    <section className="campaign">
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

        <div className="campaign-meta-right"></div>
      </div>
    </section>
  )
}

export default CampaignDetails
