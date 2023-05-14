import { useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import Records from './components/Records/Records'
import { API } from './shared/API/API';

function App() {

  const [records, setRecords] = useState([]);

  const getAllRecords = () => {
    API.get("/records").then((res) => setRecords(res.data));
  }

  return (
    <>
      <Records getAllRecords={getAllRecords} records={records}/>
      <Form getAllRecords={getAllRecords} setRecords={setRecords} records={records}/>
    </>
  )
}

export default App
