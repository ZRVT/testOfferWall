import campaigns from './campaigns'
import { useState } from 'react'
import clickLogic from './clickLogic'

const CampaignView = () => {
  const [campaignsList] = useState(campaigns)
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
            <div className="campaign-meta">
              <h2 className="campaign-title">{campaign.app.title}</h2>
              <p className="campaign-category">{campaign.app.storeCategory}</p>
            </div>
          </div>
          <button
            className="install-button"
            onClick={() => clickLogic(campaign.tracking.clickUrl)}
          >
            Install
          </button>
        </article>
      ))}
    </section>
  )
}

export default CampaignView
