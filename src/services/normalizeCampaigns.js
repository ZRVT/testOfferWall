export const normalizeCampaign = (campaign) => {
  if (!campaign) return null

  // Safely access nested properties
  const creativePack = campaign.creative?.creativePacks?.[0]
  const creative = creativePack?.creatives?.[0]
  const app = campaign.app
  const campaign = campaign.campaign

  const events = (campaign.payoutEvents || []).map((event) => ({
    appEventId: event.campaignAppEventId,
    name: event.eventName,
    payout: Number(event.payoutAmount || 0),
    category: event.eventCategory,
    eventId: event.id,
  }))

  return {
    campaign: {
      id: campaign.campaignId,
      name: campaign.campaignName,
      description: campaign.campaignDescription,
      app: {
        id: app.id,
        title: app.title,
        storeCategory: app.storeCategory,
        thumbnail: app.thumbnail,
      },
      creative: {
        id: creative.id,
        fileUrl: creative.fileUrl,
      },
      clickUrl: campaign.tracking?.clickUrl,
      impressionsUrl: campaign.tracking?.impressionsUrl,
      events: events,
    },
  }
}

export const normalizeCampaigns = (campaigns) => {
  if (!Array.isArray(campaigns)) return []
  return campaigns.map(normalizeCampaign).filter(Boolean)
}
