import React, { useEffect, useState } from "react";
import {
  LocationDimension,
  LocationName,
  LocationWrp,
} from "./Location.styles";
import Resident from "../Resident/Resident";

const Location = ({ location }) => {

    const [residents, setResidents] = useState([]);

    useEffect(() => {

        if (location.residents) {
            setResidents(location?.residents?.slice(0, 4));
        }

    }, [location])

  return (
    <LocationWrp $imagen="https://static.posters.cz/image/1300/art-photo/rick-morty-planet-i112357.jpg">
      <LocationName>{location.name}</LocationName>
      <LocationDimension as="p">{location.dimension}</LocationDimension>
      
      {residents.map((resident) => <Resident resident={resident} key={resident}/>)}
    </LocationWrp>
  );
};

export default Location;
