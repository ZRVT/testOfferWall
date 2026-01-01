const CampaignBonusEvents = ({ events }) => {
  const bonusEvents = events
    .filter((event) => Number(event.payoutAmount || 0) > 0)
    .filter((event) => event.eventName !== 'Install')
    .filter((event) => event.eventCategory === 'Purchase')

  return (
    bonusEvents.length > 0 && (
      <section>
        <h2>Bonus Missions</h2>
        {bonusEvents.map((event) => (
          <article key={event.campaignAppEventId}>
            <h3>{event.eventName}</h3>
            <p>$ {Number(event.payoutAmount).toFixed(2)}</p>
          </article>
        ))}
      </section>
    )
  )
}
export default CampaignBonusEvents
