import React,{useState} from 'react';
import List from './list/List';


export default function App08(){
    const items = [
        {icon: 'fa fa-pencil', title:'Example', description: 'Example description'},
        {icon: 'fa fa-pencil', title:'Example', description: 'Example description'},
        {icon: 'fa fa-pencil', title:'Example', description: 'Example description'}
    ];
    return(
        <div>
            <List
            item = {items}
            width = {'30%'}
            direction = {'row'}
            
            />
        </div>
    );
}