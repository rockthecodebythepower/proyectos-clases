import { useContext } from 'react';
import Hijo3 from '../Hijo3/Hijo3';
import './Hijo2.css';
import { AppContext } from '../../Providers/AppContext';

const Hijo2 = () => {

  const { datoDeHijo5, mode } = useContext(AppContext);

  return (
    <div className='hijo2'>
        <Hijo3/>
        <h2 className={mode}>{ datoDeHijo5 }</h2>
    </div>
  );
};

export default Hijo2;