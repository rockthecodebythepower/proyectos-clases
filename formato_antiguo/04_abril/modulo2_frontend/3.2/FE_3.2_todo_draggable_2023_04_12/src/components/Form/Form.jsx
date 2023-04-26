import "./Form.css"
import {useContext} from "react"
import {DataContext} from "../../context/DataContext"
import {useForm} from "react-hook-form"
import {nanoid} from "nanoid"

const Form = () => {
  const {data, setData} = useContext(DataContext)
  const {register, handleSubmit, resetField} = useForm()

  const onSubmit = (input) => {
    const id = nanoid()
    setData([...data, {id, name: input.name}])
    resetField("name")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" {...register("name")} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default Form
