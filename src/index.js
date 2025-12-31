import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import CampaignView from './components/campaign'
// import NewCampaigns from './newCampaigns'

function OfferWall() {
  return (
    <>
      <CampaignView />
      {/*<NewCampaigns />*/}
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<OfferWall />)
