import Image from "../../atoms/Image/Image";
import "./ImgWrp.css";

const ImgWrp = ({ className, alt, src, imageStyles, funct = () => {} }) => {
  return (
    <div className={`img-wrp ${className}`} onClick={funct}>
      <Image alt={alt} src={src} imageStyles={imageStyles}/>
    </div>
  );
};

export default ImgWrp;