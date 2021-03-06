import './cvDownload.css'
import cv from '../../assets/cv.png'
import cvpaper from '../../assets/cv-hector.pdf'

const CvDownload = () => {
  return (
    <div className="cvDownload">
      <a href={cvpaper} download="cv-hector-llorca">
        <img src={cv} alt="cv" />
      </a>
    </div>
  )
}

export default CvDownload
