import React,{useState} from 'react';
import Button from './Button';

export default function App05(){

    return(
        <div>
            <Button
                tittle = "Click"
                onClick={()=>{
                    console.log('Hello')
                }}
                color="red"
                background = "blue"
            />
            {'   '}
            <Button
                title = "Hello"
                onClick={()=>{
                    console.log('Example');
                }}
                color={'green'}
                background={'yellow'}
            />
        </div>
    );
}