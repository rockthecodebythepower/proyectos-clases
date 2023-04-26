import './About.css';

const About = () => {
  return (
    <main className="about">
      <h2>About</h2>
      <p data-testid="about-content">
        The Star Wars Databank API is a REST API based on the galatic saga Star Wars. You
        will have access to hundreds of characters, droids, species, locations,
        organizations, vehicles and more. The Star Wars Databank API is filled with the
        official information from the Databank.
      </p>
    </main>
  );
};

export default About;
