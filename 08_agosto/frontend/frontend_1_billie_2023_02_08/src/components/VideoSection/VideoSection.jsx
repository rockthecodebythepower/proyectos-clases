import "./VideoSection.css";

const VideoSection = () => {
  return (
    <iframe
      className="video"
      
      src="https://www.youtube.com/embed/gBRi6aZJGj4"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoSection;
