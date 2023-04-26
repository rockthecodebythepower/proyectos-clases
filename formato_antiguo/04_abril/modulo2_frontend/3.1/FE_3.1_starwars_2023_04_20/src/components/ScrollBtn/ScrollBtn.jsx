import './ScrollBtn.css';

import upicon from '../../assets/up.svg';

const ScrollBtn = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button onClick={() => goToTop()} className="goupbtn">
      <img src={upicon} alt="Go up icon" />
    </button>
  );
};

export default ScrollBtn;
