import './Spinner.css';

import spinnerimg from '../../assets/spinner.png';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinnerimg} alt="Empire logo spinner" />
    </div>
  );
};

export default Spinner;
