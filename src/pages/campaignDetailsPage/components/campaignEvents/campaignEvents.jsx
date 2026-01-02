import './campaignEvents.css'

const CampaignEvents = ({ campaign }) => {
  const events = campaign?.payoutEvents ?? []

  return (
    <section className="campaign-events-section">
      <h2 className="campaign-events-title">Main Missions</h2>
      {events
        .filter((event) => Number(event.payoutAmount) > 0)
        .filter((event) => event.eventName !== 'Install')
        .filter((event) => event.eventCategory !== 'Purchase')
        .map((event) => (
          <article
            className="campaign-events-article"
            key={event.campaignAppEventId}
          >
            <h3 className="campaign-events-name">{event.eventName}</h3>
            <p className="campaign-events-payout">
              $ {Number(event.payoutAmount).toFixed(2)}
            </p>
          </article>
        ))}
    </section>
  )
}

export default CampaignEvents
