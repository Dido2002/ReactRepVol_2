import React,{useState} from 'react';

export default function App04(){
    const[items, setItems] = useState(['Item 1','Item 2','Item 3']);
    const[counter, setCounter] = useState(0);
    
    function renderLi(item){
        return(

            <li>
                <input
                    type="checkbox"
                    onClick={(e) => {

                        setCounter(e.target.checked ? counter + 1 : counter - 1);
                        // if(e.target.checked){
                        //     setCounter(counter + 1);
                        // }
                        // else{
                        //     setCounter(counter - 1);
                        // }

                    }}
                />
                <span>{item}</span>
            </li>
        )
    }
    return(
        <div>
            <div>
                Counter: {counter}
            </div>
            {items.map(renderLi)}
        </div>
    )
}