import React,{useState} from 'react';
import Listtt from './Listtt';
// 11. Име и описание
// Създайте компонент List приемащ масив от обекти, като всеки обект има Име,
// Фамилия и описание. В компонента List имаме още един компонент ListSingleItem
// приемащ един единичен обект от масива.ListSingleItem визуализира името, фамилията
// и бутон “More info”. При натискане на бутона “More info” се визуализира описанието за
// конкретното име.


export default function App10(){
    const [items, setItems] = useState([
        {name:'Sasho', lastName:'Petkov', description:'Sasho is react developper'},
        {name:'Petko', lastName:'Petkov', description:'Sasho is react developper'},
        {name:'Ivan', lastName:'Petkov', description:'Sasho is react developper'},
        {name:'Stoyan', lastName:'Petkov', description:'Sasho is react developper'},
    ]);
   
    return(
        <div>
            <Listtt items={items}/>
        </div>
    );
}