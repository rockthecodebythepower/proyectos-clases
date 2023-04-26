import {useRef} from "react"

const ImagePreview = ({image, video, setImage, setVideo}) => {
  const fileInputRef = useRef(null)

  const preview = (ev) => {
    //Como estamos tratando con ficheros vamos a crear un nuevo "lector de ficheros" -> Instancia
    const reader = new FileReader()
    //Nos aseguramos que el usuario ha elegido solamente un fichero
    const selectedFile = ev.target.files[0]
    if (selectedFile) {
      reader.readAsDataURL(selectedFile)
      alert(selectedFile.name)
    }
    //Cuando el fichero se cargue por completo en el reader, vamos a diferenciar si el tipo de fichero es imagen o video
    reader.onload = (readerEvent) => {
      if (selectedFile.type.includes("image")) {
        setImage(readerEvent.target.result)
      } else if (selectedFile.type.includes("video")) {
        setVideo(readerEvent.target.result)
      }
    }
  }

  const clear = () => {
    setImage(null)
    setVideo(null)
  }

  return (
    <div>
      <div className="file-input">
        <input
          type="file"
          accept="image/*, video/*"
          ref={fileInputRef}
          onChange={preview}
          hidden
        />
        <button onClick={() => fileInputRef.current.click()}>
          Choose Media
        </button>
        <button onClick={clear}>❌</button>
      </div>
      <div className="preview">
        {image != null && <img src={image} alt="Image preview" />}
        {video !== null && <video controls src={video}></video>}
      </div>
    </div>
  )
}

export default ImagePreview
