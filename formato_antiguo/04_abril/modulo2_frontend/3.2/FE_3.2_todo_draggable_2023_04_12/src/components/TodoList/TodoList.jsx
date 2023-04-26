import "./TodoList.css"
import {useContext} from "react"
import {DataContext} from "../../context/DataContext"
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"

const TodoList = () => {
  const {data, setData} = useContext(DataContext)

  const deleteItem = (id) => {
    const newData = data.filter((item) => item.id !== id)
    setData(newData)
  }

  const handleEnd = (ev) => {
    //Si no tiene un destino porque lo estamos soltando en la misma posición retornamos y nos salimos de la función
    if (!ev.destination) {
      return
    }
    //Hacemos una copia de data
    const newData = [...data]
    //Encontramos el item que el usuario ha arrastrado
    const [reordedData] = newData.splice(ev.source.index, 1)
    //Cambiamos el origen por el destino
    newData.splice(ev.destination.index, 0, reordedData)
    //Seteamos data con esta nueva información
    setData(newData)
  }

  return (
    <div>
      {/*  Le decimos a React que nuestros elementos de TodoList tienen la habilidad de ser "arrastrados" */}
      <DragDropContext onDragEnd={handleEnd}>
        {/* Le indicamos el espacio donde vamos a soltar los elementos con un id único para que sepa donde apuntar */}
        <Droppable droppableId="to-dos">
          {/* El objeto provided contiene las props para darle estilo a esta lista y para controlar que está pasando en cada uno de los elementos */}
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {/*  Draggable indica que el usuario pueda arrastrar por la pantalla los li */}
                  {(provided, snapshot) => (
                    <li
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      key={item.id}
                      className={
                        snapshot.isDragging ? "selected" : "not-selected"
                      }
                    >
                      {/* Si el usuario esta arrastrando un elemento la clase pasará a ser selected y cuando lo suelte será not-selected*/}
                      {item.name}
                      <button onClick={() => deleteItem(item.id)}>❌</button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {/*  placeholder crea un espacio vacio en la lista para simular el
              hitbox de cada uno de los elementos */}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default TodoList
