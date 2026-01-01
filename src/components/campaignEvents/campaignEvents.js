import React from 'react'
import './campaignEvents.css'
import CampaignBonusEvents from '../campaignBonusEvents/campaignBonusEvents'

const CampaignEvents = ({ campaign }) => {
  const events = campaign?.payoutEvents ?? []

  return (
    <>
      <section>
        <h2>Main Missions</h2>
        {events
          .filter((event) => Number(event.payoutAmount) > 0)
          .filter((event) => event.eventName !== 'Install')
          .filter((event) => event.eventCategory !== 'Purchase')
          .map((event) => (
            <article key={event.campaignAppEventId}>
              <h3>{event.eventName}</h3>
              <p>$ {Number(event.payoutAmount).toFixed(2)}</p>
            </article>
          ))}
      </section>
      <CampaignBonusEvents events={events} />
    </>
  )
}

export default CampaignEvents

/*

payoutEvents: [
      {
        id: 313286,
        identifier: 'Install',
        eventName: 'Install',
        eventDescription: null,
        eventCategory: null,
        payoutAmount: 0,
        payoutTypeId: 1,
        payoutType: 'CPI',
        allowDuplicateEvents: false,
        maxTime: null,
        maxTimeMetric: null,
        enforceEventOrder: false,
        enforceMaxTimeCompletion: false,
        everflowEventId: 36325,
        appEventId: 716,
        userPayout: null,
      },

*/
