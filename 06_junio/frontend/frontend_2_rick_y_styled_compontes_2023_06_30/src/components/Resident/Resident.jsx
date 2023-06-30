import React, { useEffect, useState } from "react";
import { IMG, ImgCharacter } from "./Resident.styles";

const Resident = ({ resident }) => {
  const [residente, setResidente] = useState();

  useEffect(() => {
    fetch(resident)
      .then((res) => res.json())
      .then((res) => setResidente({ ...res }));
  }, []);

  return (
    <>
      {residente && (
        <ImgCharacter>
          <IMG src={residente.image} />
        </ImgCharacter>
      )}
    </>
  );
};

export default Resident;
