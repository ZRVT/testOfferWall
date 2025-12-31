import campaigns from './campaigns'
import { useState } from 'react'
import clickLogic from './clickLogic'

const NewCampaigns = () => {
  const [campaignsList] = useState(campaigns)
  return (
    <section className="campaigns">
      {campaignsList.map((campaign) => (
        <article key={campaign.campaignId} className="campaign">
          <img
            src={campaign.creative.creativePacks[0].creatives[0].fileUrl}
            alt={campaign.app.title}
          />
          <img src={campaign.app.thumbnail} alt={campaign.app.title} />
          <h4>{campaign.app.title}</h4>
          <p>{campaign.app.rating}</p>
          <p>{campaign.app.storeCategory}</p>
          <button onClick={() => clickLogic(campaign.tracking.clickUrl)}>
            Install
          </button>
        </article>
      ))}
    </section>
  )
}
export default NewCampaigns
