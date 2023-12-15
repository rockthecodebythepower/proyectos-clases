import "./Image.css";

const Image = ({ src, alt, imageStyles }) => {
  return (
    <img
      className="image"
      src={src}
      alt={alt}
      style={imageStyles}
    />
  );
};

export default Image;