import './ShowMoreBtn.css';

const ShowMoreBtn = ({ pageNum, setPageNum }) => {
  return (
    <button className="showMoreBtn" onClick={() => setPageNum(pageNum + 1)}>
      Show More
    </button>
  );
};

export default ShowMoreBtn;
