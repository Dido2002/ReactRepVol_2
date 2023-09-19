// 8. Custom dropdown(select)
// Създайте преизползваемо падащо меню със специфичен стил приемащ като props
// текста над менюто, списъка с елементите и функцията при onChange.
import Dropdown from './Dropdown';

import React,{useState} from 'react';

export default function App07(){
    const options = [
        {label: 'Option 1', value: 1},
        {label: 'Option 2', value: 2},
        {label: 'Option 3', value: 3}
    ]
    const cities = [
        {label: 'Sofia', value: 1},
        {label: 'Plovdiv', value: 2},
        {label: 'Varna', value: 3}
    ]
    return(
        <div>
            <Dropdown
                label = "Please select option"
                options={options}
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            />
              <Dropdown
                label = "Please select city"
                options={cities}
                onChange={(e) => {
                    alert(e.target.value);
                }}
            />
        </div>
    );
}