import "./Link.css";

const Link = ({ children, source, icon, external, reverse }) => {
  return (
    <a className={reverse && "reverse"}
      href={source}
      target={external && "_blank"}
      referrerPolicy={external && "no-referrer"}
    >
      {icon && <img src={icon} alt={source} />}
      {children}
    </a>
  );
};

export default Link;
