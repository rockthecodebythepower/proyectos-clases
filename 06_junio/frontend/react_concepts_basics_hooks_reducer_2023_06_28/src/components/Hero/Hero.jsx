import "./Hero.scss";

const Hero = ({ state }) => {

    const { primary, secondary, terciary, text, stroke } = state;

  const hero = {
    backgroundColor: primary && primary,
  };

  const span = {
    color: terciary && terciary,
  };

  return (
    <div id="hero" style={hero}>
      <div>
        <h1>
          Lessons and insights <span style={span}>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button>Register</button>
      </div>
      <img src="/assets/Illustration.png" />
    </div>
  );
};

export default Hero;
