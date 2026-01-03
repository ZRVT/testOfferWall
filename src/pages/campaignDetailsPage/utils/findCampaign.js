export const getCampaignIdFromPath = (pathname = window.location.pathname) => {
  const idStr = pathname.split('campaign/').pop()
  const id = Number(idStr)
  return Number.isFinite(id) ? id : null
}

export const findCampaignById = (campaigns, campaignId) => {
  if (!Array.isArray(campaigns) || campaignId == null) return null
  return (
    campaigns.find((c) => Number(c.campaignId) === Number(campaignId)) ?? null
  )
}

export const getCampaignFromPath = (campaigns, pathname) => {
  const campaignId = getCampaignIdFromPath(pathname)
  const campaign = findCampaignById(campaigns, campaignId)
  return { campaignId, campaign }
}

export default getCampaignFromPath
