import "./Flex.css";

const Flex = ({ children, flexDir = "row" }) => {

  return (
    <div className="flex" style={{ flexDirection: flexDir }}>
        {children}
    </div>
  )
}

export default Flex;