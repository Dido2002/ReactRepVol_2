import React,{useState} from 'react';
import Helloo from './Helloo';

export default function App05(){
    const [nameExample,setNameExample] = useState('Petur');
    return(
        <div>
            <Helloo name="Gosho"/>
            <Helloo name={"Pesho"}/>
        </div>
    )
}