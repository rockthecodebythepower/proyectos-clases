import React, { useEffect, useState } from 'react'
import { MainWrp, Option, Select, Title } from './Main.styles'
import { BASIC_URL } from '../../data/URL';
import Characters from '../Characters/Characters';
import Locations from '../Locations/Locations';
import Episodes from '../Episodes/Episodes';

const Main = () => {

    const [selectValue, setSelectValue] = useState("character");
    const [data, setData] = useState();

    useEffect(() => {

      fetch(BASIC_URL + selectValue).then((res) => res.json()).then((res) => setData([...res.results]));

    }, [selectValue]);

  return (
    <MainWrp>
        <Title>Rick y morty - styled components</Title>
        <Select onChange={(e) => setSelectValue(e.target.value)}>
            <Option value="character">Characters</Option>
            <Option value="location">Locations</Option>
            <Option value="episode">Episodes</Option>
        </Select>
        {selectValue === "character" && <Characters data={data}/>}
        {selectValue === "location" && <Locations data={data}/>}
        {selectValue === "episode" && <Episodes data={data}/>}
    </MainWrp>
  )
}

export default Main;