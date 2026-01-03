import './campaignEvents.css'

const CampaignEvents = ({ campaign }) => {
  const events = campaign?.events ?? []

  const mainEvents = events
    .filter((e) => e.payout > 0)
    .filter((e) => e.name !== 'Install')
    .filter((e) => e.category !== 'Purchase')

  return (
    <section className="campaign-events-section">
      <h2 className="campaign-events-title">Main Missions</h2>

      {mainEvents.map((event) => (
        <article className="campaign-events-article" key={event.id}>
          <h3 className="campaign-events-name">{event.name}</h3>
          <p className="campaign-events-payout">$ {event.payout.toFixed(2)}</p>
        </article>
      ))}
    </section>
  )
}

export default CampaignEvents
