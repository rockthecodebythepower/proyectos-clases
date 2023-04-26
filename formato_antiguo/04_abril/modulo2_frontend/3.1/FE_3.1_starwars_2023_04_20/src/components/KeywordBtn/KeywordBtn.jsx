import './KeywordBtn.css';

const KeywordBtn = ({ keyword, changeKeyword }) => {
  return <button onClick={() => changeKeyword(keyword)}>{keyword}</button>;
};

export default KeywordBtn;
