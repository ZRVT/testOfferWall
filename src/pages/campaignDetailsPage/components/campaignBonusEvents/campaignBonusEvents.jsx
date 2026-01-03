import './campaignBonusEvents.css'

const CampaignBonusEvents = ({ campaign }) => {
  const events = campaign?.events ?? []

  const bonusEvents = events
    .filter((e) => e.payout > 0)
    .filter((e) => e.name !== 'Install')
    .filter((e) => e.category === 'Purchase')

  if (bonusEvents.length === 0) return null

  return (
    <section className="campaign-bonus-events-section">
      <h2 className="campaign-bonus-events-title">Bonus Missions</h2>

      {bonusEvents.map((event) => (
        <article className="campaign-bonus-events-article" key={event.id}>
          <h3 className="campaign-bonus-events-name">{event.name}</h3>
          <p className="campaign-bonus-events-payout">$ {event.payout}</p>
        </article>
      ))}
    </section>
  )
}

export default CampaignBonusEvents
