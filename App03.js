// Login форма
// Създайте login форма с потребителско име и парола. Създайте функция login, която се
// изпълнява при натискането на бутона Login. Ако потребителя е въвел за
// потребителско име “user1” и парола “user1pass” формата се скрива и се показва
// Welcome, User1.


import React,{useState} from 'react';

export default function App03(){
    const [formData, setFormData] = useState({
        username : '',
        password :''
    });
    const [isLogged, setIsLogged] = useState(false);

    function handleInput(event){
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});

    }
    function login(){
        if(formData.username == 'user1' && formData.password == 'user1pass'){
            setIsLogged(true);
        }

    }
    return(
        <div>
            {!isLogged &&
                <div>
                    <div>
                        <label>Username</label>
                        <input
                        type="text"
                        name = "username"
                        onInput = {handleInput}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                        type="password"
                        name = "password"
                        onInput = {handleInput}
                        />
                    </div>
                    <div>
                        <button onClick={login} type="button">Login</button>
                    </div>
                </div>
            }
            {isLogged && <div>Hello, user1!</div>}
        </div>
    );
}   