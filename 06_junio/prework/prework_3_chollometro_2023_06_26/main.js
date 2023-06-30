import { Categories } from './src/components/Categories/Categories';
import { Header } from './src/components/Header/Header';
import { Products } from './src/components/Products/Products';
import './style.css';

const initApp = () => {

    Header();
    Categories();
    Products();

}

initApp();