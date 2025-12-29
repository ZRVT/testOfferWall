import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import CampaignView from './campaign'

function OfferWall() {
  return (
    <>
      <CampaignView />
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<OfferWall />)
