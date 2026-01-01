import React from 'react'
import campaigns from '../../testData.js'
import DownloadButton from '../downloadButton/DownloadButton.js'
import './campaignDetails.css'

const campaignDetails = () => {
  const campaignId = Number(window.location.pathname.split('campaign/').pop())
  const campaign = campaigns.find(
    (campaign) => campaign.campaignId === campaignId
  )
  console.log(campaign)
  if (!campaign) {
    return <p>Campaign not found</p>
  }
  return (
    <section className="campaign-details-container">
      <section key={campaign.campaignId} className="campaign">
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
        <div>
          <h1>CAMPAIGN DETAILS</h1>
          <p>{campaign.app.description}</p>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            pariatur fugit sit adipisci sunt quia ipsum culpa cum quam illo.
            Omnis veniam quo dolorum excepturi, quisquam architecto eligendi
            maxime totam?
          </p>
        </div>
        <DownloadButton campaign={campaign} />
      </section>
    </section>
  )
}
export default campaignDetails
