export const normalizeEvent = (event) => {
  if (!event) return null

  return {
    id: event.campaignAppEventId ?? event.id ?? null,
    appEventId: event.campaignAppEventId ?? null,
    name: event.eventName ?? '',
    category: event.eventCategory ?? '',
    payout: Number(event.payoutAmount.toFixed(2)) ?? 0,
    raw: event,
  }
}

export const normalizeEvents = (events) => {
  if (!Array.isArray(events)) return []
  return events.map(normalizeEvent).filter(Boolean)
}
