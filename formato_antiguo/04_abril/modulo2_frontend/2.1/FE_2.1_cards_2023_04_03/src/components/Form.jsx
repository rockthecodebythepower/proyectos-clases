const Form = ({setItem, item}) => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={item.name}
        onChange={(ev) =>
          setItem({
            ...item,
            name: ev.target.value,
          })
        }
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={item.price}
        onChange={(ev) =>
          setItem({
            ...item,
            price: ev.target.value,
          })
        }
      />
    </form>
  )
}

export default Form
