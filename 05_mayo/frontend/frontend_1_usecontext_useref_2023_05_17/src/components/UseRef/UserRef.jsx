import React, { useRef, useState } from 'react'

const UserRef = () => {

    const [num, setNum] = useState(0);

    const valorNoMutable = useRef("pepito");
    //! no va a cambiar o mutar nunca durante la vida útil del componente

    console.log("me re renderizo");

    const inputRef = useRef(null);

    const getValue = () => {
        console.log(inputRef.current.className = "juanillo");
    }

  return (
    <div>
        <input onInput={() => getValue()} ref={inputRef} className='pepito'/>
        <p onClick={() => setNum(num + 1)}>sumaaaaaaaa</p>
        <p>{valorNoMutable.current}</p>
    </div>
  )
}

export default UserRef