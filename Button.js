import React from 'react';

export default function Button(props){
    const btnStyles = {
        border: 'unset',
        padding: '5px 30px',
        textTransform: 'uppercase',
        color:props.color ?? 'white',
        background: props.background ?? 'orange'
    };
    return(
        <>
            <button onClick={props.onClick} style={btnStyles}>
                {props.title}
            </button>
        </>
    );
}