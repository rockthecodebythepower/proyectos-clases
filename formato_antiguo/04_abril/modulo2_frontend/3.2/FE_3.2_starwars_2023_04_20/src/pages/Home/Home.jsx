import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <h2>Home</h2>
      <iframe
        data-testid="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HnzNZ0Mdx4I?controls=0&mute=1&showinfo=0&rel=0&autoplay=1&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
};

export default Home;
