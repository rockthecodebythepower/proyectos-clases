import "./InfoCard.css";

const InfoCard = ({ track }) => {
  return (
    <div>
      <h4>{track.title}</h4>
      <audio src={track.preview} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default InfoCard;
