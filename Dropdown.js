import './Dropdown.css';
import React from 'react';

export default function Dropdown({label,options,onChange}){
    
    function renderOption(option) {
    return(
        <option value={option.value}>
        {option.label}
    </option>
    );
    }

    return(
        <div className = "dropdown">
            <label className = "dd-label">
                {label}
            </label>
            <select className = "dd-select" onChange={onChange}>
                <option value="">Select</option>
                {options.map(renderOption)}
            </select>
        </div>
    );
}