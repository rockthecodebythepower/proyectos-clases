import "./Flex.css";

const Flex = ({ flexStyles, children }) => {
  return (
    <div
      className="display-flex"
      style={flexStyles}
    >
      {children}
    </div>
  );
};

export default Flex;
