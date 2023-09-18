// Списък с предмети
// Създайте списък с предмети (ul, li). Когато потребителя щракне върху даден предмет
// цвета на фона на този предмет се променя.


import React,{useState} from "react";
import './App02.css';

function App02(){

    const [items,setItems] = useState(['Porche', 'Mercedes', 'Audi', 'BMW']);
    const [isHighlighted,setIsHighlighted] = useState([false,false,false,false]); 

    function handleClick(index){
        isHighlighted[index] = !isHighlighted[index];
        setIsHighlighted([...isHighlighted])
    }

    return(
        <div>
            <ul>
                {items.map((item,index) => (
                    <li className={isHighlighted[index] ? 'bg-blue' : ''} key={index} onClick={() => {handleClick(index)}}>
                        {item} - {index}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App02;

