import clickLogic from '../../utils/clickLogic'
import './DownloadButton.css'

const DownloadButton = ({ campaign }) => {
  return (
    <button
      className="download-button"
      onClick={() => clickLogic(campaign.tracking.clickUrl)}
    >
      Download: {campaign.app.title} now!
    </button>
  )
}
export default DownloadButton
