import './NotFound.css';

import img404 from '../../assets/404.jpeg';

const NotFound = () => {
  return (
    <main className="notfound">
      <img src={img404} alt="404 Not Found Death Star" />
      <h2>THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.</h2>
      <h3>Try something else?</h3>
    </main>
  );
};

export default NotFound;
