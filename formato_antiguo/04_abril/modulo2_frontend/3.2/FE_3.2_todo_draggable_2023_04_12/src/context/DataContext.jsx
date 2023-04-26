import {createContext, useState, useEffect} from "react"

export const DataContext = createContext()

export const DataList = ({children}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  )
}
