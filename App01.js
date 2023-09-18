// Компонент с текст
// Създайте компонент с текста „Hello, how are you?“. В основния компонент създайте
// бутон и променливата isShown с първоначална стойност false. При натискане на
// бутона isShown става true и текста се показва.

import React,{useState} from "react";
import Hello from './Hello';

export default function App01(){
    const [state, setState] = useState('false');

    return(
        <div>
            <button onClick={()=> {
                setState(!state);                
            }}>
                Show Text
            </button>
            {/* {state ? <Hello/> : ''} */}
            {state && <Hello/>}
        </div>
    )
}
