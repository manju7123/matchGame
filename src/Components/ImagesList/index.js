import './index.css'

const ImagesList = props => {
  const {imageItems, onImageClick} = props
  const {imageUrl, thumbnailUrl} = imageItems

  const selectedImage = () => {
    onImageClick(imageUrl)
  }

  return (
    <li className="image-items">
      <button className="btn-element" type="button" onClick={selectedImage}>
        <img className="btn-images" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImagesList
