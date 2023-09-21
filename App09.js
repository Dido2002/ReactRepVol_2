import React,{useState} from 'react';
import Listt from './Listt';
// 10. Добавяне, премахване
// Създайте формичка с input поле и бутон за добавяне. Добавените елементи се добавят
// в неподреден списък, като това е отделен компонент. Показва въведената стойност +
// бутон за изтриване. При натискане бутона за изтриване елемента се премахва от
// списъка.

export default function App09(){
    const[items, setItems] = useState([]);
    const [inputValue, SetInputValue] = useState('');
    return(
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onInput = {(e) => {
                        SetInputValue(e.target.value);
                    }}
                />
                <button onClick={() => {
                    items.push(inputValue)
                    setItems([...items]);  // UPDATE THE STATE
                    SetInputValue('');
                }}>Add
                </button>
            </div>
            <div>
                <Listt 
                    items={items}
                    delete={(index) => {
                        items.splice(index,1);
                        setItems([...items]);
                    }}
                />
            </div>
        </div>
    );
}