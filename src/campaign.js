import campaigns from './campaigns'

const CampaignView = () => {
  return (
    <section className="campaigns">
      {campaigns.map((campaign) => {
        const imgUrl =
          campaign.creative?.creativePacks?.[0]?.creatives?.[0]?.fileUrl
        const installUrl = campaign.tracking.clickUrl
        return (
          <article key={campaign.campaignId} className="campaign">
            <div className="campaign-image">
              {imgUrl && <img src={imgUrl} alt={campaign.app.title} />}
            </div>
            <h2>{campaign.app.title}</h2>
            <p>{campaign.app.rating}</p>
            <p>{campaign.app.storeCategory}</p>
            <button
              className="install-button"
              onClick={() => window.open(installUrl, '_blank')}
            >
              Download Now!
            </button>
          </article>
        )
      })}
    </section>
  )
}

export default CampaignView
