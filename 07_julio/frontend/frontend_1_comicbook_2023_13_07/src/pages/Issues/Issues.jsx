import { useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import './Issues.css';

const Issues = () => {
  const [issueName, setIssueName] = useState('');
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const searchIssues = async (ev) => {
    ev.preventDefault();
    setIsLoaded(false);
    const data = await fetch(
      `https://comicvine.gamespot.com/api/search/?api_key=${
        import.meta.env.VITE_API_KEY
      }&format=json&query=${issueName}&resources=issue&limit=30`
    );
    const json = await data.json();
    setResults(json.results);
    console.log(json.results);
    setIsLoaded(true);
    setIssueName('');
  };

  return (
    <main className="issues">
      <h2>Issues</h2>
      <form onSubmit={searchIssues}>
        <input
          type="text"
          placeholder="Issue name..."
          value={issueName}
          onInput={(ev) => setIssueName(ev.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <section>
        {isLoaded
          ? (
              results.map((item) => (
            <article key={item.id}>
              <a href={item.site_detail_url} target="_blank" rel="noreferrer">
                <img src={item.image.original_url} alt={item.name} />
              </a>
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

export default Issues;
