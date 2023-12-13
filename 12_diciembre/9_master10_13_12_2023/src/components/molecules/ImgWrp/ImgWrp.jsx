import Image from "../../atoms/Image/Image";
import "./ImgWrp.css";

const ImgWrp = ({ className, alt, src, imageStyles }) => {
  return (
    <div className={`img-wrp ${className}`}>
      <Image alt={alt} src={src} imageStyles={imageStyles}/>
    </div>
  );
};

export default ImgWrp;