import "./Grid.css";

const Grid = ({ children, gridStyles }) => {
  return (
    <div className="display-grid" style={gridStyles}>
      {children}
    </div>
  );
};

export default Grid;