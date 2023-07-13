import { useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import './Characters.css';

const Characters = () => {
  const [characterName, setCharacterName] = useState('');
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const searchCharacters = async (ev) => {
    ev.preventDefault();
    setIsLoaded(false);
    const data = await fetch(
      `https://comicvine.gamespot.com/api/search/?api_key=${
        import.meta.env.VITE_API_KEY
      }&format=json&query=${characterName}&resources=character&limit=30`
    );
    const json = await data.json();
    setResults(json.results);
    console.log(json.results);
    setIsLoaded(true);
    setCharacterName('');
  };

  return (
    <main className="characters">
      <h2>Characters</h2>
      <form onSubmit={searchCharacters}>
        <input
          type="text"
          placeholder="Character name..."
          value={characterName}
          onInput={(ev) => setCharacterName(ev.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <section>
        {isLoaded
          ? (
              results.map((item) => (
            <article className="cart" key={item.id}>
              <div>
                <a href={item.site_detail_url} target='_blank' rel="noreferrer">
                  <h3>{item.name}</h3>
                </a>

                <h4>{item.real_name}</h4>
                <h5>{item.origin.name}</h5>
                <p>{item.deck}</p>
              </div>
              <img src={item.image.original_url} alt={item.name} />
            </article>
              ))
            )
          : (
          <Spinner />
            )}
      </section>
    </main>
  );
};

export default Characters;
