import { useEffect, useState } from 'react'
import { getCampaigns } from '../services'

export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let active = true

    const load = async () => {
      try {
        const data = await getCampaigns()
        if (active) setCampaigns(data)
      } catch {
        if (active) setError(true)
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [])

  return { campaigns, loading, error }
}
