import "./Flex.css";

const Flex = ({ children, direction = "row", gap= "none", wrap = "no-wrap" }) => {
  return <div className={`flex-container ${direction} ${gap} ${wrap}`}>{children}</div>;
};

export default Flex;
