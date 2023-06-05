//! el propósito de este componente o función es recibir una cita y pintarla.

import "./Quote.css";

const Quote = ({ cita }) => {

  return (
    <div className="quote">
      <h3>{cita.title.rendered}</h3>
      <p>{cita.yoast_head_json.og_description}</p>
    </div>
  );
};

export default Quote;