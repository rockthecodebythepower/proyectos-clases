import CopyToClipboard from "react-copy-to-clipboard"
import {useState} from "react"
import Button from "../styled/Button"

const CopyBtn = ({text}) => {
  const [isCopied, setIsCopied] = useState(false)

  const setCopied = () => {
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }
  return (
    <CopyToClipboard text={text}>
      <Button onClick={() => setCopied()}>
        {isCopied ? (
          <span>Copiado!</span>
        ) : (
          <span className="material-symbols-outlined">content_copy</span>
        )}
      </Button>
    </CopyToClipboard>
  )
}

export default CopyBtn
