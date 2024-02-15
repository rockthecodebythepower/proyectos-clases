import { API } from "../../utils/API";
import "./Episodes.css";

export const Episodes = async () => {
    const episodes = await API("episode");

}