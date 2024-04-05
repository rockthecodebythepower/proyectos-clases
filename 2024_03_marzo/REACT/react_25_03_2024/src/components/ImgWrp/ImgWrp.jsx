import "./ImgWrp.css"

const ImgWrp = ({ src, alt = "Alt por defecto", w = "100%", h = "50%" }) => {
  return (
    <div style={{ width: w, height: h }} className="img-wrp">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImgWrp;
