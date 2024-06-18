import "./Form.css";

const Form = ({ submit, children }) => {
  return (
    <form onSubmit={submit} className="form_main">
        {children}
    </form>
  )
}

export default Form