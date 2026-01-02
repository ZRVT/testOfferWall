import './campaignBonusEvents.css'

const CampaignBonusEvents = ({ campaign }) => {
  const events = campaign?.payoutEvents ?? []

  const bonusEvents = events
    .filter((event) => Number(event.payoutAmount || 0) > 0)
    .filter((event) => event.eventName !== 'Install')
    .filter((event) => event.eventCategory === 'Purchase')

  return (
    bonusEvents.length > 0 && (
      <section className="campaign-bonus-events-section">
        <h2 className="campaign-bonus-events-title">Bonus Missions</h2>
        {bonusEvents.map((event) => (
          <article
            className="campaign-bonus-events-article"
            key={event.campaignAppEventId}
          >
            <h3 className="campaign-bonus-events-name">{event.eventName}</h3>
            <p className="campaign-bonus-events-payout">
              $ {Number(event.payoutAmount).toFixed(2)}
            </p>
          </article>
        ))}
      </section>
    )
  )
}
export default CampaignBonusEvents
