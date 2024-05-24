import { Header } from "./src/components/Header/Header";
import { Main } from "./src/components/Main/Main";
import { Home } from "./src/pages/Home/Home";
import { popStateListener } from "./src/utils/listeners/popstate";
import "./style.css";

Header();
Main();
Home();
popStateListener();