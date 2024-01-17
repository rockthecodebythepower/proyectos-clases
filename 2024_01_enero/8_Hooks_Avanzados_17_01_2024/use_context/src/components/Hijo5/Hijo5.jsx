import { useContext } from 'react';
import './Hijo5.css';
import { AppContext } from '../../Providers/AppContext';

const Hijo5 = () => {

  const { datoDeHijo5, mode } = useContext(AppContext);

  return (
    <div className='hijo5'>
        <h5 className={mode}>{ datoDeHijo5 }</h5>
    </div>
  );
};

export default Hijo5;