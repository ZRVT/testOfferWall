import defaultNativeImg from '../../images/defaultNativeImg.png'
import defaultAppImg from '../../images/defaultAppImg.png'
import { normalizeEvents } from './normalizeEvents'

export const normalizeCampaign = (raw) => {
  if (!raw) return null

  const c = raw.campaign ?? raw
  const app = c.app ?? {}

  const creativeObj = c.creative?.creativePacks?.[0]?.creatives?.[0] ?? {
    id: null,
    fileUrl: defaultNativeImg,
  }

  return {
    id: c.campaignId ?? null,
    campaignId: c.campaignId ?? null,
    campaignName: c.campaignName ?? '',

    app: {
      id: app.id ?? null,
      title: app.title ?? '',
      storeCategory: app.storeCategory ?? '',
      thumbnail: app.icon || app.thumbnail || defaultAppImg,
    },

    tracking: {
      clickUrl: c.tracking?.clickUrl ?? '',
      impressionUrl: c.tracking?.impressionUrl ?? '',
    },

    creative: {
      id: creativeObj.id ?? null,
      fileUrl: creativeObj.fileUrl ?? defaultNativeImg,
    },
    events: normalizeEvents(c.payoutEvents),
  }
}

export const normalizeCampaigns = (arr) =>
  Array.isArray(arr) ? arr.map(normalizeCampaign).filter(Boolean) : []
